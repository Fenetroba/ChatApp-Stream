import React from 'react'
import { useSelector } from 'react-redux'

const GetOutGoingReq = () => {
  const {GoingRequest,IncomeRequest}=useSelector(state=>state.friends)
  console.log(GoingRequest,IncomeRequest)
  return (
    <div>getOutGoingReq</div>
  )
}

export default GetOutGoingReq