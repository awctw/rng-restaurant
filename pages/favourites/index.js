import Head from "next/head";
import { Fragment } from "react";
import styles from "../../styles/Home.module.css";

function FavouritesPage() {
  return (
    <Fragment>
      <Head>
        <title>Feeling Lucky</title>
        <meta
          name="description"
          content="Randomly generated favourite restaurant"
        />
      </Head>
      <div className={styles.main}>Favourite Page</div>
    </Fragment>
  );
}

export default FavouritesPage;
