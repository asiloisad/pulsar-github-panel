"use strict";

const node = (function () {
  var v0 = [
    {
      kind: "ScalarField",
      alias: null,
      name: "totalCount",
      args: null,
      storageKey: null,
    },
  ];
  return {
    kind: "Fragment",
    name: "userMentionTooltipContainer_repositoryOwner",
    type: "RepositoryOwner",
    metadata: null,
    argumentDefinitions: [],
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
      {
        kind: "LinkedField",
        alias: null,
        name: "repositories",
        storageKey: null,
        args: null,
        concreteType: "RepositoryConnection",
        plural: false,
        selections: v0,
      },
      {
        kind: "InlineFragment",
        type: "User",
        selections: [
          {
            kind: "ScalarField",
            alias: null,
            name: "company",
            args: null,
            storageKey: null,
          },
        ],
      },
      {
        kind: "InlineFragment",
        type: "Organization",
        selections: [
          {
            kind: "LinkedField",
            alias: null,
            name: "membersWithRole",
            storageKey: null,
            args: null,
            concreteType: "OrganizationMemberConnection",
            plural: false,
            selections: v0,
          },
        ],
      },
    ],
  };
})();
// prettier-ignore
(node).hash = '3ee858460adcfbee1dfc27cf8dc46332';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
