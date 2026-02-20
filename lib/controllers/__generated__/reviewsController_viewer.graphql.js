"use strict";

const node = {
  kind: "Fragment",
  name: "reviewsController_viewer",
  type: "User",
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
  ],
};
// prettier-ignore
(node).hash = 'e9e4cf88f2d8a809620a0f225d502896';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
