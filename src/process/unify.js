"use strict";

import elements from "../elements";

import { nodeQuery } from "../utilities/query";
import { terminalNodeMapFromNodes, areTerminalNodeMapsEqual, isLastRemainingArgumentFunction } from "../utilities/pass";

const nonTerminalNodeQuery = nodeQuery("/*");

const typeNodeQuery = nodeQuery("/type"),
      termNodeQuery = nodeQuery("/term"),
      frameNodeQuery = nodeQuery("/frame"),
      metaTypeNodeQuery = nodeQuery("/metaType"),
      statementNodeQuery = nodeQuery("/statement"),
      termVariableNodeQuery = nodeQuery("/term/variable!"),
      statementMetavariableNodeQuery = nodeQuery("/statement/metavariable!"),
      assumptionMetavariableNodeQuery = nodeQuery("/assumption/metavariable!"),
      frameAssumptionMetavariableNodeQuery = nodeQuery("/frame/assumption!/metavariable!");

class Pass {
  run(generalNode, specificNode, ...remainingArguments) {
    let success;

    const visited = this.visitNode(generalNode, specificNode, ...remainingArguments);

    success = visited;  ///

    return success;
  }

  descend(generalChildNodes, specificChildNodes, ...remainingArguments) {
    let descendedAhead = false;

    const generalChildNodesLength = generalChildNodes.length,
          specificChildNodesLength = specificChildNodes.length;

    if (generalChildNodesLength === specificChildNodesLength) {
      const specificTerminalNodeMap = terminalNodeMapFromNodes(specificChildNodes),
            generalTerminalNodeMap = terminalNodeMapFromNodes(generalChildNodes),
            terminalNodeMapsEqual = areTerminalNodeMapsEqual(generalTerminalNodeMap, specificTerminalNodeMap);

      if (terminalNodeMapsEqual) {
        const lastRemainingArgumentFunction = isLastRemainingArgumentFunction(remainingArguments);

        if (lastRemainingArgumentFunction) {
          const index = 0;

          descendedAhead = this.descendAhead(index, generalChildNodes, specificChildNodes,...remainingArguments);
        } else {
          const visited = generalChildNodes.every((generalChildNode, index) => {
            const specificChildNode = specificChildNodes[index],
                  specificNode = specificChildNode, ///
                  generalNode = generalChildNode, ///
                  visited = this.visitNode(generalNode, specificNode, ...remainingArguments);

            if (visited) {
              return true;
            }
          });

          if (visited) {
            descendedAhead = true;
          }
        }
      }
    }

    return descendedAhead;
  }

  descendAhead(index, generalChildNodes, specificChildNodes, ...remainingArguments) {
    let descendedAhead = false;

    const descendAhead = remainingArguments.pop(), ///
          generalChildNodesLength = generalChildNodes.length;

    if (index === generalChildNodesLength) {
      descendedAhead = descendAhead();
    } else {
      const generalChildNode = generalChildNodes[index],
            specificChildNode = specificChildNodes[index],
            generalNode = generalChildNode, ///
            specificNode = specificChildNode, ///
            visited = this.visitNode(generalNode, specificNode, ...remainingArguments, () => {
              remainingArguments.push(descendAhead); ///

              const aheadIndex = index + 1,
                    descendedAhead = this.descendAhead(aheadIndex, generalChildNodes, specificChildNodes, ...remainingArguments);

              return descendedAhead;
            });

      if (visited) {
        descendedAhead = true;
      }
    }

    return descendedAhead;
  }

  visitNode(generalNode, specificNode, ...remainingArguments) {
    let visited = false;

    const generalNodeTerminalNode = generalNode.isTerminalNode(),
          specificNodeTerminalNode = specificNode.isTerminalNode(),
          generalNodeNonTerminalNode = generalNode.isNonTerminalNode(),
          specificNodeNonTerminalNode = specificNode.isNonTerminalNode();

    if (false) {
      ///
    } else if (generalNodeTerminalNode && specificNodeTerminalNode) {
      const generalTerminalNode = generalNode,  ///
            specificTerminalNode = specificNode;  ///

      visited = this.visitTerminalNode(generalTerminalNode, specificTerminalNode, ...remainingArguments);
    } else if (generalNodeNonTerminalNode && specificNodeNonTerminalNode) {
      const generalNonTerminalNode = generalNode,  ///
            specificNonTerminalNode = specificNode; ///

      visited = this.visitNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, ...remainingArguments);
    }

    return visited;
  }

  visitTerminalNode(generalTerminalNode, specificTerminalNode, ...remainingArguments) { ///
    let visited = false;

    const lastRemainingArgumentFunction = isLastRemainingArgumentFunction(remainingArguments);

    if (lastRemainingArgumentFunction) {
      const descendAhead = remainingArguments.pop(),
            descendedAhead = descendAhead();

      if (descendAhead) {
        visited = descendedAhead;  ///
      }

      remainingArguments.push(descendAhead);
    } else {
      visited = true;
    }

    return visited;
  }

  visitNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, ...remainingArguments) {
    let visited = false;

    let { maps } = this.constructor;

    maps = [ ///
      ...maps,
      {
        generalNodeQuery: nonTerminalNodeQuery,
        specificNodeQuery: nonTerminalNodeQuery,
        run: (generalNode, specificNode, ...remainingArguments) => {
          let visited = false;

          const generalNonTerminalNodeRuleName = generalNonTerminalNode.getRuleName(), ///
                specificNonTerminalNodeRuleName = specificNonTerminalNode.getRuleName(); ///

          if (generalNonTerminalNodeRuleName === specificNonTerminalNodeRuleName) {
            const generalNonTerminalNodeChildNodes = generalNonTerminalNode.getChildNodes(),
                  specificNonTerminalNodeChildNodes = specificNonTerminalNode.getChildNodes(),
                  generalChildNodes = generalNonTerminalNodeChildNodes, ///
                  specificChildNodes = specificNonTerminalNodeChildNodes, ///
                  descended = this.descend(generalChildNodes, specificChildNodes, ...remainingArguments);

            if (descended) {
              visited = true;
            }
          }

          return visited;
        }
      }
    ]

    maps.some((map) => {
      const { generalNodeQuery, specificNodeQuery, run } = map;

      const generalNode = generalNodeQuery(generalNonTerminalNode),  ///
            specificNode = specificNodeQuery(specificNonTerminalNode);  ///

      if ((generalNode !== null) && (specificNode !== null)) {
        const success  = run(generalNode, specificNode, ...remainingArguments);

        visited = success;  ///

        return true;
      }
    });

    return visited;
  }
}

class MetaLevelPass extends Pass {
  static maps = [
    {
      generalNodeQuery: assumptionMetavariableNodeQuery,
      specificNodeQuery: assumptionMetavariableNodeQuery,
      run: (generalAssumptionMetavariableNode, specificAssumptionMetavariableNode, substitutions, generalContext, specificContext) => {
        let success = false;

        let context,
            metavariableNode;

        context = generalContext; ///

        metavariableNode = generalAssumptionMetavariableNode;  ///

        const metavariableName = metavariableNode.getMetavariableName(),
              metavariable = context.findMetavariableByMetavariableName(metavariableName);

        context = specificContext;  ///

        metavariableNode = specificAssumptionMetavariableNode; ///

        const reference = context.findReferenceByMetavariableNode(metavariableNode),
              referenceUnifies = metavariable.unifyReference(reference, substitutions, generalContext, specificContext);

        if (referenceUnifies) {
          success = true;
        }

        return success;
      }
    },
    {
      generalNodeQuery: statementMetavariableNodeQuery,
      specificNodeQuery: statementNodeQuery,
      run: (generalStatementMetavariableNode, specificStatementNode, substitutions, generalContext, specificContext) => {
        let success = false;

        let context,
            statementNode;

        context = generalContext; ///

        const metavariableNode = generalStatementMetavariableNode,  ///
              metavariableName = metavariableNode.getMetavariableName(),
              metavariable = context.findMetavariableByMetavariableName(metavariableName),
              metavariableNodeParentNode = metavariableNode.getParentNode();

        statementNode = metavariableNodeParentNode; ///

        const frameSubstitutionNode = statementNode.getFrameSubstitutionNode(),
              termSubstitutionNode = statementNode.getTermSubstitutionNode(),
              substitutionNode = (frameSubstitutionNode || termSubstitutionNode),
              substitution = (substitutionNode !== null) ?
                               context.findSubstitutionBySubstitutionNode(substitutionNode) :
                                 null;

        context = specificContext; ///

        statementNode = specificStatementNode;  ///

        const statement = context.findStatementByStatementNode(statementNode),
              statementUnifies = metavariable.unifyStatement(statement, substitution, substitutions, generalContext, specificContext);

        if (statementUnifies) {
          success = true;
        }

        return success;
      }
    },
    {
      generalNodeQuery: frameAssumptionMetavariableNodeQuery,
      specificNodeQuery: frameNodeQuery,
      run: (generalFrameAssumptionMetavariableNode, specificFrameNode, substitutions, generalContext, specificContext) => {
        let success = false;

        const frameNode = specificFrameNode, ///
              metavariableNode = generalFrameAssumptionMetavariableNode,  ///
              metavariableName = metavariableNode.getMetavariableName();

        let context;

        context = generalContext; ///

        const metavariable = context.findMetavariableByMetavariableName(metavariableName);

        context = specificContext;  ///

        const frame = context.findFrameByFrameNode(frameNode),
              frameUnifies = metavariable.unifyFrame(frame, substitutions, generalContext, specificContext);

        if (frameUnifies) {
          success = true;
        }

        return success;
      }
    },
    {
      generalNodeQuery: termVariableNodeQuery,
      specificNodeQuery: termNodeQuery,
      run: (generalTermVariableNode, specificTermNode, substitutions, generalContext, specificContext) => {
        let success = false;

        const termNode = specificTermNode, ///
              variableNode = generalTermVariableNode, ///
              variableIdentifier = variableNode.getVariableIdentifier();

        let context;

        context = generalContext; ///

        const variable = context.findVariableByVariableIdentifier(variableIdentifier);

        context = specificContext;  ///

        const term = context.findTermByTermNode(termNode),
              termUnifies = variable.unifyTerm(term, substitutions, generalContext, specificContext);

        if (termUnifies) {
          success = true;
        }

        return success;
      }
    }
  ];
}

class CombinatorPass extends Pass {
  static maps = [
    {
      generalNodeQuery: metaTypeNodeQuery,
      specificNodeQuery: statementNodeQuery,
      run: (generalMetaTypeNode, specificStatementNode, assignments, stated, generalContext, specificContext) => {
        let success = false;

        const metaTypeNode = generalMetaTypeNode, ///
              statementNode = specificStatementNode; ///

        let context;

        context = generalContext; ///

        const metaTypeName = metaTypeNode.getMetaTypeName(),
              metaType = context.findMetaTypeByMetaTypeName(metaTypeName);

        context = specificContext;  ///

        const { Statement } = elements,
              statement = Statement.fromStatementNode(statementNode, context),
              statementVerifiesGivenType = statement.verifyGivenMetaType(metaType, assignments, stated, context);

        if (statementVerifiesGivenType) {
          success = true;
        }

        return success;
      }
    },
    {
      generalNodeQuery: metaTypeNodeQuery,
      specificNodeQuery: frameNodeQuery,
      run: (generalMetaTypeNode, specificFrameNode, assignments, stated, generalContext, specificContext) => {
        let success = false;

        const metaTypeNode = generalMetaTypeNode, ///
              frameNode = specificFrameNode; ///

        let context;

        context = generalContext; ///

        const metaTypeName = metaTypeNode.getMetaTypeName(),
              metaType = context.findMetaTypeByMetaTypeName(metaTypeName);

        context = specificContext;  ///

        const { Frame } = elements,
              frame = Frame.fromFrameNode(frameNode, context),
              frameVerifiesGivenType = frame.verifyGivenMetaType(metaType, assignments, stated, context);

        if (frameVerifiesGivenType) {
          success = true;
        }

        return success;
      }
    },
    {
      generalNodeQuery: typeNodeQuery,
      specificNodeQuery: termNodeQuery,
      run: (generalTypeNode, specificTermNode, assignments, stated, generalContext, specificContext) => {
        let success = false;

        const typeNode = generalTypeNode, ///
              termNode = specificTermNode, ///
              nominalTypeName = typeNode.getNominalTypeName();

        let context;

        context = generalContext; ///

        const type = context.findTypeByNominalTypeName(nominalTypeName);

        if (type !== null) {
          context = specificContext;  ///

          const { Term } = elements,
                term = Term.fromTermNode(termNode, context),
                termVerifiesGivenType = term.verifyGivenType(type, generalContext, specificContext);

          if (termVerifiesGivenType) {
            success = true;
          }
        }

        return success;
      }
    }
  ];
}

class ConstructorPass extends Pass {
  static maps = [
    {
      generalNodeQuery: typeNodeQuery,
      specificNodeQuery: termNodeQuery,
      run: (generalTypeNode, specificTermNode, generalContext, specificContext) => {
        let success = false;

        const typeNode = generalTypeNode, ///
              termNode = specificTermNode, ///
              nominalTypeName = typeNode.getNominalTypeName();

        let context;

        context = generalContext; ///

        const type = context.findTypeByNominalTypeName(nominalTypeName);

        if (type !== null) {
          context = specificContext;  ///

          const { Term } = elements,
                term = Term.fromTermNode(termNode, context),
                termVerifiesGivenType = term.verifyGivenType(type, generalContext, specificContext);

          if (termVerifiesGivenType) {
            success = true;
          }
        }

        return success;
      }
    }
  ];
}

class MetavariablePass extends Pass {
  static maps = [
    {
      generalNodeQuery: typeNodeQuery,
      specificNodeQuery: termNodeQuery,
      run: (generalTypeNode, specificTermNode, generalContext, specificContext) => {
        let success = false;

        const typeNode = generalTypeNode, ///
              termNode = specificTermNode, ///
              nominalTypeName = typeNode.getNominalTypeName(),
              type = generalContext.findTypeByNominalTypeName(nominalTypeName),
              context = specificContext, ///
              term = context.findTermByTermNode(termNode),
              termVerifiesGivenType = term.verifyGivenType(type, generalContext, specificContext);

        if (termVerifiesGivenType) {
          success = true;
        }

        return success;
      }
    }
  ];
}

class IntrinsicLevelPass extends Pass {
  static maps = [
    {
      generalNodeQuery: termVariableNodeQuery,
      specificNodeQuery: termNodeQuery,
      run: (generalTermVariableNode, specificTermNode, substitutions, generalContext, specificContext) => {
        let success = false;

        const termNode = specificTermNode, ///
              variableNode = generalTermVariableNode, ///
              variableIdentifier = variableNode.getVariableIdentifier();

        let context;

        context = generalContext; ///

        const variable = context.findVariableByVariableIdentifier(variableIdentifier);

        context = specificContext;  ///

        const term = context.findTermByTermNode(termNode),
              termUnifies = variable.unifyTerm(term, substitutions, generalContext, specificContext);

        if (termUnifies) {
          success = true;
        }

        return success;
      }
    }
  ];
}

const metaLevelPass = new MetaLevelPass(),
      combinatorPass = new CombinatorPass(),
      constructorPass = new ConstructorPass(),
      metavariablePass = new MetavariablePass(),
      intrinsicLevelPass = new IntrinsicLevelPass();

export function unifyStatement(generalStatement, specificStatement, substitutions, generalContext, specificContext) {
  let statementUnifies = false;

  const generalStatementNode = generalStatement.getNode(),
        specificStatementNode = specificStatement.getNode(),
        generalNode = generalStatementNode, ///
        specificNode = specificStatementNode,  ///
        success = metaLevelPass.run(generalNode, specificNode, substitutions, generalContext, specificContext);

  if (success) {
    statementUnifies = true;
  }

  return statementUnifies;
}

export function unifySubstitution(generalSubstitution, specificSubstitution, substitutions, generalContext, specificContext) {
  let substitutionUnifies = false;

  const generalSubstitutionNode = generalSubstitution.getNode(),
        specificSubstitutionNode = specificSubstitution.getNode(),
        generalNode = generalSubstitutionNode, ///
        specificNode = specificSubstitutionNode,  ///
        success = metaLevelPass.run(generalNode, specificNode, substitutions, generalContext, specificContext);

  if (success) {
    substitutionUnifies = true;
  }

  return substitutionUnifies;
}

export function unifyMetavariable(generalMetavariable, specificMetavariable, generalContext, specificContext) {
  let metavariableUnifies = false;

  const generalMetavariableNode = generalMetavariable.getNode(),
        specificMetavariableNode = specificMetavariable.getNode(),
        success = metavariablePass.run(generalMetavariableNode, specificMetavariableNode, generalContext, specificContext);

  if (success) {
    metavariableUnifies = true;
  }

  return metavariableUnifies;
}

export function unifyTermWithConstructor(term, constructor, context) {
  let termUnifiesWithConstructor = false;

  const termNode = term.getNode(),
        generalContext = context, ///
        specificContext = context,  ///
        constructorTerm = constructor.getTerm(),
        constructorTermNode = constructorTerm.getNode(),
        success = constructorPass.run(constructorTermNode, termNode, generalContext, specificContext);

  if (success) {
    termUnifiesWithConstructor = true;
  }

  return termUnifiesWithConstructor;
}

export function unifyStatementIntrinsically(generalStatement, specificStatement, substitutions, generalContext, specificContext) {
  let statementUnifiesIntrinsically = false;

  const generalStatementNode = generalStatement.getNode(),
        specificStatementNode = specificStatement.getNode(),
        generalNode = generalStatementNode, ///
        specificNode = specificStatementNode, ///
        success = intrinsicLevelPass.run(generalNode, specificNode, substitutions, generalContext, specificContext);

  if (success) {
    statementUnifiesIntrinsically = true;
  }

  return statementUnifiesIntrinsically;
}

export function unifyStatementWithCombinator(statement, combinator, assignments, stated, context) {
  let statementUnifiesWithCombinator = false;

  const statementNode = statement.getNode(),
        generalContext = context, ///
        specificContext = context,  ///
        combinatorStatement = combinator.getStatement(),
        combinatorStatementNode = combinatorStatement.getNode(),
        success = combinatorPass.run(combinatorStatementNode, statementNode, assignments, stated, generalContext, specificContext);

  if (success) {
    statementUnifiesWithCombinator = true;
  }

  return statementUnifiesWithCombinator;
}

export function unifyMetavariableIntrinsically(generalMetavariable, specificMetavariable, substitutions, generalContext, specificContext) {
  let metavariableUnifiesIntrinsically = false;

  const generalMetavariableNode = generalMetavariable.getNode(),
        specificMetavariableNode = specificMetavariable.getNode(),
        generalNode = generalMetavariableNode, ///
        specificNode = specificMetavariableNode, ///
        success = intrinsicLevelPass.run(generalNode, specificNode, substitutions, generalContext, specificContext);

  if (success) {
    metavariableUnifiesIntrinsically = true;
  }

  return metavariableUnifiesIntrinsically;
}
