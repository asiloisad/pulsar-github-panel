"use strict";

/*
mutation submitPrReviewMutation(
  $input: SubmitPullRequestReviewInput!
) {
  submitPullRequestReview(input: $input) {
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
        type: "SubmitPullRequestReviewInput!",
        defaultValue: null,
      },
    ],
    v1 = [
      {
        kind: "LinkedField",
        alias: null,
        name: "submitPullRequestReview",
        storageKey: null,
        args: [
          {
            kind: "Variable",
            name: "input",
            variableName: "input",
          },
        ],
        concreteType: "SubmitPullRequestReviewPayload",
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
      name: "submitPrReviewMutation",
      type: "Mutation",
      metadata: null,
      argumentDefinitions: v0,
      selections: v1,
    },
    operation: {
      kind: "Operation",
      name: "submitPrReviewMutation",
      argumentDefinitions: v0,
      selections: v1,
    },
    params: {
      operationKind: "mutation",
      name: "submitPrReviewMutation",
      id: null,
      text: "mutation submitPrReviewMutation(\n  $input: SubmitPullRequestReviewInput!\n) {\n  submitPullRequestReview(input: $input) {\n    pullRequestReview {\n      id\n    }\n  }\n}\n",
      metadata: {},
    },
  };
})();
// prettier-ignore
(node).hash = 'c52752b3b2cde11e6c86d574ffa967a0';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
