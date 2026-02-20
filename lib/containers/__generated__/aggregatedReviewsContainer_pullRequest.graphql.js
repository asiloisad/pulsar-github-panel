"use strict";

const node = {
  kind: "Fragment",
  name: "aggregatedReviewsContainer_pullRequest",
  type: "PullRequest",
  metadata: null,
  argumentDefinitions: [
    {
      kind: "LocalArgument",
      name: "reviewCount",
      type: "Int!",
      defaultValue: null,
    },
    {
      kind: "LocalArgument",
      name: "reviewCursor",
      type: "String",
      defaultValue: null,
    },
    {
      kind: "LocalArgument",
      name: "threadCount",
      type: "Int!",
      defaultValue: null,
    },
    {
      kind: "LocalArgument",
      name: "threadCursor",
      type: "String",
      defaultValue: null,
    },
    {
      kind: "LocalArgument",
      name: "commentCount",
      type: "Int!",
      defaultValue: null,
    },
    {
      kind: "LocalArgument",
      name: "commentCursor",
      type: "String",
      defaultValue: null,
    },
  ],
  selections: [
    {
      kind: "ScalarField",
      alias: null,
      name: "id",
      args: null,
      storageKey: null,
    },
    {
      kind: "FragmentSpread",
      name: "reviewSummariesAccumulator_pullRequest",
      args: [
        {
          kind: "Variable",
          name: "reviewCount",
          variableName: "reviewCount",
        },
        {
          kind: "Variable",
          name: "reviewCursor",
          variableName: "reviewCursor",
        },
      ],
    },
    {
      kind: "FragmentSpread",
      name: "reviewThreadsAccumulator_pullRequest",
      args: [
        {
          kind: "Variable",
          name: "commentCount",
          variableName: "commentCount",
        },
        {
          kind: "Variable",
          name: "commentCursor",
          variableName: "commentCursor",
        },
        {
          kind: "Variable",
          name: "threadCount",
          variableName: "threadCount",
        },
        {
          kind: "Variable",
          name: "threadCursor",
          variableName: "threadCursor",
        },
      ],
    },
  ],
};
// prettier-ignore
(node).hash = '830225d5b83d6c320e16cf824fe0cca6';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
