import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, Cart, Item } from './styles';
import logo from '../../assets/logo.png';

function Header() {
  return (
    <Container>
      <Logo source={logo} />
      <Cart>
        <Item>3</Item>
        <Icon name="shopping-basket" color="#FFF" size={24} />
      </Cart>
    </Container>
  );
}

export default Header;
