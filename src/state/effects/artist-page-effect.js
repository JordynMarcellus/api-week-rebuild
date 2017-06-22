import { Effect, Actions } from 'jumpstate';
import axios from 'axios';
import apiInfo from '../api-info.js'

export default Effect('getBandInfo', (payload) => {

    Actions.artistDataLoading(true);

    axios.get(`https://api.discogs.com/atist/search?key=${apiInfo.key}&secret=${apiInfo.secret}&q=${payload}`)
        .then( res => {
            return res.data
        }).then( returnedData => {
            Actions.addArtistData(returnedData)
        })
        .catch( err => Actions.artistDataFetchError(err) )
});