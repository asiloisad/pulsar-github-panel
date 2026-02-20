"use strict";

const node = {
  kind: "Fragment",
  name: "checkSuiteView_checkSuite",
  type: "CheckSuite",
  metadata: null,
  argumentDefinitions: [],
  selections: [
    {
      kind: "LinkedField",
      alias: null,
      name: "app",
      storageKey: null,
      args: null,
      concreteType: "App",
      plural: false,
      selections: [
        {
          kind: "ScalarField",
          alias: null,
          name: "name",
          args: null,
          storageKey: null,
        },
      ],
    },
    {
      kind: "ScalarField",
      alias: null,
      name: "status",
      args: null,
      storageKey: null,
    },
    {
      kind: "ScalarField",
      alias: null,
      name: "conclusion",
      args: null,
      storageKey: null,
    },
  ],
};
// prettier-ignore
(node).hash = 'ab1475671a1bc4196d67bfa75ad41446';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
