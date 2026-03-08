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
        let metavariable = null;
        const metavariableString = this.getString(); ///
        context.trace(`Validating the '${metavariableString}' metavariable...`);
        let validates = false;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGxpdGVyYWxseSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVNZXRhdmFyaWFibGUgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgbWV0YVR5cGVGcm9tSlNPTiwgbWV0YVR5cGVUb01ldGFUeXBlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgdW5pZnlNZXRhdmFyaWFibGUsIHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseSB9IGZyb20gXCIuLi9wcm9jZXNzL3VuaWZ5XCI7XG5pbXBvcnQgeyBuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUsIHRlcm1Gcm9tTWV0YXZhcmlhYmxlTm9kZSwgdHlwZUZyb21NZXRhdmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBNZXRhdmFyaWFibGUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCB0ZXJtLCB0eXBlLCBtZXRhVHlwZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG4gICAgXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5tZXRhVHlwZSA9IG1ldGFUeXBlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YVR5cGU7XG4gIH1cblxuICBzZXRNZXRhVHlwZShtZXRhVHlwZSkge1xuICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgaXNNZXRhVHlwZUVxdWFsVG8obWV0YVR5cGUpIHsgcmV0dXJuIHRoaXMubWV0YVR5cGUuaXNFcXVhbFRvKG1ldGFUeXBlKTsgfVxuXG4gIGNvbXBhcmUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIGNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9NZXRhdmFyaWFibGU7XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZU1ldGF2YXJpYWJsZU5hbWUgPSAodGhpcy5uYW1lID09PSBtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IG5hbWVNZXRhdmFyaWFibGVOYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVBID0gbWV0YXZhcmlhYmxlTm9kZTsgLy8vXG5cbiAgICBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOb2RlKCk7ICAvLy9cblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVCID0gbWV0YXZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZUFNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZUIgPSBtZXRhdmFyaWFibGVOb2RlQS5tYXRjaChtZXRhdmFyaWFibGVOb2RlQiksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBtZXRhdmFyaWFibGVOb2RlQU1hdGNoZXNNZXRhdmFyaWFibGVOb2RlQjsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgdGVybVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUZXJtKGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllcykge1xuICAgICAgY29uc3QgdHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUeXBlKGNvbnRleHQpO1xuXG4gICAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VGVybShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1WZXJpZmllcyA9IHRydWU7ICAvLy9cblxuICAgIGlmICh0aGlzLnRlcm0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgICB0ZXJtVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgICAgY29udGV4dC50cmFjZShgQSAnJHt0ZXJtU3RyaW5nfScgdGVybSBpcyBwcmVzZW50IGluIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVR5cGUoY29udGV4dCkge1xuICAgIGxldCB0eXBlVmVyaWZpZXMgPSB0cnVlOyAgLy8vXG5cbiAgICBpZiAodGhpcy50eXBlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgICAgIHR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnRleHQuZXJyb3IoYFR5cGUgJyR7dHlwZU5hbWV9JyBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZHMgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSdzICcke3R5cGVTdHJpbmd9JyB0eXBlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZXM7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUZXJtKGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnN0IHR5cGVWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVHlwZShjb250ZXh0KTtcblxuICAgICAgaWYgKHR5cGVWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgbWV0YVR5cGUgPSBtZXRhdmFyaWFibGUuZ2V0TWV0YVR5cGUoKTtcblxuICAgICAgICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgbWV0YXZhcmlhYmxlID0gdGhpczsgIC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgdmFsaWRhdGVUZXJtKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICBpZiAodGhpcy50ZXJtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgICAgdGVybVZhbGlkYXRlcyA9IHRoaXMudGVybS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlVHlwZShjb250ZXh0KSB7XG4gICAgbGV0IHR5cGVWYWxpZGF0ZXMgPSB0cnVlOyAgLy8vXG5cbiAgICBpZiAodGhpcy50eXBlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgICAgdHlwZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBBICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZXNlbnQgaW4gdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5RnJhbWUoZnJhbWUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzID0gdGhpcy51bmlmeUZyYW1lTWV0YXZhcmlhYmxlKGZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGZyYW1lVW5pZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzaW1wbGVTdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uRnJhbWVFcXVhbFRvRnJhbWUgPSBzdWJzdGl0dXRpb24uaXNGcmFtZUVxdWFsVG9GcmFtZShmcmFtZSk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbkZyYW1lRXF1YWxUb0ZyYW1lKSB7XG4gICAgICAgICAgZnJhbWVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeyBGcmFtZVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IHRoaXM7IC8vL1xuXG4gICAgICAgIGxldCBmcmFtZVN1YnN0aXR1dGlvbjtcblxuICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IEZyYW1lU3Vic3RpdHV0aW9uLmZyb21GcmFtZUFuZE1ldGF2YXJpYWJsZShmcmFtZSwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IGZyYW1lU3Vic3RpdHV0aW9uLnZhbGlkYXRlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpOyAgLy8vXG5cbiAgICAgICAgaWYgKGZyYW1lU3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgZnJhbWVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFtZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HO1xuXG5cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfSR7c3Vic3RpdHV0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvblByZXNlbnQgPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOYW1lLCBzdWJzdGl0dXRpb24pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uUHJlc2VudCkge1xuICAgICAgICBzdWJzdGl0dXRpb24gPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5hbWUsIHN1YnN0aXR1dGlvbikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkNvbXBhcmVzVG9TdGF0ZW1lbnQgPSBzdWJzdGl0dXRpb24uY29tcGFyZVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25Db21wYXJlc1RvU3RhdGVtZW50KSB7XG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHsgU3RhdGVtZW50U3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cztcblxuICAgICAgICBsZXQgc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuXG4gICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGF0ZW1lbnRTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uLCBjb250ZXh0KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGF0ZW1lbnRTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb24uZ2V0U3Vic3RpdHV0aW9uKCk7XG5cbiAgICAgICAgICBzdWJzdGl0dXRpb24uc2V0Q29udGV4dChjb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbi52YWxpZGF0ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTsgIC8vL1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRTdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfSR7c3Vic3RpdHV0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlSZWZlcmVuY2UocmVmZXJlbmNlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlSZWZlcmVuY2VNZXRhdmFyaWFibGUocmVmZXJlbmNlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChyZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICByZWZlcmVuY2VVbmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCA9IGNvbnRleHQuaXNTaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAoc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCkge1xuICAgICAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHNpbXBsZVN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgICAgICBzdWJzdGl0dXRpb25SZWZlcmVuY2VFcXVhbFRvUmVmZXJlbmNlID0gc3Vic3RpdHV0aW9uLmlzUmVmZXJlbmNlRXF1YWxUb1JlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25SZWZlcmVuY2VFcXVhbFRvUmVmZXJlbmNlKSB7XG4gICAgICAgICAgcmVmZXJlbmNlVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHsgUmVmZXJlbmNlU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gdGhpczsgLy8vXG5cbiAgICAgICAgbGV0IHJlZmVyZW5jZVN1YnN0aXR1dGlvbjtcblxuICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb24gPSBSZWZlcmVuY2VTdWJzdGl0dXRpb24uZnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIG1ldGF2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uLnZhbGlkYXRlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpOyAgLy8vXG5cbiAgICAgICAgaWYgKHJlZmVyZW5jZVN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgIHJlZmVyZW5jZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlZmVyZW5jZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVW5pZmllcztcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBjb25zdCBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGUsICAvLy9cbiAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nID0gZ2VuZXJhbE1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZyA9IHNwZWNpZmljTWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke2dlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIG1ldGF2YXJpYWJsZVVuaWZpZXMgPSB1bmlmeU1ldGF2YXJpYWJsZShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7Z2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5RnJhbWVNZXRhdmFyaWFibGUoZnJhbWUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPSBnZW5lcmFsQ29udGV4dC5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dEZpbGVQYXRoID0gc3BlY2lmaWNDb250ZXh0LmdldEZpbGVQYXRoKCk7XG5cbiAgICBpZiAoZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9PT0gc3BlY2lmaWNDb250ZXh0RmlsZVBhdGgpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKSwgIC8vL1xuICAgICAgICAgICAgZnJhbWVNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0dmFyaWFibGUgPSBmcmFtZS5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKGZyYW1lTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldHZhcmlhYmxlKSB7XG4gICAgICAgIGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmcmFtZVNpbmd1bGFyID0gZnJhbWUuaXNTaW5ndWxhcigpO1xuXG4gICAgICAgIGlmIChmcmFtZVNpbmd1bGFyKSB7XG4gICAgICAgICAgY29uc3QgZnJhbWVNZXRhdmFyaWFibGVOYW1lID0gZnJhbWUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgICAgICAgIGZyYW1lTWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKGZyYW1lTWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgICAgICAgZ2VuZXJhbE1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlID0gZnJhbWVNZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcyA9IG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5OyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVJlZmVyZW5jZU1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSdzIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPSBnZW5lcmFsQ29udGV4dC5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dEZpbGVQYXRoID0gc3BlY2lmaWNDb250ZXh0LmdldEZpbGVQYXRoKCk7XG5cbiAgICBpZiAoZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9PT0gc3BlY2lmaWNDb250ZXh0RmlsZVBhdGgpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXR2YXJpYWJsZSA9IHJlZmVyZW5jZS5jb21wYXJlTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChyZWZlcmVuY2VNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0dmFyaWFibGUpIHtcbiAgICAgICAgcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZWZlcmVuY2VNZXRhdmFyaWFibGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgICAgIGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSByZWZlcmVuY2VNZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyA9IG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5OyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlJ3MgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50TWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQncyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dEZpbGVQYXRoID0gZ2VuZXJhbENvbnRleHQuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCA9IHNwZWNpZmljQ29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgaWYgKGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPT09IHNwZWNpZmljQ29udGV4dEZpbGVQYXRoKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0dmFyaWFibGUgPSBzdGF0ZW1lbnQuY29tcGFyZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50TWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldHZhcmlhYmxlKSB7XG4gICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50U2luZ3VsYXIgPSBzdGF0ZW1lbnQuaXNTaW5ndWxhcigpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRTaW5ndWxhcikge1xuICAgICAgICAgIGNvbnN0IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5hbWUgPSBzdGF0ZW1lbnQuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShzdGF0ZW1lbnRNZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMgPSBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseTsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50J3MgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtZXRhVHlwZUpTT04gPSBtZXRhVHlwZVRvTWV0YVR5cGVKU09OKHRoaXMubWV0YVR5cGUpLFxuICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIG1ldGFUeXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk1ldGF2YXJpYWJsZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBpbnN0YW50aWF0ZU1ldGF2YXJpYWJsZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICB0ZXJtID0gdGVybUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgdHlwZSA9IHR5cGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCB0ZXJtLCB0eXBlLCBtZXRhVHlwZSk7XG5cbiAgICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJNZXRhdmFyaWFibGUiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwidGVybSIsInR5cGUiLCJtZXRhVHlwZSIsImdldE5hbWUiLCJnZXRUZXJtIiwiZ2V0VHlwZSIsImdldE1ldGFUeXBlIiwic2V0TWV0YVR5cGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZ2V0Tm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImlzTWV0YVR5cGVFcXVhbFRvIiwiaXNFcXVhbFRvIiwiY29tcGFyZSIsIm1ldGF2YXJpYWJsZSIsImNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJjb21wYXJlc1RvTWV0YXZhcmlhYmxlIiwibmFtZU1ldGF2YXJpYWJsZU5hbWUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlQSIsIm1ldGF2YXJpYWJsZU5vZGVCIiwibWV0YXZhcmlhYmxlTm9kZUFNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZUIiLCJtYXRjaCIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInRlcm1WZXJpZmllcyIsInZlcmlmeVRlcm0iLCJ0eXBlVmVyaWZpZXMiLCJ2ZXJpZnlUeXBlIiwiZGVidWciLCJ0ZXJtU3RyaW5nIiwidHlwZVN0cmluZyIsInR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsImVycm9yIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZXMiLCJ0ZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVUZXJtIiwidHlwZVZhbGlkYXRlcyIsInZhbGlkYXRlVHlwZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJ1bmlmeUZyYW1lIiwiZnJhbWUiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsImZyYW1lVW5pZmllcyIsImZyYW1lU3RyaW5nIiwiZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlGcmFtZU1ldGF2YXJpYWJsZSIsInNpbXBsZVN1YnN0aXR1dGlvbiIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUiLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25GcmFtZUVxdWFsVG9GcmFtZSIsImlzRnJhbWVFcXVhbFRvRnJhbWUiLCJGcmFtZVN1YnN0aXR1dGlvbiIsImVsZW1lbnRzIiwiZnJhbWVTdWJzdGl0dXRpb24iLCJmcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUiLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZXMiLCJzdGF0ZW1lbnRTdHJpbmciLCJzdWJzdGl0dXRpb25TdHJpbmciLCJFTVBUWV9TVFJJTkciLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnRNZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb25QcmVzZW50IiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZSIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25Db21wYXJlc1RvU3RhdGVtZW50IiwiY29tcGFyZVN0YXRlbWVudCIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsInN0YXRlbWVudFN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlIiwiZ2V0U3Vic3RpdHV0aW9uIiwic2V0Q29udGV4dCIsInVuaWZ5UmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlVW5pZmllcyIsInJlZmVyZW5jZVN0cmluZyIsInJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXMiLCJ1bmlmeVJlZmVyZW5jZU1ldGF2YXJpYWJsZSIsInNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQiLCJpc1NpbXBsZVN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJzdWJzdGl0dXRpb25SZWZlcmVuY2VFcXVhbFRvUmVmZXJlbmNlIiwiaXNSZWZlcmVuY2VFcXVhbFRvUmVmZXJlbmNlIiwiUmVmZXJlbmNlU3Vic3RpdHV0aW9uIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uIiwiZnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZSIsInVuaWZ5TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlVW5pZmllcyIsImdldENvbnRleHQiLCJnZW5lcmFsTWV0YXZhcmlhYmxlIiwic3BlY2lmaWNNZXRhdmFyaWFibGUiLCJnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nIiwic3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmciLCJnZW5lcmFsQ29udGV4dEZpbGVQYXRoIiwiZ2V0RmlsZVBhdGgiLCJzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCIsImZyYW1lTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldHZhcmlhYmxlIiwiZnJhbWVTaW5ndWxhciIsImlzU2luZ3VsYXIiLCJmcmFtZU1ldGF2YXJpYWJsZU5hbWUiLCJmcmFtZU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5IiwidW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldHZhcmlhYmxlIiwiY29tcGFyZU1ldGF2YXJpYWJsZSIsInJlZmVyZW5jZU1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXR2YXJpYWJsZSIsInN0YXRlbWVudFNpbmd1bGFyIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTmFtZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZSIsInRvSlNPTiIsIm1ldGFUeXBlSlNPTiIsIm1ldGFUeXBlVG9NZXRhVHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJsaXRlcmFsbHkiLCJpbnN0YW50aWF0ZU1ldGF2YXJpYWJsZSIsIm5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsInRlcm1Gcm9tTWV0YXZhcmlhYmxlTm9kZSIsInR5cGVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFUeXBlRnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBQTs7O2dDQVp3QjtrRUFFSDt5QkFHSzsyQkFDRzs2QkFDVztzQkFDaUI7dUJBQ1M7eUJBQzJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFFN0YsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxxQkFBcUJDLHVCQUFPO0lBQ3RELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsQ0FBRTtRQUM3RCxLQUFLLENBQUNOLFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsSUFBSSxH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