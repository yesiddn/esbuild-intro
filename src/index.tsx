import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render( // recibe dos argumentos, el primero es el componente que queremos renderizar y el segundo es el elemento del DOM donde queremos renderizarlo
  <App message='ESBuild practice' />,
  document.getElementById('app')
)