"use strict";

export default class FrameAssertionAssignment {
  constructor(frameAssertion) {
    this.frameAssertion = frameAssertion;
  }

  getFrameAssertion() {
    return this.frameAssertion;
  }

  assign(localMetaContext) {
    const frameAssertionAdded = localMetaContext.addFrameAssertion(this.frameAssertion),
          frameAssertionNode = this.frameAssertion.getNode(),
          frameAssertionString = localMetaContext.nodeAsString(frameAssertionNode),
          frameAssertionAssigned = frameAssertionAdded; ///

    frameAssertionAssigned ?
      localMetaContext.trace(`Assigned the '${frameAssertionString}' frame assertion.`, frameAssertionNode) :
        localMetaContext.debug(`Unable to assign the '${frameAssertionString}' frame assertion.`, frameAssertionNode);

    return frameAssertionAssigned;
  }

  static fromFrameAssertion(frameAssertion) {
    const frameAssertionAssignment = new FrameAssertionAssignment(frameAssertion);

    return frameAssertionAssignment;
  }
}
