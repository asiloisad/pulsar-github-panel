"use strict";

const node = (function () {
  var v0 = {
      kind: "ScalarField",
      alias: null,
      name: "id",
      args: null,
      storageKey: null,
    },
    v1 = {
      kind: "ScalarField",
      alias: null,
      name: "url",
      args: null,
      storageKey: null,
    };
  return {
    kind: "Fragment",
    name: "reviewCommentsAccumulator_reviewThread",
    type: "PullRequestReviewThread",
    metadata: {
      connection: [
        {
          count: "commentCount",
          cursor: "commentCursor",
          direction: "forward",
          path: ["comments"],
        },
      ],
    },
    argumentDefinitions: [
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
      v0,
      {
        kind: "LinkedField",
        alias: "comments",
        name: "__ReviewCommentsAccumulator_comments_connection",
        storageKey: null,
        args: null,
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
                  v0,
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
                      v1,
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
                  v1,
                  {
                    kind: "ScalarField",
                    alias: null,
                    name: "authorAssociation",
                    args: null,
                    storageKey: null,
                  },
                  {
                    kind: "ScalarField",
                    alias: null,
                    name: "__typename",
                    args: null,
                    storageKey: null,
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
  };
})();
// prettier-ignore
(node).hash = '2716996f7cb548d6f3a3894f5d51193a';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
