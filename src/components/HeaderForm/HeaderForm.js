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

    resetSearch(event) {
        //we need to prevent default or this is going to submit. i am sure of it.
    }

    render() {
        return (
            <header>
                <form className="header-form__form-element" onChange={(event) => dispatch( Actions.updateBandName( event.target.value ) )} onSubmit={ (event) => this.handleSubmit(event) } >
                    <label htmlFor="band-search"> Enter a bandname</label>
                    <input type="text" className="header-form__text-input" id="band-search" />
                    <button className="submitter" > Submit </button>
                </form>
                <button className onClick={(event) => Actions.resetSearch() }> Reset </button>
            </header>
        )
    }
}

export default connect( state => {

    return {
        bandName: state.formData.bandName,
        changeBandName: state.formData.updateBandName
    }

})(HeaderForm)