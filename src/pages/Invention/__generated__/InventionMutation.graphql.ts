/**
 * @generated SignedSource<<6d8ad069c54b82e440b738efe2c297a0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type InventionMutation$variables = {
  image_url?: string | null;
  name?: string | null;
  notes?: string | null;
  year?: string | null;
};
export type InventionMutation$data = {
  readonly addInvention: {
    readonly image_url: string | null;
    readonly name: string | null;
    readonly notes: string | null;
    readonly year: string | null;
  } | null;
};
export type InventionMutation = {
  response: InventionMutation$data;
  variables: InventionMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "image_url"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "notes"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "year"
},
v4 = [
  {
    "kind": "Variable",
    "name": "image_url",
    "variableName": "image_url"
  },
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "name"
  },
  {
    "kind": "Variable",
    "name": "notes",
    "variableName": "notes"
  },
  {
    "kind": "Variable",
    "name": "year",
    "variableName": "year"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "notes",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "year",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "image_url",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "InventionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "Invention",
        "kind": "LinkedField",
        "name": "addInvention",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "InventionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "Invention",
        "kind": "LinkedField",
        "name": "addInvention",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
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
    "cacheID": "7cb12ada7c71e1617e9935751793356a",
    "id": null,
    "metadata": {},
    "name": "InventionMutation",
    "operationKind": "mutation",
    "text": "mutation InventionMutation(\n  $name: String\n  $notes: String\n  $year: String\n  $image_url: String\n) {\n  addInvention(name: $name, notes: $notes, year: $year, image_url: $image_url) {\n    name\n    notes\n    year\n    image_url\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "9d9a0d57dc43c8754cfd5ab86428c28a";

export default node;
