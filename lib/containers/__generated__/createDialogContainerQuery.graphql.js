"use strict";

/*
query createDialogContainerQuery(
  $organizationCount: Int!
  $organizationCursor: String
) {
  viewer {
    ...createDialogController_user_12CDS5
    id
  }
}

fragment createDialogController_user_12CDS5 on User {
  id
  ...repositoryHomeSelectionView_user_12CDS5
}

fragment repositoryHomeSelectionView_user_12CDS5 on User {
  id
  login
  avatarUrl(size: 24)
  organizations(first: $organizationCount, after: $organizationCursor) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      cursor
      node {
        id
        login
        avatarUrl(size: 24)
        viewerCanCreateRepositories
        __typename
      }
    }
  }
}
*/

const node = (function () {
  var v0 = [
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
    v1 = {
      kind: "ScalarField",
      alias: null,
      name: "id",
      args: null,
      storageKey: null,
    },
    v2 = {
      kind: "ScalarField",
      alias: null,
      name: "login",
      args: null,
      storageKey: null,
    },
    v3 = {
      kind: "ScalarField",
      alias: null,
      name: "avatarUrl",
      args: [
        {
          kind: "Literal",
          name: "size",
          value: 24,
        },
      ],
      storageKey: "avatarUrl(size:24)",
    },
    v4 = [
      {
        kind: "Variable",
        name: "after",
        variableName: "organizationCursor",
      },
      {
        kind: "Variable",
        name: "first",
        variableName: "organizationCount",
      },
    ];
  return {
    kind: "Request",
    fragment: {
      kind: "Fragment",
      name: "createDialogContainerQuery",
      type: "Query",
      metadata: null,
      argumentDefinitions: v0,
      selections: [
        {
          kind: "LinkedField",
          alias: null,
          name: "viewer",
          storageKey: null,
          args: null,
          concreteType: "User",
          plural: false,
          selections: [
            {
              kind: "FragmentSpread",
              name: "createDialogController_user",
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
        },
      ],
    },
    operation: {
      kind: "Operation",
      name: "createDialogContainerQuery",
      argumentDefinitions: v0,
      selections: [
        {
          kind: "LinkedField",
          alias: null,
          name: "viewer",
          storageKey: null,
          args: null,
          concreteType: "User",
          plural: false,
          selections: [
            v1,
            v2,
            v3,
            {
              kind: "LinkedField",
              alias: null,
              name: "organizations",
              storageKey: null,
              args: v4,
              concreteType: "OrganizationConnection",
              plural: false,
              selections: [
                {
                  kind: "LinkedField",
                  alias: null,
                  name: "pageInfo",
                  storageKey: null,
                  args: null,
                  concreteType: "PageInfo",
                  plural: false,
                  selections: [
                    {
                      kind: "ScalarField",
                      alias: null,
                      name: "hasNextPage",
                      args: null,
                      storageKey: null,
                    },
                    {
                      kind: "ScalarField",
                      alias: null,
                      name: "endCursor",
                      args: null,
                      storageKey: null,
                    },
                  ],
                },
                {
                  kind: "LinkedField",
                  alias: null,
                  name: "edges",
                  storageKey: null,
                  args: null,
                  concreteType: "OrganizationEdge",
                  plural: true,
                  selections: [
                    {
                      kind: "ScalarField",
                      alias: null,
                      name: "cursor",
                      args: null,
                      storageKey: null,
                    },
                    {
                      kind: "LinkedField",
                      alias: null,
                      name: "node",
                      storageKey: null,
                      args: null,
                      concreteType: "Organization",
                      plural: false,
                      selections: [
                        v1,
                        v2,
                        v3,
                        {
                          kind: "ScalarField",
                          alias: null,
                          name: "viewerCanCreateRepositories",
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
                      ],
                    },
                  ],
                },
              ],
            },
            {
              kind: "LinkedHandle",
              alias: null,
              name: "organizations",
              args: v4,
              handle: "connection",
              key: "RepositoryHomeSelectionView_organizations",
              filters: null,
            },
          ],
        },
      ],
    },
    params: {
      operationKind: "query",
      name: "createDialogContainerQuery",
      id: null,
      text: "query createDialogContainerQuery(\n  $organizationCount: Int!\n  $organizationCursor: String\n) {\n  viewer {\n    ...createDialogController_user_12CDS5\n    id\n  }\n}\n\nfragment createDialogController_user_12CDS5 on User {\n  id\n  ...repositoryHomeSelectionView_user_12CDS5\n}\n\nfragment repositoryHomeSelectionView_user_12CDS5 on User {\n  id\n  login\n  avatarUrl(size: 24)\n  organizations(first: $organizationCount, after: $organizationCursor) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      cursor\n      node {\n        id\n        login\n        avatarUrl(size: 24)\n        viewerCanCreateRepositories\n        __typename\n      }\n    }\n  }\n}\n",
      metadata: {},
    },
  };
})();
// prettier-ignore
(node).hash = '862b8ec3127c9a52e9a54020afa47792';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
