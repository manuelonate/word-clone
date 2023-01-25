import React from 'react';

function Badge({ status }) {
  if (typeof status === 'number')
    return (
      <div className='happy banner'>
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{status} guesses</strong>.
        </p>
      </div>
    );
  return (
    <div class='sad banner'>
      <p>
        Sorry, the correct answer is <strong>{status}</strong>.
      </p>
    </div>
  );
}

export default Badge;
