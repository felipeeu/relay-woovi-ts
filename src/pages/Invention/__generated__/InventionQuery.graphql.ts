/**
 * @generated SignedSource<<346e12dc1c2b396d946fbc8f7222bb4d>>
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
    readonly image_url: string | null;
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
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "image_url",
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
          (v4/*: any*/),
          (v5/*: any*/)
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
          (v5/*: any*/),
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
    "cacheID": "44996e22fe143bd6aaf3532e245ee9fa",
    "id": null,
    "metadata": {},
    "name": "InventionQuery",
    "operationKind": "query",
    "text": "query InventionQuery(\n  $id: ID!\n) {\n  invention(id: $id) {\n    name\n    notes\n    year\n    image_url\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "3338f610967a1624afca3fd6b88c3896";

export default node;
