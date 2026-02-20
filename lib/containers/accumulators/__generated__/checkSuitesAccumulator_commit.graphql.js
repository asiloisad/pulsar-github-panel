"use strict";

const node = (function () {
  var v0 = {
    kind: "ScalarField",
    alias: null,
    name: "id",
    args: null,
    storageKey: null,
  };
  return {
    kind: "Fragment",
    name: "checkSuitesAccumulator_commit",
    type: "Commit",
    metadata: {
      connection: [
        {
          count: "checkSuiteCount",
          cursor: "checkSuiteCursor",
          direction: "forward",
          path: ["checkSuites"],
        },
      ],
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
      v0,
      {
        kind: "LinkedField",
        alias: "checkSuites",
        name: "__CheckSuiteAccumulator_checkSuites_connection",
        storageKey: null,
        args: null,
        concreteType: "CheckSuiteConnection",
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
            concreteType: "CheckSuiteEdge",
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
                concreteType: "CheckSuite",
                plural: false,
                selections: [
                  v0,
                  {
                    kind: "ScalarField",
                    alias: null,
                    name: "status",
                    args: null,
                    storageKey: null,
                  },
                  {
                    kind: "ScalarField",
                    alias: null,
                    name: "conclusion",
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
                  {
                    kind: "FragmentSpread",
                    name: "checkSuiteView_checkSuite",
                    args: null,
                  },
                  {
                    kind: "FragmentSpread",
                    name: "checkRunsAccumulator_checkSuite",
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
(node).hash = '582abc8127f0f2f19fb0a6a531af5e06';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
