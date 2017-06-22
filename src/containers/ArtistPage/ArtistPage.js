import React, {Component} from 'react';
import { connect } from 'react-redux';

// soo this is a stateful component. It has to be a stateful component!
//so we already have the artistID. That's kinda important!!!
//So: let's make a new reducer for artists. We already knew we were gonna need that! 

class ArtistPage extends Component {

    render() {
        return(
            <div>

                <h1> {} </h1>

            </div>
        )
    }

}

export default connect( state => {
    console.log(state);

    return {

        artistData: state.artistData

    }

})(ArtistPage);