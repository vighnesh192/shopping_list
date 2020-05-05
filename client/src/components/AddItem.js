import React, { Component } from 'react'
import { Button } from 'reactstrap'

class AddItem extends Component {
    render() {
        const {_id, name, date} = this.props.item;
        return (
            <React.Fragment>
                <Button className="btn-danger" 
                        size="md" 
                        style={{marginRight: '1.5rem'}}
                        >
                            &times;
                </Button>
                {name}
                <span style={{float: 'right'}}>
                    {date}
                </span>
            </React.Fragment>
        )
    }
}

export default AddItem;
