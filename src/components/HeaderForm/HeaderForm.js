import React, { Component} from 'react'
import { connect } from 'react-redux'
import { Actions, dispatch } from 'jumpstate'
import '../../state/effects.js'

class HeaderForm extends Component {

    constructor() {
        super()

        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit(event) {
        // since we're submitting :\
        event.preventDefault();
        let transformedBandName = this.props.bandName.replace(/\s/, "+")
        Actions.getBandSearchInfo(transformedBandName);
    }

    render() {
        return (
            <form onChange={(event) => dispatch( Actions.updateBandName( event.target.value ) )} onSubmit={ (event) => this.handleSubmit(event) } >
                <label> Enter a bandname</label>
                <input type="text" />
                <p>{ this.props.bandName }</p>
            </form>
        )
    }
}

export default connect( state => {

    return {
        bandName: state.formData.bandName,
        changeBandName: state.formData.updateBandName
    }

})(HeaderForm)