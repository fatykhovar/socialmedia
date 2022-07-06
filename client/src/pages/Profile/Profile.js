import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./Profile.css";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';


function Profile() {
  const [yourUploads, setYourUploads] = useState([]);

  useEffect(() => {
    Axios.get(
      `http://localhost:3001/upload/byUser/${localStorage.getItem("username")}`
    ).then((response) => {
      setYourUploads(response.data.rows);
    });
  });
  return (
    <div className="Profile">
      <h1>{localStorage.getItem("username")}</h1>
      {yourUploads.map((val, key) => {
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
              />{val.likes}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Profile;
