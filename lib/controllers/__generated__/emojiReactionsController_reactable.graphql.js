"use strict";

const node = {
  kind: "Fragment",
  name: "emojiReactionsController_reactable",
  type: "Reactable",
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
      name: "emojiReactionsView_reactable",
      args: null,
    },
  ],
};
// prettier-ignore
(node).hash = 'cfdd39cd7aa02bce0bdcd52bc0154223';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
