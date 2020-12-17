import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MiniPalette from './MiniPalette'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'
import blue from '@material-ui/core/colors/blue'
import red from '@material-ui/core/colors/red'
import { withStyles } from '@material-ui/styles'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styles from './styles/PaletteListStyles'

class PaletteList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openDeleteDialog: false,
      deletingId: '',
    }
    this.openDialog = this.openDialog.bind(this)
    this.closeDialog = this.closeDialog.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.goToPalette = this.goToPalette.bind(this)
  }
  openDialog(id) {
    this.setState({ openDeleteDialog: true, deletingId: id })
  }
  closeDialog() {
    this.setState({ openDeleteDialog: false, deletingId: '' })
  }
  handleDelete() {
    this.props.deletePalette(this.state.deletingId)
    this.closeDialog()
  }

  goToPalette(id) {
    this.props.history.push(`/palette/${id}`)
  }
  render() {
    const { palettes, classes } = this.props
    const { openDeleteDialog } = this.state
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
                      handleClick={this.goToPalette}
                      openDialog={this.openDialog}
                      key={palette.id}
                      id={palette.id}
                    />
                  </div>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
        </div>
        <Dialog
          open={openDeleteDialog}
          aria-labelled-by='delete-dialog-title'
          onClose={this.closeDialog}
        >
          <DialogTitle id='delete-dialog-title'>
            Delete this palette?
          </DialogTitle>
          <List>
            <ListItem onClick={this.handleDelete} button>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[100], color: blue[600] }}
                >
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Delete</ListItemText>
            </ListItem>
            <ListItem onClick={this.closeDialog} button>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Cancel</ListItemText>
            </ListItem>
          </List>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(styles)(PaletteList)
