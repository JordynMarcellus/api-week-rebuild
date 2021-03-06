import { Effect, Actions } from 'jumpstate';
import axios from 'axios';
import apiInfo from '../api-info.js'

export default Effect('getBandSearchInfo', (payload) => {

    Actions.searchDataLoading(true);
    
    // we are going to have a new value in there that will refine and sort :3
    axios.get(`https://api.discogs.com/database/search?key=${apiInfo.key}&secret=${apiInfo.secret}&q=${payload}&artist`)
        .then( res => {
            return res.data
        }).then( returnedData => {

            Actions.addSearchPaginationData(returnedData.pagination);
            // we can make this more dynamic later...

            let filteredData = returnedData.results.filter( searchResult => {
                return searchResult.type === "artist"
            });

            Actions.addSearchData(filteredData)
        })
        .catch( err => Actions.searchDataFetchError(err) )
});