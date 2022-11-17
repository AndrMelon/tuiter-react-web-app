import React from "react";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";


const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();
    return (
        <div className="row">
            <span className="col-3"> <i className="bi bi-chat"></i> {tuit.replies}</span>
            <span className="col-2"> <i className="bi bi-arrow-clockwise"></i> {tuit.retuits}</span>
            <span className="col-2"> <i onClick={() => dispatch(updateTuitThunk({
                ...tuit,
                likes: tuit.likes + 1,
                liked: true
            }))} className="bi bi-heart-fill me-2 text-danger"></i>{tuit.likes}</span>
            <span className="col-2"> <i onClick={() => dispatch(updateTuitThunk({
                ...tuit,
                dislikes: tuit.dislikes + 1,
                disliked: true
            }))} className="bi bi-hand-thumbs-down"></i>{tuit.dislikes} </span>
            <span className="col-3"> <i className="bi bi-share"></i></span>
        </div>
    );
}

export default TuitStats;