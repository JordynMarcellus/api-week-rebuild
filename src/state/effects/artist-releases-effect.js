import {Effect, Actions} from 'jumpstate';
import axios from 'axios';

export default Effect('getReleases', () => {
    Actions.releasesLoading(true);
    axios.get()
        .then(res => {
            return res.data
        })
        .then(returnedData => {
            Actions.addArtistReleases(returnedData)
        })
        .catch(error => {
            Actions.artistReleaseFetchError(error);
        })
})