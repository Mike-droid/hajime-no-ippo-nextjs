import BoxerCard from '@/components/boxerCard'
import Navbar from '@/components/navbar'
import { apiUrl } from '@/api/apiUrl'

export default function boxers({ data }) {
  return(
    <>
      <Navbar/>
      <section className='flex flex-wrap flex-col content-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 2xl:grid 2xl:grid-cols-4 gap-5 justify-items-center'>
        {data.map((boxer) => (
          <BoxerCard
            key={boxer.id}
            name={boxer.name}
            totalMatches={boxer.totalMatches}
            wins={boxer.wins}
            losses={boxer.losses}
            draws={boxer.draws}
            weightClass={boxer.weightClass}
            winsByKO={boxer.winsByKO}
            country={boxer.country}
            image={`${apiUrl}${boxer.image}`}
          />
        ))}
      </section>
    </>
  )
}

export async function getServerSideProps() {
  try {
    // Fetch data from API
    const res = await fetch(`${apiUrl}/ts/api/v1/boxers`)
    const data = await res.json()

    // Return the data as props
    return {
      props: {
        data
      }
    }
  } catch (error) {
    console.error(error)
    return {
      props: {
        data: []
      }
    }
  }
}
