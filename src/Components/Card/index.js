import React from 'react'

const Card = (props) => {
    return (

        <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
            <div className="card">
                <img src={props.data.img} className="card-img-top " alt="..." style={{ width: "50%", height: "50%", margin: "auto" }} />
                <div className="card-body text-dark">
                    <h5 className="card-title ">{props.data.customer}</h5>
                    <p className="card-text align-center">{props.data.desc}</p>
                </div>
            </div>
        </div>

    )
}

export default Card
