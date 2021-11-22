import React from 'react';
import Github from '../img/GitHub.png';
import LinkedIn from '../img/Link.png';


function footer(){
    return(
        <div className='d-flex d-inline justify-content-center footer'>
        <a href='https://github.com/ZackLai21' target='_blank' rel='noreferrer'>
        <img className="mx-3" src={Github} alt="..."/>
        </a>
        <a href='https://www.linkedin.com/in/zack-lai-5110/' target='_blank' rel='noreferrer'>
        <img className="mx-3" src={LinkedIn} alt="..."/>
        </a>
        </div>
    );

}




export default footer;