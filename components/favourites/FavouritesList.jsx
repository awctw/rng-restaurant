import FavouriteRestaurant from "../favouriteRestaurant/FavouriteRestaurant";
import classes from "./FavouritesList.module.css";

const FavouritesList = (props) => {
  return (
    <ul className={classes.list}>
      <li>
        {props.favourites.map((favourite) => (
          <FavouriteRestaurant key={favourite.id} restaurant={favourite.name} />
        ))}
      </li>
    </ul>
  );
};

export default FavouritesList;
