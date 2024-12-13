import React, { useState } from 'react';

const sampleData = [
  { id: 1, clinicName: 'HealthCare Clinic', doctorName: 'Dr. Smith', clinicNumber: '12345', location: 'New York', patients: 120, revenue: '$5000' },
  { id: 2, clinicName: 'Wellness Clinic', doctorName: 'Dr. Brown', clinicNumber: '67890', location: 'Los Angeles', patients: 100, revenue: '$4000' },
  { id: 3, clinicName: 'Family Health Clinic', doctorName: 'Dr. Johnson', clinicNumber: '11223', location: 'Chicago', patients: 150, revenue: '$6000' },
];

const Clinic = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(sampleData);
  const [showForm, setShowForm] = useState(false);
  const [currentClinic, setCurrentClinic] = useState({
    id: null,
    clinicName: '',
    doctorName: '',
    clinicMail: '',
    clinicNumber: '',
    establishmentDate: '',
    location: '',
    panchakrama: '',
    uploadimage:'',
  });

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddUserClick = () => {
    setShowForm(true);
    setCurrentClinic({
      id: null,
      clinicName: '',
      doctorName: '',
      clinicMail: '',
      clinicNumber: '',
      establishmentDate: '',
      location: '',
      panchakrama: '',
      uploadimage:'',
    });
  };
  const handleEditUserClick = () => {
    setShowForm(true);
    setCurrentClinic({
      id: null,
      clinicName: '',
      doctorName: '',
      clinicMail: '',
      clinicNumber: '',
      establishmentDate: '',
      location: '',
      panchakrama: '',
      uploadimage:'',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentClinic({
      ...currentClinic,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentClinic.id) {
      // Update existing clinic
      const updatedData = data.map(item =>
        item.id === currentClinic.id ? { ...currentClinic } : item
      );
      setData(updatedData);
    } else {
      // Add new clinic
      setData([...data, { id: data.length + 1, ...currentClinic, patients: 0, revenue: '$0' }]);
    }

    setShowForm(false);
    setCurrentClinic({
      id: null,
      clinicName: '',
      doctorName: '',
      clinicMail: '',
      clinicNumber: '',
      establishmentDate: '',
      location: '',
      panchakrama: '',
      uploadimage:'',
    });
  };

  const handleEditClick = (clinic) => {
    setShowForm(true);
    setCurrentClinic(clinic); // Load selected clinic data into form
  };

  const filteredData = data.filter(item =>
    item.clinicName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search Clinics..."
        value={searchTerm}
        onChange={handleSearch}
        style={{ marginBottom: '10px', padding: '8px', width: '100%' }}
      />
      
      {/* Add User and Edit Button */}
      <div style={{ marginBottom: '10px' }}>
        <button onClick={handleAddUserClick} style={{ padding: '8px', marginRight: '10px' }}>
          Add Clinic
        </button>
        <button onClick={handleEditUserClick} style={{ padding: '8px', marginRight: '15px' }}>
          Edit Clinic
        </button>
      </div>

     
      {showForm && (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
          <div>
            <label>Clinic Name:</label>
            <input
              type="text"
              name="clinicName"
              value={currentClinic.clinicName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Doctor Name:</label>
            <input
              type="text"
              name="doctorName"
              value={currentClinic.doctorName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Clinic Mail:</label>
            <input
              type="email"
              name="clinicMail"
              value={currentClinic.clinicMail}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Clinic Number:</label>
            <input
              type="text"
              name="clinicNumber"
              value={currentClinic.clinicNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Establishment Date:</label>
            <input
              type="date"
              name="establishmentDate"
              value={currentClinic.establishmentDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={currentClinic.location}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Panchakrama:</label>
            <input
              type="text"
              name="panchakrama"
              value={currentClinic.panchakrama}
              onChange={handleInputChange}
              required
            />
          </div>
          <br></br>
         
          <div>
            <label>Upload Image : </label>
            <input
              type="file"
              name="image"
              value={currentClinic.image}
             
              required
            />
            <input
              type="file"
              name="image"
              value={currentClinic.image}
             
              required
            />
            <br></br>
          </div>
          <br></br>
        
          <br></br>
          <button type="submit">{currentClinic.id ? 'Update Clinic' : 'Submit'}</button>
        </form>
      )}

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Clinic Name</th>
            <th>Doctor Name</th>
            <th>Clinic Number</th>
            <th>Location</th>
            <th>No. of Patients</th>
            <th>Revenue</th>
            <th>Action</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length === 0 ? (
            <tr>
              <td colSpan="8" style={{ textAlign: 'center' }}>No results found</td>
            </tr>
          ) : (
            filteredData.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.clinicName}</td>
                <td>{item.doctorName}</td>
                <td>{item.clinicNumber}</td>
                <td>{item.location}</td>
                <td>{item.patients}</td>
                <td>{item.revenue}</td>

                <td><button onClick={() => handleEditClick(item)}>Edit</button></td>
                <td><button onClick={() => handleEditClick(item)}>Image</button></td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};


export default Clinic;
