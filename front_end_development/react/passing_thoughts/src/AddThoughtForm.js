import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
  const [text, setText] = useState('');

  const handleTextChange = ({ target }) => {
    const { value } = target;
    setText(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.length > 0) {
      const newThought = {
        id: generateId(),
        text: text,
        expiresAt: getNewExpirationTime()
      };
        props.addThought(newThought);
      setText('');
    };
  };

  return (
    <form onSubmit={handleSubmit} className="AddThoughtForm">
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <input type="submit" value="Add" />
    </form>
  );
}
