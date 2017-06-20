import React, { Component} from 'react'
import { connect } from 'react-redux'

class HeaderForm extends Component {
    render() {
        return (

            <form>
                <label> Enter a bandname</label>
                <input type="text" />
                <p>{ this.props.bandName }</p>
            </form>
        )
    }
}

export default connect( state => {
    return {
        bandName: state.formData.bandName
    }
})(HeaderForm)