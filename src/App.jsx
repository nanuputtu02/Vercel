import {useState,useEffect} from 'react';
import getPosts from './Api/index';
import './App.css';

const App = () => {
  const[post,setPost]=useState([]);
  const [array,setArray]=useState([]);

  useEffect(()=>{
    getPosts
    .then(res=>{
      setPost(res.data)
      setArray(res.data)
      console.log(res.data);
    })
  },[]);

  function handleChange(e){
    const searchitem=e.target.value;
    const searchresult=post.filter(item=>item.title.toLowerCase().includes(searchitem.toLowerCase()));
    setArray(searchresult);
  }
  return (
    <div className="App">
      <h1 className="heading">New App...</h1>
      <input type="search" placeholder='Search...' onChange={handleChange} />
      {
        array.map((item,index)=>{
          return(
            <div key={index} className="post">
              <h1>{item.id}</h1>
              <h2>{item.title}</h2>
            </div>
          )
        })
      }
    </div>
  )
}
export default App;