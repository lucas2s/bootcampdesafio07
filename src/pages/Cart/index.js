import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';

import {
  Container,
  ListCartProduct,
  Product,
  ProductDetails,
  ProductDesc,
  ProductImage,
  ProductTitle,
  ProductPrice,
  DeleteProduct,
  ProductStatus,
  DecrementProduct,
  IncrementProduct,
  ProductAmount,
  ProductSubtotal,
  ProductUpddateAmount,
} from './styles';

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      <ListCartProduct
        data={cart}
        keyExtractor={product => String(product.id)}
        renderItem={({ item }) => (
          <Product>
            <ProductDetails>
              <ProductImage source={{ uri: item.image }} />
              <ProductDesc>
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPrice>{item.priceFormatted}</ProductPrice>
              </ProductDesc>
              <DeleteProduct onPress={() => removeFromCart(item.id)}>
                <Icon name="delete" color="#7159C1" size={24} />
              </DeleteProduct>
            </ProductDetails>
            <ProductStatus>
              <ProductUpddateAmount>
                <DecrementProduct onPress={() => decrement(item)}>
                  <Icon name="remove" color="#7159C1" size={24} />
                </DecrementProduct>
                <ProductAmount value={String(item.amount)} />
                <IncrementProduct onPress={() => increment(item)}>
                  <Icon name="add" color="#7159C1" size={24} />
                </IncrementProduct>
              </ProductUpddateAmount>
              <ProductSubtotal>{item.subtotal}</ProductSubtotal>
            </ProductStatus>
          </Product>
        )}
      />
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
