"use strict";

export default class JudgementAssignment {
  constructor(judgement) {
    this.judgement = judgement;
  }

  getJudgement() {
    return this.judgement;
  }

  assign(localContext) {
    const judgementAdded = localContext.addJudgement(this.judgement),
          judgementNode = this.judgement.getNode(),
          judgementString = localContext.nodeAsString(judgementNode),
          judgementAssigned = judgementAdded; ///

    judgementAssigned ?
      localContext.trace(`Assigned the '${judgementString}' judgement.`, judgementNode) :
        localContext.debug(`Unable to assign the '${judgementString}' judgement.`, judgementNode);

    return judgementAssigned;
  }

  static fromJudgement(judgement) {
    const judgementAssignment = new JudgementAssignment(judgement);

    return judgementAssignment;
  }
}
