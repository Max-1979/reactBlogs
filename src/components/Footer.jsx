import { useContext } from "react"
import { AppContext } from "../context/AppContext"
export default function Footer(){
    const {currentPage, totalPages, darkMode, getBlogs} = useContext(AppContext);
    return (<div className={ darkMode ? "bg-black text-white flex justify-around items-center py-2 shadow-sm shadow-slate-500 w-screen  fixed bottom-0" : "bg-slate-50 flex justify-around items-center py-2 shadow-sm shadow-slate-500 w-screen  fixed bottom-0"}>
        <div className="flex gap-4">
        {
            currentPage != 1 &&
            <button className="btn" onClick={()=>(getBlogs(currentPage - 1))}>PREV</button>
        }
        {
            currentPage != totalPages && 
            <button className="btn" onClick={()=>(getBlogs(currentPage + 1))}>NEXT</button>
        }
        </div>
        <div>{currentPage} of {totalPages}</div>
    </div>)
}