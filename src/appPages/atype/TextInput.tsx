import React, { useState, useEffect, RefObject } from 'react';
import './TextInput.css';

interface TextInputProps {
  text: string;
  onComplete: (correctWords: number) => void;
  inputEnabled: boolean;
  inputRef: RefObject<HTMLInputElement>;
}

const TextInput: React.FC<TextInputProps> = ({ text, onComplete, inputEnabled, inputRef }) => {
  const [input, setInput] = useState('');
  const [highlightedText, setHighlightedText] = useState('');

  useEffect(() => {
    updateHighlightedText(input);
  }, [input]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!inputEnabled) return;
    setInput(e.target.value);
  };

  const updateHighlightedText = (value: string) => {
    const originalText = text.split('');
    const inputText = value.split('');
    const highlighted = originalText.map((char, index) => {
      const inputChar = inputText[index] || '';
      if (index < inputText.length) {
        if (inputChar === char) {
          return `<span class="correct">${inputChar}</span>`;
        } else {
          return `<span class="error">${inputChar}</span>`;
        }
      }
      return `<span class="original">${char}</span>`;
    }).join('');

    setHighlightedText(highlighted);

    if (value === text) {
      const wordCount = text.split(' ').length;
      onComplete(wordCount);
    }
  };

  return (
    <div className="input-container">
      <div
        className="highlighted-text"
        dangerouslySetInnerHTML={{ __html: highlightedText }}
      />
      <input
        type="text"
        value={input}
        onChange={handleChange}
        className="text-input"
        disabled={!inputEnabled}
        ref={inputRef}
        placeholder='Typing...'
      />
    </div>
  );
};

export default TextInput;
