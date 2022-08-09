import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import CustomRouter from '../app/router/CustomRouter'
import history from '../app/router/history'
import '../styles/App.css';
import CardsPage from './home/components/CardsPage';
import FormPage from './home/components/FormPage';
import QuillPage from './home/components/Quill';
import RawPage from './home/components/Raw';
import HomeView from './home/HomeView';
import HomePage from './home/main/HomePage';

function App() {
  return (
    <CustomRouter history={history}>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomeView />} >
          <Route index element={<HomePage />} />
          <Route path="cards" element={<CardsPage />} />
          <Route path="form" element={<FormPage />} />
          <Route path="quill" element={<QuillPage />} />
          <Route path="raw" element={<RawPage />} />
        </Route>
      </Routes>
    </CustomRouter>
  );
}

export default App;
