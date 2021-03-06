import React from 'react'
import loader from '@hoc-react-loader/full'

const EmptyComponent = () => <div />

const ErrorIndicator = props => (
  <div {...props}>
    An error occured !
  </div>
)

export default loader({ ErrorIndicator })(EmptyComponent)
