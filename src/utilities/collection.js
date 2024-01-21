"use strict";

import { compress } from "../utilities/array";

export function areTermNodesEqual(leftTermNode, rightTermNode, collections) {
  let termNodesEqual;

  const leftTermNodeMatchesRightTermNode = leftTermNode.match(rightTermNode);

  if (leftTermNodeMatchesRightTermNode) {
    termNodesEqual = true;
  } else {
    const termNodes = [
            leftTermNode,
            rightTermNode
          ],
          collection = findCollectionByTermNodes(collections, termNodes);

    termNodesEqual = (collection !== null);
  }

  return termNodesEqual;
}

export function mergeCollections(collectionsA, collectionsB, localContext) {
  const typesA = typesFromCollections(collectionsA, localContext),
        typesB = typesFromCollections(collectionsB, localContext),
        types = [
          ...typesA,
          ...typesB
        ];

  compress(types, (typeA, typeB) => {
    if (typeA === typeB) {
      return true;
    }
  });

  const collections = types.map((type) => {
    let collection;

    const collectionA = findCollectionByType(collectionsA, type, localContext),
          collectionB = findCollectionByType(collectionsB, type, localContext);

    if ((collectionA !== null) && (collectionB !== null)) {
      collection = Collection.fromCollections(collectionA, collectionB);
    } else if (collectionA !== null) {
      collection = collectionA; ///
    } else if (collectionB !== null) {
      collection = collectionB; ///
    }

    return collection;
  });

  return collections;
}

export function findCollectionByType(collections, type, localContext) {
  const collection = collections.find((collection) => {
    const collectionMatchesType = collection.matchType(type, localContext);

    if (collectionMatchesType) {
      return true;
    }
  }) || null;

  return collection;
}

export function findCollectionByTerm(collections, term) {
  const collection = collections.find((collection) => {
    const collectionMatchesTerm = collection.matchTerm(term);

    if (collectionMatchesTerm) {
      return true;
    }
  }) || null;

  return collection;
}

function findCollectionByTermNodes(collections, termNodes) {
  const collection = collections.find((collection) => {
    const collectionMatchesTerms = collection.matchTermNodes(termNodes);

    if (collectionMatchesTerms) {
      return true;
    }
  }) || null;

  return collection;
}

function typesFromCollections(collections, localContext) {
  const types = collections.map((collection) => {
    const type = collection.getType(localContext);

    return type;
  });

  return types;
}
