import React from "react"
import HomeSideBar from "../Components/HomeSideBar"
import DragDrop from "../Components/DragDrop"
import ScanForm from "../Components/ScanForm"
import FilterClient from "../Components/FilterClient"

const Client = () => {
  return (
    <div className="flex">
        <div>
      <div className="">
        <DragDrop />
      </div>
      <div className="mt-10">
        <ScanForm />
      </div></div>
      <div>
        <FilterClient />
      </div>
    </div>
  )
}

export default Client