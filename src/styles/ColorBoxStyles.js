import chroma from 'chroma-js'
import sizes from './sizes'

export default {
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
    [sizes.down('lg')]: {
      width: (props) => (props.showingFullPalette ? '25%' : '20%'),
      height: (props) => (props.showingFullPalette ? '20%' : '50%'),
    },
    [sizes.down('md')]: {
      width: () => '50%',
      height: (props) => (props.showingFullPalette ? '10%' : '20%'),
    },
    [sizes.down('xs')]: {
      width: () => '100%',
      height: (props) => (props.showingFullPalette ? '5%' : '10%'),
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

  colorName: {
    position: 'absolute',
    left: '0',
    bottom: '0',
    padding: '10px',
    fontSize: '12px',
    color: '#000',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '0',
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

  copyOverlay: {
    opacity: '0',
    zIndex: '0',
    width: '100%',
    height: '100%',
    transition: 'transform 0.6s ease-in-out',
    transform: 'scale(0.1)',
  },

  showOverlay: {
    opacity: '1',
    transform: 'scale(50)',
    zIndex: '10',
    position: 'absolute',
  },

  copyMessage: {
    position: 'fixed',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '4rem',
    transform: 'scale(0.1)',
    opacity: '0',
    color: 'white',
    '& h1': {
      fontWeight: '400',
      textShadow: '1px 2px #000',
      background: 'rgba(255, 255, 255, 0.2)',
      width: '100%',
      textAlign: 'center',
      marginBottom: '0',
      padding: '1rem',
      [sizes.down['xs']]: {
        fontSize: '5rem',
      },
    },
    '& p': {
      fontSize: '2rem',
      fontWeight: '100',
    },
  },

  showCopyMessage: {
    opacity: '1',
    transform: 'scale(1)',
    zIndex: '11',
    transition: 'all 0.4s ease-in-out',
    transitionDelay: '0.3s',
  },
}
