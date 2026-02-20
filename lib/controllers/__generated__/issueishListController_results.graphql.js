"use strict";

const node = (function () {
  var v0 = {
      kind: "ScalarField",
      alias: null,
      name: "login",
      args: null,
      storageKey: null,
    },
    v1 = {
      kind: "ScalarField",
      alias: null,
      name: "id",
      args: null,
      storageKey: null,
    };
  return {
    kind: "Fragment",
    name: "issueishListController_results",
    type: "PullRequest",
    metadata: {
      plural: true,
    },
    argumentDefinitions: [
      {
        kind: "LocalArgument",
        name: "checkSuiteCount",
        type: "Int!",
        defaultValue: null,
      },
      {
        kind: "LocalArgument",
        name: "checkSuiteCursor",
        type: "String",
        defaultValue: null,
      },
      {
        kind: "LocalArgument",
        name: "checkRunCount",
        type: "Int!",
        defaultValue: null,
      },
      {
        kind: "LocalArgument",
        name: "checkRunCursor",
        type: "String",
        defaultValue: null,
      },
    ],
    selections: [
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
        name: "url",
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
          v0,
          {
            kind: "ScalarField",
            alias: null,
            name: "avatarUrl",
            args: null,
            storageKey: null,
          },
        ],
      },
      {
        kind: "ScalarField",
        alias: null,
        name: "createdAt",
        args: null,
        storageKey: null,
      },
      {
        kind: "ScalarField",
        alias: null,
        name: "headRefName",
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
          v1,
          {
            kind: "ScalarField",
            alias: null,
            name: "name",
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
            selections: [v0],
          },
        ],
      },
      {
        kind: "LinkedField",
        alias: null,
        name: "commits",
        storageKey: "commits(last:1)",
        args: [
          {
            kind: "Literal",
            name: "last",
            value: 1,
          },
        ],
        concreteType: "PullRequestCommitConnection",
        plural: false,
        selections: [
          {
            kind: "LinkedField",
            alias: null,
            name: "nodes",
            storageKey: null,
            args: null,
            concreteType: "PullRequestCommit",
            plural: true,
            selections: [
              {
                kind: "LinkedField",
                alias: null,
                name: "commit",
                storageKey: null,
                args: null,
                concreteType: "Commit",
                plural: false,
                selections: [
                  {
                    kind: "LinkedField",
                    alias: null,
                    name: "status",
                    storageKey: null,
                    args: null,
                    concreteType: "Status",
                    plural: false,
                    selections: [
                      {
                        kind: "LinkedField",
                        alias: null,
                        name: "contexts",
                        storageKey: null,
                        args: null,
                        concreteType: "StatusContext",
                        plural: true,
                        selections: [
                          v1,
                          {
                            kind: "ScalarField",
                            alias: null,
                            name: "state",
                            args: null,
                            storageKey: null,
                          },
                        ],
                      },
                    ],
                  },
                  {
                    kind: "FragmentSpread",
                    name: "checkSuitesAccumulator_commit",
                    args: [
                      {
                        kind: "Variable",
                        name: "checkRunCount",
                        variableName: "checkRunCount",
                      },
                      {
                        kind: "Variable",
                        name: "checkRunCursor",
                        variableName: "checkRunCursor",
                      },
                      {
                        kind: "Variable",
                        name: "checkSuiteCount",
                        variableName: "checkSuiteCount",
                      },
                      {
                        kind: "Variable",
                        name: "checkSuiteCursor",
                        variableName: "checkSuiteCursor",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
})();
// prettier-ignore
(node).hash = 'af31b5400d8cce5026fc1bb3fc42dc91';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
