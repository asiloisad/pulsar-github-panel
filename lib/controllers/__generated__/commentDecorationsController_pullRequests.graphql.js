"use strict";

const node = (function () {
  var v0 = [
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
  ];
  return {
    kind: "Fragment",
    name: "commentDecorationsController_pullRequests",
    type: "PullRequest",
    metadata: {
      plural: true,
    },
    argumentDefinitions: [],
    selections: [
      {
        kind: "ScalarField",
        alias: null,
        name: "number",
        args: null,
        storageKey: null,
      },
      {
        kind: "ScalarField",
        alias: null,
        name: "headRefName",
        args: null,
        storageKey: null,
      },
      {
        kind: "ScalarField",
        alias: null,
        name: "headRefOid",
        args: null,
        storageKey: null,
      },
      {
        kind: "LinkedField",
        alias: null,
        name: "headRepository",
        storageKey: null,
        args: null,
        concreteType: "Repository",
        plural: false,
        selections: v0,
      },
      {
        kind: "LinkedField",
        alias: null,
        name: "repository",
        storageKey: null,
        args: null,
        concreteType: "Repository",
        plural: false,
        selections: v0,
      },
    ],
  };
})();
// prettier-ignore
(node).hash = '62f96ccd13dfc2649112a7b4afaf4ba2';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
