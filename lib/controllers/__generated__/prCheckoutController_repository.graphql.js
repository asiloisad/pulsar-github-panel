"use strict";

const node = {
  kind: "Fragment",
  name: "prCheckoutController_repository",
  type: "Repository",
  metadata: null,
  argumentDefinitions: [],
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
      name: "owner",
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
      ],
    },
  ],
};
// prettier-ignore
(node).hash = 'b2212745240c03ff8fc7cb13dfc63183';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
