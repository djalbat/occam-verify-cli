"use strict";

import { arrayUtilities } from "necessary";

import Element from "../element";

import { define } from "../elements";
import { unifyStatement } from "../process/unify";
import { validateStatements } from "../utilities/validation";
import { instantiateStatement } from "../process/instantiate";
import { STATEMENT_META_TYPE_NAME } from "../metaTypeNames";

const { match, backwardsSome } = arrayUtilities;

export default define(class Statement extends Element {
  constructor(context, string, node) {
    super(context, string, node);
  }

  getMetavariableName() {
    let metavariableName = null;

    const singular = this.isSingular();

    if (singular) {
      const node = this.getNode();

      metavariableName = node.getMetavariableName();
    }

    return metavariableName;
  }

  isSingular() {
    const node = this.getNode(),
          singular = node.isSingular();

    return singular;
  }

  isTermContained(term, context) {
    let termContained;

    const node = this.getNode(),
          termString = term.getString(),
          statementString = this.getString();  ///

    context.trace(`Is the '${termString}' term contained in the '${statementString}' statement...`, node);

    const statementNode = node, ///
          statementNodeTermNodes = statementNode.getTermNodes();

    termContained = statementNodeTermNodes.some((statementNodeTermNode) => {  ///
      const statementNodeTermNodeMatches = term.matchNode(statementNodeTermNode);

      if (statementNodeTermNodeMatches) {
        return true;
      }
    });

    if (termContained) {
      context.debug(`...the '${termString}' term is contained in the '${statementString}' statement.`, node);
    }

    return termContained;
  }

  isFrameContained(frame, context) {
    let frameContained;

    const node = this.getNode(),
          frameString = frame.getString(),
          statementString = this.getString();  ///

    context.trace(`Is the '${frameString}' frame contained in the '${statementString}' statement...`, node);

    const statementNode = node,
          statementNodeFrameNodes = statementNode.getFrameNodes();

    frameContained = statementNodeFrameNodes.some((statementNodeFrameNode) => {  ///
      const statementNodeFrameNodeMatches = frame.matchNode(statementNodeFrameNode);

      if (statementNodeFrameNodeMatches) {
        return true;
      }
    });

    if (frameContained) {
      context.debug(`...the '${frameString}' frame is contained in the '${statementString}' statement.`, node);
    }

    return frameContained;
  }

  isMetavariableEqualToMetavariable(metavariable, context) {
    let metavariableEqualToMetavariable;

    const singular = this.isSingular();

    if (singular) {
      const node = this.getNode(),
            metavariableA = metavariable, ///
            singularMetavariableNode = node.getSingularMetavariableNode(),
            metavariableName = singularMetavariableNode.getMetavariableName();

      metavariable = context.findMetavariableByMetavariableName(metavariableName)

      const metavariableB = metavariable,
            equalTo = metavariableA.isEqualTo(metavariableB);

      metavariableEqualToMetavariable = equalTo;  ///
    }

    return metavariableEqualToMetavariable;
  }

  validate(assignments, stated, context) {
    let validates;

    const node = this.getNode(),
          statementString = this.getString();  ///

    context.trace(`Validating the '${statementString}' statement...`, node);

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

      context.debug(`...validated the '${statementString}' statement.`, node);
    }

    return validates;
  }

  validateGivenMetaType(metaType, assignments, stated, context) {
    let validatesGivenMetaType = false;

    const node = this.getNode(),
          metaTypeString = metaType.getString(),
          statementString = this.getString();  ///

    context.trace(`Validating the '${statementString}' statement given the '${metaTypeString}' meta-type...`, node);

    const metaTypeName = metaType.getName();

    if (metaTypeName === STATEMENT_META_TYPE_NAME) {
      const validates = this.validate(assignments, stated, context)

      validatesGivenMetaType = validates; ///
    }

    if (validatesGivenMetaType) {
      context.debug(`...validated the '${statementString}' statement given the '${metaTypeString}' meta-type.`, node);
    }

    return validatesGivenMetaType;
  }

  unifySubproof(subproof, substitutions, generalContext, specificContext) {
    let subproofUnifies = false;

    const node = this.getNode(),
          context = specificContext,  ///
          statementNode = node,
          subproofAssertionNode = statementNode.getSubproofAssertionNode(),
          assertionNode = subproofAssertionNode;  ///

    if (assertionNode !== null) {
      const assertion = generalContext.findAssertionByAssertionNode(assertionNode),
            subproofAssertion = assertion;  ///

      const subproofString = subproof.getString(),
            subproofAssertionString = subproofAssertion.getString();

      context.trace(`Unifying the '${subproofString}' subproof with the '${subproofAssertionString}' subproof assertion...`);

      const subproofStatements = subproof.getStatements(),
            subproofAssertionStatements = subproofAssertion.getStatements();

      subproofUnifies = match(subproofAssertionStatements, subproofStatements, (subproofAssertionStatement, subproofStatement) => {
        const generalStatement = subproofAssertionStatement,  ///
              specificStatement = subproofStatement,  ///
              statementUnifies = unifyStatement(generalStatement, specificStatement, substitutions, generalContext, specificContext);

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

  unifyStatement(statement, substitutions, generalContext, specificContext) {
    let statementUnifies;

    const generalStatement = this,  ///
          specificStatement = statement, ///
          generalStatementString = generalStatement.getString(),
          specificStatementString = specificStatement.getString();

    specificContext.trace(`Unifying the '${specificStatementString}' statement with the '${generalStatementString}' statement...`);

    statementUnifies = unifyStatement(generalStatement, specificStatement, substitutions, generalContext, specificContext);

    if (statementUnifies) {
      specificContext.debug(`...unified the '${specificStatementString}' statement with the '${generalStatementString}' statement.`);
    }

    return statementUnifies;
  }

  unifyIndependently(substitutions, generalContext, specificContext) {
    let unifiesIndependently = false;

    const context = specificContext,  ///
          statementString = this.getString();  ///

    context.trace(`Unifying the '${statementString}' statement independently...`);

    const node = this.getNode(),
          statementNode = node, ///
          definedAssertionNode = statementNode.getDefinedAssertionNode(),
          containedAssertionNode = statementNode.getContainedAssertionNode();

    if ((definedAssertionNode !== null) || (containedAssertionNode !== null)) {
      const assertionNode = (definedAssertionNode || containedAssertionNode),
            assertion = generalContext.findAssertionByAssertionNode(assertionNode),
            assertionUnifiesIndependently = assertion.unifyIndependently(substitutions, generalContext, specificContext);

      if (assertionUnifiesIndependently) {
        unifiesIndependently = true;
      }
    }

    if (unifiesIndependently) {
      context.debug(`...unified the '${statementString}' statement independently.`);
    }

    return unifiesIndependently;
  }

  compareStepsOrSubproofs(stepsOrSubproofs, context) {
    let comparesToStepsOrSubproofs;

    comparesToStepsOrSubproofs = backwardsSome(stepsOrSubproofs, (stepOrSubproof) => {
      const statement = this, ///
            stepOrSubproofComparesToStatement = stepOrSubproof.compareStatement(statement, context);

      if (stepOrSubproofComparesToStatement) {
        return true;
      }
    });

    return comparesToStepsOrSubproofs;
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
    const { string } = json,
          statmentNode = instantiateStatement(string, context),
          node = statmentNode;  ///,

    context = null;

    const statement = new Statement(context, string, node);

    return statement;
  }
});
