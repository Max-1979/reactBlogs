import { BsSun, BsMoon } from "react-icons/bs";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
export default function Header(){
    const {darkMode, setDarkMode} = useContext(AppContext);
    return (<div className = {darkMode ? "bg-black text-white text-center text-4xl font-bold pb-2 shadow-sm shadow-slate-700 w-screen fixed top-0" : "bg-slate-50 text-center text-4xl font-bold pb-2 shadow-sm shadow-slate-500 w-screen fixed top-0"}>
        CODENATION BLOGS
        {
            darkMode ? <BsSun onClick={()=>(setDarkMode(!darkMode))} className="absolute top-1 right-8 cursor-pointer" /> : <BsMoon onClick={()=>(setDarkMode(!darkMode))} className="absolute top-1 right-8 cursor-pointer" />
        }
    </div>)
}