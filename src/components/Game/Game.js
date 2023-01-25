import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input';
import ListTries from '../ListTries';
import Badge from '../Badge';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [tries, setTries] = React.useState([]);
  const [status, setStatus] = React.useState(false);

  const updateList = function (word) {
    const newList = [...tries];
    newList.push(word);
    setTries(newList);

    if (word === answer) {
      setStatus(newList.length);
    } else if (newList.length >= 6) {
      setStatus(answer);
    }
    console.log({ status });
    console.log({ newList });
  };

  return (
    <>
      <ListTries answer={answer} list={tries} />
      {status ? (
        <Badge status={status} />
      ) : (
        <Input addToList={updateList} status={status} />
      )}
    </>
  );
}

export default Game;
