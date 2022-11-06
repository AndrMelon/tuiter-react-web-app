import React from "react";
import { useDispatch } from "react-redux";
import { deleteTuit } from "../tuits/tuits-reducer";

const TuitItem = (
    { tuit }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img alt="" width={40} className="float-center rounded-pill" src={`/images/${tuit.image}`} />
                </div>
                <div className="col-11">
                    <div>{tuit.userName} <i className="bi bi-dot color-red"></i> {tuit.time}</div>
                    <div className="fw-bolder">{tuit.topic}</div>
                    <div>{tuit.tuit}</div>
                    <div className="tuitIcons row">
                        <span className="col-3"> <i className="bi bi-chat"></i> {tuit.replies}</span>
                        <span className="col-3"> <i className="bi bi-arrow-clockwise"></i> {tuit.retuits}</span>
                        <span className="col-3"> <i className="bi bi-heart"></i> {tuit.likes}</span>
                        <span className="col-3"><i className="bi bi-share"></i></span>
                    </div>
                    <i className="bi bi-x-lg float-end"
                        onClick={() => deleteTuitHandler(tuit._id)}></i>
                </div>

            </div>
        </li>
    );
};

export default TuitItem;