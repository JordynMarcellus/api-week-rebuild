import { State } from 'jumpstate'

export default State({

    initial: {
        artistData: {},
        artistName: "",
        artistID: null,
        // pagination: {},
        loading: false,
        error: false
    },
    addArtistData(state, searchResponse) {
        return Object.assign({}, state, {
            // will that even work???
            // it did :3
            artistData: searchResponse,
            pagination: searchResponse.pagination,
            loading: false
        })
    },
    receiveArtistInfo(state, payload) {

        return Object.assign({}, state, {

            artistName: payload.artistName,
            artistID: payload.artistId
        });
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