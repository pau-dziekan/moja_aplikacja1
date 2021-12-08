import React from 'react';
import ImageSlider from './componentsslider/ImageSlider';
import './slider.scss';
import { SliderData } from './componentsslider/SliderData';

function Slider() {
  return (
    <>
    <ImageSlider slides={SliderData}/>
    
    </>
  );
}

export default Slider;