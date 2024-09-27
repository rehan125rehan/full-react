 
 import React from 'react'
 import"./App.css";
  import 'bootstrap/dist/css/bootstrap.min.css'

  function App()
  {
    let foodItems = ["dal","grenn vegatable","roti","salad","milk","gheee","rabbit"];

    return(  
      <React.Fragment>
  
     <div>healthy food</div>
  
  <ul className="list-group">
    {foodItems.map((item)=>(  <li key={item} className="list-group-item">{item}</li>))}
  

</ul>
</React.Fragment>

    );
  }
  export default App;

