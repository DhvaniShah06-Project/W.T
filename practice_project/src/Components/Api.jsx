import React, { useState } from 'react'


function Api() {
    const [Data,setData] = useState([])
    const ApiUrl = "https://684af427165d05c5d35af75d.mockapi.io/Product"

    fetch(ApiUrl)
    .then(res=>res.json())
    .then(res=>setData(res))
 
    const Format = Data.map((pro) => {
       
    return (
        
        <div className="row">

          
                <div className="col-3">
     <div className="card" style={{width: "18rem"}}>
  <img src={pro.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Product Name : {pro.name}</h5>
    <p className="card-text">Id : {pro.id}<br/>Price : {pro.price}</p>
  </div>
</div>
</div>
</div>
    );
  });

       return(
            <div>
                {Format}
            </div>
        )

   

   
  
}

export default Api
