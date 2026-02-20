"use strict";

/*
query remoteContainerQuery(
  $owner: String!
  $name: String!
) {
  repository(owner: $owner, name: $name) {
    id
    defaultBranchRef {
      prefix
      name
      id
    }
  }
}
*/

const node = (function () {
  var v0 = [
      {
        kind: "LocalArgument",
        name: "owner",
        type: "String!",
        defaultValue: null,
      },
      {
        kind: "LocalArgument",
        name: "name",
        type: "String!",
        defaultValue: null,
      },
    ],
    v1 = [
      {
        kind: "Variable",
        name: "name",
        variableName: "name",
      },
      {
        kind: "Variable",
        name: "owner",
        variableName: "owner",
      },
    ],
    v2 = {
      kind: "ScalarField",
      alias: null,
      name: "id",
      args: null,
      storageKey: null,
    },
    v3 = {
      kind: "ScalarField",
      alias: null,
      name: "prefix",
      args: null,
      storageKey: null,
    },
    v4 = {
      kind: "ScalarField",
      alias: null,
      name: "name",
      args: null,
      storageKey: null,
    };
  return {
    kind: "Request",
    fragment: {
      kind: "Fragment",
      name: "remoteContainerQuery",
      type: "Query",
      metadata: null,
      argumentDefinitions: v0,
      selections: [
        {
          kind: "LinkedField",
          alias: null,
          name: "repository",
          storageKey: null,
          args: v1,
          concreteType: "Repository",
          plural: false,
          selections: [
            v2,
            {
              kind: "LinkedField",
              alias: null,
              name: "defaultBranchRef",
              storageKey: null,
              args: null,
              concreteType: "Ref",
              plural: false,
              selections: [v3, v4],
            },
          ],
        },
      ],
    },
    operation: {
      kind: "Operation",
      name: "remoteContainerQuery",
      argumentDefinitions: v0,
      selections: [
        {
          kind: "LinkedField",
          alias: null,
          name: "repository",
          storageKey: null,
          args: v1,
          concreteType: "Repository",
          plural: false,
          selections: [
            v2,
            {
              kind: "LinkedField",
              alias: null,
              name: "defaultBranchRef",
              storageKey: null,
              args: null,
              concreteType: "Ref",
              plural: false,
              selections: [v3, v4, v2],
            },
          ],
        },
      ],
    },
    params: {
      operationKind: "query",
      name: "remoteContainerQuery",
      id: null,
      text: "query remoteContainerQuery(\n  $owner: String!\n  $name: String!\n) {\n  repository(owner: $owner, name: $name) {\n    id\n    defaultBranchRef {\n      prefix\n      name\n      id\n    }\n  }\n}\n",
      metadata: {},
    },
  };
})();
// prettier-ignore
(node).hash = 'b83aa6c27c5d7e1c499badf2e6bfab6b';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
