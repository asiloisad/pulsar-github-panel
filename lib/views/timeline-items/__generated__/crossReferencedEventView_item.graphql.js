"use strict";

const node = (function () {
  var v0 = {
      kind: "ScalarField",
      alias: null,
      name: "number",
      args: null,
      storageKey: null,
    },
    v1 = {
      kind: "ScalarField",
      alias: null,
      name: "title",
      args: null,
      storageKey: null,
    },
    v2 = {
      kind: "ScalarField",
      alias: null,
      name: "url",
      args: null,
      storageKey: null,
    };
  return {
    kind: "Fragment",
    name: "crossReferencedEventView_item",
    type: "CrossReferencedEvent",
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
        kind: "ScalarField",
        alias: null,
        name: "isCrossRepository",
        args: null,
        storageKey: null,
      },
      {
        kind: "LinkedField",
        alias: null,
        name: "source",
        storageKey: null,
        args: null,
        concreteType: null,
        plural: false,
        selections: [
          {
            kind: "ScalarField",
            alias: null,
            name: "__typename",
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
                kind: "ScalarField",
                alias: null,
                name: "isPrivate",
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
          {
            kind: "InlineFragment",
            type: "Issue",
            selections: [
              v0,
              v1,
              v2,
              {
                kind: "ScalarField",
                alias: "issueState",
                name: "state",
                args: null,
                storageKey: null,
              },
            ],
          },
          {
            kind: "InlineFragment",
            type: "PullRequest",
            selections: [
              v0,
              v1,
              v2,
              {
                kind: "ScalarField",
                alias: "prState",
                name: "state",
                args: null,
                storageKey: null,
              },
            ],
          },
        ],
      },
    ],
  };
})();
// prettier-ignore
(node).hash = 'b90b8c9f0acee56516e7413263cf7f51';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
