import React, { Component } from 'react'
import { connect } from 'react-redux'

export default function (ComposedComponent) {
    class Authentication extends Component {

        componentWillMount() {
            if (!this.props.authenticated) this.props.navigation.navigate('Login')
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.authenticated) this.props.navigation.navigate('Login')
        }

        render() {
            return (
                <ComposedComponent {...this.props} />
            )
        }
    }

    const mapStateToProps = ({ auth }) => {
        return {
            authenticated: auth.isAuthenticated
        }
    }

    return connect(mapStateToProps)(Authentication)
}