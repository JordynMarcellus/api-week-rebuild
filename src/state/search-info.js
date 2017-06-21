import { State } from 'jumpstate'

export default State({

    initial: {
        searchData: [],
        pagination: {},
        loading: false,
        error: false
    },
    addSearchData(state, searchResponse) {

        return Object.assign({}, state, {
            // will that even work???
            // it did :3
            searchData: state.searchData.concat(searchResponse.results),
            pagination: searchResponse.pagination,
            loading: false
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
    },
    resetSearch(state, newState) {
        // okay so I thiiiink this is probz the best way???? https://stackoverflow.com/questions/39456184/clearing-an-array-state-in-redux
        return Object.assign({}, state, {
            searchData: [],
            pagination: {}
        });
    }
});