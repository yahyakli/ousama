import { useState } from "react";
  import {useHistory} from "react-router-dom";


const Create = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');
  const [isPending, setIsPending] = useState(false);
  const history =  useHistory();

  const handleSubmit = (e) =>{
    e.preventDefault();
    setIsPending(true);
    const blog = {title, body, author };
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(()=>{
      setIsPending(false);
      history.push('/');
    })
  }
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          />
        <label>Blog author:</label>
        <input 
          type="text"
          required
          value={author}
          onChange={(e)=> setAuthor(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea 
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        { !isPending && <button>Add Blog</button>}
        { isPending && <button>Adding Blog...</button>}
      </form>
    </div>
  );
}

export default Create;