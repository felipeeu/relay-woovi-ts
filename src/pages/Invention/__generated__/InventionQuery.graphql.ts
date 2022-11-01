/**
 * @generated SignedSource<<ab3b3007040ce27775df16b3c5e2340b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type InventionQuery$variables = {
  id: string;
};
export type InventionQuery$data = {
  readonly invention: {
    readonly name: string | null;
    readonly notes: string | null;
    readonly year: string | null;
  } | null;
};
export type InventionQuery = {
  response: InventionQuery$data;
  variables: InventionQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "notes",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "year",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "InventionQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Invention",
        "kind": "LinkedField",
        "name": "invention",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "InventionQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Invention",
        "kind": "LinkedField",
        "name": "invention",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
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
    "cacheID": "719018367d85300fdd8137fbb8657346",
    "id": null,
    "metadata": {},
    "name": "InventionQuery",
    "operationKind": "query",
    "text": "query InventionQuery(\n  $id: ID!\n) {\n  invention(id: $id) {\n    name\n    notes\n    year\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "0a3bb5863dd118a3c0615b925fa210e2";

export default node;
