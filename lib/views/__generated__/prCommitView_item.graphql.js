"use strict";

const node = {
  kind: "Fragment",
  name: "prCommitView_item",
  type: "Commit",
  metadata: null,
  argumentDefinitions: [],
  selections: [
    {
      kind: "LinkedField",
      alias: null,
      name: "committer",
      storageKey: null,
      args: null,
      concreteType: "GitActor",
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
          name: "name",
          args: null,
          storageKey: null,
        },
        {
          kind: "ScalarField",
          alias: null,
          name: "date",
          args: null,
          storageKey: null,
        },
      ],
    },
    {
      kind: "ScalarField",
      alias: null,
      name: "messageHeadline",
      args: null,
      storageKey: null,
    },
    {
      kind: "ScalarField",
      alias: null,
      name: "messageBody",
      args: null,
      storageKey: null,
    },
    {
      kind: "ScalarField",
      alias: "shortSha",
      name: "abbreviatedOid",
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
      name: "url",
      args: null,
      storageKey: null,
    },
  ],
};
// prettier-ignore
(node).hash = '2bd193bec5d758f465d9428ff3cd8a09';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
