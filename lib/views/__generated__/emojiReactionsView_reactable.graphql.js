"use strict";

const node = {
  kind: "Fragment",
  name: "emojiReactionsView_reactable",
  type: "Reactable",
  metadata: null,
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
      kind: "LinkedField",
      alias: null,
      name: "reactionGroups",
      storageKey: null,
      args: null,
      concreteType: "ReactionGroup",
      plural: true,
      selections: [
        {
          kind: "ScalarField",
          alias: null,
          name: "content",
          args: null,
          storageKey: null,
        },
        {
          kind: "ScalarField",
          alias: null,
          name: "viewerHasReacted",
          args: null,
          storageKey: null,
        },
        {
          kind: "LinkedField",
          alias: null,
          name: "users",
          storageKey: null,
          args: null,
          concreteType: "ReactingUserConnection",
          plural: false,
          selections: [
            {
              kind: "ScalarField",
              alias: null,
              name: "totalCount",
              args: null,
              storageKey: null,
            },
          ],
        },
      ],
    },
    {
      kind: "ScalarField",
      alias: null,
      name: "viewerCanReact",
      args: null,
      storageKey: null,
    },
  ],
};
// prettier-ignore
(node).hash = 'fde156007f42d841401632fce79875d5';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
