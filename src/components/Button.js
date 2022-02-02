import React from 'react';
import styles from '../styles/Buttons.module.scss'
import { Link } from 'react-router-dom';

const Button = ({ to, children, onClick, asHref, asBtn }) => {
  return (
    <>
      {(!asBtn && !asHref) && <Link className={styles.btn} to={to} onClick={onClick}>{children}</Link>}
      {asHref && <a className={styles.btn} href={to} onClick={onClick}>{children}</a>}
      {asBtn && <button className={styles.btn} onClick={onClick}>{children}</button>}
    </>
  )
  
};

export default Button;
