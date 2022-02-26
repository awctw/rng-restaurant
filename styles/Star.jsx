import Image from "next/image";
import StarIcon from "./star.svg";
import StarFilledIcon from "./star-filled.svg";
import { useRouter } from "next/router";
import { useState } from "react";

export const Star = () => {
  const router = useRouter();

  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  const onClickHandler = () => {
    router.push("/favourites");
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
