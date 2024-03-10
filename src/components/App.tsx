import React, { useCallback, useState } from "react"; // se importa React y dos hooks de React, useState para manejar el estado y useCallback para manejar las funciones

const App = (props: { message: string }) => { // se define el componente App que recibe un prop message de tipo string
  return (
    <> // se usa un fragment para envolver los elementos que se van a renderizar de esta manera no se necesita un div
      <h1>{props.message}</h1>
      <h2>Count: {count}</h2>
      <button>Increment</button>
    </>
  )
};

