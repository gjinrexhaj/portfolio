import React from "react";
import EducationItem from "./education-item";

const Education = (props) => {
    return (
        <div data-section id='education' className='mb-16'>
            <h2 className='mb-8 visible lg:invisible font-medium tracking-widest'>Education</h2>
            {props.data.map(function(object, index){
                return <EducationItem
                    key={`${object.title}+${object.startDate}`}  
                    title={object.title}
                    degree={object.degree}
                    university={object.university}
                    href={object.href}
                    startDate={object.startDate} 
                    endDate={object.endDate ? object.endDate : ''} 
                    description={object.description}
                    logo={object.logo}
                />
            })}
        </div>
    )
}

export default Education