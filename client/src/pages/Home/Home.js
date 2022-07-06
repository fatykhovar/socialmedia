import React, { useEffect, useState } from "react";
import "./Home.css";
import Axios from "axios";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { v4 as uuidv4 } from 'uuid';


function Home() {
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      localStorage.setItem("loggedIn", false);
    }
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/upload").then((response) => {
      console.log(response.data.rows);
      setUploads(response.data.rows);
    });
  }, []);

  const likePost = (post, key) => {
    var tempLikes = uploads;
    tempLikes[key].likes = tempLikes[key].likes + 1;

     Axios.post("http://localhost:3001/upload/like", {
      userLiking: localStorage.getItem("username"),
      postId: post,
      id: uuidv4(),
    }).then((response) => {
      setUploads(tempLikes);
    });
  };

  return (
    <div className="Home">
      {uploads.map((val, key) => {
        return (
          <div className="Post">
            <div className="Content">
              <div className="title">
                @{val.author}
              </div>
              <div className="description">{val.description}</div>
            </div>
            <div className="Engagement">
              <ThumbUpIcon
                id="likeButton"
                onClick={() => {
                  likePost(val.id, key);
                }}
              />
              {val.likes}
            </div>
          </div>
        );
      })}
  </div>
  );
}

export default Home;
