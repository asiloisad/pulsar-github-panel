"use strict";

const node = (function () {
  var v0 = {
      kind: "ScalarField",
      alias: null,
      name: "id",
      args: null,
      storageKey: null,
    },
    v1 = {
      kind: "ScalarField",
      alias: null,
      name: "state",
      args: null,
      storageKey: null,
    };
  return {
    kind: "Fragment",
    name: "prStatusesView_pullRequest",
    type: "PullRequest",
    metadata: null,
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
      v0,
      {
        kind: "LinkedField",
        alias: "recentCommits",
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
            name: "edges",
            storageKey: null,
            args: null,
            concreteType: "PullRequestCommitEdge",
            plural: true,
            selections: [
              {
                kind: "LinkedField",
                alias: null,
                name: "node",
                storageKey: null,
                args: null,
                concreteType: "PullRequestCommit",
                plural: false,
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
                          v1,
                          {
                            kind: "LinkedField",
                            alias: null,
                            name: "contexts",
                            storageKey: null,
                            args: null,
                            concreteType: "StatusContext",
                            plural: true,
                            selections: [
                              v0,
                              v1,
                              {
                                kind: "FragmentSpread",
                                name: "prStatusContextView_context",
                                args: null,
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
      },
    ],
  };
})();
// prettier-ignore
(node).hash = 'e21e2ef5e505a4a8e895bf13cb4202ab';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
