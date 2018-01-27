import React from 'react'
import PropTypes from 'prop-types'

import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar'

export default class HeaderComponent extends React.Component {
  static propTypes = {
    testSaga: PropTypes.object
  }

  render() {
    const { message } = this.props.testSaga
    console.log(message)

    return (
      <div>
        <Toolbar>
          <ToolbarGroup>
            <div>testSaga {message}</div>
          </ToolbarGroup>
        </Toolbar>
      </div>
    )
  }
}
