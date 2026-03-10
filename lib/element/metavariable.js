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
            const typeName = this.type.getName(), typePresent = context.isTypePresentByTypeName(typeName);
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
        const termValidates = this.validateTerm(context);
        if (termValidates) {
            const typeValidates = this.validateType(context);
            if (typeValidates) {
                let metavariable;
                metavariable = this; ///
                metavariable = context.findMetavariable(metavariable, context); ///
                if (metavariable !== null) {
                    const metaType = metavariable.getMetaType();
                    this.metaType = metaType;
                }
                validates = true;
            }
        }
        if (validates) {
            metavariable = this; ///
            context.debug(`...validated the '${metavariableString}' metavariable.`);
        }
        return metavariable;
    }
    validateTerm(context) {
        let termValidates = true;
        if (this.term !== null) {
            const termString = this.term.getString(), metavariableString = this.getString();
            context.trace(`Validating the '${metavariableString}' metavariable's '${termString}' term...`);
            termValidates = this.term.validate(context, ()=>{
                const validatesForwards = true;
                return validatesForwards;
            });
            if (termValidates) {
                context.debug(`...validated the '${metavariableString}' metavariable's '${termString}' term.`);
            }
        }
        return termValidates;
    }
    validateType(context) {
        let typeValidates = true; ///
        if (this.type !== null) {
            const typeString = this.type.getString(), metavariableString = this.getString();
            typeValidates = false;
            context.trace(`A '${typeString}' type is present in the '${metavariableString}' metavariable.`);
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
        const metavariable = (0, _context.literally)((context)=>{
            const { string } = json, metavariableNode = (0, _instantiate.instantiateMetavariable)(string, context), node = metavariableNode, name = (0, _element.nameFromMetavariableNode)(metavariableNode, context), term = (0, _element.termFromMetavariableNode)(metavariableNode, context), type = (0, _element.typeFromMetavariableNode)(metavariableNode, context), metaType = (0, _json.metaTypeFromJSON)(json, context), metavariable = new Metavariable(context, string, node, name, term, type, metaType);
            return metavariable;
        }, context);
        return metavariable;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGxpdGVyYWxseSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVNZXRhdmFyaWFibGUgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgbWV0YVR5cGVGcm9tSlNPTiwgbWV0YVR5cGVUb01ldGFUeXBlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgdW5pZnlNZXRhdmFyaWFibGUsIHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseSB9IGZyb20gXCIuLi9wcm9jZXNzL3VuaWZ5XCI7XG5pbXBvcnQgeyBuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUsIHRlcm1Gcm9tTWV0YXZhcmlhYmxlTm9kZSwgdHlwZUZyb21NZXRhdmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBNZXRhdmFyaWFibGUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCB0ZXJtLCB0eXBlLCBtZXRhVHlwZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG4gICAgXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5tZXRhVHlwZSA9IG1ldGFUeXBlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YVR5cGU7XG4gIH1cblxuICBzZXRNZXRhVHlwZShtZXRhVHlwZSkge1xuICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgaXNNZXRhVHlwZUVxdWFsVG8obWV0YVR5cGUpIHsgcmV0dXJuIHRoaXMubWV0YVR5cGUuaXNFcXVhbFRvKG1ldGFUeXBlKTsgfVxuXG4gIGNvbXBhcmUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIGNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9NZXRhdmFyaWFibGU7XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZU1ldGF2YXJpYWJsZU5hbWUgPSAodGhpcy5uYW1lID09PSBtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IG5hbWVNZXRhdmFyaWFibGVOYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgdGVybVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUZXJtKGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllcykge1xuICAgICAgY29uc3QgdHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUeXBlKGNvbnRleHQpO1xuXG4gICAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VGVybShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1WZXJpZmllcyA9IHRydWU7ICAvLy9cblxuICAgIGlmICh0aGlzLnRlcm0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgICB0ZXJtVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgICAgY29udGV4dC50cmFjZShgQSAnJHt0ZXJtU3RyaW5nfScgdGVybSBpcyBwcmVzZW50IGluIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVR5cGUoY29udGV4dCkge1xuICAgIGxldCB0eXBlVmVyaWZpZXMgPSB0cnVlOyAgLy8vXG5cbiAgICBpZiAodGhpcy50eXBlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgICAgIHR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnRleHQuZXJyb3IoYFR5cGUgJyR7dHlwZU5hbWV9JyBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZHMgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSdzICcke3R5cGVTdHJpbmd9JyB0eXBlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZXM7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUZXJtKGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnN0IHR5cGVWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVHlwZShjb250ZXh0KTtcblxuICAgICAgaWYgKHR5cGVWYWxpZGF0ZXMpIHtcbiAgICAgICAgbGV0IG1ldGF2YXJpYWJsZTtcblxuICAgICAgICBtZXRhdmFyaWFibGUgPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgbWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCk7ICAvLy9cblxuICAgICAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgbWV0YVR5cGUgPSBtZXRhdmFyaWFibGUuZ2V0TWV0YVR5cGUoKTtcblxuICAgICAgICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgbWV0YXZhcmlhYmxlID0gdGhpczsgIC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgdmFsaWRhdGVUZXJtKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICBpZiAodGhpcy50ZXJtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgICAgdGVybVZhbGlkYXRlcyA9IHRoaXMudGVybS52YWxpZGF0ZShjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlVHlwZShjb250ZXh0KSB7XG4gICAgbGV0IHR5cGVWYWxpZGF0ZXMgPSB0cnVlOyAgLy8vXG5cbiAgICBpZiAodGhpcy50eXBlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgICAgdHlwZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBBICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZXNlbnQgaW4gdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5RnJhbWUoZnJhbWUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzID0gdGhpcy51bmlmeUZyYW1lTWV0YXZhcmlhYmxlKGZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGZyYW1lVW5pZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzaW1wbGVTdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uRnJhbWVDb21wYXJlc1RvRnJhbWUgPSBzdWJzdGl0dXRpb24uY29tcGFyZUZyYW1lKGZyYW1lLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uRnJhbWVDb21wYXJlc1RvRnJhbWUpIHtcbiAgICAgICAgICBmcmFtZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB7IEZyYW1lU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IEZyYW1lU3Vic3RpdHV0aW9uLmZyb21GcmFtZUFuZE1ldGF2YXJpYWJsZShmcmFtZSwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbi52YWxpZGF0ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBmcmFtZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFtZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HO1xuXG5cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfSR7c3Vic3RpdHV0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvblByZXNlbnQgPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOYW1lLCBzdWJzdGl0dXRpb24pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5pc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25QcmVzZW50KSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTmFtZSwgc3Vic3RpdHV0aW9uKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQ29tcGFyZXNUb1N0YXRlbWVudCA9IHN1YnN0aXR1dGlvbi5jb21wYXJlU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbkNvbXBhcmVzVG9TdGF0ZW1lbnQpIHtcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzO1xuXG4gICAgICAgIGxldCBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG5cbiAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXRlbWVudFN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGNvbnRleHQpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXRlbWVudFN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbi5nZXRTdWJzdGl0dXRpb24oKTtcblxuICAgICAgICAgIHN1YnN0aXR1dGlvbi5zZXRDb250ZXh0KGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uLnZhbGlkYXRlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfSR7c3Vic3RpdHV0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlSZWZlcmVuY2UocmVmZXJlbmNlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlSZWZlcmVuY2VNZXRhdmFyaWFibGUocmVmZXJlbmNlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChyZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICByZWZlcmVuY2VVbmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCA9IGNvbnRleHQuaXNTaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAoc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCkge1xuICAgICAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHNpbXBsZVN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgICAgICBzdWJzdGl0dXRpb25SZWZlcmVuY2VDb21wYXJlc1RvUmVmZXJlbmNlID0gc3Vic3RpdHV0aW9uLmNvbXBhcmVSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uUmVmZXJlbmNlQ29tcGFyZXNUb1JlZmVyZW5jZSkge1xuICAgICAgICAgIHJlZmVyZW5jZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB7IFJlZmVyZW5jZVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IHRoaXMsXG4gICAgICAgICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IFJlZmVyZW5jZVN1YnN0aXR1dGlvbi5mcm9tUmVmZXJlbmNlQW5kTWV0YXZhcmlhYmxlKHJlZmVyZW5jZSwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb24udmFsaWRhdGUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgcmVmZXJlbmNlVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlZmVyZW5jZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVW5pZmllcztcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBjb25zdCBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGUsICAvLy9cbiAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nID0gZ2VuZXJhbE1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZyA9IHNwZWNpZmljTWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke2dlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIG1ldGF2YXJpYWJsZVVuaWZpZXMgPSB1bmlmeU1ldGF2YXJpYWJsZShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7Z2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5RnJhbWVNZXRhdmFyaWFibGUoZnJhbWUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPSBnZW5lcmFsQ29udGV4dC5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dEZpbGVQYXRoID0gc3BlY2lmaWNDb250ZXh0LmdldEZpbGVQYXRoKCk7XG5cbiAgICBpZiAoZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9PT0gc3BlY2lmaWNDb250ZXh0RmlsZVBhdGgpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKSwgIC8vL1xuICAgICAgICAgICAgZnJhbWVNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0dmFyaWFibGUgPSBmcmFtZS5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKGZyYW1lTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldHZhcmlhYmxlKSB7XG4gICAgICAgIGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmcmFtZVNpbmd1bGFyID0gZnJhbWUuaXNTaW5ndWxhcigpO1xuXG4gICAgICAgIGlmIChmcmFtZVNpbmd1bGFyKSB7XG4gICAgICAgICAgY29uc3QgZnJhbWVNZXRhdmFyaWFibGVOYW1lID0gZnJhbWUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgICAgICAgIGZyYW1lTWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKGZyYW1lTWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgICAgICAgZ2VuZXJhbE1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlID0gZnJhbWVNZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcyA9IG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5OyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVJlZmVyZW5jZU1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSdzIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPSBnZW5lcmFsQ29udGV4dC5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dEZpbGVQYXRoID0gc3BlY2lmaWNDb250ZXh0LmdldEZpbGVQYXRoKCk7XG5cbiAgICBpZiAoZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9PT0gc3BlY2lmaWNDb250ZXh0RmlsZVBhdGgpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXR2YXJpYWJsZSA9IHJlZmVyZW5jZS5jb21wYXJlTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChyZWZlcmVuY2VNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0dmFyaWFibGUpIHtcbiAgICAgICAgcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZWZlcmVuY2VNZXRhdmFyaWFibGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgICAgIGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSByZWZlcmVuY2VNZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyA9IG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5OyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlJ3MgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50TWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQncyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dEZpbGVQYXRoID0gZ2VuZXJhbENvbnRleHQuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCA9IHNwZWNpZmljQ29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgaWYgKGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPT09IHNwZWNpZmljQ29udGV4dEZpbGVQYXRoKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0dmFyaWFibGUgPSBzdGF0ZW1lbnQuY29tcGFyZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50TWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldHZhcmlhYmxlKSB7XG4gICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50U2luZ3VsYXIgPSBzdGF0ZW1lbnQuaXNTaW5ndWxhcigpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRTaW5ndWxhcikge1xuICAgICAgICAgIGNvbnN0IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5hbWUgPSBzdGF0ZW1lbnQuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShzdGF0ZW1lbnRNZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMgPSBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseTsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50J3MgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtZXRhVHlwZUpTT04gPSBtZXRhVHlwZVRvTWV0YVR5cGVKU09OKHRoaXMubWV0YVR5cGUpLFxuICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIG1ldGFUeXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk1ldGF2YXJpYWJsZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBpbnN0YW50aWF0ZU1ldGF2YXJpYWJsZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICB0ZXJtID0gdGVybUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgdHlwZSA9IHR5cGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCB0ZXJtLCB0eXBlLCBtZXRhVHlwZSk7XG5cbiAgICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJNZXRhdmFyaWFibGUiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwidGVybSIsInR5cGUiLCJtZXRhVHlwZSIsImdldE5hbWUiLCJnZXRUZXJtIiwiZ2V0VHlwZSIsImdldE1ldGFUeXBlIiwic2V0TWV0YVR5cGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZ2V0Tm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImlzTWV0YVR5cGVFcXVhbFRvIiwiaXNFcXVhbFRvIiwiY29tcGFyZSIsIm1ldGF2YXJpYWJsZSIsImNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJjb21wYXJlc1RvTWV0YXZhcmlhYmxlIiwibmFtZU1ldGF2YXJpYWJsZU5hbWUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInRlcm1WZXJpZmllcyIsInZlcmlmeVRlcm0iLCJ0eXBlVmVyaWZpZXMiLCJ2ZXJpZnlUeXBlIiwiZGVidWciLCJ0ZXJtU3RyaW5nIiwidHlwZVN0cmluZyIsInR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsImVycm9yIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZXMiLCJ0ZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVUZXJtIiwidHlwZVZhbGlkYXRlcyIsInZhbGlkYXRlVHlwZSIsImZpbmRNZXRhdmFyaWFibGUiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInVuaWZ5RnJhbWUiLCJmcmFtZSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwiZnJhbWVVbmlmaWVzIiwiZnJhbWVTdHJpbmciLCJmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMiLCJ1bmlmeUZyYW1lTWV0YXZhcmlhYmxlIiwic2ltcGxlU3Vic3RpdHV0aW9uIiwiZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZSIsInN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkZyYW1lQ29tcGFyZXNUb0ZyYW1lIiwiY29tcGFyZUZyYW1lIiwiRnJhbWVTdWJzdGl0dXRpb24iLCJlbGVtZW50cyIsImZyYW1lU3Vic3RpdHV0aW9uIiwiZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwic3RhdGVtZW50U3RyaW5nIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcyIsInVuaWZ5U3RhdGVtZW50TWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uUHJlc2VudCIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbiIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lIiwic3Vic3RpdHV0aW9uQ29tcGFyZXNUb1N0YXRlbWVudCIsImNvbXBhcmVTdGF0ZW1lbnQiLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsImdldFN1YnN0aXR1dGlvbiIsInNldENvbnRleHQiLCJ1bmlmeVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInJlZmVyZW5jZVVuaWZpZXMiLCJyZWZlcmVuY2VTdHJpbmciLCJyZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlSZWZlcmVuY2VNZXRhdmFyaWFibGUiLCJzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50IiwiaXNTaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwic3Vic3RpdHV0aW9uUmVmZXJlbmNlQ29tcGFyZXNUb1JlZmVyZW5jZSIsImNvbXBhcmVSZWZlcmVuY2UiLCJSZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJyZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJmcm9tUmVmZXJlbmNlQW5kTWV0YXZhcmlhYmxlIiwidW5pZnlNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzIiwiZ2V0Q29udGV4dCIsImdlbmVyYWxNZXRhdmFyaWFibGUiLCJzcGVjaWZpY01ldGF2YXJpYWJsZSIsImdlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmciLCJzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZyIsImdlbmVyYWxDb250ZXh0RmlsZVBhdGgiLCJnZXRGaWxlUGF0aCIsInNwZWNpZmljQ29udGV4dEZpbGVQYXRoIiwiZnJhbWVNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0dmFyaWFibGUiLCJmcmFtZVNpbmd1bGFyIiwiaXNTaW5ndWxhciIsImZyYW1lTWV0YXZhcmlhYmxlTmFtZSIsImZyYW1lTWV0YXZhcmlhYmxlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5IiwidW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldHZhcmlhYmxlIiwiY29tcGFyZU1ldGF2YXJpYWJsZSIsInJlZmVyZW5jZU1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXR2YXJpYWJsZSIsInN0YXRlbWVudFNpbmd1bGFyIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTmFtZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZSIsInRvSlNPTiIsIm1ldGFUeXBlSlNPTiIsIm1ldGFUeXBlVG9NZXRhVHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJsaXRlcmFsbHkiLCJpbnN0YW50aWF0ZU1ldGF2YXJpYWJsZSIsIm5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsInRlcm1Gcm9tTWV0YXZhcmlhYmxlTm9kZSIsInR5cGVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFUeXBlRnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBQTs7O2dDQVp3QjtrRUFFSDt5QkFHSzsyQkFDRzs2QkFDVztzQkFDaUI7dUJBQ1M7eUJBQzJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFFN0YsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxxQkFBcUJDLHVCQUFPO0lBQ3RELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsQ0FBRTtRQUM3RCxLQUFLLENBQUNOLFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtJQUNsQjtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNKLElBQUk7SUFDbEI7SUFFQUssVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDSixJQUFJO0lBQ2xCO0lBRUFLLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0osSUFBSTtJQUNsQjtJQUVBSyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNKLFFBQVE7SUFDdEI7SUFFQUssWUFBWUwsUUFBUSxFQUFFO1FBQ3BCLElBQUksQ0FBQ0EsUUFBUSxHQUFHQTtJQUNsQjtJQUVBTSxzQkFBc0I7UUFDcEIsTUFBTVYsT0FBTyxJQUFJLENBQUNXLE9BQU8sSUFDbkJDLG1CQUFtQlosTUFBTyxHQUFHO1FBRW5DLE9BQU9ZO0lBQ1Q7SUFFQUMsc0JB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