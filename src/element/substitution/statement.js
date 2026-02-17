"use strict";

import Substitution from "../substitution";

import { define } from "../../elements";
import { unifySubstitution } from "../../process/unify";
import { liminally, literally } from "../../utilities/context";
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

  getMetavariable(context) {
    let metavariable = null;

    const targetStatementNode = this.targetStatement.getNode(),
          metavariableName = targetStatementNode.getMetavariableName();

    if (metavariableName !== null) {
      metavariable = context.findMetavariableByMetavariableName(metavariableName);
    }

    return metavariable;
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

  compareMetavariable(metavariable) { return this.targetStatement.compareMetavariable(metavariable); }

  validate(generalContext, specificContext) {
    let validates = false;

    const context = this.getContext();

    specificContext = context;  ///

    const statementSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${statementSubstitutionString}' statement substitution...`);

    const valid = this.isValid(context);

    if (valid) {
      validates = true;

      context.debug(`...the '${statementSubstitutionString}' statement substitution is already valid.`);
    } else {
      const targetStatementValidates = this.validateTargetStatement(generalContext, specificContext);

      if (targetStatementValidates) {
        const replacementStatementValidates = this.validateReplacementStatement(generalContext, specificContext);

        if (replacementStatementValidates) {
          validates = true;
        }
      }

      if (validates) {
        const substititoin = this;  ///

        context.addSubstitution(substititoin);

        context.debug(`...validated the '${statementSubstitutionString}' statement substitution.`);
      }
    }

    return validates;
  }

  validateTargetStatement(generalContext, specificContext) {
    let targetStatementValidates = false;

    const context = generalContext, ///
          targetStatementString = this.targetStatement.getString(),
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

  validateReplacementStatement(generalContext, specificContext) {
    let replacementStatementValidates;

    const context = specificContext,  ///
          replacementStatementString = this.replacementStatement.getString(),
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

  unifyReplacementStatement(replacementStatement, generalContext, specificContext) {
    let replacementStatemnentUnifies = false;

    const context = specificContext,  ///
          substitutionString = this.getString(),  ///
          replacementStatementString = replacementStatement.getString(),
          substitutionReplacementStatementString = this.replacementStatement.getString();  ///

    context.trace(`Unifying the '${replacementStatementString}' replacement statement with the '${substitutionString}' substiution's '${substitutionReplacementStatementString}' replacement statement...`);

    const statementUnifies = this.replacementStatement.unifyStatement(replacementStatement, generalContext, specificContext);

    if (statementUnifies) {
      replacementStatemnentUnifies = true;
    }

    if (replacementStatemnentUnifies) {
      context.debug(`...unified the '${replacementStatementString}' replacement statement with the '${substitutionString}' substiution's '${substitutionReplacementStatementString}' replacement statement.`);
    }

    return replacementStatemnentUnifies;
  }

  unifySubstitution(substitution) {
    let context;

    context = this.getContext();

    const generalSubstitution = this.substitution,  ///
          specificSubstitution = substitution,  ///
          generalSubstitutionString = generalSubstitution.getString(),
          specificSubstitutionString = specificSubstitution.getString();

    context.trace(`Unifying the '${specificSubstitutionString}' substitution with the '${generalSubstitutionString}' substitution...`);

    let substitutionUnifies;

    context = substitution.getContext();

    const specificContext = context;  ///

    context = this.substitution.getContext();

    const generalContext = context; ///

    substitutionUnifies = unifySubstitution(generalSubstitution, specificSubstitution, generalContext, specificContext);

    if (substitutionUnifies) {
      context.trace(`...unified the '${specificSubstitutionString}' substitution with the '${generalSubstitutionString}' substitution.`);
    }

    return substitutionUnifies;
  }

  resolve(generalContext, specificContext) {
    let context;

    context = this.getContext();

    const substitutionString = this.getString(); ///

    context.trace(`Resolving the ${substitutionString} substitution...`);

    context = generalContext; ///

    const metavariable = this.getMetavariable(context);

    context = specificContext;  ///

    const simpleSubstitution = context.findSimpleSubstitutionByMetavariable(metavariable);

    context = this.getContext();

    const subtitution = liminally((context) => {
      let substitution = null;

      const specificContext = context;  ///

      context = simpleSubstitution.getContext();

      const generalContext = context; ///

      context = specificContext;  ///

      const replacementStatementUnifies = simpleSubstitution.unifyReplacementStatement(this.replacementStatement, generalContext, specificContext);

      if (replacementStatementUnifies) {
        const nested = false,
              soleNonTrivialSubstitution = context.getSoleNonTrivialSubstitution(nested);

        substitution = soleNonTrivialSubstitution;  ///
      }

      return substitution;
    }, context);

    if (subtitution !== null) {
      debugger
    }

    //       substitution = liminally((context) => {
    //         let substitution = null;
    //
    //         let context;
    //
    //         const
    //
    //         if (replacementStatementUnifies) {
    //           const nested = false,
    //                 soleNonTrivialSubstitution = context.getSoleNonTrivialSubstitution(nested);
    //
    //           if (soleNonTrivialSubstitution !== null) {
    //             substitution = soleNonTrivialSubstitution; ///
    //           }
    //         }
    //
    //         return substitution;
    //       }, context);
    //
    // let substitutions = null;
    //
    // if (substitution !== null) {
    //   const substitutiUnifies = this.unifySubstitution(substitution);
    //
    //   if (substitutiUnifies) {
    //     let context = substitution.getContext();
    //
    //     context.removeSubstitution(substitution);
    //
    //     const nested = false;
    //
    //     substitutions = context.getSubstitutions(nested);
    //   }
    // }
    //
    // if (substitutions !== null) {
    //   specificContext.addSubstitutions(substitutions);
    //
    //   this.resolved = true;
    // }

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

      return statementSubstitution;
    }, context);
  }

  static fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context) {
    statement = stripBracketsFromStatement(statement, context); ///

    return literally((context) => {
      const statementSubstitutionString = statementSubstitutionStringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution),
            string = statementSubstitutionString, ///
            statementSubstitutionNode = instantiateStatementSubstitution(string, context),
            statementSubstitution = statementSubstitutionFromStatementSubstitutionNode(statementSubstitutionNode, context);

      return statementSubstitution;
    }, context);
  }
});
