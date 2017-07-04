import { Effect, Actions } from 'jumpstate';
import './artist-releases-effectç'
import axios from 'axios';

export default Effect('getBandInfo', (payload) => {

    Actions.artistDataLoading(true);

    axios.get(`https://api.discogs.com/artists/${payload}`)
        .then( res => {
            return res.data
        }).then()
        .then( returnedData => {
            Actions.addArtistData(returnedData)
        })
        .catch( err => Actions.artistDataFetchError(err) )
});