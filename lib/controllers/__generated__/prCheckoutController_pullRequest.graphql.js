"use strict";

const node = {
  kind: "Fragment",
  name: "prCheckoutController_pullRequest",
  type: "PullRequest",
  metadata: null,
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
      kind: "LinkedField",
      alias: null,
      name: "headRepository",
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
          kind: "ScalarField",
          alias: null,
          name: "url",
          args: null,
          storageKey: null,
        },
        {
          kind: "ScalarField",
          alias: null,
          name: "sshUrl",
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
    },
  ],
};
// prettier-ignore
(node).hash = '66e001f389a2c4f74c1369cf69b31268';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
