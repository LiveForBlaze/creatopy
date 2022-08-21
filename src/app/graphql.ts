const GRAPHQL_ENDOINT = "https://graphql-weather-api.herokuapp.com/";

export function graphqlAPI<T, U>(query: T, variables: U) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const graphql = JSON.stringify({
    query,
    variables
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: graphql,
  };

  return fetch(GRAPHQL_ENDOINT, requestOptions);
};