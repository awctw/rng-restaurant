import Head from "next/head";
import NewFavouriteForm from "../../components/new-favourite/NewFavouriteForm";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";

function NewFavouritePage() {
  const router = useRouter();

  const onAddNewFavouriteHandler = async (restaurantName) => {
    const response = await fetch("/api/new-favourite", {
      method: "POST",
      body: JSON.stringify({ name: restaurantName }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await response.json();

    router.push("/favourites");
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Head>
          <title>New Favourite</title>
          <meta
            name="description"
            content="Add new favourite restaurant to favourites list"
          />
        </Head>

        <h1 className={styles.title}>New Favourite Page</h1>
        <NewFavouriteForm onAddFavourite={onAddNewFavouriteHandler} />
      </main>
    </div>
  );
}

export default NewFavouritePage;
