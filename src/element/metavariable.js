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

  getMetavariableNode() {
    const node = this.getNode(),
          metavarialbeNode = node;  ///

    return metavarialbeNode;
  }

  getMetavariableName() {
    const metavarialbeNode = this.getMetavariableNode(),
          metavariableName = metavarialbeNode.getMetavariableName();

    return metavariableName;
  }

  compare(metavariable) {
    const metavariableName = metavariable.getName(),
          comparesToMetavariableName = this.compareMetavariableName(metavariableName),
          comparesToMetavariable = comparesToMetavariableName;  ///

    return comparesToMetavariable;
  }

  isMetaTypeEqualTo(metaType) { return this.metaType.isEqualTo(metaType); }

  compareMetavariableName(metavariableName) {
    const nameMetavariableName = (this.name === metavariableName),
          comparesToMetavariableName = nameMetavariableName;  ///

    return comparesToMetavariableName;
  }

  matchMetavariableNode(metavariableNode) {
    const metavariableNodeA = metavariableNode; ///

    metavariableNode = this.getMetavariableNode();  ///

    const metavariableNodeB = metavariableNode, ///
          metavariableNodeAMatchesMetavariableNodeB = metavariableNodeA.match(metavariableNodeB),
          metavariableNodeMatches = metavariableNodeAMatchesMetavariableNodeB;  ///

    return metavariableNodeMatches;
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

    const frameMetavariableUnifies = this.unifyFrameMetavariable(frame, generalContext, specificContext);

    if (frameMetavariableUnifies) {
      frameUnifies = true;
    } else {
      const metavariableName = this.getMetavariableName(),
            simpleSubstitution = context.findSimpleSubstitutionByMetavariableName(metavariableName);

      if (simpleSubstitution !== null) {
        const substitution = simpleSubstitution,  ///
              substitutionFrameEqualToFrame = substitution.isFrameEqualToFrame(frame);

        if (substitutionFrameEqualToFrame) {
          frameUnifies = true;
        }
      } else {
        const { FrameSubstitution } = elements,
              metavariable = this; ///

        let frameSubstitution;

        frameSubstitution = FrameSubstitution.fromFrameAndMetavariable(frame, metavariable, context);

        frameSubstitution = frameSubstitution.validate(generalContext, specificContext);  ///

        if (frameSubstitution !== null) {
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
      const metavariableName = metavariable.getName(),
            substitutionPresent = (substitution !== null) ?
                                    context.isSubstitutionPresentByMetavariableNameAndSubstitution(metavariableName, substitution) :
                                      context.findSubstitutionByMetavariableName(metavariableName);

      if (substitutionPresent) {
        substitution = (substitution !== null) ?
                         context.findSubstitutionByMetavariableNameAndSubstitution(metavariableName, substitution) :
                           context.findSubstitutionByMetavariableName(metavariableName);

        const substitutionComparesToStatement = substitution.compareStatement(statement, context);

        if (substitutionComparesToStatement) {
          statementUnifies = true;
        }
      } else {
        const { StatementSubstitution } = elements;

        let statementSubstitution;

        statementSubstitution = (substitution !== null) ?
                                  StatementSubstitution.fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context) :
                                    StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context);

        if (substitution !== null) {
          const context = generalContext; ///

          substitution = statementSubstitution.getSubstitution();

          substitution.setContext(context);
        }

        statementSubstitution = statementSubstitution.validate(generalContext, specificContext);  ///

        if (statementSubstitution !== null) {
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

    const referenceMetavariableUnifies = this.unifyReferenceMetavariable(reference, generalContext, specificContext);

    if (referenceMetavariableUnifies) {
      referenceUnifies = true;
    } else {
      const metavariableName = this.getMetavariableName(),
            simpleSubstitutionPresent = context.isSimpleSubstitutionPresentByMetavariableName(metavariableName);

      if (simpleSubstitutionPresent) {
        const simpleSubstitution = context.findSimpleSubstitutionByMetavariableName(metavariableName),
              substitution = simpleSubstitution,  ///
              substitutionReferenceEqualToReference = substitution.isReferenceEqualToReference(reference);

        if (substitutionReferenceEqualToReference) {
          referenceUnifies = true;
        }
      } else {
        const { ReferenceSubstitution } = elements,
              metavariable = this; ///

        let referenceSubstitution;

        referenceSubstitution = ReferenceSubstitution.fromReferenceAndMetavariable(reference, metavariable, context);

        referenceSubstitution = referenceSubstitution.validate(generalContext, specificContext);  ///

        if (referenceSubstitution !== null) {
          referenceUnifies = true;

        }
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
      const metavariableName = this.getMetavariableName(),  ///
            frameMetavariableComparesToMetvariable = frame.compareMetavariableName(metavariableName);

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
