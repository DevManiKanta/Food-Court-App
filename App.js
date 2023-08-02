import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import './App.css';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';



function App() {
  const [search,setSearch]=useState("");
  const [recipes,setrecipes]=useState([]);
  const YOUR_APP_ID = "82e453da";
  const YOUR_APP_KEY ="3bb5d1a3b992f408b9003effd74c9c22";
  const url = `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
  const getRecipeInfo = async () => {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data.hits);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    getRecipeInfo();
   
  };
  
  return (
    <div className="App">
     <h1><u>Mani-Food-Court</u>🍕🍿</h1><br/>
     <form onSubmit={onSubmit}>
     <input type ="text" value={search} placeholder='Enter name here' onChange={(e)=>setSearch(e.target.value)}/><br/><br/> &nbsp;&nbsp;
     <Button variant="success">Search</Button>
     </form>
     <div><br/>
      { 
        recipes.map(recipe=>{
         return <div className='mapped'>
          <Card className='cards' style={{ width: '20rem' }}>
      <Card.Img variant="top" src={recipe.recipe.image} />
      <Card.Body>
        <Card.Title>{recipe.recipe.label}</Card.Title>
        <Card.Text>
          Some quick    
        </Card.Text>
        <Button variant="primary">click to add</Button>
      </Card.Body>
       </Card>
         </div>
        })
      
      }
      
     </div>
  </div>
  );
}

export default App;
