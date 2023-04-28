import './App.css'
import todoLogo from './assets/logo.svg';

function App() {
  return (
    <>
      <div className='logo-section'>
        <img className='logo-section__img' src={todoLogo} alt="todo" />
      </div>
      <div className='content'>
        content
      </div>
    </>
  )
}

export default App
