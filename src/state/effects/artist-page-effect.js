import { Effect, Actions } from 'jumpstate';
import './artist-releases-effect'
import axios from 'axios';

export default Effect('getBandInfo', (payload) => {

    Actions.artistDataLoading(true);

    axios.get(`https://api.discogs.com/artists/${payload}`)
        .then( res => {
            return res.data
        })
        .then(returnedData => {
            Actions.getReleases(returnedData.releases_url)
            return returnedData
        })
        .then( returnedData => {
            Actions.addArtistData(returnedData)
        })
        .catch( err => Actions.artistDataFetchError(err) )
});