import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    <main>
        <div className='card'>
       <div className="nav">
        <div className="img-logo">
            <img src={props.user.companyLogo} alt="" />
        </div>
        <div className="save-btn">
                <button>Save </button>
            </div>
       </div>
       <div className="text-content">
        <h3>{props.user.companyName} <span>5 day ago</span></h3>
        <h2>{props.user.jobRole}</h2>
        <div className="job-model">
            <p>{props.user.jobModel}</p>
            <p>{props.user.jobModel}</p>
        </div>
       </div>
       <div className="footer">
        <div className="time">
            <h4>{props.user.perHour}</h4>
            <div className="location">
                <h4>{props.user.location}</h4>
            </div>
        </div>
        <div className="btn-aply">
            <button>Apply now</button>
        </div>
       </div>
    </div>
    </main>
  )
}

export default Card