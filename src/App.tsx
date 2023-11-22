import { useEffect, useState } from 'react'
import Dashboard from './pages/Dashbord';
import Login from './pages/Login';
import { AppContext, Artwork } from './context/AppContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Loading from './components/Loading';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Cataloged from './pages/Cataloged';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import ArtworkDetails from './components/ArtworkDetails';

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<Artwork[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') == 'true') {
      setIsLoggedIn(true);
    }

    const random = Math.floor(Math.random() * 10);

    if (isLoggedIn) {
      setIsLoading(true);
    }

    axios.get(`https://api.artic.edu/api/v1/artworks?limit=100&page=${random}`,
      {
        headers: {
          'AIC-User-Agent': 'Software Engineering Lab Project (cahyoade@students.undip.ac.id)'
        }
      }
    )
      .then(res => {
        setData(res.data.data);
      })
      .catch(err => {
        toast.error(`Failed to fetch artworks data`, { theme: 'colored' });
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, [])



  return (
    <AppContext.Provider value={{ setIsLoggedIn, data, isLoggedIn, setIsLoading }}>
      <ToastContainer />
      {
        isLoading && <Loading />
      }
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Login />} />
          {
            isLoggedIn &&
          <Route path="/" element={<Dashboard />} >
            <Route index element={<Main />} />
            <Route path="cataloged" element={<Cataloged />} />
            <Route path='basic' element={<Main />}></Route>
            <Route path="profile" element={<Profile />} />
          </Route>
          }
          <Route path="*" 
          element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
