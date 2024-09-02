"use strict";

export default class FrameAssertionAssignment {
  constructor(frameAssertion) {
    this.frameAssertion = frameAssertion;
  }

  getFrameAssertion() {
    return this.frameAssertion;
  }

  assign(localContext) {
    const frameAssertionAdded = localContext.addFrameAssertion(this.frameAssertion),
          frameAssertionNode = this.frameAssertion.getNode(),
          frameAssertionString = localContext.nodeAsString(frameAssertionNode),
          frameAssertionAssigned = frameAssertionAdded; ///

    frameAssertionAssigned ?
      localContext.trace(`Assigned the '${frameAssertionString}' frame assertion.`, frameAssertionNode) :
        localContext.debug(`Unable to assign the '${frameAssertionString}' frame assertion.`, frameAssertionNode);

    return frameAssertionAssigned;
  }

  static fromFrameAssertion(frameAssertion) {
    const frameAssertionAssignment = new FrameAssertionAssignment(frameAssertion);

    return frameAssertionAssignment;
  }
}
