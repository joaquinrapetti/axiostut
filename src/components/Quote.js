import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { QuoteContainer, Text } from './QuotesStyles';

const url = 'https://goquotes-api.herokuapp.com/api/v1/random?count=1'

const Quote = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data)
    }).catch((error) => {
      console.log(error);
    })
  }, [])

  return (
    <QuoteContainer>
      {data && <Text>{data.quotes[0].text}</Text>}
      {data && <Text>{data.quotes[0].author}</Text>}
    </QuoteContainer>
  )
}

export default Quote;