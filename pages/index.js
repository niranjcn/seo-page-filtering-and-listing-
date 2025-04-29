import Head from 'next/head';
import { useEffect, useState } from 'react';
import "../styles/globals.css"
import axios from 'axios';
import Header from './header';
import DoctorCard from './card';
import Filters from './filters';

const DoctorsPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [filters, setFilters] = useState({
    gender: '',
    availableToday: false,
    feesMin: '',
    feesMax: '',
  });

  const fetchDoctors = async () => {
    try {
      const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
      const queryParams = new URLSearchParams();

      if (filters.gender) queryParams.append('gender', filters.gender);
      if (filters.availableToday) queryParams.append('availableToday', 'true');
      if (filters.feesMin) queryParams.append('feesMin', filters.feesMin);
      if (filters.feesMax) queryParams.append('feesMax', filters.feesMax);

      const url = `${baseURL}/api/doctors/list-doctor-with-filter?${
        queryParams.toString()
      }`;

      const res = await axios.get(url);
      setDoctors(res.data.doctors);
    } catch (err) {
      console.error('Error fetching doctors:', err.message);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <div>
      <Head>
        <title>Find General Physicians - Apollo 24x7</title>
        <meta
          name="description"
          content="Find the best general physicians and internal medicine doctors online at Apollo 24x7. Consult with top doctors near you."
        />
        <link
          rel="canonical"
          href="https://www.apollo247.com/specialties/general-physician-internal-medicine"
        />
      </Head>

      <Header />

      <div className="container mx-auto p-4">
        <Filters
          filters={filters}
          setFilters={setFilters}
          applyFilters={fetchDoctors}
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {doctors.length > 0 ? (
            doctors.map((doctor) => (
              <DoctorCard key={doctor._id} doctor={doctor} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No doctors found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage;
