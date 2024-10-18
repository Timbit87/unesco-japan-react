import React, { useState, useEffect } from 'react'

const UseWikipedia = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=extracts&exintro=&explaintext=&titles=Todai-ji'
);
        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (error) {
        console.error('error fetching data', error);
      }
    };

    fetchData();
  },[]);
  return(
  <div>
    <h1>API data</h1>
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  </div>
  );
};

export default UseWikipedia;
