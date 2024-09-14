import React from 'react';

interface TextDisplayProps {
  text: string;
}

const TextDisplay: React.FC<TextDisplayProps> = ({ text }) => {
  return (
    <div>
      <p style={{color: 'white', fontFamily: 'DM mono', margin: '30px 0'}}>{text}</p>
    </div>
  );
};

export default TextDisplay;
