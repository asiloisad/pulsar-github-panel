"use strict";

const node = (function () {
  var v0 = {
    kind: "ScalarField",
    alias: null,
    name: "login",
    args: null,
    storageKey: null,
  };
  return {
    kind: "Fragment",
    name: "crossReferencedEventsView_nodes",
    type: "CrossReferencedEvent",
    metadata: {
      plural: true,
    },
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
        name: "referencedAt",
        args: null,
        storageKey: null,
      },
      {
        kind: "ScalarField",
        alias: null,
        name: "isCrossRepository",
        args: null,
        storageKey: null,
      },
      {
        kind: "LinkedField",
        alias: null,
        name: "actor",
        storageKey: null,
        args: null,
        concreteType: null,
        plural: false,
        selections: [
          v0,
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
        name: "source",
        storageKey: null,
        args: null,
        concreteType: null,
        plural: false,
        selections: [
          {
            kind: "ScalarField",
            alias: null,
            name: "__typename",
            args: null,
            storageKey: null,
          },
          {
            kind: "LinkedField",
            alias: null,
            name: "repository",
            storageKey: null,
            args: null,
            concreteType: "Repository",
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
                name: "owner",
                storageKey: null,
                args: null,
                concreteType: null,
                plural: false,
                selections: [v0],
              },
            ],
          },
        ],
      },
      {
        kind: "FragmentSpread",
        name: "crossReferencedEventView_item",
        args: null,
      },
    ],
  };
})();
// prettier-ignore
(node).hash = '5bbb7b39e10559bac4af2d6f9ff7a9e2';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
