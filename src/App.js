import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FoodRecognition from './components/FoodRecognition/FoodRecognition';
import './App.css';

const app = new Clarifai.App({
  apiKey: '22d790c515cc415da3d75fbe78236577'
 });

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      ingridients: [],
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models.predict(Clarifai.FOOD_MODEL, this.state.input)
    .then(response => {
      const { concepts } = response.outputs[0].data;

      if(concepts && concepts.length > 0) {
        for(const prediction of concepts) {
          this.state.ingridients.push(prediction)
        }
        this.setState(this.state.ingridients)
      }

    })
    .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        {/* <Navigation /> */}
        <Logo />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit} 
        />
        {this.state && this.state.imageUrl && 
          <FoodRecognition 
            imageUrl={this.state.imageUrl}
            ingridients={this.state.ingridients}
          />
        }
      </div>
    );
  }
}

export default App;