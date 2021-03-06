import sizes from './sizes'

const styles = {
  Navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex - start',
    height: '6vh',
  },
  logo: {
    marginRight: '15px',
    padding: '0 13px',
    fontSize: '22px',
    backgroundColor: '#eceff1',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '500',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& a': {
      textDecoration: 'none',
      color: 'black',
    },
    [sizes.down('xs')]: {
      display: 'none',
    },
  },
  sliderContainer: {
    display: 'flex',
    flexDirection: 'column',
    '& span': {
      marginLeft: '10px',
    },
  },
  slider: {
    width: '340px',
    margin: '0 20px',
    display: 'inline-block',
    '& .rc-slider-track': {
      backgroundColor: 'transparent',
    },
    '& .rc-slider-rail': {
      height: '8px',
      transform: 'translateX(-10px)',
    },
    '& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover': {
      backgroundColor: 'green',
      outline: 'none',
      border: '2px solid green',
      boxShadow: 'none',
      width: '13px',
      height: '13px',
      marginLeft: '-7px',
      marginTop: '-3px',
    },
    [sizes.down('sm')]: {
      width: '200px',
    },
  },
  selectContainer: {
    marginLeft: 'auto',
    marginRight: '2rem',
  },
}

export default styles
