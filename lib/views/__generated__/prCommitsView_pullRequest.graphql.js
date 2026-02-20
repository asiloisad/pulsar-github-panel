"use strict";

const node = {
  kind: "Fragment",
  name: "prCommitsView_pullRequest",
  type: "PullRequest",
  metadata: {
    connection: [
      {
        count: "commitCount",
        cursor: "commitCursor",
        direction: "forward",
        path: ["commits"],
      },
    ],
  },
  argumentDefinitions: [
    {
      kind: "LocalArgument",
      name: "commitCount",
      type: "Int!",
      defaultValue: 100,
    },
    {
      kind: "LocalArgument",
      name: "commitCursor",
      type: "String",
      defaultValue: null,
    },
  ],
  selections: [
    {
      kind: "ScalarField",
      alias: null,
      name: "url",
      args: null,
      storageKey: null,
    },
    {
      kind: "LinkedField",
      alias: "commits",
      name: "__prCommitsView_commits_connection",
      storageKey: null,
      args: null,
      concreteType: "PullRequestCommitConnection",
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
              name: "endCursor",
              args: null,
              storageKey: null,
            },
            {
              kind: "ScalarField",
              alias: null,
              name: "hasNextPage",
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
          concreteType: "PullRequestCommitEdge",
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
              concreteType: "PullRequestCommit",
              plural: false,
              selections: [
                {
                  kind: "LinkedField",
                  alias: null,
                  name: "commit",
                  storageKey: null,
                  args: null,
                  concreteType: "Commit",
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
                      kind: "FragmentSpread",
                      name: "prCommitView_item",
                      args: null,
                    },
                  ],
                },
                {
                  kind: "ScalarField",
                  alias: null,
                  name: "__typename",
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
};
// prettier-ignore
(node).hash = '4945c525c20aac5e24befbe8b217c2c9';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
