"use strict";

export default class JudgementAssignment {
  constructor(judgement) {
    this.judgement = judgement;
  }

  getJudgement() {
    return this.judgement;
  }

  assign(context) {
    const judgementAdded = context.addJudgement(this.judgement),
          judgementString = this.judgement.getString(),
          judgementAssigned = judgementAdded; ///

    judgementAssigned ?
      context.trace(`Assigned the '${judgementString}' judgement.`) :
        context.debug(`Unable to assign the '${judgementString}' judgement.`);

    return judgementAssigned;
  }

  static fromJudgement(judgement) {
    const judgementAssignment = new JudgementAssignment(judgement);

    return judgementAssignment;
  }
}
