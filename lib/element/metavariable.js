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
                const { FrameSubstitution } = _elements.default, metavariable = this, frameSubstitution = FrameSubstitution.fromFrameAndMetavariable(frame, metavariable, context);
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
                const { StatementSubstitution } = _elements.default, statementSubstitution = substitution !== null ? StatementSubstitution.fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context) : StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context);
                if (substitution !== null) {
                    const context = generalContext; ///
                    substitution = statementSubstitution.getSubstitution();
                    substitution.setContext(context);
                }
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
                const { ReferenceSubstitution } = _elements.default, metavariable = this, referenceSubstitution = ReferenceSubstitution.fromReferenceAndMetavariable(reference, metavariable, context);
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
        return (0, _context.instantiate)((context)=>{
            const { string } = json, metavariableNode = (0, _instantiate.instantiateMetavariable)(string, context), node = metavariableNode, name = (0, _element.nameFromMetavariableNode)(metavariableNode, context), term = (0, _element.termFromMetavariableNode)(metavariableNode, context), type = (0, _element.typeFromMetavariableNode)(metavariableNode, context), metaType = (0, _json.metaTypeFromJSON)(json, context), metavariable = new Metavariable(context, string, node, name, term, type, metaType);
            return metavariable;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZU1ldGF2YXJpYWJsZSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBtZXRhVHlwZUZyb21KU09OLCBtZXRhVHlwZVRvTWV0YVR5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyB1bmlmeU1ldGF2YXJpYWJsZSwgdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IG5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSwgdGVybUZyb21NZXRhdmFyaWFibGVOb2RlLCB0eXBlRnJvbU1ldGF2YXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE1ldGF2YXJpYWJsZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHRlcm0sIHR5cGUsIG1ldGFUeXBlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcbiAgICBcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm1ldGFUeXBlID0gbWV0YVR5cGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRNZXRhVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhVHlwZTtcbiAgfVxuXG4gIHNldE1ldGFUeXBlKG1ldGFUeXBlKSB7XG4gICAgdGhpcy5tZXRhVHlwZSA9IG1ldGFUeXBlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBpc01ldGFUeXBlRXF1YWxUbyhtZXRhVHlwZSkgeyByZXR1cm4gdGhpcy5tZXRhVHlwZS5pc0VxdWFsVG8obWV0YVR5cGUpOyB9XG5cbiAgY29tcGFyZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgY29tcGFyZXNUb01ldGF2YXJpYWJsZSA9IGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb01ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lTWV0YXZhcmlhYmxlTmFtZSA9ICh0aGlzLm5hbWUgPT09IG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gbmFtZU1ldGF2YXJpYWJsZU5hbWU7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBub2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVRlcm0oY29udGV4dCk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCB0eXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVR5cGUoY29udGV4dCk7XG5cbiAgICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlUZXJtKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZlcmlmaWVzID0gdHJ1ZTsgIC8vL1xuXG4gICAgaWYgKHRoaXMudGVybSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHRlcm1WZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBBICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGlzIHByZXNlbnQgaW4gdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VHlwZShjb250ZXh0KSB7XG4gICAgbGV0IHR5cGVWZXJpZmllcyA9IHRydWU7ICAvLy9cblxuICAgIGlmICh0aGlzLnR5cGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSdzICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcblxuICAgICAgICBjb250ZXh0LmVycm9yKGBUeXBlICcke3R5cGVOYW1lfScgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWRzIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVHlwZShjb250ZXh0KTtcblxuICAgIGlmICh0eXBlVmFsaWRhdGVzKSB7XG4gICAgICBjb25zdCB0ZXJtVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRlcm0oY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IG5hbWVWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlTmFtZShjb250ZXh0KTtcblxuICAgICAgICBpZiAobmFtZVZhbGlkYXRlcykge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBtZXRhdmFyaWFibGUgPSB0aGlzOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICB2YWxpZGF0ZVRlcm0oY29udGV4dCkge1xuICAgIGxldCB0ZXJtVmFsaWRhdGVzID0gdHJ1ZTsgLy8vXG5cbiAgICBpZiAodGhpcy50ZXJtICE9PSBudWxsKSB7XG4gICAgICB0ZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGxldCB0ZXJtID0gbnVsbDtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0eXBlID0gbWV0YXZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICAgICAgdGVybSA9IHRoaXMudGVybS52YWxpZGF0ZUdpdmVuVHlwZSh0eXBlLCBjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGRvZXMgbm90IGhhdmUgYSB0eXBlYCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRlcm0gPSB0aGlzLnRlcm0udmFsaWRhdGUoY29udGV4dCwgKHRlcm0pID0+IHtcbiAgICAgICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuXG4gICAgICAgIHRlcm1WYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSdzICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVOYW1lKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZhbGlkYXRlcyA9IHRydWU7IC8vL1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgJyR7bWV0YXZhcmlhYmxlTmFtZX0nIG5hbWUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFUeXBlID0gbWV0YXZhcmlhYmxlLmdldE1ldGFUeXBlKCksXG4gICAgICAgICAgICBtZXRhVHlwZVNUcmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgICB0aGlzLm1ldGFUeXBlID0gbWV0YVR5cGU7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFNldHRpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSdzIG1ldGEtdHlwZSB0byB0aGUgJyR7bWV0YVR5cGVTVHJpbmd9JyBtZXRhLXR5cGUuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgJyR7bWV0YXZhcmlhYmxlTmFtZX0nIG5hbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVR5cGUoY29udGV4dCkge1xuICAgIGxldCB0eXBlVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nICB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgdHlwZS4uLmApO1xuXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYEEgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlc2VudCBpbiB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIGlmICh0eXBlVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi52YWxpZGF0ZWQgIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmFsaWRhdGVzO1xuICB9XG5cbiAgdW5pZnlGcmFtZShmcmFtZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBmcmFtZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBmcmFtZVN0cmluZyA9IGZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0aGlzLnVuaWZ5RnJhbWVNZXRhdmFyaWFibGUoZnJhbWUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgZnJhbWVVbmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAoc2ltcGxlU3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHNpbXBsZVN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgICAgICBzdWJzdGl0dXRpb25GcmFtZUNvbXBhcmVzVG9GcmFtZSA9IHN1YnN0aXR1dGlvbi5jb21wYXJlRnJhbWUoZnJhbWUsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25GcmFtZUNvbXBhcmVzVG9GcmFtZSkge1xuICAgICAgICAgIGNvbnN0IGZyYW1lU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvblN0cmluZyA9IGZyYW1lU3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3Vic3RpdHV0aW9uIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcblxuICAgICAgICAgIGZyYW1lVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHsgRnJhbWVTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gRnJhbWVTdWJzdGl0dXRpb24uZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uLnZhbGlkYXRlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGZyYW1lVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYW1lVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkc7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30ke3N1YnN0aXR1dGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25QcmVzZW50ID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5pc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTmFtZSwgc3Vic3RpdHV0aW9uKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uUHJlc2VudCkge1xuICAgICAgICBzdWJzdGl0dXRpb24gPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5hbWUsIHN1YnN0aXR1dGlvbikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkNvbXBhcmVzVG9TdGF0ZW1lbnQgPSBzdWJzdGl0dXRpb24uY29tcGFyZVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25Db21wYXJlc1RvU3RhdGVtZW50KSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLCAvL1xuICAgICAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcblxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB7IFN0YXRlbWVudFN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGF0ZW1lbnRTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uLCBjb250ZXh0KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGF0ZW1lbnRTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb24uZ2V0U3Vic3RpdHV0aW9uKCk7XG5cbiAgICAgICAgICBzdWJzdGl0dXRpb24uc2V0Q29udGV4dChjb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbi52YWxpZGF0ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30ke3N1YnN0aXR1dGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0aGlzLnVuaWZ5UmVmZXJlbmNlTWV0YXZhcmlhYmxlKHJlZmVyZW5jZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAocmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgcmVmZXJlbmNlVW5pZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQgPSBjb250ZXh0LmlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQpIHtcbiAgICAgICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzaW1wbGVTdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uUmVmZXJlbmNlQ29tcGFyZXNUb1JlZmVyZW5jZSA9IHN1YnN0aXR1dGlvbi5jb21wYXJlUmVmZXJlbmNlKHJlZmVyZW5jZSwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvblJlZmVyZW5jZUNvbXBhcmVzVG9SZWZlcmVuY2UpIHtcbiAgICAgICAgICBjb25zdCByZWZlcmVuY2VTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZyA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtyZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmd9JyByZWZlcmVuY2Ugc3Vic3RpdHV0aW9uIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcblxuICAgICAgICAgIHJlZmVyZW5jZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB7IFJlZmVyZW5jZVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uID0gUmVmZXJlbmNlU3Vic3RpdHV0aW9uLmZyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUocmVmZXJlbmNlLCBtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbi52YWxpZGF0ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICByZWZlcmVuY2VVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVmZXJlbmNlVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVVbmlmaWVzO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZSwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmcgPSBnZW5lcmFsTWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nID0gc3BlY2lmaWNNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7Z2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgbWV0YXZhcmlhYmxlVW5pZmllcyA9IHVuaWZ5TWV0YXZhcmlhYmxlKGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlGcmFtZU1ldGF2YXJpYWJsZShmcmFtZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBmcmFtZVN0cmluZyA9IGZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9IGdlbmVyYWxDb250ZXh0LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0RmlsZVBhdGggPSBzcGVjaWZpY0NvbnRleHQuZ2V0RmlsZVBhdGgoKTtcblxuICAgIGlmIChnZW5lcmFsQ29udGV4dEZpbGVQYXRoID09PSBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLCAgLy8vXG4gICAgICAgICAgICBmcmFtZU1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXR2YXJpYWJsZSA9IGZyYW1lLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAoZnJhbWVNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0dmFyaWFibGUpIHtcbiAgICAgICAgZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZyYW1lU2luZ3VsYXIgPSBmcmFtZS5pc1Npbmd1bGFyKCk7XG5cbiAgICAgICAgaWYgKGZyYW1lU2luZ3VsYXIpIHtcbiAgICAgICAgICBjb25zdCBmcmFtZU1ldGF2YXJpYWJsZU5hbWUgPSBmcmFtZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgICAgICAgZnJhbWVNZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUoZnJhbWVNZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSBmcmFtZU1ldGF2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzID0gbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHk7IC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5UmVmZXJlbmNlTWV0YXZhcmlhYmxlKHJlZmVyZW5jZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlJ3MgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9IGdlbmVyYWxDb250ZXh0LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0RmlsZVBhdGggPSBzcGVjaWZpY0NvbnRleHQuZ2V0RmlsZVBhdGgoKTtcblxuICAgIGlmIChnZW5lcmFsQ29udGV4dEZpbGVQYXRoID09PSBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgcmVmZXJlbmNlTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldHZhcmlhYmxlID0gcmVmZXJlbmNlLmNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgaWYgKHJlZmVyZW5jZU1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXR2YXJpYWJsZSkge1xuICAgICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZU1ldGF2YXJpYWJsZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgICAgZ2VuZXJhbE1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZSA9IHJlZmVyZW5jZU1ldGF2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzID0gbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHk7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UncyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCdzIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPSBnZW5lcmFsQ29udGV4dC5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dEZpbGVQYXRoID0gc3BlY2lmaWNDb250ZXh0LmdldEZpbGVQYXRoKCk7XG5cbiAgICBpZiAoZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9PT0gc3BlY2lmaWNDb250ZXh0RmlsZVBhdGgpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXR2YXJpYWJsZSA9IHN0YXRlbWVudC5jb21wYXJlTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0dmFyaWFibGUpIHtcbiAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnRTaW5ndWxhciA9IHN0YXRlbWVudC5pc1Npbmd1bGFyKCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFNpbmd1bGFyKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVtZW50TWV0YXZhcmlhYmxlTmFtZSA9IHN0YXRlbWVudC5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKHN0YXRlbWVudE1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgICAgICAgIGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZSA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcyA9IG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5OyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQncyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1ldGFUeXBlSlNPTiA9IG1ldGFUeXBlVG9NZXRhVHlwZUpTT04odGhpcy5tZXRhVHlwZSksXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUpTT04sICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbWV0YVR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTWV0YXZhcmlhYmxlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGluc3RhbnRpYXRlTWV0YXZhcmlhYmxlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgbmFtZSA9IG5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICB0eXBlID0gdHlwZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHRlcm0sIHR5cGUsIG1ldGFUeXBlKTtcblxuICAgICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTWV0YXZhcmlhYmxlIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibmFtZSIsInRlcm0iLCJ0eXBlIiwibWV0YVR5cGUiLCJnZXROYW1lIiwiZ2V0VGVybSIsImdldFR5cGUiLCJnZXRNZXRhVHlwZSIsInNldE1ldGFUeXBlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImdldE5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJpc01ldGFUeXBlRXF1YWxUbyIsImlzRXF1YWxUbyIsImNvbXBhcmUiLCJtZXRhdmFyaWFibGUiLCJjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZXNUb01ldGF2YXJpYWJsZSIsIm5hbWVNZXRhdmFyaWFibGVOYW1lIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsInZlcmlmeSIsInZlcmlmaWVzIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0ZXJtVmVyaWZpZXMiLCJ2ZXJpZnlUZXJtIiwidHlwZVZlcmlmaWVzIiwidmVyaWZ5VHlwZSIsImRlYnVnIiwidGVybVN0cmluZyIsInR5cGVTdHJpbmciLCJ0eXBlTmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsImVycm9yIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZXMiLCJ0eXBlVmFsaWRhdGVzIiwidmFsaWRhdGVUeXBlIiwidGVybVZhbGlkYXRlcyIsInZhbGlkYXRlVGVybSIsIm5hbWVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZU5hbWUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwidmFsaWRhdGVHaXZlblR5cGUiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsIm1ldGFUeXBlU1RyaW5nIiwidW5pZnlGcmFtZSIsImZyYW1lIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJmcmFtZVVuaWZpZXMiLCJmcmFtZVN0cmluZyIsImZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcyIsInVuaWZ5RnJhbWVNZXRhdmFyaWFibGUiLCJzaW1wbGVTdWJzdGl0dXRpb24iLCJmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lIiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uRnJhbWVDb21wYXJlc1RvRnJhbWUiLCJjb21wYXJlRnJhbWUiLCJmcmFtZVN1YnN0aXR1dGlvbiIsImZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nIiwiRnJhbWVTdWJzdGl0dXRpb24iLCJlbGVtZW50cyIsImZyb21GcmFtZUFuZE1ldGF2YXJpYWJsZSIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllcyIsInN0YXRlbWVudFN0cmluZyIsInN1YnN0aXR1dGlvblN0cmluZyIsIkVNUFRZX1NUUklORyIsInN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudE1ldGF2YXJpYWJsZSIsInN1YnN0aXR1dGlvblByZXNlbnQiLCJpc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb24iLCJpc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZSIsInN1YnN0aXR1dGlvbkNvbXBhcmVzVG9TdGF0ZW1lbnQiLCJjb21wYXJlU3RhdGVtZW50Iiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nIiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUiLCJnZXRTdWJzdGl0dXRpb24iLCJzZXRDb250ZXh0IiwidW5pZnlSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJyZWZlcmVuY2VVbmlmaWVzIiwicmVmZXJlbmNlU3RyaW5nIiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyIsInVuaWZ5UmVmZXJlbmNlTWV0YXZhcmlhYmxlIiwic2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCIsImlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsInN1YnN0aXR1dGlvblJlZmVyZW5jZUNvbXBhcmVzVG9SZWZlcmVuY2UiLCJjb21wYXJlUmVmZXJlbmNlIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nIiwiUmVmZXJlbmNlU3Vic3RpdHV0aW9uIiwiZnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZSIsInVuaWZ5TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlVW5pZmllcyIsImdldENvbnRleHQiLCJnZW5lcmFsTWV0YXZhcmlhYmxlIiwic3BlY2lmaWNNZXRhdmFyaWFibGUiLCJnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nIiwic3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmciLCJnZW5lcmFsQ29udGV4dEZpbGVQYXRoIiwiZ2V0RmlsZVBhdGgiLCJzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCIsImZyYW1lTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldHZhcmlhYmxlIiwiZnJhbWVTaW5ndWxhciIsImlzU2luZ3VsYXIiLCJmcmFtZU1ldGF2YXJpYWJsZU5hbWUiLCJmcmFtZU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5IiwidW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldHZhcmlhYmxlIiwiY29tcGFyZU1ldGF2YXJpYWJsZSIsInJlZmVyZW5jZU1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXR2YXJpYWJsZSIsInN0YXRlbWVudFNpbmd1bGFyIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTmFtZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZSIsInRvSlNPTiIsIm1ldGFUeXBlSlNPTiIsIm1ldGFUeXBlVG9NZXRhVHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlTWV0YXZhcmlhYmxlIiwibmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIiwidGVybUZyb21NZXRhdmFyaWFibGVOb2RlIiwidHlwZUZyb21NZXRhdmFyaWFibGVOb2RlIiwibWV0YVR5cGVGcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUFBOzs7Z0NBWndCO2tFQUVIO3lCQUdPOzJCQUNDOzZCQUNXO3NCQUNpQjt1QkFDUzt5QkFDMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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