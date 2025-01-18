import React from 'react'

interface ResetButtonProps{
  onReset: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onReset }) => {
  return (
    <button onClick={onReset}>
      Сбросить рисунок
    </button>
  )
}


export default ResetButton
