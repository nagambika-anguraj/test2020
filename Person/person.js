import React from 'react';
import classes from './Person.module.css';

const Person = (props) => {
   return(
       <div className={classes.divPerson}>
           This is a simple person inside a box.{props.name}
       </div>
   )
}

export default Person;