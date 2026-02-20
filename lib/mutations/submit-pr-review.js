/** @babel */
/* istanbul ignore file */

import { commitMutation } from "react-relay";

const mutation = require("./__generated__/submitPrReviewMutation.graphql");

export default (environment, { reviewID, event }) => {
  const variables = {
    input: {
      event,
      pullRequestReviewId: reviewID,
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
