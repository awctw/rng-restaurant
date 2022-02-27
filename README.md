# rng-restaurant

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

No longer want to spend time deciding where to eat from? Use this website to randomly generate restaurants from 5 different categories (Chinese, Burgers, Taiwanese, Japanese, and Feeling Lucky!). If users don't want to choose from a category they can also save generated restaurants or manually add their favourite restaurants to randomly generate from too!

This website was built using React.js, Next.js, Javascript, MongoDB, and utilizing Yelp's API.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Second, go to `node_modules/cors-anywhere/lib` and run:

```bash
npm run start
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Configuration

Create a `configs.js` file to hold the tokens needed to access Yelp's API. Add this constant to the file `export const BEARER_TOKEN = Bearer <API TOKEN>; `.
