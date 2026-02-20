"use strict";

const node = {
  kind: "Fragment",
  name: "reviewsController_pullRequest",
  type: "PullRequest",
  metadata: null,
  argumentDefinitions: [],
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
      name: "prCheckoutController_pullRequest",
      args: null,
    },
  ],
};
// prettier-ignore
(node).hash = '9d67f9908ab4ed776af5f1ee14f61ccb';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
