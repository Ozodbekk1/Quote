import axios from 'axios'
import { useEffect, useState } from 'react';

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const options = {
    method: 'GET',
    url: 'https://api.freeapi.app/api/v1/public/quotes',
    params: {page: '1', limit: '10', query: 'human'},
    headers: {accept: 'application/json'}
  };
  const fetchData = async () => {
    setIsLoading(true)
    try {
      const { data } = await axios.request(options);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    finally{
      setIsLoading(false)
    }
  }
  useEffect (() => {
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {isLoading ? "Loading Quotes" : " "}
      <h1>
        Quotes
      </h1>
    </div>
  )
}

export default App
