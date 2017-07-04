import React, { Component} from 'react';
import { connect } from 'react-redux';
import AlbumCard from '../../components/AlbumCard/AlbumCard';
import Spinner from '../../components/Spinner/Spinner';

import './CardsContainer.styl'

class CardsContainer extends Component {

    render() {

        return(
            <section className="cards-container">

                {
                    this.props.albumsForDisplay !== 0 ? null :
                        this.props.albumsForDisplay.map( (album, index) => {
                            return <AlbumCard key={index}></AlbumCard>
                    })
                }

            </section>

        )

    }

}

export default connect( state => {
    return {
        albumsForDisplay: state.searchData.searchData
    }
 })(CardsContainer);