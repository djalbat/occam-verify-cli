"use strict";

import { arrayUtilities } from "necessary";
import { metavariablesFromSubstitutions } from "../utilities/substitutions";
import { termsStringFromTerms, framesStringFromFrames, substitutionsStringFromSubstitutions } from "../utilities/string";

import Context from "../context";

const { find, first, compress } = arrayUtilities;

export default class LiminalContext extends Context {
  constructor(context, terms, frames, substitutions) {
    super(context);

    this.terms = terms;
    this.frames = frames;
    this.substitutions = substitutions;
  }

  getTerms(nested = true) {
    let terms;

    if (nested) {
      const context = this.getContext();

      terms = context.getTerms();

      terms = [ ///
        ...this.terms,
        ...terms
      ]
    } else {
      terms = this.terms;
    }

    return terms;
  }

  getFrames(nested = true) {
    let frames;

    if (nested) {
      const context = this.getContext();

      frames = context.getFrames();

      frames = [ ///
        ...this.frames,
        ...frames
      ]
    } else {
      frames = this.frames;
    }

    return frames;
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

  getNonTrivialSubstitutions() {
    const nested = false,
          nonTrivialSubstitutions = this.findSubstitutions((substitution) => {
          const substitutionNonTrivial = substitution.isNonTrivial();

          if (substitutionNonTrivial) {
            return true;
          }
        }, nested);

    return nonTrivialSubstitutions;
  }

  getSoleNonTrivialSubstitution() {
    let soleNonTrivialSubstitutions = null;

    const nonTrivialSubstitutions = this.getNonTrivialSubstitutions(),
          nonTrivialSubstitutionsLength = nonTrivialSubstitutions.length;

    if (nonTrivialSubstitutionsLength === 1) {
      const firstNonTrivkalSubstitution = first(nonTrivialSubstitutions);

      soleNonTrivialSubstitutions = firstNonTrivkalSubstitution; ///
    }

    return soleNonTrivialSubstitutions;
  }

  addTerm(term) {
    const context = this,
      termString = term.getString();

    this.terms = [ ///
      ...this.terms,
      term
    ];

    compress(this.terms, (termA, termB) => {
      const termAEqualToTermB = termA.isEqualTo(termB);

      if (!termAEqualToTermB) {
        return true;
      }
    });

    context.trace(`Added the '${termString}' term to the context.`);
  }

  addTerms(terms) {
    const context = this,
          termsString = termsStringFromTerms(terms);

    this.terms = [ ///
      ...this.terms,
      ...terms
    ];

    compress(this.terms, (substitutionA, substitutionB) => {
      const substitutionAEqualToAssertionB = substitutionA.isEqualTo(substitutionB);

      if (!substitutionAEqualToAssertionB) {
        return true;
      }
    });

    context.trace(`Added the '${termsString}' terms to the context.`);
  }

  addFrame(frame) {
    const context = this,
          frameString = frame.getString();

    this.frames = [ ///
      ...this.frames,
      frame
    ];

    compress(this.frames, (frameA, frameB) => {
      const frameAEqualToFrameB = frameA.isEqualTo(frameB);

      if (!frameAEqualToFrameB) {
        return true;
      }
    });

    context.trace(`Added the '${frameString}' frame to the context.`);
  }

  addFrames(frames) {
    const context = this,
          framesString = framesStringFromFrames(frames);

    this.frames = [ ///
      ...this.frames,
      ...frames
    ];

    compress(this.frames, (substitutionA, substitutionB) => {
      const substitutionAEqualToAssertionB = substitutionA.isEqualTo(substitutionB);

      if (!substitutionAEqualToAssertionB) {
        return true;
      }
    });

    context.trace(`Added the '${framesString}' frames to the context.`);
  }

  addSubstitution(substitution) {
    const context = this,
          substitutionString = substitution.getString();

    this.substitutions = [ ///
      ...this.substitutions,
      substitution
    ];

    compress(this.substitutions, (substitutionA, substitutionB) => {
      const substitutionAEqualToSubstitutionB = substitutionA.isEqualTo(substitutionB);

      if (!substitutionAEqualToSubstitutionB) {
        return true;
      }
    });

    context.trace(`Added the '${substitutionString}' substitution to the context.`);
  }

  addSubstitutions(substitutions) {
    const context = this,
          substitutionsString = substitutionsStringFromSubstitutions(substitutions);

    this.substitutions = [ ///
      ...this.substitutions,
      ...substitutions
    ];

    compress(this.substitutions, (substitutionA, substitutionB) => {
      const substitutionAEqualToAssertionB = substitutionA.isEqualTo(substitutionB);

      if (!substitutionAEqualToAssertionB) {
        return true;
      }
    });

    context.trace(`Added the '${substitutionsString}' substitutions to the context.`);
  }

  resolveSubstitutions(generalContext, specificContext) {
    const substitutions = this.getSubstitutions(),
          metavariables = metavariablesFromSubstitutions(substitutions, generalContext, specificContext);

    metavariables.forEach((metavariable) => {
      const complexSubstitutions = this.findComplexSubstitutionsByMetavariable(metavariable),
            complexSubstitutionsResolved = complexSubstitutions.every((complexSubstitution) => {
              const substitution = complexSubstitution, ///
                    resolved = substitution.isResolved();

              if (!resolved) {
                substitution.resolve(generalContext, specificContext);
              }
            });

      if (complexSubstitutionsResolved) {
        return true;
      }
    });
  }

  areSubstitutionsResolved(generalContext, specificContext) {
    const substitutions = this.getSubstitutions(),
          metavariables = metavariablesFromSubstitutions(substitutions, generalContext, specificContext),
          resolved = metavariables.every((metavariable) => {
            const complexSubstitutions = this.findComplexSubstitutionsByMetavariable(metavariable),
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

  commit(context) {
    if (context === undefined) {
      context = this.getContext();
    }

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

  findTermByTermNode(termNode) {
    const terms = this.getTerms(),
          term = terms.find((term) => {
            const termNodeMatches = term.matchNode(termNode);

            if (termNodeMatches) {
              return true;
            }
          }) || null;

    return term;
  }

  findFrameByFrameNode(frameNode) {
    const frames = this.getFrames(),
          frame = frames.find((frame) => {
            const frameNodeMatches = frame.matchNode(frameNode);

            if (frameNodeMatches) {
              return true;
            }
          }) || null;

    return frame;
  }

  findSimpleSubstitutionByMetavariable(metavariable) {
    const simpleSubstitution = this.findSubstitution((substitution) => {
      const substitutionSimple = substitution.isSimple();

      if (substitutionSimple) {
        const simpleSubstitution = substitution,  ///
              simpleSubstitutionMetavariableComparesToMetavariable = simpleSubstitution.compareMetavariable(metavariable);

        if (simpleSubstitutionMetavariableComparesToMetavariable) {
          return true;
        }
      }
    }) || null;

    return simpleSubstitution;
  }

  findComplexSubstitutionsByMetavariable(metavariable) {
    const complexSubstitutions = this.findSubstitutions((substitution) => {
      const substitutionComplex = substitution.isComplex();

      if (substitutionComplex) {
        const complexSubstitution = substitution, ///
              complexSubstitutionMetavariableComparesToMetavariable = complexSubstitution.compareMetavariable(metavariable);

        if (complexSubstitutionMetavariableComparesToMetavariable) {
          return true;
        }
      }
    });

    return complexSubstitutions;
  }

  findSubstitutionByMetavariableAndSubstitution(metavariable, substitution) {
    const substitutionA = substitution; ///

    substitution = this.findSubstitution((substitution) => {  ///
      const substitutionMetavariablCompareslToMetavariable = substitution.compareMetavariable(metavariable);

      if (substitutionMetavariablCompareslToMetavariable) {
        const substitutionB = substitution, ///
              substitutionBSubstitutionComparesToSubstitutionA = substitutionB.compareSubstitution(substitutionA);

        if (substitutionBSubstitutionComparesToSubstitutionA) {
          return true;
        }
      }
    }) || null;

    return substitution;
  }

  isSimpleSubstitutionPresentByMetavariable(metavariable) {
    const simpleSubstitution = this.findSimpleSubstitutionByMetavariable(metavariable),
          simpleSubstitutionPresent = (simpleSubstitution !== null);

    return simpleSubstitutionPresent;
  }

  isSubstitutionPresentByMetavariableAndSubstitution(metavariable, substitution) {
    substitution = this.findSubstitutionByMetavariableAndSubstitution(metavariable, substitution);  ///

    const substitutionPresent = (substitution !== null);

    return substitutionPresent;
  }

  static fromNothing(context) {
    const terms = [],
          frames = [],
          substitutions = [],
          emphemeralContext = new LiminalContext(context, terms, frames, substitutions);

    return emphemeralContext;
  }
}
