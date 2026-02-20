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
      kind: "ScalarField",
      alias: null,
      name: "avatarUrl",
      args: null,
      storageKey: null,
    },
    {
      kind: "LinkedField",
      alias: null,
      name: "user",
      storageKey: null,
      args: null,
      concreteType: "User",
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
    name: "commitView_commit",
    type: "Commit",
    metadata: null,
    argumentDefinitions: [],
    selections: [
      {
        kind: "LinkedField",
        alias: null,
        name: "author",
        storageKey: null,
        args: null,
        concreteType: "GitActor",
        plural: false,
        selections: v0,
      },
      {
        kind: "LinkedField",
        alias: null,
        name: "committer",
        storageKey: null,
        args: null,
        concreteType: "GitActor",
        plural: false,
        selections: v0,
      },
      {
        kind: "ScalarField",
        alias: null,
        name: "authoredByCommitter",
        args: null,
        storageKey: null,
      },
      {
        kind: "ScalarField",
        alias: "sha",
        name: "oid",
        args: null,
        storageKey: null,
      },
      {
        kind: "ScalarField",
        alias: null,
        name: "message",
        args: null,
        storageKey: null,
      },
      {
        kind: "ScalarField",
        alias: null,
        name: "messageHeadlineHTML",
        args: null,
        storageKey: null,
      },
      {
        kind: "ScalarField",
        alias: null,
        name: "commitUrl",
        args: null,
        storageKey: null,
      },
    ],
  };
})();
// prettier-ignore
(node).hash = '9d2823ee95f39173f656043ddfc8d47c';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
