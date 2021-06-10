import React from 'react'
import Team from './Team'

const OurTeam = () => {
    const data = [
        {
            img:"https://vikaccounting.co.za/wp-content/uploads/2021/04/our-team-1.png",
            name:"Johnny Walker",
            role:"Web Designer",
        },
        {
            img:"https://vikaccounting.co.za/wp-content/uploads/2021/04/our-team-1.png",
            name:"Rebecca Flex",
            role:"Support",
        },
        {
            img:"https://vikaccounting.co.za/wp-content/uploads/2021/04/our-team-1.png",
            name:"Jan Ringo",
            role:"Boss man",
        },
        {
            img:"https://vikaccounting.co.za/wp-content/uploads/2021/04/our-team-1.png",
            name:"Kai Ringo",
            role:"Fixer",
        },
        
    ]
    return (
        <>
        <div className="img">
            <img className="img-fluid" src="https://www.w3schools.com/w3images/sailboat.jpg" alt="" />
         </div>

        <div className="text-center  mt-2">
            <h3 className="text-uppercase">Our Team</h3>
            <span>
                <small><h6>Meet the team - our office rats:</h6></small>
            </span>

            <div className="row row-cols-1 row-cols-md-4  g-4 m-2 ">
                {
                    data.map((item,index)=>(
                        <Team data={item} />
                    ))
                }
            </div>

        </div>

        </>
    )
}

export default OurTeam
