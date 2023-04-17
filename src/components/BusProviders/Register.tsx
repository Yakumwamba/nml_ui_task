import { useState } from 'react';
import SurrealDB from 'surrealdb';
// initialize the database
const db = new SurrealDB(options{
  apiKey: 'your-api-key',
  
  projectId: 'your-project-id',
});
// create a new document for the bus provider
const createBusProvider = async (data) => {
  try {
    const response = await db.collection('bus-providers').add(data);
    console.log('Bus provider added with ID:', response.id);
    return response.id;
  } catch (error) {
    console.error('Error adding bus provider:', error);
  }
}; // get all the bus providers
const getBusProviders = async () => {
  try {
    const response = await db.collection('bus-providers').get();
    const busProviders = response.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return busProviders;
  } catch (error) {
    console.error('Error getting bus providers:', error);
  }
};

const BusProviderForm = () => {
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [busRoutes, setBusRoutes] = useState('');
  const [numBuses, setNumBuses] = useState('');
  const [busTypes, setBusTypes] = useState('');
  const [busSchedules, setBusSchedules] = useState('');
  const [pricingInfo, setPricingInfo] = useState('');
  const [paymentInfo, setPaymentInfo] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = {
      companyName,
      contactName,
      contactEmail,
      contactPhone,
      busRoutes,
      numBuses,
      busTypes,
      busSchedules,
      pricingInfo,
      paymentInfo,
    };
    try {
      const response = await fetch('/api/bus-providers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Redirect to the bus provider's page
        window.location.href = `/bus-providers/${companyName}`;
      } else {
        // Handle the error
        console.log('An error occurred');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='companyName'>Company Name:</label>
      <input
        type='text'
        id='companyName'
        value={companyName}
        onChange={(event) => setCompanyName(event.target.value)}
      />
      <label htmlFor='contactName'>Contact Person Name:</label>
      <input
        type='text'
        id='contactName'
        value={contactName}
        onChange={(event) => setContactName(event.target.value)}
      />
      <label htmlFor='contactEmail'>Contact Person Email:</label>
      <input
        type='email'
        id='contactEmail'
        value={contactEmail}
        onChange={(event) => setContactEmail(event.target.value)}
      />
      <label htmlFor='contactPhone'>Contact Person Phone Number:</label>
      <input
        type='tel'
        id='contactPhone'
        value={contactPhone}
        onChange={(event) => setContactPhone(event.target.value)}
      />
      <label htmlFor='busRoutes'>Bus Routes:</label>
      <input
        type='text'
        id='busRoutes'
        value={busRoutes}
        onChange={(event) => setBusRoutes(event.target.value)}
      />
      <label htmlFor='numBuses'>Number of Buses:</label>
      <input
        type='number'
        id='numBuses'
        value={numBuses}
        onChange={(event) => setNumBuses(event.target.value)}
      />
    </form>
  );
};
