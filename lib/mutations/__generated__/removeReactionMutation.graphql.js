"use strict";

/*
mutation removeReactionMutation(
  $input: RemoveReactionInput!
) {
  removeReaction(input: $input) {
    subject {
      __typename
      reactionGroups {
        content
        viewerHasReacted
        users {
          totalCount
        }
      }
      id
    }
  }
}
*/

const node = (function () {
  var v0 = [
      {
        kind: "LocalArgument",
        name: "input",
        type: "RemoveReactionInput!",
        defaultValue: null,
      },
    ],
    v1 = [
      {
        kind: "Variable",
        name: "input",
        variableName: "input",
      },
    ],
    v2 = {
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
    };
  return {
    kind: "Request",
    fragment: {
      kind: "Fragment",
      name: "removeReactionMutation",
      type: "Mutation",
      metadata: null,
      argumentDefinitions: v0,
      selections: [
        {
          kind: "LinkedField",
          alias: null,
          name: "removeReaction",
          storageKey: null,
          args: v1,
          concreteType: "RemoveReactionPayload",
          plural: false,
          selections: [
            {
              kind: "LinkedField",
              alias: null,
              name: "subject",
              storageKey: null,
              args: null,
              concreteType: null,
              plural: false,
              selections: [v2],
            },
          ],
        },
      ],
    },
    operation: {
      kind: "Operation",
      name: "removeReactionMutation",
      argumentDefinitions: v0,
      selections: [
        {
          kind: "LinkedField",
          alias: null,
          name: "removeReaction",
          storageKey: null,
          args: v1,
          concreteType: "RemoveReactionPayload",
          plural: false,
          selections: [
            {
              kind: "LinkedField",
              alias: null,
              name: "subject",
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
                v2,
                {
                  kind: "ScalarField",
                  alias: null,
                  name: "id",
                  args: null,
                  storageKey: null,
                },
              ],
            },
          ],
        },
      ],
    },
    params: {
      operationKind: "mutation",
      name: "removeReactionMutation",
      id: null,
      text: "mutation removeReactionMutation(\n  $input: RemoveReactionInput!\n) {\n  removeReaction(input: $input) {\n    subject {\n      __typename\n      reactionGroups {\n        content\n        viewerHasReacted\n        users {\n          totalCount\n        }\n      }\n      id\n    }\n  }\n}\n",
      metadata: {},
    },
  };
})();
// prettier-ignore
(node).hash = 'f20b76a0ff63579992f4631894495523';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
