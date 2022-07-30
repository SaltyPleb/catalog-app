import React from 'react'
import Filter from './Filter'
import DeviceList from './DeviceList'

const index = () => {
  return (
    <div className="catalog__container">
      <div className="catalog__container__filter">
        <Filter />
      </div>
      <div className="catalog__container__cards">
        <DeviceList/>
      </div>
    </div>
  )
}

export default index