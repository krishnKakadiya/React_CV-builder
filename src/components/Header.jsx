import React from 'react';

const Header = () => {
  return (
    <div className=''>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-warning fixed-top">
  <div className="container">
    <a className="navbar-brand" href="#">Build CV</a>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent " aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
    </div>  
  )
}

export default Header