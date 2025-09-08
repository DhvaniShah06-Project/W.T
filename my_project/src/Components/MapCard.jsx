function Mapcard() {
  const Product = [
    {
      id: 101,
      pname: "Laptop",
      price: 8500,
      image:
        "https://www.livemint.com/lm-img/img/2025/02/21/600x338/best_laptop_under_Rs_30000_1740122015828_1740122045813.jpg",
    },
    {
      id: 102,
      pname: "Mobile",
      price: 1500,
      image:
        "https://darlingretail.com/cdn/shop/products/1_7b64958c-304b-43bd-b759-c5366bfa9914_600x.jpg?v=1661581431",
    },
    {
      id: 103,
      pname: "Tablet",
      price: 10000,
      image:
        "https://media.wired.com/photos/649b2dbfc859c4a1cdecc412/4:3/w_960,c_limit/Amazon-Fire-Max-11-Review--Stand-Gear.jpg",
    },
    {
      id: 104,
      pname: "Smart Watch",
      price: 2500,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiqC-6d2zKGwkJEQj1dhyx9KzKY3_1v_bfhg&s",
    },
    {
      id: 105,
      pname: "Headphone",
      price: 1000,
      image:
        "https://m.media-amazon.com/images/I/51FNnHjzhQL._UF1000,1000_QL80_.jpg",
    },
    {
      id: 106,
      pname: "Television",
      price: 30000,
      image:
        "https://www.livemint.com/lm-img/img/2025/02/11/optimize/Black_and_Decker_A_series_65_inch_smart_TV_1739259247314_1739259257620.jpg",
    },
  ];
  
  return (
    <div className="row">
      {
        Product.length>0 ? (
            Product.map((Pro) =>{

        return(
        <div className="col-4" key={Pro.id}>
          <div className="card" style={{ width: "18rem" }}>
            <img src={Pro.image} className="card-img-top" alt={Pro.pname} />
            <div className="card-body">
                Product Name :
              <h3 className="card-title">
              {Pro.pname}
                <br />
               Id :  {Pro.id}
              </h3>
              <p className="card-text">Price: ₹{Pro.price}</p>
            </div>
          </div>
        </div>
        )
      })) : (<h1>No Products Available</h1>)}
    </div>
  );
}
export default Mapcard;
