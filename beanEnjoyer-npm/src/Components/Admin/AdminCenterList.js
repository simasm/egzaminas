import React, { useContext } from 'react';
import axios from 'axios';
import { AdminContext } from './AdminView';

const AdminCenterList = () => {

    const { centerList, loadCenters } = useContext(AdminContext);

    const deleteCenter = async (id) => {

        try {
            const response = await axios.delete(process.env.PUBLIC_URL + "/api/centers/".concat(id));
            if (response.status < 400) {
                loadCenters();
            }
        } catch (err) {
            console.log(err);
        }
    }


    if (centerList.center_array !== null)
        return (

            <ol className="conainer   ">
                <li className="row bg-dark" style={{ color: "white" }}>
                    <div className="col border ">id</div>
                    <div className="col border ">title</div>
                    <div className="col  border">price</div>
                    <div className="col border ">quantity</div>
                    <div className="col border">action</div>
                </li>
                {centerList.center_array.map(center =>
                    <li className="row justify-content-evenly bg-light" key={center.id}>
                        <div className="col m-2 ">
                            {center.id} </div>
                        <div className="col m-2">
                            {center.title}    </div>
                        <div className="col btn m-2 btn-secondary btn-sm"
                            onClick={() => deleteCenter(center.id)}>Delete</div>
                    </li>)}
            </ol>




        );
    else
        return <> loading...</>;
}
export default AdminCenterList;
