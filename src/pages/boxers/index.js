import React, { useState, useEffect } from 'react';
import BoxerCard from '@/components/boxerCard'
import Navbar from '@/components/navbar'
import { MyFooter } from '@/components/myFooter'
import { apiUrl } from '@/api/apiUrl'

export default function Boxers({ data }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(
      data.filter(boxer =>
        boxer.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCountry === '' || boxer.country === selectedCountry)
      )
    );
  }, [searchTerm, selectedCountry, data]);

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleCountryChange = event => {
    setSelectedCountry(event.target.value);
  };

  return(
    <div className='h-screen'>
      <Navbar/>
      <div className='flex flex-col items-center md:flex-row md:justify-around'>
        <input
          type='search'
          placeholder='Search boxers by name'
          value={searchTerm}
          onChange={handleInputChange}
          className='p-3 rounded-full my-4'
        />
        <div>
          <label htmlFor='country-select' className='mr-1'>Filter by country:</label>
          <select id='country-select' value={selectedCountry} onChange={handleCountryChange}>
            <option value=''>All</option>
            <option value='Mexico'>Mexico</option>
            <option value='Japan'>Japan</option>
            <option value='USA'>USA</option>
            <option value='Russia'>Russia</option>
          </select>
        </div>
      </div>
      <section className='mb-auto pb-64 flex flex-wrap flex-col content-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 2xl:grid 2xl:grid-cols-4 gap-5 justify-items-center'>
        {filteredData.map((boxer) => (
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
            country={boxer.country}
            image={`${apiUrl}${boxer.image}`}
          />
        ))}
      </section>
      <MyFooter/>
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
