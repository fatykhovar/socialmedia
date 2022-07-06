import React, { useState } from "react";
import "./Upload.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

function Upload() {
  const [description, setDescription] = useState("");
  let navigate  = useNavigate();

  const upload = () => {
    Axios.post("http://localhost:3001/upload",{
        description: description,
        id: uuidv4(),
        author: localStorage.getItem("username"),
    })
    .then(() => {
      navigate("/");
    });

  };
  return (
    <div className="Upload">
      <h1>Создать пост</h1>
      <div className="UploadForm">
        <input
          type="text"
          placeholder="Введите текст..."
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <button onClick={upload}>Отправить</button>
      </div>
    </div>
  );
}

export default Upload;
