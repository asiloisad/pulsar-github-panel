"use strict";

/*
mutation unresolveReviewThreadMutation(
  $input: UnresolveReviewThreadInput!
) {
  unresolveReviewThread(input: $input) {
    thread {
      id
      isResolved
      viewerCanResolve
      viewerCanUnresolve
      resolvedBy {
        id
        login
      }
    }
  }
}
*/

const node = (function () {
  var v0 = [
      {
        kind: "LocalArgument",
        name: "input",
        type: "UnresolveReviewThreadInput!",
        defaultValue: null,
      },
    ],
    v1 = {
      kind: "ScalarField",
      alias: null,
      name: "id",
      args: null,
      storageKey: null,
    },
    v2 = [
      {
        kind: "LinkedField",
        alias: null,
        name: "unresolveReviewThread",
        storageKey: null,
        args: [
          {
            kind: "Variable",
            name: "input",
            variableName: "input",
          },
        ],
        concreteType: "UnresolveReviewThreadPayload",
        plural: false,
        selections: [
          {
            kind: "LinkedField",
            alias: null,
            name: "thread",
            storageKey: null,
            args: null,
            concreteType: "PullRequestReviewThread",
            plural: false,
            selections: [
              v1,
              {
                kind: "ScalarField",
                alias: null,
                name: "isResolved",
                args: null,
                storageKey: null,
              },
              {
                kind: "ScalarField",
                alias: null,
                name: "viewerCanResolve",
                args: null,
                storageKey: null,
              },
              {
                kind: "ScalarField",
                alias: null,
                name: "viewerCanUnresolve",
                args: null,
                storageKey: null,
              },
              {
                kind: "LinkedField",
                alias: null,
                name: "resolvedBy",
                storageKey: null,
                args: null,
                concreteType: "User",
                plural: false,
                selections: [
                  v1,
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
      },
    ];
  return {
    kind: "Request",
    fragment: {
      kind: "Fragment",
      name: "unresolveReviewThreadMutation",
      type: "Mutation",
      metadata: null,
      argumentDefinitions: v0,
      selections: v2,
    },
    operation: {
      kind: "Operation",
      name: "unresolveReviewThreadMutation",
      argumentDefinitions: v0,
      selections: v2,
    },
    params: {
      operationKind: "mutation",
      name: "unresolveReviewThreadMutation",
      id: null,
      text: "mutation unresolveReviewThreadMutation(\n  $input: UnresolveReviewThreadInput!\n) {\n  unresolveReviewThread(input: $input) {\n    thread {\n      id\n      isResolved\n      viewerCanResolve\n      viewerCanUnresolve\n      resolvedBy {\n        id\n        login\n      }\n    }\n  }\n}\n",
      metadata: {},
    },
  };
})();
// prettier-ignore
(node).hash = '8b1105e1a3db0455c522c7e5dc69b436';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
