import React from "react";
import { BallotCard } from "../BallotCard/BallotCard";
import "./BallotCategory.css";

export const BallotCategory = props => {
    const {
        category,
        category: {
            title,
        },
        selectedCards,
        clickCardFunction,
    } = props;
    return (
        <div className="ballot-category">
            <h2>{title}</h2>
            <div className="ballot-category-list">
                {category.items.map(item => (
                    <BallotCard 
                        data={item} 
                        categoryTitle={title} 
                        isSelected={selectedCards[title] === item.id}
                        clickCardFunction={clickCardFunction} 
                    />))
                }
            </div>
        </div>
    )
}