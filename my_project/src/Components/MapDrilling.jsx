function Name() {
  const name = ["Mary", "Elsa", "Anna"];
  return (
    <>
      <Id name={name} />
    </>
  );
}
function Id(props) {
  const id = [11, 12, 13];
  return (
    <>
      <Image id={id} name={props.name} />
    </>
  );
}

function Image(props) {
  const image = [
    "https://www.livemint.com/lm-img/img/2025/02/21/600x338/best_laptop_under_Rs_30000_1740122015828_1740122045813.jpg",
    "https://media.wired.com/photos/649b2dbfc859c4a1cdecc412/4:3/w_960,c_limit/Amazon-Fire-Max-11-Review--Stand-Gear.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiqC-6d2zKGwkJEQj1dhyx9KzKY3_1v_bfhg&s",
  ];
  return (
    <>
      <Card id={props.id} name={props.name} image={image} />
    </>
  );
}

function Card(props) {
return(
      <div className="row">
        {
          props.name.map((s,index)=>{
            return(
              <div className="card" style={{width: "18rem;"}}>
  <img src={props.image[index]} className="card-img-top" alt="..." style={{height:"20px;"}}/>
  <div class="card-body">
    <h5 className="card-title">{s}</h5>
    <p className="card-text">{props.id[index]}</p>
  </div>
</div>
            )
          })
        }
</div>
)
  
}
export default Name;
