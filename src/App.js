import './App.css';
import { AppContext } from './context/AppContext';
import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
import Footer from './components/Footer.jsx';
import Spinner from './components/Spinner.jsx';
import { useContext, useEffect } from "react"
function App() {
    const {loading, getBlogs, blogs, darkMode} = useContext(AppContext);
    useEffect(()=>{
        getBlogs();
    }, []);
    return (
        <div className={darkMode ? 'bg-[#212121] text-white select-none relative w-screen min-h-screen py-14 overflow-x-hidden' : 'select-none relative w-screen min-h-screen my-14 overflow-x-hidden'}>
            <Header/>
            {
                loading? <Spinner/> : <Content blogs = {blogs}/>
            }
            <Footer/>
        </div>
    );
}

export default App;
