import React, { useEffect, useState } from 'react';
import api from '../../Api/Api';
import { BallotCategory } from '../BallotCategory/BallotCategory';
import { BallotModal } from '../BallotModal/BallotModal';
import "./Ballot.css";

const Ballot = () => {
  const [data, setData] = useState([]);
  const [selectedCards, changeSelectedCards] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    api.getBallotData().then(response => setData(response.items));
  }, []);

  const clickCardButton = event => {
    const clickedNominee = event.target.name;
    const fromCategory = event.target.dataset.ballotCategoryTitle;
    changeSelectedCards(prevObj => ({
      ...prevObj,
      [fromCategory]: prevObj[fromCategory] === clickedNominee ? undefined : clickedNominee,
    }));
  }

  const toggleModalVisible = event => {
    const action = event.target.name;
    setModalVisible(action === "open");
  }

  const areAnySelected = Object.keys(selectedCards).reduce((value, key) => selectedCards[key] ? value = true : value, false);

  return (
    <div className='ballot'>
      <h1>Awards 2021</h1>
      {data.map(category => (
        <BallotCategory 
          key={category.title} 
          category={category} 
          selectedCards={selectedCards}
          clickCardFunction={clickCardButton} 
        />))}
      <button className='ballot-submit' name="open" disabled={!areAnySelected} onClick={toggleModalVisible}>Submit Ballot</button>
      {modalVisible && <BallotModal toggleModalFunction={toggleModalVisible} />}
    </div>
  )
}

export default Ballot;