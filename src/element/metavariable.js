"use strict";

import { Element } from "occam-languages";

import elements from "../elements";

import { define } from "../elements";
import { EMPTY_STRING } from "../constants";
import { typeToTypeJSON } from "../utilities/json";
import { metaTypeToMetaTypeJSON } from "../utilities/json";
import { unifyMetavariable, unifyMetavariableIntrinsically } from "../process/unify";

export default define(class Metavariable extends Element {
  constructor(context, string, node, name, type, metaType) {
    super(context, string, node);
    
    this.name = name;
    this.type = type;
    this.metaType = metaType;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }

  getMetaType() {
    return this.metaType;
  }

  setType(type) {
    this.type = type;
  }

  setMetaType(metaType) {
    this.metaType = metaType;
  }

  compare(metavariable) {
    const name = metavariable.getName(),
          comparesToMetavariable = (this.name === name);

    return comparesToMetavariable;
  }

  isMetaTypeEqualTo(metaType) { return this.metaType.isEqualTo(metaType); }

  compareMetavariableName(metavariableName) {
    const nameMetavariableName = (this.name === metavariableName),
          comparesToMetavariableName = nameMetavariableName;  ///

    return comparesToMetavariableName;
  }

  validate(context) {
    let validates = false;

    const metavariableString = this.getString(); ///

    context.trace(`Validating the '${metavariableString}' metavariable...`);

    const metavariable = this, ///
          metavariablePresent = context.isMetavariablePresent(metavariable);

    if (metavariablePresent) {
      validates = true;
    }

    if (validates) {
      context.debug(`...va;idated the '${metavariableString}' metavariable.`);
    }

    return validates;
  }

  validateGivenMetaType(metaType, context) {
    let validatesGivenMetaType = false;

    const metaTypeString = metaType.getString(),
          metavariableString = this.getString();  ///

    context.trace(`Validating the '${metavariableString}' metavariable given the '${metaTypeString}' meta-type...`);

    let metavariable = this;  ///

    metavariable = context.findMetavariable(metavariable);

    if (metavariable !== null) {
      const metavariableMetaTypeEqualToMetaType = metavariable.isMetaTypeEqualTo(metaType);

      if (metavariableMetaTypeEqualToMetaType) {
        validatesGivenMetaType = true;
      }
    }

    if (validatesGivenMetaType) {
      context.debug(`...validated the '${metavariableString}' metavariable given the '${metaTypeString}' meta-type.`);
    }

    return validatesGivenMetaType;
  }

  unifyFrame(frame, generalContext, specificContext) {
    let frameUnifies = false;

    const context = specificContext,  ///
          frameString = frame.getString(),
          metavariableString = this.getString(); ///

    context.trace(`Unifying the '${frameString}' frame with the '${metavariableString}' metavariable...`);

    const metavariable = this, ///
          frameMetavariableUnifies = this.unifyFrameMetavariable(frame, generalContext, specificContext);

    if (frameMetavariableUnifies) {
      frameUnifies = true;
    } else {
      const simpleSubstitution = context.findSimpleSubstitutionByMetavariable(metavariable);

      if (simpleSubstitution !== null) {
        const substitution = simpleSubstitution,  ///
              substitutionFrameEqualToFrame = substitution.isFrameEqualToFrame(frame);

        if (substitutionFrameEqualToFrame) {
          frameUnifies = true;
        }
      } else {
        const { FrameSubstitution } = elements,
              frameSubstitution = FrameSubstitution.fromFrameAndMetavariable(frame, metavariable, context),
              framesubstitutionValidates = frameSubstitution.validate(generalContext, specificContext);

        if (framesubstitutionValidates) {
          const substitution = frameSubstitution; ///

          context.addSubstitution(substitution);

          frameUnifies = true;
        }
      }
    }

    if (frameUnifies) {
      context.debug(`...unified the '${frameString}' frame with the '${metavariableString}' metavariable.`);
    }

    return frameUnifies;
  }

  unifyStatement(statement, substitution, generalContext, specificContext) {
    let statementUnifies = false;

    const context = specificContext,  ///
          statementString = statement.getString(),
          metavariableString = this.getString(), ///
          substitutionString = (substitution !== null) ?
                                  substitution.getString() :
                                    EMPTY_STRING;

    context.trace(`Unifying the '${statementString}' statement with the '${metavariableString}${substitutionString}' metavariable...`);

    const metavariable = this, ///
          statementMetavariableUnifies = this.unifyStatementMetavariable(statement, generalContext, specificContext);

    if (statementMetavariableUnifies) {
      statementUnifies = true;
    } else {
      const context = specificContext,  ///
            substitutionPresent = context.isSubstitutionPresentByMetavariableAndSubstitution(metavariable, substitution);

      if (substitutionPresent) {
        substitution = context.findSubstitutionByMetavariableAndSubstitution(metavariable, substitution); ///

        const substitutionComparesToStatement = substitution.compareStatement(statement, context);

        if (substitutionComparesToStatement) {
          statementUnifies = true;
        }
      } else {
        const { StatementSubstitution } = elements,
              statementSubstitution = (substitution !== null) ?
                                        StatementSubstitution.fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context) :
                                          StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context),
              statementSubstitutionValidates = statementSubstitution.validate(generalContext, specificContext);

        if (statementSubstitutionValidates) {
          const substitution = statementSubstitution; ///

          context.addSubstitution(substitution);

          statementUnifies = true;
        }
      }
    }

    if (statementUnifies) {
      context.debug(`...unified the '${statementString}' statement with the '${metavariableString}${substitutionString}' metavariable.`);
    }

    return statementUnifies;
  }

  unifyReference(reference, generalContext, specificContext) {
    let referenceUnifies = false;

    const context = specificContext,  ///
          referenceString = reference.getString(),
          metavariableString = this.getString(); ///

    context.trace(`Unifying the '${referenceString}' reference with the '${metavariableString}' metavariable...`);

    const metavariable = this, ///
          referenceMetavariableUnifies = this.unifyReferenceMetavariable(reference, generalContext, specificContext);

    if (referenceMetavariableUnifies) {
      referenceUnifies = true;
    } else {
      const simpleSubstitutionPresent = context.isSimpleSubstitutionPresentByMetavariable(metavariable);

      if (simpleSubstitutionPresent) {
        const simpleSubstitution = context.findSimpleSubstitutionByMetavariable(metavariable),
              substitution = simpleSubstitution,  ///
              substitutionReferenceEqualToReference = substitution.isReferenceEqualToReference(reference);

        if (substitutionReferenceEqualToReference) {
          referenceUnifies = true;
        }
      } else {
        const { ReferenceSubstitution } = elements,
              referenceSubstitution = ReferenceSubstitution.fromReferenceAndMetavariable(reference, metavariable, context),
              substitution = referenceSubstitution; ///

        context.addSubstitution(substitution);

        referenceUnifies = true;
      }
    }

    if (referenceUnifies) {
      context.debug(`...unified the '${referenceString}' reference with the '${metavariableString}' metavariable.`);
    }

    return referenceUnifies;
  }

  unifyMetavariable(metavariable, context) {
    let metavariableUnifies;

    const specificContext = context; ///

    context = this.getContext();

    const generalContext = context;  ///

    context = specificContext;  ///

    const generalMetavariable = this, ///
          specificMetavariable = metavariable,  ///
          generalMetavariableString = generalMetavariable.getString(),
          specificMetavariableString = specificMetavariable.getString();

    context.trace(`Unifying the '${specificMetavariableString}' metavariable with the '${generalMetavariableString}' metavariable...`);

    metavariableUnifies = unifyMetavariable(generalMetavariable, specificMetavariable, generalContext, specificContext);

    if (metavariableUnifies) {
      context.debug(`...unified the '${specificMetavariableString}' metavariable with the '${generalMetavariableString}' metavariable.`);
    }

    return metavariableUnifies;
  }

  unifyFrameMetavariable(frame, generalContext, specificContext) {
    let frameMetavariableUnifies = false;

    const context = specificContext,  ///
          frameString = frame.getString(),
          metavariableString = this.getString();  ///

    context.trace(`Unifying the '${frameString}' frame's metavariable with the '${metavariableString}' metavariable...`);

    const generalContextFilePath = generalContext.getFilePath(),
          specificContextFilePath = specificContext.getFilePath();

    if (generalContextFilePath === specificContextFilePath) {
      const metavariable = this,  ///
            frameMetavariableComparesToMetvariable = frame.compareMetavariable(metavariable);

      if (frameMetavariableComparesToMetvariable) {
        frameMetavariableUnifies = true;
      } else {
        const frameSingular = frame.isSingular();

        if (frameSingular) {
          const frameMetavariableName = frame.getMetavariableName(),
                frameMetavariable = context.findMetavariableByMetavariableName(frameMetavariableName),
                generalMetavariable = this, ///
                specificMetavariable = frameMetavariable, ///
                metavariableUnifiesIntrinsically = unifyMetavariableIntrinsically(generalMetavariable, specificMetavariable, generalContext, specificContext);

          frameMetavariableUnifies = metavariableUnifiesIntrinsically; ///
        }
      }
    }

    if (frameMetavariableUnifies) {
      context.debug(`...unified the '${frameString}' frame's metavariable with the '${metavariableString}' metavariable.`);
    }

    return frameMetavariableUnifies;
  }

  unifyReferenceMetavariable(reference, generalContext, specificContext) {
    let referenceMetavariableUnifies = false;

    const context = specificContext,  ///
          referenceString = reference.getString(),
          metavariableString = this.getString();

    context.trace(`Unifying the '${referenceString}' reference's metavariable with the '${metavariableString}' metavariable...`);

    const generalContextFilePath = generalContext.getFilePath(),
          specificContextFilePath = specificContext.getFilePath();

    if (generalContextFilePath === specificContextFilePath) {
      const metavariable = this,  ///
            referenceMetavariableComparesToMetvariable = reference.compareMetavariable(metavariable);

      if (referenceMetavariableComparesToMetvariable) {
        referenceMetavariableUnifies = true;
      } else {
        const referenceMetavariable = reference.getMetavariable(),
              generalMetavariable = this, ///
              specificMetavariable = referenceMetavariable, ///
              metavariableUnifiesIntrinsically = unifyMetavariableIntrinsically(generalMetavariable, specificMetavariable, generalContext, specificContext);

        referenceMetavariableUnifies = metavariableUnifiesIntrinsically; ///
      }
    }

    if (referenceMetavariableUnifies) {
      context.trace(`...unified the '${referenceString}' reference's metavariable with the '${metavariableString}' metavariable.`);
    }

    return referenceMetavariableUnifies;
  }

  unifyStatementMetavariable(statement, generalContext, specificContext) {
    let statementMetavariableUnifies = false;

    const context = specificContext,  ///
          statementString = statement.getString(),
          metavariableString = this.getString();  ///

    context.trace(`Unifying the '${statementString}' statement's metavariable with the '${metavariableString}' metavariable...`);

    const generalContextFilePath = generalContext.getFilePath(),
          specificContextFilePath = specificContext.getFilePath();

    if (generalContextFilePath === specificContextFilePath) {
      const metavariable = this,  ///
            statementMetavariableComparesToMetvariable = statement.compareMetavariable(metavariable);

      if (statementMetavariableComparesToMetvariable) {
        statementMetavariableUnifies = true;
      } else {
        const statementSingular = statement.isSingular();

        if (statementSingular) {
          const statementMetavariableName = statement.getMetavariableName(),
                statementMetavariable = context.findMetavariableByMetavariableName(statementMetavariableName),
                generalMetavariable = this, ///
                specificMetavariable = statementMetavariable, ///
                metavariableUnifiesIntrinsically = unifyMetavariableIntrinsically(generalMetavariable, specificMetavariable, generalContext, specificContext);

          statementMetavariableUnifies = metavariableUnifiesIntrinsically; ///
        }
      }
    }

    if (statementMetavariableUnifies) {
      context.debug(`...unified the '${statementString}' statement's metavariable with the '${metavariableString}' metavariable.`);
    }

    return statementMetavariableUnifies;
  }

  toJSON() {
    const metaTypeJSON = metaTypeToMetaTypeJSON(this.metaType),
          typeJSON = typeToTypeJSON(this.type),
          type = typeJSON,  ///
          metaType = metaTypeJSON,  ///
          string = this.getString(), ///
          json = {
            string,
            type,
            metaType
          };

    return json;
  }

  static name = "Metavariable";

  static fromJSON(json, context) {
    ///
  }
});
