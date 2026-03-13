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
    isMetaTypeEqualTo(metaType) {
        return this.metaType.isEqualTo(metaType);
    }
    compare(metavariable) {
        const metavariableName = metavariable.getName(), comparesToMetavariableName = this.compareMetavariableName(metavariableName), comparesToMetavariable = comparesToMetavariableName; ///
        return comparesToMetavariable;
    }
    compareMetavariableName(metavariableName) {
        const nameMetavariableName = this.name === metavariableName, comparesToMetavariableName = nameMetavariableName; ///
        return comparesToMetavariableName;
    }
    matchMetavariableNode(metavariableNode) {
        const node = metavariableNode, nodeMatches = this.matchNode(node), metavariableNodeMatches = nodeMatches; ///
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
            metavariable = this; ///
            context.debug(`...validated the '${metavariableString}' metavariable.`);
        }
        return metavariable;
    }
    validateTerm(context) {
        let termValidates = true; ///
        if (this.term !== null) {
            termValidates = false;
            const termString = this.term.getString(), metavariableString = this.getString();
            context.trace(`Validating the '${metavariableString}' metavariable's '${termString}' term...`);
            const metavariableName = this.getMetavariableName(), metavariable = context.findMetavariableByMetavariableName(metavariableName);
            let term = null;
            if (metavariable !== null) {
                const type = metavariable.getType(), metavariableString = metavariable.getString();
                if (type !== null) {
                    term = this.term.validateGivenType(type, context);
                } else {
                    context.trace(`The '${metavariableString}' metavariable does not have a type`);
                }
            } else {
                term = this.term.validate(context, (term)=>{
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
        const metavariableName = this.getMetavariableName(), metavariableString = this.getString(); ///
        context.trace(`Validating the '${metavariableString}' metavariable's '${metavariableName}' name...`);
        const metavariable = context.findMetavariableByMetavariableName(metavariableName);
        if (metavariable !== null) {
            const metaType = metavariable.getMetaType(), metaTypeSTring = metaType.getString();
            this.metaType = metaType;
            context.trace(`Setting the '${metavariableString}' metavariable's meta-type to the '${metaTypeSTring}' meta-type.`);
        }
        if (termValidates) {
            context.debug(`...validated the '${metavariableString}' metavariable's '${metavariableName}' name.`);
        }
        return termValidates;
    }
    validateType(context) {
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
    unifyFrame(frame, generalContext, specificContext) {
        let frameUnifies = false;
        const context = specificContext, frameString = frame.getString(), metavariableString = this.getString(); ///
        context.trace(`Unifying the '${frameString}' frame with the '${metavariableString}' metavariable...`);
        const frameMetavariableUnifies = this.unifyFrameMetavariable(frame, generalContext, specificContext);
        if (frameMetavariableUnifies) {
            frameUnifies = true;
        } else {
            const metavariableName = this.getMetavariableName(), simpleSubstitution = context.findSimpleSubstitutionByMetavariableName(metavariableName);
            if (simpleSubstitution !== null) {
                const substitution = simpleSubstitution, substitutionFrameComparesToFrame = substitution.compareFrame(frame, context);
                if (substitutionFrameComparesToFrame) {
                    const frameSubstitution = substitution, frameSubstitutionString = frameSubstitution.getString();
                    context.trace(`The '${frameSubstitutionString}' frame substitution is already present.`);
                    frameUnifies = true;
                }
            } else {
                const { FrameSubstitution } = _elements.default;
                let frameSubstitution;
                const metavariable = this; ///
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
        const context = specificContext, statementString = statement.getString(), metavariableString = this.getString(), substitutionString = substitution !== null ? substitution.getString() : _constants.EMPTY_STRING;
        context.trace(`Unifying the '${statementString}' statement with the '${metavariableString}${substitutionString}' metavariable...`);
        const metavariable = this, statementMetavariableUnifies = this.unifyStatementMetavariable(statement, generalContext, specificContext);
        if (statementMetavariableUnifies) {
            statementUnifies = true;
        } else {
            const metavariableName = metavariable.getName(), substitutionPresent = substitution !== null ? context.isSubstitutionPresentByMetavariableNameAndSubstitution(metavariableName, substitution) : context.isSubstitutionPresentByMetavariableName(metavariableName);
            if (substitutionPresent) {
                substitution = substitution !== null ? context.findSubstitutionByMetavariableNameAndSubstitution(metavariableName, substitution) : context.findSubstitutionByMetavariableName(metavariableName);
                const substitutionComparesToStatement = substitution.compareStatement(statement, context);
                if (substitutionComparesToStatement) {
                    const statementSubstitution = substitution, statementSubstitutionString = statementSubstitution.getString();
                    context.trace(`The '${statementSubstitutionString}' statement substitution is already present.`);
                    statementUnifies = true;
                }
            } else {
                const { StatementSubstitution } = _elements.default;
                let statementSubstitution;
                statementSubstitution = substitution !== null ? StatementSubstitution.fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context) : StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context);
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
        const context = specificContext, referenceString = reference.getString(), metavariableString = this.getString(); ///
        context.trace(`Unifying the '${referenceString}' reference with the '${metavariableString}' metavariable...`);
        const referenceMetavariableUnifies = this.unifyReferenceMetavariable(reference, generalContext, specificContext);
        if (referenceMetavariableUnifies) {
            referenceUnifies = true;
        } else {
            const metavariableName = this.getMetavariableName(), simpleSubstitutionPresent = context.isSimpleSubstitutionPresentByMetavariableName(metavariableName);
            if (simpleSubstitutionPresent) {
                const simpleSubstitution = context.findSimpleSubstitutionByMetavariableName(metavariableName), substitution = simpleSubstitution, substitutionReferenceComparesToReference = substitution.compareReference(reference, context);
                if (substitutionReferenceComparesToReference) {
                    const referenceSubstitution = substitution, referenceSubstitutionString = referenceSubstitution.getString();
                    context.trace(`The '${referenceSubstitutionString}' reference substitution is already present.`);
                    referenceUnifies = true;
                }
            } else {
                const { ReferenceSubstitution } = _elements.default;
                let referenceSubstitution;
                const metavariable = this;
                referenceSubstitution = ReferenceSubstitution.fromReferenceAndMetavariable(reference, metavariable, context);
                referenceSubstitution = referenceSubstitution.validate(generalContext, specificContext); ///
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
        const generalContext = context; ///
        context = specificContext; ///
        const generalMetavariable = this, specificMetavariable = metavariable, generalMetavariableString = generalMetavariable.getString(), specificMetavariableString = specificMetavariable.getString();
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
            const metavariableName = this.getMetavariableName(), frameMetavariableComparesToMetvariable = frame.compareMetavariableName(metavariableName);
            if (frameMetavariableComparesToMetvariable) {
                frameMetavariableUnifies = true;
            } else {
                const frameSingular = frame.isSingular();
                if (frameSingular) {
                    const frameMetavariableName = frame.getMetavariableName(), frameMetavariable = context.findMetavariableByMetavariableName(frameMetavariableName), generalMetavariable = this, specificMetavariable = frameMetavariable, metavariableUnifiesIntrinsically = (0, _unify.unifyMetavariableIntrinsically)(generalMetavariable, specificMetavariable, generalContext, specificContext);
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
        const context = specificContext, referenceString = reference.getString(), metavariableString = this.getString();
        context.trace(`Unifying the '${referenceString}' reference's metavariable with the '${metavariableString}' metavariable...`);
        const generalContextFilePath = generalContext.getFilePath(), specificContextFilePath = specificContext.getFilePath();
        if (generalContextFilePath === specificContextFilePath) {
            const metavariable = this, referenceMetavariableComparesToMetvariable = reference.compareMetavariable(metavariable);
            if (referenceMetavariableComparesToMetvariable) {
                referenceMetavariableUnifies = true;
            } else {
                const referenceMetavariable = reference.getMetavariable(), generalMetavariable = this, specificMetavariable = referenceMetavariable, metavariableUnifiesIntrinsically = (0, _unify.unifyMetavariableIntrinsically)(generalMetavariable, specificMetavariable, generalContext, specificContext);
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
        const context = specificContext, statementString = statement.getString(), metavariableString = this.getString(); ///
        context.trace(`Unifying the '${statementString}' statement's metavariable with the '${metavariableString}' metavariable...`);
        const generalContextFilePath = generalContext.getFilePath(), specificContextFilePath = specificContext.getFilePath();
        if (generalContextFilePath === specificContextFilePath) {
            const metavariable = this, statementMetavariableComparesToMetvariable = statement.compareMetavariable(metavariable);
            if (statementMetavariableComparesToMetvariable) {
                statementMetavariableUnifies = true;
            } else {
                const statementSingular = statement.isSingular();
                if (statementSingular) {
                    const statementMetavariableName = statement.getMetavariableName(), statementMetavariable = context.findMetavariableByMetavariableName(statementMetavariableName), generalMetavariable = this, specificMetavariable = statementMetavariable, metavariableUnifiesIntrinsically = (0, _unify.unifyMetavariableIntrinsically)(generalMetavariable, specificMetavariable, generalContext, specificContext);
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
        const metaTypeJSON = (0, _json.metaTypeToMetaTypeJSON)(this.metaType), metaType = metaTypeJSON, string = this.getString(), json = {
            string,
            metaType
        };
        return json;
    }
    static name = "Metavariable";
    static fromJSON(json, context) {
        const metavariable = (0, _context.instantiate)((context)=>{
            const { string } = json, metavariableNode = (0, _instantiate.instantiateMetavariable)(string, context), node = metavariableNode, name = (0, _element.nameFromMetavariableNode)(metavariableNode, context), term = (0, _element.termFromMetavariableNode)(metavariableNode, context), type = (0, _element.typeFromMetavariableNode)(metavariableNode, context), metaType = (0, _json.metaTypeFromJSON)(json, context), metavariable = new Metavariable(context, string, node, name, term, type, metaType);
            return metavariable;
        }, context);
        return metavariable;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZU1ldGF2YXJpYWJsZSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBtZXRhVHlwZUZyb21KU09OLCBtZXRhVHlwZVRvTWV0YVR5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyB1bmlmeU1ldGF2YXJpYWJsZSwgdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IG5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSwgdGVybUZyb21NZXRhdmFyaWFibGVOb2RlLCB0eXBlRnJvbU1ldGF2YXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE1ldGF2YXJpYWJsZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHRlcm0sIHR5cGUsIG1ldGFUeXBlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcbiAgICBcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm1ldGFUeXBlID0gbWV0YVR5cGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRNZXRhVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhVHlwZTtcbiAgfVxuXG4gIHNldE1ldGFUeXBlKG1ldGFUeXBlKSB7XG4gICAgdGhpcy5tZXRhVHlwZSA9IG1ldGFUeXBlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBpc01ldGFUeXBlRXF1YWxUbyhtZXRhVHlwZSkgeyByZXR1cm4gdGhpcy5tZXRhVHlwZS5pc0VxdWFsVG8obWV0YVR5cGUpOyB9XG5cbiAgY29tcGFyZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgY29tcGFyZXNUb01ldGF2YXJpYWJsZSA9IGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb01ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lTWV0YXZhcmlhYmxlTmFtZSA9ICh0aGlzLm5hbWUgPT09IG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gbmFtZU1ldGF2YXJpYWJsZU5hbWU7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBub2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVRlcm0oY29udGV4dCk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCB0eXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVR5cGUoY29udGV4dCk7XG5cbiAgICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlUZXJtKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZlcmlmaWVzID0gdHJ1ZTsgIC8vL1xuXG4gICAgaWYgKHRoaXMudGVybSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHRlcm1WZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBBICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGlzIHByZXNlbnQgaW4gdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VHlwZShjb250ZXh0KSB7XG4gICAgbGV0IHR5cGVWZXJpZmllcyA9IHRydWU7ICAvLy9cblxuICAgIGlmICh0aGlzLnR5cGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSdzICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcblxuICAgICAgICBjb250ZXh0LmVycm9yKGBUeXBlICcke3R5cGVOYW1lfScgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWRzIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVHlwZShjb250ZXh0KTtcblxuICAgIGlmICh0eXBlVmFsaWRhdGVzKSB7XG4gICAgICBjb25zdCB0ZXJtVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRlcm0oY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IG5hbWVWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlTmFtZShjb250ZXh0KTtcblxuICAgICAgICBpZiAobmFtZVZhbGlkYXRlcykge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBtZXRhdmFyaWFibGUgPSB0aGlzOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICB2YWxpZGF0ZVRlcm0oY29udGV4dCkge1xuICAgIGxldCB0ZXJtVmFsaWRhdGVzID0gdHJ1ZTsgLy8vXG5cbiAgICBpZiAodGhpcy50ZXJtICE9PSBudWxsKSB7XG4gICAgICB0ZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGxldCB0ZXJtID0gbnVsbDtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0eXBlID0gbWV0YXZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICAgICAgdGVybSA9IHRoaXMudGVybS52YWxpZGF0ZUdpdmVuVHlwZSh0eXBlLCBjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGRvZXMgbm90IGhhdmUgYSB0eXBlYCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRlcm0gPSB0aGlzLnRlcm0udmFsaWRhdGUoY29udGV4dCwgKHRlcm0pID0+IHtcbiAgICAgICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuXG4gICAgICAgIHRlcm1WYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSdzICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVOYW1lKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZhbGlkYXRlcyA9IHRydWU7IC8vL1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgJyR7bWV0YXZhcmlhYmxlTmFtZX0nIG5hbWUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFUeXBlID0gbWV0YXZhcmlhYmxlLmdldE1ldGFUeXBlKCksXG4gICAgICAgICAgICBtZXRhVHlwZVNUcmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgICB0aGlzLm1ldGFUeXBlID0gbWV0YVR5cGU7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFNldHRpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSdzIG1ldGEtdHlwZSB0byB0aGUgJyR7bWV0YVR5cGVTVHJpbmd9JyBtZXRhLXR5cGUuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgJyR7bWV0YXZhcmlhYmxlTmFtZX0nIG5hbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVR5cGUoY29udGV4dCkge1xuICAgIGxldCB0eXBlVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nICB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgdHlwZS4uLmApO1xuXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYEEgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlc2VudCBpbiB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIGlmICh0eXBlVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi52YWxpZGF0ZWQgIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmFsaWRhdGVzO1xuICB9XG5cbiAgdW5pZnlGcmFtZShmcmFtZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBmcmFtZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBmcmFtZVN0cmluZyA9IGZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0aGlzLnVuaWZ5RnJhbWVNZXRhdmFyaWFibGUoZnJhbWUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgZnJhbWVVbmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAoc2ltcGxlU3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHNpbXBsZVN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgICAgICBzdWJzdGl0dXRpb25GcmFtZUNvbXBhcmVzVG9GcmFtZSA9IHN1YnN0aXR1dGlvbi5jb21wYXJlRnJhbWUoZnJhbWUsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25GcmFtZUNvbXBhcmVzVG9GcmFtZSkge1xuICAgICAgICAgIGNvbnN0IGZyYW1lU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvblN0cmluZyA9IGZyYW1lU3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3Vic3RpdHV0aW9uIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcblxuICAgICAgICAgIGZyYW1lVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHsgRnJhbWVTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzO1xuXG4gICAgICAgIGxldCBmcmFtZVN1YnN0aXR1dGlvbjtcblxuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBGcmFtZVN1YnN0aXR1dGlvbi5mcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUoZnJhbWUsIG1ldGF2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBmcmFtZVN1YnN0aXR1dGlvbi52YWxpZGF0ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoZnJhbWVTdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICBmcmFtZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYW1lVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkc7XG5cblxuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JHtzdWJzdGl0dXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0aGlzLnVuaWZ5U3RhdGVtZW50TWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uUHJlc2VudCA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5hbWUsIHN1YnN0aXR1dGlvbikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblByZXNlbnQpIHtcbiAgICAgICAgc3Vic3RpdHV0aW9uID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOYW1lLCBzdWJzdGl0dXRpb24pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25Db21wYXJlc1RvU3RhdGVtZW50ID0gc3Vic3RpdHV0aW9uLmNvbXBhcmVTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uQ29tcGFyZXNUb1N0YXRlbWVudCkge1xuICAgICAgICAgIGNvbnN0IHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbiwgLy9cbiAgICAgICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbiBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG5cbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzO1xuXG4gICAgICAgIGxldCBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG5cbiAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXRlbWVudFN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGNvbnRleHQpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXRlbWVudFN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbi5nZXRTdWJzdGl0dXRpb24oKTtcblxuICAgICAgICAgIHN1YnN0aXR1dGlvbi5zZXRDb250ZXh0KGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uLnZhbGlkYXRlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRTdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfSR7c3Vic3RpdHV0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlSZWZlcmVuY2UocmVmZXJlbmNlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlSZWZlcmVuY2VNZXRhdmFyaWFibGUocmVmZXJlbmNlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChyZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICByZWZlcmVuY2VVbmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCA9IGNvbnRleHQuaXNTaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAoc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCkge1xuICAgICAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHNpbXBsZVN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgICAgICBzdWJzdGl0dXRpb25SZWZlcmVuY2VDb21wYXJlc1RvUmVmZXJlbmNlID0gc3Vic3RpdHV0aW9uLmNvbXBhcmVSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uUmVmZXJlbmNlQ29tcGFyZXNUb1JlZmVyZW5jZSkge1xuICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3JlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ30nIHJlZmVyZW5jZSBzdWJzdGl0dXRpb24gaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuXG4gICAgICAgICAgcmVmZXJlbmNlVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHsgUmVmZXJlbmNlU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cztcblxuICAgICAgICBsZXQgcmVmZXJlbmNlU3Vic3RpdHV0aW9uO1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXM7XG5cbiAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uID0gUmVmZXJlbmNlU3Vic3RpdHV0aW9uLmZyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUocmVmZXJlbmNlLCBtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbi52YWxpZGF0ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTsgIC8vL1xuXG4gICAgICAgIGlmIChyZWZlcmVuY2VTdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICByZWZlcmVuY2VVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWZlcmVuY2VVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2Ugd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVVuaWZpZXM7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgY29uc3QgZ2VuZXJhbE1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlLCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZyA9IGdlbmVyYWxNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmcgPSBzcGVjaWZpY01ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBtZXRhdmFyaWFibGVVbmlmaWVzID0gdW5pZnlNZXRhdmFyaWFibGUoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke2dlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeUZyYW1lTWV0YXZhcmlhYmxlKGZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dEZpbGVQYXRoID0gZ2VuZXJhbENvbnRleHQuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCA9IHNwZWNpZmljQ29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgaWYgKGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPT09IHNwZWNpZmljQ29udGV4dEZpbGVQYXRoKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCksICAvLy9cbiAgICAgICAgICAgIGZyYW1lTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldHZhcmlhYmxlID0gZnJhbWUuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmIChmcmFtZU1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXR2YXJpYWJsZSkge1xuICAgICAgICBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZnJhbWVTaW5ndWxhciA9IGZyYW1lLmlzU2luZ3VsYXIoKTtcblxuICAgICAgICBpZiAoZnJhbWVTaW5ndWxhcikge1xuICAgICAgICAgIGNvbnN0IGZyYW1lTWV0YXZhcmlhYmxlTmFtZSA9IGZyYW1lLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICAgICAgICBmcmFtZU1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShmcmFtZU1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgICAgICAgIGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZSA9IGZyYW1lTWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseTsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlSZWZlcmVuY2VNZXRhdmFyaWFibGUocmVmZXJlbmNlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UncyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dEZpbGVQYXRoID0gZ2VuZXJhbENvbnRleHQuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCA9IHNwZWNpZmljQ29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgaWYgKGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPT09IHNwZWNpZmljQ29udGV4dEZpbGVQYXRoKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0dmFyaWFibGUgPSByZWZlcmVuY2UuY29tcGFyZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldHZhcmlhYmxlKSB7XG4gICAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlTWV0YXZhcmlhYmxlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlID0gcmVmZXJlbmNlTWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseTsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSdzIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50J3MgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9IGdlbmVyYWxDb250ZXh0LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0RmlsZVBhdGggPSBzcGVjaWZpY0NvbnRleHQuZ2V0RmlsZVBhdGgoKTtcblxuICAgIGlmIChnZW5lcmFsQ29udGV4dEZpbGVQYXRoID09PSBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldHZhcmlhYmxlID0gc3RhdGVtZW50LmNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgaWYgKHN0YXRlbWVudE1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXR2YXJpYWJsZSkge1xuICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudFNpbmd1bGFyID0gc3RhdGVtZW50LmlzU2luZ3VsYXIoKTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50U2luZ3VsYXIpIHtcbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOYW1lID0gc3RhdGVtZW50LmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUoc3RhdGVtZW50TWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgICAgICAgZ2VuZXJhbE1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlID0gc3RhdGVtZW50TWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzID0gbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHk7IC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCdzIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbWV0YVR5cGVKU09OID0gbWV0YVR5cGVUb01ldGFUeXBlSlNPTih0aGlzLm1ldGFUeXBlKSxcbiAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlSlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBtZXRhVHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJNZXRhdmFyaWFibGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBpbnN0YW50aWF0ZU1ldGF2YXJpYWJsZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICB0ZXJtID0gdGVybUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgdHlwZSA9IHR5cGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCB0ZXJtLCB0eXBlLCBtZXRhVHlwZSk7XG5cbiAgICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJNZXRhdmFyaWFibGUiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwidGVybSIsInR5cGUiLCJtZXRhVHlwZSIsImdldE5hbWUiLCJnZXRUZXJtIiwiZ2V0VHlwZSIsImdldE1ldGFUeXBlIiwic2V0TWV0YVR5cGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZ2V0Tm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImlzTWV0YVR5cGVFcXVhbFRvIiwiaXNFcXVhbFRvIiwiY29tcGFyZSIsIm1ldGF2YXJpYWJsZSIsImNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJjb21wYXJlc1RvTWV0YXZhcmlhYmxlIiwibmFtZU1ldGF2YXJpYWJsZU5hbWUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInRlcm1WZXJpZmllcyIsInZlcmlmeVRlcm0iLCJ0eXBlVmVyaWZpZXMiLCJ2ZXJpZnlUeXBlIiwiZGVidWciLCJ0ZXJtU3RyaW5nIiwidHlwZVN0cmluZyIsInR5cGVOYW1lIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwiZXJyb3IiLCJ2YWxpZGF0ZSIsInZhbGlkYXRlcyIsInR5cGVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVR5cGUiLCJ0ZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVUZXJtIiwibmFtZVZhbGlkYXRlcyIsInZhbGlkYXRlTmFtZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJ2YWxpZGF0ZUdpdmVuVHlwZSIsInZhbGlkYXRlc0ZvcndhcmRzIiwibWV0YVR5cGVTVHJpbmciLCJ1bmlmeUZyYW1lIiwiZnJhbWUiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsImZyYW1lVW5pZmllcyIsImZyYW1lU3RyaW5nIiwiZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlGcmFtZU1ldGF2YXJpYWJsZSIsInNpbXBsZVN1YnN0aXR1dGlvbiIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUiLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25GcmFtZUNvbXBhcmVzVG9GcmFtZSIsImNvbXBhcmVGcmFtZSIsImZyYW1lU3Vic3RpdHV0aW9uIiwiZnJhbWVTdWJzdGl0dXRpb25TdHJpbmciLCJGcmFtZVN1YnN0aXR1dGlvbiIsImVsZW1lbnRzIiwiZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwic3RhdGVtZW50U3RyaW5nIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcyIsInVuaWZ5U3RhdGVtZW50TWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uUHJlc2VudCIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbiIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lIiwic3Vic3RpdHV0aW9uQ29tcGFyZXNUb1N0YXRlbWVudCIsImNvbXBhcmVTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmciLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsImdldFN1YnN0aXR1dGlvbiIsInNldENvbnRleHQiLCJ1bmlmeVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInJlZmVyZW5jZVVuaWZpZXMiLCJyZWZlcmVuY2VTdHJpbmciLCJyZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlSZWZlcmVuY2VNZXRhdmFyaWFibGUiLCJzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50IiwiaXNTaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwic3Vic3RpdHV0aW9uUmVmZXJlbmNlQ29tcGFyZXNUb1JlZmVyZW5jZSIsImNvbXBhcmVSZWZlcmVuY2UiLCJyZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJyZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmciLCJSZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJmcm9tUmVmZXJlbmNlQW5kTWV0YXZhcmlhYmxlIiwidW5pZnlNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzIiwiZ2V0Q29udGV4dCIsImdlbmVyYWxNZXRhdmFyaWFibGUiLCJzcGVjaWZpY01ldGF2YXJpYWJsZSIsImdlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmciLCJzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZyIsImdlbmVyYWxDb250ZXh0RmlsZVBhdGgiLCJnZXRGaWxlUGF0aCIsInNwZWNpZmljQ29udGV4dEZpbGVQYXRoIiwiZnJhbWVNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0dmFyaWFibGUiLCJmcmFtZVNpbmd1bGFyIiwiaXNTaW5ndWxhciIsImZyYW1lTWV0YXZhcmlhYmxlTmFtZSIsImZyYW1lTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkiLCJ1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkiLCJyZWZlcmVuY2VNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0dmFyaWFibGUiLCJjb21wYXJlTWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldHZhcmlhYmxlIiwic3RhdGVtZW50U2luZ3VsYXIiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOYW1lIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlIiwidG9KU09OIiwibWV0YVR5cGVKU09OIiwibWV0YVR5cGVUb01ldGFUeXBlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVNZXRhdmFyaWFibGUiLCJuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJ0ZXJtRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJ0eXBlRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhVHlwZUZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFjQTs7O2VBQUE7OztnQ0Fad0I7a0VBRUg7eUJBR087MkJBQ0M7NkJBQ1c7c0JBQ2lCO3VCQUNTO3lCQUMyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BRTdGLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMscUJBQXFCQyx1QkFBTztJQUN0RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxRQUFRLENBQUU7UUFDN0QsS0FBSyxDQUFDTixTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFFBQVEsR0FBR0E7SUFDbEI7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDSixJQUFJO0lBQ2xCO0lBRUFLLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0osSUFBSTtJQUNsQjtJQUVBSyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNKLElBQUk7SUFDbEI7SUFFQUssY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDSixRQUFRO0lBQ3RCO0lBRUFLLFlBQVlMLFFBQVEsRUFBRTtRQUNwQixJQUFJLENBQUNBLFFBQVEsR0FBR0E7SUFD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