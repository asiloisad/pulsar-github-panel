"use strict";

const node = (function () {
  var v0 = [
    {
      kind: "ScalarField",
      alias: null,
      name: "oid",
      args: null,
      storageKey: null,
    },
  ];
  return {
    kind: "Fragment",
    name: "headRefForcePushedEventView_item",
    type: "HeadRefForcePushedEvent",
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
        name: "beforeCommit",
        storageKey: null,
        args: null,
        concreteType: "Commit",
        plural: false,
        selections: v0,
      },
      {
        kind: "LinkedField",
        alias: null,
        name: "afterCommit",
        storageKey: null,
        args: null,
        concreteType: "Commit",
        plural: false,
        selections: v0,
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
})();
// prettier-ignore
(node).hash = 'fc403545674c57c1997c870805101ffb';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
