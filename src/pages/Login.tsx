import { useState, useContext } from "react";
import TextInput from "../components/TextInput";
import PasswordInput from "../components/PasswordInput";
import loginIllustration from "../assets/loginIllustration.jpg";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
    const setIsLoggedIn = useContext(AppContext).setIsLoggedIn;
    const setIsLoading = useContext(AppContext).setIsLoading;
    const navigate = useNavigate();

    let users = [{username: 'admin', password: 'admin'}];

    try{
        if(localStorage.getItem('users') === null){
            localStorage.setItem('users', JSON.stringify(users));
        }
        users = JSON.parse(localStorage.getItem('users') as string);
    }catch(e){
        console.log(e);
    }

    const [loginData, setLoginData] = useState({
        username: "",
        usernameErrMsg: "",
        password: "",
        passwordErrMsg: ""
    });


    function login(){
        setIsLoading(true);
        if(users.find(user => user.username === loginData.username && user.password === loginData.password)){
            setIsLoggedIn(true);
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/');
        }else{
            toast.warn('Username atau password salah',{theme: 'colored'});
        }
        setIsLoading(false);
    }

    function handleChange(e: React.FormEvent<HTMLInputElement>) {
        const element = e.target as HTMLInputElement;
        
        setLoginData(prev => {
            return { ...prev, [element.name]: element.value }
        });
    }

    return (
        <div className="w-screen h-[100svh] flex items-center justify-center">
            <div className="bg-white rounded-xl shadow flex items-center justify-between w-full max-w-3xl lg:max-w-4xl relative h-full md:max-h-[80svh]">
                <div className="w-full md:max-w-sm px-8 md:px-12 md:mx-auto z-20 py-24 md:py-12 self-end md:self-center bg-gradient-to-t from-black via-black/80 via-60% md:bg-none">
                    <p className="font-bold text-3xl text-white md:text-black">Artsy</p>
                    <p className="md:text-neutral-400 text-sm mb-8 text-white">Masukkan username dan password anda</p>
                    <form onSubmit={e => {e.preventDefault(); login()}} className="w-full flex flex-col">
                        <TextInput name="username" errorMsg={loginData.usernameErrMsg} value={loginData.username} onChange={handleChange} className="mb-4 w-full" title="username" />
                        <PasswordInput name="password" errorMsg={loginData.passwordErrMsg} value={loginData.password} onChange={handleChange} className="mb-8" title="password"/>
                        <button className="bg-teal-400 py-3 rounded text-white font-bold" type='submit'>
                            Masuk
                        </button>
                    </form>
                </div>
                <div className="md:w-96 h-full absolute md:rounded-r-xl overflow-hidden md:static">
                    <img src={loginIllustration} alt="illustration" className="object-cover h-full animate-scroll"/>
                </div>
            </div>
        </div>
    );
}

export default Login;