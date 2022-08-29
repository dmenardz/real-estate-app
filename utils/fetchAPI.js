import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'
 

  export const fetchApi = async (url) =>{
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': '1568bd599emsh2efa3b5bc17b265p1e8e89jsnadfd19ab8a99',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }, 
    });
    return data;
  }