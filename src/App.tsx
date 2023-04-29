import "./App.css";
import todoLogo from "./assets/logo.svg";
import Form from "./components/Form";

function App() {
  return (
    <>
      <div className='logo-section'>
        <img className='logo-section__img' src={todoLogo} alt='todo' />
      </div>
      <div className='content'>
        <Form />
      </div>
    </>
  );
}

export default App;
