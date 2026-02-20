"use strict";

const node = (function () {
  var v0 = {
    kind: "ScalarField",
    alias: null,
    name: "url",
    args: null,
    storageKey: null,
  };
  return {
    kind: "Fragment",
    name: "issueDetailView_issue",
    type: "Issue",
    metadata: null,
    argumentDefinitions: [
      {
        kind: "LocalArgument",
        name: "timelineCount",
        type: "Int!",
        defaultValue: null,
      },
      {
        kind: "LocalArgument",
        name: "timelineCursor",
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
        kind: "ScalarField",
        alias: null,
        name: "__typename",
        args: null,
        storageKey: null,
      },
      v0,
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
        kind: "ScalarField",
        alias: null,
        name: "bodyHTML",
        args: null,
        storageKey: null,
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
          {
            kind: "ScalarField",
            alias: null,
            name: "login",
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
          v0,
        ],
      },
      {
        kind: "FragmentSpread",
        name: "issueTimelineController_issue",
        args: [
          {
            kind: "Variable",
            name: "timelineCount",
            variableName: "timelineCount",
          },
          {
            kind: "Variable",
            name: "timelineCursor",
            variableName: "timelineCursor",
          },
        ],
      },
      {
        kind: "FragmentSpread",
        name: "emojiReactionsView_reactable",
        args: null,
      },
    ],
  };
})();
// prettier-ignore
(node).hash = 'f7adc2e75c1d55df78481fd359bf7180';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
