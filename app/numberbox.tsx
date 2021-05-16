import * as React from 'react';

const NumberBox=(p:{
    MaxDecimalPlaces?:number, 
    maxLength?:number, 
    value?:number, 
    style?:string,
    className?:string,
    name?:string,
    type?:string,
    placeHolder?:string,
    onChange?:Function
    onBlur?:Function
})=>{
    return  <input 
                className={p.className}
                type={p.type}
                maxLength={p.maxLength + p.MaxDecimalPlaces} 
                name={p.name}
                value={p.value?p.value:''}                
                onChange={(e)=>{
                    var val = e.target.value;
                    var maxdeci=p.MaxDecimalPlaces>0?p.MaxDecimalPlaces+1:0; //to stop copy paste numbers with decimals
                    e.target.value = (val.indexOf(".") >= 0) ? (val.substr(0, val.indexOf(".")) + val.substr(val.indexOf("."), maxdeci)) : val;
                    p.onChange?p.onChange(e):null; //checking for funtion onchange present will avoid console errors
                } } 
                onBlur={(e)=>{
                    p.onBlur?p.onBlur(e):null;
                }}
                onKeyPress={(event: any) => {
                    var cVal = event.target.value;
                    if (event.which < 48 || event.which > 57) {
                        if (event.which != 46)
                            event.preventDefault();
                    } // prevent if not number/dot
                    var maxDecimalPlaces = p.MaxDecimalPlaces > 0 ? p.MaxDecimalPlaces - 1 : 0;

                    if (maxDecimalPlaces == 0) {
                        if (event.which == 46) {
                            event.preventDefault();
                        }
                    } else {
                        if (event.which == 46 && cVal.indexOf('.') != -1) {
                            event.preventDefault();
                        }// prevent if already dot
                    }
                }}
                onPaste={(e)=>{
                    e.preventDefault();
                    return false;
                }}     
    />;
}

export default NumberBox;