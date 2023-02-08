"use strict";

import Verifier from "../verifier";
import verifyTerm from "../verify/term";

import { first } from "../utilities/array";
import { objectType } from "../type";
import { OBJECT_TYPE_NAME } from "../typeNames";
import { STATEMENT_META_TYPE } from "../metaTypes";
import { nodeQuery, typeNameFromTypeNode } from "../utilities/query";
import { ARGUMENT_RULE_NAME, META_ARGUMENT_RULE_NAME } from "../ruleNames";

const termNodeQuery = nodeQuery("/argument/term!"),
      typeNodeQuery = nodeQuery("/argument/type!"),
      metaTypeNodeQuery = nodeQuery("/metaArgument/metaType!"),
      statementNodeQuery = nodeQuery("/metaArgument/statement!"),
      metaTypeTerminalNodeQuery = nodeQuery("/metaType/@meta-type");

class StatementVerifier extends Verifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, context) {
    let nonTerminalNodeVerified = false;

    const nonTerminalNode = nonTerminalNodeA, ///
          combinatorNonTerminalNode = nonTerminalNodeB; ///

    const ruleName = nonTerminalNode.getRuleName(), ///
          combinatorRuleName = combinatorNonTerminalNode.getRuleName(); ///

    if (ruleName === combinatorRuleName) {
      switch (ruleName) {
        case ARGUMENT_RULE_NAME: {
          const argumentNode = nonTerminalNode, ///
                combinatorArgumentNode = combinatorNonTerminalNode, ///
                argumentNodeVerified = this.verifyArgumentNode(argumentNode, combinatorArgumentNode, context);

          nonTerminalNodeVerified = argumentNodeVerified; ///

          break;
        }

        case META_ARGUMENT_RULE_NAME: {
          const metaArgumentNode = nonTerminalNode, ///
                combinatorMetaargumentNode = combinatorNonTerminalNode, ///
                metaArgumentNodeVerified = this.verifyMetaargumentNode(metaArgumentNode, combinatorMetaargumentNode, context);

          nonTerminalNodeVerified = metaArgumentNodeVerified; ///

          break;
        }

        default: {
          const childNodes = nonTerminalNode.getChildNodes(),
                combinatorChildNodes = combinatorNonTerminalNode.getChildNodes(),
                nodesA = childNodes, ///
                nodesB = combinatorChildNodes, ///
                nodesVerified = this.verifyNodes(nodesA, nodesB, context);

          nonTerminalNodeVerified = nodesVerified; ///

          break;
        }
      }
    }

    return nonTerminalNodeVerified;
  }

  verifyArgumentNode(argumentNode, combinatorArgumentNode, context) {
    let argumentNodeVerified = false;

    const termNode = termNodeQuery(argumentNode);

    if (termNode === null) {
      const argumentString = context.nodeAsString(argumentNode);

      context.error(`The ${argumentString} argument should be a term, not a type`, argumentNode);
    } else {
      const types = [],
            termVerified = verifyTerm(termNode, types, context);

      if (termVerified) {
        const firstType = first(types),
              termType = firstType, ///
              typeNode = typeNodeQuery(combinatorArgumentNode),
              typeName = typeNameFromTypeNode(typeNode),
              type = (typeName === OBJECT_TYPE_NAME) ?
                        objectType :  ///
                          context.findTypeByTypeName(typeName),
              statementTypeEqualToOrSubTypeOfType = termType.isEqualToOrSubTypeOf(type);

        if (statementTypeEqualToOrSubTypeOfType) {
          argumentNodeVerified = true;
        }
      }
    }

    return argumentNodeVerified;
  }

  verifyMetaargumentNode(metaArgumentNode, combinatorMetaargumentNode, context) {
    let metaArgumentNodeVerified = false;

    const statementNode = statementNodeQuery(metaArgumentNode),
          combinatorMetaTYpeNode = metaTypeNodeQuery(combinatorMetaargumentNode);

    if (statementNode === null) {
      const metaArgumentString = context.nodeAsString(metaArgumentNode);

      context.error(`Expected a statement but got a '${metaArgumentString}' meta-type.`, metaArgumentNode);
    } else {
      if (combinatorMetaTYpeNode === null) {
        const combinatorMetaargumentString = context.nodeAsString(combinatorMetaargumentNode);

        context.error(`Expected a meta-type but got a '${combinatorMetaargumentString}' statement.`, metaArgumentNode);
      } else {
        const combinatorMetaTypeTerminalNode = metaTypeTerminalNodeQuery(combinatorMetaTYpeNode),
              content = combinatorMetaTypeTerminalNode.getContent(),
              contentStatementMetaType = (content === STATEMENT_META_TYPE);

        if (!contentStatementMetaType) {
          context.error(`Expected the meta-type to be 'Statement' but got '${content}'.`, metaArgumentNode);
        } else {
          metaArgumentNodeVerified = true;
        }
      }
    }

    return metaArgumentNodeVerified;
  }
}

const statementVerifier = new StatementVerifier();

export default statementVerifier;

