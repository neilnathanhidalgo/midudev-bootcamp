import './App.css';
import './Module.js'
import Module from './Module.js';
/* 
Puede ser:

function App() {
  return (
    <div className="App">
      Hola Mundo
    </div>
  );
}
*/

// Crear const para reutilizar
const Mensaje = () => {
  return <h1>Holas</h1>
}
const App = () => {

  return (
    <div className='App'>
      <Mensaje />
      <Module color = 'blue' message = 'Holi' />
    </div>
  )
}
export default App;
