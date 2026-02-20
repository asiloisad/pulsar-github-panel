"use strict";

const node = {
  kind: "Fragment",
  name: "issueCommentView_item",
  type: "IssueComment",
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
      name: "url",
      args: null,
      storageKey: null,
    },
  ],
};
// prettier-ignore
(node).hash = 'adc36c52f51de14256693ab9e4eb84bb';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
