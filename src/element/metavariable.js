"use strict";

import Element from "../element";
import elements from "../elements";

import { define } from "../elements";
import { EMPTY_STRING } from "../constants";
import { instantiateMetavariable } from "../process/instantiate";
import { typeFromJSON, typeToTypeJSON } from "../utilities/json";
import { metaTypeFromJSON, metaTypeToMetaTypeJSON } from "../utilities/json";
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

  isNameEqualTo(name) {
    const nameEqualTo = (name === this.name);

    return nameEqualTo;
  }

  isMetaTypeEqualTo(metaType) { return this.metaType.isEqualTo(metaType); }

  compareParameter(parameter) {
    const name = parameter.getName(),
          nameEqualTo = this.isNameEqualTo(name),
          comparesToParameter = nameEqualTo;  ///

    return comparesToParameter;
  }

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

  unifyFrame(frame, substitutions, generalContext, specificContext) {
    let frameUnifies = false;

    const context = specificContext,  ///
          frameString = frame.getString(),
          metavariableString = this.getString(); ///

    context.trace(`Unifying the '${frameString}' frame with the '${metavariableString}' metavariable...`);

    const frameMetavariableUnifies = this.unifyFrameMetavariable(frame, substitutions, generalContext, specificContext);

    if (frameMetavariableUnifies) {
      frameUnifies = true;
    } else {
      const metavariable = this, ///
            simpleSubstitutionPresent = substitutions.isSimpleSubstitutionPresentByMetavariable(metavariable);

      if (simpleSubstitutionPresent) {
        const simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariable(metavariable),
              substitution = simpleSubstitution,  ///
              substitutionFrameEqualToFrame = substitution.isFrameEqualToFrame(frame);

        if (substitutionFrameEqualToFrame) {
          frameUnifies = true;
        }
      } else {
        const { FrameSubstitution } = elements,
              context = specificContext,  ///
              metavariable = this,  ///
              frameSubstitution = FrameSubstitution.fromFrameAndMetavariable(frame, metavariable, context),
              substitution = frameSubstitution;  ///

        substitutions.addSubstitution(substitution, context);

        frameUnifies = true;
      }
    }

    if (frameUnifies) {
      context.debug(`...unified the '${frameString}' frame with the '${metavariableString}' metavariable.`);
    }

    return frameUnifies;
  }

  unifyStatement(statement, substitution, substitutions, generalContext, specificContext) {
    let statementUnifies = false;

    const context = specificContext,  ///
          statementString = statement.getString(),
          metavariableString = this.getString(), ///
          substitutionString = (substitution !== null) ?
                                  substitution.getString() :
                                    EMPTY_STRING;

    context.trace(`Unifying the '${statementString}' statement with the '${metavariableString}${substitutionString}' metavariable...`);

    const statementMetavariableUnifies = this.unifyStatementMetavariable(statement, substitutions, generalContext, specificContext);

    if (statementMetavariableUnifies) {
      statementUnifies = true;
    } else {
      const context = specificContext,  ///
            metavariable = this, ///
            substitutionPresent = substitutions.isSubstitutionPresentByMetavariableAndSubstitution(metavariable, substitution);

      if (substitutionPresent) {
        substitution = substitutions.findSubstitutionByMetavariableAndSubstitution(metavariable, substitution); ///

        const substitutionComparesToStatement = substitution.compareStatement(statement, context);

        if (substitutionComparesToStatement) {
          statementUnifies = true;
        }
      } else {
        const { StatementSubstitution } = elements,
              metavariable = this,
              statementSubstitution = (substitution !== null ) ?
                                        StatementSubstitution.fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context) :
                                          StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context);

        substitution = statementSubstitution;  ///

        substitutions.addSubstitution(substitution, context);

        statementUnifies = true;
      }
    }

    if (statementUnifies) {
      context.debug(`...unified the '${statementString}' statement with the '${metavariableString}${substitutionString}' metavariable.`);
    }

    return statementUnifies;
  }

  unifyReference(reference, substitutions, generalContext, specificContext) {
    let referenceUnifies = false;

    const context = specificContext,  ///
          referenceString = reference.getString(),
          metavariableString = this.getString(); ///

    context.trace(`Unifying the '${referenceString}' reference with the '${metavariableString}' metavariable...`);

    const referenceMetavariableUnifies = this.unifyReferenceMetavariable(reference, substitutions, generalContext, specificContext);

    if (referenceMetavariableUnifies) {
      referenceUnifies = true;
    } else {
      const context = specificContext,  ///
            metavariable = this, ///
            simpleSubstitutionPresent = substitutions.isSimpleSubstitutionPresentByMetavariable(metavariable);

      if (simpleSubstitutionPresent) {
        const simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariable(metavariable), ///
              substitution = simpleSubstitution,  ///
              substitutionReferenceEqualToReference = substitution.isReferenceEqualToReference(reference);

        if (substitutionReferenceEqualToReference) {
          referenceUnifies = true;
        }
      } else {
        const { ReferenceSubstitution } = elements,
              metavariable = this,
              referenceSubstitution = ReferenceSubstitution.fromReferenceAndMetavariable(reference, metavariable, context),
              substitution = referenceSubstitution;  ///

        substitutions.addSubstitution(substitution, context);

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

    const generalMetavariable = this, ///
          specificMetavariable = metavariable,  ///
          generalMetavariableString = generalMetavariable.getString(),
          specificMetavariableString = specificMetavariable.getString();

    context.trace(`Unifying the '${specificMetavariableString}' metavariable with the '${generalMetavariableString}' metavariable...`);

    const generalContext = context, ///
          specificContext = context;  ///

    metavariableUnifies = unifyMetavariable(generalMetavariable, specificMetavariable, generalContext, specificContext);

    if (metavariableUnifies) {
      context.debug(`...unified the '${specificMetavariableString}' metavariable with the '${generalMetavariableString}' metavariable.`);
    }

    return metavariableUnifies;
  }

  unifyFrameMetavariable(frame, substitutions, generalContext, specificContext) {
    let frameMetavariableUnifies = false;

    const context = specificContext,  ///
          generalContextFilePath = generalContext.getFilePath(),
          specificContextFilePath = specificContext.getFilePath();

    if (generalContextFilePath === specificContextFilePath) {
      const metavariable = this,  ///
            metavariableString = metavariable.getString(),
            frameMetavariableEqualToMetvariable = frame.isMetavariableEqualToMetavariable(metavariable, context);

      if (frameMetavariableEqualToMetvariable) {
        frameMetavariableUnifies = true;
      } else {
        const frameSingular = frame.isSingular();

        if (frameSingular) {
          const frameMetavariableName = frame.getMetavariableName(),
                frameMetavariable = context.findMetavariableByMetavariableName(frameMetavariableName),
                frameMetavariableString = frameMetavariable.getString();

          context.trace(`Unifying the frame's '${frameMetavariableString}' metavariable with the '${metavariableString}' metavariable...`);

          const generalMetavariable = this, ///
                specificMetavariable = frameMetavariable, ///
                metavariableUnifiesIntrinsically = unifyMetavariableIntrinsically(generalMetavariable, specificMetavariable, substitutions, generalContext, specificContext);

          frameMetavariableUnifies = metavariableUnifiesIntrinsically; ///

          if (frameMetavariableUnifies) {
            context.debug(`...unified the frame's '${frameMetavariableString}' metavariable with the '${metavariableString}' metavariable.`);
          }
        }
      }
    }

    return frameMetavariableUnifies;
  }

  unifyStatementMetavariable(statement, substitutions, generalContext, specificContext) {
    let statementMetavariableUnifies = false;

    const context = specificContext,  ///
          generalContextFilePath = generalContext.getFilePath(),
          specificContextFilePath = specificContext.getFilePath();

    if (generalContextFilePath === specificContextFilePath) {
      const metavariable = this,  ///
            metavariableString = metavariable.getString(),
            statementMetavariableEqualToMetvariable = statement.isMetavariableEqualToMetavariable(metavariable, context);

      if (statementMetavariableEqualToMetvariable) {
        statementMetavariableUnifies = true;
      } else {
        const statementSingular = statement.isSingular();

        if (statementSingular) {
          const statementMetavariableName = statement.getMetavariableName(),
                statementMetavariable = context.findMetavariableByMetavariableName(statementMetavariableName),
                statementMetavariableString = statementMetavariable.getString();

          context.trace(`Unifying the statement's ${statementMetavariableString}' metavariable with the '${metavariableString}' metavariable...`);

          const generalMetavariable = this, ///
                specificMetavariable = statementMetavariable, ///
                metavariableUnifiesIntrinsically = unifyMetavariableIntrinsically(generalMetavariable, specificMetavariable, substitutions, generalContext, specificContext);

          statementMetavariableUnifies = metavariableUnifiesIntrinsically; ///

          if (statementMetavariableUnifies) {
            context.debug(`...unified the statement's '${statementMetavariableString}' metavariable with the '${metavariableString}' metavariable.`);
          }
        }
      }
    }

    return statementMetavariableUnifies;
  }

  unifyReferenceMetavariable(reference, substitutions, generalContext, specificContext) {
    let referenceMetavariableUnifies = false;

    const context = specificContext,  ///
          generalContextFilePath = generalContext.getFilePath(),
          specificContextFilePath = specificContext.getFilePath();

    if (generalContextFilePath === specificContextFilePath) {
      const metavariable = this,  ///
            metavariableString = metavariable.getString(),
            referenceMetavariableEqualToMetvariable = reference.isMetavariableEqualToMetavariable(metavariable);

      if (referenceMetavariableEqualToMetvariable) {
        referenceMetavariableUnifies = true;
      } else {
        const referenceMetavariable = reference.getMetavariable(),
              referenceMetavariableString = referenceMetavariable.getString();

        context.trace(`Unifying the reference's ${referenceMetavariableString}' metavariable with the '${metavariableString}' metavariable...`);

        const generalMetavariable = this, ///
              specificMetavariable = referenceMetavariable, ///
              metavariableUnifiesIntrinsically = unifyMetavariableIntrinsically(generalMetavariable, specificMetavariable, substitutions, generalContext, specificContext);

        referenceMetavariableUnifies = metavariableUnifiesIntrinsically; ///

        if (referenceMetavariableUnifies) {
          context.debug(`...unified the reference's '${referenceMetavariableString}' metavariable with the '${metavariableString}' metavariable.`);
        }
      }
    }

    return referenceMetavariableUnifies;
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
    const { string } = json,
          metavariableNode = instantiateMetavariable(string, context),
          metavariableName = metavariableNode.getMetavariableName(),
          name = metavariableName,  ///
          node = metavariableNode,  ///
          type = typeFromJSON(json, context),
          metaType = metaTypeFromJSON(json, context),
          metavariable = new Metavariable(context, string, node, name, type, metaType);

    return metavariable;
  }
});
