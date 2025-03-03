import React from 'react'

interface UniversalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  buttonText : string;
}

const UniversalButton: React.FC<UniversalButtonProps> = ({ className ,buttonText, ...buttonProps}) => {
  return (
    <button className={className} {...buttonProps}>
      {buttonText}
    </button>
  )
}


export default UniversalButton
