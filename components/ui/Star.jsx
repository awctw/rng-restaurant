import Image from "next/image";
import StarIcon from "../../assets/star.svg";
import StarFilledIcon from "../../assets/star-filled.svg";
import { useRouter } from "next/router";
import { useState } from "react";

export const Star = (props) => {
  const router = useRouter();

  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  const onClickHandler = () => {
    router.push("/favourites");
    console.log(props.restaurant);
  };

  return (
    <div
      onClick={onClickHandler}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {!isHovering ? (
        <Image src={StarIcon} alt="logo" width={50} height={30} />
      ) : (
        <Image src={StarFilledIcon} alt="logo" width={50} height={30} />
      )}
    </div>
  );
};
