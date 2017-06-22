import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class ArtistBlurb extends Component {

    render() {
        return(

            <section className="artistBlurb">
                <img alt={`${this.props.artistInfo.title}.`} src={ this.props.artistInfo.thumb === "https://api-img.discogs.com/images/warning.png" ? "http://via.placeholder.com/150x150" : this.props.artistInfo.thumb  } />
                <Link to={`/artist/${this.props.artistInfo.id}`}> {this.props.artistInfo.title} </Link>

                { console.log(this.props) }

            </section>

        )
    }

}

export default ArtistBlurb