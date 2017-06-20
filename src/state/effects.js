import { Effect, Actions } from 'jumpstate';
import axios from 'axios';
import apiInfo from './api-info.js'

export default Effect('getBandSearchInfo', (payload) => {

        Actions.searchDataLoading(true);
        // we are going to have a new value in there that will refine and sort :3
        axios.get(`https://api.discogs.com/database/search?key=${apiInfo.key}&secret=${apiInfo.secret}&q=${payload}&artist`)
            .then( res => {
                console.log(res.data)
                return res.data
            })
            .then( returnedData => {
                // SO THUNKS ARE FUNCTIONS THAT RETURNS FUNCTIONS THAT DO ASYNC MISCHIEF
                // THANK YOU BASED JUMPSTATE
                return () =>  () => Actions.addSearchData(returnedData)
            })
            .catch( err => Actions.searchDataFetchError(err) )
});