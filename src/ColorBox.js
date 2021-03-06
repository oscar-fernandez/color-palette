import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { withStyles } from '@material-ui/styles'
import styles from './styles/ColorBoxStyles'

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
            className={`${classes.copyOverlay} ${
              copied && `${classes.showOverlay}`
            }`}
            style={{ background }}
          />
          <div
            className={`${classes.copyMessage} ${
              copied && `${classes.showCopyMessage}`
            }`}
          >
            <h1>Copied!</h1>
            <p className={classes.textColor}>{background.toUpperCase()}</p>
          </div>
          <div>
            <div>
              <span className={`${classes.colorName} ${classes.textColor}`}>
                {name}
              </span>
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
