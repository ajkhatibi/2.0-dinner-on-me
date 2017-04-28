var React = require('react');
import {Button} from 'react-bootstrap';

var Main = React.createClass({
	render: function () {
		return (
			<div>
				<h3>Dinner On me</h3>
				<Button bsStyle='primary' bsSize='large'>Click me</Button>
			</div>
		)
	}
});

module.exports = Main;