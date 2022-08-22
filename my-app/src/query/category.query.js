import { gql } from '@apollo/client';

export const GET_CATEGORY = gql`
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