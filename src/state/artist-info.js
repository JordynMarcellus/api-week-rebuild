import { State } from 'jumpstate'

export default State({

    initial: {
        artistData: {},
        artistName: "",
        artistID: null,
        loading: false,
        error: false
    },
    addArtistData(state, searchResponse) {

        return Object.assign({}, state, {
            // will that even work???
            // it did :3
            artistData: searchResponse,
            artistName: searchResponse.name,
            artistID: searchResponse.id,
            loading: false,

        })
    },
    artistDataLoading(state, loadingStatus) {
        return Object.assign({}, state, {
            loading: loadingStatus
        })
    },
    artistDataFetchError(state, error) {
        return Object.assign({}, state, {
            error: error
        });
    }
});