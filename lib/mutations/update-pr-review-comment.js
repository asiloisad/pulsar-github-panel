/** @babel */
/* istanbul ignore file */

import { commitMutation } from "react-relay";
import dayjs from "dayjs";

import { renderMarkdown } from "../helpers";

const mutation = require("./__generated__/updatePrReviewCommentMutation.graphql");

export default (environment, { commentId, commentBody }) => {
  const variables = {
    input: {
      pullRequestReviewCommentId: commentId,
      body: commentBody,
    },
  };

  const optimisticResponse = {
    updatePullRequestReviewComment: {
      pullRequestReviewComment: {
        id: commentId,
        lastEditedAt: dayjs().toISOString(),
        body: commentBody,
        bodyHTML: renderMarkdown(commentBody),
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
