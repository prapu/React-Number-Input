import * as React from 'react';
import NumberBox from './numberbox';

const PercentageBox=(p:{
    MaxDecimalPlaces?:number, 
    MaxLength?:number, 
    value?:number, 
    style?:string,
    className:string,
    onChange?:Function
})=>{
    return <React.Fragment>
        <NumberBox
            MaxDecimalPlaces={p.MaxDecimalPlaces}
            className={p.className}
         />
    </React.Fragment>
}

export default PercentageBox;