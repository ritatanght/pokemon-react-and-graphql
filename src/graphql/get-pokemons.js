import gql from "graphql-tag";

export const GET_POKEMONS = gql`
  query pokemon($first: Int!) {
    pokemon(first: $first) {
      id
      name
      image
      maxHP
      maxCP
      attacks {
        special {
          name
          damage
        }
      }
    }
  }
`;
