import Head from "next/head";
import FavouritesList from "../../components/favourites/FavouritesList";
import styles from "../../styles/Home.module.css";

function FavouritesPage() {
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
        <FavouritesList favourites={["test", "test1"]} />
      </main>
    </div>
  );
}

export default FavouritesPage;
