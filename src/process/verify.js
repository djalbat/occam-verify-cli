"use strict";

import { AsyncPass, StandardPass, queryUtilities } from "occam-languages"

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

class TopLevelPass extends AsyncPass {
  static maps = [
    {
      nodeQuery: errorNodeQuery,
      run: async (errorNode, context) => {
        let success = false;

        const error = errorFromErrorNode(errorNode, context),
              errorVerifies = await error.verify();

        if (errorVerifies) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: ruleNodeQuery,
      run: async (ruleNode, context) => {
        let success = false;

        const rule = ruleFromRuleNode(ruleNode, context),
              ruleVerifies = await rule.verify();

        if (ruleVerifies) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: axiomNodeQuery,
      run: async (axiomNode, context) => {
        let success = false;

        const axiom = axiomFromAxiomNode(axiomNode, context),
              axiomVerifies = await axiom.verify();

        if (axiomVerifies) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: lemmaNodeQuery,
      run: async (lemmaNode, context) => {
        let success = false;

        const lemma = lemmaFromLemmaNode(lemmaNode, context),
              lemmaVerifies = await lemma.verify();

        if (lemmaVerifies) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: sectionNodeQuery,
      run: async (sectionNode, context) => {
        let success = false;

        const section = sectionFromSectionNode(sectionNode, context),
              sectionVerifies = await section.verify();

        if (sectionVerifies) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: theoremNodeQuery,
      run: async (theoremNode, context) => {
        let success = false;

        const theorem = theoremFromTheoremNode(theoremNode, context),
              theoremVerifies = await theorem.verify();

        if (theoremVerifies) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: metaLemmaNodeQuery,
      run: async (metaLemmaNode, context) => {
        let success = false;

        const metaLemma = metaLemmaFromMetaLemmaNode(metaLemmaNode, context),
              metaLemmaVerifies = await metaLemma.verify();

        if (metaLemmaVerifies) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: conjectureNodeQuery,
      run: async (conjectureNode, context) => {
        let success = false;

        const conjecture = conjectureFromConjectureNode(conjectureNode, context),
              conjectureVerifies = await conjecture.verify();

        if (conjectureVerifies) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: metatheoremNodeQuery,
      run: async (metatheoremNode, context) => {
        let success = false;

        const metatheorem = metatheoremFromMetatheoremNode(metatheoremNode, context),
              metatheoremVerifies = await metatheorem.verify();

        if (metatheoremVerifies) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: variableDeclarationNodeQuery,
      run: async (variableDeclarationNode, context) => {
        let success = false;

        const variableDeclaration = variableDeclarationFromVariableDeclarationNode(variableDeclarationNode, context),
              variableDeclarationVerifies = await variableDeclaration.verify();

        if (variableDeclarationVerifies) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: simpleTypeDeclarationNodeQuery,
      run: async (simpleTypeDeclarationNode, context) => {
        let success = false;

        const simpleTypeDeclaration = simpleTypeDeclarationFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context),
              simpleTypeDeclarationVerifies = await simpleTypeDeclaration.verify();

        if (simpleTypeDeclarationVerifies) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: typePrefixDeclarationNodeQuery,
      run: async (typePrefixDeclarationNode, context) => {
        let success = false;

        const typePrefixDeclaration = typePrefixDeclarationFromTypePrefixDeclarationNode(typePrefixDeclarationNode, context),
              typePrefixDeclarationVerifies = await typePrefixDeclaration.verify();

        if (typePrefixDeclarationVerifies) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: combinatorDeclarationNodeQuery,
      run: async (combinatorDeclarationNode, context) => {
        let success = false;

        const combinatorDeclaration = combinatorDeclarationFromCombinatorDeclarationNode(combinatorDeclarationNode, context),
              combinatorDeclarationVerifies = await combinatorDeclaration.verify();

        if (combinatorDeclarationVerifies) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: constructorDeclarationNodeQuery,
      run: async (constructorDeclarationNode, context) => {
        let success = false;

        const constructorDeclaration = constructorDeclarationFromConstructorDeclarationNode(constructorDeclarationNode, context),
              constructorDeclarationVerifies = await constructorDeclaration.verify();

        if (constructorDeclarationVerifies) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: complexTypeDeclarationNodeQuery,
      run: async (complexTypeDeclarationNode, context) => {
        let success = false;

        const complexTypeDeclaration = complexTypeDeclarationFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context),
              complexTypeDeclarationVerifies = await complexTypeDeclaration.verify();

        if (complexTypeDeclarationVerifies) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: metavariableDeclarationNodeQuery,
      run: async (metavariableDeclarationNode, context) => {
        let success = false;

        const metavariableDeclaration = metavariableDeclarationFromMetavariableDeclarationNode(metavariableDeclarationNode, context),
              metavariableDeclarationVerifies = await metavariableDeclaration.verify();

        if (metavariableDeclarationVerifies) {
          success = true;
        }

        return success;
      }
    }
  ];
}

class ConbinatorPass extends StandardPass {
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
                const validatesForwards = true;

                return validatesForwards;
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

class ConstructorPass extends StandardPass {
  static maps = [
    {
      nodeQuery: termNodeQuery,
      run: (termNode, context) => {
        let success = false;

        const term = termFromTermNode(termNode, context),
              termValidates = term.validate(context, () => {
                const validatesForwards = true;

                return validatesForwards;
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

export async function verifyFile(fileNode, context) {
  let fileVerifies = false;

  const node = fileNode, ///
        sucess = await topLevelPass.run(node, context);

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
