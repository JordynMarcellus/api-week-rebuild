import {State} from 'jumpstate'

export default State({
    initial: {
        bandName: "the monks"
    },

    updateBandName(state, payload) {
        console.log("boop")
        return { bandName: "bandName"}
    },

    resetForm(state, payload) {
        return { bandName: "" }
    }
});