"use strict";

import elements from "../../elements";
import Substitution from "../substitution";

import { define } from "../../elements";
import { literally } from "../../utilities/context";
import { unifySubstitution } from "../../process/unify";
import { stripBracketsFromStatement } from "../../utilities/brackets";
import { instantiateStatementSubstitution } from "../../process/instantiate";
import { statementSubstitutionFromStatementSubstitutionNode } from "../../utilities/element";
import { statementToStatementJSON, metavariableToMetavariableJSON } from "../../utilities/json";
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

  validate(context) {
    let validates = false;

    const statementSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${statementSubstitutionString}' statement substitution...`);

    const targetStatementValidates = this.validateTargetStatement(context);

    if (targetStatementValidates) {
      const replacementStatementValidates = this.validateReplacementStatement(context);

      if (replacementStatementValidates) {
        validates = true;
      }
    }

    if (validates) {
      const substititoin = this;  ///

      context.addSubstitution(substititoin);

      context.debug(`...validated the '${statementSubstitutionString}' statement substitution.`);
    }

    return validates;
  }

  validateTargetStatement(context) {
    let targetStatementValidates = false;

    const targetStatementString = this.targetStatement.getString(),
          statementSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${statementSubstitutionString}' statement subtitution's '${targetStatementString}' target statement...`);

    const targetStatementSingular = this.targetStatement.isSingular();

    if (targetStatementSingular) {
      const stated = true,
            assignments = null;

      targetStatementValidates = this.targetStatement.validate(assignments, stated, context);
    } else {
      context.debug(`The '${statementSubstitutionString}' statement subtitution's '${targetStatementString}' target statement is not singular.`);
    }

    if (targetStatementValidates) {
      context.debug(`...validated the '${statementSubstitutionString}' statement subtitution's '${targetStatementString}' target statement...`);
    }

    return targetStatementValidates;
  }

  validateReplacementStatement(context) {
    let replacementStatementValidates;

    const replacementStatementString = this.replacementStatement.getString(),
          statementSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${statementSubstitutionString}' statement subtitution's '${replacementStatementString}' replacement statement...`);

    const stated = true,
          assignments = null;

    replacementStatementValidates = this.replacementStatement.validate(assignments, stated, context);

    if (replacementStatementValidates) {
      context.debug(`...validated the '${statementSubstitutionString}' statement subtitution's '${replacementStatementString}' replacement statement...`);
    }

    return replacementStatementValidates;
  }

  unifyStatement(statement, context) {
    let statementUnifies = false;

    const statementString = statement.getString(),
          statementSubstitutionString = this.getString();

    context.trace(`Unifying the '${statementString}' statement with the '${statementSubstitutionString}' statement substiution's statement...`);

    const specificContext = context; ///

    context = this.getContext();

    const generalContext = context; ///

    context = specificContext;  ///

    const { Substitutions } = elements,
          substitutions = Substitutions.fromNothing(context);

    statementUnifies = this.replacementStatement.unifyStatement(statement, substitutions, generalContext, specificContext);

    let substitution = null;

    if (statementUnifies) {
      const substitutionsNonTrivialLength = substitutions.getNonTrivialLength();

      if (substitutionsNonTrivialLength === 1) {
        const firstSubstitution = substitutions.getFirstSubstitution();

        substitution = firstSubstitution; ///
      } else {
        statementUnifies = false;
      }
    }

    if (statementUnifies) {
      context.trace(`...unified the '${statementString}' statement with the '${statementSubstitutionString}' statement substiution's statement.`);
    }

    return substitution;
  }

  unifySubstitution(substitution, substitutions, context) {
    const generalSubstitution = this.substitution,  ///
          specificSubstitution = substitution,  ///
          generalSubstitutionString = generalSubstitution.getString(),
          specificSubstitutionString = specificSubstitution.getString();

    context.trace(`Unifying the '${specificSubstitutionString}' substitution with the '${generalSubstitutionString}' substitution...`);

    let substitutionContext;

    substitutionContext = this.substitution.getContext();

    const generalContext = substitutionContext; ///

    substitutionContext = substitution.getContext();

    const specificContext = substitutionContext,  ///
          substitutionUnifies = unifySubstitution(generalSubstitution, specificSubstitution, substitutions, generalContext, specificContext);

    if (substitutionUnifies) {
      context.trace(`...unified the '${specificSubstitutionString}' substitution with the '${generalSubstitutionString}' substitution.`);
    }

    return substitutionUnifies;
  }

  resolve(substitutions, context) {
    context = this.getContext();

    const substitutionString = this.getString(); ///

    context.trace(`Resolving the ${substitutionString} substitution...`);

    substitutions.snapshot(context);

    const metavariable = this.getMetavariable(),
          simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariable(metavariable),
          substitution = simpleSubstitution.unifyStatement(this.replacementStatement, context);

    if (substitution !== null) {
      const substitutionUnifies = this.unifySubstitution(substitution, substitutions, context);

      if (substitutionUnifies) {
        this.resolved = true;
      }
    }

    this.resolved ?
      substitutions.continue(context) :
        substitutions.rollback(context);

    if (this.resolved) {
      context.debug(`...resolved the '${substitutionString}' substitution.`);
    }
  }

  toJSON() {
    const metavariableJSON = metavariableToMetavariableJSON(this.targetStatement),
          statementJSON = statementToStatementJSON(this.replacementStatement),
          metavariable = metavariableJSON,  ///
          statement = statementJSON,  ///
          string = this.getString(), ///
          json = {
            string,
            statement,
            metavariable
          };

    return json;
  }

  static name = "StatementSubstitution";

  static fromJSON(json, context) {
    ///
  }

  static fromStatementAndMetavariable(statement, metavariable, context) {
    statement = stripBracketsFromStatement(statement, context); ///

    return literally((context) => {
      const statementSubstitutionString = statementSubstitutionStringFromStatementAndMetavariable(statement, metavariable, context),
            string = statementSubstitutionString, ///
            statementSubstitutionNode = instantiateStatementSubstitution(string, context),
            statementSubstitution = statementSubstitutionFromStatementSubstitutionNode(statementSubstitutionNode, context);

      statementSubstitution.validate(context);

      return statementSubstitution;
    }, context);
  }

  static fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context) {
    statement = stripBracketsFromStatement(statement, context); ///

    return literally((context) => {
      const statementSubstitutionString = statementSubstitutionStringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution),
            string = statementSubstitutionString, ///
            statementSubstitutionNode = instantiateStatementSubstitution(string, context),
            statementSubstitution = statementSubstitutionFromStatementSubstitutionNode(statementSubstitutionNode, substitution, context);

      statementSubstitution.validate(context);

      return statementSubstitution;
    }, context);
  }
});
