import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { useContext } from 'react';
import { AuthContext } from './components/Auth/Auth_context';

function App() {
  const auth=useContext(AuthContext)
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/auth' element={<AuthPage />} />
        {auth.isLoggin && <Route path='/profile' element={<UserProfile />} />}
        <Route path='*' element={<HomePage />} />
        
      </Routes>
    </Layout>
  );
}

export default App;
