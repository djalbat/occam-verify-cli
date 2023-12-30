"use strict";

import { compress } from "../utilities/array";

export function mergeCollections(collectionsA, collectionsB) {
  const typesA = typesFromCollections(collectionsA),
        typesB = typesFromCollections(collectionsB),
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

    const collectionA = findCollectionByType(collectionsA, type),
          collectionB = findCollectionByType(collectionsB, type);

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

export function findCollectionByType(collections, type) {
  const collection = collections.find((collection) => {
    const collectionMatchesType = collection.matchType(type);

    if (collectionMatchesType) {
      return true;
    }
  }) || null;

  return collection;
}

export function findCollectionByTermNode(collections, termNode) {
  const collection = collections.find((collection) => {
    const collectionMatchesTermNode = collection.matchTermNode(termNode);

    if (collectionMatchesTermNode) {
      return true;
    }
  }) || null;

  return collection;
}

function typesFromCollections(collections) {
  const types = collections.map((collection) => {
    const type = collection.getType();

    return type;
  });

  return types;
}
