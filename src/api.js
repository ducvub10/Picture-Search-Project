//Code relating to interacting with the Unsplashed APIs
import axios from 'axios'

const imageSearch = async(term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID KWvAAwxOiXijyM_08Q_tdJCVzn98CUIadq5Lc4eAH9M'
        },
        params:{
            query: term,
        },
    });
    
    return response.data.results;
}

export default imageSearch;