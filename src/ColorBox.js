import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import chroma from 'chroma-js'
import { withStyles } from '@material-ui/styles'
import './ColorBox.css'

const styles = {
  textColor: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.5 ? 'white' : 'rgb(85, 85, 85)',
  },

  ColorBox: {
    width: '20%',
    height: (props) => (props.showingFullPalette ? '25%' : '50%'),
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-4px',
    '&:hover button': {
      opacity: '1',
    },
  },

  seeMore: {
    background: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    border: 'none',
    right: '0',
    bottom: '0',
    color: '#fff',
    width: '60px',
    height: '30px',
    textAlign: 'center',
    lineHeight: '30px',
    textTransform: 'uppercase',
  },

  copyButton: {
    width: '100px',
    height: '30px',
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    marginLeft: '-50px',
    marginTop: '-15px',
    textAlign: 'center',
    outline: 'none',
    background: 'rgba(255, 255, 255, 0.3)',
    fontSize: '1rem',
    lineHeight: '30px',
    color: '#fff',
    textTransform: 'uppercase',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    opacity: '0',
    transition: '0.5s',
  },
}

class ColorBox extends Component {
  constructor(props) {
    super(props)
    this.state = { copied: false }
    this.changeCopyState = this.changeCopyState.bind(this)
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500)
    })
  }

  render() {
    const {
      name,
      background,
      paletteId,
      id,
      showingFullPalette,
      classes,
    } = this.props
    const { copied } = this.state
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className={classes.ColorBox} style={{ background }}>
          <div
            className={`copy-overlay ${copied && 'show'}`}
            style={{ background }}
          />
          <div className={`copy-msg ${copied && 'show'}`}>
            <h1>Copied!</h1>
            <p className={classes.textColor}>{this.props.background}</p>
          </div>
          <div className='copy-container'>
            <div className='box-content'>
              <span className={`color-name ${classes.textColor}`}>{name}</span>
            </div>
            <button className={`${classes.copyButton} ${classes.textColor}`}>
              Copy
            </button>
          </div>
          {showingFullPalette && (
            <Link
              to={`/palette/${paletteId}/${id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <span className={`${classes.seeMore} ${classes.textColor}`}>
                More
              </span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    )
  }
}

export default withStyles(styles)(ColorBox)
