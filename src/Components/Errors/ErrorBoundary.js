import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ""
    }

    componentDidCatch = (error, info) => {
        this.setSate({
            hasError: true,
            errorMessage: error
        })
    }

    render() {
        if(this.state.hasError){
            return (
                <div>Something went wrong</div>
            )
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;