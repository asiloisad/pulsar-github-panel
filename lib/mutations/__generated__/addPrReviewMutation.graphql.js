"use strict";

/*
mutation addPrReviewMutation(
  $input: AddPullRequestReviewInput!
) {
  addPullRequestReview(input: $input) {
    reviewEdge {
      node {
        id
        body
        bodyHTML
        state
        submittedAt
        viewerCanReact
        viewerCanUpdate
        author {
          __typename
          login
          avatarUrl
          ... on Node {
            id
          }
        }
        ...emojiReactionsController_reactable
      }
    }
  }
}

fragment emojiReactionsController_reactable on Reactable {
  id
  ...emojiReactionsView_reactable
}

fragment emojiReactionsView_reactable on Reactable {
  id
  reactionGroups {
    content
    viewerHasReacted
    users {
      totalCount
    }
  }
  viewerCanReact
}
*/

const node = (function () {
  var v0 = [
      {
        kind: "LocalArgument",
        name: "input",
        type: "AddPullRequestReviewInput!",
        defaultValue: null,
      },
    ],
    v1 = [
      {
        kind: "Variable",
        name: "input",
        variableName: "input",
      },
    ],
    v2 = {
      kind: "ScalarField",
      alias: null,
      name: "id",
      args: null,
      storageKey: null,
    },
    v3 = {
      kind: "ScalarField",
      alias: null,
      name: "body",
      args: null,
      storageKey: null,
    },
    v4 = {
      kind: "ScalarField",
      alias: null,
      name: "bodyHTML",
      args: null,
      storageKey: null,
    },
    v5 = {
      kind: "ScalarField",
      alias: null,
      name: "state",
      args: null,
      storageKey: null,
    },
    v6 = {
      kind: "ScalarField",
      alias: null,
      name: "submittedAt",
      args: null,
      storageKey: null,
    },
    v7 = {
      kind: "ScalarField",
      alias: null,
      name: "viewerCanReact",
      args: null,
      storageKey: null,
    },
    v8 = {
      kind: "ScalarField",
      alias: null,
      name: "viewerCanUpdate",
      args: null,
      storageKey: null,
    },
    v9 = {
      kind: "ScalarField",
      alias: null,
      name: "login",
      args: null,
      storageKey: null,
    },
    v10 = {
      kind: "ScalarField",
      alias: null,
      name: "avatarUrl",
      args: null,
      storageKey: null,
    };
  return {
    kind: "Request",
    fragment: {
      kind: "Fragment",
      name: "addPrReviewMutation",
      type: "Mutation",
      metadata: null,
      argumentDefinitions: v0,
      selections: [
        {
          kind: "LinkedField",
          alias: null,
          name: "addPullRequestReview",
          storageKey: null,
          args: v1,
          concreteType: "AddPullRequestReviewPayload",
          plural: false,
          selections: [
            {
              kind: "LinkedField",
              alias: null,
              name: "reviewEdge",
              storageKey: null,
              args: null,
              concreteType: "PullRequestReviewEdge",
              plural: false,
              selections: [
                {
                  kind: "LinkedField",
                  alias: null,
                  name: "node",
                  storageKey: null,
                  args: null,
                  concreteType: "PullRequestReview",
                  plural: false,
                  selections: [
                    v2,
                    v3,
                    v4,
                    v5,
                    v6,
                    v7,
                    v8,
                    {
                      kind: "LinkedField",
                      alias: null,
                      name: "author",
                      storageKey: null,
                      args: null,
                      concreteType: null,
                      plural: false,
                      selections: [v9, v10],
                    },
                    {
                      kind: "FragmentSpread",
                      name: "emojiReactionsController_reactable",
                      args: null,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    operation: {
      kind: "Operation",
      name: "addPrReviewMutation",
      argumentDefinitions: v0,
      selections: [
        {
          kind: "LinkedField",
          alias: null,
          name: "addPullRequestReview",
          storageKey: null,
          args: v1,
          concreteType: "AddPullRequestReviewPayload",
          plural: false,
          selections: [
            {
              kind: "LinkedField",
              alias: null,
              name: "reviewEdge",
              storageKey: null,
              args: null,
              concreteType: "PullRequestReviewEdge",
              plural: false,
              selections: [
                {
                  kind: "LinkedField",
                  alias: null,
                  name: "node",
                  storageKey: null,
                  args: null,
                  concreteType: "PullRequestReview",
                  plural: false,
                  selections: [
                    v2,
                    v3,
                    v4,
                    v5,
                    v6,
                    v7,
                    v8,
                    {
                      kind: "LinkedField",
                      alias: null,
                      name: "author",
                      storageKey: null,
                      args: null,
                      concreteType: null,
                      plural: false,
                      selections: [
                        {
                          kind: "ScalarField",
                          alias: null,
                          name: "__typename",
                          args: null,
                          storageKey: null,
                        },
                        v9,
                        v10,
                        v2,
                      ],
                    },
                    {
                      kind: "LinkedField",
                      alias: null,
                      name: "reactionGroups",
                      storageKey: null,
                      args: null,
                      concreteType: "ReactionGroup",
                      plural: true,
                      selections: [
                        {
                          kind: "ScalarField",
                          alias: null,
                          name: "content",
                          args: null,
                          storageKey: null,
                        },
                        {
                          kind: "ScalarField",
                          alias: null,
                          name: "viewerHasReacted",
                          args: null,
                          storageKey: null,
                        },
                        {
                          kind: "LinkedField",
                          alias: null,
                          name: "users",
                          storageKey: null,
                          args: null,
                          concreteType: "ReactingUserConnection",
                          plural: false,
                          selections: [
                            {
                              kind: "ScalarField",
                              alias: null,
                              name: "totalCount",
                              args: null,
                              storageKey: null,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    params: {
      operationKind: "mutation",
      name: "addPrReviewMutation",
      id: null,
      text: "mutation addPrReviewMutation(\n  $input: AddPullRequestReviewInput!\n) {\n  addPullRequestReview(input: $input) {\n    reviewEdge {\n      node {\n        id\n        body\n        bodyHTML\n        state\n        submittedAt\n        viewerCanReact\n        viewerCanUpdate\n        author {\n          __typename\n          login\n          avatarUrl\n          ... on Node {\n            id\n          }\n        }\n        ...emojiReactionsController_reactable\n      }\n    }\n  }\n}\n\nfragment emojiReactionsController_reactable on Reactable {\n  id\n  ...emojiReactionsView_reactable\n}\n\nfragment emojiReactionsView_reactable on Reactable {\n  id\n  reactionGroups {\n    content\n    viewerHasReacted\n    users {\n      totalCount\n    }\n  }\n  viewerCanReact\n}\n",
      metadata: {},
    },
  };
})();
// prettier-ignore
(node).hash = 'd2960bba4729b6c3e91e249ea582fec1';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
