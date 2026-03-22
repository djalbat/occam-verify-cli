"use strict";

import Substitution from "../substitution";

import { define } from "../../elements";
import { unifySubstitution } from "../../process/unify";
import { stripBracketsFromStatement } from "../../utilities/brackets";
import { instantiateStatementSubstitution } from "../../process/instantiate";
import { join, descend, reconcile, instantiate } from "../../utilities/context";
import { statementSubstitutionFromStatementSubstitutionNode } from "../../utilities/element";
import { statementSubstitutionStringFromStatementAndMetavariable, statementSubstitutionStringFromStatementMetavariableAndSubstitution } from "../../utilities/string";

export default define(class StatementSubstitution extends Substitution {
  constructor(context, string, node, resolved, substitution, targetStatement, replacementStatement) {
    super(context, string, node);

    this.resolved = resolved;
    this.substitution = substitution;
    this.targetStatement = targetStatement;
    this.replacementStatement = replacementStatement;
  }

  isResolved() {
    return this.resolved;
  }

  getSubstitution() {
    return this.substitution;
  }

  getTargetStatement() {
    return this.targetStatement;
  }

  getReplacementStatement() {
    return this.replacementStatement;
  }

  getStatementSubstitutionNode() {
    const node = this.getNode(),
          statementSubstitutionNode = node; ///

    return statementSubstitutionNode;
  }

  getMtavariableName() { return this.targetStatement.getMtavariableName(); }

  getTargetNode() {
    const targetStatementNode = this.targetStatement.getNode(),
          targetNode = targetStatementNode; ///

    return targetNode;
  }

  getReplacementNode() {
    const replacementStatementNode = this.replacementStatement.getNode(),
          replacementNode = replacementStatementNode; ///

    return replacementNode;
  }

  isSimple() {
    const simple = (this.substitution === null);

    return simple;
  }

  getMetavariableName() { return this.targetStatement.getMetavariableName(); }

  compareMetavariableName(metavariableName) { return this.targetStatement.compareMetavariableName(metavariableName); }

  compareStatement(statement, context) {
    statement = stripBracketsFromStatement(statement, context); ///

    const replacementStatementEqualToStatement = this.replacementStatement.isEqualTo(statement),
          comparesToStatement = replacementStatementEqualToStatement;  ///

    return comparesToStatement;
  }

  compareParameter(parameter) {
    const targetStatementComparesToParameter = this.targetStatement.compareParameter(parameter),
          comparesToParameter = targetStatementComparesToParameter;  ///

    return comparesToParameter;
  }

  compareSubstitution(substitution) {
    let comparesToSubstitution = false;

    if (false) {
      ///
    } else if ((this.substitution === null) && (substitution === null)){
      comparesToSubstitution = true;
    } else if ((this.substitution !== null) && (substitution !== null)){
      const substitutionEqualToSubstituion = this.substitution.isEqualTo(substitution);

      if (substitutionEqualToSubstituion) {
        comparesToSubstitution = true;
      }
    }

    return comparesToSubstitution;
  }

  compareMetavariable(metavariable) { return this.targetStatement.compareMetavariable(metavariable); }

  validate(generalContext, specificContext) {
    let statementSubstitution = null;

    const context = specificContext,  ///
          statementSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${statementSubstitutionString}' statement substitution...`);

    const validSubstitution = this.findValidSubstiution(context);

    if (validSubstitution) {
      statementSubstitution = validSubstitution;  ///

      context.debug(`...the '${statementSubstitutionString}' statement substitution is already valid.`);
    } else {
      let validates = false;

      const targetStatementValidates = this.validateTargetStatement(generalContext, specificContext);

      if (targetStatementValidates) {
        const replacementStatementValidates = this.validateReplacementStatement(generalContext, specificContext);

        if (replacementStatementValidates) {
          validates = true;
        }
      }

      if (validates) {
        const substitution = this;  ///

        statementSubstitution = substitution; ///

        context.addSubstitution(substitution);

        context.debug(`...validated the '${statementSubstitutionString}' statement substitution.`);
      }
    }

    return statementSubstitution;
  }

  validateTargetStatement(generalContext, specificContext) {
    let targetStatementValidates = false;

    const context = generalContext, ///
          targetStatementString = this.targetStatement.getString(),
          statementSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${statementSubstitutionString}' statement substitution's '${targetStatementString}' target statement...`);

    const targetStatementSingular = this.targetStatement.isSingular();

    if (targetStatementSingular) {
      descend((context) => {
        const targetStatement = this.targetStatement.validate(context);

        if (targetStatement !== null) {
          targetStatementValidates = true;
        }
      }, context);
    } else {
      context.debug(`The '${statementSubstitutionString}' statement substitution's '${targetStatementString}' target statement is not singular.`);
    }

    if (targetStatementValidates) {
      context.debug(`...validated the '${statementSubstitutionString}' statement substitution's '${targetStatementString}' target statement...`);
    }

    return targetStatementValidates;
  }

  validateReplacementStatement(generalContext, specificContext) {
    let replacementStatementValidates = false;

    const context = this.getContext(),
          replacementStatementString = this.replacementStatement.getString(),
          statementSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${statementSubstitutionString}' statement substitution's '${replacementStatementString}' replacement statement...`);

    descend((context) => {
      const replacementStatement = this.replacementStatement.validate(context);

      if (replacementStatement !== null) {
        replacementStatementValidates = true;
      }
    }, context);

    if (replacementStatementValidates) {
      context.debug(`...validated the '${statementSubstitutionString}' statement substitution's '${replacementStatementString}' replacement statement.`);
    }

    return replacementStatementValidates;
  }

  unifySubstitution(substitution, generalContext, specificContext) {
    let substitutionUnifies;

    const context = specificContext,
          generalSubstitution = this.substitution,  ///
          specificSubstitution = substitution,  ///
          generalSubstitutionString = generalSubstitution.getString(),
          specificSubstitutionString = specificSubstitution.getString();

    context.trace(`Unifying the '${specificSubstitutionString}' substitution with the '${generalSubstitutionString}' substitution...`);

    reconcile((specificContext) => {
      substitutionUnifies = unifySubstitution(generalSubstitution, specificSubstitution, generalContext, specificContext);

      if (substitutionUnifies) {
        specificContext.commit();
      }
    }, specificContext);

    if (substitutionUnifies) {
      context.trace(`...unified the '${specificSubstitutionString}' substitution with the '${generalSubstitutionString}' substitution.`);
    }

    return substitutionUnifies;
  }

  unifyComplexSubstitution(complexSubstitution, generalContext, specificContext) {
    let substitution = null;

    const context = specificContext, ///
          simpleSubstitutionString = this.getString(),  ///
          complexSubstitutionString = complexSubstitution.getString();  ///

    context.trace(`Unifying the '${complexSubstitutionString}' complex substitution with the '${simpleSubstitutionString}' simple substitution...`);

    let simpleSubstitutionUnifies = false;

    reconcile((specificContext) => {
      const replacementStatement = complexSubstitution.getReplacementStatement(),
            replacementStatementUnifies = this.unifyReplacementStatement(replacementStatement, generalContext, specificContext);

      if (replacementStatementUnifies) {
        const nested = false,
              context = specificContext,  ///
              soleNonTrivialSubstitution = context.getSoleNonTrivialSubstitution(nested);

        substitution = soleNonTrivialSubstitution;  ///
      }
    }, specificContext);

    if (substitution !== null) {
      simpleSubstitutionUnifies = true;
    }

    if (simpleSubstitutionUnifies) {
      context.debug(`...unified the '${complexSubstitutionString}' complex substitution with the '${simpleSubstitutionString}' simple substitution.`);
    }

    return substitution;
  }

  unifyReplacementStatement(replacementStatement, generalContext, specificContext) {
    let replacementStatemnentUnifies = false;

    const context = specificContext,  ///
          replacementStatementString = replacementStatement.getString(),
          substitutionReplacementStatementString = this.replacementStatement.getString();  ///

    context.trace(`Unifying the '${replacementStatementString}' replacement statement with the '${substitutionReplacementStatementString}' replacement statement...`);

    const statementUnifies = this.replacementStatement.unifyStatement(replacementStatement, generalContext, specificContext);

    if (statementUnifies) {
      replacementStatemnentUnifies = true;
    }

    if (replacementStatemnentUnifies) {
      context.debug(`...unified the '${replacementStatementString}' replacement statement with the '${substitutionReplacementStatementString}' replacement statement.`);
    }

    return replacementStatemnentUnifies;
  }

  unifyWithSimpleSubstitution(simpleSubstitution, generalContext, specificContext) {
    let substitution;

    const complexSubstitution = this, ///
          simpleSubstitutionContext = simpleSubstitution.getContext(),
          complexSubstitutionContext = complexSubstitution.getContext();

    generalContext = simpleSubstitutionContext; ///

    specificContext = complexSubstitutionContext;  ///

    substitution = simpleSubstitution.unifyComplexSubstitution(complexSubstitution, generalContext, specificContext);

    return substitution;
  }

  resolve(generalContext, specificContext) {
    let resolved = false;

    const context = specificContext,  ///
          substitutionString = this.getString(); ///

    context.trace(`Resolving the ${substitutionString} substitution...`);

    const metavariableName = this.getMetavariableName(),
          simpleSubstitution = context.findSimpleSubstitutionByMetavariableName(metavariableName);

    if (simpleSubstitution !== null) {
      const substitution = this.unifyWithSimpleSubstitution(simpleSubstitution, generalContext, specificContext); ///

      if (substitution !== null) {
        const complexSubstitution = this, ///
              simpleSubstitutionContext = simpleSubstitution.getContext(),
              complexSubstitutionContext = complexSubstitution.getContext();

        join((context) => {
          const substitutionContext = this.substitution.getContext(),
                generalContext = substitutionContext, ///
                specificContext = context,  ///
                substitutionUnifies = this.unifySubstitution(substitution, generalContext, specificContext);

          if (substitutionUnifies) {
            resolved = true;
          }
        }, complexSubstitutionContext, simpleSubstitutionContext, context);
      }
    }

    if (resolved) {
      this.resolved = true;

      context.debug(`...resolved the '${substitutionString}' substitution.`);
    }
  }

  static name = "StatementSubstitution";

  static fromJSON(json, context) {
    let statementSubstitutionn = null;

    const { name } = json;

    if (this.name === name) {
      instantiate((context) => {
        const { string } = json,
              statementSubstitutionNode = instantiateStatementSubstitution(string, context),
              node = statementSubstitutionNode,  ///
              targetStatement = targetStatementFromStatementSubstitutionNode(statementSubstitutionNode, context),
              replacementStatement = replacementStatementFromStatementSubstitutionNode(statementSubstitutionNode, context);

        context = null;

        statementSubstitutionn = new StatementSubstitution(context, string, node, targetStatement, replacementStatement);
      }, context);
    }

    return statementSubstitutionn;
  }

  static fromStatementAndMetavariable(statement, metavariable, context) {
    statement = stripBracketsFromStatement(statement, context); ///

    let statementSubstitution;

    instantiate((context) => {
      const statementSubstitutionString = statementSubstitutionStringFromStatementAndMetavariable(statement, metavariable, context),
            string = statementSubstitutionString, ///
            statementSubstitutionNode = instantiateStatementSubstitution(string, context);

      statementSubstitution = statementSubstitutionFromStatementSubstitutionNode(statementSubstitutionNode, context);
    }, context);

    return statementSubstitution;
  }

  static fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context) {
    statement = stripBracketsFromStatement(statement, context); ///

    let statementSubstitution;

    instantiate((context) => {
      const statementSubstitutionString = statementSubstitutionStringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution),
            string = statementSubstitutionString, ///
            statementSubstitutionNode = instantiateStatementSubstitution(string, context);

      statementSubstitution = statementSubstitutionFromStatementSubstitutionNode(statementSubstitutionNode, context);
    }, context);

    return statementSubstitution;
  }
});

function targetStatementFromStatementSubstitutionNode(statementSubstitutionNode, context) {
  const targetStatementNode = statementSubstitutionNode.getTargetStatementNode(),
        targetStatement = context.findStatementByStatementNode(targetStatementNode);

  return targetStatement;
}

function replacementStatementFromStatementSubstitutionNode(statementSubstitutionNode, context) {
  const replacementStatementNode = statementSubstitutionNode.getReplacementStatementNode(),
        replacementStatement = context.findStatementByStatementNode(replacementStatementNode);

  return replacementStatement;
}
