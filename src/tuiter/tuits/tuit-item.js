import React from "react";
import { useDispatch } from "react-redux";
import { deleteTuit } from "../tuits/tuits-reducer";
import { deleteTuitThunk } from "../../services/tuits-thunks";
import TuitStats from "./tuit-stats";


const TuitItem = (
    { tuit }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
        dispatch(deleteTuit(id));
    }
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img alt="" width={40} className="float-center rounded-pill" src={`/images/${tuit.image}`} />
                </div>
                <div className="col-11">
                    <div>{tuit.handle} <i className="bi bi-dot color-red"></i> {tuit.time}</div>
                    <div className="fw-bolder">{tuit.topic}</div>
                    <div>{tuit.tuit}</div>
                    <TuitStats tuit={tuit} />
                    <i className="bi bi-x-lg float-end"
                        onClick={() => deleteTuitHandler(tuit._id)}></i>
                </div>

            </div>
        </li>
    );
};

export default TuitItem;