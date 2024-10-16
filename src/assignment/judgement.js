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
          judgementString = this.judgement.getString(),
          judgementAssigned = judgementAdded; ///

    judgementAssigned ?
      localContext.trace(`Assigned the '${judgementString}' judgement.`) :
        localContext.debug(`Unable to assign the '${judgementString}' judgement.`);

    return judgementAssigned;
  }

  static fromJudgement(judgement) {
    const judgementAssignment = new JudgementAssignment(judgement);

    return judgementAssignment;
  }
}
