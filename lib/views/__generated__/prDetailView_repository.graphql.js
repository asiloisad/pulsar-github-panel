"use strict";

const node = {
  kind: "Fragment",
  name: "prDetailView_repository",
  type: "Repository",
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
(node).hash = '3f3d61ddd6afa1c9e0811c3b5be51bb0';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
