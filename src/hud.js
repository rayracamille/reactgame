import React, { Component } from 'react';
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  padding: 1.3rem;
  font-size: 1.3rem;
  z-index: 4;
`
export class Hud extends Component {
  render () {
    return (
      <Container>
        Score: {this.props.score}
      </Container>
    )
  }
}
export default Hud
