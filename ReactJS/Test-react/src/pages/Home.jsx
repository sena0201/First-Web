import { useEffect } from "react";
import axios from "axios";

function Home() {

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0',
                params: {
                    query: 'grandamas cafe pune'
                },
                headers: {
                    'X-RapidAPI-Key': 'b8cd416e5emsh1fd6052ae4698a2p1ee9a1jsn8b42f5a1959a',
                    'X-RapidAPI-Host': 'foodiefetch.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                console.log(response.data);
                return response.data
            } catch (error) {
                console.error(error);
            }
        }
        console.log(fetchData())
    }, [])


    return (
        <h1>Home</h1>
    );
}

export default Home;