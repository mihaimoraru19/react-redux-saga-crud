import React, { Component, PropTypes } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router';

export default class MenuComponent extends Component {
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    const activeItem = this.props.pathname;
    const menuItems = this.props.menuItems.map((item, index) => (
      <Link to={item.pathname} key={index}>
        <Menu.Item
          name={item.name}
          active={activeItem === item.pathname}
        >
          {item.name.toUpperCase()}
        </Menu.Item>
      </Link>
    ));
    return (
      <Menu>
        {menuItems}
      </Menu>
    );
  }
}
MenuComponent.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};
