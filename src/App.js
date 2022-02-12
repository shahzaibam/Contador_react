import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [likes, setLikes] = useState(0)
  const [comment, setComment] = useState("")

  useEffect(() => {
    console.log("doing")
    document.title = `Likes are ${likes}`
  }, [likes])

  return (
    <div>
      <img src="https://imagenes.20minutos.es/files/image_656_370/files/fp/uploads/imagenes/2021/09/29/cristiano-ronaldo.r_d.1684-405-1942.jpeg" alt="cr7" />

      <p>Likes : {likes}</p>

      <button onClick={() => setLikes(likes + 1)}>Like</button>

      <button onClick={() => setLikes(likes === 0 ? likes : likes - 1)}>Dislike</button>
    
      <p>{comment}</p>
      <input onChange={chn => setComment(chn.target.value)} value={comment} />
      </div>
  );
}

export default App;
