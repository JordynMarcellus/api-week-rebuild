import {Effect, Actions} from 'jumpstate';
import axios from 'axios';

import '../artist-releases.js';

export default Effect('getReleases', (artistUrl) => {
    Actions.releasesLoading(true);   
    
    axios.get(`${artistUrl}?year,desc`)
        .then(res => {
            
            return res.data

        })
        .then(returnedData => {
            
            Actions.addArtistReleases(returnedData)

        })
        .catch(error => {
            Actions.releasesFetchError(error);
        })
})