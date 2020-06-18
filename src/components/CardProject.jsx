import React from 'react'

export default function cardProject(props) {
  return (
    <div className="card border-0 shadow-sm mt-3">
      <div className="card-img-top bg-secondary" style={{height: "200px"}}>
        &nbsp;
      </div>
      <div className="card-body">
        <h4>{props.title}</h4>
        <h6 className="text-secondary">{props.description}</h6>
        <button onClick={props.clickHandler} className="mt-2 rounded font-weight-bold btn-sm px-3 py-2 btn btn-primary">Detail</button>
      </div>
    </div>
  )
}