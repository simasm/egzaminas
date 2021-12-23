import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
 import DetailsButton from "../DetailsButton";

class CenterCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: this.props.key,
      id: this.props.id,
      ctitle: this.props.title,
      cdescription: this.props.description,
      cqueue: this.props.queue,
      cimageUrl: this.props.imgUrl,
      clocation: this.props.location,
      buttonTitle: "Details",
      viewMode: this.props.viewMode,
      cvacnum :this.props.cvacnum
    };
  }



  cardClick = () => {

  }

  render() {
    return (
      <div className="card m-2" style={{ width: 18 + "rem" }}>
        <img
          src={this.state.cimageUrl}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{this.state.ctitle}</h5>
          <p className="card-text">
            
            <span>Eilės tipas {this.state.cqueue} </span>
            <span>Vakcinų partijos {this.state.cdescription} </span>
            <span>Vieta{this.state.clocation} </span>
            <span>Vakc. kiekis {this.state.cvacnum} </span>
             
            <span>Aprašymas {this.state.cdescription} </span>
          </p>


          <DetailsButton viewMode={this.props.viewMode}
            id={this.state.id} />

           


        </div>
      </div>
    );
  }
}
export default CenterCard;