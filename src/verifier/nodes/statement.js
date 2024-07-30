"use strict";

import NodesVerifier from "../../verifier/nodes";
import termNodesVerifier from "../../verifier/nodes/term";

import { nodeQuery } from "../../utilities/query";
import { STATEMENT_META_TYPE } from "../../metaTypes";
import { ARGUMENT_RULE_NAME, META_ARGUMENT_RULE_NAME } from "../../ruleNames";

const metaTypeNodeQuery = nodeQuery("/metaArgument/metaType!"),
      statementNodeQuery = nodeQuery("/metaArgument/statement!"),
      metaTypeTerminalNodeQuery = nodeQuery("/metaType/@meta-type");

class StatementNodesVerifier extends NodesVerifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, context, verifyAhead) {
    let nonTerminalNodeVerified = false;

    const nonTerminalNode = nonTerminalNodeA, ///
          combinatorNonTerminalNode = nonTerminalNodeB, ///
          ruleName = nonTerminalNode.getRuleName(), ///
          combinatorRuleName = combinatorNonTerminalNode.getRuleName(); ///

    if (ruleName === combinatorRuleName) {
      switch (ruleName) {
        case META_ARGUMENT_RULE_NAME: {
          const metaArgumentNode = nonTerminalNode, ///
                combinatorMetaargumentNode = combinatorNonTerminalNode, ///
                metaArgumentNodeVerified = this.verifyMetaargumentNode(metaArgumentNode, combinatorMetaargumentNode, context, verifyAhead);

          nonTerminalNodeVerified = metaArgumentNodeVerified; ///

          break;
        }

        case ARGUMENT_RULE_NAME: {
          const argumentNode = nonTerminalNode, ///
                constructorArgumentNode = combinatorNonTerminalNode, ///
                argumentNodeVerified = termNodesVerifier.verifyArgumentNode(argumentNode, constructorArgumentNode, context, verifyAhead);

          nonTerminalNodeVerified = argumentNodeVerified; ///

          break;
        }

        default: {
          nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, context, verifyAhead);

          break;
        }
      }
    }

    return nonTerminalNodeVerified;
  }

  verifyMetaargumentNode(metaArgumentNode, combinatorMetaargumentNode, context, verifyAhead) {
    let metaArgumentNodeVerified = false;

    const metaArgumentString = context.nodeAsString(metaArgumentNode);

    const statementNode = statementNodeQuery(metaArgumentNode),
          combinatorMetaTYpeNode = metaTypeNodeQuery(combinatorMetaargumentNode);

    if (statementNode === null) {
      context.debug(`Expected a statement but got a '${metaArgumentString}' meta-type.`, metaArgumentNode);
    } else {
      if (combinatorMetaTYpeNode === null) {
        const combinatorMetaargumentString = context.nodeAsString(combinatorMetaargumentNode);

        context.debug(`Expected a meta-type but got a '${combinatorMetaargumentString}' statement.`, metaArgumentNode);
      } else {
        const combinatorMetaTypeTerminalNode = metaTypeTerminalNodeQuery(combinatorMetaTYpeNode),
              content = combinatorMetaTypeTerminalNode.getContent(),
              contentStatementMetaType = (content === STATEMENT_META_TYPE);

        if (!contentStatementMetaType) {
          context.debug(`Expected the meta-type of the combinator to be '${STATEMENT_META_TYPE}' but got '${content}' instead.`, metaArgumentNode);
        } else {
          const verifiedAhead = verifyAhead();

          metaArgumentNodeVerified = verifiedAhead; ///
        }
      }
    }

    return metaArgumentNodeVerified;
  }
}

const statementNodesVerifier = new StatementNodesVerifier();

export default statementNodesVerifier;
