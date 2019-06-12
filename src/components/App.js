import React from 'react';
import unsplash from '../api/unsplash';
// Components 
import SearchBar from './SearchBar';
import ImageList from './ImageList';

console.log(process.env.REACT_APP_API_KEY);

class App extends React.Component {

    state = {
        images: []
    };
    
    onSearchSubmit = async (term) => {
        
        const response = await unsplash
            .get('/search/photos', {
                params: {
                    query: term
                }
            });

        //  will throw an error because this has no context. you'll need to update this method to be an arrow function
        this.setState({images: response.data.results});
    };

    render(){
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                {/* onSubmit not to be confused w/ built in JSX onSubmit */}
                <SearchBar onSubmit = {this.onSearchSubmit}/>
                {/* Pass images into image list via props */}
                <ImageList images = {this.state.images}/>
            </div>
        );
    }
}

export default App;