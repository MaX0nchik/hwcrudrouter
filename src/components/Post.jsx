import { useNavigate, useParams } from "react-router-dom"
import useApiFetch from "../hooks/useApiFetch";
import { useState } from "react";
import { useFetchData } from "../hooks/useFetchData";
import { PostInfoCard } from "./PostInfoCard";


export const Post = () => {
  const {id} = useParams();
  const [data, setData, isLoading, error] = useApiFetch("http://localhost:7070/posts/"+id, []);
  const [isEdit, setEdit] = useState(false);
  const navigate = useNavigate();


  const handleChange = (event) => {
    const {value} = event.target;

    const p = {
      id: id ? parseInt(id) : 0,
      content: value
    };
    setData(p);
  }

  const handleClick = () => {
    const {id, content} = data;

    const jsonData = {
      id: id,
      content: content
    };

    useFetchData("PUT", "http://localhost:7070/posts/" + id, jsonData, () => {
      navigate("/", {replace: true, state: {from: "/posts/"+id}});
    })
  }

  const handleDeleteClick = () => {
    useFetchData("DELETE", "http://localhost:7070/posts/" + id, data, () => {
      navigate("/", {replace: true, state: {from: "/posts/"+id}});
    })
  } 

  const {content, created} = data;

  return(
    <>
    {isLoading && <div>Loading...</div>}
    {error && <div>Error.</div>}
    {!isEdit && !isLoading && 
      <PostInfoCard created={created} close={true}>
        <div className="content">{content}</div>
        <div className="buttons">
          <button type="button" className="post-button edit" onClick={()=>setEdit(true)}>Редактировать</button>
          <button type="button" className="post-button delete" onClick={handleDeleteClick}>Удалить</button>
        </div>
      </PostInfoCard>
    }
    {isEdit && !isLoading && 
      <PostInfoCard close={true}>
        <div>
          <textarea value={content} onChange={(event)=> handleChange(event)}/>
        </div>
        <div className="buttons">
          <button type="button" className="post-button save" onClick={handleClick}>Сохранить</button>
        </div>
      </PostInfoCard>
    }
    </>
  )

}