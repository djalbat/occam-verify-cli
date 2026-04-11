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
        const metavariableString = this.getString(); ///
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
            const metavariableString = this.getString(); ///
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
        let validates = false;
        const validMetavariable = this.findValidMetavariable(context);
        if (validMetavariable !== null) {
            validates = true;
            metavariable = validMetavariable; ///
            context.debug(`...the '${metavariableString}' metavariable is already valid.`);
        } else {
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
            }
        }
        if (validates) {
            context.debug(`...validated the '${metavariableString}' metavariable.`);
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
            const metavariableString = this.getString(); ///
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
            const metavariableNode = metavariable.getNode(), derivedSubstitution = context.findDerivedSubstitutionByMetavariableNode(metavariableNode);
            if (derivedSubstitution !== null) {
                const derivedSubstitutionFrameComparesToFrame = derivedSubstitution.compareFrame(frame, context);
                if (derivedSubstitutionFrameComparesToFrame) {
                    const derivedSubstitutionString = derivedSubstitution.getString();
                    context.trace(`The '${derivedSubstitutionString}' derived substitution is already present.`);
                    frameUnifies = true;
                }
            } else {
                const { FrameSubstitution } = _elements.default, frameSubstitution = FrameSubstitution.fromFrameAndMetavariable(frame, metavariable, generalContext, specificContext);
                frameSubstitution.validate(context);
                const derivedSubstitution = frameSubstitution; ///
                context.addDerivedSubstitution(derivedSubstitution);
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
            const metavariableNode = metavariable.getNode(), derivedSubstitution = substitution !== null ? context.findDerivedSubstitutionByMetavariableNodeAndSubstitution(metavariableNode, substitution) : context.findDerivedSubstitutionByMetavariableNode(metavariableNode);
            if (derivedSubstitution !== null) {
                const derivedSubstitutionComparesToStatement = derivedSubstitution.compareStatement(statement, context);
                if (derivedSubstitutionComparesToStatement) {
                    const derivedSubstitutionString = derivedSubstitution.getString();
                    context.trace(`The '${derivedSubstitutionString}' derived substitution is already present.`);
                    statementUnifies = true;
                }
            } else {
                const { StatementSubstitution } = _elements.default, statementSubstitution = substitution !== null ? StatementSubstitution.fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, generalContext, specificContext) : StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, generalContext, specificContext);
                statementSubstitution.validate(substitution, context);
                const derivedSubstitution = statementSubstitution; ///
                context.addDerivedSubstitution(derivedSubstitution);
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
            const metavariableNode = metavariable.getNode(), derivedSubstitution = context.findDerivedSubstitutionByMetavariableNode(metavariableNode);
            if (derivedSubstitution !== null) {
                const derivedSubstitutionReferenceComparesToReference = derivedSubstitution.compareReference(reference, context);
                if (derivedSubstitutionReferenceComparesToReference) {
                    const derivedSubstitutionString = derivedSubstitution.getString();
                    context.trace(`The '${derivedSubstitutionString}' derived substitution is already present.`);
                    referenceUnifies = true;
                }
            } else {
                const { ReferenceSubstitution } = _elements.default, referenceSubstitution = ReferenceSubstitution.fromReferenceAndMetavariable(reference, metavariable, generalContext, specificContext);
                referenceSubstitution.validate(context);
                const derivedSubstitution = referenceSubstitution; ///
                context.addDerivedSubstitution(derivedSubstitution);
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
            const metavariableNode = this.getMetavariableNode(), metavariableNodeMatches = reference.matchMetavariableNode(metavariableNode);
            if (metavariableNodeMatches) {
                referenceMetavariableUnifies = true;
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
            const metavariableNode = this.getMetavariableNode(), metavariableNodeMatches = statement.matchMetavariableNode(metavariableNode);
            if (metavariableNodeMatches) {
                statementMetavariableUnifies = true;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZU1ldGF2YXJpYWJsZSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBtZXRhVHlwZUZyb21KU09OLCBtZXRhVHlwZVRvTWV0YVR5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyB1bmlmeU1ldGF2YXJpYWJsZSwgdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IG5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSwgdGVybUZyb21NZXRhdmFyaWFibGVOb2RlLCB0eXBlRnJvbU1ldGF2YXJpYWJsZU5vZGUsIG1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBNZXRhdmFyaWFibGUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIG5hbWUsIHRlcm0sIHR5cGUsIG1ldGFUeXBlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuICAgIFxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE1ldGFUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFUeXBlO1xuICB9XG5cbiAgc2V0TWV0YVR5cGUobWV0YVR5cGUpIHtcbiAgICB0aGlzLm1ldGFUeXBlID0gbWV0YVR5cGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGlzRGVjbGFyZWQoY29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBkZWNsYXJlZE1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZERlY2xhcmVkTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIGRlY2xhcmVkID0gKGRlY2xhcmVkTWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBkZWNsYXJlZDtcbiAgfVxuXG4gIGlzRXF1YWxUbyhtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc01ldGFUeXBlRXF1YWxUbyhtZXRhVHlwZSkgeyByZXR1cm4gdGhpcy5tZXRhVHlwZS5pc0VxdWFsVG8obWV0YVR5cGUpOyB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIGNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9NZXRhdmFyaWFibGU7XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZU1ldGF2YXJpYWJsZU5hbWUgPSAodGhpcy5uYW1lID09PSBtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IG5hbWVNZXRhdmFyaWFibGVOYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBmaW5kVmFsaWRNZXRhdmFyaWFibGUoY29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdmFsaWRNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7IC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkTWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVRlcm0oY29udGV4dCk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCB0eXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVR5cGUoY29udGV4dCk7XG5cbiAgICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlUZXJtKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZlcmlmaWVzID0gdHJ1ZTsgIC8vL1xuXG4gICAgaWYgKHRoaXMudGVybSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHRlcm1WZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBBICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGlzIHByZXNlbnQgaW4gdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VHlwZShjb250ZXh0KSB7XG4gICAgbGV0IHR5cGVWZXJpZmllcyA9IHRydWU7ICAvLy9cblxuICAgIGlmICh0aGlzLnR5cGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyB0eXBlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZHMgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSdzIHR5cGUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZhbGlkYXRlKHN0cmljdCwgY29udGV4dCkge1xuICAgIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRleHQgPSBzdHJpY3Q7IC8vL1xuXG4gICAgICBzdHJpY3QgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YWxpZE1ldGF2YXJpYWJsZSA9IHRoaXMuZmluZFZhbGlkTWV0YXZhcmlhYmxlKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkTWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgICBtZXRhdmFyaWFibGUgPSB2YWxpZE1ldGF2YXJpYWJsZTsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmFtZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVOYW1lKHN0cmljdCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChuYW1lVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IHRlcm1WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGVybShzdHJpY3QsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29uc3QgdHlwZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUeXBlKHN0cmljdCwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAodHlwZVZhbGlkYXRlcykge1xuICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBtZXRhdmFyaWFibGUgPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgY29uc3QgZGVjbGFyZWQgPSB0aGlzLmlzRGVjbGFyZWQoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGRlY2xhcmVkKSB7XG4gICAgICAgICAgY29udGV4dC5hZGRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICB2YWxpZGF0ZU5hbWUoc3RyaWN0LCBjb250ZXh0KSB7XG4gICAgbGV0IG5hbWVWYWxpZGF0ZXMgPSB0cnVlOyAvLy9cblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSdzIG5hbWUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKSwgIC8vL1xuICAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kRGVjbGFyZWRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAoZGVjbGFyZWRNZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFUeXBlID0gZGVjbGFyZWRNZXRhdmFyaWFibGUuZ2V0TWV0YVR5cGUoKSxcbiAgICAgICAgICAgIG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcblxuICAgICAgY29udGV4dC50cmFjZShgU2V0dGluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgbWV0YS10eXBlIHRvIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHN0cmljdCkge1xuICAgICAgICBuYW1lVmFsaWRhdGVzID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5hbWVWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgbmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmFtZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlVGVybShzdHJpY3QsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMudGVybSA9PT0gbnVsbCkge1xuICAgICAgdGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgdGVybS4uLmApO1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgICBkZWNsYXJlZE1ldGF2YXJhaWJsZSA9IGNvbnRleHQuZmluZERlY2xhcmVkTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBsZXQgdGVybSA9IG51bGw7XG5cbiAgICAgIGlmIChkZWNsYXJlZE1ldGF2YXJhaWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0eXBlID0gZGVjbGFyZWRNZXRhdmFyYWlibGUuZ2V0VHlwZSgpO1xuXG4gICAgICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICAgICAgdGVybSA9IHRoaXMudGVybS52YWxpZGF0ZUdpdmVuVHlwZSh0eXBlLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICB0ZXJtID0gdGhpcy50ZXJtLnZhbGlkYXRlKGNvbnRleHQsICh0ZXJtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuXG4gICAgICAgIHRlcm1WYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSdzIHRlcm0uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVR5cGUoc3RyaWN0LCBjb250ZXh0KSB7XG4gICAgbGV0IHR5cGVWYWxpZGF0ZXM7XG5cbiAgICBpZiAodGhpcy50eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nICB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgdHlwZS4uLmApO1xuXG4gICAgICB0eXBlVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYEEgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlc2VudCBpbiB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuXG4gICAgICBpZiAodHlwZVZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LnRyYWNlKGAuLi52YWxpZGF0ZWQgIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyB0eXBlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmFsaWRhdGVzO1xuICB9XG5cbiAgdW5pZnlGcmFtZShmcmFtZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBmcmFtZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBmcmFtZVN0cmluZyA9IGZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzID0gdGhpcy51bmlmeUZyYW1lTWV0YXZhcmlhYmxlKGZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGZyYW1lVW5pZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgZGVyaXZlZFN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZERlcml2ZWRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChkZXJpdmVkU3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGRlcml2ZWRTdWJzdGl0dXRpb25GcmFtZUNvbXBhcmVzVG9GcmFtZSA9IGRlcml2ZWRTdWJzdGl0dXRpb24uY29tcGFyZUZyYW1lKGZyYW1lLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoZGVyaXZlZFN1YnN0aXR1dGlvbkZyYW1lQ29tcGFyZXNUb0ZyYW1lKSB7XG4gICAgICAgICAgY29uc3QgZGVyaXZlZFN1YnN0aXR1dGlvblN0cmluZyA9IGRlcml2ZWRTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7ZGVyaXZlZFN1YnN0aXR1dGlvblN0cmluZ30nIGRlcml2ZWQgc3Vic3RpdHV0aW9uIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcblxuICAgICAgICAgIGZyYW1lVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHsgRnJhbWVTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IEZyYW1lU3Vic3RpdHV0aW9uLmZyb21GcmFtZUFuZE1ldGF2YXJpYWJsZShmcmFtZSwgbWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbi52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgICBjb25zdCBkZXJpdmVkU3Vic3RpdHV0aW9uID0gZnJhbWVTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZERlcml2ZWRTdWJzdGl0dXRpb24oZGVyaXZlZFN1YnN0aXR1dGlvbik7XG5cbiAgICAgICAgZnJhbWVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhbWVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uLmdldFN0cmluZygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORztcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfSR7c3Vic3RpdHV0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICAgIGRlcml2ZWRTdWJzdGl0dXRpb24gPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbmREZXJpdmVkU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbmREZXJpdmVkU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAoZGVyaXZlZFN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBkZXJpdmVkU3Vic3RpdHV0aW9uQ29tcGFyZXNUb1N0YXRlbWVudCA9IGRlcml2ZWRTdWJzdGl0dXRpb24uY29tcGFyZVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChkZXJpdmVkU3Vic3RpdHV0aW9uQ29tcGFyZXNUb1N0YXRlbWVudCkge1xuICAgICAgICAgIGNvbnN0IGRlcml2ZWRTdWJzdGl0dXRpb25TdHJpbmcgPSBkZXJpdmVkU3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2Rlcml2ZWRTdWJzdGl0dXRpb25TdHJpbmd9JyBkZXJpdmVkIHN1YnN0aXR1dGlvbiBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG5cbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhdGVtZW50U3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhdGVtZW50U3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbi52YWxpZGF0ZShzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnN0IGRlcml2ZWRTdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZERlcml2ZWRTdWJzdGl0dXRpb24oZGVyaXZlZFN1YnN0aXR1dGlvbik7XG5cbiAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JHtzdWJzdGl0dXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVJlZmVyZW5jZShyZWZlcmVuY2UsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2Ugd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlSZWZlcmVuY2VNZXRhdmFyaWFibGUocmVmZXJlbmNlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChyZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICByZWZlcmVuY2VVbmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgICBkZXJpdmVkU3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kRGVyaXZlZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKGRlcml2ZWRTdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZGVyaXZlZFN1YnN0aXR1dGlvblJlZmVyZW5jZUNvbXBhcmVzVG9SZWZlcmVuY2UgPSBkZXJpdmVkU3Vic3RpdHV0aW9uLmNvbXBhcmVSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoZGVyaXZlZFN1YnN0aXR1dGlvblJlZmVyZW5jZUNvbXBhcmVzVG9SZWZlcmVuY2UpIHtcbiAgICAgICAgICBjb25zdCBkZXJpdmVkU3Vic3RpdHV0aW9uU3RyaW5nID0gZGVyaXZlZFN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtkZXJpdmVkU3Vic3RpdHV0aW9uU3RyaW5nfScgZGVyaXZlZCBzdWJzdGl0dXRpb24gaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuXG4gICAgICAgICAgcmVmZXJlbmNlVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHsgUmVmZXJlbmNlU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uID0gUmVmZXJlbmNlU3Vic3RpdHV0aW9uLmZyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUocmVmZXJlbmNlLCBtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbi52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgICBjb25zdCBkZXJpdmVkU3Vic3RpdHV0aW9uID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGREZXJpdmVkU3Vic3RpdHV0aW9uKGRlcml2ZWRTdWJzdGl0dXRpb24pO1xuXG4gICAgICAgIHJlZmVyZW5jZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWZlcmVuY2VVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2Ugd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVVuaWZpZXM7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGUsICAvLy9cbiAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nID0gZ2VuZXJhbE1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZyA9IHNwZWNpZmljTWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke2dlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIG1ldGF2YXJpYWJsZVVuaWZpZXMgPSB1bmlmeU1ldGF2YXJpYWJsZShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7Z2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5RnJhbWVNZXRhdmFyaWFibGUoZnJhbWUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPSBnZW5lcmFsQ29udGV4dC5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dEZpbGVQYXRoID0gc3BlY2lmaWNDb250ZXh0LmdldEZpbGVQYXRoKCk7XG5cbiAgICBpZiAoZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9PT0gc3BlY2lmaWNDb250ZXh0RmlsZVBhdGgpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5vZGUoKSwgIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBmcmFtZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVJlZmVyZW5jZU1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSdzIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPSBnZW5lcmFsQ29udGV4dC5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dEZpbGVQYXRoID0gc3BlY2lmaWNDb250ZXh0LmdldEZpbGVQYXRoKCk7XG5cbiAgICBpZiAoZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9PT0gc3BlY2lmaWNDb250ZXh0RmlsZVBhdGgpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gcmVmZXJlbmNlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UncyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCdzIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPSBnZW5lcmFsQ29udGV4dC5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dEZpbGVQYXRoID0gc3BlY2lmaWNDb250ZXh0LmdldEZpbGVQYXRoKCk7XG5cbiAgICBpZiAoZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9PT0gc3BlY2lmaWNDb250ZXh0RmlsZVBhdGgpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gc3RhdGVtZW50Lm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQncyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGUsXG4gICAgICAgICAgZ2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZyA9IGdlbmVyYWxNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZyA9IHNwZWNpZmljTWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke2dlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgaW50cmluc2ljYWxseS4uLmApO1xuXG4gICAgbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGludHJpbnNpY2FsbHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1ldGFUeXBlSlNPTiA9IG1ldGFUeXBlVG9NZXRhVHlwZUpTT04odGhpcy5tZXRhVHlwZSksXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUpTT04sICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0TGluZUluZGV4KCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIGxpbmVJbmRleCxcbiAgICAgICAgICAgIG1ldGFUeXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk1ldGF2YXJpYWJsZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGluc3RhbnRpYXRlTWV0YXZhcmlhYmxlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgbmFtZSA9IG5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICB0eXBlID0gdHlwZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbmFtZSwgdGVybSwgdHlwZSwgbWV0YVR5cGUpO1xuXG4gICAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJNZXRhdmFyaWFibGUiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJuYW1lIiwidGVybSIsInR5cGUiLCJtZXRhVHlwZSIsImdldE5hbWUiLCJnZXRUZXJtIiwiZ2V0VHlwZSIsImdldE1ldGFUeXBlIiwic2V0TWV0YVR5cGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZ2V0Tm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImlzRGVjbGFyZWQiLCJkZWNsYXJlZE1ldGF2YXJpYWJsZSIsImZpbmREZWNsYXJlZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsImRlY2xhcmVkIiwiaXNFcXVhbFRvIiwibWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJlcXVhbFRvIiwiaXNNZXRhVHlwZUVxdWFsVG8iLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsImNvbXBhcmVNZXRhdmFyaWFibGUiLCJjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZXNUb01ldGF2YXJpYWJsZSIsIm5hbWVNZXRhdmFyaWFibGVOYW1lIiwiZmluZFZhbGlkTWV0YXZhcmlhYmxlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZSIsInZhbGlkTWV0YXZhcmlhYmxlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInRlcm1WZXJpZmllcyIsInZlcmlmeVRlcm0iLCJ0eXBlVmVyaWZpZXMiLCJ2ZXJpZnlUeXBlIiwiZGVidWciLCJ0ZXJtU3RyaW5nIiwidHlwZU5hbWUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ2YWxpZGF0ZSIsInN0cmljdCIsInVuZGVmaW5lZCIsInZhbGlkYXRlcyIsIm5hbWVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZU5hbWUiLCJ0ZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVUZXJtIiwidHlwZVZhbGlkYXRlcyIsInZhbGlkYXRlVHlwZSIsImFkZE1ldGF2YXJpYWJsZSIsIm1ldGFUeXBlU3RyaW5nIiwiZGVjbGFyZWRNZXRhdmFyYWlibGUiLCJ2YWxpZGF0ZUdpdmVuVHlwZSIsInZhbGlkYXRlc0ZvcndhcmRzIiwidHlwZVN0cmluZyIsInVuaWZ5RnJhbWUiLCJmcmFtZSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwiZnJhbWVVbmlmaWVzIiwiZnJhbWVTdHJpbmciLCJmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMiLCJ1bmlmeUZyYW1lTWV0YXZhcmlhYmxlIiwiZGVyaXZlZFN1YnN0aXR1dGlvbiIsImZpbmREZXJpdmVkU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlIiwiZGVyaXZlZFN1YnN0aXR1dGlvbkZyYW1lQ29tcGFyZXNUb0ZyYW1lIiwiY29tcGFyZUZyYW1lIiwiZGVyaXZlZFN1YnN0aXR1dGlvblN0cmluZyIsIkZyYW1lU3Vic3RpdHV0aW9uIiwiZWxlbWVudHMiLCJmcmFtZVN1YnN0aXR1dGlvbiIsImZyb21GcmFtZUFuZE1ldGF2YXJpYWJsZSIsImFkZERlcml2ZWRTdWJzdGl0dXRpb24iLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN1YnN0aXR1dGlvbiIsInN0YXRlbWVudFVuaWZpZXMiLCJzdGF0ZW1lbnRTdHJpbmciLCJzdWJzdGl0dXRpb25TdHJpbmciLCJFTVBUWV9TVFJJTkciLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnRNZXRhdmFyaWFibGUiLCJmaW5kRGVyaXZlZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbiIsImRlcml2ZWRTdWJzdGl0dXRpb25Db21wYXJlc1RvU3RhdGVtZW50IiwiY29tcGFyZVN0YXRlbWVudCIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsInN0YXRlbWVudFN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlIiwidW5pZnlSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJyZWZlcmVuY2VVbmlmaWVzIiwicmVmZXJlbmNlU3RyaW5nIiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyIsInVuaWZ5UmVmZXJlbmNlTWV0YXZhcmlhYmxlIiwiZGVyaXZlZFN1YnN0aXR1dGlvblJlZmVyZW5jZUNvbXBhcmVzVG9SZWZlcmVuY2UiLCJjb21wYXJlUmVmZXJlbmNlIiwiUmVmZXJlbmNlU3Vic3RpdHV0aW9uIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uIiwiZnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZSIsInVuaWZ5TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlVW5pZmllcyIsImdlbmVyYWxNZXRhdmFyaWFibGUiLCJzcGVjaWZpY01ldGF2YXJpYWJsZSIsImdlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmciLCJzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZyIsImdlbmVyYWxDb250ZXh0RmlsZVBhdGgiLCJnZXRGaWxlUGF0aCIsInNwZWNpZmljQ29udGV4dEZpbGVQYXRoIiwidW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IiwibWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkiLCJ0b0pTT04iLCJtZXRhVHlwZUpTT04iLCJtZXRhVHlwZVRvTWV0YVR5cGVKU09OIiwiZ2V0TGluZUluZGV4IiwianNvbiIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZU1ldGF2YXJpYWJsZSIsIm5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsInRlcm1Gcm9tTWV0YXZhcmlhYmxlTm9kZSIsInR5cGVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFUeXBlRnJvbUpTT04iLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsIm1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFjQTs7O2VBQUE7OztnQ0Fad0I7a0VBRUg7eUJBR087MkJBQ0M7NkJBQ1c7c0JBQ2lCO3VCQUNTO3lCQUMwRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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