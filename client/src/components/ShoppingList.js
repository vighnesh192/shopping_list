import React, { Component } from "react";
import axios from "axios";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import AddItem from "./AddItem";
import PostItem from "./PostItem";

class ShoppingList extends Component {
	state = {
        items: []
	};

	//GET ITEMS
	componentDidMount() {
		axios
			.get("/api/items")
			.then((res) => this.setState({ items: res.data }))
			.catch((err) => console.log(err));
	}

	//POST ITEM
	postItem = (title) =>
		axios
			.post("/api/items", { name: title })
			.then((res) => this.setState({ items: [...this.state.items, res.data] }))
			.catch((err) => console.log(err));

	//DELETE ITEM
	removeItem = (_id) =>
		axios
			.delete(`/api/items/${_id}`)
			.then(
				this.setState((state) => ({
					items: [...state.items.filter((item) => item._id !== _id)],
				}))
			)
			.catch((err) => console.log(err));

	render() {
		const { items } = this.state;
		return (
			<Container>
				<PostItem postItem={this.postItem}/>

				<ListGroup style={{ marginTop: "2rem" }}>
					<TransitionGroup class="shopping-list">
						{items.map((item) => (
							<CSSTransition key={item._id} timeout={500} classNames="item">
								<ListGroupItem>
									<AddItem item={item} removeItem={this.removeItem} />
								</ListGroupItem>
							</CSSTransition>
						))}
					</TransitionGroup>
				</ListGroup>
			</Container>
		);
	}
}

export default ShoppingList;
