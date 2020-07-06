import React, {Component} from 'react';

class Movie extends Component {
    render() {
        return (
            <div>
                <h4><a href={this.props.url}>{this.props.name}</a></h4>
            </div>
        )
    }
}

export default Movie;