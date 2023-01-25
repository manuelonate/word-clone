import React from 'react';

function Input({ addToList }) {
  const [word, setWord] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    addToList(word);
    setWord('');
  }

  function handleChange(e) {
    const nextWord = e.target.value.toUpperCase();
    if (nextWord.length > 5) return;
    setWord(nextWord);
  }

  return (
    <form onSubmit={handleSubmit} className='guess-input-wrapper'>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        value={word}
        onChange={handleChange}
        id='guess-input'
        type='text'
        minLength={5}
        maxLength={5}
      />
    </form>
  );
}

export default Input;
