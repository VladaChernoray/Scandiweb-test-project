import { gql } from '@apollo/client';

export const GET_CURRENCY = gql`
   {
      currencies {
       label
       symbol
       }
  }
`;