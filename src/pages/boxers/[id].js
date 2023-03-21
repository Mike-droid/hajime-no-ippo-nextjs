import BoxerCard from '@/components/boxerCard';
import { apiUrl } from '@/api/apiUrl';

export default function BoxerDetails({ boxer }) {
  return <BoxerCard
    key={boxer.id}
    name={boxer.name}
    totalMatches={boxer.totalMatches}
    wins={boxer.wins}
    losses={boxer.losses}
    draws={boxer.draws}
    weightClass={boxer.weightClass}
    winsByKO={boxer.winsByKO}
    image={`${apiUrl}${boxer.image}`}
  />;
}

export async function getServerSideProps({ params }) {
  const { id } = params;

  // Fetch data for specific boxer
  const res = await fetch(`${apiUrl}/ts/api/v1/boxers/${id}`);
  const boxer = await res.json();

  return {
    props: {
      boxer,
    },
  };
}
