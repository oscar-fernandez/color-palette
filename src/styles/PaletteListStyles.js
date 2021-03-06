import sizes from './sizes'
import bg from './bg.svg'

const styles = {
  '@global': {
    '.fade-exit': {
      opacity: 1,
    },
    '.fade-exit-active': {
      opacity: 0,
      transition: 'opacity 300ms ease-out',
    },
  },
  root: {
    backgroundColor: '#01a1f7',
    backgroundImage: `url(${bg})`,
    /* background by SVGBackgrounds.com */
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  container: {
    width: '855px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    [sizes.down('md')]: {
      width: '80%',
    },
    [sizes.down('xs')]: {
      width: '95%',
    },
  },
  navContainer: {
    marginBottom: '1rem',
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    '& h1': {
      fontSize: '2rem',
    },
    '& a': {
      textDecoration: 'none',
      color: 'white',
      background: 'rgba(196,196,196,0.5)',
      padding: '1rem 2rem',
      borderRadius: '5px',
      [sizes.down('xs')]: {
        padding: '10px 15px',
      },
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
  listContainer: {
    [sizes.down('md')]: {
      margin: '0 auto',
      width: '80%',
    },
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '40px',
    [sizes.down('md')]: {
      gridTemplateColumns: 'repeat(2, 47.5%)',
      gridGap: '30px',
    },
    [sizes.down('sm')]: {
      gridTemplateColumns: '1fr',
      gap: '30px',
    },
  },
  paletteContainer: {
    margin: 'auto',
  },
}

export default styles
