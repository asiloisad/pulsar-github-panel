/** @babel */
/* istanbul ignore file */

import { commitMutation } from "react-relay";

const mutation = require("./__generated__/deletePrReviewMutation.graphql");

export default (environment, { reviewID, pullRequestID }) => {
  const variables = {
    input: { pullRequestReviewId: reviewID },
  };

  const configs = [
    {
      type: "NODE_DELETE",
      deletedIDFieldName: "id",
    },
    {
      type: "RANGE_DELETE",
      parentID: pullRequestID,
      connectionKeys: [{ key: "ReviewSummariesAccumulator_reviews" }],
      pathToConnection: ["pullRequest", "reviews"],
      deletedIDFieldName: "id",
    },
  ];

  return new Promise((resolve, reject) => {
    commitMutation(environment, {
      mutation,
      variables,
      configs,
      onCompleted: resolve,
      onError: reject,
    });
  });
};
