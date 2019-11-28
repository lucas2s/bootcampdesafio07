import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  ListProduct,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddCart,
  NameButton,
  ProductAdd,
  ProductAmount,
  Amount,
} from './styles';
// import { formatPrice } from '../../util/format';
import api from '../../services/api';

export default class Main extends Component {
  state = {
    products: [],
    loading: false,
    amount: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      // priceFormatted: formatPrice(product.price),
      priceFormatted: product.price,
    }));

    this.setState({ products: data });
  }

  render() {
    const { products, loading, amount } = this.state;
    return (
      <Container>
        <ListProduct
          horizontal
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <Product>
              <ProductImage source={{ uri: item.image }} />
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{item.priceFormatted}</ProductPrice>
              <AddCart loading={loading} onPress={this.handleAddUser}>
                <ProductAmount>
                  <Icon name="add-shopping-cart" color="#FFF" size={16} />
                  <Amount> {amount[item.id] || 0} </Amount>
                </ProductAmount>
                <ProductAdd loading={loading} onPress={this.handleAddUser}>
                  {loading ? (
                    <ActivityIndicator color="#fff" />
                  ) : (
                    <NameButton>ADICIONAR</NameButton>
                  )}
                </ProductAdd>
              </AddCart>
            </Product>
          )}
        />
      </Container>
    );
  }
}
