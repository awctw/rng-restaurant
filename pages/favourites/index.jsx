import Head from "next/head";
import FavouritesList from "../../components/favourites/FavouritesList";
import styles from "../../styles/Home.module.css";
import { MongoClient } from "mongodb";

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
        <FavouritesList favourites={props.restaurants} />
      </main>
    </div>
  );
}

export default FavouritesPage;
