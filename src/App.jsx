import {useState,useEffect} from 'react';
import getPosts from './Api/index';
import './App.css';

const App = () => {
  const[post,setPost]=useState([]);
  const [array,setArray]=useState([]);

  useEffect(() => {
  getPosts
    .then(res => {
      console.log(res.data);
      setPost(res.data);
      setArray(res.data);
    })
    .catch(err => console.log(err));
}, []);

  function handleChange(e){
    const searchitem=e.target.value;
    const searchresult=post.filter(item=>item.title.toLowerCase().includes(searchitem.toLowerCase()));
    setArray(searchresult);
  }
  function onDelete(e){
    const id=e.target.parentElement.firstChild.textContent;
    const newarray=array.filter(item=>item.id.toString()!==id);
    setArray(newarray);
  }
  return (
    <div >
      <h1 className="heading">New App...</h1>
      <input type="search" placeholder='Search...' onChange={handleChange} />
      <div className="App">
      {
        array.map((item,index)=>{
          return(
            <div key={index} className="post">
              <p>{item.id}</p>
              <p className="title">{item.title}</p>
              <p>{item.body}</p>
              <button type="button" onClick={onDelete}>Delete</button>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}
export default App;