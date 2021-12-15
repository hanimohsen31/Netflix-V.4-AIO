import axios from "axios";
import { useEffect, useState } from "react";
import {Post} from "../../components/Post"

export const PostPage = ()=>{
    // const postData = [
    //     {title: "1stpost" , body : "1body"},
    //     {title: "2stpost" , body : "2body"}
    //   ];

    // posts ==> initial state ::> whis equal [] here
    const [posts, setPosts] = useState([]);

      useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then((result)=>{
          console.log("Axios placeholder")
          console.log(result)
          // id - name - email -phone
          setPosts(result.data);
        })
      },[])

      // useEffect(()=>{
      //   axios.get('http://www.boredapi.com/api/activity/').then((result)=>{
      //     console.log("Boored API")
      //     console.log(result)
      //     // data comming from api in {} object form so i put it in [] array
      //     setPosts([result.data]);
      //   })
      // },[])
    
      const handleClick = () => {
        const newPost = {name: "3stpost" , email : "3body"};
        setPosts([...posts, newPost]);
      };
    
      const handleDelete = () => {
        setPosts([]);
      };
    
      return (
          <>
            <h1>THis is noew</h1>
            <button className='btn btn-success m-2' onClick={handleClick}>Add</button>
            <button className='btn btn-danger m-2' onClick={handleDelete}>Delete</button>
            {posts.map((p)=>(<Post title={p.name} body={p.email} />))}
          </> 
          )
}