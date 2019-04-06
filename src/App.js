import React, { Component } from 'react';
import './App.css';
import ImageContainer from "./Components/ImageContainer";
import Image from "./Components/Image";
import flower_images from "./flower_images.json";

class App extends Component {

  state = {
    imageArr: flower_images,
    msg: "Click a flower!",
    score: 0,
    highScore: 0,
    clickedFlowers: [],
    titleColors: [{c1: "blue lighten-1", c2: "lime-text text-accent-2"},{c1: "purple darken-1", c2: "orange-text text-lighten-1"},
                       {c1: "pink accent-2", c2: "purple-text text-darken-4"},{c1: "deep-purple lighten-2", c2: "red-text text-lighten-4"}][Math.floor(Math.random() * 4)]
  };

  flowerClicked = id => {
    let clicked = this.state.clickedFlowers;
    let msg = this.state.msg;
    let score = this.state.score;
    let highScore = this.state.highScore;
    if(clicked.includes(id)){
      clicked = [];
      msg = "Previously clicked";
      if(score > highScore){
        highScore = score;
      }
      score = 0;
    }else{
      clicked.push(id);
      score++;
    }
    if(clicked.length === this.state.imageArr.length){
      msg = "Score Maxed Out! Play Again?"
      highScore = score;
      score = 0;
      clicked = [];
    }
    const imageArr = this.state.imageArr.sort((a, b)=> 0.5 - Math.random());;
    this.setState({
      imageArr: imageArr,
      msg: msg,
      score: score,
      highScore: highScore,
      clickedFlowers: clicked
    })
  };

  render() {
    return (
      <React.Fragment>
        <header className="App">
          <div className={`nav-wrapper ${this.state.titleColors.c1}`}>
            <h3 className={`brand-logo center ${this.state.titleColors.c2}`}>
              React Click Game
            </h3>
          </div>
          <div clasclassNames="blue lighten-1" id="banner">
          <div className="container">

          </div>
        </div>
        </header>
        <main>
          <div className="row">
            <div className="col s12">
              <div className="card grey lighten-5">
                <div className="card-content">
                <div className="row">
                  <div className="col s12 m4 offset-m4 center-align grey lighten-4">
                      <h5>Have Fun and Enjoy!</h5>
                      <p>
                        Start the Click Game by clicking a flower. Each time you click a flower that you have yet to click you will be given a point. When you click an image that has
                        already been clicked this round then the current round will end and a new round will begin. Your high score will be tracked and can be seen 
                        next to the current round's score. The highest possible score is 20. Start your clicking!
                      </p>
                  </div>    
              </div>
                </div>
                <div className="row">
                  <div className="col s12 m6 offset-m3 center-align white">
                    <h5 className="col s4 grey-text text-darken-3" id="msg-box">{this.state.msg}</h5>
                    <h5 className="col s4 grey-text text-darken-3" id="score-box">Score: {this.state.score}</h5>
                    <h5 className="col s4 grey-text text-darken-3" id="highscore-box">High Score: {this.state.highScore}</h5>
                  </div> 
                </div>
                  <ImageContainer msg={this.state.msg} score={this.state.score} highScore={this.state.highScore}>
                    {
                      
                      this.state.imageArr.map((flower, i) => (
                        <Image key={i} image={flower} flowerClicked={this.flowerClicked} />
                      ))
                    }
                  </ImageContainer>
              </div>
            </div>
          </div>
        </main>
        <div className="divider"></div>
        <footer className="page-footer blue-grey lighten-5">
          <div className="footer-copyright">
            <div className="container black-text">
              © Peter Tanzy, 2019
              <a className="right" href="https://github.com/ptanzy/Clicky-Game">
                Github
              </a>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
