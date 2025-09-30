import React, { useState } from 'react';
import axios from 'axios';

const ExcelUpload = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);

  const onFileChange = e => setFile(e.target.files[0]);

  const onSubmit = async e => {
    e.preventDefault();
    if (!file) return alert("Choose an Excel file");
    const formData = new FormData();
    formData.append('file', file);

    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('/api/upload', formData, { headers: { 'x-access-token': token } });
      setData(res.data.data);
      console.log('Uploaded data:', res.data.data);
    } catch (err) {
      console.error(err);
      alert('Upload failed');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="file" accept=".xls,.xlsx" onChange={onFileChange} />
        <button type="submit">Upload</button>
      </form>
      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
};

export default ExcelUpload;
