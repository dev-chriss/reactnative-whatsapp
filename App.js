import RouterContainer from './src/router/routerContainer';
import configStore from './src/store/configStore'
import { Provider } from 'react-redux'

const store = configStore()

export default function App() {
  return (
    <Provider store={store}>
      <>
        <RouterContainer />
      </>
    </Provider>
  );
}


