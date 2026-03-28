"use strict";

import { arrayUtilities } from "necessary";
import { metavariableNodesFromSubstitutions } from "../utilities/substitutions";

import Context from "../context";
import elements from "../elements";

const { find, first } = arrayUtilities;

export default class LiminalContext extends Context {
  constructor(context, substitutions) {
    super(context);

    this.substitutions = substitutions;
  }

  getSubstitutions(nested = true) {
    let substitutions;

    if (nested) {
      const context = this.getContext();

      substitutions = context.getSubstitutions();

      substitutions = [ ///
        ...this.substitutions,
        ...substitutions
      ]
    } else {
      substitutions = this.substitutions;
    }

    return substitutions;
  }

  getSoleSubstitution(nested = true) {
    let soleSubstitution = null;

    const substitutions = this.getSubstitutions(nested),
          substitutionsLength = substitutions.length;

    if (substitutionsLength === 1) {
      const firstSubstitution = first(substitutions);

      soleSubstitution = firstSubstitution; ///
    }

    return soleSubstitution;
  }

  getSoleNonTrivialSubstitution(nested = true) {
    let soleNonTrivialSubstitution = null;

    const soleSubstitution = this.getSoleSubstitution(nested);

    if (soleSubstitution !== null) {
      const soleSubstitutionNonTrivial = soleSubstitution.isNonTrivial();

      if (soleSubstitutionNonTrivial) {
        soleNonTrivialSubstitution = soleSubstitution;  ///
      }
    }

    return soleNonTrivialSubstitution;
  }

  addSubstitution(substitution) {
    const context = this, ///
          substitutionA = substitution, ///
          substitutionString = substitution.getString();

    context.trace(`Adding the '${substitutionString}' substitution to the liminal context...`);

    const substitutionB = this.substitutions.find((substitution) => {
      const substitutionB = substitution, ///
            substitutionAEqualToSubstitutionB = substitutionA.isEqualTo(substitutionB);

      if (substitutionAEqualToSubstitutionB) {
        return true;
      }
    }) || null;

    if (substitutionB !== null) {
      context.debug(`The '${substitutionString}' substitution has already been added to the liminal context.`);
    } else {
      this.substitutions.push(substitution);
    }

    context.debug(`...added the '${substitutionString}' substitution to the liminal context.`);
  }

  addSubstitutions(substitutions) {
    substitutions.forEach((substitution) => {
      this.addSubstitution(substitution);
    });
  }

  resolveSubstitutions() {
    const context = this, ///
          substitutions = this.getSubstitutions(),
          metavariableNodes = metavariableNodesFromSubstitutions(substitutions);

    metavariableNodes.forEach((metavariableNode) => {
      const complexSubstitutions = this.findComplexSubstitutionsByMetavariableNode(metavariableNode);

      complexSubstitutions.forEach((complexSubstitution) => {
        const substitution = complexSubstitution, ///
              resolved = substitution.isResolved();

        if (!resolved) {
          substitution.resolve(context);
        }
      });
    });
  }

  areSubstitutionsResolved() {
    const substitutions = this.getSubstitutions(),
          metavariableNodes = metavariableNodesFromSubstitutions(substitutions),
          resolved = metavariableNodes.every((metavariableNode) => {
            const complexSubstitutions = this.findComplexSubstitutionsByMetavariableNode(metavariableNode),
                  complexSubstitutionsResolved = complexSubstitutions.every((complexSubstitution) => {
                    const complexSubstitutionResolved = complexSubstitution.isResolved();

                    if (complexSubstitutionResolved) {
                      return true;
                    }
                  });

            if (complexSubstitutionsResolved) {
              return true;
            }
          });

    return resolved;
  }

  isEmpty() {
    const substitutionsLength = this.substitutions.length,
          empty = (substitutionsLength === 0);

    return empty;
  }

  qualify(assumption, metaLevelAssumption) {
    let qualifies = false;

    const empty = this.isEmpty();

    if (empty) {
      qualifies = true;
    } else {
      const nested = false,
            soleSubstitution = this.getSoleSubstitution(nested);

      if (soleSubstitution !== null) {
        const { ReferenceSubstitution } = elements,
              context = this,
              referenceSubstitution = ReferenceSubstitution.fromAssumptionAndMetaLevelAssumption(assumption, metaLevelAssumption, context),
              soleSubstitutionCompares = referenceSubstitution.compareSubstitution(soleSubstitution);

        if (soleSubstitutionCompares) {
          qualifies = true;
        }
      }
    }

    return qualifies;
  }

  commit(context) {
    if (context === undefined) {
      context = this.getContext();
    }

    context.debug(`Committing the limiinal context`);

    context.addSubstitutions(this.substitutions);
  }

  findSubstitution(callback) {
    const substitutions = this.getSubstitutions(),
          substitution = substitutions.find(callback);

    return substitution;
  }

  findSubstitutions(callback, nested = true) {
    let substitutions;

    substitutions = this.getSubstitutions(nested);

    substitutions = find(substitutions, callback);  ///

    return substitutions;
  }

  findSubstitutionByVariableNode(variableNode) {
    const substitution = this.findSubstitution((substitution) => {
      const substitutionComparesToVariableNode = substitution.compareVariableNode(variableNode);

      if (substitutionComparesToVariableNode) {
        return true;
      }
    }) || null;

    return substitution;
  }

  findSubstitutionByMetavariableNode(metavariableNode) {
    const simpleSubstitution = this.findSimpleSubstitutionByMetavariableNode(metavariableNode),
          substitution = simpleSubstitution;  ///

    return substitution;
  }

  findSimpleSubstitutionByMetavariableNode(metavariableNode) {
    const simpleSubstitution = this.findSubstitution((substitution) => {
      const substitutionSimple = substitution.isSimple();

      if (substitutionSimple) {
        const simpleSubstitution = substitution,  ///
              metavariableNodeMatches = simpleSubstitution.matchMetavariableNode(metavariableNode);

        if (metavariableNodeMatches) {
          return true;
        }
      }
    }) || null;

    return simpleSubstitution;
  }

  findComplexSubstitutionsByMetavariableNode(metavariableNode) {
    const complexSubstitution = this.findSubstitutions((substitution) => {
      const substitutionComplex = substitution.isComplex();

      if (substitutionComplex) {
        const complexSubstitution = substitution,  ///
              metavariableNodeMatches = complexSubstitution.matchMetavariableNode(metavariableNode);

        if (metavariableNodeMatches) {
          return true;
        }
      }
    }) || null;

    return complexSubstitution;
  }

  findSubstitutionByMetavariableNodeAndSubstitution(metavariableNode, substitution) {
    const substitutionA = substitution; ///

    substitution = this.findSubstitution((substitution) => {  ///
      const metavariableNodeMatches = substitution.matchMetavariableNode(metavariableNode);

      if (metavariableNodeMatches) {
        const substitutionB = substitution, ///
              substitutionBEqualToSubstitutionA = substitutionB.isEqualTo(substitutionA);

        if (substitutionBEqualToSubstitutionA) {
          return true;
        }
      }
    }) || null;

    return substitution;
  }

  isSubstitutionPresentByMetavariableNode(metavariableNode) {
    const substitution = this.findSubstitutionByMetavariableNode(metavariableNode),
          substitutionPresent = (substitution !== null);

    return substitutionPresent;
  }

  isSubstitutionPresentByMetavariableNodeAndSubstitution(metavariableNode, substitution) {
    substitution = this.findSubstitutionByMetavariableNodeAndSubstitution(metavariableNode, substitution);  ///

    const substitutionPresent = (substitution !== null);

    return substitutionPresent;
  }

  static fromNothing(context) {
    const substitutions = [],
          liminalContext = new LiminalContext(context, substitutions);

    return liminalContext;
  }
}
