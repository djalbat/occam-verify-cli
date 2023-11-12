"use strict";

import NodesVerifier from "../../verifier/nodes";

import { nodeQuery } from "../../utilities/query";
import { termNodesVerifier } from "../../verify/term";
import { STATEMENT_META_TYPE } from "../../metaTypes";
import { ARGUMENT_RULE_NAME, META_ARGUMENT_RULE_NAME } from "../../ruleNames";

const metaTypeNodeQuery = nodeQuery("/metaArgument/metaType!"),
      statementNodeQuery = nodeQuery("/metaArgument/statement!"),
      metaTypeTerminalNodeQuery = nodeQuery("/metaType/@meta-type");

class StatementNodesVerifier extends NodesVerifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, context, verifyAhead) {
    let nonTerminalNodeVerified = false;

    const nonTerminalNode = nonTerminalNodeA, ///
          combinatorNonTerminalNode = nonTerminalNodeB; ///

    const ruleName = nonTerminalNode.getRuleName(), ///
          combinatorRuleName = combinatorNonTerminalNode.getRuleName(); ///

    if (ruleName === combinatorRuleName) {
      switch (ruleName) {
        case ARGUMENT_RULE_NAME: {
          const argumentNode = nonTerminalNode, ///
                constructorArgumentNode = combinatorNonTerminalNode, ///
                argumentNodeVerified = termNodesVerifier.verifyArgumentNode(argumentNode, constructorArgumentNode, context, verifyAhead);

          nonTerminalNodeVerified = argumentNodeVerified; ///

          break;
        }

        case META_ARGUMENT_RULE_NAME: {
          const metaArgumentNode = nonTerminalNode, ///
                combinatorMetaargumentNode = combinatorNonTerminalNode, ///
                metaArgumentVerified = verifyMetaargument(metaArgumentNode, combinatorMetaargumentNode, context, verifyAhead),
                metaArgumentNodeVerified = metaArgumentVerified;  ///

          nonTerminalNodeVerified = metaArgumentNodeVerified; ///

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
}

const statementNodesVerifier = new StatementNodesVerifier();

export default statementNodesVerifier;

function verifyMetaargument(metaArgumentNode, combinatorMetaargumentNode, context, verifyAhead) {
  let metaArgumentVerified = false;

  const metaArgumentString = context.nodeAsString(metaArgumentNode);

  context.trace(`Verifying the '${metaArgumentString}' metaargument...`);

  const statementNode = statementNodeQuery(metaArgumentNode),
        combinatorMetaTYpeNode = metaTypeNodeQuery(combinatorMetaargumentNode);

  if (statementNode === null) {
    context.info(`Expected a statement but got a '${metaArgumentString}' meta-type.`, metaArgumentNode);
  } else {
    if (combinatorMetaTYpeNode === null) {
      const combinatorMetaargumentString = context.nodeAsString(combinatorMetaargumentNode);

      context.info(`Expected a meta-type but got a '${combinatorMetaargumentString}' statement.`, metaArgumentNode);
    } else {
      const combinatorMetaTypeTerminalNode = metaTypeTerminalNodeQuery(combinatorMetaTYpeNode),
            content = combinatorMetaTypeTerminalNode.getContent(),
            contentStatementMetaType = (content === STATEMENT_META_TYPE);

      if (!contentStatementMetaType) {
        context.info(`Expected the meta-type to be 'Statement' but got '${content}'.`, metaArgumentNode);
      } else {
        metaArgumentVerified = true;
      }
    }
  }

  if (metaArgumentVerified) {
    context.debug(`...verified the '${metaArgumentString}' metaargument.`);
  }

  return metaArgumentVerified;
}
