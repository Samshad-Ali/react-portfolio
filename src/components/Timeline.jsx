import React from 'react'
import data from '../assets/data.json'
const Timeline = () => {
  return (
      <div id='timeline'>
          <div className="timelineBox">
              {data.projects.map((item,i) => (
                  <TimelineItem
                      heading={item.title}
                      text={item.date}
                      index={i}
                      key={i}
                  />
              ))}
          </div>
    </div>
  )
}

const TimelineItem = ({text,heading,index}) => (
    <div className={`timelineItem ${index%2==0?'leftTimline':'rightTimeline'} `} >
        <div>

<h2> {heading} </h2>
        <p>{text}</p>
        </div>
    </div>
)

export default Timeline;