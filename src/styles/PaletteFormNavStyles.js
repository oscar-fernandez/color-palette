import { drawerWidth } from '../constants'
import sizes from './sizes'

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  hide: {
    display: 'none',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
    [sizes.down('xs')]: {
      marginRight: '5px',
    },
  },
  navBtns: {
    marginRight: '1rem',
    '& a': {
      textDecoration: 'none',
    },
    [sizes.down('xs')]: {
      marginRight: '0px',
    },
  },
  button: {
    margin: '0 0.5rem',
  },
})

export default styles
