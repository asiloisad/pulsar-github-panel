"use strict";

const node = (function () {
  var v0 = {
    kind: "ScalarField",
    alias: null,
    name: "url",
    args: null,
    storageKey: null,
  };
  return {
    kind: "Fragment",
    name: "reviewSummariesAccumulator_pullRequest",
    type: "PullRequest",
    metadata: {
      connection: [
        {
          count: "reviewCount",
          cursor: "reviewCursor",
          direction: "forward",
          path: ["reviews"],
        },
      ],
    },
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
    ],
    selections: [
      v0,
      {
        kind: "LinkedField",
        alias: "reviews",
        name: "__ReviewSummariesAccumulator_reviews_connection",
        storageKey: null,
        args: null,
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
                      v0,
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
(node).hash = '4ac732c2325cedd6e8e90bb5c140cc1a';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
