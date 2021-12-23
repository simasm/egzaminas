import React from 'react'
import axios from 'axios'

import CenterCard from './CenterCard';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';

const CenterContainer = () => {


    let { id } = useParams();
   // var imgUrl = "https://media.karousell.com/media/photos/products/2020/01/23/samsung_basic_keypad_phone_1579753834_f597a219_progressive.jpg";

    if (id === undefined)
        id = 0;
    // console.log("id == ", id);
    const [state, setState] = useState({ centers_array: null });

    useEffect(() => {

        const load = async () => {
            try {
                const response = await axios.get(process.env.PUBLIC_URL + "/api/centers");
                const centers = response.data;
                setState({ centers_array: centers });
            } catch (err) {
                console.log(err);
            }



        }

        /// console.log("use effect");
        setTimeout(load, 1500);

    }, []);

    //console.log(state.products_array);


    if (state.centers_array === null)
        return (<div>Loading...</div>);
    else
      

            return (
                <div className="row">
                    {state.centers_array.map(center =>
                        <CenterCard   key = {state.centers_array.id}
                         id = {state.centers_array.id}
                       title = {state.centers_array.id}
                       description = {state.centers_array.id}
                        queue = {state.centers_array.id}
                        imgUrl = {state.centers_array.id}
                        location = {state.centers_array.id}
                     viewMode = {state.centers_array.id}
                       cvacnum = {state.centers_array.id}/>)}

                </div>

            );
     

            
 



 

}

export default CenterContainer;