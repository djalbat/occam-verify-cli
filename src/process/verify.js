"use strict";

import { nodeQuery } from "../utilities/query";
import { isLastRemainingArgumentFunction } from "../utilities/pass";
import statement from "../ontology/statement";
import ontology from "../ontology";

const nonTerminalNodeQuery = nodeQuery("/*");

const termNodeQuery = nodeQuery("/term"),
      typeNodeQuery = nodeQuery("/type"),
      statementNodeQuery = nodeQuery("/statement");

const errorNodeQuery = nodeQuery("/error"),
      ruleNodeQuery = nodeQuery("/rule"),
      axiomNodeQuery = nodeQuery("/axiom"),
      lemmaNodeQuery = nodeQuery("/lemma"),
      sectionNodeQuery = nodeQuery("/section"),
      theoremNodeQuery = nodeQuery("/theorem"),
      metaLemmaNodeQuery = nodeQuery("/metaLemma"),
      conjectureNodeQuery = nodeQuery("/conjecture"),
      metatheoremNodeQuery = nodeQuery("/metatheorem"),
      variableDeclarationNodeQuery = nodeQuery("/variableDeclaration"),
      combinatorDeclarationNodeQuery = nodeQuery("/combinatorDeclaration"),
      simpleTypeDeclarationNodeQuery = nodeQuery("/simpleTypeDeclaration"),
      typePrefixDeclarationNodeQuery = nodeQuery("/typePrefixDeclaration"),
      constructorDeclarationNodeQuery = nodeQuery("/constructorDeclaration"),
      complexTypeDeclarationNodeQuery = nodeQuery("/complexTypeDeclaration"),
      metavariableDeclarationNodeQuery = nodeQuery("/metavariableDeclaration");

export default class Pass {
  run(node, ...remainingArguments) {
    let success;

    const visited = this.visitNode(node, ...remainingArguments);

    success = visited;  ///

    return success;
  }

  descend(childNodes, ...remainingArguments) {
    let descendedAhead = false;

    const lastRemainingArgumentFunction = isLastRemainingArgumentFunction(remainingArguments);

    if (lastRemainingArgumentFunction) {
      const index = 0;

      descendedAhead = this.descendAhead(index, childNodes, ...remainingArguments); ///
    } else {
      const visited = childNodes.every((childNode) => {
        const node = childNode, ///
              visited = this.visitNode(node, ...remainingArguments);

        if (visited) {
          return true;
        }
      });

      if (visited) {
        descendedAhead = true;
      }
    }

    return descendedAhead;
  }

  descendAhead(index, childNodes, ...remainingArguments) {
    let descendedAhead = false;

    const descendAhead = remainingArguments.pop(), ///
          childNodesLength = childNodes.length;

    if (index === childNodesLength) {
      descendedAhead = descendAhead();
    } else {
      const childNode = childNodes[index],
            node = childNode, ///
            visited = this.visitNode(node, ...remainingArguments, () => {
              remainingArguments.push(descendAhead);

              const aheadIndex = index + 1,
                    descendedAhead = this.descendAhead(aheadIndex, childNodes, ...remainingArguments);

              return descendedAhead;
            });

      if (visited) {
        descendedAhead = true;
      }
    }

    return descendedAhead;
  }

  visitNode(node, ...remainingArguments) {
    let visited;

    const nodeTerminalNode = node.isTerminalNode();

    if (nodeTerminalNode) {
      const terminalNode = node;  ///

      visited = this.visitTerminalNode(terminalNode, ...remainingArguments);
    } else {
      const nonTerminalNode = node;  ///

      visited = this.visitNonTerminalNode(nonTerminalNode, ...remainingArguments);
    }

    return visited;
  }

  visitTerminalNode(terminalNode, ...remainingArguments) {
    let visited = false;

    const lastRemainingArgumentFunction = isLastRemainingArgumentFunction(remainingArguments);

    if (lastRemainingArgumentFunction) {
      const descendAhead = remainingArguments.pop(), ///
            descendedAhead = descendAhead();

      if (descendedAhead) {
        visited = true;
      }

      remainingArguments.push(descendAhead);
    } else {
      visited = true;
    }

    return visited;
  }

  visitNonTerminalNode(nonTerminalNode, ...remainingArguments) {
    let visited = false;

    let { maps } = this.constructor;

    maps = [ ///
      ...maps,
      {
        nodeQuery: nonTerminalNodeQuery,
        run: (node, ...remainingArguments) => {
          let visited = false;

          const childNodes = nonTerminalNode.getChildNodes(), ///
                descended = this.descend(childNodes, ...remainingArguments);

          if (descended) {
            visited = true;
          }

          return visited;
        }
      }
    ]

    maps.some((map) => {
      const { nodeQuery, run } = map;

      const node = nodeQuery(nonTerminalNode);

      if (node !== null) {
        const success = run(node, ...remainingArguments);

        visited = success;

        return true;
      }
    });

    return visited;
  }
}

class TopLevelPass extends Pass {
  static maps = [
    {
      nodeQuery: errorNodeQuery,
      run: (errorNode, context) => {
        let success = false;

        const { Error } = ontology,
              error = Error.fromErrorNode(errorNode, context),
              errorVerifies = error.verify();

        if (errorVerifies) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: ruleNodeQuery,
      run: (ruleNode, context) => {
        let success = false;

        const { Rule } = ontology,
              rule = Rule.fromRuleNode(ruleNode, context),
              ruleVerifies = rule.verify();

        if (ruleVerifies) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: axiomNodeQuery,
      run: (axiomNode, context) => {
        let success = false;

        const { Axiom } = ontology,
              axiom = Axiom.fromAxiomNode(axiomNode, context),
              axiomVerifies = axiom.verify();

        if (axiomVerifies) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: lemmaNodeQuery,
      run: (lemmaNode, context) => {
        let success = false;

        const { Lemma } = ontology,
              lemma = Lemma.fromLemmaNode(lemmaNode, context),
              lemmaVerifies = lemma.verify();

        if (lemmaVerifies) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: sectionNodeQuery,
      run: (sectionNode, context) => {
        let success = false;

        const { Section } = ontology,
              section = Section.fromSectionNode(sectionNode, context),
              sectionVerifies = section.verify();

        if (sectionVerifies) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: theoremNodeQuery,
      run: (theoremNode, context) => {
        let success = false;

        const { Theorem } = ontology,
              theorem = Theorem.fromTheoremNode(theoremNode, context),
              theoremVerifies = theorem.verify();

        if (theoremVerifies) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: metaLemmaNodeQuery,
      run: (metaLemmaNode, context) => {
        let success = false;

        const { MetaLemma } = ontology,
              metaLemma = MetaLemma.fromMetaLemmaNode(metaLemmaNode, context),
              metaLemmaVerifies = metaLemma.verify();

        if (metaLemmaVerifies) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: conjectureNodeQuery,
      run: (conjectureNode, context) => {
        let success = false;

        const { Conjecture } = ontology,
              conjecture = Conjecture.fromConjectureNode(conjectureNode, context),
              conjectureVerifies = conjecture.verify();

        if (conjectureVerifies) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: metatheoremNodeQuery,
      run: (metatheoremNode, context) => {
        let success = false;

        const { Metatheorem } = ontology,
              metatheorem = Metatheorem.fromMetatheoremNode(metatheoremNode, context),
              metatheoremVerifies = metatheorem.verify();

        if (metatheoremVerifies) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: variableDeclarationNodeQuery,
      run: (variableDeclarationNode, context) => {
        let success = false;

        const { VariableDeclaration } = ontology,
              variableDeclaration = VariableDeclaration.fromVariableDeclarationNode(variableDeclarationNode, context),
              variableDeclarationVerifies = variableDeclaration.verify();

        if (variableDeclarationVerifies) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: simpleTypeDeclarationNodeQuery,
      run: (simpleTypeDeclarationNode, context) => {
        let success = false;

        const { SimpleTypeDeclaration } = ontology,
              simpleTypeDeclaration = SimpleTypeDeclaration.fromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context),
              simpleTypeDeclarationVerifies = simpleTypeDeclaration.verify();

        if (simpleTypeDeclarationVerifies) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: typePrefixDeclarationNodeQuery,
      run: (typePrefixDeclarationNode, context) => {
        let success = false;

        const { TypePrefixDeclaration } = ontology,
              typePrefixDeclaration = TypePrefixDeclaration.fromTypePrefixDeclarationNode(typePrefixDeclarationNode, context),
              typePrefixDeclarationVerifies = typePrefixDeclaration.verify();

        if (typePrefixDeclarationVerifies) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: combinatorDeclarationNodeQuery,
      run: (combinatorDeclarationNode, context) => {
        let success = false;

        const { CombinatorDeclaration } = ontology,
              combinatorDeclaration = CombinatorDeclaration.fromCombinatorDeclarationNode(combinatorDeclarationNode, context),
              combinatorDeclarationVerifies = combinatorDeclaration.verify();

        if (combinatorDeclarationVerifies) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: constructorDeclarationNodeQuery,
      run: (constructorDeclarationNode, context) => {
        let success = false;

        const { ConstructorDeclaration } = ontology,
              constructorDeclaration = ConstructorDeclaration.fromConstructorDeclarationNode(constructorDeclarationNode, context),
              constructorDeclarationVerifies = constructorDeclaration.verify();

        if (constructorDeclarationVerifies) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: complexTypeDeclarationNodeQuery,
      run: (complexTypeDeclarationNode, context) => {
        let success = false;

        const { ComplexTypeDeclaration } = ontology,
              complexTypeDeclaration = ComplexTypeDeclaration.fromComplexTypeDeclarationNode(complexTypeDeclarationNode, context),
              complexTypeDeclarationVerifies = complexTypeDeclaration.verify();

        if (complexTypeDeclarationVerifies) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: metavariableDeclarationNodeQuery,
      run: (metavariableDeclarationNode, context) => {
        let success = false;

        const { MetavariableDeclaration } = ontology,
              metavariableDeclaration = MetavariableDeclaration.fromMetavariableDeclarationNode(metavariableDeclarationNode, context),
              metavariableDeclarationVerifies = metavariableDeclaration.verify();

        if (metavariableDeclarationVerifies) {
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
      nodeQuery: statementNodeQuery,
      run: (statementNode, context) => {
        let success = false;

        const { Statement } = ontology,
              statement = Statement.fromStatementNode(statementNode, context),
              assignments = null,
              stated = false,
              statementVerifies = statement.verify(assignments, stated, context);

        if (statementVerifies) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: termNodeQuery,
      run: (termNode, context) => {
        let success = false;

        const { Term } = ontology,
              term = Term.fromTermNode(termNode, context),
              termVerifies = term.verify(context, () => {
                const verifiesAhead = true;

                return verifiesAhead;
              });

        if (termVerifies) {
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

class ConstructorPass extends Pass {
  static maps = [
    {
      nodeQuery: termNodeQuery,
      run: (termNode, context, verifyAhead) => {
        let success = false;

        const { Term } = ontology,
              term = Term.fromTermNode(termNode, context),
              termVerifies = term.verify(context, verifyAhead);

        if (termVerifies) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: typeNodeQuery,
      run: (typeNode, context, verifyAhead) => {
        let success = false;

        const nominalTypeName = typeNode.getNominalTypeName(),
              typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);

        if (typePresent) {
          const verifiesAhead = verifyAhead();

          if (verifiesAhead) {
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

const topLevelPass = new TopLevelPass(),
      combinatorPass = new CombinatorPass(),
      constructorPass = new ConstructorPass();

export function verifyFile(fileNode, context) {
  let fileVerifies = false;

  const node = fileNode, ///
        sucess = topLevelPass.run(node, context);

  if (sucess) {
    fileVerifies = true;
  }

  return fileVerifies;
}

export function verifyTerm(termNode, context) {
  let termVerifies = false;

  const node = termNode, ///
        sucess = constructorPass.run(node, context);

  if (sucess) {
    termVerifies = true;
  }

  return termVerifies;
}

export function verifyStatement(statementNode, context) {
  let statementVerifies = false;

  const node = statementNode, ///
        sucess = combinatorPass.run(node, context);

  if (sucess) {
    statementVerifies = true;
  }

  return statementVerifies;
}
