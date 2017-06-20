import React, { Component} from 'react';
import { connect } from 'react-redux';
import AlbumCard from '../../components/AlbumCard/AlbumCard';
import Spinner from '../../components/Spinner/Spinner';

import './CardsContainer.css'

class CardsContainer extends Component {

    render() {

        return(
            <section>

                {
                    this.props.albumsForDisplay !== 0 ? <Spinner></Spinner> :
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
        albumsForDisplay: state.albumData.albumData
    }
 })(CardsContainer);