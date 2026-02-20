"use strict";

const node = {
  kind: "Fragment",
  name: "issueDetailView_repository",
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
(node).hash = '295a60f53b25b6fdb07a1539cda447f2';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
