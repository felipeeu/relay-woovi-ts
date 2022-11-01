/**
 * @generated SignedSource<<03917f248efab3381b6e7a70175a842e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type InventionsQuery$variables = {};
export type InventionsQuery$data = {
  readonly inventions: ReadonlyArray<{
    readonly name: string | null;
    readonly notes: string | null;
    readonly year: string | null;
  } | null> | null;
};
export type InventionsQuery = {
  response: InventionsQuery$data;
  variables: InventionsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "notes",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "year",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "InventionsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Invention",
        "kind": "LinkedField",
        "name": "inventions",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "InventionsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Invention",
        "kind": "LinkedField",
        "name": "inventions",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "87c29a4bbf0560bd6d40e22dba0f26b3",
    "id": null,
    "metadata": {},
    "name": "InventionsQuery",
    "operationKind": "query",
    "text": "query InventionsQuery {\n  inventions {\n    name\n    notes\n    year\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "f39bb788b92560dd2d0c06c8d7f542c0";

export default node;
