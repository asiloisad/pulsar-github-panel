/** @babel */
/* istanbul ignore file */

import { commitMutation } from "react-relay";

const mutation = require("./__generated__/unresolveReviewThreadMutation.graphql");

export default (environment, { threadID, viewerID, viewerLogin }) => {
  const variables = {
    input: {
      threadId: threadID,
    },
  };

  const optimisticResponse = {
    unresolveReviewThread: {
      thread: {
        id: threadID,
        isResolved: false,
        viewerCanResolve: true,
        viewerCanUnresolve: false,
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
