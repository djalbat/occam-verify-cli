"use strict";

import { Element } from "occam-languages";

import elements from "../elements";

import { define } from "../elements";
import { literally } from "../utilities/context";
import { EMPTY_STRING } from "../constants";
import { instantiateMetavariable } from "../process/instantiate";
import { metaTypeFromJSON, metaTypeToMetaTypeJSON } from "../utilities/json";
import { unifyMetavariable, unifyMetavariableIntrinsically } from "../process/unify";
import { nameFromMetavariableNode, termFromMetavariableNode, typeFromMetavariableNode } from "../utilities/element";

export default define(class Metavariable extends Element {
  constructor(context, string, node, name, term, type, metaType) {
    super(context, string, node);
    
    this.name = name;
    this.term = term;
    this.type = type;
    this.metaType = metaType;
  }

  getName() {
    return this.name;
  }

  getTerm() {
    return this.term;
  }

  getType() {
    return this.type;
  }

  getMetaType() {
    return this.metaType;
  }

  setMetaType(metaType) {
    this.metaType = metaType;
  }

  getMetavariableNode() {
    const node = this.getNode(),
          metavariableNode = node;  ///

    return metavariableNode;
  }

  getMetavariableName() {
    const metavariableNode = this.getMetavariableNode(),
          metavariableName = metavariableNode.getMetavariableName();

    return metavariableName;
  }

  isMetaTypeEqualTo(metaType) { return this.metaType.isEqualTo(metaType); }

  compare(metavariable) {
    const metavariableName = metavariable.getName(),
          comparesToMetavariableName = this.compareMetavariableName(metavariableName),
          comparesToMetavariable = comparesToMetavariableName;  ///

    return comparesToMetavariable;
  }

  compareMetavariableName(metavariableName) {
    const nameMetavariableName = (this.name === metavariableName),
          comparesToMetavariableName = nameMetavariableName;  ///

    return comparesToMetavariableName;
  }

  matchMetavariableNode(metavariableNode) {
    const node = metavariableNode, ///
          nodeMatches = this.matchNode(node),
          metavariableNodeMatches = nodeMatches; ///

    return metavariableNodeMatches;
  }

  verify(context) {
    let verifies = false;

    const metavariableString = this.getString();

    context.trace(`Verifying the '${metavariableString}' metavariable...`);

    const termVerifies = this.verifyTerm(context);

    if (termVerifies) {
      const typeVerifies = this.verifyType(context);

      if (typeVerifies) {
        verifies = true;
      }
    }

    if (verifies) {
      context.debug(`...verified the '${metavariableString}' metavariable.`);
    }

    return verifies;
  }

  verifyTerm(context) {
    let termVerifies = true;  ///

    if (this.term !== null) {
      const termString = this.term.getString(),
            metavariableString = this.getString();

      termVerifies = false;

      context.trace(`A '${termString}' term is present in the '${metavariableString}' metavariable.`);
    }

    return termVerifies;
  }

  verifyType(context) {
    let typeVerifies = true;  ///

    if (this.type !== null) {
      const typeString = this.type.getString(),
            metavariableString = this.getString();

      context.trace(`Verifying the '${metavariableString}' metavariable's '${typeString}' type...`);

      const typeName = this.type.getName(),
            typePresent = context.isTypePresentByTypeName(typeName);

      if (!typePresent) {
        typeVerifies = false;

        context.error(`Type '${typeName}' is not present.`);
      }

      if (typeVerifies) {
        context.debug(`...verifieds the '${metavariableString}' metavariable's '${typeString}' type.`);
      }
    }

    return typeVerifies;
  }

  validate(context) {
    let metavariable = null;

    const metavariableString = this.getString(); ///

    context.trace(`Validating the '${metavariableString}' metavariable...`);

    let validates = false;

    const typeValidates = this.validateType(context);

    if (typeValidates) {
      const termValidates = this.validateTerm(context);

      if (termValidates) {
        const nameValidates = this.validateName(context);

        if (nameValidates) {
          validates = true;
        }
      }
    }

    if (validates) {
      metavariable = this;  ///

      context.debug(`...validated the '${metavariableString}' metavariable.`);
    }

    return metavariable;
  }

  validateTerm(context) {
    let termValidates = true; ///

    if (this.term !== null) {
      const termString = this.term.getString(),
            metavariableString = this.getString();

      context.trace(`Validating the '${metavariableString}' metavariable's '${termString}' term...`);

      termValidates = false;

      const metavariableName = this.getMetavariableName(),
            metavariablePresent = context.isMetavariablePresentByMetavariableName(metavariableName);

      let term;

      if (metavariablePresent) {
        term = this.term.validate(context, () => {
          let validatesForwards = false;

          context.addTerm(this.term);

          const metavariable = this,
                metavariablePresent = context.isMetavariablePresent(metavariable, context);

          context.removeTerm(this.term);

          if (metavariablePresent) {
            validatesForwards = true;
          }

          return validatesForwards;
        });

      } else {
        term = this.term.validate(context, () => {
          const validatesForwards = true;

          return validatesForwards;
        });
      }

      if (term !== null) {
        this.term = term;

        termValidates = true;
      }

      if (termValidates) {
        context.debug(`...validated the '${metavariableString}' metavariable's '${termString}' term.`);
      }
    }

    return termValidates;
  }

  validateName(context) {
    let termValidates = true; ///

    const metavariableName = this.getMetavariableName(),  ///
          metavariableString = this.getString();  ///

    context.trace(`Validating the '${metavariableString}' metavariable's '${metavariableName}' name...`);

    const metavariable = context.findMetavariableByMetavariableName(metavariableName);

    if (metavariable !== null) {
      const metaType = metavariable.getMetaType(),
            metaTypeSTring = metaType.getString();

      this.metaType = metaType;

      context.trace(`Setting the '${metavariableString}' metavariable's meta-type to '${metaTypeSTring}'.`);
    }

    if (termValidates) {
      context.debug(`...validated the '${metavariableString}' metavariable's '${metavariableName}' name.`);
    }

    return termValidates;
  }

  validateType(context) {
    let typeValidates = true;  ///

    if (this.type !== null) {
      const typeString = this.type.getString(),
            metavariableString = this.getString();

      typeValidates = false;

      context.trace(`A '${typeString}' type is present in the '${metavariableString}' metavariable.`);
    }

    return typeValidates;
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
              substitutionFrameComparesToFrame = substitution.compareFrame(frame, context);

        if (substitutionFrameComparesToFrame) {
          frameUnifies = true;
        }
      } else {
        const { FrameSubstitution } = elements;

        let frameSubstitution;

        const metavariable = this;  ///

        frameSubstitution = FrameSubstitution.fromFrameAndMetavariable(frame, metavariable, context);

        frameSubstitution = frameSubstitution.validate(generalContext, specificContext);

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
                                      context.isSubstitutionPresentByMetavariableName(metavariableName);

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

        statementSubstitution = statementSubstitution.validate(generalContext, specificContext);

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
              substitutionReferenceComparesToReference = substitution.compareReference(reference, context);

        if (substitutionReferenceComparesToReference) {
          referenceUnifies = true;
        }
      } else {
        const { ReferenceSubstitution } = elements;

        let referenceSubstitution;

        const metavariable = this;

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
          metaType = metaTypeJSON,  ///
          string = this.getString(), ///
          json = {
            string,
            metaType
          };

    return json;
  }

  static name = "Metavariable";

  static fromJSON(json, context) {
    const metavariable = literally((context) => {
      const { string } = json,
            metavariableNode = instantiateMetavariable(string, context),
            node = metavariableNode,  ///
            name = nameFromMetavariableNode(metavariableNode, context),
            term = termFromMetavariableNode(metavariableNode, context),
            type = typeFromMetavariableNode(metavariableNode, context),
            metaType = metaTypeFromJSON(json, context),
            metavariable = new Metavariable(context, string, node, name, term, type, metaType);

      return metavariable;
    }, context);

    return metavariable;
  }
});
