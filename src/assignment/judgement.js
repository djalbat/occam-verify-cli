"use strict";

export default class JudgementAssignment {
  constructor(judgement) {
    this.judgement = judgement;
  }

  getJudgement() {
    return this.judgement;
  }

  assign(localMetaContext) {
    const judgementAdded = localMetaContext.addJudgement(this.judgement),
          judgementNode = this.judgement.getNode(),
          judgementString = localMetaContext.nodeAsString(judgementNode),
          judgementAssigned = judgementAdded; ///

    judgementAssigned ?
      localMetaContext.trace(`Assigned the '${judgementString}' judgement.`, judgementNode) :
        localMetaContext.debug(`Unable to assign the '${judgementString}' judgement.`, judgementNode);

    return judgementAssigned;
  }

  static fromJudgement(judgement) {
    const judgementAssignment = new JudgementAssignment(judgement);

    return judgementAssignment;
  }
}
