import React from 'react';

const Greetings = ({greetings, clickHandler1, clickHandler2}) => {
  const mapGreetings = (greeting, indx) => <li key={indx}>{greeting}</li>;

  return (
    <div>
      <button onClick={clickHandler1}>Add Greeting 1</button>
      <button onClick={clickHandler2}>Add Greeting 2</button>
      <ul>
        {greetings.map(mapGreetings)}
      </ul>
    </div>
  )
};

export default Greetings;
