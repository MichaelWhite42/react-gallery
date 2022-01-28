import { Provider } from 'react-redux';
import AppWrapper from './appWrapper';
import './index.scss';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
        <AppWrapper />
    </Provider>
  );
}

export default App;
