"use strict";

/*
mutation addReactionMutation(
  $input: AddReactionInput!
) {
  addReaction(input: $input) {
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
        type: "AddReactionInput!",
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
      name: "addReactionMutation",
      type: "Mutation",
      metadata: null,
      argumentDefinitions: v0,
      selections: [
        {
          kind: "LinkedField",
          alias: null,
          name: "addReaction",
          storageKey: null,
          args: v1,
          concreteType: "AddReactionPayload",
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
      name: "addReactionMutation",
      argumentDefinitions: v0,
      selections: [
        {
          kind: "LinkedField",
          alias: null,
          name: "addReaction",
          storageKey: null,
          args: v1,
          concreteType: "AddReactionPayload",
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
      name: "addReactionMutation",
      id: null,
      text: "mutation addReactionMutation(\n  $input: AddReactionInput!\n) {\n  addReaction(input: $input) {\n    subject {\n      __typename\n      reactionGroups {\n        content\n        viewerHasReacted\n        users {\n          totalCount\n        }\n      }\n      id\n    }\n  }\n}\n",
      metadata: {},
    },
  };
})();
// prettier-ignore
(node).hash = 'fc238aed25f2d7e854162002cb00b57f';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
