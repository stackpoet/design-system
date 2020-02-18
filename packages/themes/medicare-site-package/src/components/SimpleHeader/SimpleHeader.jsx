import Navbar from '../Navbar/Navbar';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import React from 'react';

const SimpleHeader = ({ logo, menuItems }) => {
  return (
    // Start by bringing in the Navbar component, this acts as the header's container
    // Navbar has one prop - "inverse" - which determines the 'theme':
    //   - When inverse == false, the Navbar has a green background and white text
    //   - When inverse == true, the Navbar has a white background with green text
    <Navbar inverse={false} className="m-c-navbar">
      {/*
        Here is a good place to bring in a logo. If you're using a router like React Router, you can use that Link to wrap the image. If not, you're welcome to use standard <a> tags like below.
      */}
      <a href="/somewhere">
        <img {...logo} />
      </a>

      {/* If you have a product name or other content you want on the left side of the navbar, it can go here */}
      <div className="m-c-navbar__productName">Medicare Coverage Tools</div>

      {/* The NavigationMenu component is helpful for creating mobile and desktop friendly lists of links. It has no props, but instead just displays whatever children you provide wrapped in neat container elements. */}
      <NavigationMenu>
        {menuItems.map((item, i) => (
          <li key={i} className="m-c-navigationMenu__item">
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </NavigationMenu>
    </Navbar>
  );
};

export default SimpleHeader;
