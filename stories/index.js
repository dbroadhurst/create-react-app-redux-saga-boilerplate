import React from 'react'
import { storiesOf } from '@storybook/react'
import Header from '../src/components/Header/Header'
import { muiTheme } from 'storybook-addon-material-ui'

storiesOf('Header', module)
  .addDecorator(muiTheme())
  .add('Header', () => <Header testSaga={{ message: 'my header' }} />)
