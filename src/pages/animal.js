import React from 'react';
import Animal from '../components/Animal'
import Base from '../layouts/Layout'
import { useParams } from 'react-router-dom';

const AnimalPage = () => {

	const { animal } = useParams();

  return (
	  <Base big>
		  <Animal animal={animal} />
	  </Base>
  );
};


export default AnimalPage;
