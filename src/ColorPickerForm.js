import React, { Component } from 'react'
import classNames from 'clsx'
import { withStyles } from '@material-ui/core/styles'
import PaletteFormNav from './PaletteFormNav'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Button from '@material-ui/core/button'
import DraggableColorList from './DraggableColorList'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { ChromePicker } from 'react-color'
import { arrayMove } from 'react-sortable-hoc'

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
    const { paletteIsFull } = this.props
    const { currentColor, newColorName } = this.state
    return (
      <div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={this.updateCurrentColor}
        />
        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator
            value={newColorName}
            name='newColorName'
            onChange={this.handleChange}
            validators={['required', 'isColorNameUnique', 'isColorUnique']}
            errorMessages={[
              'Enter a color name',
              'Color name must be unique',
              'This color is already in your palette',
            ]}
          />
          <Button
            variant='contained'
            type='submit'
            color='primary'
            disabled={paletteIsFull}
            style={{
              backgroundColor: paletteIsFull
                ? 'rgba(0, 0, 0, 0.12)'
                : currentColor,
            }}
          >
            {paletteIsFull ? 'Palette Full' : 'Add Colors'}
          </Button>
        </ValidatorForm>
      </div>
    )
  }
}

export default ColorPickerForm
