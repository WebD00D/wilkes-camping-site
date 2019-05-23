import React, {Component} from 'react';
import InputField from '../components/InputField';
import GenericButton from '../components/GenericButton';

export default class NewPost extends Component {
    constructor(props) {
        super(props);
            this.state = {
            };
    }

    render() {
        return (
             <div>
                <h1>Add A Campsite</h1>
                <InputField labelName="Campsite Name" inputType="text" />
                <InputField labelName="Description" inputType="text" />
                <h2>Star Rating</h2>
                <button>1</button >
                <button>2</button >
                <button>3</button >
                <button>4</button >
                <button>5</button >
                <h2>Campsite Cost</h2>
                <GenericButton  labelName="Campsite Free?" buttonName="Free?" />
                <GenericButton  labelName="Campsite Free?" buttonName="Pay ($12 or less)" />
                <GenericButton  labelName="Campsite Free?" buttonName="Permit Required" />
                <h2>Public or Private?</h2>
                <GenericButton  labelName="Campsite Free?" buttonName="Private" />
                <GenericButton  labelName="Campsite Free?" buttonName="Public" />
                {/* where does labelName go? Why is it not showing up? */}
                <h2>Officially Approved?</h2>
                <GenericButton  labelName="Campsite Free?" buttonName="Yes" />
                <GenericButton  labelName="Campsite Free?" buttonName="No" />
                {/* need to add upload link for pics and map view/googlemaps api */}
            </div>
        );
    };
}
