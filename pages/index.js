import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { BEARER_TOKEN } from "../configs";

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurant, setRestaurant] = useState("");
  const [run, setRun] = useState(true);
  const [type, setType] = useState("");

  const router = useRouter();

  useEffect(() => {
    console.log(type);
    const response = fetch(
      `http://localhost:8080/api.yelp.com/v3/businesses/search?latitude=49.166592&longitude=-123.133568&categories=${type}&limit=50`,
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
      .then((data) => {
        console.log(data.businesses);
        return setRestaurants(
          data.businesses.map((restaurant) => {
            return restaurant.name;
          })
        );
      });
    return () => {
      response;
    };
  }, [run, type]);

  const onClickLuckyHandler = () => {
    if (type !== "restaurants") {
      const offset = Math.floor(Math.random() * 900);
      setType(`restaurants&offset=${offset}`);
      setRun((prevState) => !prevState);
    }
    setRestaurant(restaurants[Math.floor(Math.random() * restaurants.length)]);
  };

  const onClickJapaneseHandler = () => {
    if (type !== "japanese") {
      setType("japanese");
      setRun((prevState) => !prevState);
    }
    setRestaurant(restaurants[Math.floor(Math.random() * restaurants.length)]);
  };

  const onClickChineseHandler = () => {
    if (type !== "chinese") {
      setType("chinese");
      setRun((prevState) => !prevState);
    }
    setRestaurant(restaurants[Math.floor(Math.random() * restaurants.length)]);
  };

  const onClickBurgerHandler = () => {
    if (type !== "burgers") {
      setType("burgers");
      setRun((prevState) => !prevState);
    }
    setRestaurant(restaurants[Math.floor(Math.random() * restaurants.length)]);
  };

  const onClickTaiwaneseHandler = () => {
    if (type !== "taiwanese") {
      setType("taiwanese");
      setRun((prevState) => !prevState);
    }
    setRestaurant(restaurants[Math.floor(Math.random() * restaurants.length)]);
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
          <button className={styles.card} onClick={onClickChineseHandler}>
            <h2>Chinese &rarr;</h2>
          </button>

          <button className={styles.card} onClick={onClickBurgerHandler}>
            <h2>Burgers &rarr;</h2>
          </button>

          <button className={styles.card} onClick={onClickTaiwaneseHandler}>
            <h2>Taiwanese &rarr;</h2>
          </button>

          <button className={styles.card} onClick={onClickJapaneseHandler}>
            <h2>Japanese &rarr;</h2>
          </button>
          <button className={styles.card} onClick={onClickLuckyHandler}>
            <h2>Feeling Lucky! &rarr;</h2>
          </button>
        </div>
        <div className={styles.bubble}>{restaurant}</div>
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
