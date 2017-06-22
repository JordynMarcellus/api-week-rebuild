import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Actions, dispatch } from 'jumpstate';
import '../../state/effects/search-effect.js';

class HeaderForm extends Component {

    constructor() {
        super()

        this.handleSubmit = this.handleSubmit.bind(this)
        this.resetSearch = this.resetSearch.bind(this)
    }

    handleSubmit(event) {
        // since we're submitting :\
        event.preventDefault();
        let transformedBandName = this.props.bandName.replace(/\s/, "+")
        Actions.getBandSearchInfo(transformedBandName);
    }

    resetSearch(event) {

        event.preventDefault();
        Actions.resetSearch();

    }

    render() {
        return (
            <header>
                <form className="header-form__form-element" onChange={(event) => dispatch( Actions.updateBandName( event.target.value ) )} onSubmit={ (event) => this.handleSubmit(event) } >
                    <label htmlFor="band-search"> Enter a bandname</label>
                    <input type="text" className="header-form__text-input" id="band-search" />
                    <button className="submitter" > Submit </button>
                </form>
                <button className onClick={(event) => this.resetSearch(event) }> Reset </button>
                { this.props.searchData.length !== 0 ? <h1> Here's what we found... </h1> : <h1> Please enter an artist! </h1>  }
            </header>
        )
    }
}

export default connect( state => {

    return {
        bandName: state.formData.bandName,
        changeBandName: state.formData.updateBandName,
        searchData: state.searchData.searchData,
    }

})(HeaderForm)