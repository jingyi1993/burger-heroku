import React from 'react';
import Classes from './input.css';

const input =(props) =>{

    let inputElement = null;
    //isValid = true
    let inputClasses = [Classes.InputElement];
    //isValid = false
    if(!props.isValid){
        inputClasses.push(Classes.invalidInputElement);
    }
    // if(props.isValid){
    //     inputClasses = [Classes.InputElement];
    // }

    switch (props.elementtype) {
        case('input'):{
            inputElement=<input {...props.elementconfig}
                                // placeholder={props.placeholder}
                                value={props.value}
                                onChange={props.changed}
//[Classes.InputElement] or [Classes.InputElement Classes.invalidInputElement]
                                className={inputClasses.join(' ')}/>;
        }
        break;


        case('textarea'):{
            inputElement=<textarea {...props.elementconfig}
                                   placeholder={props.placeholder}
                                   className={inputClasses.join(' ')}/>;
        }
        break;

        case('select'):{
            inputElement=(<select  className={Classes.InputElement}
                                   onChange={props.changed}

            >


                {props.elementconfig.options.map(option=>(

                    <option value={option.value} key={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select>)
        }
        break;

        default:
            inputElement=<input {...props.elementconfig}
                                value={props.value}
                                className={Classes.InputElement}/>;

    }
    return(
        <div className={Classes.Input}>
            <label className={Classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )

};

export default input;