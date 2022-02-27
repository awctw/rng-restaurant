import Head from "next/head";
import FavouritesList from "../../components/favourites/FavouritesList";
import styles from "./Favourites.module.css";
import { MongoClient } from "mongodb";
import { useState } from "react";

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://test:123@cluster0.pabyt.mongodb.net/RNGRestaurant?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("restaurants");

  const favouriteRestaurants = await meetupsCollection.find().toArray();

  client.close;

  return {
    props: {
      restaurants: favouriteRestaurants.map((restaurant) => {
        return {
          name: restaurant.name,
          id: restaurant._id.toString(),
        };
      }),
    },
    revalidate: 1,
  };
};

function FavouritesPage(props) {
  const [random, setRandom] = useState(false);
  const [selected, setSelected] = useState({});

  const onClickRandomHandler = () => {
    setRandom(true);

    setSelected(
      props.restaurants[Math.floor(Math.random() * props.restaurants.length)]
    );
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Head>
          <title>Favourites Page</title>
          <meta
            name="description"
            content="Favourite restaurants to randomly pick from"
          />
        </Head>
        <h1 className={styles.title}>Favourites Page</h1>
        {!random && <FavouritesList favourites={props.restaurants} />}
        {random && <div className={styles.restaurant}>{selected.name}</div>}

        <div className={styles.actions}>
          <button onClick={onClickRandomHandler}>Random Restaurant</button>
        </div>
      </main>
    </div>
  );
}

export default FavouritesPage;
