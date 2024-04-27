import React from 'react'
import ScheduleBox from "../Components/ScheduleBox"
import data from "./data.json"
import Filter from "../Components/Filter"
function Schedules() {
  return (
    <div className="flex">
      
      <div className="mt-10 border solid mr-10 w-[900px] rounded-md mb-10 overflow-auto max-h-screen">
        <div className="px-5">
          {data.sessions.map((sessionData, index) => (
            <div key={index}>
              <h2 className=" text-center text-[#D8DDE5] pt-10">
                {sessionData.date}
              </h2>
              {sessionData.tasks.map((task, taskIndex) => (
                <ScheduleBox
                  key={taskIndex}
                  session={task.session}
                  title={task.title}
                  text={task.text}
                  width='680px'
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 mr-10">
        <Filter/>
      </div>
    </div>
  )
}

export default Schedules
