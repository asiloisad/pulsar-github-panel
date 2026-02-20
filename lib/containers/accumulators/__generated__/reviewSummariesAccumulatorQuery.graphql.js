"use strict";

/*
query reviewSummariesAccumulatorQuery(
  $url: URI!
  $reviewCount: Int!
  $reviewCursor: String
) {
  resource(url: $url) {
    __typename
    ... on PullRequest {
      ...reviewSummariesAccumulator_pullRequest_2zzc96
    }
    ... on Node {
      id
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

fragment reviewSummariesAccumulator_pullRequest_2zzc96 on PullRequest {
  url
  reviews(first: $reviewCount, after: $reviewCursor) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      cursor
      node {
        id
        body
        bodyHTML
        state
        submittedAt
        lastEditedAt
        url
        author {
          __typename
          login
          avatarUrl
          url
          ... on Node {
            id
          }
        }
        viewerCanUpdate
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
        name: "url",
        type: "URI!",
        defaultValue: null,
      },
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
    ],
    v1 = [
      {
        kind: "Variable",
        name: "url",
        variableName: "url",
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
    v4 = {
      kind: "ScalarField",
      alias: null,
      name: "url",
      args: null,
      storageKey: null,
    },
    v5 = [
      {
        kind: "Variable",
        name: "after",
        variableName: "reviewCursor",
      },
      {
        kind: "Variable",
        name: "first",
        variableName: "reviewCount",
      },
    ];
  return {
    kind: "Request",
    fragment: {
      kind: "Fragment",
      name: "reviewSummariesAccumulatorQuery",
      type: "Query",
      metadata: null,
      argumentDefinitions: v0,
      selections: [
        {
          kind: "LinkedField",
          alias: null,
          name: "resource",
          storageKey: null,
          args: v1,
          concreteType: null,
          plural: false,
          selections: [
            {
              kind: "InlineFragment",
              type: "PullRequest",
              selections: [
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
              ],
            },
          ],
        },
      ],
    },
    operation: {
      kind: "Operation",
      name: "reviewSummariesAccumulatorQuery",
      argumentDefinitions: v0,
      selections: [
        {
          kind: "LinkedField",
          alias: null,
          name: "resource",
          storageKey: null,
          args: v1,
          concreteType: null,
          plural: false,
          selections: [
            v2,
            v3,
            {
              kind: "InlineFragment",
              type: "PullRequest",
              selections: [
                v4,
                {
                  kind: "LinkedField",
                  alias: null,
                  name: "reviews",
                  storageKey: null,
                  args: v5,
                  concreteType: "PullRequestReviewConnection",
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
                      concreteType: "PullRequestReviewEdge",
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
                          concreteType: "PullRequestReview",
                          plural: false,
                          selections: [
                            v3,
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
                              name: "submittedAt",
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
                            v4,
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
                                  name: "login",
                                  args: null,
                                  storageKey: null,
                                },
                                {
                                  kind: "ScalarField",
                                  alias: null,
                                  name: "avatarUrl",
                                  args: null,
                                  storageKey: null,
                                },
                                v4,
                                v3,
                              ],
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
                            {
                              kind: "ScalarField",
                              alias: null,
                              name: "viewerCanReact",
                              args: null,
                              storageKey: null,
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
                  name: "reviews",
                  args: v5,
                  handle: "connection",
                  key: "ReviewSummariesAccumulator_reviews",
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
      name: "reviewSummariesAccumulatorQuery",
      id: null,
      text: "query reviewSummariesAccumulatorQuery(\n  $url: URI!\n  $reviewCount: Int!\n  $reviewCursor: String\n) {\n  resource(url: $url) {\n    __typename\n    ... on PullRequest {\n      ...reviewSummariesAccumulator_pullRequest_2zzc96\n    }\n    ... on Node {\n      id\n    }\n  }\n}\n\nfragment emojiReactionsController_reactable on Reactable {\n  id\n  ...emojiReactionsView_reactable\n}\n\nfragment emojiReactionsView_reactable on Reactable {\n  id\n  reactionGroups {\n    content\n    viewerHasReacted\n    users {\n      totalCount\n    }\n  }\n  viewerCanReact\n}\n\nfragment reviewSummariesAccumulator_pullRequest_2zzc96 on PullRequest {\n  url\n  reviews(first: $reviewCount, after: $reviewCursor) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      cursor\n      node {\n        id\n        body\n        bodyHTML\n        state\n        submittedAt\n        lastEditedAt\n        url\n        author {\n          __typename\n          login\n          avatarUrl\n          url\n          ... on Node {\n            id\n          }\n        }\n        viewerCanUpdate\n        authorAssociation\n        ...emojiReactionsController_reactable\n        __typename\n      }\n    }\n  }\n}\n",
      metadata: {},
    },
  };
})();
// prettier-ignore
(node).hash = '74bb2a56369e3c54b76c4ce7c17f328e';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
