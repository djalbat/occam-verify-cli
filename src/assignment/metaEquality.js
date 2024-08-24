"use strict";

export default class MetaEqualityAssignment {
  constructor(metaEquality) {
    this.metaEquality = metaEquality;
  }

  getMetaEquality() {
    return this.metaEquality;
  }

  assign(localMetaContext) {
    const metaEqualityAdded = localMetaContext.addMetaEquality(this.metaEquality),
          metaEqualityNode = this.metaEquality.getNode(),
          metaEqualityString = localMetaContext.nodeAsString(metaEqualityNode),
          metaEqualityAssigned = metaEqualityAdded; ///

    metaEqualityAssigned ?
      localMetaContext.trace(`Assigned the '${metaEqualityString}' meta-equality.`, metaEqualityNode) :
        localMetaContext.debug(`Unable to assign the '${metaEqualityString}' meta-equality.`, metaEqualityNode);

    return metaEqualityAssigned;
  }

  static fromMetaEquality(metaEquality) {
    const metaEqualityAssignment = new MetaEqualityAssignment(metaEquality);

    return metaEqualityAssignment;
  }
}
