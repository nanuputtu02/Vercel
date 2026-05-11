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
  return (
    <div >
      <h1 className="heading">New App...</h1>
      <input type="search" placeholder='Search...' onChange={handleChange} />
      <div className="App">
      {
        array.map((item,index)=>{
          return(
            <div key={index} className="post">
              <h1>{item.id}</h1>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}
export default App;