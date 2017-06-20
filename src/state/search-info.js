import { State } from 'jumpstate'

export default State({

    initial: {
        searchData: [],
        loading: false,
        error: false
    },
    addSearchData(state, searchResponse) {
        return Object.assign({}, state, {
            // will that even work???
            // it should! 
            searchData: state.searchData.concat(searchResponse)
        })
    },
    searchDataLoading(state, loadingStatus) {
        return Object.assign({}, state, {
            loading: loadingStatus
        })
    },
    searchDataFetchError(state, error) {
        return Object.assign({}, state, {
            error: error
        });
    }

});