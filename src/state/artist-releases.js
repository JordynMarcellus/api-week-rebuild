import {State} from 'jumpstate';

export default State({
    initial: {
        releaseData: [],
        loading: false,
        error: false
    },

    addArtistReleases(state, releaseResponse) {

        return Object.assign({}, state, {
            releaseData: releaseResponse,
            loading: false

        })

    },
    
    releasesLoading(state, loadingStatus) { 
        return Object.assign({}, state, {
            loading: loadingStatus
        })
    },

    releasesFetchError(state, error) {
        return Object.assign({}, state, {
            error: error
        })
    }
})