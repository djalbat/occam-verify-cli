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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZU1ldGF2YXJpYWJsZSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBtZXRhVHlwZUZyb21KU09OLCBtZXRhVHlwZVRvTWV0YVR5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyB1bmlmeU1ldGF2YXJpYWJsZSwgdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IG5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSwgdGVybUZyb21NZXRhdmFyaWFibGVOb2RlLCB0eXBlRnJvbU1ldGF2YXJpYWJsZU5vZGUsIG1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBNZXRhdmFyaWFibGUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIG5hbWUsIHRlcm0sIHR5cGUsIG1ldGFUeXBlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuICAgIFxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE1ldGFUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFUeXBlO1xuICB9XG5cbiAgc2V0TWV0YVR5cGUobWV0YVR5cGUpIHtcbiAgICB0aGlzLm1ldGFUeXBlID0gbWV0YVR5cGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGlzRGVjbGFyZWQoY29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBkZWNsYXJlZE1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZERlY2xhcmVkTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIGRlY2xhcmVkID0gKGRlY2xhcmVkTWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBkZWNsYXJlZDtcbiAgfVxuXG4gIGlzRXF1YWxUbyhtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc01ldGFUeXBlRXF1YWxUbyhtZXRhVHlwZSkgeyByZXR1cm4gdGhpcy5tZXRhVHlwZS5pc0VxdWFsVG8obWV0YVR5cGUpOyB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIGNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9NZXRhdmFyaWFibGU7XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZU1ldGF2YXJpYWJsZU5hbWUgPSAodGhpcy5uYW1lID09PSBtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IG5hbWVNZXRhdmFyaWFibGVOYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBmaW5kVmFsaWRNZXRhdmFyaWFibGUoY29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdmFsaWRNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7IC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkTWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgdGVybVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUZXJtKGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllcykge1xuICAgICAgY29uc3QgdHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUeXBlKGNvbnRleHQpO1xuXG4gICAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VGVybShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1WZXJpZmllcyA9IHRydWU7ICAvLy9cblxuICAgIGlmICh0aGlzLnRlcm0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgICB0ZXJtVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgICAgY29udGV4dC50cmFjZShgQSAnJHt0ZXJtU3RyaW5nfScgdGVybSBpcyBwcmVzZW50IGluIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVR5cGUoY29udGV4dCkge1xuICAgIGxldCB0eXBlVmVyaWZpZXMgPSB0cnVlOyAgLy8vXG5cbiAgICBpZiAodGhpcy50eXBlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuXG4gICAgICAgIHR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWRzIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGUoc3RyaWN0LCBjb250ZXh0KSB7XG4gICAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGV4dCA9IHN0cmljdDsgLy8vXG5cbiAgICAgIHN0cmljdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkTWV0YXZhcmlhYmxlID0gdGhpcy5maW5kVmFsaWRNZXRhdmFyaWFibGUoY29udGV4dCksXG4gICAgICAgICAgdmFsaWQgPSAodmFsaWRNZXRhdmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICBtZXRhdmFyaWFibGUgPSB2YWxpZE1ldGF2YXJpYWJsZTsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCB0eXBlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVR5cGUoc3RyaWN0LCBjb250ZXh0KTtcblxuICAgICAgaWYgKHR5cGVWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgdGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUZXJtKHN0cmljdCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb25zdCBuYW1lVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZU5hbWUoc3RyaWN0LCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChuYW1lVmFsaWRhdGVzKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IHRoaXM7ICAvLy9cblxuICAgICAgICBjb25zdCBkZWNsYXJlZCA9IHRoaXMuaXNEZWNsYXJlZChjb250ZXh0KTtcblxuICAgICAgICBpZiAoZGVjbGFyZWQpIHtcbiAgICAgICAgICBjb250ZXh0LmFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHZhbGlkYXRlVHlwZShzdHJpY3QsIGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyAgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSdzIHR5cGUuLi5gKTtcblxuICAgIGlmICh0aGlzLnR5cGUgPT09IG51bGwpIHtcbiAgICAgIHR5cGVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBBICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZXNlbnQgaW4gdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udmFsaWRhdGVkICB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlVGVybShzdHJpY3QsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZhbGlkYXRlcyA9IHRydWU7IC8vL1xuXG4gICAgaWYgKHRoaXMudGVybSAhPT0gbnVsbCkge1xuICAgICAgdGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgICAgZGVjbGFyZWRNZXRhdmFyYWlibGUgPSBjb250ZXh0LmZpbmREZWNsYXJlZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgbGV0IHRlcm0gPSBudWxsO1xuXG4gICAgICBpZiAoZGVjbGFyZWRNZXRhdmFyYWlibGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdHlwZSA9IGRlY2xhcmVkTWV0YXZhcmFpYmxlLmdldFR5cGUoKTtcblxuICAgICAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHRlcm0gPSB0aGlzLnRlcm0udmFsaWRhdGVHaXZlblR5cGUodHlwZSwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgdGVybSA9IHRoaXMudGVybS52YWxpZGF0ZShjb250ZXh0LCAodGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy50ZXJtID0gdGVybTtcblxuICAgICAgICB0ZXJtVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlTmFtZShzdHJpY3QsIGNvbnRleHQpIHtcbiAgICBsZXQgbmFtZVZhbGlkYXRlcyA9IHRydWU7IC8vL1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgJyR7bWV0YXZhcmlhYmxlTmFtZX0nIG5hbWUuLi5gKTtcblxuICAgIGNvbnN0IGRlY2xhcmVkTWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kRGVjbGFyZWRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAoZGVjbGFyZWRNZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFUeXBlID0gZGVjbGFyZWRNZXRhdmFyaWFibGUuZ2V0TWV0YVR5cGUoKSxcbiAgICAgICAgICAgIG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcblxuICAgICAgY29udGV4dC50cmFjZShgU2V0dGluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgbWV0YS10eXBlIHRvIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHN0cmljdCkge1xuICAgICAgICBuYW1lVmFsaWRhdGVzID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5hbWVWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgJyR7bWV0YXZhcmlhYmxlTmFtZX0nIG5hbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hbWVWYWxpZGF0ZXM7XG4gIH1cblxuICB1bmlmeUZyYW1lKGZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0aGlzLnVuaWZ5RnJhbWVNZXRhdmFyaWFibGUoZnJhbWUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgZnJhbWVVbmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uRnJhbWVDb21wYXJlc1RvRnJhbWUgPSBzdWJzdGl0dXRpb24uY29tcGFyZUZyYW1lKGZyYW1lLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uRnJhbWVDb21wYXJlc1RvRnJhbWUpIHtcbiAgICAgICAgICBjb25zdCBmcmFtZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25TdHJpbmcgPSBmcmFtZVN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbiBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG5cbiAgICAgICAgICBmcmFtZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB7IEZyYW1lU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBGcmFtZVN1YnN0aXR1dGlvbi5mcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUoZnJhbWUsIG1ldGF2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24udmFsaWRhdGUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgZnJhbWVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhbWVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uLmdldFN0cmluZygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORztcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfSR7c3Vic3RpdHV0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvblByZXNlbnQgPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb24pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5pc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25QcmVzZW50KSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQ29tcGFyZXNUb1N0YXRlbWVudCA9IHN1YnN0aXR1dGlvbi5jb21wYXJlU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbkNvbXBhcmVzVG9TdGF0ZW1lbnQpIHtcbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sIC8vXG4gICAgICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24gaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHsgU3RhdGVtZW50U3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXRlbWVudFN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGNvbnRleHQpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXRlbWVudFN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24udmFsaWRhdGUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JHtzdWJzdGl0dXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVJlZmVyZW5jZShyZWZlcmVuY2UsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2Ugd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlSZWZlcmVuY2VNZXRhdmFyaWFibGUocmVmZXJlbmNlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChyZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICByZWZlcmVuY2VVbmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uUmVmZXJlbmNlQ29tcGFyZXNUb1JlZmVyZW5jZSA9IHN1YnN0aXR1dGlvbi5jb21wYXJlUmVmZXJlbmNlKHJlZmVyZW5jZSwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvblJlZmVyZW5jZUNvbXBhcmVzVG9SZWZlcmVuY2UpIHtcbiAgICAgICAgICBjb25zdCByZWZlcmVuY2VTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZyA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtyZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmd9JyByZWZlcmVuY2Ugc3Vic3RpdHV0aW9uIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcblxuICAgICAgICAgIHJlZmVyZW5jZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB7IFJlZmVyZW5jZVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IFJlZmVyZW5jZVN1YnN0aXR1dGlvbi5mcm9tUmVmZXJlbmNlQW5kTWV0YXZhcmlhYmxlKHJlZmVyZW5jZSwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb24udmFsaWRhdGUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgcmVmZXJlbmNlVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlZmVyZW5jZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVW5pZmllcztcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZSwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmcgPSBnZW5lcmFsTWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nID0gc3BlY2lmaWNNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7Z2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgbWV0YXZhcmlhYmxlVW5pZmllcyA9IHVuaWZ5TWV0YXZhcmlhYmxlKGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlGcmFtZU1ldGF2YXJpYWJsZShmcmFtZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBmcmFtZVN0cmluZyA9IGZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9IGdlbmVyYWxDb250ZXh0LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0RmlsZVBhdGggPSBzcGVjaWZpY0NvbnRleHQuZ2V0RmlsZVBhdGgoKTtcblxuICAgIGlmIChnZW5lcmFsQ29udGV4dEZpbGVQYXRoID09PSBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLCAgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IGZyYW1lLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmcmFtZVNpbmd1bGFyID0gZnJhbWUuaXNTaW5ndWxhcigpO1xuXG4gICAgICAgIGlmIChmcmFtZVNpbmd1bGFyKSB7XG4gICAgICAgICAgY29uc3QgZnJhbWVNZXRhdmFyaWFibGVOYW1lID0gZnJhbWUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgICAgICAgIGZyYW1lRGVjbGFyZWRNZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmREZWNsYXJlZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShmcmFtZU1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgICAgICAgIGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSB0aGlzLnVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShmcmFtZURlY2xhcmVkTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIGlmIChmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5KSB7XG4gICAgICAgICAgICBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVJlZmVyZW5jZU1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSdzIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPSBnZW5lcmFsQ29udGV4dC5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dEZpbGVQYXRoID0gc3BlY2lmaWNDb250ZXh0LmdldEZpbGVQYXRoKCk7XG5cbiAgICBpZiAoZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9PT0gc3BlY2lmaWNDb250ZXh0RmlsZVBhdGgpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXR2YXJpYWJsZSA9IHJlZmVyZW5jZS5jb21wYXJlTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChyZWZlcmVuY2VNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0dmFyaWFibGUpIHtcbiAgICAgICAgcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZWZlcmVuY2VNZXRhdmFyaWFibGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdGhpcy51bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkocmVmZXJlbmNlTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAocmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkpIHtcbiAgICAgICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UncyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCdzIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPSBnZW5lcmFsQ29udGV4dC5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dEZpbGVQYXRoID0gc3BlY2lmaWNDb250ZXh0LmdldEZpbGVQYXRoKCk7XG5cbiAgICBpZiAoZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9PT0gc3BlY2lmaWNDb250ZXh0RmlsZVBhdGgpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXR2YXJpYWJsZSA9IHN0YXRlbWVudC5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0dmFyaWFibGUpIHtcbiAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnRTaW5ndWxhciA9IHN0YXRlbWVudC5pc1Npbmd1bGFyKCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFNpbmd1bGFyKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVtZW50TWV0YXZhcmlhYmxlTmFtZSA9IHN0YXRlbWVudC5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgICAgICAgc3RhdGVtZW50RGVjbGFyZWRNZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmREZWNsYXJlZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShzdGF0ZW1lbnRNZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHRoaXMudW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KHN0YXRlbWVudERlY2xhcmVkTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIGlmIChzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSkge1xuICAgICAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCdzIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkobWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5O1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZSxcbiAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nID0gZ2VuZXJhbE1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nID0gc3BlY2lmaWNNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7Z2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBpbnRyaW5zaWNhbGx5Li4uYCk7XG5cbiAgICBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke2dlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgaW50cmluc2ljYWxseS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbWV0YVR5cGVKU09OID0gbWV0YVR5cGVUb01ldGFUeXBlSlNPTih0aGlzLm1ldGFUeXBlKSxcbiAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlSlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0TGluZUluZGV4KCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIGxpbmVJbmRleCxcbiAgICAgICAgICAgIG1ldGFUeXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk1ldGF2YXJpYWJsZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGluc3RhbnRpYXRlTWV0YXZhcmlhYmxlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgbmFtZSA9IG5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICB0eXBlID0gdHlwZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbmFtZSwgdGVybSwgdHlwZSwgbWV0YVR5cGUpO1xuXG4gICAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJNZXRhdmFyaWFibGUiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJuYW1lIiwidGVybSIsInR5cGUiLCJtZXRhVHlwZSIsImdldE5hbWUiLCJnZXRUZXJtIiwiZ2V0VHlwZSIsImdldE1ldGFUeXBlIiwic2V0TWV0YVR5cGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZ2V0Tm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImlzRGVjbGFyZWQiLCJkZWNsYXJlZE1ldGF2YXJpYWJsZSIsImZpbmREZWNsYXJlZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsImRlY2xhcmVkIiwiaXNFcXVhbFRvIiwibWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJlcXVhbFRvIiwiaXNNZXRhVHlwZUVxdWFsVG8iLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsImNvbXBhcmVNZXRhdmFyaWFibGUiLCJjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZXNUb01ldGF2YXJpYWJsZSIsIm5hbWVNZXRhdmFyaWFibGVOYW1lIiwiZmluZFZhbGlkTWV0YXZhcmlhYmxlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZSIsInZhbGlkTWV0YXZhcmlhYmxlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInRlcm1WZXJpZmllcyIsInZlcmlmeVRlcm0iLCJ0eXBlVmVyaWZpZXMiLCJ2ZXJpZnlUeXBlIiwiZGVidWciLCJ0ZXJtU3RyaW5nIiwidHlwZVN0cmluZyIsInR5cGVOYW1lIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidmFsaWRhdGUiLCJzdHJpY3QiLCJ1bmRlZmluZWQiLCJ2YWxpZCIsInZhbGlkYXRlcyIsInR5cGVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVR5cGUiLCJ0ZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVUZXJtIiwibmFtZVZhbGlkYXRlcyIsInZhbGlkYXRlTmFtZSIsImFkZE1ldGF2YXJpYWJsZSIsImRlY2xhcmVkTWV0YXZhcmFpYmxlIiwidmFsaWRhdGVHaXZlblR5cGUiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsIm1ldGFUeXBlU3RyaW5nIiwidW5pZnlGcmFtZSIsImZyYW1lIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJmcmFtZVVuaWZpZXMiLCJmcmFtZVN0cmluZyIsImZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcyIsInVuaWZ5RnJhbWVNZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlIiwic3Vic3RpdHV0aW9uRnJhbWVDb21wYXJlc1RvRnJhbWUiLCJjb21wYXJlRnJhbWUiLCJmcmFtZVN1YnN0aXR1dGlvbiIsImZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nIiwiRnJhbWVTdWJzdGl0dXRpb24iLCJlbGVtZW50cyIsImZyb21GcmFtZUFuZE1ldGF2YXJpYWJsZSIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllcyIsInN0YXRlbWVudFN0cmluZyIsInN1YnN0aXR1dGlvblN0cmluZyIsIkVNUFRZX1NUUklORyIsInN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudE1ldGF2YXJpYWJsZSIsInN1YnN0aXR1dGlvblByZXNlbnQiLCJpc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb24iLCJpc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uQ29tcGFyZXNUb1N0YXRlbWVudCIsImNvbXBhcmVTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmciLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsInVuaWZ5UmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlVW5pZmllcyIsInJlZmVyZW5jZVN0cmluZyIsInJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXMiLCJ1bmlmeVJlZmVyZW5jZU1ldGF2YXJpYWJsZSIsInN1YnN0aXR1dGlvblJlZmVyZW5jZUNvbXBhcmVzVG9SZWZlcmVuY2UiLCJjb21wYXJlUmVmZXJlbmNlIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nIiwiUmVmZXJlbmNlU3Vic3RpdHV0aW9uIiwiZnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZSIsInVuaWZ5TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlVW5pZmllcyIsImdlbmVyYWxNZXRhdmFyaWFibGUiLCJzcGVjaWZpY01ldGF2YXJpYWJsZSIsImdlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmciLCJzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZyIsImdlbmVyYWxDb250ZXh0RmlsZVBhdGgiLCJnZXRGaWxlUGF0aCIsInNwZWNpZmljQ29udGV4dEZpbGVQYXRoIiwiZnJhbWVTaW5ndWxhciIsImlzU2luZ3VsYXIiLCJmcmFtZU1ldGF2YXJpYWJsZU5hbWUiLCJmcmFtZURlY2xhcmVkTWV0YXZhcmlhYmxlIiwiZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSIsInVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseSIsInJlZmVyZW5jZU1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXR2YXJpYWJsZSIsInJlZmVyZW5jZU1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsInJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5Iiwic3RhdGVtZW50TWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldHZhcmlhYmxlIiwic3RhdGVtZW50U2luZ3VsYXIiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOYW1lIiwic3RhdGVtZW50RGVjbGFyZWRNZXRhdmFyaWFibGUiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSIsIm1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5IiwidG9KU09OIiwibWV0YVR5cGVKU09OIiwibWV0YVR5cGVUb01ldGFUeXBlSlNPTiIsImdldExpbmVJbmRleCIsImpzb24iLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVNZXRhdmFyaWFibGUiLCJuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJ0ZXJtRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJ0eXBlRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhVHlwZUZyb21KU09OIiwiZnJvbVN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJtZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUFBOzs7Z0NBWndCO2tFQUVIO3lCQUdPOzJCQUNDOzZCQUNXO3NCQUNpQjt1QkFDUzt5QkFDMEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUU1SCxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLHFCQUFxQkMsdUJBQU87SUFDdEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxRQUFRLENBQUU7UUFDeEUsS0FBSyxDQUFDUCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFFBQVEsR0FBR0E7SUFDbEI7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDSixJQUFJO0lBQ2xCO0lBRUFLLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0osSUFBSTtJQUNsQjtJQUVBSyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNKLElBQUk7SUFDbEI7SUFFQUssY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDSixRQUFRO0lBQ3RCO0lBRUFLLFlBQVlMLFFBQVEsRUFBRTtRQUNwQixJQUFJLENBQUNBLFFBQVEsR0FBR0E7SUFDbEI7SUFFQU0sc0JBQXNCO1FBQ3BCLE1BQU1Y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