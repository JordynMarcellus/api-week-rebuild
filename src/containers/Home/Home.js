import React, {Component} from 'react';
import {connect} from 'react-redux';
import HeaderForm from '../../components/HeaderForm/HeaderForm';
import ArtistBlurb from '../../components/ArtistBlurb/ArtistBlurb';
import Spinner from '../../components/Spinner/Spinner';

class Home extends Component {

    render() {
        return(
            <section>
                <HeaderForm></HeaderForm>
                { this.props.searchData.length !== 0 ? this.props.searchData.map( (artist, index) => { return <ArtistBlurb key={ index } artistInfo={artist}></ArtistBlurb> }) : <Spinner></Spinner> }
            </section>
        )
    }

}

export default connect( state => {
    console.log(state)
    return {
        searchData: state.searchData.searchData,
        pagination: state.searchData.pagination,
        loading: state.searchData.loading
    }
})(Home)