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
            const termString = this.term.getString(), metavariableString = this.getString();
            context.trace(`Validating the '${metavariableString}' metavariable's '${termString}' term...`);
            termValidates = false;
            const metavariableName = this.getMetavariableName(), metavariablePresent = context.isMetavariablePresentByMetavariableName(metavariableName);
            let term;
            if (metavariablePresent) {
                term = this.term.validate(context, ()=>{
                    let validatesForwards = false;
                    context.addTerm(this.term);
                    const metavariable = this, metavariablePresent = context.isMetavariablePresent(metavariable, context);
                    context.removeTerm(this.term);
                    if (metavariablePresent) {
                        validatesForwards = true;
                    }
                    return validatesForwards;
                });
            } else {
                term = this.term.validate(context, ()=>{
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
            context.trace(`Setting the '${metavariableString}' metavariable's meta-type to '${metaTypeSTring}'.`);
        }
        if (termValidates) {
            context.debug(`...validated the '${metavariableString}' metavariable's '${metavariableName}' name.`);
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
        const metavariable = (0, _context.literally)((context)=>{
            const { string } = json, metavariableNode = (0, _instantiate.instantiateMetavariable)(string, context), node = metavariableNode, name = (0, _element.nameFromMetavariableNode)(metavariableNode, context), term = (0, _element.termFromMetavariableNode)(metavariableNode, context), type = (0, _element.typeFromMetavariableNode)(metavariableNode, context), metaType = (0, _json.metaTypeFromJSON)(json, context), metavariable = new Metavariable(context, string, node, name, term, type, metaType);
            return metavariable;
        }, context);
        return metavariable;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGxpdGVyYWxseSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVNZXRhdmFyaWFibGUgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgbWV0YVR5cGVGcm9tSlNPTiwgbWV0YVR5cGVUb01ldGFUeXBlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgdW5pZnlNZXRhdmFyaWFibGUsIHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseSB9IGZyb20gXCIuLi9wcm9jZXNzL3VuaWZ5XCI7XG5pbXBvcnQgeyBuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUsIHRlcm1Gcm9tTWV0YXZhcmlhYmxlTm9kZSwgdHlwZUZyb21NZXRhdmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBNZXRhdmFyaWFibGUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCB0ZXJtLCB0eXBlLCBtZXRhVHlwZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG4gICAgXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5tZXRhVHlwZSA9IG1ldGFUeXBlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YVR5cGU7XG4gIH1cblxuICBzZXRNZXRhVHlwZShtZXRhVHlwZSkge1xuICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgaXNNZXRhVHlwZUVxdWFsVG8obWV0YVR5cGUpIHsgcmV0dXJuIHRoaXMubWV0YVR5cGUuaXNFcXVhbFRvKG1ldGFUeXBlKTsgfVxuXG4gIGNvbXBhcmUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIGNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9NZXRhdmFyaWFibGU7XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZU1ldGF2YXJpYWJsZU5hbWUgPSAodGhpcy5uYW1lID09PSBtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IG5hbWVNZXRhdmFyaWFibGVOYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgdGVybVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUZXJtKGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllcykge1xuICAgICAgY29uc3QgdHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUeXBlKGNvbnRleHQpO1xuXG4gICAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VGVybShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1WZXJpZmllcyA9IHRydWU7ICAvLy9cblxuICAgIGlmICh0aGlzLnRlcm0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgICB0ZXJtVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgICAgY29udGV4dC50cmFjZShgQSAnJHt0ZXJtU3RyaW5nfScgdGVybSBpcyBwcmVzZW50IGluIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVR5cGUoY29udGV4dCkge1xuICAgIGxldCB0eXBlVmVyaWZpZXMgPSB0cnVlOyAgLy8vXG5cbiAgICBpZiAodGhpcy50eXBlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgICAgIHR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnRleHQuZXJyb3IoYFR5cGUgJyR7dHlwZU5hbWV9JyBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZHMgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSdzICcke3R5cGVTdHJpbmd9JyB0eXBlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZXM7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUeXBlKGNvbnRleHQpO1xuXG4gICAgaWYgKHR5cGVWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnN0IHRlcm1WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGVybShjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgbmFtZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVOYW1lKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChuYW1lVmFsaWRhdGVzKSB7XG4gICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIG1ldGF2YXJpYWJsZSA9IHRoaXM7ICAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHZhbGlkYXRlVGVybShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1WYWxpZGF0ZXMgPSB0cnVlOyAvLy9cblxuICAgIGlmICh0aGlzLnRlcm0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgICB0ZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgbGV0IHRlcm07XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICAgIHRlcm0gPSB0aGlzLnRlcm0udmFsaWRhdGUoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgIGxldCB2YWxpZGF0ZXNGb3J3YXJkcyA9IGZhbHNlO1xuXG4gICAgICAgICAgY29udGV4dC5hZGRUZXJtKHRoaXMudGVybSk7XG5cbiAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLFxuICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgY29udGV4dC5yZW1vdmVUZXJtKHRoaXMudGVybSk7XG5cbiAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgICAgfSk7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRlcm0gPSB0aGlzLnRlcm0udmFsaWRhdGUoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMudGVybSA9IHRlcm07XG5cbiAgICAgICAgdGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgJyR7dGVybVN0cmluZ30nIHRlcm0uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZU5hbWUoY29udGV4dCkge1xuICAgIGxldCB0ZXJtVmFsaWRhdGVzID0gdHJ1ZTsgLy8vXG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCksICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyAnJHttZXRhdmFyaWFibGVOYW1lfScgbmFtZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YVR5cGUgPSBtZXRhdmFyaWFibGUuZ2V0TWV0YVR5cGUoKSxcbiAgICAgICAgICAgIG1ldGFUeXBlU1RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcblxuICAgICAgY29udGV4dC50cmFjZShgU2V0dGluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgbWV0YS10eXBlIHRvICcke21ldGFUeXBlU1RyaW5nfScuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgJyR7bWV0YXZhcmlhYmxlTmFtZX0nIG5hbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVR5cGUoY29udGV4dCkge1xuICAgIGxldCB0eXBlVmFsaWRhdGVzID0gdHJ1ZTsgIC8vL1xuXG4gICAgaWYgKHRoaXMudHlwZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHR5cGVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgY29udGV4dC50cmFjZShgQSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVzZW50IGluIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWYWxpZGF0ZXM7XG4gIH1cblxuICB1bmlmeUZyYW1lKGZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlGcmFtZU1ldGF2YXJpYWJsZShmcmFtZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBmcmFtZVVuaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gc2ltcGxlU3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbkZyYW1lQ29tcGFyZXNUb0ZyYW1lID0gc3Vic3RpdHV0aW9uLmNvbXBhcmVGcmFtZShmcmFtZSwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbkZyYW1lQ29tcGFyZXNUb0ZyYW1lKSB7XG4gICAgICAgICAgZnJhbWVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeyBGcmFtZVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHM7XG5cbiAgICAgICAgbGV0IGZyYW1lU3Vic3RpdHV0aW9uO1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXM7ICAvLy9cblxuICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IEZyYW1lU3Vic3RpdHV0aW9uLmZyb21GcmFtZUFuZE1ldGF2YXJpYWJsZShmcmFtZSwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IGZyYW1lU3Vic3RpdHV0aW9uLnZhbGlkYXRlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChmcmFtZVN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgIGZyYW1lVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhbWVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uLmdldFN0cmluZygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORztcblxuXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30ke3N1YnN0aXR1dGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25QcmVzZW50ID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5pc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTmFtZSwgc3Vic3RpdHV0aW9uKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uUHJlc2VudCkge1xuICAgICAgICBzdWJzdGl0dXRpb24gPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5hbWUsIHN1YnN0aXR1dGlvbikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkNvbXBhcmVzVG9TdGF0ZW1lbnQgPSBzdWJzdGl0dXRpb24uY29tcGFyZVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25Db21wYXJlc1RvU3RhdGVtZW50KSB7XG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHsgU3RhdGVtZW50U3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cztcblxuICAgICAgICBsZXQgc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuXG4gICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGF0ZW1lbnRTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uLCBjb250ZXh0KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGF0ZW1lbnRTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb24uZ2V0U3Vic3RpdHV0aW9uKCk7XG5cbiAgICAgICAgICBzdWJzdGl0dXRpb24uc2V0Q29udGV4dChjb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbi52YWxpZGF0ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50U3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30ke3N1YnN0aXR1dGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0aGlzLnVuaWZ5UmVmZXJlbmNlTWV0YXZhcmlhYmxlKHJlZmVyZW5jZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAocmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgcmVmZXJlbmNlVW5pZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQgPSBjb250ZXh0LmlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQpIHtcbiAgICAgICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzaW1wbGVTdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uUmVmZXJlbmNlQ29tcGFyZXNUb1JlZmVyZW5jZSA9IHN1YnN0aXR1dGlvbi5jb21wYXJlUmVmZXJlbmNlKHJlZmVyZW5jZSwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvblJlZmVyZW5jZUNvbXBhcmVzVG9SZWZlcmVuY2UpIHtcbiAgICAgICAgICByZWZlcmVuY2VVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeyBSZWZlcmVuY2VTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzO1xuXG4gICAgICAgIGxldCByZWZlcmVuY2VTdWJzdGl0dXRpb247XG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcztcblxuICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb24gPSBSZWZlcmVuY2VTdWJzdGl0dXRpb24uZnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIG1ldGF2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uLnZhbGlkYXRlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpOyAgLy8vXG5cbiAgICAgICAgaWYgKHJlZmVyZW5jZVN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgIHJlZmVyZW5jZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlZmVyZW5jZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVW5pZmllcztcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBjb25zdCBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGUsICAvLy9cbiAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nID0gZ2VuZXJhbE1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZyA9IHNwZWNpZmljTWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke2dlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIG1ldGF2YXJpYWJsZVVuaWZpZXMgPSB1bmlmeU1ldGF2YXJpYWJsZShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7Z2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5RnJhbWVNZXRhdmFyaWFibGUoZnJhbWUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPSBnZW5lcmFsQ29udGV4dC5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dEZpbGVQYXRoID0gc3BlY2lmaWNDb250ZXh0LmdldEZpbGVQYXRoKCk7XG5cbiAgICBpZiAoZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9PT0gc3BlY2lmaWNDb250ZXh0RmlsZVBhdGgpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKSwgIC8vL1xuICAgICAgICAgICAgZnJhbWVNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0dmFyaWFibGUgPSBmcmFtZS5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKGZyYW1lTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldHZhcmlhYmxlKSB7XG4gICAgICAgIGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmcmFtZVNpbmd1bGFyID0gZnJhbWUuaXNTaW5ndWxhcigpO1xuXG4gICAgICAgIGlmIChmcmFtZVNpbmd1bGFyKSB7XG4gICAgICAgICAgY29uc3QgZnJhbWVNZXRhdmFyaWFibGVOYW1lID0gZnJhbWUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgICAgICAgIGZyYW1lTWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKGZyYW1lTWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgICAgICAgZ2VuZXJhbE1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlID0gZnJhbWVNZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcyA9IG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5OyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVJlZmVyZW5jZU1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSdzIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPSBnZW5lcmFsQ29udGV4dC5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dEZpbGVQYXRoID0gc3BlY2lmaWNDb250ZXh0LmdldEZpbGVQYXRoKCk7XG5cbiAgICBpZiAoZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9PT0gc3BlY2lmaWNDb250ZXh0RmlsZVBhdGgpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXR2YXJpYWJsZSA9IHJlZmVyZW5jZS5jb21wYXJlTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChyZWZlcmVuY2VNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0dmFyaWFibGUpIHtcbiAgICAgICAgcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZWZlcmVuY2VNZXRhdmFyaWFibGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgICAgIGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSByZWZlcmVuY2VNZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyA9IG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5OyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlJ3MgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50TWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQncyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dEZpbGVQYXRoID0gZ2VuZXJhbENvbnRleHQuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCA9IHNwZWNpZmljQ29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgaWYgKGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPT09IHNwZWNpZmljQ29udGV4dEZpbGVQYXRoKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0dmFyaWFibGUgPSBzdGF0ZW1lbnQuY29tcGFyZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50TWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldHZhcmlhYmxlKSB7XG4gICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50U2luZ3VsYXIgPSBzdGF0ZW1lbnQuaXNTaW5ndWxhcigpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRTaW5ndWxhcikge1xuICAgICAgICAgIGNvbnN0IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5hbWUgPSBzdGF0ZW1lbnQuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShzdGF0ZW1lbnRNZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMgPSBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseTsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50J3MgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtZXRhVHlwZUpTT04gPSBtZXRhVHlwZVRvTWV0YVR5cGVKU09OKHRoaXMubWV0YVR5cGUpLFxuICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIG1ldGFUeXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk1ldGF2YXJpYWJsZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBpbnN0YW50aWF0ZU1ldGF2YXJpYWJsZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICB0ZXJtID0gdGVybUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgdHlwZSA9IHR5cGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCB0ZXJtLCB0eXBlLCBtZXRhVHlwZSk7XG5cbiAgICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJNZXRhdmFyaWFibGUiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwidGVybSIsInR5cGUiLCJtZXRhVHlwZSIsImdldE5hbWUiLCJnZXRUZXJtIiwiZ2V0VHlwZSIsImdldE1ldGFUeXBlIiwic2V0TWV0YVR5cGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZ2V0Tm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImlzTWV0YVR5cGVFcXVhbFRvIiwiaXNFcXVhbFRvIiwiY29tcGFyZSIsIm1ldGF2YXJpYWJsZSIsImNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJjb21wYXJlc1RvTWV0YXZhcmlhYmxlIiwibmFtZU1ldGF2YXJpYWJsZU5hbWUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInRlcm1WZXJpZmllcyIsInZlcmlmeVRlcm0iLCJ0eXBlVmVyaWZpZXMiLCJ2ZXJpZnlUeXBlIiwiZGVidWciLCJ0ZXJtU3RyaW5nIiwidHlwZVN0cmluZyIsInR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsImVycm9yIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZXMiLCJ0eXBlVmFsaWRhdGVzIiwidmFsaWRhdGVUeXBlIiwidGVybVZhbGlkYXRlcyIsInZhbGlkYXRlVGVybSIsIm5hbWVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZU5hbWUiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJhZGRUZXJtIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50IiwicmVtb3ZlVGVybSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhVHlwZVNUcmluZyIsInVuaWZ5RnJhbWUiLCJmcmFtZSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwiZnJhbWVVbmlmaWVzIiwiZnJhbWVTdHJpbmciLCJmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMiLCJ1bmlmeUZyYW1lTWV0YXZhcmlhYmxlIiwic2ltcGxlU3Vic3RpdHV0aW9uIiwiZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZSIsInN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkZyYW1lQ29tcGFyZXNUb0ZyYW1lIiwiY29tcGFyZUZyYW1lIiwiRnJhbWVTdWJzdGl0dXRpb24iLCJlbGVtZW50cyIsImZyYW1lU3Vic3RpdHV0aW9uIiwiZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwic3RhdGVtZW50U3RyaW5nIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcyIsInVuaWZ5U3RhdGVtZW50TWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uUHJlc2VudCIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbiIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lIiwic3Vic3RpdHV0aW9uQ29tcGFyZXNUb1N0YXRlbWVudCIsImNvbXBhcmVTdGF0ZW1lbnQiLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsImdldFN1YnN0aXR1dGlvbiIsInNldENvbnRleHQiLCJ1bmlmeVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInJlZmVyZW5jZVVuaWZpZXMiLCJyZWZlcmVuY2VTdHJpbmciLCJyZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlSZWZlcmVuY2VNZXRhdmFyaWFibGUiLCJzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50IiwiaXNTaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwic3Vic3RpdHV0aW9uUmVmZXJlbmNlQ29tcGFyZXNUb1JlZmVyZW5jZSIsImNvbXBhcmVSZWZlcmVuY2UiLCJSZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJyZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJmcm9tUmVmZXJlbmNlQW5kTWV0YXZhcmlhYmxlIiwidW5pZnlNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzIiwiZ2V0Q29udGV4dCIsImdlbmVyYWxNZXRhdmFyaWFibGUiLCJzcGVjaWZpY01ldGF2YXJpYWJsZSIsImdlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmciLCJzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZyIsImdlbmVyYWxDb250ZXh0RmlsZVBhdGgiLCJnZXRGaWxlUGF0aCIsInNwZWNpZmljQ29udGV4dEZpbGVQYXRoIiwiZnJhbWVNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0dmFyaWFibGUiLCJmcmFtZVNpbmd1bGFyIiwiaXNTaW5ndWxhciIsImZyYW1lTWV0YXZhcmlhYmxlTmFtZSIsImZyYW1lTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkiLCJ1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkiLCJyZWZlcmVuY2VNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0dmFyaWFibGUiLCJjb21wYXJlTWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldHZhcmlhYmxlIiwic3RhdGVtZW50U2luZ3VsYXIiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOYW1lIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlIiwidG9KU09OIiwibWV0YVR5cGVKU09OIiwibWV0YVR5cGVUb01ldGFUeXBlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImxpdGVyYWxseSIsImluc3RhbnRpYXRlTWV0YXZhcmlhYmxlIiwibmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIiwidGVybUZyb21NZXRhdmFyaWFibGVOb2RlIiwidHlwZUZyb21NZXRhdmFyaWFibGVOb2RlIiwibWV0YVR5cGVGcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUFBOzs7Z0NBWndCO2tFQUVIO3lCQUdLOzJCQUNHOzZCQUNXO3NCQUNpQjt1QkFDUzt5QkFDMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUU3RixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLHFCQUFxQkMsdUJBQU87SUFDdEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsUUFBUSxDQUFFO1FBQzdELEtBQUssQ0FBQ04sU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxRQUFRLEdBQUdBO0lBQ2xCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0osSUFBSTtJQUNsQjtJQUVBSyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNKLElBQUk7SUFDbEI7SUFFQUssVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDSixJQUFJO0lBQ2xCO0lBRUFLLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ0osUUFBUTtJ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