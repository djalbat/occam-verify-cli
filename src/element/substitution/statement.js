"use strict";

import Substitution from "../substitution";

import { define } from "../../elements";
import { unifySubstitution } from "../../process/unify";
import { stripBracketsFromStatement } from "../../utilities/brackets";
import { breakPointFromJSON } from "../../utilities/breakPoint";
import { instantiateStatementSubstitution } from "../../process/instantiate";
import { statementSubstitutionFromStatementSubstitutionNode } from "../../utilities/element";
import { join, ablates, manifest, attempts, sequester, reconcile, instantiate, unserialises } from "../../utilities/context";
import { statementSubstitutionStringFromStatementAndMetavariable, statementSubstitutionStringFromStatementMetavariableAndSubstitution } from "../../utilities/string";

export default define(class StatementSubstitution extends Substitution {
  constructor(contexts, string, node, breakPoint, resolved, substitution, targetStatement, replacementStatement) {
    super(contexts, string, node, breakPoint);

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

  getMetavariableNode() { return this.targetStatement.getMetavariableNode(); }

  isSimple() {
    const simple = (this.substitution === null);

    return simple;
  }

  matchMetavariableNode(metavariableNode) { return this.targetStatement.matchMetavariableNode(metavariableNode); }

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

  validate(substitution, context) {
    let statementSubstitution = null;

    const statementSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${statementSubstitutionString}' statement substitution...`);

    let validates = false;

    const validSubstitution = this.findValidSubstitution(context);

    if (validSubstitution) {
      validates = true;

      statementSubstitution = validSubstitution;  ///

      context.debug(`...the '${statementSubstitutionString}' statement substitution is already valid.`);
    } else {
      const generalContext = this.getGeneralContext(),
            specificContext = this.getSpecificContext();

      attempts((generalContext, specificContext) => {
        const targetStatementValidates = this.validateTargetStatement(generalContext, specificContext);

        if (targetStatementValidates) {
          const replacementStatementValidates = this.validateReplacementStatement(generalContext, specificContext);

          if (replacementStatementValidates) {
            const substitutionValidates = this.validateSubstitution(substitution, generalContext, specificContext);

            if (substitutionValidates) {
              validates = true;
            }
          }
        }

        if (validates) {
          this.commit(generalContext, specificContext);
        }
      }, generalContext, specificContext);

      if (validates) {
        const substitution = this;  ///

        statementSubstitution = substitution; ///

        context.addSubstitution(substitution);
      }
    }

    if (validates) {
      context.debug(`...validated the '${statementSubstitutionString}' statement substitution.`);
    }

    return statementSubstitution;
  }

  validateSubstitution(substitution, generalContext, specificContext) {
    let substitutionValidates = true;

    if (substitution !== null) {
      const context = generalContext,  ///
            statementSubstitutionString = this.getString(); ///

      context.trace(`Validating the '${statementSubstitutionString}' statement substitution's substitution...`);

      this.substitution = substitution;

      substitutionValidates = true;

      if (substitutionValidates) {
        context.debug(`...validatewd the '${statementSubstitutionString}' statement substitution's substitution.`);
      }
    }

    return substitutionValidates;
  }

  validateTargetStatement(generalContext, specificContext) {
    let targetStatementValidates = false;

    const context = generalContext,  ///
          statementSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${statementSubstitutionString}' statement substitution's target statement...`);

    const targetStatementSingular = this.targetStatement.isSingular();

    if (targetStatementSingular) {
      manifest((context) => {
        sequester((context) => {
          const targetStatement = this.targetStatement.validate(context);

          if (targetStatement !== null) {
            targetStatementValidates = true;
          }
        }, context);
      }, specificContext, context);
    } else {
      const targetStatementString = this.targetStatement.getString();

      context.debug(`The '${targetStatementString}' target statement is not singular.`);
    }

    if (targetStatementValidates) {
      context.debug(`...validated the '${statementSubstitutionString}' statement substitution's target statement...`);
    }

    return targetStatementValidates;
  }

  validateReplacementStatement(generalContext, specificContext) {
    let replacementStatementValidates = false;

    const context = specificContext,  ///
          statementSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${statementSubstitutionString}' statement substitution's replacement statement...`);

    sequester((context) => {
      const replacementStatement = this.replacementStatement.validate(context);

      if (replacementStatement !== null) {
        replacementStatementValidates = true;
      }
    }, context);

    if (replacementStatementValidates) {
      context.debug(`...validated the '${statementSubstitutionString}' statement substitution's replacement statement.`);
    }

    return replacementStatementValidates;
  }

  unifySimpleSubstitution(simpleSubstitution, context) {
    let simpleSubstitutionUnifies;

    const substitutionString = this.substitution.getString(),
          simpleSubstitutionString = simpleSubstitution.getString();

    context.trace(`Unifying the '${simpleSubstitutionString}' simple substitution with the '${substitutionString}' substitution...`);

    const specificSubstitution = simpleSubstitution,  ///
          generalSubstitution = this.substitution, ///
          specificContexts = specificSubstitution.getContexts(),  ///
          generalContexts = generalSubstitution.getContexts();

    join((specificContext) => {
      join((generalContext) => {
        reconcile((specificContext) => {
          simpleSubstitutionUnifies = unifySubstitution(generalSubstitution, specificSubstitution, generalContext, specificContext);

          if (simpleSubstitutionUnifies) {
            specificContext.commit(context);
          }
        }, specificContext)
      }, ...generalContexts);
    }, ...specificContexts, context);

    if (simpleSubstitutionUnifies) {
      context.trace(`...unified the '${simpleSubstitutionString}' simple substitution with the '${substitutionString}' substitution.`);
    }

    return simpleSubstitutionUnifies;
  }

  unifyComplexSubstitution(complexSubstitution, context) {
    let substitution = null;

    const substitutionString = this.getString(),  ///
          complexSubstitutionString = complexSubstitution.getString();  ///

    context.trace(`Unifying the '${complexSubstitutionString}' complex substitution with the '${substitutionString}' substitution...`);

    const simpleSubstitution = this,  ///
          simpleSubstitutionGSpecificContext = simpleSubstitution.getSpecificContext(),
          complexSubstitutionGSpecificContext = complexSubstitution.getSpecificContext(),
          generalContext = simpleSubstitutionGSpecificContext,  ///
          specificContext = complexSubstitutionGSpecificContext;  ///

    let simpleSubstitutionUnifies = false;

    join((specificContext) => {
      reconcile((specificContext) => {
        const replacementStatement = complexSubstitution.getReplacementStatement(),
              replacementStatementUnifies = this.unifyReplacementStatement(replacementStatement, generalContext, specificContext);

        if (replacementStatementUnifies) {
          const context = specificContext,  ///
                soleNonTrivialDerivedSubstitution = context.getSoleNonTrivialDerivedSubstitution();

          substitution = soleNonTrivialDerivedSubstitution;  ///
        }
      }, specificContext);
    }, specificContext, context);

    if (substitution !== null) {
      substitution = substitution.validate(context);  ///

      simpleSubstitutionUnifies = true;
    }

    if (simpleSubstitutionUnifies) {
      context.debug(`...unified the '${complexSubstitutionString}' complex substitution with the '${substitutionString}' substitution.`);
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

  resolve(context) {
    let resolved = false;

    const metavariableNode = this.getMetavariableNode(),
          simpleDerivedSubstitution = context.findSimpleDerivedSubstitutionByMetavariableNode(metavariableNode), ///
          complexSubstitution = this,
          simpleSubstitution = simpleDerivedSubstitution; ///

    if (simpleSubstitution !== null) {
      const substitutionString = this.getString(); ///

      context.trace(`Resolving the ${substitutionString} substitution...`);

      const substitution = simpleSubstitution.unifyComplexSubstitution(complexSubstitution, context);

      if (substitution !== null) {
        const simpleSubstitution = substitution,  ///
              simpleSubstitutionUnifies = complexSubstitution.unifySimpleSubstitution(simpleSubstitution, context);

        if (simpleSubstitutionUnifies) {
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
      unserialises((json, generalContext, specificContext) => {
        const context = specificContext;  ///

        instantiate((context) => {
          const { string } = json,
                statementSubstitutionNode = instantiateStatementSubstitution(string, context),
                node = statementSubstitutionNode, ///
                breakPoint = breakPointFromJSON(json),
                resolved = resolvedFromStatementSubstitutionNode(statementSubstitutionNode, context),
                substitution = substitutionFromStatementSubstitutionNode(statementSubstitutionNode, generalContext, specificContext),
                targetStatement = targetStatementFromStatementSubstitutionNode(statementSubstitutionNode, context),
                replacementStatement = replacementStatementFromStatementSubstitutionNode(statementSubstitutionNode, context),
                specificContext = context,  ///
                contexts = [
                  generalContext,
                  specificContext
                ];

          statementSubstitutionn = new StatementSubstitution(contexts, string, node, breakPoint, resolved, substitution, targetStatement, replacementStatement);
        }, context);
      }, json, context);
    }

    return statementSubstitutionn;
  }

  static fromStatementAndMetavariable(statement, metavariable, generalContext, specificContext) {
    const context = specificContext;  ///

    statement = stripBracketsFromStatement(statement, context); ///

    let statementSubstitution;

    ablates((generalContext, specificContext) => {
      const context = specificContext;  ///

      instantiate((context) => {
        const specificContext = context,  ///
              statementSubstitutionString = statementSubstitutionStringFromStatementAndMetavariable(statement, metavariable),
              string = statementSubstitutionString, ///
              statementSubstitutionNode = instantiateStatementSubstitution(string, context);

        statementSubstitution = statementSubstitutionFromStatementSubstitutionNode(statementSubstitutionNode, generalContext, specificContext);
      }, context);
    }, generalContext, specificContext);

    return statementSubstitution;
  }

  static fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, generalContext, specificContext) {
    const context = specificContext;  ///

    statement = stripBracketsFromStatement(statement, context); ///

    let statementSubstitution;

    ablates((generalContext, specificContext) => {
      const context = specificContext;  ///

      instantiate((context) => {
        const specificContext = context,  ///
              statementSubstitutionString = statementSubstitutionStringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution),
              string = statementSubstitutionString, ///
              statementSubstitutionNode = instantiateStatementSubstitution(string, context);

        statementSubstitution = statementSubstitutionFromStatementSubstitutionNode(statementSubstitutionNode, generalContext, specificContext);
      }, context);
    }, generalContext, specificContext);

    return statementSubstitution;
  }
});

function resolvedFromStatementSubstitutionNode(statementSubstitutionNode, context) {
  const resolved = true;

  return resolved;
}

function substitutionFromStatementSubstitutionNode(statementSubstitutionNode, context) {
  const substitutionNode = statementSubstitutionNode.getSubstitutionNode(),
        substitution = context.findSubstitutionBySubstitutionNode(substitutionNode);

  return substitution;
}

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
