"use strict";

export default class Collection {
  constructor(type, termNodes) {
    this.type = type;
    this.termNodes = termNodes;
  }

  getType() {
    return this.type;
  }

  getTermNodes() {
    return this.termNodes;
  }

  setType(type) {
    this.type = type;
  }

  setTermNodes(termNodes) {
    this.termNodes = termNodes;
  }

  addTermNode(termNode) {
    this.termNodes.push(termNode);
  }

  matchType(type) {
    const typeMatches = (this.type === type);

    return typeMatches;
  }

  matchTermNode(termNode) {
    const termNodeA = termNode, ///
          termNodeMatches = this.termNodes.some((termNode) => {
            const termNodeB = termNode, ///
                  termNodeAMatchesTermNodeB = termNodeA.match(termNodeB);

            if (termNodeAMatchesTermNodeB) {
              return true;
            }
          });

    return termNodeMatches;
  }

  static fromType(type) {
    const termNodes = [],
          collection = new Collection(type, termNodes);

    return collection;
  }

  static fromCollections(collectionA, collectionB) {
    const collectionAType = collectionA.getType(),
          collectionATermNodes = collectionA.getTermNodes(),
          collectionBTermNodes = collectionB.getTermNodes(),
          type = collectionAType, ///
          termNodes = [
            ...collectionATermNodes,
            ...collectionBTermNodes
          ],
          collection = new Collection(type, termNodes);

    return collection;
  }
}
