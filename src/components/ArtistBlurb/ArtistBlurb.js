import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './ArtistBlurb.styl';

class ArtistBlurb extends Component {

    render() {
        return(

            <section className="artist-blurb">
                <img alt={`${this.props.artistInfo.title}.`} src={ this.props.artistInfo.thumb === "https://api-img.discogs.com/images/warning.png" ? "http://via.placeholder.com/150x150" : this.props.artistInfo.thumb  } />
                <Link to={`/artist/${this.props.artistInfo.id}`}> {this.props.artistInfo.title} </Link>
            </section>
        )
    }

}

export default ArtistBlurb