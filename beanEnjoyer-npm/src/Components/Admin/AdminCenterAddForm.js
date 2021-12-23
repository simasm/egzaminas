import React, { useContext } from "react";
import { useState } from "react";
import axios from "axios";

import AdminContext from "./AdminView";

const AdminCenterAddForm = () => {

    const [state, setState] = useState({  });
    const { loadCenters } = useContext(AdminContext);

    const submitHandle = (e) => {

        if (validateForm()) {
            uploadCenter();
            e.preventDefault();
        }
        else alert("invalid details");

        e.preventDefault();
    }
    const handleChange = (e) => {

        switch (e.target.name) {
            case "title": setState({ ...state, title: e.target.value }); break;
            case "price": setState({ ...state, price: e.target.value }); break;
            case "quantity": setState({ ...state, quantity: e.target.value }); break;
            default: break;
        }
    }

    const validateForm = () => {

        return ((state.price.match(/^([0-9]+\.?[0-9]*|\.[0-9]+)$/) &&
            state.quantity.match(/^[0-9]+$/)) !== null);
    }

    const uploadCenter = async () => {

        try {
         //   const response = await axios.post(process.env.PUBLIC_URL + "/api/centers", state);
         //   if (response.status < 400) {
         //       loadCenters();
          //  }

        } catch (err) {
            console.log(err);
        }

    }
    return (
        <form onSubmit={submitHandle} >

            <div className="row bg-dark" style={{ color: "white" }}>
                <h4>Add product </h4>
            </div>
            <div className="row pt-2">
                <div className="col-5-lg">

                    <span className="m-2">Title</span>
                    <input className="col-5-lg" type="text"
                        name="title"
                        placeholder="title"
                        onChange={handleChange} />

                </div>
            </div>
            <div className="row pt-2">
                <div className="col">
                    <span className="m-2">Price</span>
                    <input className="col" type="text"
                        name="price"
                        placeholder="price"
                        onChange={handleChange} />

                </div>
            </div>
            <div className="row pt-2">
                <div className="col">
                    <span className="m-2">Quantity</span>
                    <input className="col" type="text"
                        name="quantity"
                        placeholder="quantity"
                        onChange={handleChange} />

                </div>
            </div>

            <input type="submit"
                value="Submit" />

        </form>
    );
}



export default AdminCenterAddForm;