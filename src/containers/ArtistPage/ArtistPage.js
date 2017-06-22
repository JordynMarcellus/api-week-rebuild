import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Actions} from 'jumpstate';
import '../../state/effects/artist-page-effect.js';

// soo this is a stateful component. It has to be a stateful component!
//so we already have the artistID. That's kinda important!!!
//So: let's make a new reducer for artists. We already knew we were gonna need that! 

class ArtistPage extends Component {

    componentDidMount() {

        Actions.getBandInfo(this.props.match.params.artistId)

    }

    render() {
        return(
            <div>

                <h1>{this.props.artistData.artistName}</h1>

                <p> {this.props.artistData.artistData.profile === "" ? "no profile" : this.props.artistData.artistData.profile } </p>

            </div>
        )
    }

}

export default connect( state => {

    return {

        artistData: state.artistData

    }

})(ArtistPage);