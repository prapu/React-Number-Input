import * as React from 'react';
import { INProps } from './number-text-ref';

export class NumberTextBox extends React.Component<INProps,null>{
    constructor(props){
        super(props)
    }

    render(){
        return <input 
        type={this.props.type}
        maxLength={this.props.maxLength} 
        placeholder={this.props.placeholder}
        onKeyPress={(event)=>{
            var cVal = event.target.value;
            var dec=cVal.indexOf('.');
            //allow only numbers and decimal point
            if (event.which < 48 || event.which > 57) {
                if (event.which != 46)
                    event.preventDefault();
            }

            //read max decimal places 
            var maxDecimalPlaces = this.props.maxdecimalplaces > 0 ? this.props.maxdecimalplaces - 1 : 0;
            //no decimal places
            if (maxDecimalPlaces == 0) {
                if (event.which == 46) {
                    //not allowing decimal places
                    event.preventDefault();
                }
            } else {
                //allowing only one time
                if (event.which == 46 && dec != -1) {
                    event.preventDefault(); // prevent if there is already a dot
                }
            } 

            //prevent exceeding number of decimal places      
            if(dec!=-1){
                //reading the decimal places  count
                var decPlaces=cVal.substring(dec+1,cVal.length).length;
                //compare it with props value
                if(decPlaces==this.props.maxdecimalplaces){
                    event.preventDefault();
                }
            } 
            
        }}
        onPaste={(e)=>{
            e.preventDefault();
            return false;
        }}  
        />
    }
}
export default NumberTextBox;