"use strict";

import Substitution from "../substitution";

import { define } from "../../elements";
import { unifySubstitution } from "../../process/unify";
import { stripBracketsFromStatement } from "../../utilities/brackets";
import { instantiateStatementSubstitution } from "../../process/instantiate";
import { statementSubstitutionFromStatementSubstitutionNode } from "../../utilities/element";
import { join, ablate, attempt, descend, reconcile, instantiate } from "../../utilities/context";
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

    let validates = false;

    const validSubstitution = this.findValidSubstitution(context);

    if (validSubstitution) {
      statementSubstitution = validSubstitution;  ///

      context.debug(`...the '${statementSubstitutionString}' statement substitution is already valid.`);
    } else {
      const context = this.getContext();

      join((context) => {
        attempt((context) => {
          const targetStatementValidates = this.validateTargetStatement(context);

          if (targetStatementValidates) {
            const replacementStatementValidates = this.validateReplacementStatement(context);

            if (replacementStatementValidates) {
              const substitutionValidates = this.validateSubstitution(context);

              if (substitutionValidates) {
                validates = true;
              }
            }
          }

          if (validates) {
            context.commit(this);
          }
        }, context);
      }, generalContext, specificContext, context);
    }

    if (validates) {
      const substitution = this;  ///

      statementSubstitution = substitution; ///

      context.addSubstitution(substitution);

      context.debug(`...validated the '${statementSubstitutionString}' statement substitution.`);
    }

    return statementSubstitution;
  }

  validateSubstitution(context) {
    let substitutionValidates = true;

    if (this.substitution !== null) {
      const substitutionString = this.substitution.getString(),
            statementSubstitutionString = this.getString();

      context.trace(`Validating the '${statementSubstitutionString}' statement substitution's '${substitutionString}' substitution...`);

      const generalContext = context, ///
            specificContext = context,  ///
            substitution = this.substitution.validate(generalContext, specificContext);

      if (substitution !== null) {
        this.substitution = substitution;

        substitutionValidates = true;
      }

      if (substitutionValidates) {
        context.debug(`...validatewd the '${statementSubstitutionString}' statement substitution's '${substitutionString}' substitution.`);
      }
    }

    return substitutionValidates;
  }

  validateTargetStatement(context) {
    let targetStatementValidates = false;

    const targetStatementString = this.targetStatement.getString(),
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

  validateReplacementStatement(context) {
    let replacementStatementValidates = false;

    const replacementStatementString = this.replacementStatement.getString(),
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
          metavariableName = this.getMetavariableName(),
          simpleSubstitution = context.findSimpleSubstitutionByMetavariableName(metavariableName);

    if (simpleSubstitution !== null) {
      const substitutionString = this.getString(); ///

      context.trace(`Resolving the ${substitutionString} substitution...`);

      const substitution = this.unifyWithSimpleSubstitution(simpleSubstitution, generalContext, specificContext); ///

      if (substitution !== null) {
        let context;

        context = substitution.getContext();

        const specificContext = context;  ///

        context = this.substitution.getContext();

        const generalContext = context; ///

        context = specificContext;  ///

        const substitutionUnifies = this.unifySubstitution(substitution, generalContext, specificContext);

        if (substitutionUnifies) {
          resolved = true;
        }

        if (resolved) {
          this.resolved = true;

          context.debug(`...resolved the '${substitutionString}' substitution.`);
        }
      }
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

        statementSubstitutionn = new StatementSubstitution(context, string, node, targetStatement, replacementStatement);
      }, context);
    }

    return statementSubstitutionn;
  }

  static fromStatementAndMetavariable(statement, metavariable, context) {
    statement = stripBracketsFromStatement(statement, context); ///

    let statementSubstitution;

    ablate((context) => {
      instantiate((context) => {
        const statementSubstitutionString = statementSubstitutionStringFromStatementAndMetavariable(statement, metavariable, context),
              string = statementSubstitutionString, ///
              statementSubstitutionNode = instantiateStatementSubstitution(string, context);

        statementSubstitution = statementSubstitutionFromStatementSubstitutionNode(statementSubstitutionNode, context);
      }, context);
    }, context);

    return statementSubstitution;
  }

  static fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context) {
    statement = stripBracketsFromStatement(statement, context); ///

    let statementSubstitution;

    ablate((context) => {
      instantiate((context) => {
        const statementSubstitutionString = statementSubstitutionStringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution),
              string = statementSubstitutionString, ///
              statementSubstitutionNode = instantiateStatementSubstitution(string, context);

        statementSubstitution = statementSubstitutionFromStatementSubstitutionNode(statementSubstitutionNode, context);
      }, context);
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
