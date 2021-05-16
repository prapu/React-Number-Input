import * as React from 'react';
import NumberBox from './numberbox';
import PercentageBox from './percentagebox';

const NumberUseage=()=>{
    return <React.Fragment>
        <h5>Number Useage</h5>
        <label>Integers:</label>
        <NumberBox MaxLength={8} MaxDecimalPlaces={0} /><br/>
        <label>Numbers with 2 decimal places:</label>
        <NumberBox MaxLength={8} MaxDecimalPlaces={2} />
        
    </React.Fragment>
}
export default NumberUseage;