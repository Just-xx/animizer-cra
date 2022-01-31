import React from 'react';
import styles from '../styles/Buttons.module.scss'
import { Link } from 'react-router-dom';

const Button = ({ to, children, onClick, asHref }) => {
  return !asHref ?
  <Link className={styles.btn} to={to} onClick={onClick}>{children}</Link> :
  <a className={styles.btn} href={to} onClick={onClick}>{children}</a>;
};

export default Button;
