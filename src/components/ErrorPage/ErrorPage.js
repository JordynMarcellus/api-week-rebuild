import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import './ErrorPage.styl'

class ErrorPage extends PureComponent {

    render() {
        return(
            <div className="error-page" >
                <div className="error-page__wrapper">
                    <span className=" error-page__emoji" aria-label="ghost emoji, indicating that there's an error page" role="img"> 👻 </span>
                        <h1> Oops! Goofed it.</h1>
                        <Link to="/"> Let's go back!</Link>
		        </div>
            </div>
        )
    }
}

export default ErrorPage;