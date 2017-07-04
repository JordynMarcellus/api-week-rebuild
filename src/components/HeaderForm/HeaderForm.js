import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Actions } from 'jumpstate';

import './HeaderForm.styl';

import '../../state/effects/search-effect.js';

class HeaderForm extends Component {

    constructor() {
        super()

        this.handleSubmit = this.handleSubmit.bind(this)
        this.resetSearch = this.resetSearch.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        
        if (this.props.searchData.length !== 0) {
            Actions.resetSearch();
        }
        let transformedBandName = this.props.bandName.replace(/\s/, "+")
        Actions.getBandSearchInfo(transformedBandName);
    }

    resetSearch(event) {

        event.preventDefault();
        Actions.resetSearch();

    }

    render() {
        return (
            <header className="header-form">
                <h1> Discography at a glance </h1>
                <form className="header-form__form-element" onChange={(event) => Actions.updateBandName( event.target.value ) } onSubmit={ (event) => this.handleSubmit(event) } >
                    <label htmlFor="band-search"> Please enter a musician or musical group!</label>
                    <input type="text" className="header-form__text-input" id="band-search" />
                    <button className="btn submit-btn" type="submit" > Submit </button>
                    <button className="btn reset-btn" type="reset" onClick={(event) => this.resetSearch(event) }> Reset </button>
                </form>
                { this.props.searchData.length !== 0 ? <h2> Here's what we found... </h2> : null  }
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