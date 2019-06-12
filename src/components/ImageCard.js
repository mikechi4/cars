import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spans: 0
        };

        // allows us to access DOM nodes
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        // we pass a callback and add event listener because when try and grab client here w/o a callback, we see 0 because the image has not even loaded in the DOM yet
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10);
        this.setState({spans})
    }

    render(){
        const {description, urls} = this.props.image;
        return (
            <div className='image-card' style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                    alt={description} 
                    src={urls.regular}
                    ref={this.imageRef}
                />
            </div>
        );
    }
}

export default ImageCard;