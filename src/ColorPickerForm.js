import React, { Component } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { ChromePicker } from 'react-color'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import styles from './styles/ColorPickerFormStyles'

class ColorPickerForm extends Component {
  constructor(props) {
    super(props)
    this.state = { currentColor: 'teal', newColorName: '' }
    this.updateCurrentColor = this.updateCurrentColor.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    )
    ValidatorForm.addValidationRule('isColorUnique', () =>
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    )
  }

  updateCurrentColor(newColor) {
    this.setState({
      currentColor: newColor.hex,
      newColorName: this.state.newColorName,
    })
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName,
    }
    this.props.addNewColor(newColor)
    this.setState({ newColorName: '' })
  }

  render() {
    const { paletteIsFull, classes } = this.props
    const { currentColor, newColorName } = this.state
    return (
      <div className={classes.root}>
        <ChromePicker
          color={currentColor}
          onChangeComplete={this.updateCurrentColor}
          className={classes.picker}
        />
        <ValidatorForm onSubmit={this.handleSubmit} instantValidate={false}>
          <TextValidator
            placeholder='Color Name'
            variant='filled'
            margin='normal'
            className={classes.colorNameInput}
            value={newColorName}
            name='newColorName'
            onChange={this.handleChange}
            validators={['required', 'isColorUnique', 'isColorNameUnique']}
            errorMessages={[
              'Enter a color name',
              'This color is already in your palette',
              'Color name must be unique',
            ]}
          />
          <Button
            variant='contained'
            type='submit'
            color='primary'
            disabled={paletteIsFull}
            className={classes.addColor}
            style={{
              backgroundColor: paletteIsFull
                ? 'rgba(0, 0, 0, 0.12)'
                : currentColor,
            }}
          >
            {paletteIsFull ? 'Palette Full' : 'Add Color'}
          </Button>
        </ValidatorForm>
      </div>
    )
  }
}

export default withStyles(styles)(ColorPickerForm)
