// Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'

// App Modules
import { pickerOperations } from '../../../state/ducks/picker'

// CSS
import '../../../../public/css/datatable.scss'


class DataTable extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { picker } = this.props

    return (
      <div className="row">
        <div className="col-xs-12">
          <table className="table">
            <tbody>
            { 
              picker.data.map((item, i) => {
                return <tr key={i}><td>{item.close}</td></tr>
              })
            }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

DataTable.defaultProps = {
  picker: {data: []}
}

const mapStateToProps = (state) => {
  return {picker: state.picker}
}

const mapDispatchToProps = {
}


export default connect(mapStateToProps, mapDispatchToProps)(DataTable)
