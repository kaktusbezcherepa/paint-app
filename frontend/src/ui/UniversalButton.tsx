import React from 'react'

interface UniversalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  buttonText : string;
  imgSrc?: string;
  imgAlt?: string;
  imgWidth?: number;
  imgHeight?: number;
}

const UniversalButton: React.FC<UniversalButtonProps> = ({ 
  className,
  buttonText,
  imgSrc,
  imgAlt,
  imgHeight,
  imgWidth,
  ...buttonProps
}) => {
  return (
    <button className={className} {...buttonProps}>
      {imgSrc && (
        <img src={imgSrc} alt={imgAlt} style={{ width: imgWidth , height: imgHeight}} />
      )}
      {buttonText}
    </button>
  )
}


export default UniversalButton
