import React from "react";
import "./BallotModal.css";

export const BallotModal = (props) => {
    const { toggleModalFunction } = props;

    return (
        <div className="bg-blocker">
            <div className="ballot-modal">
                <h2>Success</h2>
                <div>Thanks for voting!</div>
                <button className="modal-x" onClick={toggleModalFunction}>X</button>
            </div>
        </div>
    )
}