import { Fragment, useRef } from "react";
import classes from "./NewFavouriteForm.module.css";

const NewFavouriteForm = (props) => {
  const inputRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enteredName = inputRef.current.value;

    props.onAddFavourite(enteredName);
  };

  return (
    <Fragment>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <div className={classes.control}>
          <label>Restaurant Name</label>
          <input ref={inputRef} type="text" required id="name" />
        </div>
        <div className={classes.actions}>
          <button>Add New Favourite Restaurant</button>
        </div>
      </form>
    </Fragment>
  );
};

export default NewFavouriteForm;
