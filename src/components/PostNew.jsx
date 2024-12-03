import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData";
import { PostInfoCard } from "./PostInfoCard";


export const PostNew = () => {
    const [post, setPost] = useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        const {value} = event.target;
        setPost(value);
    }

    const handleClick = () => {
        const jsonData = {
            id: 0,
            content: post
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;")
        };

        useFetchData("POST", "http://localhost:7070/posts", jsonData, () => {
            navigate("/", {replace: true, state: {from: "/posts/new"}});
        })
    }

    return(
        <PostInfoCard close={true}>
            <div>
                <textarea value={post} onChange={(event)=>handleChange(event)}/>
            </div>
            <div className="buttons">
                <button type="button" className="post-button" onClick={handleClick}>Сохранить</button>
            </div>
        </PostInfoCard>
    )
}