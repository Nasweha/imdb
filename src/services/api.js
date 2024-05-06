import axios from 'axios'

export  const categoryMovies =async (API_URL)=>{
    try{
       let response = await axios.get(API_URL)
       return response.data;
    }
    catch(error){
        console.log('Erroe while calling the api' ,error.message);
        return error.response.data

    }
}