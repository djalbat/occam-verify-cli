"use strict";

import { queryUtilities } from "occam-furtle";

import { termFromTermNode, statementFromStatementNode } from "../utilities/element";
import { ruleFromRuleNode,
         errorFromErrorNode,
         axiomFromAxiomNode,
         lemmaFromLemmaNode,
         sectionFromSectionNode,
         theoremFromTheoremNode,
         metaLemmaFromMetaLemmaNode,
         conjectureFromConjectureNode,
         metatheoremFromMetatheoremNode,
         variableDeclarationFromVariableDeclarationNode,
         simpleTypeDeclarationFromSimpleTypeDeclarationNode,
         typePrefixDeclarationFromTypePrefixDeclarationNode,
         combinatorDeclarationFromCombinatorDeclarationNode,
         constructorDeclarationFromConstructorDeclarationNode,
         complexTypeDeclarationFromComplexTypeDeclarationNode,
         metavariableDeclarationFromMetavariableDeclarationNode } from "../utilities/element";

const { nodeQuery } = queryUtilities;

const nonTerminalNodeQuery = nodeQuery("/*");

const ruleNodeQuery = nodeQuery("/rule"),
      termNodeQuery = nodeQuery("/term"),
      typeNodeQuery = nodeQuery("/type"),
      errorNodeQuery = nodeQuery("/error"),
      axiomNodeQuery = nodeQuery("/axiom"),
      lemmaNodeQuery = nodeQuery("/lemma"),
      sectionNodeQuery = nodeQuery("/section"),
      theoremNodeQuery = nodeQuery("/theorem"),
      metaLemmaNodeQuery = nodeQuery("/metaLemma"),
      statementNodeQuery = nodeQuery("/statement"),
      conjectureNodeQuery = nodeQuery("/conjecture"),
      metatheoremNodeQuery = nodeQuery("/metatheorem"),
      variableDeclarationNodeQuery = nodeQuery("/variableDeclaration"),
      combinatorDeclarationNodeQuery = nodeQuery("/combinatorDeclaration"),
      simpleTypeDeclarationNodeQuery = nodeQuery("/simpleTypeDeclaration"),
      typePrefixDeclarationNodeQuery = nodeQuery("/typePrefixDeclaration"),
      constructorDeclarationNodeQuery = nodeQuery("/constructorDeclaration"),
      complexTypeDeclarationNodeQuery = nodeQuery("/complexTypeDeclaration"),
      metavariableDeclarationNodeQuery = nodeQuery("/metavariableDeclaration");

class Pass {
  run(node, ...remainingArguments) {
    let success;

    const visited = this.visitNode(node, ...remainingArguments);

    success = visited;  ///

    return success;
  }

  descend(childNodes, ...remainingArguments) {
    let descended = false;

    const visited = childNodes.every((childNode) => {
      const node = childNode, ///
            visited = this.visitNode(node, ...remainingArguments);

      if (visited) {
        return true;
      }
    });

    if (visited) {
      descended = true;
    }

    return descended;
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
    const visited = true;

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

        const error = errorFromErrorNode(errorNode, context),
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

        const rule = ruleFromRuleNode(ruleNode, context),
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

        const axiom = axiomFromAxiomNode(axiomNode, context),
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

        const lemma = lemmaFromLemmaNode(lemmaNode, context),
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

        const section = sectionFromSectionNode(sectionNode, context),
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

        const theorem = theoremFromTheoremNode(theoremNode, context),
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

        const metaLemma = metaLemmaFromMetaLemmaNode(metaLemmaNode, context),
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

        const conjecture = conjectureFromConjectureNode(conjectureNode, context),
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

        const metatheorem = metatheoremFromMetatheoremNode(metatheoremNode, context),
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

        const variableDeclaration = variableDeclarationFromVariableDeclarationNode(variableDeclarationNode, context),
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

        const simpleTypeDeclaration = simpleTypeDeclarationFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context),
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

        const typePrefixDeclaration = typePrefixDeclarationFromTypePrefixDeclarationNode(typePrefixDeclarationNode, context),
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

        const combinatorDeclaration = combinatorDeclarationFromCombinatorDeclarationNode(combinatorDeclarationNode, context),
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

        const constructorDeclaration = constructorDeclarationFromConstructorDeclarationNode(constructorDeclarationNode, context),
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

        const complexTypeDeclaration = complexTypeDeclarationFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context),
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

        const metavariableDeclaration = metavariableDeclarationFromMetavariableDeclarationNode(metavariableDeclarationNode, context),
              metavariableDeclarationVerifies = metavariableDeclaration.verify();

        if (metavariableDeclarationVerifies) {
          success = true;
        }

        return success;
      }
    }
  ];
}

class ConbinatorPass extends Pass {
  static maps = [
    {
      nodeQuery: statementNodeQuery,
      run: (statementNode, context) => {
        let success = false;

        const statement = statementFromStatementNode(statementNode, context),
              assignments = null,
              stated = false,
              statementValidates = statement.validate(assignments, stated, context);

        if (statementValidates) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: termNodeQuery,
      run: (termNode, context) => {
        let success = false;

        const term = termFromTermNode(termNode, context),
              termValidates = term.validate(context, () => {
                const verifiesAhead = true;

                return verifiesAhead;
              });

        if (termValidates) {
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
      run: (termNode, context) => {
        let success = false;

        const term = termFromTermNode(termNode, context),
              termValidates = term.validate(context, () => {
                const verifiesAhead = true;

                return verifiesAhead;
              });

        if (termValidates) {
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

const topLevelPass = new TopLevelPass(),
      combinatorPass = new ConbinatorPass(),
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

export function verifyCombinator(combintot) {
  const context = combintot.getContext(),
        statement = combintot.getStatement(),
        statementNode = statement.getNode(),
        nonTerminalNode = statementNode, ///
        childNodes = nonTerminalNode.getChildNodes(),
        descended = combinatorPass.descend(childNodes, context),
        combinatorVerifies = descended;  ///

  return combinatorVerifies;
}

export function verifyConstrcctor(constructor) {
  const context = constructor.getContext(),
        term = constructor.getStatement(),
        termNode = term.getNode(),
        nonTerminalNode = termNode, ///
        childNodes = nonTerminalNode.getChildNodes(),
        descended = constructorPass.descend(childNodes, context),
        constrcctorVerifies = descended;  ///

  return constrcctorVerifies;
}
