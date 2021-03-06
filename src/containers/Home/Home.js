import React, {Component} from 'react';
import {connect} from 'react-redux';
import HeaderForm from '../../components/HeaderForm/HeaderForm';
import ArtistBlurb from '../../components/ArtistBlurb/ArtistBlurb';
import Spinner from '../../components/Spinner/Spinner';

class Home extends Component {

    render() {
        return(
            <div>
                <HeaderForm></HeaderForm>
                { this.props.searchData.length !== 0 ? this.props.searchData.map( (artist, index) => { return <ArtistBlurb key={ index } artistInfo={artist}></ArtistBlurb> }) : <Spinner></Spinner> }
            </div>
        )
    }

}

export default connect( state => {
    return {
        searchData: state.searchData.searchData,
        pagination: state.searchData.pagination,
        loading: state.searchData.loading
    }
})(Home)