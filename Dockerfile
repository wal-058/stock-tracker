# Base App
FROM node:18-alpine AS base
WORKDIR /stock-tracker

FROM base AS deps
COPY package*.json .
RUN npm ci


# Building the app
FROM deps AS builder
WORKDIR /stock-tracker
COPY --from=deps /stock-tracker/node_modules ./node_modules
COPY . .
RUN npm run build


# Running the app
FROM node:18-alpine AS runner
WORKDIR /stock-tracker

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /stock-tracker/node_modules ./node_modules
COPY --from=builder /stock-tracker/package.json ./package.json
COPY --from=builder /stock-tracker/.next/standalone ./
COPY --from=builder /stock-tracker/.next/static ./.next/static
COPY --from=builder /stock-tracker/public ./public

EXPOSE 3000

CMD ["npm", "start"]
