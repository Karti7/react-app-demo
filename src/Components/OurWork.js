import React from 'react'

import Card from './Card'

const OurWork = () => {
    return (


        <div className="row justify-center text-white bg-dark p-5 px-2">
            <div className="col-lg-3 col-md-6 col-sm-12 ">
                <h2 className="pt-5 m-2" >Our Work</h2>
                <p className="justify-content m-2 pb-5" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis necessitatibus sint totam unde facere non blanditiis sunt cum aspernatur labore quidem quisquam, quas architecto quibusdam nesciunt enim nemo, magni suscipit. Dicta, culpa animi ab consequatur officiis ea repudiandae eveniet deserunt sit nobis quas ullam sunt provident sequi. Quasi, nesciunt ut?</p>
               
            </div>
            {
                data.map((item, index) => (
                    <Card data={item} />
                ))
            }
        </div>
    )
}

export default OurWork


const desc = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, distinctio ratione delectus officiis itaque ad voluptate dicta ipsa eligendi modi.'

const data = [
    {
        img: "https://aircall.io/wp-content/uploads/2016/04/Meditating-on-the-cloud-870x870.png",
        customer: "Customer 1",
        desc: desc
    },
    {
        img: "https://aircall.io/wp-content/uploads/2016/04/Meditating-on-the-cloud-870x870.png",
        customer: "Customer 2",
        desc: desc
    },
    {
        img: "https://aircall.io/wp-content/uploads/2016/04/Meditating-on-the-cloud-870x870.png",
        customer: "Customer 3",
        desc: desc
    }
]
