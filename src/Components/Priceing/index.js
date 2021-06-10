import React from 'react'

const Pricing = (props) => {
    return (
            
                <div className="col-lg-4 col-md-6 col-sm-12 m-auto  mb-2 ">
                    <div className="card text-center" >
                        <div className="card-header bg-dark text-white  p-3">
                            {props.data.heading}
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>{props.data.gb}</strong></li>
                            <li className="list-group-item"><strong>{props.data.email}</strong></li>
                            <li className="list-group-item"><strong>{props.data.domain}</strong></li>
                            <li className="list-group-item"><strong>{props.data.support}</strong></li>
                            <li className="list-group-item"><strong>$</strong> 10 <br /> <small className="text-muted">Per Month</small></li>
                            <li className="list-group-item p-3 bg-light">
                                <button className="btn btn-success">Sign Up</button></li>
                        </ul>
                    </div>
                </div>
             
    )
}

export default Pricing
