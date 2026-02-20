"use strict";

/*
mutation deletePrReviewMutation(
  $input: DeletePullRequestReviewInput!
) {
  deletePullRequestReview(input: $input) {
    pullRequestReview {
      id
    }
  }
}
*/

const node = (function () {
  var v0 = [
      {
        kind: "LocalArgument",
        name: "input",
        type: "DeletePullRequestReviewInput!",
        defaultValue: null,
      },
    ],
    v1 = [
      {
        kind: "LinkedField",
        alias: null,
        name: "deletePullRequestReview",
        storageKey: null,
        args: [
          {
            kind: "Variable",
            name: "input",
            variableName: "input",
          },
        ],
        concreteType: "DeletePullRequestReviewPayload",
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
            ],
          },
        ],
      },
    ];
  return {
    kind: "Request",
    fragment: {
      kind: "Fragment",
      name: "deletePrReviewMutation",
      type: "Mutation",
      metadata: null,
      argumentDefinitions: v0,
      selections: v1,
    },
    operation: {
      kind: "Operation",
      name: "deletePrReviewMutation",
      argumentDefinitions: v0,
      selections: v1,
    },
    params: {
      operationKind: "mutation",
      name: "deletePrReviewMutation",
      id: null,
      text: "mutation deletePrReviewMutation(\n  $input: DeletePullRequestReviewInput!\n) {\n  deletePullRequestReview(input: $input) {\n    pullRequestReview {\n      id\n    }\n  }\n}\n",
      metadata: {},
    },
  };
})();
// prettier-ignore
(node).hash = '768b81334e225cb5d15c0508d2bd4b1f';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
