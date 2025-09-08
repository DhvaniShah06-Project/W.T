function One(){
    const Pname = "Smart Mobiles"
    return(
        <>
        <Two Pname = {Pname}/></>
    )
}

function Two(props){
    const  Price = 15000;
     return(
        <>
        <Three Price ={Price} Pname = {props.Pname}/></>
     )
}

function Three(props)
{
  const  image = "https://images.samsung.com/is/image/samsung/p6pim/in/ps_2504/gallery/in-galaxy-s25-s937-sm-s937bzsbins-thumb-546082683?$264_264_PNG$"
    return(
        <>
        <Four image = {image} Price ={props.Price} Pname = {props.Pname}/></>
    )
}

function Four(props){
    const id=1;
    return(
        <>
        <Five image = {props.image} Price ={props.Price} Pname = {props.Pname} id={id} />
        </>
    )
}

function Five(props)
{
    return(
        <>
        
        <div className="card" style={{width: "18rem"}}>
  <img src={props.image} className="card-img-top" alt="Loading"/>
  <div className="card-body">
     <h5 className="card-title"> Name : {props.Pname}</h5>
    <p className="card-text">Price : {props.Price} <br/>ID : {props.id}</p>
     <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </>
    )
}
export default One