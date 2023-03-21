import BoxerCard from '@/components/boxerCard'
import { apiUrl } from '@/api/apiUrl'

export default function boxers({ data }) {
  return(
    <div>
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
          image={`${apiUrl}${boxer.image}`}
        />
      ))}
    </div>
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
