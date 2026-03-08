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
        const metavariableNodeA = metavariableNode; ///
        metavariableNode = this.getMetavariableNode(); ///
        const metavariableNodeB = metavariableNode, metavariableNodeAMatchesMetavariableNodeB = metavariableNodeA.match(metavariableNodeB), metavariableNodeMatches = metavariableNodeAMatchesMetavariableNodeB; ///
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
        let validates = false;
        const metavariableString = this.getString(); ///
        context.trace(`Validating the '${metavariableString}' metavariable...`);
        const termValidates = this.validateTerm(context);
        if (termValidates) {
            const typeValidates = this.validateType(context);
            if (typeValidates) {
                const metavariableName = this.name, metavariable = context.findMetavariableByMetavariableName(metavariableName);
                if (metavariable !== null) {
                    const metaType = metavariable.getMetaType();
                    this.metaType = metaType;
                }
                validates = true;
            }
        }
        if (validates) {
            context.debug(`...validated the '${metavariableString}' metavariable.`);
        }
        return validates;
    }
    validateTerm(context) {
        let termValidates = true;
        if (this.term !== null) {
            const termString = this.term.getString(), metavariableString = this.getString();
            context.trace(`Validating the '${metavariableString}' metavariable's '${termString}' term...`);
            termValidates = this.term.validate(context);
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
    validateGivenMetaType(metaType, context) {
        let validatesGivenMetaType = false;
        const metaTypeString = metaType.getString(), metavariableString = this.getString(); ///
        context.trace(`Validating the '${metavariableString}' metavariable given the '${metaTypeString}' meta-type...`);
        const metavariable = this.validate(context);
        if (metavariable !== null) {
            const metavariableMetaTypeEqualToMetaType = metavariable.isMetaTypeEqualTo(metaType);
            if (metavariableMetaTypeEqualToMetaType) {
                validatesGivenMetaType = true;
            }
        }
        if (validatesGivenMetaType) {
            context.debug(`...validated the '${metavariableString}' metavariable given the '${metaTypeString}' meta-type.`);
        }
        return validatesGivenMetaType;
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
                const substitution = simpleSubstitution, substitutionFrameEqualToFrame = substitution.isFrameEqualToFrame(frame);
                if (substitutionFrameEqualToFrame) {
                    frameUnifies = true;
                }
            } else {
                const { FrameSubstitution } = _elements.default, metavariable = this; ///
                let frameSubstitution;
                frameSubstitution = FrameSubstitution.fromFrameAndMetavariable(frame, metavariable, context);
                frameSubstitution = frameSubstitution.validate(generalContext, specificContext); ///
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
            const metavariableName = metavariable.getName(), substitutionPresent = substitution !== null ? context.isSubstitutionPresentByMetavariableNameAndSubstitution(metavariableName, substitution) : context.findSubstitutionByMetavariableName(metavariableName);
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
                statementSubstitution = statementSubstitution.validate(generalContext, specificContext); ///
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
                const simpleSubstitution = context.findSimpleSubstitutionByMetavariableName(metavariableName), substitution = simpleSubstitution, substitutionReferenceEqualToReference = substitution.isReferenceEqualToReference(reference);
                if (substitutionReferenceEqualToReference) {
                    referenceUnifies = true;
                }
            } else {
                const { ReferenceSubstitution } = _elements.default, metavariable = this; ///
                let referenceSubstitution;
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
        const metavariable = (0, _context.literally)((context)=>{
            const { string } = json, metavariableNode = (0, _instantiate.instantiateMetavariable)(string, context), node = metavariableNode, name = (0, _element.nameFromMetavariableNode)(metavariableNode, context), term = (0, _element.termFromMetavariableNode)(metavariableNode, context), type = (0, _element.typeFromMetavariableNode)(metavariableNode, context), metaType = (0, _json.metaTypeFromJSON)(json, context), metavariable = new Metavariable(context, string, node, name, term, type, metaType);
            return metavariable;
        }, context);
        return metavariable;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGxpdGVyYWxseSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVNZXRhdmFyaWFibGUgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgbWV0YVR5cGVGcm9tSlNPTiwgbWV0YVR5cGVUb01ldGFUeXBlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgdW5pZnlNZXRhdmFyaWFibGUsIHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseSB9IGZyb20gXCIuLi9wcm9jZXNzL3VuaWZ5XCI7XG5pbXBvcnQgeyBuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUsIHRlcm1Gcm9tTWV0YXZhcmlhYmxlTm9kZSwgdHlwZUZyb21NZXRhdmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBNZXRhdmFyaWFibGUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCB0ZXJtLCB0eXBlLCBtZXRhVHlwZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG4gICAgXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5tZXRhVHlwZSA9IG1ldGFUeXBlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YVR5cGU7XG4gIH1cblxuICBzZXRNZXRhVHlwZShtZXRhVHlwZSkge1xuICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgaXNNZXRhVHlwZUVxdWFsVG8obWV0YVR5cGUpIHsgcmV0dXJuIHRoaXMubWV0YVR5cGUuaXNFcXVhbFRvKG1ldGFUeXBlKTsgfVxuXG4gIGNvbXBhcmUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIGNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9NZXRhdmFyaWFibGU7XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZU1ldGF2YXJpYWJsZU5hbWUgPSAodGhpcy5uYW1lID09PSBtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IG5hbWVNZXRhdmFyaWFibGVOYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVBID0gbWV0YXZhcmlhYmxlTm9kZTsgLy8vXG5cbiAgICBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOb2RlKCk7ICAvLy9cblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVCID0gbWV0YXZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZUFNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZUIgPSBtZXRhdmFyaWFibGVOb2RlQS5tYXRjaChtZXRhdmFyaWFibGVOb2RlQiksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBtZXRhdmFyaWFibGVOb2RlQU1hdGNoZXNNZXRhdmFyaWFibGVOb2RlQjsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgdGVybVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUZXJtKGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllcykge1xuICAgICAgY29uc3QgdHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUeXBlKGNvbnRleHQpO1xuXG4gICAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VGVybShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1WZXJpZmllcyA9IHRydWU7ICAvLy9cblxuICAgIGlmICh0aGlzLnRlcm0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgICB0ZXJtVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgICAgY29udGV4dC50cmFjZShgQSAnJHt0ZXJtU3RyaW5nfScgdGVybSBpcyBwcmVzZW50IGluIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVR5cGUoY29udGV4dCkge1xuICAgIGxldCB0eXBlVmVyaWZpZXMgPSB0cnVlOyAgLy8vXG5cbiAgICBpZiAodGhpcy50eXBlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgICAgIHR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnRleHQuZXJyb3IoYFR5cGUgJyR7dHlwZU5hbWV9JyBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZHMgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSdzICcke3R5cGVTdHJpbmd9JyB0eXBlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZXM7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGVybShjb250ZXh0KTtcblxuICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICBjb25zdCB0eXBlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVR5cGUoY29udGV4dCk7XG5cbiAgICAgIGlmICh0eXBlVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IG1ldGFUeXBlID0gbWV0YXZhcmlhYmxlLmdldE1ldGFUeXBlKCk7XG5cbiAgICAgICAgICB0aGlzLm1ldGFUeXBlID0gbWV0YVR5cGU7XG4gICAgICAgIH1cblxuICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVRlcm0oY29udGV4dCkge1xuICAgIGxldCB0ZXJtVmFsaWRhdGVzID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLnRlcm0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgICB0ZXJtVmFsaWRhdGVzID0gdGhpcy50ZXJtLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSdzICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVUeXBlKGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZVZhbGlkYXRlcyA9IHRydWU7ICAvLy9cblxuICAgIGlmICh0aGlzLnR5cGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgICB0eXBlVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYEEgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlc2VudCBpbiB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc0dpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU1ldGFUeXBlRXF1YWxUb01ldGFUeXBlID0gbWV0YXZhcmlhYmxlLmlzTWV0YVR5cGVFcXVhbFRvKG1ldGFUeXBlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU1ldGFUeXBlRXF1YWxUb01ldGFUeXBlKSB7XG4gICAgICAgIHZhbGlkYXRlc0dpdmVuTWV0YVR5cGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNHaXZlbk1ldGFUeXBlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc0dpdmVuTWV0YVR5cGU7XG4gIH1cblxuICB1bmlmeUZyYW1lKGZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlGcmFtZU1ldGF2YXJpYWJsZShmcmFtZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBmcmFtZVVuaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gc2ltcGxlU3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbkZyYW1lRXF1YWxUb0ZyYW1lID0gc3Vic3RpdHV0aW9uLmlzRnJhbWVFcXVhbFRvRnJhbWUoZnJhbWUpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25GcmFtZUVxdWFsVG9GcmFtZSkge1xuICAgICAgICAgIGZyYW1lVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHsgRnJhbWVTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSB0aGlzOyAvLy9cblxuICAgICAgICBsZXQgZnJhbWVTdWJzdGl0dXRpb247XG5cbiAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBGcmFtZVN1YnN0aXR1dGlvbi5mcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUoZnJhbWUsIG1ldGF2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBmcmFtZVN1YnN0aXR1dGlvbi52YWxpZGF0ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTsgIC8vL1xuXG4gICAgICAgIGlmIChmcmFtZVN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgIGZyYW1lVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhbWVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uLmdldFN0cmluZygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORztcblxuXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30ke3N1YnN0aXR1dGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25QcmVzZW50ID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5pc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTmFtZSwgc3Vic3RpdHV0aW9uKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblByZXNlbnQpIHtcbiAgICAgICAgc3Vic3RpdHV0aW9uID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOYW1lLCBzdWJzdGl0dXRpb24pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25Db21wYXJlc1RvU3RhdGVtZW50ID0gc3Vic3RpdHV0aW9uLmNvbXBhcmVTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uQ29tcGFyZXNUb1N0YXRlbWVudCkge1xuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB7IFN0YXRlbWVudFN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHM7XG5cbiAgICAgICAgbGV0IHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcblxuICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhdGVtZW50U3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiwgY29udGV4dCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhdGVtZW50U3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uLmdldFN1YnN0aXR1dGlvbigpO1xuXG4gICAgICAgICAgc3Vic3RpdHV0aW9uLnNldENvbnRleHQoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb24udmFsaWRhdGUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7ICAvLy9cblxuICAgICAgICBpZiAoc3RhdGVtZW50U3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30ke3N1YnN0aXR1dGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0aGlzLnVuaWZ5UmVmZXJlbmNlTWV0YXZhcmlhYmxlKHJlZmVyZW5jZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAocmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgcmVmZXJlbmNlVW5pZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQgPSBjb250ZXh0LmlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQpIHtcbiAgICAgICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzaW1wbGVTdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uUmVmZXJlbmNlRXF1YWxUb1JlZmVyZW5jZSA9IHN1YnN0aXR1dGlvbi5pc1JlZmVyZW5jZUVxdWFsVG9SZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uUmVmZXJlbmNlRXF1YWxUb1JlZmVyZW5jZSkge1xuICAgICAgICAgIHJlZmVyZW5jZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB7IFJlZmVyZW5jZVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IHRoaXM7IC8vL1xuXG4gICAgICAgIGxldCByZWZlcmVuY2VTdWJzdGl0dXRpb247XG5cbiAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uID0gUmVmZXJlbmNlU3Vic3RpdHV0aW9uLmZyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUocmVmZXJlbmNlLCBtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbi52YWxpZGF0ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTsgIC8vL1xuXG4gICAgICAgIGlmIChyZWZlcmVuY2VTdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICByZWZlcmVuY2VVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWZlcmVuY2VVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2Ugd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVVuaWZpZXM7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgY29uc3QgZ2VuZXJhbE1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlLCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZyA9IGdlbmVyYWxNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmcgPSBzcGVjaWZpY01ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBtZXRhdmFyaWFibGVVbmlmaWVzID0gdW5pZnlNZXRhdmFyaWFibGUoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke2dlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeUZyYW1lTWV0YXZhcmlhYmxlKGZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dEZpbGVQYXRoID0gZ2VuZXJhbENvbnRleHQuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCA9IHNwZWNpZmljQ29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgaWYgKGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPT09IHNwZWNpZmljQ29udGV4dEZpbGVQYXRoKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCksICAvLy9cbiAgICAgICAgICAgIGZyYW1lTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldHZhcmlhYmxlID0gZnJhbWUuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmIChmcmFtZU1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXR2YXJpYWJsZSkge1xuICAgICAgICBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZnJhbWVTaW5ndWxhciA9IGZyYW1lLmlzU2luZ3VsYXIoKTtcblxuICAgICAgICBpZiAoZnJhbWVTaW5ndWxhcikge1xuICAgICAgICAgIGNvbnN0IGZyYW1lTWV0YXZhcmlhYmxlTmFtZSA9IGZyYW1lLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICAgICAgICBmcmFtZU1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShmcmFtZU1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgICAgICAgIGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZSA9IGZyYW1lTWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseTsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlSZWZlcmVuY2VNZXRhdmFyaWFibGUocmVmZXJlbmNlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UncyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dEZpbGVQYXRoID0gZ2VuZXJhbENvbnRleHQuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCA9IHNwZWNpZmljQ29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgaWYgKGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPT09IHNwZWNpZmljQ29udGV4dEZpbGVQYXRoKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0dmFyaWFibGUgPSByZWZlcmVuY2UuY29tcGFyZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldHZhcmlhYmxlKSB7XG4gICAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlTWV0YXZhcmlhYmxlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlID0gcmVmZXJlbmNlTWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseTsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSdzIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50J3MgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9IGdlbmVyYWxDb250ZXh0LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0RmlsZVBhdGggPSBzcGVjaWZpY0NvbnRleHQuZ2V0RmlsZVBhdGgoKTtcblxuICAgIGlmIChnZW5lcmFsQ29udGV4dEZpbGVQYXRoID09PSBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldHZhcmlhYmxlID0gc3RhdGVtZW50LmNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgaWYgKHN0YXRlbWVudE1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXR2YXJpYWJsZSkge1xuICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudFNpbmd1bGFyID0gc3RhdGVtZW50LmlzU2luZ3VsYXIoKTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50U2luZ3VsYXIpIHtcbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOYW1lID0gc3RhdGVtZW50LmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUoc3RhdGVtZW50TWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgICAgICAgZ2VuZXJhbE1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlID0gc3RhdGVtZW50TWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzID0gbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHk7IC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCdzIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbWV0YVR5cGVKU09OID0gbWV0YVR5cGVUb01ldGFUeXBlSlNPTih0aGlzLm1ldGFUeXBlKSxcbiAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlSlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBtZXRhVHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJNZXRhdmFyaWFibGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gaW5zdGFudGlhdGVNZXRhdmFyaWFibGUoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICBuYW1lID0gbmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgdGVybSA9IHRlcm1Gcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgdGVybSwgdHlwZSwgbWV0YVR5cGUpO1xuXG4gICAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTWV0YXZhcmlhYmxlIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibmFtZSIsInRlcm0iLCJ0eXBlIiwibWV0YVR5cGUiLCJnZXROYW1lIiwiZ2V0VGVybSIsImdldFR5cGUiLCJnZXRNZXRhVHlwZSIsInNldE1ldGFUeXBlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImdldE5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJpc01ldGFUeXBlRXF1YWxUbyIsImlzRXF1YWxUbyIsImNvbXBhcmUiLCJtZXRhdmFyaWFibGUiLCJjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZXNUb01ldGF2YXJpYWJsZSIsIm5hbWVNZXRhdmFyaWFibGVOYW1lIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZUEiLCJtZXRhdmFyaWFibGVOb2RlQiIsIm1ldGF2YXJpYWJsZU5vZGVBTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGVCIiwibWF0Y2giLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsInZlcmlmeSIsInZlcmlmaWVzIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0ZXJtVmVyaWZpZXMiLCJ2ZXJpZnlUZXJtIiwidHlwZVZlcmlmaWVzIiwidmVyaWZ5VHlwZSIsImRlYnVnIiwidGVybVN0cmluZyIsInR5cGVTdHJpbmciLCJ0eXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJlcnJvciIsInZhbGlkYXRlIiwidmFsaWRhdGVzIiwidGVybVZhbGlkYXRlcyIsInZhbGlkYXRlVGVybSIsInR5cGVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVR5cGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwidmFsaWRhdGVHaXZlbk1ldGFUeXBlIiwidmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlU3RyaW5nIiwibWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvTWV0YVR5cGUiLCJ1bmlmeUZyYW1lIiwiZnJhbWUiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsImZyYW1lVW5pZmllcyIsImZyYW1lU3RyaW5nIiwiZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlGcmFtZU1ldGF2YXJpYWJsZSIsInNpbXBsZVN1YnN0aXR1dGlvbiIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUiLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25GcmFtZUVxdWFsVG9GcmFtZSIsImlzRnJhbWVFcXVhbFRvRnJhbWUiLCJGcmFtZVN1YnN0aXR1dGlvbiIsImVsZW1lbnRzIiwiZnJhbWVTdWJzdGl0dXRpb24iLCJmcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUiLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZXMiLCJzdGF0ZW1lbnRTdHJpbmciLCJzdWJzdGl0dXRpb25TdHJpbmciLCJFTVBUWV9TVFJJTkciLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnRNZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb25QcmVzZW50IiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZSIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25Db21wYXJlc1RvU3RhdGVtZW50IiwiY29tcGFyZVN0YXRlbWVudCIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsInN0YXRlbWVudFN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlIiwiZ2V0U3Vic3RpdHV0aW9uIiwic2V0Q29udGV4dCIsInVuaWZ5UmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlVW5pZmllcyIsInJlZmVyZW5jZVN0cmluZyIsInJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXMiLCJ1bmlmeVJlZmVyZW5jZU1ldGF2YXJpYWJsZSIsInNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQiLCJpc1NpbXBsZVN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJzdWJzdGl0dXRpb25SZWZlcmVuY2VFcXVhbFRvUmVmZXJlbmNlIiwiaXNSZWZlcmVuY2VFcXVhbFRvUmVmZXJlbmNlIiwiUmVmZXJlbmNlU3Vic3RpdHV0aW9uIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uIiwiZnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZSIsInVuaWZ5TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlVW5pZmllcyIsImdldENvbnRleHQiLCJnZW5lcmFsTWV0YXZhcmlhYmxlIiwic3BlY2lmaWNNZXRhdmFyaWFibGUiLCJnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nIiwic3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmciLCJnZW5lcmFsQ29udGV4dEZpbGVQYXRoIiwiZ2V0RmlsZVBhdGgiLCJzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCIsImZyYW1lTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldHZhcmlhYmxlIiwiZnJhbWVTaW5ndWxhciIsImlzU2luZ3VsYXIiLCJmcmFtZU1ldGF2YXJpYWJsZU5hbWUiLCJmcmFtZU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5IiwidW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldHZhcmlhYmxlIiwiY29tcGFyZU1ldGF2YXJpYWJsZSIsInJlZmVyZW5jZU1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXR2YXJpYWJsZSIsInN0YXRlbWVudFNpbmd1bGFyIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTmFtZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZSIsInRvSlNPTiIsIm1ldGFUeXBlSlNPTiIsIm1ldGFUeXBlVG9NZXRhVHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJsaXRlcmFsbHkiLCJpbnN0YW50aWF0ZU1ldGF2YXJpYWJsZSIsIm5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsInRlcm1Gcm9tTWV0YXZhcmlhYmxlTm9kZSIsInR5cGVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFUeXBlRnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBQTs7O2dDQVp3QjtrRUFFSDt5QkFHSzsyQkFDRzs2QkFDVztzQkFDaUI7dUJBQ1M7eUJBQzJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFFN0YsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxxQkFBcUJDLHVCQUFPO0lBQ3RELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsQ0FBRTtRQUM3RCxLQUFLLENBQUNOLFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxH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