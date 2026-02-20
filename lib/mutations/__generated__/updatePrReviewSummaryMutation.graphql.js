"use strict";

/*
mutation updatePrReviewSummaryMutation(
  $input: UpdatePullRequestReviewInput!
) {
  updatePullRequestReview(input: $input) {
    pullRequestReview {
      id
      lastEditedAt
      body
      bodyHTML
    }
  }
}
*/

const node = (function () {
  var v0 = [
      {
        kind: "LocalArgument",
        name: "input",
        type: "UpdatePullRequestReviewInput!",
        defaultValue: null,
      },
    ],
    v1 = [
      {
        kind: "LinkedField",
        alias: null,
        name: "updatePullRequestReview",
        storageKey: null,
        args: [
          {
            kind: "Variable",
            name: "input",
            variableName: "input",
          },
        ],
        concreteType: "UpdatePullRequestReviewPayload",
        plural: false,
        selections: [
          {
            kind: "LinkedField",
            alias: null,
            name: "pullRequestReview",
            storageKey: null,
            args: null,
            concreteType: "PullRequestReview",
            plural: false,
            selections: [
              {
                kind: "ScalarField",
                alias: null,
                name: "id",
                args: null,
                storageKey: null,
              },
              {
                kind: "ScalarField",
                alias: null,
                name: "lastEditedAt",
                args: null,
                storageKey: null,
              },
              {
                kind: "ScalarField",
                alias: null,
                name: "body",
                args: null,
                storageKey: null,
              },
              {
                kind: "ScalarField",
                alias: null,
                name: "bodyHTML",
                args: null,
                storageKey: null,
              },
            ],
          },
        ],
      },
    ];
  return {
    kind: "Request",
    fragment: {
      kind: "Fragment",
      name: "updatePrReviewSummaryMutation",
      type: "Mutation",
      metadata: null,
      argumentDefinitions: v0,
      selections: v1,
    },
    operation: {
      kind: "Operation",
      name: "updatePrReviewSummaryMutation",
      argumentDefinitions: v0,
      selections: v1,
    },
    params: {
      operationKind: "mutation",
      name: "updatePrReviewSummaryMutation",
      id: null,
      text: "mutation updatePrReviewSummaryMutation(\n  $input: UpdatePullRequestReviewInput!\n) {\n  updatePullRequestReview(input: $input) {\n    pullRequestReview {\n      id\n      lastEditedAt\n      body\n      bodyHTML\n    }\n  }\n}\n",
      metadata: {},
    },
  };
})();
// prettier-ignore
(node).hash = 'ce6fa7b9b5a5709f8cc8001aa7ba8a15';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
