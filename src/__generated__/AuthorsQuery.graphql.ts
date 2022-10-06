/**
 * @generated SignedSource<<7ef78c6fafe708ca024b07f438091879>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AuthorsQuery$variables = {};
export type AuthorsQuery$data = {
  readonly authors: ReadonlyArray<{
    readonly birthRegion: string | null;
    readonly birthYear: string | null;
    readonly firstName: string | null;
    readonly id: string | null;
    readonly lastName: string | null;
  } | null> | null;
};
export type AuthorsQuery = {
  response: AuthorsQuery$data;
  variables: AuthorsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Author",
    "kind": "LinkedField",
    "name": "authors",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "firstName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "lastName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "birthRegion",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "birthYear",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AuthorsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AuthorsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "1eb96184446db9e4fe711dfe8db8ce71",
    "id": null,
    "metadata": {},
    "name": "AuthorsQuery",
    "operationKind": "query",
    "text": "query AuthorsQuery {\n  authors {\n    id\n    firstName\n    lastName\n    birthRegion\n    birthYear\n  }\n}\n"
  }
};
})();

(node as any).hash = "b59ca4077305bbeafc4d207c2729abb5";

export default node;
