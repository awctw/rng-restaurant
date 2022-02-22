import Head from "next/head";
import { Fragment } from "react";
import styles from "../../styles/Home.module.css";

function FeelingLuckyPage() {
  return (
    <Fragment>
      <Head>
        <title>Feeling Lucky</title>
        <meta name="description" content="Randomly generated restaurant" />
      </Head>
      <div className={styles.main}>Restaurant Name</div>
    </Fragment>
  );
}

export default FeelingLuckyPage;
