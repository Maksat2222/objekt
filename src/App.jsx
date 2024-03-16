import React, { useState, useEffect } from "react";

const App = () => {
  const [objects, setObjects] = useState([]);
  const [counter, setCounter] = useState(0);
  const [stop, setStop] = useState(false);

  const createobject = () => {
    for (let index = 0; index < 5; index++) {
      const id = Math.floor(Math.random() * 1000);
      const name = "Person" + (counter + 1);
      const age = Math.floor(Math.random() * 50) + 20;
      setObjects((prevObjects) => [...prevObjects, { id, name, age }]);
      setCounter((prevCounter) => prevCounter + 1);
    }
  };

  useEffect(() => {
    let interval;
    if (stop) {
      console.log(stop);
      interval = setInterval(() => {
        createobject();
        
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [counter, stop]);

  const startAddingObjects = () => {
    setStop(true);
  };

  const stopAddingObjects = () => {
    setStop(false);
  };
  function hadlerDelete() {
    setObjects((prevObjects) => prevObjects.slice(0, -5));
  }

  return (
    <div>
      <button onClick={startAddingObjects}>Start</button>
      <button onClick={stopAddingObjects}>Stop</button>
      <button onClick={hadlerDelete}>delete</button>
      {objects.map((object) => (
        <div key={object.id}>
          <p>Имя: {object.name}</p>
          <p>Возраст: {object.age}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
