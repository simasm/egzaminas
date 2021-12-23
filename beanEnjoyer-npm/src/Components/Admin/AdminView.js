import React from 'react';
import AdminCenterList from './AdminCenterList';
import AdminCenterAddForm from './AdminCenterAddForm';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';


export const AdminContext = React.createContext(
    {});

const AdminView = () => {

    const [centerList, setCenterList] = useState({ center_array: null });

    // console.log("pub url "+ process.env.PUBLIC_URL);


    const loadCenters = async () => {

        try {
            const response = await axios.get(process.env.PUBLIC_URL + "/api/centers");
            const centers = response.data;
            setCenterList({ center_array: centers });
        }
        catch (err) {
            console.log(err);
        }

    }

    useEffect(() => {

        loadCenters();

    }, []);


    return (
        <AdminContext.Provider value={{ centerList: centerList, setCenterList, loadCenters }}>
            <div className="container pt-2 ">
                <div className="row justify-content-evenly  ">
                    <div className="col-7  ">

                        <AdminCenterList />
                    </div>
                    <div className="col-4  ">
                        <AdminCenterAddForm />
                    </div>
                </div>
            </div>
        </AdminContext.Provider>
    );

}
export default AdminView;