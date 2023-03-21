import Image from "next/image";

const BoxerCard = ({ name, totalMatches, wins, losses, draws, weightClass, winsByKO, image }) => {
  const imageUrl = image.replace('https://hajime-no-ippo-api.onrender.com', '');

  return (
    <div>
      <Image src={imageUrl} alt={name} width={100} height={100}></Image>
      <h2>{name}</h2>
      <p>Total Matches: {totalMatches}</p>
      <p>Wins: {wins}</p>
      <p>Losses: {losses}</p>
      <p>Draws: {draws}</p>
      <p>Weight Class: {weightClass}</p>
      <p>Wins by KO: {winsByKO}</p>
    </div>
  );
};

export default BoxerCard;
