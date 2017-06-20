import { Effect, Actions } from 'jumpstate';
import axios from 'axios';

export default Effect('getBandAlbumInfo', (payload) => { 

        console.log(payload);

        Actions.albumDataLoading(true);

        axios.get(`https://api.discogs.com/database/search?${payload}`)
            .then( res => {
                return res.data
            })
            .then( returnedData => {
                return setTimeout( () =>  Actions.addAlbumData(returnedData), 100) 
            })
            .catch( err => Actions.albumDataFetchError(err) )

    
});
