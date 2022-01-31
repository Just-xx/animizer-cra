import React from "react";
import Background from '../components/Background'
import Logo from '../components/Logo'

const Base = ({ children, big }) => {
  return (
    <>
      <Logo />
      <div class="main-wrapper">
        <Background big={big}>{children}</Background>
      </div>
    </>
  );
};

export default Base;
