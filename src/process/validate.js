"use strict";

import { queryUtilities } from "occam-languages";
import { SimplePass, ForwardPass } from "occam-languages";

import { termFromTermNode, statementFromStatementNode } from "../utilities/element";

const { nodeQuery } = queryUtilities;

const termNodeQuery = nodeQuery("/term"),
      typeNodeQuery = nodeQuery("/type"),
      statementNodeQuery = nodeQuery("/statement");

class TermPass extends ForwardPass {
  run(statementNode, context) {
    let success = false;

    const nonTerminalNode = statementNode,  ///
          childNodes = nonTerminalNode.getChildNodes(), ///
          descended = this.descend(childNodes, context);

    if (descended) {
      success = true;
    }

    return success;
  }

  static maps = [
    {
      nodeQuery: termNodeQuery,
      run: (termNode, context, validateForwards) => {
        let success = false;

        let term;

        term = termFromTermNode(termNode, context);

        term = term.validate(context, validateForwards);  ///

        if (term !== null) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: typeNodeQuery,
      run: (typeNode, context, validateForwards) => {
        let success = false;

        const nominalTypeName = typeNode.getNominalTypeName(),
              typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);

        if (typePresent) {
          const validatesForwards = validateForwards();

          if (validatesForwards) {
            success = true;
          }
        } else {
          const typeString = nominalTypeName; ///

          context.debug(`The '${typeString}' type is not present.`);

          success = false;
        }

        return success;
      }
    }
  ];
}

class StatementPass extends SimplePass {
  run(statementNode, context) {
    let success = false;

    const nonTerminalNode = statementNode,  ///
          childNodes = nonTerminalNode.getChildNodes(), ///
          descended = this.descend(childNodes, context);

    if (descended) {
      success = true;
    }

    return success;
  }

  static maps = [
    {
      nodeQuery: statementNodeQuery,
      run: (statementNode, context) => {
        let success = false;

        let statement;

        const stated = true;

        statement = statementFromStatementNode(statementNode, context);

        statement = statement.validate(stated, context);  ///

        if (statement !== null) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: termNodeQuery,
      run: (termNode, context) => {
        let success = false;

        let term;

        term = termFromTermNode(termNode, context);

        term = term.validate(context, () => { ///
          const validatesForwards = true;

          return validatesForwards;
        });

        if (term !== null) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: typeNodeQuery,
      run: (typeNode, context) => {
        let success = false;

        const nominalTypeName = typeNode.getNominalTypeName(),
              typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);

        if (typePresent) {
          success = true;
        }

        return success;
      }
    }
  ];
}

const termPass = new TermPass(),
      statementPass = new StatementPass();

export function validateTerm(termNode, context, validateForwards) {
  let termValidates = false;

  const node = termNode, ///
        sucess = termPass.run(node, context, validateForwards);

  if (sucess) {
    termValidates = true;
  }

  return termValidates;
}

export function validateStatement(statementNode, context) {
  let statementValidates = false;

  const node = statementNode, ///
        sucess = statementPass.run(node, context);

  if (sucess) {
    statementValidates = true;
  }

  return statementValidates;
}
