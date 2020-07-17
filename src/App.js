import React, {Component} from 'react';

class App extends Component {
  state = {
    top: "",
    bottom: "",
    image: "",
    allImage: [],
    color: 4
  }

  componentDidMount = () => {
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(data => 
      this.setState({
        allImage: data.data.memes
      })
      )
  }

  changeHandle = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  generateHandle = (e) => {
    e.preventDefault()
    const i = Math.floor(Math.random() * this.state.allImage.length)
    const newImage = this.state.allImage[i].url
    this.setState({
      image: newImage
    })
  }

  col1Handle = () => {
    this.setState({
      color: 1
    })
  }

  col2Handle = () => {
    this.setState({
      color: 2
    })
  }

  col3Handle = () => {
    this.setState({
      color: 3
    })
  }

  col4Handle = () => {
    this.setState({
      color: 4
    })
  }

  col1 = {
    color: "#ed1c25"
  }

  col2 = {
    color: "#FFF062"
  }

  col3 = {
    color: "#e5e5e5"
  }

  render() { 
    return (
      <div className="main-box">
        <button type="button" onClick={this.generateHandle}>MeMe</button>
        <div className="color-box">
        <span>Color</span>
          <button className="col1" onClick={this.col1Handle}></button>
          <button className="col2" onClick={this.col2Handle}></button>
          <button className="col3" onClick={this.col3Handle}></button>
          <button className="col4" onClick={this.col4Handle}></button>
        </div>
        <div className="input-box">
          <div>Top Text</div>
          <input type="text" name="top" value={this.state.top} onChange={this.changeHandle} />

          <div>Bottom Text</div>
          <input type="text" name="bottom" value={this.state.bottom} onChange={this.changeHandle} />
          </div>

        <div className="text-box" style={this.state.color === 1 ? this.col1 : (this.state.color === 2 ? this.col2 : (this.state.color === 3 ? this.col3 : {color: "#000"}))}>
          <img src={this.state.image} alt="Click MeMe button"/>
          <div className="top-text">{this.state.top}</div>
          <div className="bottom-text">{this.state.bottom}</div>
        </div>
      </div>
    );
  }
}
 
export default App;
