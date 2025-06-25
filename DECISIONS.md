## What trade-offs did you make and why?

The API for Alpha Vantage was limited to **25 requests per day**. I tried using different keys but couldn’t bypass the limit. Then, I researched and found Finnhub that a significally higher limit. There are some remanents of that still in the code.

Other than that:
- I **skipped input sanitation** (besides a simple `trim`) due to time constraints.
- Error handling was limited to the **minimum acceptable level** for basic feedback.

---

## What would you do with more time?

- Add **input sanitation** and use libraries like `react-toastify` for better user feedback.
- Implement **pagination**, since loading all stocks repeatedly would be costly in terms of both **performance** and **API usage**.
- Add **loading skeletons** to improve perceived performance.
- Finally, a implement **JWT-based authentication** so we could have users and store their personalized data like Watchlists.

---

## How would you scale this for real users?

- The app is structured using **feature based architecture** with **shared layers**, allowing easier scaling and modular development.
- Components are divided between **server components (RSC)** and **client components**, keeping initial load fast and efficient. I took a top RSC heavy and bottom client heavy approach.
-I implemented caching strategies such as Stale-While-Revalidate (SWR) and Incremental Static Regeneration (ISR) to optimize data freshness, reduce API load, and enhance overall performance without compromising user experience.
- I implemented caching strategies:
  - **Stale-While-Revalidate (SWR)** on the client for real-time-ish updates with efficient revalidation.
  - **Incremental Static Regeneration** (ISR) on the server for statically cached pages that update automatically, reducing redundant API calls.

- For production, I would also:
  - Introduce **pagination and smart caching** to handle high volume stock queries and reduce API pressure.
  - Add **persistent authentication** using JWT to have users and their private watchlists.
  - Possibly also introduce **serverless functions or edge APIs** to manage rate limited 3rd party API usage.
