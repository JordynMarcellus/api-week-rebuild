import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import './ErrorPage.styl'

class ErrorPage extends PureComponent {

    render() {
        return(
            <div className="error-page" >
                <div className="error-page__wrapper">
                    <span className=" error-page__emoji  " role="img"> 👻 </span>
                        <h1> Oops! Looks like I goofed it.</h1>
                        <Link to="/"> Let's go back, shall we? </Link>
		        </div>
            </div>
        )
    }
}

export default ErrorPage;