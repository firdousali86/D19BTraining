import {useState, useEffect} from 'react';

const useFetchMovies = url => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log('hook body');

  useEffect(() => {
    console.log('hook use effect');

    fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzJjOTYzNjY5NzU3OGEwNTI5MWM4NWE5MWYyNmFmMSIsInN1YiI6IjY1NDM4MzM0ZTFhZDc5MDE0YmQyMGM3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.huykm4g9c8OAVMFXGW498rMtzZJT2XYKunRmZvinG70`,
        'Content-Type': 'application/json', // Adjust the content type if needed
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Process the data returned from the API
        // console.log('Response data:', data);
        setMovies(data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setError(error);
        setLoading(false);
      });
  }, [url]);

  return {movies, loading, error};
};

export default useFetchMovies;
