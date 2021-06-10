import React from 'react'

const Team = (props) => {
    return (
        
            <div className="col-lg-3 col-md-6 col-sm-12 mt-3 ">
                <div className="card h-100 ">
                    <img src={props.data.img} className="card-img-top img-thumbnail" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.data.name}</h5>
                        <p className="card-text">{props.data.role}</p>
                    </div>
                </div>
            </div>
        
    )
}

export default Team
