import React, { useCallback, useState } from "react"; // se importa React y dos hooks de React, useState para manejar el estado y useCallback para manejar las funciones

const App = (props: { message: string }) => { // se define el componente App que recibe un prop message de tipo string
  const [count, setCount] = useState(0); // se inicializa el estado count con el valor 0 y la función setCount para actualizar el estado

  const increment = useCallback(() => { // Se define la función increment que llama a la función setCount para actualizar el estado
    setCount((count) => count + 1);
  }, [count]); // recibe dos argumentos, el primero es la función anonima que se va a ejecutar y el segundo es un arreglo de dependencias, en este caso count
  
  return (
    <> // se usa un fragment para envolver los elementos que se van a renderizar de esta manera no se necesita un div
      <h1>{props.message}</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
    </>
  )
};

export default App;
