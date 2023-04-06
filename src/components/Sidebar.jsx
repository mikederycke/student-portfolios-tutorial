import React from 'react'

const Sidebar = ({toggled}) => {
  return (
    <div className="border-end bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading border-bottom bg-light">Student Portfolios</div>
        <div className="list-group list-group-flush">
            <a className="list-group-item list-group-item-action list-group-item-light p-3" 
              href="/student/1">Student 1 </a>
            <a className="list-group-item list-group-item-action list-group-item-light p-3" 
              href="/student/2">Student 2</a>
            <a className="list-group-item list-group-item-action list-group-item-light p-3" 
              href="/student/3">Student 3</a>
        </div>
    </div>
  )
}

export default Sidebar