import {State} from 'jumpstate'

export default State({
    initial: {
        bandName: "the monks"
    },

    updateBandName(state, payload) {
        // console.log(state)
        console.log(payload)
        return { bandName: payload}
    },

    resetForm(state, payload) {
        return { bandName: "" }
    },
});