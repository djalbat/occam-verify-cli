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
    constructor(context, string, node, breakPoint, name, term, type, metaType){
        super(context, string, node, breakPoint);
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
                const { FrameSubstitution } = _elements.default;
                let frameSubstitution;
                frameSubstitution = FrameSubstitution.fromFrameAndMetavariable(frame, metavariable, generalContext, specificContext);
                frameSubstitution = frameSubstitution.validate(context); ///
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
                const { StatementSubstitution } = _elements.default;
                let statementSubstitution;
                statementSubstitution = substitution !== null ? StatementSubstitution.fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, generalContext, specificContext) : StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, generalContext, specificContext);
                statementSubstitution = statementSubstitution.validate(substitution, context); ///
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
                const { ReferenceSubstitution } = _elements.default;
                let referenceSubstitution;
                referenceSubstitution = ReferenceSubstitution.fromReferenceAndMetavariable(reference, metavariable, generalContext, specificContext);
                referenceSubstitution = referenceSubstitution.validate(context); ///
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
        const metaTypeJSON = (0, _json.metaTypeToMetaTypeJSON)(this.metaType), metaType = metaTypeJSON, string = this.getString();
        let breakPoint;
        breakPoint = this.getBreakPoint();
        const breakPointJSON = breakPoint.toJSON();
        breakPoint = breakPointJSON; ///
        const json = {
            string,
            breakPoint,
            metaType
        };
        return json;
    }
    static name = "Metavariable";
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string, breakPoint } = json, metavariableNode = (0, _instantiate.instantiateMetavariable)(string, context), node = metavariableNode, name = (0, _element.nameFromMetavariableNode)(metavariableNode, context), term = (0, _element.termFromMetavariableNode)(metavariableNode, context), type = (0, _element.typeFromMetavariableNode)(metavariableNode, context), metaType = (0, _json.metaTypeFromJSON)(json, context), metavariable = new Metavariable(context, string, node, breakPoint, name, term, type, metaType);
            return metavariable;
        }, context);
    }
    static fromStatement(statement, context) {
        const statementNode = statement.getNode(), metavariable = (0, _element.metavariableFromStatementNode)(statementNode, context);
        return metavariable;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZU1ldGF2YXJpYWJsZSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBtZXRhVHlwZUZyb21KU09OLCBtZXRhVHlwZVRvTWV0YVR5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyB1bmlmeU1ldGF2YXJpYWJsZSwgdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IG5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSwgdGVybUZyb21NZXRhdmFyaWFibGVOb2RlLCB0eXBlRnJvbU1ldGF2YXJpYWJsZU5vZGUsIG1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBNZXRhdmFyaWFibGUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBuYW1lLCB0ZXJtLCB0eXBlLCBtZXRhVHlwZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG4gICAgXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5tZXRhVHlwZSA9IG1ldGFUeXBlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YVR5cGU7XG4gIH1cblxuICBzZXRNZXRhVHlwZShtZXRhVHlwZSkge1xuICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgaXNEZWNsYXJlZChjb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kRGVjbGFyZWRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgZGVjbGFyZWQgPSAoZGVjbGFyZWRNZXRhdmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmVkO1xuICB9XG5cbiAgaXNFcXVhbFRvKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzTWV0YVR5cGVFcXVhbFRvKG1ldGFUeXBlKSB7IHJldHVybiB0aGlzLm1ldGFUeXBlLmlzRXF1YWxUbyhtZXRhVHlwZSk7IH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgY29tcGFyZXNUb01ldGF2YXJpYWJsZSA9IGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb01ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lTWV0YXZhcmlhYmxlTmFtZSA9ICh0aGlzLm5hbWUgPT09IG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gbmFtZU1ldGF2YXJpYWJsZU5hbWU7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGZpbmRWYWxpZE1ldGF2YXJpYWJsZShjb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICB2YWxpZE1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTsgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRNZXRhdmFyaWFibGU7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1WZXJpZmllcyA9IHRoaXMudmVyaWZ5VGVybShjb250ZXh0KTtcblxuICAgIGlmICh0ZXJtVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VHlwZShjb250ZXh0KTtcblxuICAgICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVRlcm0oY29udGV4dCkge1xuICAgIGxldCB0ZXJtVmVyaWZpZXMgPSB0cnVlOyAgLy8vXG5cbiAgICBpZiAodGhpcy50ZXJtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgICAgdGVybVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYEEgJyR7dGVybVN0cmluZ30nIHRlcm0gaXMgcHJlc2VudCBpbiB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlUeXBlKGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVzID0gdHJ1ZTsgIC8vL1xuXG4gICAgaWYgKHRoaXMudHlwZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSdzIHR5cGUuLi5gKTtcblxuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgICAgICB0eXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkcyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgdHlwZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGUoc3RyaWN0LCBjb250ZXh0KSB7XG4gICAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGV4dCA9IHN0cmljdDsgLy8vXG5cbiAgICAgIHN0cmljdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkTWV0YXZhcmlhYmxlID0gdGhpcy5maW5kVmFsaWRNZXRhdmFyaWFibGUoY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRNZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgIG1ldGF2YXJpYWJsZSA9IHZhbGlkTWV0YXZhcmlhYmxlOyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuYW1lVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZU5hbWUoc3RyaWN0LCBjb250ZXh0KTtcblxuICAgICAgaWYgKG5hbWVWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgdGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUZXJtKHN0cmljdCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb25zdCB0eXBlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVR5cGUoc3RyaWN0LCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmICh0eXBlVmFsaWRhdGVzKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IHRoaXM7ICAvLy9cblxuICAgICAgICBjb25zdCBkZWNsYXJlZCA9IHRoaXMuaXNEZWNsYXJlZChjb250ZXh0KTtcblxuICAgICAgICBpZiAoZGVjbGFyZWQpIHtcbiAgICAgICAgICBjb250ZXh0LmFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHZhbGlkYXRlTmFtZShzdHJpY3QsIGNvbnRleHQpIHtcbiAgICBsZXQgbmFtZVZhbGlkYXRlcyA9IHRydWU7IC8vL1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgbmFtZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLCAgLy8vXG4gICAgICAgICAgZGVjbGFyZWRNZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmREZWNsYXJlZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmIChkZWNsYXJlZE1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YVR5cGUgPSBkZWNsYXJlZE1ldGF2YXJpYWJsZS5nZXRNZXRhVHlwZSgpLFxuICAgICAgICAgICAgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgdGhpcy5tZXRhVHlwZSA9IG1ldGFUeXBlO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBTZXR0aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyBtZXRhLXR5cGUgdG8gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc3RyaWN0KSB7XG4gICAgICAgIG5hbWVWYWxpZGF0ZXMgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmFtZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyBuYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBuYW1lVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVUZXJtKHN0cmljdCwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy50ZXJtID09PSBudWxsKSB7XG4gICAgICB0ZXJtVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyB0ZXJtLi4uYCk7XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmFpYmxlID0gY29udGV4dC5maW5kRGVjbGFyZWRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGxldCB0ZXJtID0gbnVsbDtcblxuICAgICAgaWYgKGRlY2xhcmVkTWV0YXZhcmFpYmxlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBkZWNsYXJlZE1ldGF2YXJhaWJsZS5nZXRUeXBlKCk7XG5cbiAgICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgICB0ZXJtID0gdGhpcy50ZXJtLnZhbGlkYXRlR2l2ZW5UeXBlKHR5cGUsIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgIHRlcm0gPSB0aGlzLnRlcm0udmFsaWRhdGUoY29udGV4dCwgKHRlcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMudGVybSA9IHRlcm07XG5cbiAgICAgICAgdGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgdGVybS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlVHlwZShzdHJpY3QsIGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZVZhbGlkYXRlcztcblxuICAgIGlmICh0aGlzLnR5cGUgPT09IG51bGwpIHtcbiAgICAgIHR5cGVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyB0eXBlLi4uYCk7XG5cbiAgICAgIHR5cGVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgQSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVzZW50IGluIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG5cbiAgICAgIGlmICh0eXBlVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQudHJhY2UoYC4uLnZhbGlkYXRlZCAgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSdzIHR5cGUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWYWxpZGF0ZXM7XG4gIH1cblxuICB1bmlmeUZyYW1lKGZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0aGlzLnVuaWZ5RnJhbWVNZXRhdmFyaWFibGUoZnJhbWUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgZnJhbWVVbmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgICBkZXJpdmVkU3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kRGVyaXZlZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKGRlcml2ZWRTdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZGVyaXZlZFN1YnN0aXR1dGlvbkZyYW1lQ29tcGFyZXNUb0ZyYW1lID0gZGVyaXZlZFN1YnN0aXR1dGlvbi5jb21wYXJlRnJhbWUoZnJhbWUsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChkZXJpdmVkU3Vic3RpdHV0aW9uRnJhbWVDb21wYXJlc1RvRnJhbWUpIHtcbiAgICAgICAgICBjb25zdCBkZXJpdmVkU3Vic3RpdHV0aW9uU3RyaW5nID0gZGVyaXZlZFN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtkZXJpdmVkU3Vic3RpdHV0aW9uU3RyaW5nfScgZGVyaXZlZCBzdWJzdGl0dXRpb24gaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuXG4gICAgICAgICAgZnJhbWVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeyBGcmFtZVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHM7XG5cbiAgICAgICAgbGV0IGZyYW1lU3Vic3RpdHV0aW9uO1xuXG4gICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gRnJhbWVTdWJzdGl0dXRpb24uZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gZnJhbWVTdWJzdGl0dXRpb24udmFsaWRhdGUoY29udGV4dCk7ICAvLy9cblxuICAgICAgICBjb25zdCBkZXJpdmVkU3Vic3RpdHV0aW9uID0gZnJhbWVTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZERlcml2ZWRTdWJzdGl0dXRpb24oZGVyaXZlZFN1YnN0aXR1dGlvbik7XG5cbiAgICAgICAgZnJhbWVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhbWVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uLmdldFN0cmluZygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORztcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfSR7c3Vic3RpdHV0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICAgIGRlcml2ZWRTdWJzdGl0dXRpb24gPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbmREZXJpdmVkU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbmREZXJpdmVkU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAoZGVyaXZlZFN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBkZXJpdmVkU3Vic3RpdHV0aW9uQ29tcGFyZXNUb1N0YXRlbWVudCA9IGRlcml2ZWRTdWJzdGl0dXRpb24uY29tcGFyZVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChkZXJpdmVkU3Vic3RpdHV0aW9uQ29tcGFyZXNUb1N0YXRlbWVudCkge1xuICAgICAgICAgIGNvbnN0IGRlcml2ZWRTdWJzdGl0dXRpb25TdHJpbmcgPSBkZXJpdmVkU3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2Rlcml2ZWRTdWJzdGl0dXRpb25TdHJpbmd9JyBkZXJpdmVkIHN1YnN0aXR1dGlvbiBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG5cbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzO1xuXG4gICAgICAgIGxldCBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG5cbiAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXRlbWVudFN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXRlbWVudFN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb24udmFsaWRhdGUoc3Vic3RpdHV0aW9uLCBjb250ZXh0KTsgIC8vL1xuXG4gICAgICAgIGNvbnN0IGRlcml2ZWRTdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZERlcml2ZWRTdWJzdGl0dXRpb24oZGVyaXZlZFN1YnN0aXR1dGlvbik7XG5cbiAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JHtzdWJzdGl0dXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVJlZmVyZW5jZShyZWZlcmVuY2UsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2Ugd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlSZWZlcmVuY2VNZXRhdmFyaWFibGUocmVmZXJlbmNlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChyZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICByZWZlcmVuY2VVbmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgICBkZXJpdmVkU3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kRGVyaXZlZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKGRlcml2ZWRTdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZGVyaXZlZFN1YnN0aXR1dGlvblJlZmVyZW5jZUNvbXBhcmVzVG9SZWZlcmVuY2UgPSBkZXJpdmVkU3Vic3RpdHV0aW9uLmNvbXBhcmVSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoZGVyaXZlZFN1YnN0aXR1dGlvblJlZmVyZW5jZUNvbXBhcmVzVG9SZWZlcmVuY2UpIHtcbiAgICAgICAgICBjb25zdCBkZXJpdmVkU3Vic3RpdHV0aW9uU3RyaW5nID0gZGVyaXZlZFN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtkZXJpdmVkU3Vic3RpdHV0aW9uU3RyaW5nfScgZGVyaXZlZCBzdWJzdGl0dXRpb24gaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuXG4gICAgICAgICAgcmVmZXJlbmNlVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHsgUmVmZXJlbmNlU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cztcblxuICAgICAgICBsZXQgcmVmZXJlbmNlU3Vic3RpdHV0aW9uO1xuXG4gICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IFJlZmVyZW5jZVN1YnN0aXR1dGlvbi5mcm9tUmVmZXJlbmNlQW5kTWV0YXZhcmlhYmxlKHJlZmVyZW5jZSwgbWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb24gPSByZWZlcmVuY2VTdWJzdGl0dXRpb24udmFsaWRhdGUoY29udGV4dCk7ICAvLy9cblxuICAgICAgICBjb25zdCBkZXJpdmVkU3Vic3RpdHV0aW9uID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGREZXJpdmVkU3Vic3RpdHV0aW9uKGRlcml2ZWRTdWJzdGl0dXRpb24pO1xuXG4gICAgICAgIHJlZmVyZW5jZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWZlcmVuY2VVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2Ugd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVVuaWZpZXM7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGUsICAvLy9cbiAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nID0gZ2VuZXJhbE1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZyA9IHNwZWNpZmljTWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke2dlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIG1ldGF2YXJpYWJsZVVuaWZpZXMgPSB1bmlmeU1ldGF2YXJpYWJsZShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7Z2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5RnJhbWVNZXRhdmFyaWFibGUoZnJhbWUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPSBnZW5lcmFsQ29udGV4dC5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dEZpbGVQYXRoID0gc3BlY2lmaWNDb250ZXh0LmdldEZpbGVQYXRoKCk7XG5cbiAgICBpZiAoZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9PT0gc3BlY2lmaWNDb250ZXh0RmlsZVBhdGgpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5vZGUoKSwgIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBmcmFtZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVJlZmVyZW5jZU1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSdzIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPSBnZW5lcmFsQ29udGV4dC5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dEZpbGVQYXRoID0gc3BlY2lmaWNDb250ZXh0LmdldEZpbGVQYXRoKCk7XG5cbiAgICBpZiAoZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9PT0gc3BlY2lmaWNDb250ZXh0RmlsZVBhdGgpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gcmVmZXJlbmNlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UncyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCdzIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPSBnZW5lcmFsQ29udGV4dC5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dEZpbGVQYXRoID0gc3BlY2lmaWNDb250ZXh0LmdldEZpbGVQYXRoKCk7XG5cbiAgICBpZiAoZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9PT0gc3BlY2lmaWNDb250ZXh0RmlsZVBhdGgpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gc3RhdGVtZW50Lm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQncyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGUsXG4gICAgICAgICAgZ2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZyA9IGdlbmVyYWxNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZyA9IHNwZWNpZmljTWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke2dlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgaW50cmluc2ljYWxseS4uLmApO1xuXG4gICAgbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGludHJpbnNpY2FsbHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1ldGFUeXBlSlNPTiA9IG1ldGFUeXBlVG9NZXRhVHlwZUpTT04odGhpcy5tZXRhVHlwZSksXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUpTT04sICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgbGV0IGJyZWFrUG9pbnQ7XG5cbiAgICBicmVha1BvaW50ID0gdGhpcy5nZXRCcmVha1BvaW50KCk7XG5cbiAgICBjb25zdCBicmVha1BvaW50SlNPTiA9IGJyZWFrUG9pbnQudG9KU09OKCk7XG5cbiAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEpTT047ICAvLy9cblxuICAgIGNvbnN0IGpzb24gPSB7XG4gICAgICBzdHJpbmcsXG4gICAgICBicmVha1BvaW50LFxuICAgICAgbWV0YVR5cGVcbiAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTWV0YXZhcmlhYmxlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nLCBicmVha1BvaW50IH0gPSBqc29uLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGluc3RhbnRpYXRlTWV0YXZhcmlhYmxlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgbmFtZSA9IG5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICB0eXBlID0gdHlwZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIG5hbWUsIHRlcm0sIHR5cGUsIG1ldGFUeXBlKTtcblxuICAgICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTWV0YXZhcmlhYmxlIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsIm5hbWUiLCJ0ZXJtIiwidHlwZSIsIm1ldGFUeXBlIiwiZ2V0TmFtZSIsImdldFRlcm0iLCJnZXRUeXBlIiwiZ2V0TWV0YVR5cGUiLCJzZXRNZXRhVHlwZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJnZXROb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiaXNEZWNsYXJlZCIsImRlY2xhcmVkTWV0YXZhcmlhYmxlIiwiZmluZERlY2xhcmVkTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwiZGVjbGFyZWQiLCJpc0VxdWFsVG8iLCJtZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsImVxdWFsVG8iLCJpc01ldGFUeXBlRXF1YWxUbyIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwiY29tcGFyZU1ldGF2YXJpYWJsZSIsImNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJjb21wYXJlc1RvTWV0YXZhcmlhYmxlIiwibmFtZU1ldGF2YXJpYWJsZU5hbWUiLCJmaW5kVmFsaWRNZXRhdmFyaWFibGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlIiwidmFsaWRNZXRhdmFyaWFibGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsIm1ldGF2YXJpYWJsZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidGVybVZlcmlmaWVzIiwidmVyaWZ5VGVybSIsInR5cGVWZXJpZmllcyIsInZlcmlmeVR5cGUiLCJkZWJ1ZyIsInRlcm1TdHJpbmciLCJ0eXBlTmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInZhbGlkYXRlIiwic3RyaWN0IiwidW5kZWZpbmVkIiwidmFsaWRhdGVzIiwibmFtZVZhbGlkYXRlcyIsInZhbGlkYXRlTmFtZSIsInRlcm1WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRlcm0iLCJ0eXBlVmFsaWRhdGVzIiwidmFsaWRhdGVUeXBlIiwiYWRkTWV0YXZhcmlhYmxlIiwibWV0YVR5cGVTdHJpbmciLCJkZWNsYXJlZE1ldGF2YXJhaWJsZSIsInZhbGlkYXRlR2l2ZW5UeXBlIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJ0eXBlU3RyaW5nIiwidW5pZnlGcmFtZSIsImZyYW1lIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJmcmFtZVVuaWZpZXMiLCJmcmFtZVN0cmluZyIsImZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcyIsInVuaWZ5RnJhbWVNZXRhdmFyaWFibGUiLCJkZXJpdmVkU3Vic3RpdHV0aW9uIiwiZmluZERlcml2ZWRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUiLCJkZXJpdmVkU3Vic3RpdHV0aW9uRnJhbWVDb21wYXJlc1RvRnJhbWUiLCJjb21wYXJlRnJhbWUiLCJkZXJpdmVkU3Vic3RpdHV0aW9uU3RyaW5nIiwiRnJhbWVTdWJzdGl0dXRpb24iLCJlbGVtZW50cyIsImZyYW1lU3Vic3RpdHV0aW9uIiwiZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIiwiYWRkRGVyaXZlZFN1YnN0aXR1dGlvbiIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3Vic3RpdHV0aW9uIiwic3RhdGVtZW50VW5pZmllcyIsInN0YXRlbWVudFN0cmluZyIsInN1YnN0aXR1dGlvblN0cmluZyIsIkVNUFRZX1NUUklORyIsInN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudE1ldGF2YXJpYWJsZSIsImZpbmREZXJpdmVkU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uIiwiZGVyaXZlZFN1YnN0aXR1dGlvbkNvbXBhcmVzVG9TdGF0ZW1lbnQiLCJjb21wYXJlU3RhdGVtZW50IiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUiLCJ1bmlmeVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInJlZmVyZW5jZVVuaWZpZXMiLCJyZWZlcmVuY2VTdHJpbmciLCJyZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlSZWZlcmVuY2VNZXRhdmFyaWFibGUiLCJkZXJpdmVkU3Vic3RpdHV0aW9uUmVmZXJlbmNlQ29tcGFyZXNUb1JlZmVyZW5jZSIsImNvbXBhcmVSZWZlcmVuY2UiLCJSZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJyZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJmcm9tUmVmZXJlbmNlQW5kTWV0YXZhcmlhYmxlIiwidW5pZnlNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZSIsInNwZWNpZmljTWV0YXZhcmlhYmxlIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZyIsInNwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nIiwiZ2VuZXJhbENvbnRleHRGaWxlUGF0aCIsImdldEZpbGVQYXRoIiwic3BlY2lmaWNDb250ZXh0RmlsZVBhdGgiLCJ1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkiLCJtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSIsInRvSlNPTiIsIm1ldGFUeXBlSlNPTiIsIm1ldGFUeXBlVG9NZXRhVHlwZUpTT04iLCJnZXRCcmVha1BvaW50IiwiYnJlYWtQb2ludEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlTWV0YXZhcmlhYmxlIiwibmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIiwidGVybUZyb21NZXRhdmFyaWFibGVOb2RlIiwidHlwZUZyb21NZXRhdmFyaWFibGVOb2RlIiwibWV0YVR5cGVGcm9tSlNPTiIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwibWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBQTs7O2dDQVp3QjtrRUFFSDt5QkFHTzsyQkFDQzs2QkFDVztzQkFDaUI7dUJBQ1M7eUJBQzBEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFFNUgsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxxQkFBcUJDLHVCQUFPO0lBQ3RELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsUUFBUSxDQUFFO1FBQ3pFLEtBQUssQ0FBQ1AsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxRQUFRLEdBQUdBO0lBQ2xCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0osSUFBSTtJQUNsQjtJQUVBSyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNKLElBQUk7SUFDbEI7SUFFQUssVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDSixJQUFJO0lBQ2xCO0lBRUFLLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ0osUUFBUTtJQUN0QjtJQUVBSyxZQUFZTCxRQUFRLEVBQUU7UUFDcEIsSUFBSSxDQUFDQSxRQUFRLEdBQUdBO0lBQ2xCO0lBRUFNLHNCQUFzQjtRQUNwQixNQUFNWCxPQUFPLElBQUksQ0FBQ1ksT0FBTyxJQUNuQkMsbUJBQW1CYixNQUFPLEdBQUc7UUFFbkMsT0FB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