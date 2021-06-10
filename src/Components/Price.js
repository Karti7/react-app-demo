import React from 'react'
import Priceing from './Priceing'

const Price = () => {
    return (
        <div>
            <div className="text-center text-uppercase mt-5">
                <h2 >Pricing</h2>
                <span className="text-center">
                    <small >Choose a pricing plan that fits your needs.</small>
                </span>
            </div>
            <div className="container mt-5">
                <div className="row">

                    {
                        data.map((item, index) => (
                            <Priceing data={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Price

const data = [
    {
        heading: "Basic",
        gb: "10GB Storage",
        email: "10 Emails",
        domain: "10 Domain",
        support: "Endless Support"
    },
    {
        heading: "Pro",
        gb: "25GB Storage",
        email: "25 Emails",
        domain: "25 Domain",
        support: "Endless Support"
    },
    {
        heading: "Premium",
        gb: "50GB Storage",
        email: "50 Emails",
        domain: "50 Domain",
        support: "Endless Support"
    },
]