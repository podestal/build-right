import React from 'react'
import moment from 'moment'

const Footer = () => {

  const year = moment().format('YYYY')

  return (
    <div className='footer'>
      <p>Buffalo Home Builder &copy; {year}, all rights reserved</p>
    </div>
  )
}

export default Footer