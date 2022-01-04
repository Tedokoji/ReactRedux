import './App.css';
import  store  from './Redux/Store.ts';
import { Provider } from 'react-redux';
import Banking from './Banking';
function App() {
  
  return (
    <Provider store={store}>
      <Banking/>
    </Provider>
  );
}
export default App;
