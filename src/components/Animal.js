import React from "react";
import { useAnimal } from "../hooks/useAnimal";
import Button from "./Button";
import { ClipLoader } from "react-spinners";
import styles from '../styles/Animal.module.scss'

const Animal = ({ animal }) => {

  const { imgUrl, isFetched, newImg, error, isVideo } = useAnimal(animal);

  return (
    <div
    className={styles.wrapper}
    style={{
      opacity: isFetched || error ? "1" : "0",
      transform: isFetched || error ? "translateY(0)" : "translateY(-20px)",
    }}
    >
      <ClipLoader
        color="#fff"
        loading={!isFetched && !error}
      />
      {error && <div className={styles.fetchError}>Unable to get image :(</div>}
      {isFetched && (
        <>

          {
            !isVideo ?
            <img
              className={styles.animalImg}
              src={imgUrl}
              alt={animal}
            /> :
            <video className={styles.animalImg} controls>
              <source src={imgUrl} type="video/mp4" />
              <source src={imgUrl} type="video/webm" />
            </video>
          }
          <div className={styles.btns}>
              <Button asHref to={imgUrl}>Download</Button>
              <Button asBtn onClick={newImg}>Next</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Animal;
