import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #191920;
`;

export const ListCartProduct = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})`
  margin: 20px;
  background: #fff;
  border-radius: 4px;
  flex-grow: 0;
`;

export const Product = styled.View`
  margin: 20px;
`;

export const ProductDetails = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductDesc = styled.View`
  max-width: 163;
`;

export const ProductImage = styled.Image`
  height: 80px;
  width: 80px;
  margin-right: 10px;
`;

export const ProductTitle = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 14px;
  line-height: 18px;
  text-align: left;
  font-family: Roboto;
`;
export const ProductPrice = styled.Text`
  font-size: 16px;
  text-align: left;
  font-weight: bold;
  font-family: Roboto;
`;

export const DeleteProduct = styled.TouchableOpacity`
  padding: 6px;
  margin-left: auto;
`;

export const ProductStatus = styled.View`
  flex: 1;
  flex-direction: row;
  background: #eee;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding: 5px;
`;

export const DecrementProduct = styled.TouchableOpacity`
  padding: 6px;
`;

export const IncrementProduct = styled.TouchableOpacity`
  padding: 6px;
`;

export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
  text-align: center;
`;

export const ProductSubtotal = styled.Text`
  font-size: 16px;
  font-weight: bold;
  font-family: Roboto;
`;

export const ProductUpddateAmount = styled.View`
  flex-direction: row;
`;
