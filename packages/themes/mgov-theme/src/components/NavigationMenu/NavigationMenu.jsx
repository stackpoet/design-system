//import { Button } from '@cmsgov/design-system-core/src/components';
import Button from '../../../../../core/src/components/Button/Button';
import Close from '../CloseSymbol';
import Hamburger from '../HamburgerSymbol';
import React from 'react';
import className from 'classnames';

export default class NavigationMenu extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { menuOpen: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    const containerClasses = className(
      'm-c-navigationMenu__container',
      this.props.alwaysShowMenuButton &&
        'm-c-navigationMenu__container--alwaysShowMenuButton'
    );

    const navClasses = className(
      'm-c-navigationMenu',
      this.state.menuOpen && 'm-c-navigationMenu--open'
    );

    return (
      <div className={containerClasses}>
        <div className="m-c-navigationMenu__toggleContainer">
          <Button
            className="m-c-navigationMenu__mobileToggle"
            onClick={this.toggleMenu}
            variation="transparent"
          >
            {this.state.menuOpen ? <Close /> : <Hamburger />}
          </Button>
        </div>
        <nav role="navigation" className={navClasses}>
          <ul className="m-c-navigationMenu__list">{this.props.children}</ul>
        </nav>
      </div>
    );
  }
}
