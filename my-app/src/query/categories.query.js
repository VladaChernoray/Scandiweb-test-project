import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
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