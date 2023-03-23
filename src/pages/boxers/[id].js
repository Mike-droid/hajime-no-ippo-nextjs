import BoxerCard from '@/components/boxerCard';
import { apiUrl } from '@/api/apiUrl';
import Navbar from '@/components/navbar';
import { MyFooter } from '@/components/myFooter';

export default function BoxerDetails({ boxer }) {
  return (
    <>
      <Navbar/>
      <section className='flex justify-center mt-10'>
        <BoxerCard
          key={boxer.id}
          id={boxer.id}
          name={boxer.name}
          totalMatches={boxer.totalMatches}
          wins={boxer.wins}
          losses={boxer.losses}
          draws={boxer.draws}
          weightClass={boxer.weightClass}
          winsByKO={boxer.winsByKO}
          image={`${apiUrl}${boxer.image}`}
        />
      </section>
      <MyFooter/>
    </>
  );
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
