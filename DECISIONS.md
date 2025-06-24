## What trade-offs did you make and why?

The API for Alpha Vantage is limited ls
to **25 requests per day**. I tried using different keys but couldn’t bypass the limit. As a result:

- I couldn’t implement caching strategies like **stale-while-revalidate (SWR)** since I needed predictable API responses were needed to validate caching behavior.
- I had to rely on **mocked data** for the majority of development.
- I **skipped input sanitation** (besides a simple `trim`) due to time constraints.
- Error handling was limited to the **minimum acceptable level** for basic feedback.
- Search functionality is rudimentry.

---

## What would you do with more time?

- Integrate the **live Alpha Vantage API** if more test capacity was available.
- Add **input sanitation** and use libraries like `react-toastify` for better user feedback.
- Implement **pagination**, since loading all stocks repeatedly would be costly in terms of both **performance** and **API usage**.
- Add **loading skeletons** to improve perceived performance.
- Add **debouncing** to prevent excessive API hits during search.
- Finally, implement **JWT-based authentication** so we could have users and store their personalized data like Watchlists.

---

## How would you scale this for real users?

- The app is structured using **feature based architecture** with **shared layers**, allowing easier scaling and modular development.
- Components are divided between **server components (RSC)** and **client components**, keeping initial load fast and efficient. I took a top RSC heavy and bottom client heavy approach.
- For production, I would:
  - Introduce **caching and pagination** to reduce API and rendering load.
  - Add **persistent authentication** using JWT to have users and their private watchlists.
  - Possibly also introduce **serverless functions or edge APIs** to manage rate limited 3rd party API usage.
