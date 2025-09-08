// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import React from 'react';






function Mapdemo()
{
    const Student =[
        {id : 1, name: "John" , branch:"Computer"},
        {id : 2, name: "Mary" , branch:"Electrical"},
        {id : 3, name: "Doe" , branch:"Mechanical"},
        {id : 4, name: "Smith" , branch:"Civil"},
        {id : 5, name: "Lily" , branch:"Computer"},

    ]
    // Student.length> 0 ?():(<h1>No Students Found</h1>)
   return(
    <table border={"3"} cellPadding={"10px"} cellSpacing={"0px"} style={{width:"100%"}}>
    
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Branch</th>
        </tr>
        <tbody style={{  border:"1px solid black"}}>
            {
                Student.length > 0 ? ( Student.map((stu)=>{
                    return(
                        <>
                        <tr style={{border:"1px solid black"}}>
                            <td style={{border:"1px solid black"}}>{stu.id}</td>
                             <td style={{border:"1px solid black"}}>{stu.name}</td>
                              <td style={{border:"1px solid black"}}>{stu.branch}</td>
                            </tr>
                            </>
                    )
                })) : (<h1>No Students Found</h1>)
               
            }
        </tbody>
    </table>
   )
}

export default Mapdemo;