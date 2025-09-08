import React, { useState } from 'react'

function ApiCard() {

const [data,setdata] = useState([]);
  console.log("Component re-rendered");
const ApiUrl = "https://684af427165d05c5d35af75d.mockapi.io/Food"
fetch(ApiUrl).then(res=>res.json()).then(res=>setdata(res))

return(
   <div className="row">
      {data.map((account) => (
        <div className="col-4">
          <div className="card mb-2" style={{ width: "18rem" }}>
            <img src={account.image} className="card-img-top" alt="Loading" style={{height:"155px"}}/>
            <div className="card-body">
              <h5 className="card-title">Account Type : {account.accname}</h5>
              <p className="card-text">
              Id: {account.id}<br />Amount : {account.amount}<br /> Account Number : {account.accno}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
)


  return (
    <div>
      {Format}
    </div>
  )
}

export default ApiCard
