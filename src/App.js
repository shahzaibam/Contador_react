import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [likes, setLikes] = useState(false)
  const [comment, setComment] = useState("")

  useEffect(() => {
    console.log("doing")
    document.title = `Likes are ${likes}`
  }, [likes])

  return (
    <div>

      {likes === true ?       <div>
        <img src="https://imagenes.20minutos.es/files/image_656_370/files/fp/uploads/imagenes/2021/09/29/cristiano-ronaldo.r_d.1684-405-1942.jpeg" alt="cr7" />
      </div> : <div>nothing</div>}


      <p>Likes : {likes}</p>

      <button onClick={() => setLikes(true)}>Like</button>

      <button onClick={() => setLikes(false)}>Dislike</button>

      <p>{comment}</p>
      <input onChange={chn => setComment(chn.target.value)} value={comment} />
    </div>
  );
}

export default App;
