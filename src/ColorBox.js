import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import chroma from 'chroma-js'
import './ColorBox.css'

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
    const { name, background, paletteId, id, showLink } = this.props
    const { copied } = this.state
    const isDarkColor = chroma(background).luminance() <= 0.5
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className='ColorBox' style={{ background }}>
          <div
            className={`copy-overlay ${copied && 'show'}`}
            style={{ background }}
          />
          <div className={`copy-msg ${copied && 'show'}`}>
            <h1>Copied!</h1>
            <p className={`${!isDarkColor && 'dark-text'}`}>
              {this.props.background}
            </p>
          </div>
          <div className='copy-container'>
            <div className='box-content'>
              <span className={`color-name ${isDarkColor && 'light-text'}`}>
                {name} {chroma(background).luminance()}
              </span>
            </div>
            <button className={`copy-button ${!isDarkColor && 'dark-text'}`}>
              Copy
            </button>
          </div>
          {showLink && (
            <Link
              to={`/palette/${paletteId}/${id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <span className={`see-more ${!isDarkColor && 'dark-text'}`}>
                More
              </span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    )
  }
}

export default ColorBox
