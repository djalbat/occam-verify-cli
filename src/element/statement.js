"use strict";

import { Element } from "occam-languages";
import { arrayUtilities } from "necessary";

import { define } from "../elements";
import { unifyStatement } from "../process/unify";
import { validateStatements } from "../utilities/validation";
import { instantiateStatement } from "../process/instantiate";
import { join, reconcile, instantiate } from "../utilities/context";

const { backwardsSome } = arrayUtilities;

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

  getTermSubstitutionNode() {
    const statementNode = this.getNode(),
          termSubstitutionNode = statementNode.getTermSubstitutionNode();

    return termSubstitutionNode;
  }

  getFrameSubstitutionNode() {
    const statementNode = this.getNode(),
          frameSubstitutionNode = statementNode.getFrameSubstitutionNode();

    return frameSubstitutionNode;
  }

  isSingular() {
    const statementNode = this.getStatementNode(),
          singular = statementNode.isSingular();

    return singular;
  }

  isEqualTo(statement) {
    const statementNode = statement.getNode(),
          statementNodeMatches = this.matchStatementNode(statementNode),
          equalTo = statementNodeMatches;  ///

    return equalTo;
  }

  matchStatementNode(statementNode) {
    const node = statementNode, ///
          nodeMatches = this.matchNode(node),
          statementNodeMatches = nodeMatches; ///

    return statementNodeMatches;
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

  compareMetavariable(metavariable) {
    let comparesToMetavariableName;

    const singular = this.isSingular();

    if (singular) {
      let metavariableName;

      metavariableName = metavariable.getName();

      const metavariableNameA = metavariableName; ///

      metavariableName = this.getMetavariableName();

      const metavariableNameB = metavariableName; ///

      comparesToMetavariableName = (metavariableNameA === metavariableNameB);
    }

    return comparesToMetavariableName;
  }

  compareMetavariableName(metavariableName) {
    let comparesToMetavariableName = false;

    const singular = this.isSingular();

    if (singular) {
      const metavariableNameA = metavariableName ///

      metavariableName = this.getMetavariableName();

      const metavariableNameB = metavariableName; ///

      comparesToMetavariableName = (metavariableNameA === metavariableNameB);
    }

    return comparesToMetavariableName;
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

  findValidStatment(context) {
    const statementNode = this.getStatementNode(),
          statement = context.findStatementByStatementNode(statementNode),
          validStatement = statement;  ///

    return validStatement;
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

  validate(context) {
    let statement = null;

    const statementString = this.getString();  ///

    context.trace(`Validating the '${statementString}' statement...`);

    const validStatement = this.findValidStatment(context);

    if (validStatement !== null) {
      statement = validStatement; ///

      context.debug(`...the '${statementString}' statement is already valid.`);
    } else {
      const validates = validateStatements.some((validateStatement) => {
        const statement = this, ///
              statementValidates = validateStatement(statement, context);

        if (statementValidates) {
          return true;
        }
      });

      if (validates) {
        statement = this; ///

        context.addStatement(statement);

        context.debug(`...validated the '${statementString}' statement.`);
      }
    }

    return statement;
  }

  unifySubproof(subproof, generalContext, specificContext) {
    let subproofUnifies = false;

    const statementNode = this.getStatementNode(),
          subproofAssertionNode = statementNode.getSubproofAssertionNode();

    if (subproofAssertionNode !== null) {
      const context = generalContext, ///
            subproofString = subproof.getString(),
            statementString = this.getString();

      context.trace(`Unifying the '${subproofString}' subproof with the '${statementString}' statement...`);

      const subproofAssertion = context.findAssertionByAssertionNode(subproofAssertionNode);

      subproofUnifies = subproofAssertion.unifySubproof(subproof, generalContext, specificContext);

      if (subproofUnifies) {
        context.debug(`...unified the '${subproofString}' subproof with the '${statementString}' statement.`);
      }
    }

    return subproofUnifies;
  }

  unifyDeduction(deduction, context) {
    let deductionUnifies = false;

    const statementString = this.getString(),  ///
          deductionString = deduction.getString(),
          deductionContext = deduction.getContext(),
          deductionStatement = deduction.getStatement();

    context.trace(`Unifying the '${deductionString}' deduction with the '${statementString}' statement...`);

    const generalContext = context, ///
          specificContext = deductionContext;  ///

    join((specificContext) => {
      reconcile((specificContext) => {
        const deductionStatementUnifies = this.unifyStatement(deductionStatement, generalContext, specificContext);

        if (deductionStatementUnifies) {
          specificContext.commit(context);

          deductionUnifies = true;
        }
      }, specificContext);
    }, specificContext, context);

    if (deductionUnifies) {
      context.debug(`...unified the '${deductionString}' deduction with the '${statementString}' statement.`);
    }

    return deductionUnifies;
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

    if (definedAssertionNode !== null) {
      const context = generalContext, ///
            definedAssertion = context.findAssertionByAssertionNode(definedAssertionNode),
            definedAssertionUnifiesIndependently = definedAssertion.unifyIndependently(generalContext, specificContext);

      if (definedAssertionUnifiesIndependently) {
        unifiesIndependently = true;
      }
    }

    if (containedAssertionNode !== null) {
      const context = generalContext, ///
            containedAssertion = context.findAssertionByAssertionNode(containedAssertionNode),
            containedAssertionUnifiesIndependently = containedAssertion.unifyIndependently(generalContext, specificContext);

      if (containedAssertionUnifiesIndependently) {
        unifiesIndependently = true;
      }
    }

    if (unifiesIndependently) {
      context.debug(`...unified the '${statementString}' statement independently.`);
    }

    return unifiesIndependently;
  }

  unifyTopLevelMetaAssertion(topLevelMetaAssertion, context) {
    let topLevelAssertionUnifies = false;

    const statementString = this.getString(), ///
          topLevelMetaAssertionString = topLevelMetaAssertion.getString();

    context.trace(`Unifying the '${topLevelMetaAssertionString}' top level meta-assertion with the '${statementString}' statement...`);

    const unconditional = topLevelMetaAssertion.isUnconditional();

    if (unconditional) {
      const deduction = topLevelMetaAssertion.getDeduction(),
            deductionUnifies = this.unifyDeduction(deduction, context);

      if (deductionUnifies) {
        topLevelAssertionUnifies = true;
      }
    } else {
      const statementNode = this.getStatementNode(),
            subproofAssertionNode = statementNode.getSubproofAssertionNode();

      if (subproofAssertionNode !== null) {
        const subproofAssertion = context.findAssertionByAssertionNode(subproofAssertionNode);

        topLevelAssertionUnifies = subproofAssertion.unifyTopLevelMetaAssertion(topLevelMetaAssertion, context);
      }
    }

    if (topLevelAssertionUnifies) {
      context.debug(`...unified the '${topLevelMetaAssertionString}' top level meta-assertion with the '${statementString}' statement.`);
    }

    return topLevelAssertionUnifies;
  }

  toJSON() {
    const string = this.getString(),
          json = {
            string
          };

    return json;
  }

  static name = "Statement";

  static fromJSON(json, context) {
    return instantiate((context) => {
      const { string } = json,
            statementNode = instantiateStatement(string, context),
            node = statementNode; ///

      context = null;

      const statement = new Statement(context, string, node);

      return statement;
    }, context);
  }
});
