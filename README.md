# Stock Tracker

## Made with
- [Next.js 15+ (App Router)](https://nextjs.org/docs)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Alpha Vantage API](https://www.alphavantage.co/documentation/) *(mocked for development)*

- Docker (optional deployment)

## Installation

### 1. Clone the repo

```bash
git clone https://github.com/your-username/stock-tracker.git
cd stock-tracker
```

  

### 2. Install dependencies
```bash
npm  install
```

---

## Run with

### With Development

```bash
npm  run  dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.
  

## With Docker


### 1. Build the Docker image

```bash
docker  build  -t  stock-tracker  .

```

### 2. Run the container

```bash
docker  run  -p  3000:3000  stock-tracker
```

App will be available at [http://localhost:3000](http://localhost:3000)


---

  

## Environment Variables

To enable Alpha Vantage API (limited to 25 req/day on free plan), create a `.env` file:

```env
PLATFORM_KEY=your_alpha_vantage_api_key
```

---

## Features

- Search stocks by symbol or name
- Add/remove to **watchlist** (stored in `localStorage`)
- Fully client-hydrated interactions
- Optimized for fast initial load using React Server Components

---

  

##  Limitations

- Uses mock data due to API rate limits
- No persistent backend or authentication
- Watchlist stored only locally 

---

## License

MIT - [Waleed Ahmed](https://github.com/wal-058)