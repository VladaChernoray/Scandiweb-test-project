import { gql } from '@apollo/client';

export const GET_PRODUCT = gql`
  {
  categories {
      name
      products {
        name
        inStock
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