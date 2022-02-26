import { Star } from "../ui/Star";
import classes from "./FavouriteRestaurant.module.css";

const FavouriteRestaurant = (props) => {
  return (
    <div className={classes.restaurant}>
      {props.restaurant}
      {props.children}
      {/* <Star restaurant={props.restaurant} /> */}
    </div>
  );
};

export default FavouriteRestaurant;
