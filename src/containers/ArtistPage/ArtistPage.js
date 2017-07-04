import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Actions} from 'jumpstate';
import '../../state/effects/artist-page-effect.js';

// soo this is a stateful component. It has to be a stateful component!
//so we already have the artistID. That's kinda important!!!
//So: let's make a new reducer for artists. We already knew we were gonna need that! 

class ArtistPage extends Component {
    constructor() {
        super()
        this.returnCopy = this.returnCopy.bind(this);
    }

    componentDidMount() {

        Actions.getBandInfo(this.props.match.params.artistId)

    }
    
    returnCopy(portfolioProps) {
        
        if (portfolioProps === undefined) {
            return null
        }
        //this regex is meant to take the return statements inside of the JSON and actually implement a break tag in there. BAD API DATA!!!
        //ripped from this stack overflow https://stackoverflow.com/questions/21572938/what-is-the-character-in-chrome-console
        let portfolioString = portfolioProps.replace(/(\r\n|\n|\r)/gm, "<br />");
        return portfolioString

    };

    render() {
        return(
            <section className="artist-info">
                <h1>{this.props.artistData.artistName}</h1>
                     
                    <aside className="artist-portfolio collapsed-portfolio"> 
                    {
                        this.props.artistData.artistData.profile === "" ? <p>no profile</p> : <p dangerouslySetInnerHTML={{ __html: this.returnCopy(this.props.artistData.artistData.profile)}}></p>
                    } 
                    </aside>

            </section>
        )
    }

}

export default connect( state => {

    return {

        artistData: state.artistData

    }

})(ArtistPage);