/** @babel */
/* istanbul ignore file */

import { commitMutation } from "react-relay";

const mutation = require("./__generated__/createRepositoryMutation.graphql");

export default (environment, { name, ownerID, visibility }) => {
  const variables = {
    input: {
      name,
      ownerId: ownerID,
      visibility,
    },
  };

  return new Promise((resolve, reject) => {
    commitMutation(environment, {
      mutation,
      variables,
      onCompleted: resolve,
      onError: reject,
    });
  });
};
