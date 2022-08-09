import { Route, Routes } from 'react-router-dom'
import CustomRouter from '../app/router/CustomRouter'
import history from '../app/router/history'
import '../styles/App.css';
import HomeView from './home/HomeView';
import HomePage from './home/main/HomePage';

function App() {
  return (
    <CustomRouter history={history}>
      <></>
      <Routes>
        <Route path="/" element={<HomeView />} >
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </CustomRouter>
  );
}

export default App;
