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
    constructor(context, string, node, lineIndex, name, term, type, metaType){
        super(context, string, node, lineIndex);
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
    isEqualTo(metavariable) {
        const metavariableNode = metavariable.getNode(), metavariableNodeMatches = this.matchMetavariableNode(metavariableNode), equalTo = metavariableNodeMatches; ///
        return equalTo;
    }
    isMetaTypeEqualTo(metaType) {
        return this.metaType.isEqualTo(metaType);
    }
    matchMetavariableNode(metavariableNode) {
        const node = metavariableNode, nodeMatches = this.matchNode(node), metavariableNodeMatches = nodeMatches; ///
        return metavariableNodeMatches;
    }
    compareMetavariable(metavariable) {
        const metavariableName = metavariable.getName(), comparesToMetavariableName = this.compareMetavariableName(metavariableName), comparesToMetavariable = comparesToMetavariableName; ///
        return comparesToMetavariable;
    }
    compareMetavariableName(metavariableName) {
        const nameMetavariableName = this.name === metavariableName, comparesToMetavariableName = nameMetavariableName; ///
        return comparesToMetavariableName;
    }
    findValidMetavariable(context) {
        const metavariableNode = this.getMetavariableNode(), metavariable = context.findMetavariableByMetavariableNode(metavariableNode), validMetavariable = metavariable; ///
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
        let metavariable = null;
        const metavariableString = this.getString(); ///
        context.trace(`Validating the '${metavariableString}' metavariable...`);
        const validMetavariable = this.findValidMetavariable(context), valid = validMetavariable !== null;
        if (valid) {
            metavariable = validMetavariable; ///
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
                metavariable = this; ///
                const declared = this.isDeclared(context);
                if (declared) {
                    context.addMetavariable(metavariable);
                }
                context.debug(`...validated the '${metavariableString}' metavariable.`);
            }
        }
        return metavariable;
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
                const type = declaredMetavaraible.getType();
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
        const metavariable = this, frameMetavariableUnifies = this.unifyFrameMetavariable(frame, generalContext, specificContext);
        if (frameMetavariableUnifies) {
            frameUnifies = true;
        } else {
            const metavariableNode = metavariable.getNode(), substitution = context.findSubstitutionByMetavariableNode(metavariableNode);
            if (substitution !== null) {
                const substitutionFrameComparesToFrame = substitution.compareFrame(frame, context);
                if (substitutionFrameComparesToFrame) {
                    const frameSubstitution = substitution, frameSubstitutionString = frameSubstitution.getString();
                    context.trace(`The '${frameSubstitutionString}' frame substitution is already present.`);
                    frameUnifies = true;
                }
            } else {
                const { FrameSubstitution } = _elements.default, frameSubstitution = FrameSubstitution.fromFrameAndMetavariable(frame, metavariable, context);
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
        const metavariable = this, statementMetavariableUnifies = this.unifyStatementMetavariable(statement, generalContext, specificContext);
        if (statementMetavariableUnifies) {
            statementUnifies = true;
        } else {
            const metavariableNode = metavariable.getNode(), substitutionPresent = substitution !== null ? context.isSubstitutionPresentByMetavariableNodeAndSubstitution(metavariableNode, substitution) : context.isSubstitutionPresentByMetavariableNode(metavariableNode);
            if (substitutionPresent) {
                substitution = substitution !== null ? context.findSubstitutionByMetavariableNodeAndSubstitution(metavariableNode, substitution) : context.findSubstitutionByMetavariableNode(metavariableNode);
                const substitutionComparesToStatement = substitution.compareStatement(statement, context);
                if (substitutionComparesToStatement) {
                    const statementSubstitution = substitution, statementSubstitutionString = statementSubstitution.getString();
                    context.trace(`The '${statementSubstitutionString}' statement substitution is already present.`);
                    statementUnifies = true;
                }
            } else {
                const { StatementSubstitution } = _elements.default, statementSubstitution = substitution !== null ? StatementSubstitution.fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context) : StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context);
                statementSubstitution.validate(substitution, generalContext, specificContext);
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
        const metavariable = this, referenceMetavariableUnifies = this.unifyReferenceMetavariable(reference, generalContext, specificContext);
        if (referenceMetavariableUnifies) {
            referenceUnifies = true;
        } else {
            const metavariableNode = metavariable.getNode(), substitution = context.findSubstitutionByMetavariableNode(metavariableNode);
            if (substitution !== null) {
                const substitutionReferenceComparesToReference = substitution.compareReference(reference, context);
                if (substitutionReferenceComparesToReference) {
                    const referenceSubstitution = substitution, referenceSubstitutionString = referenceSubstitution.getString();
                    context.trace(`The '${referenceSubstitutionString}' reference substitution is already present.`);
                    referenceUnifies = true;
                }
            } else {
                const { ReferenceSubstitution } = _elements.default, referenceSubstitution = ReferenceSubstitution.fromReferenceAndMetavariable(reference, metavariable, context);
                referenceSubstitution.validate(generalContext, specificContext);
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
        const generalContext = context, specificContext = context, generalMetavariable = this, specificMetavariable = metavariable, generalMetavariableString = generalMetavariable.getString(), specificMetavariableString = specificMetavariable.getString();
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
            const metavariable = this, referenceMetavariableComparesToMetvariable = reference.compareMetavariable(metavariable);
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
    unifyMetavariableIntrinsically(metavariable, generalContext, specificContext) {
        let metavariableUnifiesIntrinsically;
        const context = specificContext, generalMetavariable = this, specificMetavariable = metavariable, generalMetavariableString = generalMetavariable.getString(), specificMetavariableString = specificMetavariable.getString();
        context.trace(`Unifying the '${specificMetavariableString}' metavariable with the '${generalMetavariableString}' metavariable intrinsically...`);
        metavariableUnifiesIntrinsically = (0, _unify.unifyMetavariableIntrinsically)(generalMetavariable, specificMetavariable, generalContext, specificContext);
        if (metavariableUnifiesIntrinsically) {
            context.debug(`...unified the '${specificMetavariableString}' metavariable with the '${generalMetavariableString}' metavariable intrinsically.`);
        }
        return metavariableUnifiesIntrinsically;
    }
    toJSON() {
        const metaTypeJSON = (0, _json.metaTypeToMetaTypeJSON)(this.metaType), metaType = metaTypeJSON, string = this.getString(), lineIndex = this.getLineIndex(), json = {
            string,
            lineIndex,
            metaType
        };
        return json;
    }
    static name = "Metavariable";
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string, lineIndex } = json, metavariableNode = (0, _instantiate.instantiateMetavariable)(string, context), node = metavariableNode, name = (0, _element.nameFromMetavariableNode)(metavariableNode, context), term = (0, _element.termFromMetavariableNode)(metavariableNode, context), type = (0, _element.typeFromMetavariableNode)(metavariableNode, context), metaType = (0, _json.metaTypeFromJSON)(json, context), metavariable = new Metavariable(context, string, node, lineIndex, name, term, type, metaType);
            return metavariable;
        }, context);
    }
    static fromStatement(statement, context) {
        const statementNode = statement.getNode(), metavariable = (0, _element.metavariableFromStatementNode)(statementNode, context);
        return metavariable;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZU1ldGF2YXJpYWJsZSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBtZXRhVHlwZUZyb21KU09OLCBtZXRhVHlwZVRvTWV0YVR5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyB1bmlmeU1ldGF2YXJpYWJsZSwgdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IG5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSwgdGVybUZyb21NZXRhdmFyaWFibGVOb2RlLCB0eXBlRnJvbU1ldGF2YXJpYWJsZU5vZGUsIG1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBNZXRhdmFyaWFibGUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIG5hbWUsIHRlcm0sIHR5cGUsIG1ldGFUeXBlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuICAgIFxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE1ldGFUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFUeXBlO1xuICB9XG5cbiAgc2V0TWV0YVR5cGUobWV0YVR5cGUpIHtcbiAgICB0aGlzLm1ldGFUeXBlID0gbWV0YVR5cGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGlzRGVjbGFyZWQoY29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBkZWNsYXJlZE1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZERlY2xhcmVkTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIGRlY2xhcmVkID0gKGRlY2xhcmVkTWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBkZWNsYXJlZDtcbiAgfVxuXG4gIGlzRXF1YWxUbyhtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc01ldGFUeXBlRXF1YWxUbyhtZXRhVHlwZSkgeyByZXR1cm4gdGhpcy5tZXRhVHlwZS5pc0VxdWFsVG8obWV0YVR5cGUpOyB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIGNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9NZXRhdmFyaWFibGU7XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZU1ldGF2YXJpYWJsZU5hbWUgPSAodGhpcy5uYW1lID09PSBtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IG5hbWVNZXRhdmFyaWFibGVOYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBmaW5kVmFsaWRNZXRhdmFyaWFibGUoY29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdmFsaWRNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7IC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkTWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgdGVybVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUZXJtKGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllcykge1xuICAgICAgY29uc3QgdHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUeXBlKGNvbnRleHQpO1xuXG4gICAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VGVybShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1WZXJpZmllcyA9IHRydWU7ICAvLy9cblxuICAgIGlmICh0aGlzLnRlcm0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgICB0ZXJtVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgICAgY29udGV4dC50cmFjZShgQSAnJHt0ZXJtU3RyaW5nfScgdGVybSBpcyBwcmVzZW50IGluIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVR5cGUoY29udGV4dCkge1xuICAgIGxldCB0eXBlVmVyaWZpZXMgPSB0cnVlOyAgLy8vXG5cbiAgICBpZiAodGhpcy50eXBlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuXG4gICAgICAgIHR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWRzIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGUoc3RyaWN0LCBjb250ZXh0KSB7XG4gICAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGV4dCA9IHN0cmljdDsgLy8vXG5cbiAgICAgIHN0cmljdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkTWV0YXZhcmlhYmxlID0gdGhpcy5maW5kVmFsaWRNZXRhdmFyaWFibGUoY29udGV4dCksXG4gICAgICAgICAgdmFsaWQgPSAodmFsaWRNZXRhdmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICBtZXRhdmFyaWFibGUgPSB2YWxpZE1ldGF2YXJpYWJsZTsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCB0eXBlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVR5cGUoc3RyaWN0LCBjb250ZXh0KTtcblxuICAgICAgaWYgKHR5cGVWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgdGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUZXJtKHN0cmljdCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb25zdCBuYW1lVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZU5hbWUoc3RyaWN0LCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChuYW1lVmFsaWRhdGVzKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IHRoaXM7ICAvLy9cblxuICAgICAgICBjb25zdCBkZWNsYXJlZCA9IHRoaXMuaXNEZWNsYXJlZChjb250ZXh0KTtcblxuICAgICAgICBpZiAoZGVjbGFyZWQpIHtcbiAgICAgICAgICBjb250ZXh0LmFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHZhbGlkYXRlVHlwZShzdHJpY3QsIGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyAgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSdzIHR5cGUuLi5gKTtcblxuICAgIGlmICh0aGlzLnR5cGUgPT09IG51bGwpIHtcbiAgICAgIHR5cGVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBBICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZXNlbnQgaW4gdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udmFsaWRhdGVkICB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlVGVybShzdHJpY3QsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZhbGlkYXRlcyA9IHRydWU7IC8vL1xuXG4gICAgaWYgKHRoaXMudGVybSAhPT0gbnVsbCkge1xuICAgICAgdGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgICAgZGVjbGFyZWRNZXRhdmFyYWlibGUgPSBjb250ZXh0LmZpbmREZWNsYXJlZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgbGV0IHRlcm0gPSBudWxsO1xuXG4gICAgICBpZiAoZGVjbGFyZWRNZXRhdmFyYWlibGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdHlwZSA9IGRlY2xhcmVkTWV0YXZhcmFpYmxlLmdldFR5cGUoKTtcblxuICAgICAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHRlcm0gPSB0aGlzLnRlcm0udmFsaWRhdGVHaXZlblR5cGUodHlwZSwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgdGVybSA9IHRoaXMudGVybS52YWxpZGF0ZShjb250ZXh0LCAodGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy50ZXJtID0gdGVybTtcblxuICAgICAgICB0ZXJtVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlTmFtZShzdHJpY3QsIGNvbnRleHQpIHtcbiAgICBsZXQgbmFtZVZhbGlkYXRlcyA9IHRydWU7IC8vL1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgJyR7bWV0YXZhcmlhYmxlTmFtZX0nIG5hbWUuLi5gKTtcblxuICAgIGNvbnN0IGRlY2xhcmVkTWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kRGVjbGFyZWRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAoZGVjbGFyZWRNZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFUeXBlID0gZGVjbGFyZWRNZXRhdmFyaWFibGUuZ2V0TWV0YVR5cGUoKSxcbiAgICAgICAgICAgIG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcblxuICAgICAgY29udGV4dC50cmFjZShgU2V0dGluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgbWV0YS10eXBlIHRvIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHN0cmljdCkge1xuICAgICAgICBuYW1lVmFsaWRhdGVzID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5hbWVWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgJyR7bWV0YXZhcmlhYmxlTmFtZX0nIG5hbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hbWVWYWxpZGF0ZXM7XG4gIH1cblxuICB1bmlmeUZyYW1lKGZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0aGlzLnVuaWZ5RnJhbWVNZXRhdmFyaWFibGUoZnJhbWUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgZnJhbWVVbmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uRnJhbWVDb21wYXJlc1RvRnJhbWUgPSBzdWJzdGl0dXRpb24uY29tcGFyZUZyYW1lKGZyYW1lLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uRnJhbWVDb21wYXJlc1RvRnJhbWUpIHtcbiAgICAgICAgICBjb25zdCBmcmFtZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25TdHJpbmcgPSBmcmFtZVN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbiBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG5cbiAgICAgICAgICBmcmFtZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB7IEZyYW1lU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBGcmFtZVN1YnN0aXR1dGlvbi5mcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUoZnJhbWUsIG1ldGF2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24udmFsaWRhdGUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgZnJhbWVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhbWVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uLmdldFN0cmluZygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORztcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfSR7c3Vic3RpdHV0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvblByZXNlbnQgPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb24pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5pc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25QcmVzZW50KSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQ29tcGFyZXNUb1N0YXRlbWVudCA9IHN1YnN0aXR1dGlvbi5jb21wYXJlU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbkNvbXBhcmVzVG9TdGF0ZW1lbnQpIHtcbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sIC8vXG4gICAgICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24gaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHsgU3RhdGVtZW50U3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXRlbWVudFN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGNvbnRleHQpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXRlbWVudFN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24udmFsaWRhdGUoc3Vic3RpdHV0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30ke3N1YnN0aXR1dGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzID0gdGhpcy51bmlmeVJlZmVyZW5jZU1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIHJlZmVyZW5jZVVuaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25SZWZlcmVuY2VDb21wYXJlc1RvUmVmZXJlbmNlID0gc3Vic3RpdHV0aW9uLmNvbXBhcmVSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uUmVmZXJlbmNlQ29tcGFyZXNUb1JlZmVyZW5jZSkge1xuICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3JlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ30nIHJlZmVyZW5jZSBzdWJzdGl0dXRpb24gaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuXG4gICAgICAgICAgcmVmZXJlbmNlVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHsgUmVmZXJlbmNlU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uID0gUmVmZXJlbmNlU3Vic3RpdHV0aW9uLmZyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUocmVmZXJlbmNlLCBtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbi52YWxpZGF0ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICByZWZlcmVuY2VVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVmZXJlbmNlVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVVbmlmaWVzO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbE1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlLCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZyA9IGdlbmVyYWxNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmcgPSBzcGVjaWZpY01ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBtZXRhdmFyaWFibGVVbmlmaWVzID0gdW5pZnlNZXRhdmFyaWFibGUoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke2dlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeUZyYW1lTWV0YXZhcmlhYmxlKGZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dEZpbGVQYXRoID0gZ2VuZXJhbENvbnRleHQuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCA9IHNwZWNpZmljQ29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgaWYgKGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPT09IHNwZWNpZmljQ29udGV4dEZpbGVQYXRoKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOb2RlKCksICAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gZnJhbWUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZyYW1lU2luZ3VsYXIgPSBmcmFtZS5pc1Npbmd1bGFyKCk7XG5cbiAgICAgICAgaWYgKGZyYW1lU2luZ3VsYXIpIHtcbiAgICAgICAgICBjb25zdCBmcmFtZU1ldGF2YXJpYWJsZU5hbWUgPSBmcmFtZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgICAgICAgZnJhbWVEZWNsYXJlZE1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZERlY2xhcmVkTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKGZyYW1lTWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgICAgICAgZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHRoaXMudW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KGZyYW1lRGVjbGFyZWRNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkpIHtcbiAgICAgICAgICAgIGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5UmVmZXJlbmNlTWV0YXZhcmlhYmxlKHJlZmVyZW5jZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlJ3MgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9IGdlbmVyYWxDb250ZXh0LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0RmlsZVBhdGggPSBzcGVjaWZpY0NvbnRleHQuZ2V0RmlsZVBhdGgoKTtcblxuICAgIGlmIChnZW5lcmFsQ29udGV4dEZpbGVQYXRoID09PSBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgcmVmZXJlbmNlTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldHZhcmlhYmxlID0gcmVmZXJlbmNlLmNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgaWYgKHJlZmVyZW5jZU1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXR2YXJpYWJsZSkge1xuICAgICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZU1ldGF2YXJpYWJsZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgICAgcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSB0aGlzLnVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShyZWZlcmVuY2VNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChyZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSkge1xuICAgICAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSdzIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50J3MgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9IGdlbmVyYWxDb250ZXh0LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0RmlsZVBhdGggPSBzcGVjaWZpY0NvbnRleHQuZ2V0RmlsZVBhdGgoKTtcblxuICAgIGlmIChnZW5lcmFsQ29udGV4dEZpbGVQYXRoID09PSBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldHZhcmlhYmxlID0gc3RhdGVtZW50Lm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKHN0YXRlbWVudE1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXR2YXJpYWJsZSkge1xuICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudFNpbmd1bGFyID0gc3RhdGVtZW50LmlzU2luZ3VsYXIoKTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50U2luZ3VsYXIpIHtcbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOYW1lID0gc3RhdGVtZW50LmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICAgICAgICBzdGF0ZW1lbnREZWNsYXJlZE1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZERlY2xhcmVkTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKHN0YXRlbWVudE1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdGhpcy51bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkoc3RhdGVtZW50RGVjbGFyZWRNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5KSB7XG4gICAgICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50J3MgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbE1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlLFxuICAgICAgICAgIGdlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmcgPSBnZW5lcmFsTWV0YXZhcmlhYmxlLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmcgPSBzcGVjaWZpY01ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGludHJpbnNpY2FsbHkuLi5gKTtcblxuICAgIG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7Z2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBpbnRyaW5zaWNhbGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtZXRhVHlwZUpTT04gPSBtZXRhVHlwZVRvTWV0YVR5cGVKU09OKHRoaXMubWV0YVR5cGUpLFxuICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBsaW5lSW5kZXggPSB0aGlzLmdldExpbmVJbmRleCgpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBsaW5lSW5kZXgsXG4gICAgICAgICAgICBtZXRhVHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJNZXRhdmFyaWFibGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcsIGxpbmVJbmRleCB9ID0ganNvbixcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBpbnN0YW50aWF0ZU1ldGF2YXJpYWJsZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICB0ZXJtID0gdGVybUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgdHlwZSA9IHR5cGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIG5hbWUsIHRlcm0sIHR5cGUsIG1ldGFUeXBlKTtcblxuICAgICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTWV0YXZhcmlhYmxlIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwibmFtZSIsInRlcm0iLCJ0eXBlIiwibWV0YVR5cGUiLCJnZXROYW1lIiwiZ2V0VGVybSIsImdldFR5cGUiLCJnZXRNZXRhVHlwZSIsInNldE1ldGFUeXBlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImdldE5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJpc0RlY2xhcmVkIiwiZGVjbGFyZWRNZXRhdmFyaWFibGUiLCJmaW5kRGVjbGFyZWRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJkZWNsYXJlZCIsImlzRXF1YWxUbyIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwiZXF1YWxUbyIsImlzTWV0YVR5cGVFcXVhbFRvIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJjb21wYXJlTWV0YXZhcmlhYmxlIiwiY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJjb21wYXJlTWV0YXZhcmlhYmxlTmFtZSIsImNvbXBhcmVzVG9NZXRhdmFyaWFibGUiLCJuYW1lTWV0YXZhcmlhYmxlTmFtZSIsImZpbmRWYWxpZE1ldGF2YXJpYWJsZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJ2YWxpZE1ldGF2YXJpYWJsZSIsInZlcmlmeSIsInZlcmlmaWVzIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0ZXJtVmVyaWZpZXMiLCJ2ZXJpZnlUZXJtIiwidHlwZVZlcmlmaWVzIiwidmVyaWZ5VHlwZSIsImRlYnVnIiwidGVybVN0cmluZyIsInR5cGVTdHJpbmciLCJ0eXBlTmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInZhbGlkYXRlIiwic3RyaWN0IiwidW5kZWZpbmVkIiwidmFsaWQiLCJ2YWxpZGF0ZXMiLCJ0eXBlVmFsaWRhdGVzIiwidmFsaWRhdGVUeXBlIiwidGVybVZhbGlkYXRlcyIsInZhbGlkYXRlVGVybSIsIm5hbWVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZU5hbWUiLCJhZGRNZXRhdmFyaWFibGUiLCJkZWNsYXJlZE1ldGF2YXJhaWJsZSIsInZhbGlkYXRlR2l2ZW5UeXBlIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJtZXRhVHlwZVN0cmluZyIsInVuaWZ5RnJhbWUiLCJmcmFtZSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwiZnJhbWVVbmlmaWVzIiwiZnJhbWVTdHJpbmciLCJmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMiLCJ1bmlmeUZyYW1lTWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZSIsInN1YnN0aXR1dGlvbkZyYW1lQ29tcGFyZXNUb0ZyYW1lIiwiY29tcGFyZUZyYW1lIiwiZnJhbWVTdWJzdGl0dXRpb24iLCJmcmFtZVN1YnN0aXR1dGlvblN0cmluZyIsIkZyYW1lU3Vic3RpdHV0aW9uIiwiZWxlbWVudHMiLCJmcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUiLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZXMiLCJzdGF0ZW1lbnRTdHJpbmciLCJzdWJzdGl0dXRpb25TdHJpbmciLCJFTVBUWV9TVFJJTkciLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnRNZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb25QcmVzZW50IiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uIiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkNvbXBhcmVzVG9TdGF0ZW1lbnQiLCJjb21wYXJlU3RhdGVtZW50Iiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nIiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUiLCJ1bmlmeVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInJlZmVyZW5jZVVuaWZpZXMiLCJyZWZlcmVuY2VTdHJpbmciLCJyZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlSZWZlcmVuY2VNZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb25SZWZlcmVuY2VDb21wYXJlc1RvUmVmZXJlbmNlIiwiY29tcGFyZVJlZmVyZW5jZSIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsInJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZyIsIlJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsImZyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUiLCJ1bmlmeU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVVuaWZpZXMiLCJnZW5lcmFsTWV0YXZhcmlhYmxlIiwic3BlY2lmaWNNZXRhdmFyaWFibGUiLCJnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nIiwic3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmciLCJnZW5lcmFsQ29udGV4dEZpbGVQYXRoIiwiZ2V0RmlsZVBhdGgiLCJzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCIsImZyYW1lU2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwiZnJhbWVNZXRhdmFyaWFibGVOYW1lIiwiZnJhbWVEZWNsYXJlZE1ldGF2YXJpYWJsZSIsImZyYW1lTWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkiLCJ1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkiLCJyZWZlcmVuY2VNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0dmFyaWFibGUiLCJyZWZlcmVuY2VNZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJyZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXR2YXJpYWJsZSIsInN0YXRlbWVudFNpbmd1bGFyIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTmFtZSIsInN0YXRlbWVudERlY2xhcmVkTWV0YXZhcmlhYmxlIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkiLCJtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSIsInRvSlNPTiIsIm1ldGFUeXBlSlNPTiIsIm1ldGFUeXBlVG9NZXRhVHlwZUpTT04iLCJnZXRMaW5lSW5kZXgiLCJqc29uIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlTWV0YXZhcmlhYmxlIiwibmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIiwidGVybUZyb21NZXRhdmFyaWFibGVOb2RlIiwidHlwZUZyb21NZXRhdmFyaWFibGVOb2RlIiwibWV0YVR5cGVGcm9tSlNPTiIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwibWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBQTs7O2dDQVp3QjtrRUFFSDt5QkFHTzsyQkFDQzs2QkFDVztzQkFDaUI7dUJBQ1M7eUJBQzBEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFFNUgsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxxQkFBcUJDLHVCQUFPO0lBQ3RELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsUUFBUSxDQUFFO1FBQ3hFLEtBQUssQ0FBQ1AsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxRQUFRLEdBQUdBO0lBQ2xCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0osSUFBSTtJQUNsQjtJQUVBSyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNKLElBQUk7SUFDbEI7SUFFQUssVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDSixJQUFJO0lBQ2xCO0lBRUFLLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ0osUUFBUTtJQUN0QjtJQUVBSyxZQUFZTCxRQUFRLEVBQUU7UUFDcEIsSUFBSSxDQUFDQSxRQUFRLEdBQUdBO0lBQ2xCO0lBRUFNLHNCQUFzQjtR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