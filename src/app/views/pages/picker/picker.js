// Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'

// App Modules
import { pickerOperations } from '../../../state/ducks/picker'

// CSS
import '../../../../public/css/picker.scss'


class Picker extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { fetchData } = this.props
    fetchData('http://localhost:3000/data')
  }

  render() {
    const { picker } = this.props

    return (
      <div className="row">
        <div className="col-xs-12 picker">
          <select>
            {picker.data.map((item, i) => {
              return <option key={i}>{item.date}</option>
            })}
          </select>
        </div>
      </div>
    )
  }
}

Picker.defaultProps = {
  picker: {data: []}
}

const mapStateToProps = (state) => {
  return {picker: state.picker}
}

const mapDispatchToProps = {
  fetchData: pickerOperations.fetchDataFromApi
}

export default connect(mapStateToProps, mapDispatchToProps)(Picker)
