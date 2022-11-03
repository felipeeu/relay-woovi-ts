/**
 * @generated SignedSource<<a90fbab2d32c3ed03f790c9079a44d20>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type InventionNameQuery$variables = {
  id: string;
};
export type InventionNameQuery$data = {
  readonly invention: {
    readonly name: string | null;
  } | null;
};
export type InventionNameQuery = {
  response: InventionNameQuery$data;
  variables: InventionNameQuery$variables;
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "InventionNameQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Invention",
        "kind": "LinkedField",
        "name": "invention",
        "plural": false,
        "selections": [
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "InventionNameQuery",
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
    "cacheID": "3f2ababfb65381b059f174d1dc58a5d7",
    "id": null,
    "metadata": {},
    "name": "InventionNameQuery",
    "operationKind": "query",
    "text": "query InventionNameQuery(\n  $id: ID!\n) {\n  invention(id: $id) {\n    name\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "013faf037a3400962076d9abe6b7c21f";

export default node;
