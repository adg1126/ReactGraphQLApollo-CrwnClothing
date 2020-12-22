// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import {
//   selectCartItems,
//   selectCartTotal
// } from '../redux/selectors/cartSelectors';
// import CheckoutPage from '../components/pages/CheckoutPage';

// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems,
//   total: selectCartTotal
// });

// const CheckoutPageContainer = connect(mapStateToProps)(CheckoutPage);

// export default CheckoutPageContainer;

import React from 'react';

import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';
import { flowRight as compose } from 'lodash';

import CheckoutPage from '../components/pages/CheckoutPage';

const GET_CART_ITEMS_AND_TOTAL = gql`
  {
    cartItems @client
    cartTotal @client
  }
`;

const CheckoutPageContainer = ({ data: { cartItems, cartTotal } }) => (
  <CheckoutPage cartItems={cartItems} total={cartTotal} />
);

export default compose(graphql(GET_CART_ITEMS_AND_TOTAL))(
  CheckoutPageContainer
);
