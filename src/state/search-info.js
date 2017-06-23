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
            searchData: state.searchData.concat(searchResponse),
            loading: false
        })
    },
    addSearchPaginationData(state, searchPagination) {
        return Object.assign({}, state, {

            pagination: searchPagination

        });
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
    resetSearch(state) {
        console.log("clearing search")
        // okay so I thiiiink this is probz the best way???? https://stackoverflow.com/questions/39456184/clearing-an-array-state-in-redux
        return Object.assign({}, state, {
            searchData: [],
            pagination: {}
        });
    }
});