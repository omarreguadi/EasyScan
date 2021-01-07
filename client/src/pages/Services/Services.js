import React from 'react';
import { InfoSection } from '../../components';
import { serviceObjOne, serviceObjThree } from './Data';

function Services() {
  return (
    <>
      <InfoSection {...serviceObjOne} />
      <InfoSection {...serviceObjThree} />
    </>
  );
}

export default Services;
