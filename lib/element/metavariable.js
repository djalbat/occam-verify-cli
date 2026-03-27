"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _occamlanguages = require("occam-languages");
const _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
const _context = require("../utilities/context");
const _constants = require("../constants");
const _instantiate = require("../process/instantiate");
const _json = require("../utilities/json");
const _unify = require("../process/unify");
const _element = require("../utilities/element");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const _default = (0, _elements.define)(class Metavariable extends _occamlanguages.Element {
    constructor(context, string, node, name, term, type, metaType){
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
        const node = this.getNode(), metavariableNode = node; ///
        return metavariableNode;
    }
    getMetavariableName() {
        const metavariableNode = this.getMetavariableNode(), metavariableName = metavariableNode.getMetavariableName();
        return metavariableName;
    }
    isDeclared(context) {
        const metavariableName = this.getMetavariableName(), declaredMetavariable = context.findDeclaredMetavariableByMetavariableName(metavariableName), declared = declaredMetavariable !== null;
        return declared;
    }
    isEqualTo(metavariable1) {
        const metavariableNode = metavariable1.getNode(), metavariableNodeMatches = this.matchMetavariableNode(metavariableNode), equalTo = metavariableNodeMatches; ///
        return equalTo;
    }
    isMetaTypeEqualTo(metaType) {
        return this.metaType.isEqualTo(metaType);
    }
    matchMetavariableNode(metavariableNode) {
        const node = metavariableNode, nodeMatches = this.matchNode(node), metavariableNodeMatches = nodeMatches; ///
        return metavariableNodeMatches;
    }
    compare(metavariable1) {
        const metavariableName = metavariable1.getName(), comparesToMetavariableName = this.compareMetavariableName(metavariableName), comparesToMetavariable = comparesToMetavariableName; ///
        return comparesToMetavariable;
    }
    compareMetavariableName(metavariableName) {
        const nameMetavariableName = this.name === metavariableName, comparesToMetavariableName = nameMetavariableName; ///
        return comparesToMetavariableName;
    }
    findValidMetavariable(context) {
        const metavariableNode = this.getMetavariableNode(), metavariable1 = context.findMetavariableByMetavariableNode(metavariableNode), validMetavariable = metavariable1; ///
        return validMetavariable;
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
        let termVerifies = true; ///
        if (this.term !== null) {
            const termString = this.term.getString(), metavariableString = this.getString();
            termVerifies = false;
            context.trace(`A '${termString}' term is present in the '${metavariableString}' metavariable.`);
        }
        return termVerifies;
    }
    verifyType(context) {
        let typeVerifies = true; ///
        if (this.type !== null) {
            const typeString = this.type.getString(), metavariableString = this.getString();
            context.trace(`Verifying the '${metavariableString}' metavariable's '${typeString}' type...`);
            const typeName = this.type.getName(), type = context.findTypeByTypeName(typeName);
            if (type !== null) {
                this.type = type;
                typeVerifies = true;
                context.error(`Type '${typeName}' is not present.`);
            }
            if (typeVerifies) {
                context.debug(`...verifieds the '${metavariableString}' metavariable's '${typeString}' type.`);
            }
        }
        return typeVerifies;
    }
    validate(strict, context) {
        if (context === undefined) {
            context = strict; ///
            strict = false;
        }
        let metavariable1 = null;
        const metavariableString = this.getString(); ///
        context.trace(`Validating the '${metavariableString}' metavariable...`);
        const validMetavariable = this.findValidMetavariable(context), valid = validMetavariable !== null;
        if (valid) {
            metavariable1 = validMetavariable; ///
            context.debug(`...the '${metavariableString}' metavariable is already valid.`);
        } else {
            let validates = false;
            const typeValidates = this.validateType(strict, context);
            if (typeValidates) {
                const termValidates = this.validateTerm(strict, context);
                if (termValidates) {
                    const nameValidates = this.validateName(strict, context);
                    if (nameValidates) {
                        validates = true;
                    }
                }
            }
            if (validates) {
                metavariable1 = this; ///
                const declared = this.isDeclared(context);
                if (declared) {
                    context.addMetavariable(metavariable1);
                }
                context.debug(`...validated the '${metavariableString}' metavariable.`);
            }
        }
        return metavariable1;
    }
    validateType(strict, context) {
        let typeValidates = false;
        const metavariableString = this.getString(); ///
        context.trace(`Validating  the '${metavariableString}' metavariable's type...`);
        if (this.type === null) {
            typeValidates = true;
        } else {
            const typeString = this.type.getString();
            context.trace(`A '${typeString}' type is present in the '${metavariableString}' metavariable.`);
        }
        if (typeValidates) {
            context.trace(`...validated  the '${metavariableString}' metavariable's type.`);
        }
        return typeValidates;
    }
    validateTerm(strict, context) {
        let termValidates = true; ///
        if (this.term !== null) {
            termValidates = false;
            const termString = this.term.getString(), metavariableString = this.getString();
            context.trace(`Validating the '${metavariableString}' metavariable's '${termString}' term...`);
            const metavariableName = this.getMetavariableName(), declaredMetavaraible = context.findDeclaredMetavariableByMetavariableName(metavariableName);
            let term = null;
            if (declaredMetavaraible !== null) {
                const type = metavariable.getType();
                if (type !== null) {
                    term = this.term.validateGivenType(type, context);
                }
            } else {
                if (!strict) {
                    term = this.term.validate(context, (term)=>{
                        const validatesForwards = true;
                        return validatesForwards;
                    });
                }
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
    validateName(strict, context) {
        let nameValidates = true; ///
        const metavariableName = this.getMetavariableName(), metavariableString = this.getString(); ///
        context.trace(`Validating the '${metavariableString}' metavariable's '${metavariableName}' name...`);
        const declaredMetavariable = context.findDeclaredMetavariableByMetavariableName(metavariableName);
        if (declaredMetavariable !== null) {
            const metaType = declaredMetavariable.getMetaType(), metaTypeString = metaType.getString();
            this.metaType = metaType;
            context.trace(`Setting the '${metavariableString}' metavariable's meta-type to the '${metaTypeString}' meta-type.`);
        } else {
            if (strict) {
                nameValidates = false;
            }
        }
        if (nameValidates) {
            context.debug(`...validated the '${metavariableString}' metavariable's '${metavariableName}' name.`);
        }
        return nameValidates;
    }
    unifyFrame(frame, generalContext, specificContext) {
        let frameUnifies = false;
        const context = specificContext, frameString = frame.getString(), metavariableString = this.getString(); ///
        context.trace(`Unifying the '${frameString}' frame with the '${metavariableString}' metavariable...`);
        const metavariable1 = this, frameMetavariableUnifies = this.unifyFrameMetavariable(frame, generalContext, specificContext);
        if (frameMetavariableUnifies) {
            frameUnifies = true;
        } else {
            const metavariableNode = metavariable1.getNode(), substitution = context.findSubstitutionByMetavariableNode(metavariableNode);
            if (substitution !== null) {
                const substitutionFrameComparesToFrame = substitution.compareFrame(frame, context);
                if (substitutionFrameComparesToFrame) {
                    const frameSubstitution = substitution, frameSubstitutionString = frameSubstitution.getString();
                    context.trace(`The '${frameSubstitutionString}' frame substitution is already present.`);
                    frameUnifies = true;
                }
            } else {
                const { FrameSubstitution } = _elements.default, frameSubstitution = FrameSubstitution.fromFrameAndMetavariable(frame, metavariable1, context);
                frameSubstitution.validate(generalContext, specificContext);
                frameUnifies = true;
            }
        }
        if (frameUnifies) {
            context.debug(`...unified the '${frameString}' frame with the '${metavariableString}' metavariable.`);
        }
        return frameUnifies;
    }
    unifyStatement(statement, substitution, generalContext, specificContext) {
        let statementUnifies = false;
        const context = specificContext, statementString = statement.getString(), metavariableString = this.getString(), substitutionString = substitution !== null ? substitution.getString() : _constants.EMPTY_STRING;
        context.trace(`Unifying the '${statementString}' statement with the '${metavariableString}${substitutionString}' metavariable...`);
        const metavariable1 = this, statementMetavariableUnifies = this.unifyStatementMetavariable(statement, generalContext, specificContext);
        if (statementMetavariableUnifies) {
            statementUnifies = true;
        } else {
            const metavariableNode = metavariable1.getNode(), substitutionPresent = substitution !== null ? context.isSubstitutionPresentByMetavariableNodeAndSubstitution(metavariableNode, substitution) : context.isSubstitutionPresentByMetavariableNode(metavariableNode);
            if (substitutionPresent) {
                substitution = substitution !== null ? context.findSubstitutionByMetavariableNodeAndSubstitution(metavariableNode, substitution) : context.findSubstitutionByMetavariableNode(metavariableNode);
                const substitutionComparesToStatement = substitution.compareStatement(statement, context);
                if (substitutionComparesToStatement) {
                    const statementSubstitution = substitution, statementSubstitutionString = statementSubstitution.getString();
                    context.trace(`The '${statementSubstitutionString}' statement substitution is already present.`);
                    statementUnifies = true;
                }
            } else {
                const { StatementSubstitution } = _elements.default, statementSubstitution = substitution !== null ? StatementSubstitution.fromStatementMetavariableAndSubstitution(statement, metavariable1, substitution, context) : StatementSubstitution.fromStatementAndMetavariable(statement, metavariable1, context);
                statementSubstitution.validate(generalContext, specificContext);
                statementUnifies = true;
            }
        }
        if (statementUnifies) {
            context.debug(`...unified the '${statementString}' statement with the '${metavariableString}${substitutionString}' metavariable.`);
        }
        return statementUnifies;
    }
    unifyReference(reference, generalContext, specificContext) {
        let referenceUnifies = false;
        const context = specificContext, referenceString = reference.getString(), metavariableString = this.getString(); ///
        context.trace(`Unifying the '${referenceString}' reference with the '${metavariableString}' metavariable...`);
        const metavariable1 = this, referenceMetavariableUnifies = this.unifyReferenceMetavariable(reference, generalContext, specificContext);
        if (referenceMetavariableUnifies) {
            referenceUnifies = true;
        } else {
            const metavariableNode = metavariable1.getNode(), substitution = context.findSubstitutionByMetavariableNode(metavariableNode);
            if (substitution !== null) {
                const substitutionReferenceComparesToReference = substitution.compareReference(reference, context);
                if (substitutionReferenceComparesToReference) {
                    const referenceSubstitution = substitution, referenceSubstitutionString = referenceSubstitution.getString();
                    context.trace(`The '${referenceSubstitutionString}' reference substitution is already present.`);
                    referenceUnifies = true;
                }
            } else {
                const { ReferenceSubstitution } = _elements.default, referenceSubstitution = ReferenceSubstitution.fromReferenceAndMetavariable(reference, metavariable1, context);
                referenceSubstitution.validate(generalContext, specificContext);
                referenceUnifies = true;
            }
        }
        if (referenceUnifies) {
            context.debug(`...unified the '${referenceString}' reference with the '${metavariableString}' metavariable.`);
        }
        return referenceUnifies;
    }
    unifyMetavariable(metavariable1, context) {
        let metavariableUnifies;
        const specificContext = context; ///
        context = this.getContext();
        const generalContext = context; ///
        context = specificContext; ///
        const generalMetavariable = this, specificMetavariable = metavariable1, generalMetavariableString = generalMetavariable.getString(), specificMetavariableString = specificMetavariable.getString();
        context.trace(`Unifying the '${specificMetavariableString}' metavariable with the '${generalMetavariableString}' metavariable...`);
        metavariableUnifies = (0, _unify.unifyMetavariable)(generalMetavariable, specificMetavariable, generalContext, specificContext);
        if (metavariableUnifies) {
            context.debug(`...unified the '${specificMetavariableString}' metavariable with the '${generalMetavariableString}' metavariable.`);
        }
        return metavariableUnifies;
    }
    unifyFrameMetavariable(frame, generalContext, specificContext) {
        let frameMetavariableUnifies = false;
        const context = specificContext, frameString = frame.getString(), metavariableString = this.getString(); ///
        context.trace(`Unifying the '${frameString}' frame's metavariable with the '${metavariableString}' metavariable...`);
        const generalContextFilePath = generalContext.getFilePath(), specificContextFilePath = specificContext.getFilePath();
        if (generalContextFilePath === specificContextFilePath) {
            const metavariableNode = this.getMetavariableNode(), metavariableNodeMatches = frame.matchMetavariableNode(metavariableNode);
            if (metavariableNodeMatches) {
                frameMetavariableUnifies = true;
            } else {
                const frameSingular = frame.isSingular();
                if (frameSingular) {
                    const frameMetavariableName = frame.getMetavariableName(), frameDeclaredMetavariable = context.findDeclaredMetavariableByMetavariableName(frameMetavariableName), frameMetavariableUnifiesIntrinsically = this.unifyMetavariableIntrinsically(frameDeclaredMetavariable, generalContext, specificContext);
                    if (frameMetavariableUnifiesIntrinsically) {
                        frameMetavariableUnifies = true;
                    }
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
        const context = specificContext, referenceString = reference.getString(), metavariableString = this.getString();
        context.trace(`Unifying the '${referenceString}' reference's metavariable with the '${metavariableString}' metavariable...`);
        const generalContextFilePath = generalContext.getFilePath(), specificContextFilePath = specificContext.getFilePath();
        if (generalContextFilePath === specificContextFilePath) {
            const metavariable1 = this, referenceMetavariableComparesToMetvariable = reference.compareMetavariable(metavariable1);
            if (referenceMetavariableComparesToMetvariable) {
                referenceMetavariableUnifies = true;
            } else {
                const referenceMetavariable = reference.getMetavariable(), referenceMetavariableUnifiesIntrinsically = this.unifyMetavariableIntrinsically(referenceMetavariable, generalContext, specificContext);
                if (referenceMetavariableUnifiesIntrinsically) {
                    referenceMetavariableUnifies = true;
                }
            }
        }
        if (referenceMetavariableUnifies) {
            context.trace(`...unified the '${referenceString}' reference's metavariable with the '${metavariableString}' metavariable.`);
        }
        return referenceMetavariableUnifies;
    }
    unifyStatementMetavariable(statement, generalContext, specificContext) {
        let statementMetavariableUnifies = false;
        const context = specificContext, statementString = statement.getString(), metavariableString = this.getString(); ///
        context.trace(`Unifying the '${statementString}' statement's metavariable with the '${metavariableString}' metavariable...`);
        const generalContextFilePath = generalContext.getFilePath(), specificContextFilePath = specificContext.getFilePath();
        if (generalContextFilePath === specificContextFilePath) {
            const metavariableNode = this.getMetavariableNode(), statementMetavariableComparesToMetvariable = statement.matchMetavariableNode(metavariableNode);
            if (statementMetavariableComparesToMetvariable) {
                statementMetavariableUnifies = true;
            } else {
                const statementSingular = statement.isSingular();
                if (statementSingular) {
                    const statementMetavariableName = statement.getMetavariableName(), statementDeclaredMetavariable = context.findDeclaredMetavariableByMetavariableName(statementMetavariableName), statementMetavariableUnifiesIntrinsically = this.unifyMetavariableIntrinsically(statementDeclaredMetavariable, generalContext, specificContext);
                    if (statementMetavariableUnifiesIntrinsically) {
                        statementMetavariableUnifies = true;
                    }
                }
            }
        }
        if (statementMetavariableUnifies) {
            context.debug(`...unified the '${statementString}' statement's metavariable with the '${metavariableString}' metavariable.`);
        }
        return statementMetavariableUnifies;
    }
    unifyMetavariableIntrinsically(metavariable1, generalContext, specificContext) {
        let metavariableUnifiesIntrinsically;
        const context = specificContext, generalMetavariable = this, specificMetavariable = metavariable1, generalMetavariableString = generalMetavariable.getString(), specificMetavariableString = specificMetavariable.getString();
        context.trace(`Unifying the '${specificMetavariableString}' metavariable with the '${generalMetavariableString}' metavariable intrinsically...`);
        metavariableUnifiesIntrinsically = (0, _unify.unifyMetavariableIntrinsically)(generalMetavariable, specificMetavariable, generalContext, specificContext);
        if (metavariableUnifiesIntrinsically) {
            context.debug(`...unified the '${specificMetavariableString}' metavariable with the '${generalMetavariableString}' metavariable intrinsically.`);
        }
        return metavariableUnifiesIntrinsically;
    }
    toJSON() {
        const metaTypeJSON = (0, _json.metaTypeToMetaTypeJSON)(this.metaType), metaType = metaTypeJSON, string = this.getString(), json = {
            string,
            metaType
        };
        return json;
    }
    static name = "Metavariable";
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string } = json, metavariableNode = (0, _instantiate.instantiateMetavariable)(string, context), node = metavariableNode, name = (0, _element.nameFromMetavariableNode)(metavariableNode, context), term = (0, _element.termFromMetavariableNode)(metavariableNode, context), type = (0, _element.typeFromMetavariableNode)(metavariableNode, context), metaType = (0, _json.metaTypeFromJSON)(json, context), metavariable1 = new Metavariable(context, string, node, name, term, type, metaType);
            return metavariable1;
        }, context);
    }
    static fromStatement(statement, context) {
        const statementNode = statement.getNode(), metavariable1 = (0, _element.metavariableFromStatementNode)(statementNode, context);
        return metavariable1;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZU1ldGF2YXJpYWJsZSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBtZXRhVHlwZUZyb21KU09OLCBtZXRhVHlwZVRvTWV0YVR5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyB1bmlmeU1ldGF2YXJpYWJsZSwgdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IG5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSwgdGVybUZyb21NZXRhdmFyaWFibGVOb2RlLCB0eXBlRnJvbU1ldGF2YXJpYWJsZU5vZGUsIG1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBNZXRhdmFyaWFibGUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCB0ZXJtLCB0eXBlLCBtZXRhVHlwZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG4gICAgXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5tZXRhVHlwZSA9IG1ldGFUeXBlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YVR5cGU7XG4gIH1cblxuICBzZXRNZXRhVHlwZShtZXRhVHlwZSkge1xuICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgaXNEZWNsYXJlZChjb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kRGVjbGFyZWRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgZGVjbGFyZWQgPSAoZGVjbGFyZWRNZXRhdmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmVkO1xuICB9XG5cbiAgaXNFcXVhbFRvKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzTWV0YVR5cGVFcXVhbFRvKG1ldGFUeXBlKSB7IHJldHVybiB0aGlzLm1ldGFUeXBlLmlzRXF1YWxUbyhtZXRhVHlwZSk7IH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgY29tcGFyZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgY29tcGFyZXNUb01ldGF2YXJpYWJsZSA9IGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb01ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lTWV0YXZhcmlhYmxlTmFtZSA9ICh0aGlzLm5hbWUgPT09IG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gbmFtZU1ldGF2YXJpYWJsZU5hbWU7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGZpbmRWYWxpZE1ldGF2YXJpYWJsZShjb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICB2YWxpZE1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTsgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRNZXRhdmFyaWFibGU7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVRlcm0oY29udGV4dCk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCB0eXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVR5cGUoY29udGV4dCk7XG5cbiAgICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlUZXJtKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZlcmlmaWVzID0gdHJ1ZTsgIC8vL1xuXG4gICAgaWYgKHRoaXMudGVybSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHRlcm1WZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBBICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGlzIHByZXNlbnQgaW4gdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VHlwZShjb250ZXh0KSB7XG4gICAgbGV0IHR5cGVWZXJpZmllcyA9IHRydWU7ICAvLy9cblxuICAgIGlmICh0aGlzLnR5cGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSdzICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcblxuICAgICAgICBjb250ZXh0LmVycm9yKGBUeXBlICcke3R5cGVOYW1lfScgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWRzIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGUoc3RyaWN0LCBjb250ZXh0KSB7XG4gICAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGV4dCA9IHN0cmljdDsgLy8vXG5cbiAgICAgIHN0cmljdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkTWV0YXZhcmlhYmxlID0gdGhpcy5maW5kVmFsaWRNZXRhdmFyaWFibGUoY29udGV4dCksXG4gICAgICAgICAgdmFsaWQgPSAodmFsaWRNZXRhdmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICBtZXRhdmFyaWFibGUgPSB2YWxpZE1ldGF2YXJpYWJsZTsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCB0eXBlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVR5cGUoc3RyaWN0LCBjb250ZXh0KTtcblxuICAgICAgaWYgKHR5cGVWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgdGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUZXJtKHN0cmljdCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb25zdCBuYW1lVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZU5hbWUoc3RyaWN0LCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChuYW1lVmFsaWRhdGVzKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IHRoaXM7ICAvLy9cblxuICAgICAgICBjb25zdCBkZWNsYXJlZCA9IHRoaXMuaXNEZWNsYXJlZChjb250ZXh0KTtcblxuICAgICAgICBpZiAoZGVjbGFyZWQpIHtcbiAgICAgICAgICBjb250ZXh0LmFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHZhbGlkYXRlVHlwZShzdHJpY3QsIGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyAgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSdzIHR5cGUuLi5gKTtcblxuICAgIGlmICh0aGlzLnR5cGUgPT09IG51bGwpIHtcbiAgICAgIHR5cGVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBBICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZXNlbnQgaW4gdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udmFsaWRhdGVkICB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlVGVybShzdHJpY3QsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZhbGlkYXRlcyA9IHRydWU7IC8vL1xuXG4gICAgaWYgKHRoaXMudGVybSAhPT0gbnVsbCkge1xuICAgICAgdGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgICAgZGVjbGFyZWRNZXRhdmFyYWlibGUgPSBjb250ZXh0LmZpbmREZWNsYXJlZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgbGV0IHRlcm0gPSBudWxsO1xuXG4gICAgICBpZiAoZGVjbGFyZWRNZXRhdmFyYWlibGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdHlwZSA9IG1ldGF2YXJpYWJsZS5nZXRUeXBlKCk7XG5cbiAgICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgICB0ZXJtID0gdGhpcy50ZXJtLnZhbGlkYXRlR2l2ZW5UeXBlKHR5cGUsIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgIHRlcm0gPSB0aGlzLnRlcm0udmFsaWRhdGUoY29udGV4dCwgKHRlcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMudGVybSA9IHRlcm07XG5cbiAgICAgICAgdGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgJyR7dGVybVN0cmluZ30nIHRlcm0uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZU5hbWUoc3RyaWN0LCBjb250ZXh0KSB7XG4gICAgbGV0IG5hbWVWYWxpZGF0ZXMgPSB0cnVlOyAvLy9cblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKSwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSdzICcke21ldGF2YXJpYWJsZU5hbWV9JyBuYW1lLi4uYCk7XG5cbiAgICBjb25zdCBkZWNsYXJlZE1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZERlY2xhcmVkTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKGRlY2xhcmVkTWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhVHlwZSA9IGRlY2xhcmVkTWV0YXZhcmlhYmxlLmdldE1ldGFUeXBlKCksXG4gICAgICAgICAgICBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgICB0aGlzLm1ldGFUeXBlID0gbWV0YVR5cGU7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFNldHRpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSdzIG1ldGEtdHlwZSB0byB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzdHJpY3QpIHtcbiAgICAgICAgbmFtZVZhbGlkYXRlcyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuYW1lVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSdzICcke21ldGF2YXJpYWJsZU5hbWV9JyBuYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBuYW1lVmFsaWRhdGVzO1xuICB9XG5cbiAgdW5pZnlGcmFtZShmcmFtZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBmcmFtZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBmcmFtZVN0cmluZyA9IGZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzID0gdGhpcy51bmlmeUZyYW1lTWV0YXZhcmlhYmxlKGZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGZyYW1lVW5pZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkZyYW1lQ29tcGFyZXNUb0ZyYW1lID0gc3Vic3RpdHV0aW9uLmNvbXBhcmVGcmFtZShmcmFtZSwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbkZyYW1lQ29tcGFyZXNUb0ZyYW1lKSB7XG4gICAgICAgICAgY29uc3QgZnJhbWVTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nID0gZnJhbWVTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24gaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuXG4gICAgICAgICAgZnJhbWVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeyBGcmFtZVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gRnJhbWVTdWJzdGl0dXRpb24uZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uLnZhbGlkYXRlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGZyYW1lVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYW1lVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkc7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30ke3N1YnN0aXR1dGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25QcmVzZW50ID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5pc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uUHJlc2VudCkge1xuICAgICAgICBzdWJzdGl0dXRpb24gPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkNvbXBhcmVzVG9TdGF0ZW1lbnQgPSBzdWJzdGl0dXRpb24uY29tcGFyZVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25Db21wYXJlc1RvU3RhdGVtZW50KSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLCAvL1xuICAgICAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcblxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB7IFN0YXRlbWVudFN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGF0ZW1lbnRTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uLCBjb250ZXh0KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGF0ZW1lbnRTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uLnZhbGlkYXRlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfSR7c3Vic3RpdHV0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlSZWZlcmVuY2UocmVmZXJlbmNlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0aGlzLnVuaWZ5UmVmZXJlbmNlTWV0YXZhcmlhYmxlKHJlZmVyZW5jZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAocmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgcmVmZXJlbmNlVW5pZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblJlZmVyZW5jZUNvbXBhcmVzVG9SZWZlcmVuY2UgPSBzdWJzdGl0dXRpb24uY29tcGFyZVJlZmVyZW5jZShyZWZlcmVuY2UsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25SZWZlcmVuY2VDb21wYXJlc1RvUmVmZXJlbmNlKSB7XG4gICAgICAgICAgY29uc3QgcmVmZXJlbmNlU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmcgPSByZWZlcmVuY2VTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7cmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nfScgcmVmZXJlbmNlIHN1YnN0aXR1dGlvbiBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG5cbiAgICAgICAgICByZWZlcmVuY2VVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeyBSZWZlcmVuY2VTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb24gPSBSZWZlcmVuY2VTdWJzdGl0dXRpb24uZnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIG1ldGF2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uLnZhbGlkYXRlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHJlZmVyZW5jZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWZlcmVuY2VVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2Ugd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVVuaWZpZXM7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgY29uc3QgZ2VuZXJhbE1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlLCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZyA9IGdlbmVyYWxNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmcgPSBzcGVjaWZpY01ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBtZXRhdmFyaWFibGVVbmlmaWVzID0gdW5pZnlNZXRhdmFyaWFibGUoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke2dlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeUZyYW1lTWV0YXZhcmlhYmxlKGZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dEZpbGVQYXRoID0gZ2VuZXJhbENvbnRleHQuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCA9IHNwZWNpZmljQ29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgaWYgKGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPT09IHNwZWNpZmljQ29udGV4dEZpbGVQYXRoKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOb2RlKCksICAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gZnJhbWUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZyYW1lU2luZ3VsYXIgPSBmcmFtZS5pc1Npbmd1bGFyKCk7XG5cbiAgICAgICAgaWYgKGZyYW1lU2luZ3VsYXIpIHtcbiAgICAgICAgICBjb25zdCBmcmFtZU1ldGF2YXJpYWJsZU5hbWUgPSBmcmFtZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgICAgICAgZnJhbWVEZWNsYXJlZE1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZERlY2xhcmVkTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKGZyYW1lTWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgICAgICAgZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHRoaXMudW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KGZyYW1lRGVjbGFyZWRNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkpIHtcbiAgICAgICAgICAgIGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5UmVmZXJlbmNlTWV0YXZhcmlhYmxlKHJlZmVyZW5jZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlJ3MgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9IGdlbmVyYWxDb250ZXh0LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0RmlsZVBhdGggPSBzcGVjaWZpY0NvbnRleHQuZ2V0RmlsZVBhdGgoKTtcblxuICAgIGlmIChnZW5lcmFsQ29udGV4dEZpbGVQYXRoID09PSBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgcmVmZXJlbmNlTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldHZhcmlhYmxlID0gcmVmZXJlbmNlLmNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgaWYgKHJlZmVyZW5jZU1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXR2YXJpYWJsZSkge1xuICAgICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZU1ldGF2YXJpYWJsZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgICAgcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSB0aGlzLnVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShyZWZlcmVuY2VNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChyZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSkge1xuICAgICAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSdzIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50J3MgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9IGdlbmVyYWxDb250ZXh0LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0RmlsZVBhdGggPSBzcGVjaWZpY0NvbnRleHQuZ2V0RmlsZVBhdGgoKTtcblxuICAgIGlmIChnZW5lcmFsQ29udGV4dEZpbGVQYXRoID09PSBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldHZhcmlhYmxlID0gc3RhdGVtZW50Lm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKHN0YXRlbWVudE1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXR2YXJpYWJsZSkge1xuICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudFNpbmd1bGFyID0gc3RhdGVtZW50LmlzU2luZ3VsYXIoKTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50U2luZ3VsYXIpIHtcbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOYW1lID0gc3RhdGVtZW50LmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICAgICAgICBzdGF0ZW1lbnREZWNsYXJlZE1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZERlY2xhcmVkTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKHN0YXRlbWVudE1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdGhpcy51bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkoc3RhdGVtZW50RGVjbGFyZWRNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5KSB7XG4gICAgICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50J3MgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbE1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlLFxuICAgICAgICAgIGdlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmcgPSBnZW5lcmFsTWV0YXZhcmlhYmxlLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmcgPSBzcGVjaWZpY01ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGludHJpbnNpY2FsbHkuLi5gKTtcblxuICAgIG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7Z2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBpbnRyaW5zaWNhbGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtZXRhVHlwZUpTT04gPSBtZXRhVHlwZVRvTWV0YVR5cGVKU09OKHRoaXMubWV0YVR5cGUpLFxuICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIG1ldGFUeXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk1ldGF2YXJpYWJsZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBpbnN0YW50aWF0ZU1ldGF2YXJpYWJsZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICB0ZXJtID0gdGVybUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgdHlwZSA9IHR5cGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCB0ZXJtLCB0eXBlLCBtZXRhVHlwZSk7XG5cbiAgICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIk1ldGF2YXJpYWJsZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsIm5hbWUiLCJ0ZXJtIiwidHlwZSIsIm1ldGFUeXBlIiwiZ2V0TmFtZSIsImdldFRlcm0iLCJnZXRUeXBlIiwiZ2V0TWV0YVR5cGUiLCJzZXRNZXRhVHlwZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJnZXROb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiaXNEZWNsYXJlZCIsImRlY2xhcmVkTWV0YXZhcmlhYmxlIiwiZmluZERlY2xhcmVkTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwiZGVjbGFyZWQiLCJpc0VxdWFsVG8iLCJtZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsImVxdWFsVG8iLCJpc01ldGFUeXBlRXF1YWxUbyIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwiY29tcGFyZSIsImNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJjb21wYXJlc1RvTWV0YXZhcmlhYmxlIiwibmFtZU1ldGF2YXJpYWJsZU5hbWUiLCJmaW5kVmFsaWRNZXRhdmFyaWFibGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlIiwidmFsaWRNZXRhdmFyaWFibGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsIm1ldGF2YXJpYWJsZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidGVybVZlcmlmaWVzIiwidmVyaWZ5VGVybSIsInR5cGVWZXJpZmllcyIsInZlcmlmeVR5cGUiLCJkZWJ1ZyIsInRlcm1TdHJpbmciLCJ0eXBlU3RyaW5nIiwidHlwZU5hbWUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJlcnJvciIsInZhbGlkYXRlIiwic3RyaWN0IiwidW5kZWZpbmVkIiwidmFsaWQiLCJ2YWxpZGF0ZXMiLCJ0eXBlVmFsaWRhdGVzIiwidmFsaWRhdGVUeXBlIiwidGVybVZhbGlkYXRlcyIsInZhbGlkYXRlVGVybSIsIm5hbWVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZU5hbWUiLCJhZGRNZXRhdmFyaWFibGUiLCJkZWNsYXJlZE1ldGF2YXJhaWJsZSIsInZhbGlkYXRlR2l2ZW5UeXBlIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJtZXRhVHlwZVN0cmluZyIsInVuaWZ5RnJhbWUiLCJmcmFtZSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwiZnJhbWVVbmlmaWVzIiwiZnJhbWVTdHJpbmciLCJmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMiLCJ1bmlmeUZyYW1lTWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZSIsInN1YnN0aXR1dGlvbkZyYW1lQ29tcGFyZXNUb0ZyYW1lIiwiY29tcGFyZUZyYW1lIiwiZnJhbWVTdWJzdGl0dXRpb24iLCJmcmFtZVN1YnN0aXR1dGlvblN0cmluZyIsIkZyYW1lU3Vic3RpdHV0aW9uIiwiZWxlbWVudHMiLCJmcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUiLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZXMiLCJzdGF0ZW1lbnRTdHJpbmciLCJzdWJzdGl0dXRpb25TdHJpbmciLCJFTVBUWV9TVFJJTkciLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnRNZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb25QcmVzZW50IiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uIiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkNvbXBhcmVzVG9TdGF0ZW1lbnQiLCJjb21wYXJlU3RhdGVtZW50Iiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nIiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUiLCJ1bmlmeVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInJlZmVyZW5jZVVuaWZpZXMiLCJyZWZlcmVuY2VTdHJpbmciLCJyZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlSZWZlcmVuY2VNZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb25SZWZlcmVuY2VDb21wYXJlc1RvUmVmZXJlbmNlIiwiY29tcGFyZVJlZmVyZW5jZSIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsInJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZyIsIlJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsImZyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUiLCJ1bmlmeU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVVuaWZpZXMiLCJnZXRDb250ZXh0IiwiZ2VuZXJhbE1ldGF2YXJpYWJsZSIsInNwZWNpZmljTWV0YXZhcmlhYmxlIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZyIsInNwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nIiwiZ2VuZXJhbENvbnRleHRGaWxlUGF0aCIsImdldEZpbGVQYXRoIiwic3BlY2lmaWNDb250ZXh0RmlsZVBhdGgiLCJmcmFtZVNpbmd1bGFyIiwiaXNTaW5ndWxhciIsImZyYW1lTWV0YXZhcmlhYmxlTmFtZSIsImZyYW1lRGVjbGFyZWRNZXRhdmFyaWFibGUiLCJmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5IiwidW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldHZhcmlhYmxlIiwiY29tcGFyZU1ldGF2YXJpYWJsZSIsInJlZmVyZW5jZU1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsInJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5Iiwic3RhdGVtZW50TWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldHZhcmlhYmxlIiwic3RhdGVtZW50U2luZ3VsYXIiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOYW1lIiwic3RhdGVtZW50RGVjbGFyZWRNZXRhdmFyaWFibGUiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSIsIm1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5IiwidG9KU09OIiwibWV0YVR5cGVKU09OIiwibWV0YVR5cGVUb01ldGFUeXBlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVNZXRhdmFyaWFibGUiLCJuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJ0ZXJtRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJ0eXBlRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhVHlwZUZyb21KU09OIiwiZnJvbVN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJtZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUFBOzs7Z0NBWndCO2tFQUVIO3lCQUdPOzJCQUNDOzZCQUNXO3NCQUNpQjt1QkFDUzt5QkFDMEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUU1SCxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLHFCQUFxQkMsdUJBQU87SUFDdEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsUUFBUSxDQUFFO1FBQzdELEtBQUssQ0FBQ04sU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxRQUFRLEdBQUdBO0lBQ2xCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0osSUFBSTtJQUNsQjtJQUVBSyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNKLElBQUk7SUFDbEI7SUFFQUssVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDSixJQUFJO0lBQ2xCO0lBRUFLLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ0osUUFBUTtJQUN0QjtJQUVBSyxZQUFZTCxRQUFRLEVBQUU7UUFDcEIsSUFBSSxDQUFDQSxRQUFRLEdBQUdBO0lBQ2xCO0lBRUFNLHNCQUFzQjtRQUNwQixNQUFNVixP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