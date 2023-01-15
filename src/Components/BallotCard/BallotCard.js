import React from "react";
import "./BallotCard.css";

export const BallotCard = props => {
    const {
        categoryTitle,
        data: {
            id,
            title,
            photoUrL,
        },
        isSelected,
        clickCardFunction,
    } = props;

    return (
        <div className={`ballot-card ${isSelected && "selected"}`}>
            <div className="ballot-card-title">{title}</div>
            <img src={photoUrL} />
            <button name={id} data-ballot-category-title={categoryTitle} onClick={clickCardFunction}>Select</button>
        </div>
    )
}