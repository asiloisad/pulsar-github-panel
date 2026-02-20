/** @babel */
/* istanbul ignore file */

import { commitMutation } from "react-relay";
import dayjs from "dayjs";

import { renderMarkdown } from "../helpers";

const mutation = require("./__generated__/updatePrReviewSummaryMutation.graphql");

export default (environment, { reviewId, reviewBody }) => {
  const variables = {
    input: {
      pullRequestReviewId: reviewId,
      body: reviewBody,
    },
  };

  const optimisticResponse = {
    updatePullRequestReview: {
      pullRequestReview: {
        id: reviewId,
        lastEditedAt: dayjs().toISOString(),
        body: reviewBody,
        bodyHTML: renderMarkdown(reviewBody),
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
