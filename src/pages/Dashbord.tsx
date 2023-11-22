import { useContext, useState } from "react";
import Main from "./Main";
import Profile from "./Profile";
import { AppContext } from "../context/AppContext";
import Cataloged from "./Cataloged";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

type view = 'basic' | 'profile' | 'cataloged';

function Dashboard() {
    const [view, setView] = useState<view>('basic');
    const setIsLoggedIn = useContext(AppContext).setIsLoggedIn;
    const navigate = useNavigate();

    return (
        <>
            <nav className="h-24 w-full shadow flex items-center justify-between px-8">
            <p className="font-bold text-2xl text-black">Artsy</p>
             <div className="flex gap-8">
                    <button onClick={() => navigate('/basic')}>Basic</button>
                    <button onClick={() => navigate('/cataloged')}>Cataloged</button>
                    <button onClick={() => navigate('/profile')}>Profile</button>
                    <button onClick={() => {setIsLoggedIn(false); localStorage.setItem('isLoggedIn', 'false'); navigate('/')}}>Logout</button>
             </div>
            </nav>
            <Outlet />

            {/* {
                view === 'basic' && <Main />
            }
            {
                view === 'cataloged' && <Cataloged />
            }
            {
                view === 'profile' && <Profile />
            } */}
        </>
    );
}

export default Dashboard;