import { Effect, Actions } from 'jumpstate';
import axios from 'axios';

export default Effect('getBandAlbumInfo', (payload) => {

    Actions.albumDataLoading(true);

    axios.get(`https://api.discogs.com/database/search?${payload}`)
        .then( res => {
                Actions.addAlbumData(res.data)
            })
        .catch( err => Actions.AlbumDataFetchError(err) )
});