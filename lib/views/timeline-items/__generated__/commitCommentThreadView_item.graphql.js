"use strict";

const node = {
  kind: "Fragment",
  name: "commitCommentThreadView_item",
  type: "PullRequestCommitCommentThread",
  metadata: null,
  argumentDefinitions: [],
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
          name: "oid",
          args: null,
          storageKey: null,
        },
      ],
    },
    {
      kind: "LinkedField",
      alias: null,
      name: "comments",
      storageKey: "comments(first:100)",
      args: [
        {
          kind: "Literal",
          name: "first",
          value: 100,
        },
      ],
      concreteType: "CommitCommentConnection",
      plural: false,
      selections: [
        {
          kind: "LinkedField",
          alias: null,
          name: "edges",
          storageKey: null,
          args: null,
          concreteType: "CommitCommentEdge",
          plural: true,
          selections: [
            {
              kind: "LinkedField",
              alias: null,
              name: "node",
              storageKey: null,
              args: null,
              concreteType: "CommitComment",
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
                  name: "commitCommentView_item",
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
// prettier-ignore
(node).hash = '2f881b33df634a755a5d66b192c2791b';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
