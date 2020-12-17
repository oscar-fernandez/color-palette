import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MiniPalette from './MiniPalette'
import { withStyles } from '@material-ui/styles'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styles from './styles/PaletteListStyles'

class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`)
  }
  render() {
    const { palettes, classes, deletePalette } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.navContainer}>
            <nav className={classes.nav}>
              <h1>React Colors</h1>
              <Link to='/palette/new'>Create Palette</Link>
            </nav>
          </div>
          <div className={classes.listContainer}>
            <TransitionGroup className={classes.palettes}>
              {palettes.map((palette) => (
                <CSSTransition key={palette.id} classNames='fade' timeout={300}>
                  <div className={classes.paletteContainer}>
                    <MiniPalette
                      {...palette}
                      handleClick={() => this.goToPalette(palette.id)}
                      handleDelete={deletePalette}
                      key={palette.id}
                      id={palette.id}
                    />
                  </div>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PaletteList)
