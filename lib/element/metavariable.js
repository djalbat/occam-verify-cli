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
            const metavariableString = this.getString();
            context.trace(`Verifying the '${metavariableString}' metavariable's type...`);
            const typeName = this.type.getName(), type = context.findTypeByTypeName(typeName);
            if (type !== null) {
                this.type = type;
                typeVerifies = true;
            }
            if (typeVerifies) {
                context.debug(`...verifieds the '${metavariableString}' metavariable's type.`);
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
            const nameValidates = this.validateName(strict, context);
            if (nameValidates) {
                const termValidates = this.validateTerm(strict, context);
                if (termValidates) {
                    const typeValidates = this.validateType(strict, context);
                    if (typeValidates) {
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
    validateName(strict, context) {
        let nameValidates = true; ///
        const metavariableString = this.getString(); ///
        context.trace(`Validating the '${metavariableString}' metavariable's name...`);
        const metavariableName = this.getMetavariableName(), declaredMetavariable = context.findDeclaredMetavariableByMetavariableName(metavariableName);
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
            context.debug(`...validated the '${metavariableString}' metavariable's name.`);
        }
        return nameValidates;
    }
    validateTerm(strict, context) {
        let termValidates = false;
        if (this.term === null) {
            termValidates = true;
        } else {
            const metavariableString = this.getString();
            context.trace(`Validating the '${metavariableString}' metavariable's term...`);
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
                context.debug(`...validated the '${metavariableString}' metavariable's term.`);
            }
        }
        return termValidates;
    }
    validateType(strict, context) {
        let typeValidates;
        if (this.type === null) {
            typeValidates = true;
        } else {
            const metavariableString = this.getString(); ///
            context.trace(`Validating  the '${metavariableString}' metavariable's type...`);
            typeValidates = false;
            const typeString = this.type.getString();
            context.trace(`A '${typeString}' type is present in the '${metavariableString}' metavariable.`);
            if (typeValidates) {
                context.trace(`...validated  the '${metavariableString}' metavariable's type.`);
            }
        }
        return typeValidates;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZU1ldGF2YXJpYWJsZSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBtZXRhVHlwZUZyb21KU09OLCBtZXRhVHlwZVRvTWV0YVR5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyB1bmlmeU1ldGF2YXJpYWJsZSwgdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IG5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSwgdGVybUZyb21NZXRhdmFyaWFibGVOb2RlLCB0eXBlRnJvbU1ldGF2YXJpYWJsZU5vZGUsIG1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBNZXRhdmFyaWFibGUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIG5hbWUsIHRlcm0sIHR5cGUsIG1ldGFUeXBlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuICAgIFxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE1ldGFUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFUeXBlO1xuICB9XG5cbiAgc2V0TWV0YVR5cGUobWV0YVR5cGUpIHtcbiAgICB0aGlzLm1ldGFUeXBlID0gbWV0YVR5cGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGlzRGVjbGFyZWQoY29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBkZWNsYXJlZE1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZERlY2xhcmVkTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIGRlY2xhcmVkID0gKGRlY2xhcmVkTWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBkZWNsYXJlZDtcbiAgfVxuXG4gIGlzRXF1YWxUbyhtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc01ldGFUeXBlRXF1YWxUbyhtZXRhVHlwZSkgeyByZXR1cm4gdGhpcy5tZXRhVHlwZS5pc0VxdWFsVG8obWV0YVR5cGUpOyB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIGNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9NZXRhdmFyaWFibGU7XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZU1ldGF2YXJpYWJsZU5hbWUgPSAodGhpcy5uYW1lID09PSBtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IG5hbWVNZXRhdmFyaWFibGVOYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBmaW5kVmFsaWRNZXRhdmFyaWFibGUoY29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdmFsaWRNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7IC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkTWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgdGVybVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUZXJtKGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllcykge1xuICAgICAgY29uc3QgdHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUeXBlKGNvbnRleHQpO1xuXG4gICAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VGVybShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1WZXJpZmllcyA9IHRydWU7ICAvLy9cblxuICAgIGlmICh0aGlzLnRlcm0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgICB0ZXJtVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgICAgY29udGV4dC50cmFjZShgQSAnJHt0ZXJtU3RyaW5nfScgdGVybSBpcyBwcmVzZW50IGluIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVR5cGUoY29udGV4dCkge1xuICAgIGxldCB0eXBlVmVyaWZpZXMgPSB0cnVlOyAgLy8vXG5cbiAgICBpZiAodGhpcy50eXBlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSdzIHR5cGUuLi5gKTtcblxuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgICAgICB0eXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkcyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgdHlwZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGUoc3RyaWN0LCBjb250ZXh0KSB7XG4gICAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGV4dCA9IHN0cmljdDsgLy8vXG5cbiAgICAgIHN0cmljdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkTWV0YXZhcmlhYmxlID0gdGhpcy5maW5kVmFsaWRNZXRhdmFyaWFibGUoY29udGV4dCksXG4gICAgICAgICAgdmFsaWQgPSAodmFsaWRNZXRhdmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICBtZXRhdmFyaWFibGUgPSB2YWxpZE1ldGF2YXJpYWJsZTsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBuYW1lVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZU5hbWUoc3RyaWN0LCBjb250ZXh0KTtcblxuICAgICAgaWYgKG5hbWVWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgdGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUZXJtKHN0cmljdCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb25zdCB0eXBlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVR5cGUoc3RyaWN0LCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmICh0eXBlVmFsaWRhdGVzKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IHRoaXM7ICAvLy9cblxuICAgICAgICBjb25zdCBkZWNsYXJlZCA9IHRoaXMuaXNEZWNsYXJlZChjb250ZXh0KTtcblxuICAgICAgICBpZiAoZGVjbGFyZWQpIHtcbiAgICAgICAgICBjb250ZXh0LmFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHZhbGlkYXRlTmFtZShzdHJpY3QsIGNvbnRleHQpIHtcbiAgICBsZXQgbmFtZVZhbGlkYXRlcyA9IHRydWU7IC8vL1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgbmFtZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLCAgLy8vXG4gICAgICAgICAgZGVjbGFyZWRNZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmREZWNsYXJlZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmIChkZWNsYXJlZE1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YVR5cGUgPSBkZWNsYXJlZE1ldGF2YXJpYWJsZS5nZXRNZXRhVHlwZSgpLFxuICAgICAgICAgICAgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgdGhpcy5tZXRhVHlwZSA9IG1ldGFUeXBlO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBTZXR0aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyBtZXRhLXR5cGUgdG8gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc3RyaWN0KSB7XG4gICAgICAgIG5hbWVWYWxpZGF0ZXMgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmFtZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyBuYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBuYW1lVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVUZXJtKHN0cmljdCwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy50ZXJtID09PSBudWxsKSB7XG4gICAgICB0ZXJtVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgdGVybS4uLmApO1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgICBkZWNsYXJlZE1ldGF2YXJhaWJsZSA9IGNvbnRleHQuZmluZERlY2xhcmVkTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBsZXQgdGVybSA9IG51bGw7XG5cbiAgICAgIGlmIChkZWNsYXJlZE1ldGF2YXJhaWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0eXBlID0gZGVjbGFyZWRNZXRhdmFyYWlibGUuZ2V0VHlwZSgpO1xuXG4gICAgICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICAgICAgdGVybSA9IHRoaXMudGVybS52YWxpZGF0ZUdpdmVuVHlwZSh0eXBlLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICB0ZXJtID0gdGhpcy50ZXJtLnZhbGlkYXRlKGNvbnRleHQsICh0ZXJtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuXG4gICAgICAgIHRlcm1WYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSdzIHRlcm0uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVR5cGUoc3RyaWN0LCBjb250ZXh0KSB7XG4gICAgbGV0IHR5cGVWYWxpZGF0ZXM7XG5cbiAgICBpZiAodGhpcy50eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nICB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgdHlwZS4uLmApO1xuXG4gICAgICB0eXBlVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYEEgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlc2VudCBpbiB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuXG4gICAgICBpZiAodHlwZVZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LnRyYWNlKGAuLi52YWxpZGF0ZWQgIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyB0eXBlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmFsaWRhdGVzO1xuICB9XG5cbiAgdW5pZnlGcmFtZShmcmFtZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBmcmFtZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBmcmFtZVN0cmluZyA9IGZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzID0gdGhpcy51bmlmeUZyYW1lTWV0YXZhcmlhYmxlKGZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGZyYW1lVW5pZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkZyYW1lQ29tcGFyZXNUb0ZyYW1lID0gc3Vic3RpdHV0aW9uLmNvbXBhcmVGcmFtZShmcmFtZSwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbkZyYW1lQ29tcGFyZXNUb0ZyYW1lKSB7XG4gICAgICAgICAgY29uc3QgZnJhbWVTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nID0gZnJhbWVTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24gaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuXG4gICAgICAgICAgZnJhbWVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeyBGcmFtZVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gRnJhbWVTdWJzdGl0dXRpb24uZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uLnZhbGlkYXRlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGZyYW1lVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYW1lVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkc7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30ke3N1YnN0aXR1dGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25QcmVzZW50ID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5pc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uUHJlc2VudCkge1xuICAgICAgICBzdWJzdGl0dXRpb24gPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkNvbXBhcmVzVG9TdGF0ZW1lbnQgPSBzdWJzdGl0dXRpb24uY29tcGFyZVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25Db21wYXJlc1RvU3RhdGVtZW50KSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLCAvL1xuICAgICAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcblxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB7IFN0YXRlbWVudFN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGF0ZW1lbnRTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uLCBjb250ZXh0KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGF0ZW1lbnRTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uLnZhbGlkYXRlKHN1YnN0aXR1dGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JHtzdWJzdGl0dXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVJlZmVyZW5jZShyZWZlcmVuY2UsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2Ugd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlSZWZlcmVuY2VNZXRhdmFyaWFibGUocmVmZXJlbmNlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChyZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICByZWZlcmVuY2VVbmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uUmVmZXJlbmNlQ29tcGFyZXNUb1JlZmVyZW5jZSA9IHN1YnN0aXR1dGlvbi5jb21wYXJlUmVmZXJlbmNlKHJlZmVyZW5jZSwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvblJlZmVyZW5jZUNvbXBhcmVzVG9SZWZlcmVuY2UpIHtcbiAgICAgICAgICBjb25zdCByZWZlcmVuY2VTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZyA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtyZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmd9JyByZWZlcmVuY2Ugc3Vic3RpdHV0aW9uIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcblxuICAgICAgICAgIHJlZmVyZW5jZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB7IFJlZmVyZW5jZVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IFJlZmVyZW5jZVN1YnN0aXR1dGlvbi5mcm9tUmVmZXJlbmNlQW5kTWV0YXZhcmlhYmxlKHJlZmVyZW5jZSwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb24udmFsaWRhdGUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgcmVmZXJlbmNlVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlZmVyZW5jZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVW5pZmllcztcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZSwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmcgPSBnZW5lcmFsTWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nID0gc3BlY2lmaWNNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7Z2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgbWV0YXZhcmlhYmxlVW5pZmllcyA9IHVuaWZ5TWV0YXZhcmlhYmxlKGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlGcmFtZU1ldGF2YXJpYWJsZShmcmFtZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBmcmFtZVN0cmluZyA9IGZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9IGdlbmVyYWxDb250ZXh0LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0RmlsZVBhdGggPSBzcGVjaWZpY0NvbnRleHQuZ2V0RmlsZVBhdGgoKTtcblxuICAgIGlmIChnZW5lcmFsQ29udGV4dEZpbGVQYXRoID09PSBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLCAgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IGZyYW1lLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmcmFtZVNpbmd1bGFyID0gZnJhbWUuaXNTaW5ndWxhcigpO1xuXG4gICAgICAgIGlmIChmcmFtZVNpbmd1bGFyKSB7XG4gICAgICAgICAgY29uc3QgZnJhbWVNZXRhdmFyaWFibGVOYW1lID0gZnJhbWUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgICAgICAgIGZyYW1lRGVjbGFyZWRNZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmREZWNsYXJlZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShmcmFtZU1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgICAgICAgIGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSB0aGlzLnVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShmcmFtZURlY2xhcmVkTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIGlmIChmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5KSB7XG4gICAgICAgICAgICBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVJlZmVyZW5jZU1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSdzIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPSBnZW5lcmFsQ29udGV4dC5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dEZpbGVQYXRoID0gc3BlY2lmaWNDb250ZXh0LmdldEZpbGVQYXRoKCk7XG5cbiAgICBpZiAoZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9PT0gc3BlY2lmaWNDb250ZXh0RmlsZVBhdGgpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXR2YXJpYWJsZSA9IHJlZmVyZW5jZS5jb21wYXJlTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChyZWZlcmVuY2VNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0dmFyaWFibGUpIHtcbiAgICAgICAgcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZWZlcmVuY2VNZXRhdmFyaWFibGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdGhpcy51bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkocmVmZXJlbmNlTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAocmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkpIHtcbiAgICAgICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UncyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCdzIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPSBnZW5lcmFsQ29udGV4dC5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dEZpbGVQYXRoID0gc3BlY2lmaWNDb250ZXh0LmdldEZpbGVQYXRoKCk7XG5cbiAgICBpZiAoZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9PT0gc3BlY2lmaWNDb250ZXh0RmlsZVBhdGgpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXR2YXJpYWJsZSA9IHN0YXRlbWVudC5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0dmFyaWFibGUpIHtcbiAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnRTaW5ndWxhciA9IHN0YXRlbWVudC5pc1Npbmd1bGFyKCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFNpbmd1bGFyKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVtZW50TWV0YXZhcmlhYmxlTmFtZSA9IHN0YXRlbWVudC5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgICAgICAgc3RhdGVtZW50RGVjbGFyZWRNZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmREZWNsYXJlZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShzdGF0ZW1lbnRNZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHRoaXMudW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KHN0YXRlbWVudERlY2xhcmVkTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIGlmIChzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSkge1xuICAgICAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCdzIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkobWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5O1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZSxcbiAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nID0gZ2VuZXJhbE1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nID0gc3BlY2lmaWNNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7Z2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBpbnRyaW5zaWNhbGx5Li4uYCk7XG5cbiAgICBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke2dlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgaW50cmluc2ljYWxseS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbWV0YVR5cGVKU09OID0gbWV0YVR5cGVUb01ldGFUeXBlSlNPTih0aGlzLm1ldGFUeXBlKSxcbiAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlSlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbGluZUluZGV4ID0gdGhpcy5nZXRMaW5lSW5kZXgoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbGluZUluZGV4LFxuICAgICAgICAgICAgbWV0YVR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTWV0YXZhcmlhYmxlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nLCBsaW5lSW5kZXggfSA9IGpzb24sXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gaW5zdGFudGlhdGVNZXRhdmFyaWFibGUoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICBuYW1lID0gbmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgdGVybSA9IHRlcm1Gcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBuYW1lLCB0ZXJtLCB0eXBlLCBtZXRhVHlwZSk7XG5cbiAgICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIk1ldGF2YXJpYWJsZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsIm5hbWUiLCJ0ZXJtIiwidHlwZSIsIm1ldGFUeXBlIiwiZ2V0TmFtZSIsImdldFRlcm0iLCJnZXRUeXBlIiwiZ2V0TWV0YVR5cGUiLCJzZXRNZXRhVHlwZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJnZXROb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiaXNEZWNsYXJlZCIsImRlY2xhcmVkTWV0YXZhcmlhYmxlIiwiZmluZERlY2xhcmVkTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwiZGVjbGFyZWQiLCJpc0VxdWFsVG8iLCJtZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsImVxdWFsVG8iLCJpc01ldGFUeXBlRXF1YWxUbyIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwiY29tcGFyZU1ldGF2YXJpYWJsZSIsImNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJjb21wYXJlc1RvTWV0YXZhcmlhYmxlIiwibmFtZU1ldGF2YXJpYWJsZU5hbWUiLCJmaW5kVmFsaWRNZXRhdmFyaWFibGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlIiwidmFsaWRNZXRhdmFyaWFibGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsIm1ldGF2YXJpYWJsZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidGVybVZlcmlmaWVzIiwidmVyaWZ5VGVybSIsInR5cGVWZXJpZmllcyIsInZlcmlmeVR5cGUiLCJkZWJ1ZyIsInRlcm1TdHJpbmciLCJ0eXBlTmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInZhbGlkYXRlIiwic3RyaWN0IiwidW5kZWZpbmVkIiwidmFsaWQiLCJ2YWxpZGF0ZXMiLCJuYW1lVmFsaWRhdGVzIiwidmFsaWRhdGVOYW1lIiwidGVybVZhbGlkYXRlcyIsInZhbGlkYXRlVGVybSIsInR5cGVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVR5cGUiLCJhZGRNZXRhdmFyaWFibGUiLCJtZXRhVHlwZVN0cmluZyIsImRlY2xhcmVkTWV0YXZhcmFpYmxlIiwidmFsaWRhdGVHaXZlblR5cGUiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInR5cGVTdHJpbmciLCJ1bmlmeUZyYW1lIiwiZnJhbWUiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsImZyYW1lVW5pZmllcyIsImZyYW1lU3RyaW5nIiwiZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlGcmFtZU1ldGF2YXJpYWJsZSIsInN1YnN0aXR1dGlvbiIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUiLCJzdWJzdGl0dXRpb25GcmFtZUNvbXBhcmVzVG9GcmFtZSIsImNvbXBhcmVGcmFtZSIsImZyYW1lU3Vic3RpdHV0aW9uIiwiZnJhbWVTdWJzdGl0dXRpb25TdHJpbmciLCJGcmFtZVN1YnN0aXR1dGlvbiIsImVsZW1lbnRzIiwiZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwic3RhdGVtZW50U3RyaW5nIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcyIsInVuaWZ5U3RhdGVtZW50TWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uUHJlc2VudCIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbiIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25Db21wYXJlc1RvU3RhdGVtZW50IiwiY29tcGFyZVN0YXRlbWVudCIsInN0YXRlbWVudFN1YnN0aXR1dGlvbiIsInN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlIiwidW5pZnlSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJyZWZlcmVuY2VVbmlmaWVzIiwicmVmZXJlbmNlU3RyaW5nIiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyIsInVuaWZ5UmVmZXJlbmNlTWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uUmVmZXJlbmNlQ29tcGFyZXNUb1JlZmVyZW5jZSIsImNvbXBhcmVSZWZlcmVuY2UiLCJyZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJyZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmciLCJSZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJmcm9tUmVmZXJlbmNlQW5kTWV0YXZhcmlhYmxlIiwidW5pZnlNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZSIsInNwZWNpZmljTWV0YXZhcmlhYmxlIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZyIsInNwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nIiwiZ2VuZXJhbENvbnRleHRGaWxlUGF0aCIsImdldEZpbGVQYXRoIiwic3BlY2lmaWNDb250ZXh0RmlsZVBhdGgiLCJmcmFtZVNpbmd1bGFyIiwiaXNTaW5ndWxhciIsImZyYW1lTWV0YXZhcmlhYmxlTmFtZSIsImZyYW1lRGVjbGFyZWRNZXRhdmFyaWFibGUiLCJmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5IiwidW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldHZhcmlhYmxlIiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0dmFyaWFibGUiLCJzdGF0ZW1lbnRTaW5ndWxhciIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5hbWUiLCJzdGF0ZW1lbnREZWNsYXJlZE1ldGF2YXJpYWJsZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5IiwibWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkiLCJ0b0pTT04iLCJtZXRhVHlwZUpTT04iLCJtZXRhVHlwZVRvTWV0YVR5cGVKU09OIiwiZ2V0TGluZUluZGV4IiwianNvbiIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZU1ldGF2YXJpYWJsZSIsIm5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsInRlcm1Gcm9tTWV0YXZhcmlhYmxlTm9kZSIsInR5cGVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFUeXBlRnJvbUpTT04iLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsIm1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFjQTs7O2VBQUE7OztnQ0Fad0I7a0VBRUg7eUJBR087MkJBQ0M7NkJBQ1c7c0JBQ2lCO3VCQUNTO3lCQUMwRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BRTVILFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMscUJBQXFCQyx1QkFBTztJQUN0RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsQ0FBRTtRQUN4RSxLQUFLLENBQUNQLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtJQUNsQjtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNKLElBQUk7SUFDbEI7SUFFQUssVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDSixJQUFJO0lBQ2xCO0lBRUFLLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0osSUFBSTtJQUNsQjtJQUVBSyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNKLFFBQVE7SUFDdEI7SUFFQUssWUFBWUwsUUFBUSxFQUFFO1FBQ3BCLElBQUksQ0FBQ0EsUUFBUSxHQUFHQTtJQUNsQjtJQUVBTSxzQkFBc0I7UUFDcEIsTUFBTVgsT0FBTyxJQUFJLENBQUNZLE9BQU8sSUFDbkJDLG1CQUFtQmIsTUFBTyxHQUFHO1FBRW5DLE9BQU9hO0lBQ1Q7SUFFQUMsc0JBQXNCO1FBQ3BCLE1BQU1ELG1CQUFtQixJQUFJLENBQUNGLG1CQUFtQixJQUMzQ0ksbUJBQW1CRixpQkFBaUJDLG1CQUFtQjtRQUU3RCxPQUFP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