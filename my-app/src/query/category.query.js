import { gql } from "@apollo/client";

export const GET_CATEGORY = gql`
query category($input: CategoryInput){
    category(title: $input}){
      name
      products{
        id
        name
        inStock
        gallery
        description
        category
        brand
      }
    }
  }
`