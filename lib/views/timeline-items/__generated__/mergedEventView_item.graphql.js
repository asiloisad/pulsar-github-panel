"use strict";

const node = {
  kind: "Fragment",
  name: "mergedEventView_item",
  type: "MergedEvent",
  metadata: null,
  argumentDefinitions: [],
  selections: [
    {
      kind: "LinkedField",
      alias: null,
      name: "actor",
      storageKey: null,
      args: null,
      concreteType: null,
      plural: false,
      selections: [
        {
          kind: "ScalarField",
          alias: null,
          name: "avatarUrl",
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
      ],
    },
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
      kind: "ScalarField",
      alias: null,
      name: "mergeRefName",
      args: null,
      storageKey: null,
    },
    {
      kind: "ScalarField",
      alias: null,
      name: "createdAt",
      args: null,
      storageKey: null,
    },
  ],
};
// prettier-ignore
(node).hash = 'd265decf08c14d96c2ec47fd5852a956';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
