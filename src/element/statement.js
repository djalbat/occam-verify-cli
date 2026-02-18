"use strict";

import { Element } from "occam-languages";
import { arrayUtilities } from "necessary";

import { define } from "../elements";
import { unifyStatement } from "../process/unify";
import { validateStatements } from "../utilities/validation";
import { STATEMENT_META_TYPE_NAME } from "../metaTypeNames";

const { match, backwardsSome } = arrayUtilities;

export default define(class Statement extends Element {
  getStatementNode() {
    const node = this.getNode(),
          statementNode = node; ///

    return statementNode;
  }

  getMetavariableName() {
    const sttaementNode = this.getStatementNode(),
          metavariableName = sttaementNode.getMetavariableName();

    return metavariableName;
  }

  isSingular() {
    const statementNode = this.getStatementNode(),
          singular = statementNode.isSingular();

    return singular;
  }

  matchStatementNode(statementNode) {
    const statementNodeA = statementNode; ///

    statementNode = this.getStatementNode();

    const statementNodeB = statementNode, ///
          statementNodeAAMatchesStatementBNodeB = statementNodeA.match(statementNodeB),
          equalTo = statementNodeAAMatchesStatementBNodeB; ///

    return equalTo;
  }

  compareMetavariableName(metavariableName) {
    let metavariableNameMatches = false;

    const singular = this.isSingular();

    if (singular) {
      const metavariableNameA = metavariableName ///

      metavariableName = this.getMetavariableName();

      const metavariableNameB = metavariableName; ///

      metavariableNameMatches = (metavariableNameA === metavariableNameB);
    }

    return metavariableNameMatches;
  }

  isValid(context) {
    const statementNode = this.getStatementNode(),
          statementPresent = context.isStatementPresentByStatementNode(statementNode),
          valid = statementPresent;  ///

    return valid;
  }

  isEqualTo(statement) {
    const statementNode = statement.getNode(),
          statementNodeMatches = this.matchStatementNode(statementNode),
          equalTo = statementNodeMatches;  ///

    return equalTo;
  }

  isTermContained(term, context) {
    let termContained;

    const termString = term.getString(),
          statementString = this.getString();  ///

    context.trace(`Is the '${termString}' term contained in the '${statementString}' statement...`);

    const statementNode = this.getStatementNode(),
          statementNodeTermNodes = statementNode.getTermNodes();

    termContained = statementNodeTermNodes.some((statementNodeTermNode) => {  ///
      const statementNodeTermNodeMatches = term.matchTermNode(statementNodeTermNode);

      if (statementNodeTermNodeMatches) {
        return true;
      }
    });

    if (termContained) {
      context.debug(`...the '${termString}' term is contained in the '${statementString}' statement.`);
    }

    return termContained;
  }

  isFrameContained(frame, context) {
    let frameContained;

    const frameString = frame.getString(),
          statementString = this.getString();  ///

    context.trace(`Is the '${frameString}' frame contained in the '${statementString}' statement...`);

    const statementNode = this.getStatementNode(),
          statementNodeFrameNodes = statementNode.getFrameNodes();

    frameContained = statementNodeFrameNodes.some((statementNodeFrameNode) => {  ///
      const statementNodeFrameNodeMatches = frame.matchNode(statementNodeFrameNode);

      if (statementNodeFrameNodeMatches) {
        return true;
      }
    });

    if (frameContained) {
      context.debug(`...the '${frameString}' frame is contained in the '${statementString}' statement.`);
    }

    return frameContained;
  }

  compareMetavariable(metavariable) {
    let metavaraibleComparseTo;

    const singular = this.isSingular();

    if (singular) {
      let metavariableName;

      const statementNode = this.getStatementNode(),
            singularMetavariableNode = statementNode.getSingularMetavariableNode();

      metavariableName = singularMetavariableNode.getMetavariableName();

      const metavariableNameA = metavariableName ///

      metavariableName = metavariable.getName();

      const metavariableNameB = metavariableName; ///

      metavaraibleComparseTo = (metavariableNameA === metavariableNameB);
    }

    return metavaraibleComparseTo;
  }

  compareParameter(parameter) {
    let comparesToParamter = false;

    const singular = this.isSingular();

    if (singular) {
      const parameterName = parameter.getName();

      if (parameterName !== null) {
        const metavariableName = this.getMetavariableName();

        if (parameterName === metavariableName) {
          comparesToParamter = true;
        }
      }
    }

    return comparesToParamter;
  }

  validate(assignments, stated, context) {
    let validates;

    const statementString = this.getString();  ///

    context.trace(`Validating the '${statementString}' statement...`);

    const valid = this.isValid(context);

    if (valid) {
      validates = true;

      context.debug(`...the '${statementString}' statement is alrady valid.`);
    } else {
      validates = validateStatements.some((validateStatement) => {
        const statement = this, ///
              statementValidates = validateStatement(statement, assignments, stated, context);

        if (statementValidates) {
          return true;
        }
      });

      if (validates) {
        const statement = this; ///

        context.addStatement(statement);

        context.debug(`...validated the '${statementString}' statement.`);
      }
    }

    return validates;
  }

  validateGivenMetaType(metaType, assignments, stated, context) {
    let validatesGivenMetaType = false;

    const metaTypeString = metaType.getString(),
          statementString = this.getString();  ///

    context.trace(`Validating the '${statementString}' statement given the '${metaTypeString}' meta-type...`);

    const metaTypeName = metaType.getName();

    if (metaTypeName === STATEMENT_META_TYPE_NAME) {
      const validates = this.validate(assignments, stated, context)

      validatesGivenMetaType = validates; ///
    }

    if (validatesGivenMetaType) {
      context.debug(`...validated the '${statementString}' statement given the '${metaTypeString}' meta-type.`);
    }

    return validatesGivenMetaType;
  }

  unifySubproof(subproof, generalContext, specificContext) {
    let subproofUnifies = false;

    const statementNode = this.getStatementNode(),
          subproofAssertionNode = statementNode.getSubproofAssertionNode(),
          assertionNode = subproofAssertionNode;  ///

    if (assertionNode !== null) {
      const context = generalContext, ///
            assertion = context.findAssertionByAssertionNode(assertionNode),
            subproofAssertion = assertion;  ///

      const subproofString = subproof.getString(),
            subproofAssertionString = subproofAssertion.getString();

      context.trace(`Unifying the '${subproofString}' subproof with the '${subproofAssertionString}' subproof assertion...`);

      const subproofStatements = subproof.getStatements(),
            subproofAssertionStatements = subproofAssertion.getStatements();

      subproofUnifies = match(subproofAssertionStatements, subproofStatements, (subproofAssertionStatement, subproofStatement) => {
        const generalStatement = subproofAssertionStatement,  ///
              specificStatement = subproofStatement,  ///
              statementUnifies = unifyStatement(generalStatement, specificStatement, generalContext, specificContext);

        if (statementUnifies) {
          return true;
        }
      });

      if (subproofUnifies) {
        context.debug(`...unified the '${subproofString}' subproof with the '${subproofAssertionString}' subproof assertion.`);
      }
    }

    return subproofUnifies;
  }

  unifyStatement(statement, generalContext, specificContext) {
    let statementUnifies;

    const context = specificContext,  ///
          generalStatement = this,  ///
          specificStatement = statement, ///
          generalStatementString = generalStatement.getString(),
          specificStatementString = specificStatement.getString();

    context.trace(`Unifying the '${specificStatementString}' statement with the '${generalStatementString}' statement...`);

    statementUnifies = unifyStatement(generalStatement, specificStatement, generalContext, specificContext);

    if (statementUnifies) {
      context.debug(`...unified the '${specificStatementString}' statement with the '${generalStatementString}' statement.`);
    }

    return statementUnifies;
  }

  unifyIndependently(generalContext, specificContext) {
    let unifiesIndependently = false;

    const context = specificContext,  ///
          statementString = this.getString();  ///

    context.trace(`Unifying the '${statementString}' statement independently...`);

    const statementNode = this.getStatementNode(),
          definedAssertionNode = statementNode.getDefinedAssertionNode(),
          containedAssertionNode = statementNode.getContainedAssertionNode();

    if ((definedAssertionNode !== null) || (containedAssertionNode !== null)) {
      const context = generalContext, ///
            assertionNode = (definedAssertionNode || containedAssertionNode),
            assertion = context.findAssertionByAssertionNode(assertionNode),
            assertionUnifiesIndependently = assertion.unifyIndependently(generalContext, specificContext);

      if (assertionUnifiesIndependently) {
        unifiesIndependently = true;
      }
    }

    if (unifiesIndependently) {
      context.debug(`...unified the '${statementString}' statement independently.`);
    }

    return unifiesIndependently;
  }

  compareSubproofOrProofAssertions(subproofOrProofAssertions, context) {
    let comparesToSubproofOrProofAssertions;

    comparesToSubproofOrProofAssertions = backwardsSome(subproofOrProofAssertions, (subproofOrProofAssertion) => {
      const statement = this, ///
            subproofOrProofAssertionComparesToStatement = subproofOrProofAssertion.compareStatement(statement, context);

      if (subproofOrProofAssertionComparesToStatement) {
        return true;
      }
    });

    return comparesToSubproofOrProofAssertions;
  }

  toJSON() {
    const string = this.getString(),  ///
          json = {
            string
          };

    return json;
  }

  static name = "Statement";

  static fromJSON(json, context) {
    ///
  }
});
