import React, { Component } from 'react';
import axios from 'axios';
import {Container, Button, ListGroup, ListGroupItem} from "reactstrap";
import {CSSTransition, TransitionGroup} from "react-transition-group"
import AddItem from './AddItem';

class ShoppingList extends Component {
    state = {
        items: [] 
    }

    componentDidMount() {
        axios.get('/api/items')
            .then(res => this.setState({items: res.data}))
            .catch(err => console.log(err))
    }
    render() {
        const { items } = this.state;
        const { _id, name } = items;
        return (
            <Container>
                <ListGroup style={{marginTop: '2rem'}}>
                    <TransitionGroup class="shopping-list">
                        {items.map(item => (
                            <CSSTransition 
                                key={item._id}
                                timeout={500}
                                classNames="item"
                                >
                                <ListGroupItem>
                                
                                    <AddItem item={item} />
                                
                                </ListGroupItem>
                            </CSSTransition>
        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

export default ShoppingList
