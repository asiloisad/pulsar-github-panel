"use strict";

/*
query reviewCommentsAccumulatorQuery(
  $id: ID!
  $commentCount: Int!
  $commentCursor: String
) {
  node(id: $id) {
    __typename
    ... on PullRequestReviewThread {
      ...reviewCommentsAccumulator_reviewThread_1VbUmL
    }
    id
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

fragment reviewCommentsAccumulator_reviewThread_1VbUmL on PullRequestReviewThread {
  id
  comments(first: $commentCount, after: $commentCursor) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      cursor
      node {
        id
        author {
          __typename
          avatarUrl
          login
          url
          ... on Node {
            id
          }
        }
        bodyHTML
        body
        isMinimized
        state
        viewerCanReact
        viewerCanUpdate
        path
        position
        createdAt
        lastEditedAt
        url
        authorAssociation
        ...emojiReactionsController_reactable
        __typename
      }
    }
  }
}
*/

const node = (function () {
  var v0 = [
      {
        kind: "LocalArgument",
        name: "id",
        type: "ID!",
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
    v1 = [
      {
        kind: "Variable",
        name: "id",
        variableName: "id",
      },
    ],
    v2 = {
      kind: "ScalarField",
      alias: null,
      name: "__typename",
      args: null,
      storageKey: null,
    },
    v3 = {
      kind: "ScalarField",
      alias: null,
      name: "id",
      args: null,
      storageKey: null,
    },
    v4 = [
      {
        kind: "Variable",
        name: "after",
        variableName: "commentCursor",
      },
      {
        kind: "Variable",
        name: "first",
        variableName: "commentCount",
      },
    ],
    v5 = {
      kind: "ScalarField",
      alias: null,
      name: "url",
      args: null,
      storageKey: null,
    };
  return {
    kind: "Request",
    fragment: {
      kind: "Fragment",
      name: "reviewCommentsAccumulatorQuery",
      type: "Query",
      metadata: null,
      argumentDefinitions: v0,
      selections: [
        {
          kind: "LinkedField",
          alias: null,
          name: "node",
          storageKey: null,
          args: v1,
          concreteType: null,
          plural: false,
          selections: [
            {
              kind: "InlineFragment",
              type: "PullRequestReviewThread",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: "reviewCommentsAccumulator_reviewThread",
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
      name: "reviewCommentsAccumulatorQuery",
      argumentDefinitions: v0,
      selections: [
        {
          kind: "LinkedField",
          alias: null,
          name: "node",
          storageKey: null,
          args: v1,
          concreteType: null,
          plural: false,
          selections: [
            v2,
            v3,
            {
              kind: "InlineFragment",
              type: "PullRequestReviewThread",
              selections: [
                {
                  kind: "LinkedField",
                  alias: null,
                  name: "comments",
                  storageKey: null,
                  args: v4,
                  concreteType: "PullRequestReviewCommentConnection",
                  plural: false,
                  selections: [
                    {
                      kind: "LinkedField",
                      alias: null,
                      name: "pageInfo",
                      storageKey: null,
                      args: null,
                      concreteType: "PageInfo",
                      plural: false,
                      selections: [
                        {
                          kind: "ScalarField",
                          alias: null,
                          name: "hasNextPage",
                          args: null,
                          storageKey: null,
                        },
                        {
                          kind: "ScalarField",
                          alias: null,
                          name: "endCursor",
                          args: null,
                          storageKey: null,
                        },
                      ],
                    },
                    {
                      kind: "LinkedField",
                      alias: null,
                      name: "edges",
                      storageKey: null,
                      args: null,
                      concreteType: "PullRequestReviewCommentEdge",
                      plural: true,
                      selections: [
                        {
                          kind: "ScalarField",
                          alias: null,
                          name: "cursor",
                          args: null,
                          storageKey: null,
                        },
                        {
                          kind: "LinkedField",
                          alias: null,
                          name: "node",
                          storageKey: null,
                          args: null,
                          concreteType: "PullRequestReviewComment",
                          plural: false,
                          selections: [
                            v3,
                            {
                              kind: "LinkedField",
                              alias: null,
                              name: "author",
                              storageKey: null,
                              args: null,
                              concreteType: null,
                              plural: false,
                              selections: [
                                v2,
                                {
                                  kind: "ScalarField",
                                  alias: null,
                                  name: "avatarUrl",
                                  args: null,
                                  storageKey: null,
                                },
                                {
                                  kind: "ScalarField",
                                  alias: null,
                                  name: "login",
                                  args: null,
                                  storageKey: null,
                                },
                                v5,
                                v3,
                              ],
                            },
                            {
                              kind: "ScalarField",
                              alias: null,
                              name: "bodyHTML",
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
                              name: "isMinimized",
                              args: null,
                              storageKey: null,
                            },
                            {
                              kind: "ScalarField",
                              alias: null,
                              name: "state",
                              args: null,
                              storageKey: null,
                            },
                            {
                              kind: "ScalarField",
                              alias: null,
                              name: "viewerCanReact",
                              args: null,
                              storageKey: null,
                            },
                            {
                              kind: "ScalarField",
                              alias: null,
                              name: "viewerCanUpdate",
                              args: null,
                              storageKey: null,
                            },
                            {
                              kind: "ScalarField",
                              alias: null,
                              name: "path",
                              args: null,
                              storageKey: null,
                            },
                            {
                              kind: "ScalarField",
                              alias: null,
                              name: "position",
                              args: null,
                              storageKey: null,
                            },
                            {
                              kind: "ScalarField",
                              alias: null,
                              name: "createdAt",
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
                            v5,
                            {
                              kind: "ScalarField",
                              alias: null,
                              name: "authorAssociation",
                              args: null,
                              storageKey: null,
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
                            v2,
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  kind: "LinkedHandle",
                  alias: null,
                  name: "comments",
                  args: v4,
                  handle: "connection",
                  key: "ReviewCommentsAccumulator_comments",
                  filters: null,
                },
              ],
            },
          ],
        },
      ],
    },
    params: {
      operationKind: "query",
      name: "reviewCommentsAccumulatorQuery",
      id: null,
      text: "query reviewCommentsAccumulatorQuery(\n  $id: ID!\n  $commentCount: Int!\n  $commentCursor: String\n) {\n  node(id: $id) {\n    __typename\n    ... on PullRequestReviewThread {\n      ...reviewCommentsAccumulator_reviewThread_1VbUmL\n    }\n    id\n  }\n}\n\nfragment emojiReactionsController_reactable on Reactable {\n  id\n  ...emojiReactionsView_reactable\n}\n\nfragment emojiReactionsView_reactable on Reactable {\n  id\n  reactionGroups {\n    content\n    viewerHasReacted\n    users {\n      totalCount\n    }\n  }\n  viewerCanReact\n}\n\nfragment reviewCommentsAccumulator_reviewThread_1VbUmL on PullRequestReviewThread {\n  id\n  comments(first: $commentCount, after: $commentCursor) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      cursor\n      node {\n        id\n        author {\n          __typename\n          avatarUrl\n          login\n          url\n          ... on Node {\n            id\n          }\n        }\n        bodyHTML\n        body\n        isMinimized\n        state\n        viewerCanReact\n        viewerCanUpdate\n        path\n        position\n        createdAt\n        lastEditedAt\n        url\n        authorAssociation\n        ...emojiReactionsController_reactable\n        __typename\n      }\n    }\n  }\n}\n",
      metadata: {},
    },
  };
})();
// prettier-ignore
(node).hash = '25bc4376239d278025fc1f353900572a';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
