import { gql } from '@apollo/client';

export const GET_PRODUCT = gql`
  {
  categories {
      name
      products {
        id
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