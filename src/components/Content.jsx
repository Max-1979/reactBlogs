import { useContext } from "react"
import { AppContext } from "../context/AppContext"
export default function Content({blogs}){
    console.log(blogs);
    return(
        <div className="w-1/3 min-w-[400px] mx-auto">
            {
                blogs.length == 0 ? (<div>NO BLOGS FOUND</div>): 
                (blogs.map((blog)=>(<div className="mb-6" key={blog.id}>
                            <div className="font-bold">{blog.title}</div>
                            <div className="text-xs">by <span className="italic">{blog.author}</span> on <span className="font-bold">{blog.category}</span></div>
                            <div className="text-xs">posted on {blog.date}</div>
                            <div className="text-sm">{blog.content}</div>
                            {
                                blog.tags.map((tag, index)=>{
                                    return <span key={index} className="text-xs text-sky-600 font-bold underline cursor-pointer">#{tag} </span>
                                })
                            }
                        </div>)
                ))
            }
        </div>
    )
}