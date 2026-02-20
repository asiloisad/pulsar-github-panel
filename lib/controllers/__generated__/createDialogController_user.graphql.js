"use strict";

const node = {
  kind: "Fragment",
  name: "createDialogController_user",
  type: "User",
  metadata: null,
  argumentDefinitions: [
    {
      kind: "LocalArgument",
      name: "organizationCount",
      type: "Int!",
      defaultValue: null,
    },
    {
      kind: "LocalArgument",
      name: "organizationCursor",
      type: "String",
      defaultValue: null,
    },
  ],
  selections: [
    {
      kind: "ScalarField",
      alias: null,
      name: "id",
      args: null,
      storageKey: null,
    },
    {
      kind: "FragmentSpread",
      name: "repositoryHomeSelectionView_user",
      args: [
        {
          kind: "Variable",
          name: "organizationCount",
          variableName: "organizationCount",
        },
        {
          kind: "Variable",
          name: "organizationCursor",
          variableName: "organizationCursor",
        },
      ],
    },
  ],
};
// prettier-ignore
(node).hash = '729f5d41fc5444c5f12632127f89ed21';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
