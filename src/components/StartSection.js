import React from 'react';
import styles from '../styles/StartSection.module.scss'
import Button from './Button';
import { animalsData } from '../utils/animalsData';



const StartSection = () => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.bigTitle}>Get your random animal picture</h1>
      <h3 className={styles.smTitle}>choose an animal</h3>
      <div className={styles.links}>
        {animalsData.map(anialData => <Button to={`/${anialData.animal}`}>{anialData.animal[0].toUpperCase() + anialData.animal.slice(1)}</Button>)}
      </div>
    </section>
  );
};

export default StartSection;
