import { Link } from "react-router-dom"
import useApiFetch from "../hooks/useApiFetch"
import { PostInfoCard } from "./PostInfoCard"


export const Posts = () => {
  const [data, _setData, isLoading, error] = useApiFetch("http://localhost:7070/posts", [])

  return(
    <>
      <div className="post-view new">
          <Link className="post-button" to="/posts/new">Добавить пост</Link>
      </div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error.</div>}
      {data.sort((a,b) => (b.created ? b.created : 0) - (a.created ? a.created : 0))
        .map((post)=> (
          <Link to={`/posts/${post.id}`} key={post.id}>
            <PostInfoCard created={post.created} close={false}>
              <div className="content">{post.content}</div>
            </PostInfoCard>
          </Link>
        ))
      }
    </>
  )
}