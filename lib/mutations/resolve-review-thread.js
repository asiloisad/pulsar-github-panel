/** @babel */
/* istanbul ignore file */

import { commitMutation } from "react-relay";

const mutation = require("./__generated__/resolveReviewThreadMutation.graphql");

export default (environment, { threadID, viewerID, viewerLogin }) => {
  const variables = {
    input: {
      threadId: threadID,
    },
  };

  const optimisticResponse = {
    resolveReviewThread: {
      thread: {
        id: threadID,
        isResolved: true,
        viewerCanResolve: false,
        viewerCanUnresolve: true,
        resolvedBy: {
          id: viewerID,
          login: viewerLogin || "you",
        },
      },
    },
  };

  return new Promise((resolve, reject) => {
    commitMutation(environment, {
      mutation,
      variables,
      optimisticResponse,
      onCompleted: resolve,
      onError: reject,
    });
  });
};
