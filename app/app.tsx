import * as React from 'react';
import * as ReactDom from 'react-dom';

import NumberTextBox from '../app/with-classes/number-text-box';

export class ExampleNumbers extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <table>
        <tbody>
            <tr>
                <td>Only numbers</td>
                <td>
                    <NumberTextBox 
                        type={"text"} 
                        maxdecimalplaces={0}
                        placeholder={"Please enter numbers only"}
                        />
                </td>                
            </tr>
            <tr>
            <td>Numbers with 2 Decimals</td>
                <td>
                    <NumberTextBox 
                        type={"text"} 
                        maxdecimalplaces={2}
                        placeholder={"Please enter numbers with decimal"}
                        />
                </td>
            </tr>
            <tr>
            <td>Enter percentage</td>
                <td>
                    <NumberTextBox 
                        type={"text"} 
                        maxdecimalplaces={2}
                        maxLength={5}
                        placeholder={"Please enter numbers with decimal"}
                        />
                </td>
            </tr>
        </tbody>
    </table>
    }
}
    
ReactDom.render(<ExampleNumbers/>,document.getElementById('app'));