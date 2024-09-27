 import FoodItems from "./components/FoodItems";
 import ErrorMessage from "./components/ErrorMessage";
 import React from 'react'
 import"./App.css";
  import 'bootstrap/dist/css/bootstrap.min.css'

  function App()
  {
    let foodItems = ["dal","grenn vegatable","roti","salad","milk","gheee","rabbit"];

    return(  
      <React.Fragment>
  
     <div>healthy food</div>
     <ErrorMessage items= {foodItems}></ErrorMessage>
    <FoodItems ></FoodItems>
  </React.Fragment>

    );
  }
  export default App;

