import { createContext, useState } from 'react';
import { baseUrl } from '../baseURL';
export const AppContext = createContext();
export default function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [darkMode, setDarkMode] = useState(false); 
    async function getBlogs(currentPage = 1)
    {
        setLoading(true)
        try{
            const response = await fetch(`${baseUrl}?page=${currentPage}`);
            const output = await response.json();
            setBlogs(output.posts);
            setCurrentPage(currentPage);
            setTotalPages(output.totalPages); 
        }
        catch(error){
            // ABHI HANDLE KARNA
        }
        setLoading(false);
    }
    const values = {
                    loading, 
                    setLoading,
                    blogs,
                    setBlogs,
                    currentPage,
                    setCurrentPage,
                    totalPages,
                    setTotalPages,
                    darkMode,
                    setDarkMode,
                    getBlogs
                };
    return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}