import React, { Component} from 'react'
import { connect } from 'react-redux'
import { Actions } from 'jumpstate'

class HeaderForm extends Component {
    render() {
        return (
            <form onChange={(event) => Actions.updateBandName(event.target.value)}>
                <label> Enter a bandname</label>
                <input type="text" />
                <p>{ this.props.bandName }</p>
            </form>
        )
    }
}

export default connect( state => {
    console.log(state)
    return {
        bandName: state.formData.bandName,
        changeBandName: state.formData.updateBandName
    }
})(HeaderForm)