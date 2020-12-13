import React from 'react'
import { SortableElement } from 'react-sortable-hoc'
import { withStyles } from '@material-ui/styles'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

const styles = {
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-5.8px',
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.5)',
    },
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: '0px',
    bottom: '0px',
    padding: '10px',
    color: 'rgba(0,0,0,0.65)',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  deleteIcon: {
    transition: 'all 0.3s ease-in-out',
  },
}

const DraggableColorBox = SortableElement((props) => {
  const { classes, name, handleClick, color } = props
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteForeverIcon
          className={classes.deleteIcon}
          onClick={handleClick}
        />
      </div>
    </div>
  )
})

export default withStyles(styles)(DraggableColorBox)
