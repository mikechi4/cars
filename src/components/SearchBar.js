import React from 'react';

class SearchBar extends React.Component {

    // name of method is community convention on how to name callback handlers
    onInputChange(event) {
        console.log(event.target.value)
    }

    // want to use an arrow function here because it will bind and give context to this
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term)
    }

    state = {
        term: ""
    };

    render() {
        return (
            <div className = "search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        {/* GOTCHA --- don't use parens on the onCchange property because the method will fire off when component rendered.
                    onchange is a callback so it's not necessary to use parens*/}
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange = {(e) => this.setState({term: e.target.value})}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;