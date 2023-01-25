import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function ListTries({ answer, list }) {
  const n = list.length;

  function drawRow(row) {
    if (row >= n) {
      return range(5).map((i) => <span key={i} className='cell'></span>);
    }
    const data = checkGuess(list[row], answer);
    return data.map((letter, i) => (
      <span key={i} className={`cell ${letter.status}`}>
        {letter.letter}
      </span>
    ));
  }

  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((i) => (
        <p key={i} className='guess'>
          {drawRow(i)}
        </p>
      ))}
    </div>
  );
}

export default ListTries;
