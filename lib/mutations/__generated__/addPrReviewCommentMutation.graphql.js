"use strict";

/*
mutation addPrReviewCommentMutation(
  $input: AddPullRequestReviewCommentInput!
) {
  addPullRequestReviewComment(input: $input) {
    commentEdge {
      node {
        id
        author {
          __typename
          avatarUrl
          login
          ... on Node {
            id
          }
        }
        body
        bodyHTML
        isMinimized
        viewerCanReact
        viewerCanUpdate
        path
        position
        createdAt
        lastEditedAt
        url
        authorAssociation
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
        type: "AddPullRequestReviewCommentInput!",
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
      name: "avatarUrl",
      args: null,
      storageKey: null,
    },
    v4 = {
      kind: "ScalarField",
      alias: null,
      name: "login",
      args: null,
      storageKey: null,
    },
    v5 = {
      kind: "ScalarField",
      alias: null,
      name: "body",
      args: null,
      storageKey: null,
    },
    v6 = {
      kind: "ScalarField",
      alias: null,
      name: "bodyHTML",
      args: null,
      storageKey: null,
    },
    v7 = {
      kind: "ScalarField",
      alias: null,
      name: "isMinimized",
      args: null,
      storageKey: null,
    },
    v8 = {
      kind: "ScalarField",
      alias: null,
      name: "viewerCanReact",
      args: null,
      storageKey: null,
    },
    v9 = {
      kind: "ScalarField",
      alias: null,
      name: "viewerCanUpdate",
      args: null,
      storageKey: null,
    },
    v10 = {
      kind: "ScalarField",
      alias: null,
      name: "path",
      args: null,
      storageKey: null,
    },
    v11 = {
      kind: "ScalarField",
      alias: null,
      name: "position",
      args: null,
      storageKey: null,
    },
    v12 = {
      kind: "ScalarField",
      alias: null,
      name: "createdAt",
      args: null,
      storageKey: null,
    },
    v13 = {
      kind: "ScalarField",
      alias: null,
      name: "lastEditedAt",
      args: null,
      storageKey: null,
    },
    v14 = {
      kind: "ScalarField",
      alias: null,
      name: "url",
      args: null,
      storageKey: null,
    },
    v15 = {
      kind: "ScalarField",
      alias: null,
      name: "authorAssociation",
      args: null,
      storageKey: null,
    };
  return {
    kind: "Request",
    fragment: {
      kind: "Fragment",
      name: "addPrReviewCommentMutation",
      type: "Mutation",
      metadata: null,
      argumentDefinitions: v0,
      selections: [
        {
          kind: "LinkedField",
          alias: null,
          name: "addPullRequestReviewComment",
          storageKey: null,
          args: v1,
          concreteType: "AddPullRequestReviewCommentPayload",
          plural: false,
          selections: [
            {
              kind: "LinkedField",
              alias: null,
              name: "commentEdge",
              storageKey: null,
              args: null,
              concreteType: "PullRequestReviewCommentEdge",
              plural: false,
              selections: [
                {
                  kind: "LinkedField",
                  alias: null,
                  name: "node",
                  storageKey: null,
                  args: null,
                  concreteType: "PullRequestReviewComment",
                  plural: false,
                  selections: [
                    v2,
                    {
                      kind: "LinkedField",
                      alias: null,
                      name: "author",
                      storageKey: null,
                      args: null,
                      concreteType: null,
                      plural: false,
                      selections: [v3, v4],
                    },
                    v5,
                    v6,
                    v7,
                    v8,
                    v9,
                    v10,
                    v11,
                    v12,
                    v13,
                    v14,
                    v15,
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
      name: "addPrReviewCommentMutation",
      argumentDefinitions: v0,
      selections: [
        {
          kind: "LinkedField",
          alias: null,
          name: "addPullRequestReviewComment",
          storageKey: null,
          args: v1,
          concreteType: "AddPullRequestReviewCommentPayload",
          plural: false,
          selections: [
            {
              kind: "LinkedField",
              alias: null,
              name: "commentEdge",
              storageKey: null,
              args: null,
              concreteType: "PullRequestReviewCommentEdge",
              plural: false,
              selections: [
                {
                  kind: "LinkedField",
                  alias: null,
                  name: "node",
                  storageKey: null,
                  args: null,
                  concreteType: "PullRequestReviewComment",
                  plural: false,
                  selections: [
                    v2,
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
                        v3,
                        v4,
                        v2,
                      ],
                    },
                    v5,
                    v6,
                    v7,
                    v8,
                    v9,
                    v10,
                    v11,
                    v12,
                    v13,
                    v14,
                    v15,
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
      name: "addPrReviewCommentMutation",
      id: null,
      text: "mutation addPrReviewCommentMutation(\n  $input: AddPullRequestReviewCommentInput!\n) {\n  addPullRequestReviewComment(input: $input) {\n    commentEdge {\n      node {\n        id\n        author {\n          __typename\n          avatarUrl\n          login\n          ... on Node {\n            id\n          }\n        }\n        body\n        bodyHTML\n        isMinimized\n        viewerCanReact\n        viewerCanUpdate\n        path\n        position\n        createdAt\n        lastEditedAt\n        url\n        authorAssociation\n        ...emojiReactionsController_reactable\n      }\n    }\n  }\n}\n\nfragment emojiReactionsController_reactable on Reactable {\n  id\n  ...emojiReactionsView_reactable\n}\n\nfragment emojiReactionsView_reactable on Reactable {\n  id\n  reactionGroups {\n    content\n    viewerHasReacted\n    users {\n      totalCount\n    }\n  }\n  viewerCanReact\n}\n",
      metadata: {},
    },
  };
})();
// prettier-ignore
(node).hash = '0485900371928de8c6b843560dfe441c';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
