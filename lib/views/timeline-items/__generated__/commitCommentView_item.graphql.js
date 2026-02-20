"use strict";

const node = {
  kind: "Fragment",
  name: "commitCommentView_item",
  type: "CommitComment",
  metadata: null,
  argumentDefinitions: [],
  selections: [
    {
      kind: "LinkedField",
      alias: null,
      name: "author",
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
        {
          kind: "ScalarField",
          alias: null,
          name: "avatarUrl",
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
      name: "bodyHTML",
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
    {
      kind: "ScalarField",
      alias: null,
      name: "path",
      args: null,
      storageKey: null,
    },
    {
      kind: "ScalarField",
      alias: null,
      name: "position",
      args: null,
      storageKey: null,
    },
  ],
};
// prettier-ignore
(node).hash = 'f3e868b343fe8d6fee958d5339b554dc';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
