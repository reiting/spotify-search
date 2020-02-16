import React from 'react';

class SearchBox extends React.Component {
    state = {
        value: ''
    }

    handleChange = (event) => {
        console.log('changing words');
        this.setState({ value: event.target.value });
        console.log(this.state.value);
    };

    handleSubmit = (event) => {
        //will get list of top tracks
        console.log('getting tracks');
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <input type='submit' value='Submit' />
                </form>
            </div>
        )
    }
}

export default SearchBox;