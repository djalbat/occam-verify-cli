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

  matchParameter(parameter) {
    const name = parameter.getName(),
          nameMatches = (name === this.name),
          parameterMatches = nameMatches; ///

    return parameterMatches;
  }

  matchMetavariableName(metavariableName) {
    const metavariableNameMatches = (metavariableName === this.name);

    return metavariableNameMatches;
  }

  isMetaTypeEqualTo(metaType) { return this.metaType.isEqualTo(metaType); }

  verify(context) {
    let verifies;

    const metavariableString = this.string; ///

    context.trace(`Verifying the '${metavariableString}' metavariable...`);

    const metavariable = this, ///
          metavariablePresent = context.isMetavariablePresent(metavariable);

    verifies = metavariablePresent; ///

    if (verifies) {
      context.debug(`...verified the '${metavariableString}' metavariable.`);
    }

    return verifies;
  }

  verifyGivenMetaType(metaType, context) {
    let verifiesGivenMetaType = false;

    const metavariableString = this.string,  ///
          metaTypeString = metaType.getString();

    context.trace(`Verifying the '${metavariableString}' metavariable given the '${metaTypeString}' meta-type...`);

    let metavariable = this;  ///

    metavariable = context.findMetavariable(metavariable);

    if (metavariable !== null) {
      const metavariableMetaTypeEqualToMetaType = metavariable.isMetaTypeEqualTo(metaType);

      verifiesGivenMetaType = metavariableMetaTypeEqualToMetaType;  ///
    }

    if (verifiesGivenMetaType) {
      context.debug(`...verified the '${metavariableString}' metavariable given the '${metaTypeString}' meta-type.`);
    }

    return verifiesGivenMetaType;
  }

  unifyFrame(frame, substitutions, generalContext, specificContext) {
    let frameUnifies = false;

    const frameString = frame.getString(),
          metavariableString = this.string; ///

    specificContext.trace(`Unifying the '${frameString}' frame with the '${metavariableString}' metavariable...`);

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
      specificContext.debug(`...unified the '${frameString}' frame with the '${metavariableString}' metavariable.`);
    }

    return frameUnifies;
  }

  unifyStatement(statement, substitution, substitutions, generalContext, specificContext) {
    let statementUnifies = false;

    const statementString = statement.getString(),
          metavariableString = this.string, ///
          substitutionString = (substitution !== null) ?
                                  substitution.getString() :
                                    EMPTY_STRING;

    specificContext.trace(`Unifying the '${statementString}' statement with the '${metavariableString}${substitutionString}' metavariable...`);

    const statementMetavariableUnifies = this.unifyStatementMetavariable(statement, substitutions, generalContext, specificContext);

    if (statementMetavariableUnifies) {
      statementUnifies = true;
    } else {
      const context = specificContext,  ///
            metavariable = this, ///
            substitutionPresent = substitutions.isSubstitutionPresentByMetavariableAndSubstitution(metavariable, substitution);

      if (substitutionPresent) {
        substitution = substitutions.findSubstitutionByMetavariableAndSubstitution(metavariable, substitution); ///

        const substitutionStatementEqualToStatement = substitution.isStatementEqualToStatement(statement, context);

        if (substitutionStatementEqualToStatement) {
          statementUnifies = true;
        }
      } else {
        const { StatementSubstitution } = elements,
              metavariable = this,
              statementSubstitution = StatementSubstitution.fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context);

        substitution = statementSubstitution;  ///

        substitutions.addSubstitution(substitution, context);

        statementUnifies = true;
      }
    }

    if (statementUnifies) {
      specificContext.debug(`...unified the '${statementString}' statement with the '${metavariableString}${substitutionString}' metavariable.`);
    }

    return statementUnifies;
  }

  unifyReference(reference, substitutions, generalContext, specificContext) {
    let referenceUnifies = false;

    const referenceString = reference.getString(),
          metavariableString = this.string; ///

    specificContext.trace(`Unifying the '${referenceString}' reference with the '${metavariableString}' metavariable...`);

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
              substitutionReferenceEqualToReference = substitution.isReferenceEqualToReference(reference, context);

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
      specificContext.debug(`...unified the '${referenceString}' reference with the '${metavariableString}' metavariable.`);
    }

    return referenceUnifies;
  }

  unifyMetavariable(metavariable, context) {
    let metavariableUnifies;

    const generalContext = context, ///
          specificContext = context,  ///
          generalMetavariable = this, ///
          specificMetavariable = metavariable,  ///
          generalMetavariableString = generalMetavariable.getString(),
          specificMetavariableString = specificMetavariable.getString();

    specificContext.trace(`Unifying the '${specificMetavariableString}' metavariable with the '${generalMetavariableString}' metavariable...`);

    metavariableUnifies = unifyMetavariable(generalMetavariable, specificMetavariable, generalContext, specificContext);

    if (metavariableUnifies) {
      specificContext.debug(`...unified the '${specificMetavariableString}' metavariable with the '${generalMetavariableString}' metavariable.`);
    }

    return metavariableUnifies;
  }

  unifyFrameMetavariable(frame, substitutions, generalContext, specificContext) {
    let frameMetavariableUnifies = false;

    const context = specificContext,  ///
          generalContextFilePath = generalContext.getFilePath(),
          specificContextFilePath = specificContext.getFilePath();

    if (generalContextFilePath === specificContextFilePath) {
      const metavariable = this,
            metavariableString = this.string, ///
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
            metavariableString = this.string, ///
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
            metavariableString = this.string, ///
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
          string = this.string, ///
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
