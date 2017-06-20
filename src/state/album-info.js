import { State } from 'jumpstate'

export default State({

    initial: {
        albumData: [],
        loading: false,
        error: false
    },
    addAlbumData(state, albumResponse) {
        return Object.assign({}, state, {
            // will that even work???
            // it should! 
            albumData: state.albumData.concat(albumResponse)
        })
    },
    albumDataLoading(state, loadingStatus) {
        return Object.assign({}, state, {
            loading: loadingStatus
        })
    },
    albumDataFetchError(state, error) {
        return Object.assign({}, state, {
            error: error
        });
    }

});