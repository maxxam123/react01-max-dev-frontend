//import Post from "../post/Post"
//import Share from "../share/Share"
//import Sh from "../sh/Sh"
import "./feed.css"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
//import { AuthContext } from "../../context/AuthContext"
//import Modify from "../modify/Modify"

export default function Feed() {
  const [posts, setPosts] = useState([]);
//  const {user} = useContext(AuthContext)'

  useEffect(()=>{
    const fetchPosts = async () => {
    const res = await axios.get('/api');
    setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feedTitle">
        Cluster
      </div>
        <div className="postAmount">{posts.users}</div>
        <div className="post01">{posts.owner}</div>
    </div>
  )
}
