"use strict";

const node = (function () {
  var v0 = {
      kind: "ScalarField",
      alias: null,
      name: "login",
      args: null,
      storageKey: null,
    },
    v1 = [
      {
        kind: "ScalarField",
        alias: null,
        name: "state",
        args: null,
        storageKey: null,
      },
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
        name: "title",
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
      {
        kind: "LinkedField",
        alias: null,
        name: "author",
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
    ];
  return {
    kind: "Fragment",
    name: "issueishTooltipContainer_resource",
    type: "UniformResourceLocatable",
    metadata: null,
    argumentDefinitions: [],
    selections: [
      {
        kind: "ScalarField",
        alias: null,
        name: "__typename",
        args: null,
        storageKey: null,
      },
      {
        kind: "InlineFragment",
        type: "Issue",
        selections: v1,
      },
      {
        kind: "InlineFragment",
        type: "PullRequest",
        selections: v1,
      },
    ],
  };
})();
// prettier-ignore
(node).hash = '8980fc73c7ed3f632f0612ce14f2f0d1';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
