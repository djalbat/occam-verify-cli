"use strict";

import { ZipPass, queryUtilities } from "occam-languages";

import { termFromTermNode, frameFromFrameNode, statementFromStatementNode } from "../utilities/element";

const { nodeQuery } = queryUtilities;

const typeNodeQuery = nodeQuery("/type"),
      termNodeQuery = nodeQuery("/term"),
      frameNodeQuery = nodeQuery("/frame"),
      metaTypeNodeQuery = nodeQuery("/metaType"),
      statementNodeQuery = nodeQuery("/statement"),
      termVariableNodeQuery = nodeQuery("/term/variable!"),
      frameAMetavariableNodeQuery = nodeQuery("/frame/metavariable!"),
      statementMetavariableNodeQuery = nodeQuery("/statement/metavariable!"),
      assumptionMetavariableNodeQuery = nodeQuery("/assumption/metavariable!");

class MetaLevelPass extends ZipPass {
  static maps = [
    {
      generalNodeQuery: assumptionMetavariableNodeQuery,
      specificNodeQuery: assumptionMetavariableNodeQuery,
      run: (generalAssumptionMetavariableNode, specificAssumptionMetavariableNode, generalContext, specificContext) => {
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
              referenceUnifies = metavariable.unifyReference(reference, generalContext, specificContext);

        if (referenceUnifies) {
          success = true;
        }

        return success;
      }
    },
    {
      generalNodeQuery: statementMetavariableNodeQuery,
      specificNodeQuery: statementNodeQuery,
      run: (generalStatementMetavariableNode, specificStatementNode, generalContext, specificContext) => {
        let success = false;

        let context,
            statementNode;

        context = generalContext; ///

        const metavariableNode = generalStatementMetavariableNode,  ///
              metavariableName = metavariableNode.getMetavariableName(),
              metavariable = context.findMetavariableByMetavariableName(metavariableName),
              metavariableNodeParentNode = metavariableNode.getParentNode();

        statementNode = metavariableNodeParentNode; ///

        const substitutionNode = statementNode.getSubstitutionNode(),
              substitution = (substitutionNode !== null) ?
                               context.findSubstitutionBySubstitutionNode(substitutionNode) :
                                 null;

        context = specificContext; ///

        statementNode = specificStatementNode;  ///

        const statement = context.findStatementByStatementNode(statementNode),
              statementUnifies = metavariable.unifyStatement(statement, substitution, generalContext, specificContext);

        if (statementUnifies) {
          success = true;
        }

        return success;
      }
    },
    {
      generalNodeQuery: frameAMetavariableNodeQuery,
      specificNodeQuery: frameNodeQuery,
      run: (generalFrameMetavariableNode, specificFrameNode, generalContext, specificContext) => {
        let success = false;

        const frameNode = specificFrameNode, ///
              metavariableNode = generalFrameMetavariableNode,  ///
              metavariableName = metavariableNode.getMetavariableName();

        let context;

        context = generalContext; ///

        const metavariable = context.findMetavariableByMetavariableName(metavariableName);

        context = specificContext;  ///

        const frame = context.findFrameByFrameNode(frameNode),
              frameUnifies = metavariable.unifyFrame(frame, generalContext, specificContext);

        if (frameUnifies) {
          success = true;
        }

        return success;
      }
    },
    {
      generalNodeQuery: termVariableNodeQuery,
      specificNodeQuery: termNodeQuery,
      run: (generalTermVariableNode, specificTermNode, generalContext, specificContext) => {
        let success = false;

        const termNode = specificTermNode, ///
              variableNode = generalTermVariableNode, ///
              variableIdentifier = variableNode.getVariableIdentifier();

        let context;

        context = generalContext; ///

        const variable = context.findVariableByVariableIdentifier(variableIdentifier);

        context = specificContext;  ///

        const term = context.findTermByTermNode(termNode),
              termUnifies = variable.unifyTerm(term, generalContext, specificContext);

        if (termUnifies) {
          success = true;
        }

        return success;
      }
    }
  ];
}

class CombinatorPass extends ZipPass {
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

        const statement = statementFromStatementNode(statementNode, context),
              statementValidatesGivenType = statement.validateGivenMetaType(metaType, assignments, stated, context);

        if (statementValidatesGivenType) {
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

        const frame = frameFromFrameNode(frameNode, context),
              frameValidatesGivenMetaType = frame.validateGivenMetaType(metaType, assignments, stated, context);

        if (frameValidatesGivenMetaType) {
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

          const term = termFromTermNode(termNode, context),
                termValidatesGivenType = term.validateGivenType(type, context);

          if (termValidatesGivenType) {
            success = true;
          }
        }

        return success;
      }
    }
  ];
}

class ConstructorPass extends ZipPass {
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

          const term = termFromTermNode(termNode, context),
                termValidatesGivenType = term.validateGivenType(type, context);

          if (termValidatesGivenType) {
            success = true;
          }
        }

        return success;
      }
    }
  ];
}

class MetavariablePass extends ZipPass {
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
              termValidatesGivenType = term.validateGivenType(type, context);

        if (termValidatesGivenType) {
          success = true;
        }

        return success;
      }
    }
  ];
}

class IntrinsicLevelPass extends ZipPass {
  static maps = [
    {
      generalNodeQuery: termVariableNodeQuery,
      specificNodeQuery: termNodeQuery,
      run: (generalTermVariableNode, specificTermNode, generalContext, specificContext) => {
        let success = false;

        const termNode = specificTermNode, ///
              variableNode = generalTermVariableNode, ///
              variableIdentifier = variableNode.getVariableIdentifier();

        let context;

        context = generalContext; ///

        const variable = context.findVariableByVariableIdentifier(variableIdentifier);

        context = specificContext;  ///

        const term = context.findTermByTermNode(termNode),
              termUnifies = variable.unifyTerm(term, generalContext, specificContext);

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

export function unifyStatement(generalStatement, specificStatement, generalContext, specificContext) {
  let statementUnifies = false;

  const generalStatementNode = generalStatement.getNode(),
        specificStatementNode = specificStatement.getNode(),
        generalNode = generalStatementNode, ///
        specificNode = specificStatementNode,  ///
        success = metaLevelPass.run(generalNode, specificNode, generalContext, specificContext);

  if (success) {
    statementUnifies = true;
  }

  return statementUnifies;
}

export function unifySubstitution(generalSubstitution, specificSubstitution, generalContext, specificContext) {
  let substitutionUnifies = false;

  const generalSubstitutionNode = generalSubstitution.getNode(),
        specificSubstitutionNode = specificSubstitution.getNode(),
        generalNode = generalSubstitutionNode, ///
        specificNode = specificSubstitutionNode,  ///
        success = metaLevelPass.run(generalNode, specificNode, generalContext, specificContext);

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

export function unifyTermWithConstructor(term, constructor, generalContext, specificContext) {
  let termUnifiesWithConstructor = false;

  const termNode = term.getNode(),
        constructorTerm = constructor.getTerm(),
        constructorTermNode = constructorTerm.getNode(),
        success = constructorPass.run(constructorTermNode, termNode, generalContext, specificContext);

  if (success) {
    termUnifiesWithConstructor = true;
  }

  return termUnifiesWithConstructor;
}

export function unifyStatementIntrinsically(generalStatement, specificStatement, generalContext, specificContext) {
  let statementUnifiesIntrinsically = false;

  const generalStatementNode = generalStatement.getNode(),
        specificStatementNode = specificStatement.getNode(),
        generalNode = generalStatementNode, ///
        specificNode = specificStatementNode, ///
        success = intrinsicLevelPass.run(generalNode, specificNode, generalContext, specificContext);

  if (success) {
    statementUnifiesIntrinsically = true;
  }

  return statementUnifiesIntrinsically;
}

export function unifyStatementWithCombinator(statement, combinator, assignments, stated, generalContext, specificContext) {
  let statementUnifiesWithCombinator = false;

  const statementNode = statement.getNode(),
        combinatorStatement = combinator.getStatement(),
        combinatorStatementNode = combinatorStatement.getNode(),
        success = combinatorPass.run(combinatorStatementNode, statementNode, assignments, stated, generalContext, specificContext);

  if (success) {
    statementUnifiesWithCombinator = true;
  }

  return statementUnifiesWithCombinator;
}

export function unifyMetavariableIntrinsically(generalMetavariable, specificMetavariable, generalContext, specificContext) {
  let metavariableUnifiesIntrinsically = false;

  const generalMetavariableNode = generalMetavariable.getNode(),
        specificMetavariableNode = specificMetavariable.getNode(),
        generalNode = generalMetavariableNode, ///
        specificNode = specificMetavariableNode, ///
        success = intrinsicLevelPass.run(generalNode, specificNode, generalContext, specificContext);

  if (success) {
    metavariableUnifiesIntrinsically = true;
  }

  return metavariableUnifiesIntrinsically;
}
