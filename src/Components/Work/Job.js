import React from 'react';


const Job = (props) => {
    return (
        <div>
            <div>
                {props.company}
            </div>
            <div>
                {props.title}
            </div>
            <div>
                {props.tenure}
            </div>
            <div>
                {props.description}
            </div>
        </div>
    );
};  
export default Job