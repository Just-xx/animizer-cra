import React from 'react';
import styles from '../styles/StartSection.module.scss'
import Button from './Button';

const StartSection = () => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.bigTitle}>Get your random animal picture</h1>
      <h3 className={styles.smTitle}>choose an animal</h3>
      <div className={styles.links}>
        <Button to="/dog">Dog</Button>
        <Button to="/axolotl">Axolotl</Button>
        <Button to="/cat">Cat</Button>
      </div>
    </section>
  );
};

export default StartSection;
