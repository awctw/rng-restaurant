import classes from "./FavouriteRestaurant.module.css";

const FavouriteRestaurant = (props) => {
  return (
    <div className={classes.restaurant}>
      {props.restaurant}
      {props.children}
    </div>
  );
};

export default FavouriteRestaurant;
