import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { BEARER_TOKEN } from "../configs";

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [run, setRun] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const response = fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?latitude=49.166592&longitude=-123.133568&categories=restaurants`,
      {
        method: "GET",
        headers: {
          Authorization: BEARER_TOKEN,
          Accept: "application/json",
          "Content-Type": "application/json",
          "User-Agent": "any-name",
        },
      }
    )
      .then((response) => response.json())
      .then((data) =>
        setRestaurants(
          data.businesses.map((restaurant) => {
            return restaurant.name;
          })
        )
      );
    return () => {
      response;
    };
  }, [run]);

  const onClickHandler = () => {
    setRun(true);
    router.push("/feeling-lucky");
    console.log(restaurants[Math.floor(Math.random() * restaurants.length)]);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>RNG Restaurant</title>
        <meta
          name="description"
          content="Random generator for restaurants nearby"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>RNG Restaurant</h1>

        <p className={styles.description}>
          Can&apos;t decide what to eat tonight? Let the generator decide for
          you!
        </p>

        <div className={styles.grid}>
          <button className={styles.card}>
            <h2>Chinese &rarr;</h2>
          </button>

          <button className={styles.card}>
            <h2>Western &rarr;</h2>
          </button>

          <button className={styles.card}>
            <h2>Taiwanese &rarr;</h2>
          </button>

          <button className={styles.card}>
            <h2>Japanese &rarr;</h2>
          </button>
          <button className={styles.card} onClick={onClickHandler}>
            <h2>Feeling Lucky! &rarr;</h2>
          </button>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
