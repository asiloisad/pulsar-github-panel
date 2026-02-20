"use strict";

const node = {
  kind: "Fragment",
  name: "commitsView_nodes",
  type: "PullRequestCommit",
  metadata: {
    plural: true,
  },
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
          name: "id",
          args: null,
          storageKey: null,
        },
        {
          kind: "LinkedField",
          alias: null,
          name: "author",
          storageKey: null,
          args: null,
          concreteType: "GitActor",
          plural: false,
          selections: [
            {
              kind: "ScalarField",
              alias: null,
              name: "name",
              args: null,
              storageKey: null,
            },
            {
              kind: "LinkedField",
              alias: null,
              name: "user",
              storageKey: null,
              args: null,
              concreteType: "User",
              plural: false,
              selections: [
                {
                  kind: "ScalarField",
                  alias: null,
                  name: "login",
                  args: null,
                  storageKey: null,
                },
              ],
            },
          ],
        },
        {
          kind: "FragmentSpread",
          name: "commitView_commit",
          args: null,
        },
      ],
    },
  ],
};
// prettier-ignore
(node).hash = '5b2734f1e64af2ad2c9803201a0082f3';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
