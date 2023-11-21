import { useContext, useState } from "react";
import Main from "./Main";
import Profile from "./Profile";
import { AppContext } from "../context/AppContext";

type view = 'main' | 'profile'

function Dashboard() {
    const [view, setView] = useState<view>('main');
    const setIsLoggedIn = useContext(AppContext).setIsLoggedIn;

    return (
        <>
            <nav className="h-24 w-full shadow flex items-center justify-between px-8">
            <p className="font-bold text-2xl text-black">Artsy</p>
             <div className="flex gap-8">
                    <button onClick={() => setView('main')}>Main</button>
                    <button onClick={() => setView('profile')}>Profile</button>
                    <button onClick={() => {setIsLoggedIn(false); localStorage.setItem('isLoggedIn', 'false')}}>Logout</button>
             </div>
            </nav>

            {
                view === 'main' && <Main />
            }
            {
                view === 'profile' && <Profile />
            }
        </>
    );
}

export default Dashboard;