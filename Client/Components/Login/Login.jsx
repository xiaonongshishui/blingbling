import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

export default class Login extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return <div className="login">
            <section className="logo">

            </section>
            <section>
                <TextField
                    hintText="Hint Text"
                />
                <TextField
                    hintText="Hint Text"
                />
                <TextField
                    hintText="Hint Text"
                />
            </section>

        </div>
    }
}
