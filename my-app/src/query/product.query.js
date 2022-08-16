import { gql } from '@apollo/client';

export const GET_PRODUCT = gql`
  query GetProduct
  {
  categories {
      name
      products {
        name
        gallery
        prices{
          amount
          currency{
            symbol
            label
          }
        }
      }
    }
}
`;