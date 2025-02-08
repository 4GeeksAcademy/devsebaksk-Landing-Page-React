import React from "react";
import PropTypes from "prop-types";


const mySuperStyles = {
  width: "18rem",
  display:"flex",
};
const Card = props => {
    return (
        <div className="card col-4" style={mySuperStyles}>
  <img src="https://picsum.photos/id/1/500/325" className="card-img-top"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    );
};
Card.propTypes = {
	width: PropTypes.string,
  display: PropTypes.string,
};
const CardGroup = ()=>{
  return (
    <div className="row">
      <div className="col"><Card/></div>
      <div className="col"><Card/></div>
      <div className="col"><Card/></div>
      <div className="col"><Card/></div>
    </div>
  );
};
export default CardGroup ;