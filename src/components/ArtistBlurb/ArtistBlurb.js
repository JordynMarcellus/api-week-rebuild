import React, {Component} from 'react';

class ArtistBlurb extends Component {

    render() {
        return(

            <section className="artistBlurb">

                <p> { this.props.artistInfo.title } </p>

            </section>

        )
    }

}

export default ArtistBlurb