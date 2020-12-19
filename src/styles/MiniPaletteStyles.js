const styles = {
  root: {
    width: '232px',
    backgroundColor: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '7px',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover svg': {
      opacity: '1',
    },
  },
  colors: {
    backgroundColor: '#dae1e4',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    height: '150px',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: 'black',
    paddingTop: '0.5rem',
    fontSize: '1rem',
    position: 'relative',
  },
  emoji: {
    marginLeft: '0.5rem',
    fontSize: '1.5rem',
  },
  deleteIcon: {
    color: 'white',
    backgroundColor: '#eb3d30',
    width: '20px',
    height: '20px',
    position: 'absolute',
    right: '0px',
    top: '0px',
    padding: '5px',
    opacity: '0',
  },
}

export default styles
