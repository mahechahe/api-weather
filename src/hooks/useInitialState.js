import axios from "axios"
import { useState } from "react";

const InitialState = () => {

    const [dataCity, setData] = useState('');
    const [name, setName] = useState('');

    console.log(name);


    const getApi = (city = 'London', name = 'Estiven') => {
        const options = {
            method: 'GET',
            url: 'https://community-open-weather-map.p.rapidapi.com/find',
            params: {q: `${city}`, units: 'metric'},
            headers: {
              'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
              'X-RapidAPI-Key': 'a60e6528b5msh4790f121f9a6798p17fc7fjsn8daa72e96a4a'
            }
          };
          
          axios.request(options).then(function (response) {
              setData(response.data.list)
              setName(name)
          }).catch(function (error) {
              console.error(error);
          });
    }

    return {
        getApi,
        dataCity,
        setName,
        name,
    }
}

export default InitialState;