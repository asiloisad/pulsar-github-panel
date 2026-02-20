"use strict";

/*
mutation createRepositoryMutation(
  $input: CreateRepositoryInput!
) {
  createRepository(input: $input) {
    repository {
      sshUrl
      url
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
        type: "CreateRepositoryInput!",
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
      kind: "ScalarField",
      alias: null,
      name: "sshUrl",
      args: null,
      storageKey: null,
    },
    v3 = {
      kind: "ScalarField",
      alias: null,
      name: "url",
      args: null,
      storageKey: null,
    };
  return {
    kind: "Request",
    fragment: {
      kind: "Fragment",
      name: "createRepositoryMutation",
      type: "Mutation",
      metadata: null,
      argumentDefinitions: v0,
      selections: [
        {
          kind: "LinkedField",
          alias: null,
          name: "createRepository",
          storageKey: null,
          args: v1,
          concreteType: "CreateRepositoryPayload",
          plural: false,
          selections: [
            {
              kind: "LinkedField",
              alias: null,
              name: "repository",
              storageKey: null,
              args: null,
              concreteType: "Repository",
              plural: false,
              selections: [v2, v3],
            },
          ],
        },
      ],
    },
    operation: {
      kind: "Operation",
      name: "createRepositoryMutation",
      argumentDefinitions: v0,
      selections: [
        {
          kind: "LinkedField",
          alias: null,
          name: "createRepository",
          storageKey: null,
          args: v1,
          concreteType: "CreateRepositoryPayload",
          plural: false,
          selections: [
            {
              kind: "LinkedField",
              alias: null,
              name: "repository",
              storageKey: null,
              args: null,
              concreteType: "Repository",
              plural: false,
              selections: [
                v2,
                v3,
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
      name: "createRepositoryMutation",
      id: null,
      text: "mutation createRepositoryMutation(\n  $input: CreateRepositoryInput!\n) {\n  createRepository(input: $input) {\n    repository {\n      sshUrl\n      url\n      id\n    }\n  }\n}\n",
      metadata: {},
    },
  };
})();
// prettier-ignore
(node).hash = 'e8f154d9f35411a15f77583bb44f7ed5';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
