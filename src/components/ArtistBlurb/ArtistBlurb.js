import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class ArtistBlurb extends Component {

    render() {
        return(

            <section className="artistBlurb">
                <img src={ this.props.artistInfo.thumb === "https://api-img.discogs.com/images/warning.png" ? "http://via.placeholder.com/150x150" : this.props.artistInfo.thumb  } />
                <Link to=""> {this.props.artistInfo.title} </Link>

                { console.log(this.props) }

            </section>

        )
    }

}

export default ArtistBlurb