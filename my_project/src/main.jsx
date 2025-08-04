import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';

function Abc(){
  return(
    <>
    <h1>Hello World From Function</h1>
    <h1>Hello one</h1>
    <h2>Hello two</h2>
    <h3>Hello Three</h3>
    </>
  );
}
class Abc2 extends React.Component{
   render()
  {
  return(
    <>
<h1>Hello World From Class</h1>
    <h1>Hello class one</h1>
    <h2>Hello class two</h2>
    <h3>Hello class Three</h3>
    </>
  
  );
}
}

function Navbar(){
  return(
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
  );
}
function Footer()
{
  return(
    <>
 
    <footer class="footer" style={{margin : '200px'}}>
  <div class="footer-content">
    <p>&copy; 2025 YourCompany. All rights reserved.</p>
    <ul class="footer-links">
      <li><a href="/about">About Us</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/privacy">Privacy Policy</a></li>
    </ul>
  </div>
</footer>

    </>
  );
}
function Main()
{
  return(
    <><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, suscipit vero? Animi corporis distinctio quidem eos fuga nostrum iusto quaerat dicta totam voluptates doloribus repudiandae consectetur magnam omnis facere hic, sapiente expedita natus, sed magni itaque ratione obcaecati corrupti. Sequi, numquam! Est debitis doloribus consectetur vero! Vero quaerat omnis ratione iste cupiditate officiis excepturi aperiam perspiciatis temporibus voluptates maxime vitae iure, veniam nulla laboriosam! In, eius nisi aliquid iure ipsa eum ea quia asperiores dolor ad! Odit nobis harum dignissimos qui illum a veniam soluta voluptatibus eaque cumque cupiditate possimus alias fuga ducimus omnis atque explicabo libero nemo, eius quos adipisci illo! Temporibus nemo reiciendis facilis quas fugiat nisi impedit aut, delectus facere magnam? Iure, optio laboriosam. Tempore impedit dolorem aliquid praesentium, explicabo commodi, dolorum repellendus dolore beatae cum tenetur inventore quisquam voluptatibus, ipsum qui veniam adipisci. Eaque labore voluptatem laborum tenetur eius! Sapiente unde a rerum, laudantium quos ipsum.</p></>
  );
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Main/>
    <Footer/>
    {/* <h1>Hello World</h1>
    <Abc/>
    <Abc2/> */}
  </StrictMode>,
)
