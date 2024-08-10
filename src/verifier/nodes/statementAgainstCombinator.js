"use strict";

import NodesVerifier from "../../verifier/nodes";
import termAgainstConstructorNodesVerifier from "../../verifier/nodes/termAgainstConstructor";

import { nodeQuery } from "../../utilities/query";
import { STATEMENT_META_TYPE } from "../../metaTypes";
import { ARGUMENT_RULE_NAME, META_ARGUMENT_RULE_NAME } from "../../ruleNames";

const metaTypeNodeQuery = nodeQuery("/metaArgument/metaType!"),
      statementNodeQuery = nodeQuery("/metaArgument/statement!"),
      metaTypeTerminalNodeQuery = nodeQuery("/metaType/@meta-type");

class StatementAgainstCombinatorNodesVerifier extends NodesVerifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, verifyAhead) {
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
                metaArgumentNodeVerified = this.verifyMetaargumentNode(metaArgumentNode, combinatorMetaargumentNode, localContext, verifyAhead);

          nonTerminalNodeVerified = metaArgumentNodeVerified; ///

          break;
        }

        case ARGUMENT_RULE_NAME: {
          const argumentNode = nonTerminalNode, ///
                constructorArgumentNode = combinatorNonTerminalNode, ///
                argumentNodeVerified = termAgainstConstructorNodesVerifier.verifyArgumentNode(argumentNode, constructorArgumentNode, localContext, verifyAhead);

          nonTerminalNodeVerified = argumentNodeVerified; ///

          break;
        }

        default: {
          nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, verifyAhead);

          break;
        }
      }
    }

    return nonTerminalNodeVerified;
  }

  verifyMetaargumentNode(metaArgumentNode, combinatorMetaargumentNode, localContext, verifyAhead) {
    let metaArgumentNodeVerified = false;

    const metaArgumentString = localContext.nodeAsString(metaArgumentNode);

    const statementNode = statementNodeQuery(metaArgumentNode),
          combinatorMetaTYpeNode = metaTypeNodeQuery(combinatorMetaargumentNode);

    if (statementNode === null) {
      localContext.debug(`Expected a statement but got a '${metaArgumentString}' meta-type.`, metaArgumentNode);
    } else {
      if (combinatorMetaTYpeNode === null) {
        const combinatorMetaargumentString = localContext.nodeAsString(combinatorMetaargumentNode);

        localContext.debug(`Expected a meta-type but got a '${combinatorMetaargumentString}' statement.`, metaArgumentNode);
      } else {
        const combinatorMetaTypeTerminalNode = metaTypeTerminalNodeQuery(combinatorMetaTYpeNode),
              content = combinatorMetaTypeTerminalNode.getContent(),
              contentStatementMetaType = (content === STATEMENT_META_TYPE);

        if (!contentStatementMetaType) {
          localContext.debug(`Expected the meta-type of the combinator to be '${STATEMENT_META_TYPE}' but got '${content}' instead.`, metaArgumentNode);
        } else {
          const verifiedAhead = verifyAhead();

          metaArgumentNodeVerified = verifiedAhead; ///
        }
      }
    }

    return metaArgumentNodeVerified;
  }
}

const statementAgainstCombinatorNodesVerifier = new StatementAgainstCombinatorNodesVerifier();

export default statementAgainstCombinatorNodesVerifier;
