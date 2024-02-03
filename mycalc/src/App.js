
import { Provider } from 'react-redux';
import './App.css';
import CalculatorUi from "./components/CalculatorUi";
import store from './app/store';

function App() {
  return (
    <>
    <Provider store={store}>
    <CalculatorUi/>
    </Provider>
  
    </>
  );
}

export default App;
