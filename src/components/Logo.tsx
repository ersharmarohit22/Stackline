import React from 'react';
import ImageSrc from '../assets/stackline_logo.svg';

interface LogoProps {
  width: string;
  height: string;
}

const Logo : React.FC<LogoProps> = ({width,height})=>{
  return(
    <img width={width} height={height} src={ImageSrc}/>
  )
}

export default Logo;