import React, { Component } from 'react';
import styled from 'styled-components';
const BackGround = styled.div`
  background-color: mistyrose;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  text-align: center;
`;
const GameOverText = styled.div`
  color: white;
  text-align: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
`;
const GameOverBackground = styled(BackGround)`
  background-color: darkseagreen;
`;
const StartBackground = styled(BackGround)`
  background-color: darkseagreen;
`;
const TopGrass = styled.div`
  position: absolute;
background-image: 
        url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='30' height='10'><polygon points='0,10 5,0 10,10 15,0 20,10 25,0 30,10' fill='DarkOliveGreen ' />
</svg>"),  url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='30' height='10'><polygon points='0,10 5,0 10,10 15,0 20,10 25,0 30,10' fill='DarkOliveGreen' transform='rotate(180, 15, 5)' />
</svg>");
  background-position: left bottom, left top;
  background-size: 15vh auto;
  background-repeat: repeat-x;
  width: 100%;
  height:100%;
  z-index: 3;

`;
export class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGameOver: false,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.gameOver && !this.props.gameOver) {
      this._intervalId = setTimeout(() => {
        console.log('setting timeout');
        this.setState({ showGameOver: true });
      }, 2000);
    }
    if (nextProps.running && !this.props.running) {
      clearInterval(this._intervalId);
      this.setState({ showGameOver: false });
    }
  }
  render() {
    if (this.props.gameOver && this.state.showGameOver) {
      return (
        <GameOverBackground {...this.props}>
          <GameOverText>
            <h1>Game Over!</h1>
            <h2>Tente novamente (Enter)</h2>
          </GameOverText>
        </GameOverBackground>
      );
    }
    if (!this.props.running && !this.props.gameOver) {
      return (
        <StartBackground>
          <h1 key={'title'}>React Game</h1>
          <h4 key={'Instructions'} style={{ marginTop: `7em` }}>
            COMO JOGAR:
            <br />
            <br />
            Enter - Começa
            <br />
            Espaço - Pula
            <br />
            Ctrl/Seta para baixo - Cai
            <br />
            Seta para direita - Acelera
          </h4>
          {this.props.children}
        </StartBackground>
      );
    }
    return (
      <BackGround {...this.props}>
        {<TopGrass />}
        {this.props.children}
      </BackGround>
    );
  }
}
export default Background;
