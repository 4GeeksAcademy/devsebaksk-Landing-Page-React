import React from "react";
const mySuperStyles = {
  width:"100%",
};

const Jumbotron =()=>{
  return(
    <div className="p-5 mb-4 bg-body-tertiary rounded-3 col-12" style={mySuperStyles}>
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">A Warm Welcom</h1>
        <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non blandit lacus, at condimentum tellus. Nulla consectetur dui turpis, eu scelerisque lectus eleifend sed. Nullam auctor metus scelerisque risus mattis, id lacinia eros fermentum. Maecenas accumsan ipsum et rutrum eleifend. Aenean felis elit, rhoncus non rutrum eu, semper et sapien.</p>
        <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
      </div>
    </div>
  );  
};

export default Jumbotron;