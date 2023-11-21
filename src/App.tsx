import { useEffect, useState } from 'react'
import Dashboard from './pages/Dashbord';
import Login from './pages/Login';
import { AppContext, Artwork } from './context/AppContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Loading from './components/Loading';

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

    setIsLoading(true);
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
      toast.error(`Failed to fetch artworks data`, {theme: 'colored'});
    })
    .finally(() => {
      setIsLoading(false);
    } )
  }, [])

  // async function getToken() {
  //   await axios.post('https://api.artsy.net/api/tokens/xapp_token',
  //   {
  //     client_id: '94a1d6a86a8c43096e1e',
  //     client_secret: 'dcab26b6c1d57354d90ed667a6f46091'
  //   })
  //   .then(res => {
  //     setToken(res.data.token);
  //     localStorage.setItem('token', res.data.token);
  //   }).catch(err => {
  //     console.log(err);
  //   })
  // }

  return (
    <AppContext.Provider value={{ setIsLoggedIn, data, isLoggedIn, setIsLoading }}>
      <ToastContainer />
      {
        isLoading && <Loading />
      }
      {
        isLoggedIn ?
          <Dashboard />
          :
          <Login />
      }
    </AppContext.Provider>
  )
}

export default App
