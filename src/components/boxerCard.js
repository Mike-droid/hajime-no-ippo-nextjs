import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/BoxerCard.module.css'
import { ShowInfoButton } from './showInfoButton';

const BoxerCard = ({ name, totalMatches, wins, losses, draws, weightClass, winsByKO, image, country }) => {
  const imageUrl = image.replace('https://hajime-no-ippo-api.onrender.com', '');

  const [showInfo, setShowInfo] = useState(false);

  function handleShowInfo () {
    setShowInfo(!showInfo)
  }

  return (
    <div className={`flex flex-col flex-wrap items-center w-1/3 m-0 ${styles.boxerCard}`}>
      <Image src={imageUrl} alt={name} width={100} height={100}></Image>
      <h2>{name}</h2>
      <ShowInfoButton onClick={handleShowInfo} showInfo={showInfo} />
      {
        showInfo &&
          <div id="boxer-info" className='ml-2'>
            <p>Total Matches: {totalMatches}</p>
            <p>Wins: {wins}</p>
            <p>Losses: {losses}</p>
            <p>Draws: {draws}</p>
            <p>Weight Class: {weightClass}</p>
            <p>Wins by KO: {winsByKO}</p>
            <p>Country: {country}</p>
          </div>
      }
    </div>
  );
};

export default BoxerCard;
