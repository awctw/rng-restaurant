import classes from "./MainNavigation.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function MainNavigation() {
  const router = useRouter();

  const onClickHomeHandler = () => {
    router.push("/");
  };

  return (
    <header className={classes.header}>
      <div onClick={onClickHomeHandler} className={classes.logo}>
        RNG Restaurant
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/favourites">Favourites</Link>
          </li>
          <li>
            <Link href="/new-favourite">Add New Favourite</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
