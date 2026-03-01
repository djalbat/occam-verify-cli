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
const _json = require("../utilities/json");
const _instantiate = require("../process/instantiate");
const _unify = require("../process/unify");
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
    constructor(context, string, node, name, type, metaType){
        super(context, string, node);
        this.name = name;
        this.type = type;
        this.metaType = metaType;
    }
    getName() {
        return this.name;
    }
    getType() {
        return this.type;
    }
    getMetaType() {
        return this.metaType;
    }
    setType(type) {
        this.type = type;
    }
    setMetaType(metaType) {
        this.metaType = metaType;
    }
    getMetavariableNode() {
        const node = this.getNode(), metavarialbeNode = node; ///
        return metavarialbeNode;
    }
    getMetavariableName() {
        const metavarialbeNode = this.getMetavariableNode(), metavariableName = metavarialbeNode.getMetavariableName();
        return metavariableName;
    }
    compare(metavariable) {
        const metavariableName = metavariable.getName(), comparesToMetavariableName = this.compareMetavariableName(metavariableName), comparesToMetavariable = comparesToMetavariableName; ///
        return comparesToMetavariable;
    }
    isMetaTypeEqualTo(metaType) {
        return this.metaType.isEqualTo(metaType);
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
    validate(context) {
        let validates = false;
        const metavariableString = this.getString(); ///
        context.trace(`Validating the '${metavariableString}' metavariable...`);
        const metavariable = this, metavariablePresent = context.isMetavariablePresent(metavariable);
        if (metavariablePresent) {
            validates = true;
        }
        if (validates) {
            context.debug(`...va;idated the '${metavariableString}' metavariable.`);
        }
        return validates;
    }
    validateGivenMetaType(metaType, context) {
        let validatesGivenMetaType = false;
        const metaTypeString = metaType.getString(), metavariableString = this.getString(); ///
        context.trace(`Validating the '${metavariableString}' metavariable given the '${metaTypeString}' meta-type...`);
        let metavariable = this; ///
        metavariable = context.findMetavariable(metavariable);
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
        const typeJSON = (0, _json.typeToTypeJSON)(this.type), nameJSON = (0, _json.nameToNameJSON)(this.name), metaTypeJSON = (0, _json.metaTypeToMetaTypeJSON)(this.metaType), name = nameJSON, type = typeJSON, metaType = metaTypeJSON, string = this.getString(), json = {
            string,
            name,
            type,
            metaType
        };
        return json;
    }
    static name = "Metavariable";
    static fromJSON(json, context) {
        const metavariable = (0, _context.literally)((context)=>{
            const { string } = json, metavariableNode = (0, _instantiate.instantiateMetavariable)(string, context), node = metavariableNode, name = (0, _json.nameFromJSON)(json, context), type = (0, _json.typeFromJSON)(json, context), metaType = (0, _json.metaTypeFromJSON)(json, context), metavariable = new Metavariable(context, string, node, name, type, metaType);
            return metavariable;
        }, context);
        return metavariable;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGxpdGVyYWxseSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgbWV0YVR5cGVUb01ldGFUeXBlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVNZXRhdmFyaWFibGUgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgdW5pZnlNZXRhdmFyaWFibGUsIHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseSB9IGZyb20gXCIuLi9wcm9jZXNzL3VuaWZ5XCI7XG5pbXBvcnQgeyBuYW1lRnJvbUpTT04sIHR5cGVGcm9tSlNPTiwgbmFtZVRvTmFtZUpTT04sIG1ldGFUeXBlRnJvbUpTT04sIHR5cGVUb1R5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBNZXRhdmFyaWFibGUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlLCBtZXRhVHlwZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG4gICAgXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE1ldGFUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFUeXBlO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIHNldE1ldGFUeXBlKG1ldGFUeXBlKSB7XG4gICAgdGhpcy5tZXRhVHlwZSA9IG1ldGFUeXBlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhbGJlTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBtZXRhdmFyaWFsYmVOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFsYmVOb2RlID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWxiZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBjb21wYXJlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gdGhpcy5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBjb21wYXJlc1RvTWV0YXZhcmlhYmxlID0gY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWU7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvTWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgaXNNZXRhVHlwZUVxdWFsVG8obWV0YVR5cGUpIHsgcmV0dXJuIHRoaXMubWV0YVR5cGUuaXNFcXVhbFRvKG1ldGFUeXBlKTsgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lTWV0YXZhcmlhYmxlTmFtZSA9ICh0aGlzLm5hbWUgPT09IG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gbmFtZU1ldGF2YXJpYWJsZU5hbWU7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZUEgPSBtZXRhdmFyaWFibGVOb2RlOyAvLy9cblxuICAgIG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5vZGUoKTsgIC8vL1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZUIgPSBtZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlQU1hdGNoZXNNZXRhdmFyaWFibGVOb2RlQiA9IG1ldGF2YXJpYWJsZU5vZGVBLm1hdGNoKG1ldGF2YXJpYWJsZU5vZGVCKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IG1ldGF2YXJpYWJsZU5vZGVBTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGVCOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmE7aWRhdGVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlR2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNHaXZlbk1ldGFUeXBlID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuLi5gKTtcblxuICAgIGxldCBtZXRhdmFyaWFibGUgPSB0aGlzOyAgLy8vXG5cbiAgICBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU1ldGFUeXBlRXF1YWxUb01ldGFUeXBlID0gbWV0YXZhcmlhYmxlLmlzTWV0YVR5cGVFcXVhbFRvKG1ldGFUeXBlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU1ldGFUeXBlRXF1YWxUb01ldGFUeXBlKSB7XG4gICAgICAgIHZhbGlkYXRlc0dpdmVuTWV0YVR5cGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNHaXZlbk1ldGFUeXBlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc0dpdmVuTWV0YVR5cGU7XG4gIH1cblxuICB1bmlmeUZyYW1lKGZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlGcmFtZU1ldGF2YXJpYWJsZShmcmFtZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBmcmFtZVVuaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gc2ltcGxlU3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbkZyYW1lRXF1YWxUb0ZyYW1lID0gc3Vic3RpdHV0aW9uLmlzRnJhbWVFcXVhbFRvRnJhbWUoZnJhbWUpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25GcmFtZUVxdWFsVG9GcmFtZSkge1xuICAgICAgICAgIGZyYW1lVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHsgRnJhbWVTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSB0aGlzOyAvLy9cblxuICAgICAgICBsZXQgZnJhbWVTdWJzdGl0dXRpb247XG5cbiAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBGcmFtZVN1YnN0aXR1dGlvbi5mcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUoZnJhbWUsIG1ldGF2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBmcmFtZVN1YnN0aXR1dGlvbi52YWxpZGF0ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTsgIC8vL1xuXG4gICAgICAgIGlmIChmcmFtZVN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgIGZyYW1lVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhbWVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uLmdldFN0cmluZygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORztcblxuXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30ke3N1YnN0aXR1dGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25QcmVzZW50ID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5pc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTmFtZSwgc3Vic3RpdHV0aW9uKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblByZXNlbnQpIHtcbiAgICAgICAgc3Vic3RpdHV0aW9uID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOYW1lLCBzdWJzdGl0dXRpb24pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25Db21wYXJlc1RvU3RhdGVtZW50ID0gc3Vic3RpdHV0aW9uLmNvbXBhcmVTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uQ29tcGFyZXNUb1N0YXRlbWVudCkge1xuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB7IFN0YXRlbWVudFN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHM7XG5cbiAgICAgICAgbGV0IHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcblxuICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhdGVtZW50U3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiwgY29udGV4dCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhdGVtZW50U3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uLmdldFN1YnN0aXR1dGlvbigpO1xuXG4gICAgICAgICAgc3Vic3RpdHV0aW9uLnNldENvbnRleHQoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb24udmFsaWRhdGUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7ICAvLy9cblxuICAgICAgICBpZiAoc3RhdGVtZW50U3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30ke3N1YnN0aXR1dGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0aGlzLnVuaWZ5UmVmZXJlbmNlTWV0YXZhcmlhYmxlKHJlZmVyZW5jZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAocmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgcmVmZXJlbmNlVW5pZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQgPSBjb250ZXh0LmlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQpIHtcbiAgICAgICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzaW1wbGVTdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uUmVmZXJlbmNlRXF1YWxUb1JlZmVyZW5jZSA9IHN1YnN0aXR1dGlvbi5pc1JlZmVyZW5jZUVxdWFsVG9SZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uUmVmZXJlbmNlRXF1YWxUb1JlZmVyZW5jZSkge1xuICAgICAgICAgIHJlZmVyZW5jZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB7IFJlZmVyZW5jZVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IHRoaXM7IC8vL1xuXG4gICAgICAgIGxldCByZWZlcmVuY2VTdWJzdGl0dXRpb247XG5cbiAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uID0gUmVmZXJlbmNlU3Vic3RpdHV0aW9uLmZyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUocmVmZXJlbmNlLCBtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbi52YWxpZGF0ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTsgIC8vL1xuXG4gICAgICAgIGlmIChyZWZlcmVuY2VTdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICByZWZlcmVuY2VVbmlmaWVzID0gdHJ1ZTtcblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlZmVyZW5jZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVW5pZmllcztcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBjb25zdCBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGUsICAvLy9cbiAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nID0gZ2VuZXJhbE1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZyA9IHNwZWNpZmljTWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke2dlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIG1ldGF2YXJpYWJsZVVuaWZpZXMgPSB1bmlmeU1ldGF2YXJpYWJsZShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7Z2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5RnJhbWVNZXRhdmFyaWFibGUoZnJhbWUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPSBnZW5lcmFsQ29udGV4dC5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dEZpbGVQYXRoID0gc3BlY2lmaWNDb250ZXh0LmdldEZpbGVQYXRoKCk7XG5cbiAgICBpZiAoZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9PT0gc3BlY2lmaWNDb250ZXh0RmlsZVBhdGgpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKSwgIC8vL1xuICAgICAgICAgICAgZnJhbWVNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0dmFyaWFibGUgPSBmcmFtZS5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKGZyYW1lTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldHZhcmlhYmxlKSB7XG4gICAgICAgIGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmcmFtZVNpbmd1bGFyID0gZnJhbWUuaXNTaW5ndWxhcigpO1xuXG4gICAgICAgIGlmIChmcmFtZVNpbmd1bGFyKSB7XG4gICAgICAgICAgY29uc3QgZnJhbWVNZXRhdmFyaWFibGVOYW1lID0gZnJhbWUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgICAgICAgIGZyYW1lTWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKGZyYW1lTWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgICAgICAgZ2VuZXJhbE1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlID0gZnJhbWVNZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcyA9IG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5OyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVJlZmVyZW5jZU1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSdzIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPSBnZW5lcmFsQ29udGV4dC5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dEZpbGVQYXRoID0gc3BlY2lmaWNDb250ZXh0LmdldEZpbGVQYXRoKCk7XG5cbiAgICBpZiAoZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9PT0gc3BlY2lmaWNDb250ZXh0RmlsZVBhdGgpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXR2YXJpYWJsZSA9IHJlZmVyZW5jZS5jb21wYXJlTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChyZWZlcmVuY2VNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0dmFyaWFibGUpIHtcbiAgICAgICAgcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZWZlcmVuY2VNZXRhdmFyaWFibGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgICAgIGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSByZWZlcmVuY2VNZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyA9IG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5OyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlJ3MgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50TWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQncyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dEZpbGVQYXRoID0gZ2VuZXJhbENvbnRleHQuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCA9IHNwZWNpZmljQ29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgaWYgKGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPT09IHNwZWNpZmljQ29udGV4dEZpbGVQYXRoKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0dmFyaWFibGUgPSBzdGF0ZW1lbnQuY29tcGFyZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50TWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldHZhcmlhYmxlKSB7XG4gICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50U2luZ3VsYXIgPSBzdGF0ZW1lbnQuaXNTaW5ndWxhcigpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRTaW5ndWxhcikge1xuICAgICAgICAgIGNvbnN0IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5hbWUgPSBzdGF0ZW1lbnQuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShzdGF0ZW1lbnRNZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMgPSBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseTsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50J3MgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGVUb1R5cGVKU09OKHRoaXMudHlwZSksXG4gICAgICAgICAgbmFtZUpTT04gPSBuYW1lVG9OYW1lSlNPTih0aGlzLm5hbWUpLFxuICAgICAgICAgIG1ldGFUeXBlSlNPTiA9IG1ldGFUeXBlVG9NZXRhVHlwZUpTT04odGhpcy5tZXRhVHlwZSksXG4gICAgICAgICAgbmFtZSA9IG5hbWVKU09OLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUpTT04sICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBtZXRhVHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJNZXRhdmFyaWFibGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gaW5zdGFudGlhdGVNZXRhdmFyaWFibGUoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICBuYW1lID0gbmFtZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlLCBtZXRhVHlwZSk7XG5cbiAgICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG5cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIk1ldGF2YXJpYWJsZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsIm5hbWUiLCJ0eXBlIiwibWV0YVR5cGUiLCJnZXROYW1lIiwiZ2V0VHlwZSIsImdldE1ldGFUeXBlIiwic2V0VHlwZSIsInNldE1ldGFUeXBlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImdldE5vZGUiLCJtZXRhdmFyaWFsYmVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJjb21wYXJlIiwibWV0YXZhcmlhYmxlIiwiY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJjb21wYXJlTWV0YXZhcmlhYmxlTmFtZSIsImNvbXBhcmVzVG9NZXRhdmFyaWFibGUiLCJpc01ldGFUeXBlRXF1YWxUbyIsImlzRXF1YWxUbyIsIm5hbWVNZXRhdmFyaWFibGVOYW1lIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVBIiwibWV0YXZhcmlhYmxlTm9kZUIiLCJtZXRhdmFyaWFibGVOb2RlQU1hdGNoZXNNZXRhdmFyaWFibGVOb2RlQiIsIm1hdGNoIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJ2YWxpZGF0ZSIsInZhbGlkYXRlcyIsIm1ldGF2YXJpYWJsZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudCIsImRlYnVnIiwidmFsaWRhdGVHaXZlbk1ldGFUeXBlIiwidmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlU3RyaW5nIiwiZmluZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZU1ldGFUeXBlRXF1YWxUb01ldGFUeXBlIiwidW5pZnlGcmFtZSIsImZyYW1lIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJmcmFtZVVuaWZpZXMiLCJmcmFtZVN0cmluZyIsImZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcyIsInVuaWZ5RnJhbWVNZXRhdmFyaWFibGUiLCJzaW1wbGVTdWJzdGl0dXRpb24iLCJmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lIiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uRnJhbWVFcXVhbFRvRnJhbWUiLCJpc0ZyYW1lRXF1YWxUb0ZyYW1lIiwiRnJhbWVTdWJzdGl0dXRpb24iLCJlbGVtZW50cyIsImZyYW1lU3Vic3RpdHV0aW9uIiwiZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwic3RhdGVtZW50U3RyaW5nIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcyIsInVuaWZ5U3RhdGVtZW50TWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uUHJlc2VudCIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbiIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uQ29tcGFyZXNUb1N0YXRlbWVudCIsImNvbXBhcmVTdGF0ZW1lbnQiLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsImdldFN1YnN0aXR1dGlvbiIsInNldENvbnRleHQiLCJ1bmlmeVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInJlZmVyZW5jZVVuaWZpZXMiLCJyZWZlcmVuY2VTdHJpbmciLCJyZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlSZWZlcmVuY2VNZXRhdmFyaWFibGUiLCJzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50IiwiaXNTaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwic3Vic3RpdHV0aW9uUmVmZXJlbmNlRXF1YWxUb1JlZmVyZW5jZSIsImlzUmVmZXJlbmNlRXF1YWxUb1JlZmVyZW5jZSIsIlJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsImZyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUiLCJ1bmlmeU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVVuaWZpZXMiLCJnZXRDb250ZXh0IiwiZ2VuZXJhbE1ldGF2YXJpYWJsZSIsInNwZWNpZmljTWV0YXZhcmlhYmxlIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZyIsInNwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nIiwiZ2VuZXJhbENvbnRleHRGaWxlUGF0aCIsImdldEZpbGVQYXRoIiwic3BlY2lmaWNDb250ZXh0RmlsZVBhdGgiLCJmcmFtZU1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXR2YXJpYWJsZSIsImZyYW1lU2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwiZnJhbWVNZXRhdmFyaWFibGVOYW1lIiwiZnJhbWVNZXRhdmFyaWFibGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkiLCJ1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkiLCJyZWZlcmVuY2VNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0dmFyaWFibGUiLCJjb21wYXJlTWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldHZhcmlhYmxlIiwic3RhdGVtZW50U2luZ3VsYXIiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOYW1lIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlIiwidG9KU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsIm5hbWVKU09OIiwibmFtZVRvTmFtZUpTT04iLCJtZXRhVHlwZUpTT04iLCJtZXRhVHlwZVRvTWV0YVR5cGVKU09OIiwianNvbiIsImZyb21KU09OIiwibGl0ZXJhbGx5IiwiaW5zdGFudGlhdGVNZXRhdmFyaWFibGUiLCJuYW1lRnJvbUpTT04iLCJ0eXBlRnJvbUpTT04iLCJtZXRhVHlwZUZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFjQTs7O2VBQUE7OztnQ0Fad0I7a0VBRUg7eUJBR0s7MkJBQ0c7c0JBQ1U7NkJBQ0M7dUJBQzBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFHbEUsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxxQkFBcUJDLHVCQUFPO0lBQ3RELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxRQUFRLENBQUU7UUFDdkQsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFFBQVEsR0FBR0E7SUFDbEI7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDSCxJQUFJO0lBQ2xCO0lBRUFJLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0gsSUFBSTtJQUNsQjtJQUVBSSxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNILFFBQVE7SUFDdEI7SUFFQUksUUFBUUwsSUFBSSxFQUFFO1FBQ1osSUFBSSxDQUFDQSxJQUFJLEdBQUdBO0lBQ2Q7SUFFQU0sWUFBWUwsUUFBUSxFQUFFO1FBQ3BCLElBQUksQ0FBQ0EsUUFBUSxHQUFHQTtJQUNsQjtJQUVBTSxzQkFBc0I7UUFDcEIsTUFBTVQsT0FBTyxJQUFJLENBQUNVLE9BQU8sSUFDbkJDLG1CQUFtQlgsTUFBTyxHQUFHO1FBRW5DLE9BQU9XO0lBQ1Q7SUFFQUMsc0JBQXNCO1FBQ3BCLE1BQU1ELG1CQUFtQixJQUFJLENBQUNGLG1CQUFtQixJQUMzQ0ksbUJBQW1CRixpQkFBaUJDLG1CQUFtQjtRQUU3RCxPQUFPQztJQUNUO0lBRUFDLFFBQVFDLFlBQVksRUFBRTtRQUNwQixNQUFNRixtQkFBbUJFLGFBQWFYLE9BQU8sSUFDdkNZLDZCQUE2QixJQUFJLENBQUNDLHVCQUF1QixDQUFDSixtQkFDMURLLHlCQUF5QkYsNEJBQTZCLEdBQUc7UUFFL0QsT0FBT0U7SUFDVDtJQUVBQyxrQkFBa0JoQixRQUFRLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQ0EsUUFBUSxDQUFDaUIsU0FBUyxDQUFDakI7SUFBVztJQUV4RWMsd0JBQXdCSixnQkFBZ0IsRUFBRTtRQUN4QyxNQUFNUSx1QkFBd0IsSUFBSSxDQUFDcEIsSUFBSSxLQUFLWSxrQkFDdENHLDZCQUE2Qkssc0JBQXVCLEdBQUc7UUFFN0QsT0FBT0w7SUFDVDtJQUVBTSxzQkFBc0JDLGdCQUFnQixFQUFFO1FBQ3RDLE1BQU1DLG9CQUFvQkQsa0JBQWtCLEdBQUc7UUFFL0NBLG1CQUFtQixJQUFJLENBQUNkLG1CQUFtQixJQUFLLEdBQUc7UUFFbkQsTUFBTWdCLG9CQUFvQkYsa0JBQ3BCRyw0Q0FBNENGLGtCQUFrQkcsS0FBSyxDQUFDRixvQkFDcEVHLDBCQUEwQkYsMkNBQTRDLEdBQUc7UUFFL0UsT0FBT0U7SUFDVDtJQUVBQyxTQUFTL0IsT0FBTyxFQUFFO1FBQ2hCLElBQUlnQyxZQUFZO1FBRWhCLE1BQU1DLHFCQUFxQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRWhEbEMsUUFBUW1DLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRixtQkFBbUIsaUJBQWlCLENBQUM7UUFFdEUsTUFBTWhCLGVBQWUsSUFBSSxFQUNuQm1CLHNCQUFzQnBDLFFBQVFxQyxxQkFBcUIsQ0FBQ3BCO1FBRTFELElBQUltQixxQkFBcUI7WUFDdkJKLFlBQVk7UUFDZDtRQUVBLElBQUlBLFdBQVc7WUFDYmhDLFFBQVFzQyxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUwsbUJBQW1CLGVBQWUsQ0FBQztRQUN4RTtRQUVBLE9BQU9EO0lBQ1Q7SUFFQU8sc0JBQXNCbEMsUUFBUSxFQUFFTCxPQUFPLEVBQUU7UUFDdkMsSUFBSXdDLHlCQUF5QjtRQUU3QixNQUFNQyxpQkFBaUJwQyxTQUFTNkIsU0FBUyxJQUNuQ0QscUJBQXFCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFakRsQyxRQUFRbUMsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLG1CQUFtQiwwQkFBMEIsRUFBRVEsZUFBZSxjQUFjLENBQUM7UUFFOUcsSUFBSXhCLGVBQWUsSUFBSSxFQUFHLEdBQUc7UUFFN0JBLGVBQWVqQixRQUFRMEMsZ0JBQWdCLENBQUN6QjtRQUV4QyxJQUFJQSxpQkFBaUIsTUFBTTtZQUN6QixNQUFNMEIsc0NBQXNDMUIsYUFBYUksaUJBQWlCLENBQUNoQjtZQUUzRSxJQUFJc0MscUNBQXFDO2dCQUN2Q0gseUJBQXlCO1lBQzNCO1FBQ0Y7UUFFQSxJQUFJQSx3QkFBd0I7WUFDMUJ4QyxRQUFRc0MsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVMLG1CQUFtQiwwQkFBMEIsRUFBRVEsZUFBZSxZQUFZLENBQUM7UUFDaEg7UUFFQSxPQUFPRDtJQUNUO0lBRUFJLFdBQVdDLEtBQUssRUFBRUMsY0FBYyxFQUFFQyxlQUFlLEVBQUU7UUFDakQsSUFBSUMsZUFBZTtRQUVuQixNQUFNaEQsVUFBVStDLGlCQUNWRSxjQUFjSixNQUFNWCxTQUFTLElBQzdCRCxxQkFBcUIsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUVoRGxDLFFBQVFtQyxLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUVjLFlBQVksa0JBQWtCLEVBQUVoQixtQkFBbUIsaUJBQWlCLENBQUM7UUFFcEcsTUFBTWlCLDJCQUEyQixJQUFJLENBQUNDLHNCQUFzQixDQUFDTixPQUFPQyxnQkFBZ0JDO1FBRXBGLElBQUlHLDBCQUEwQjtZQUM1QkYsZUFBZTtRQUNqQixPQUFPO1lBQ0wsTUFBTWpDLG1CQUFtQixJQUFJLENBQUNELG1CQUFtQixJQUMzQ3NDLHFCQUFxQnBELFFBQVFxRCx3Q0FBd0MsQ0FBQ3RDO1lBRTVFLElBQUlxQyx1QkFBdUIsTUFBTTtnQkFDL0IsTUFBTUUsZUFBZUYsb0JBQ2ZHLGdDQUFnQ0QsYUFBYUUsbUJBQW1CLENBQUNYO2dCQUV2RSxJQUFJVSwrQkFBK0I7b0JBQ2pDUCxlQUFlO2dCQUNqQjtZQUNGLE9BQU87Z0JBQ0wsTUFBTSxFQUFFUyxpQkFBaUIsRUFBRSxHQUFHQyxpQkFBUSxFQUNoQ3pDLGVBQWUsSUFBSSxFQUFFLEdBQUc7Z0JBRTlCLElBQUkwQztnQkFFSkEsb0JBQW9CRixrQkFBa0JHLHdCQUF3QixDQUFDZixPQUFPNUIsY0FBY2pCO2dCQUVwRjJELG9CQUFvQkEsa0JBQWtCNUIsUUFBUSxDQUFDZSxnQkFBZ0JDLGtCQUFtQixHQUFHO2dCQUVyRixJQUFJWSxzQkFBc0IsTUFBTTtvQkFDOUJYLGVBQWU7Z0JBQ2pCO1lBQ0Y7UUFDRjtRQUVBLElBQUlBLGNBQWM7WUFDaEJoRCxRQUFRc0MsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVXLFlBQVksa0JBQWtCLEVBQUVoQixtQkFBbUIsZUFBZSxDQUFDO1FBQ3RHO1FBRUEsT0FBT2U7SUFDVDtJQUVBYSxlQUFlQyxTQUFTLEVBQUVSLFlBQVksRUFBRVIsY0FBYyxFQUFFQyxlQUFlLEVBQUU7UUFDdkUsSUFBSWdCLG1CQUFtQjtRQUV2QixNQUFNL0QsVUFBVStDLGlCQUNWaUIsa0JBQWtCRixVQUFVNUIsU0FBUyxJQUNyQ0QscUJBQXFCLElBQUksQ0FBQ0MsU0FBUyxJQUNuQytCLHFCQUFxQixBQUFDWCxpQkFBaUIsT0FDZkEsYUFBYXBCLFNBQVMsS0FDcEJnQyx1QkFBWTtRQUk1Q2xFLFFBQVFtQyxLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUU2QixnQkFBZ0Isc0JBQXNCLEVBQUUvQixxQkFBcUJnQyxtQkFBbUIsaUJBQWlCLENBQUM7UUFFakksTUFBTWhELGVBQWUsSUFBSSxFQUNuQmtELCtCQUErQixJQUFJLENBQUNDLDBCQUEwQixDQUFDTixXQUFXaEIsZ0JBQWdCQztRQUVoRyxJQUFJb0IsOEJBQThCO1lBQ2hDSixtQkFBbUI7UUFDckIsT0FBTztZQUNMLE1BQU1oRCxtQkFBbUJFLGFBQWFYLE9BQU8sSUFDdkMrRCxzQkFBc0IsQUFBQ2YsaUJBQWlCLE9BQ2hCdEQsUUFBUXNFLHNEQUFzRCxDQUFDdkQsa0JBQWtCdUMsZ0JBQy9FdEQsUUFBUXVFLGtDQUFrQyxDQUFDeEQ7WUFFM0UsSUFBSXNELHFCQUFxQjtnQkFDdkJmLGVBQWUsQUFBQ0EsaUJBQWlCLE9BQ2hCdEQsUUFBUXdFLGlEQUFpRCxDQUFDekQsa0JBQWtCdUMsZ0JBQzFFdEQsUUFBUXVFLGtDQUFrQyxDQUFDeEQ7Z0JBRTlELE1BQU0wRCxrQ0FBa0NuQixhQUFhb0IsZ0JBQWdCLENBQUNaLFdBQVc5RDtnQkFFakYsSUFBSXlFLGlDQUFpQztvQkFDbkNWLG1CQUFtQjtnQkFDckI7WUFDRixPQUFPO2dCQUNMLE1BQU0sRUFBRVkscUJBQXFCLEVBQUUsR0FBR2pCLGlCQUFRO2dCQUUxQyxJQUFJa0I7Z0JBRUpBLHdCQUF3QixBQUFDdEIsaUJBQWlCLE9BQ2hCcUIsc0JBQXNCRSx3Q0FBd0MsQ0FBQ2YsV0FBVzdDLGNBQWNxQyxjQUFjdEQsV0FDcEcyRSxzQkFBc0JHLDRCQUE0QixDQUFDaEIsV0FBVzdDLGNBQWNqQjtnQkFFeEcsSUFBSXNELGlCQUFpQixNQUFNO29CQUN6QixNQUFNdEQsVUFBVThDLGdCQUFnQixHQUFHO29CQUVuQ1EsZUFBZXNCLHNCQUFzQkcsZUFBZTtvQkFFcER6QixhQUFhMEIsVUFBVSxDQUFDaEY7Z0JBQzFCO2dCQUVBNEUsd0JBQXdCQSxzQkFBc0I3QyxRQUFRLENBQUNlLGdCQUFnQkMsa0JBQW1CLEdBQUc7Z0JBRTdGLElBQUk2QiwwQkFBMEIsTUFBTTtvQkFDbENiLG1CQUFtQjtnQkFDckI7WUFDRjtRQUNGO1FBRUEsSUFBSUEsa0JBQWtCO1lBQ3BCL0QsUUFBUXNDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFMEIsZ0JBQWdCLHNCQUFzQixFQUFFL0IscUJBQXFCZ0MsbUJBQW1CLGVBQWUsQ0FBQztRQUNuSTtRQUVBLE9BQU9GO0lBQ1Q7SUFFQWtCLGVBQWVDLFNBQVMsRUFBRXBDLGNBQWMsRUFBRUMsZUFBZSxFQUFFO1FBQ3pELElBQUlvQyxtQkFBbUI7UUFFdkIsTUFBTW5GLFVBQVUrQyxpQkFDVnFDLGtCQUFrQkYsVUFBVWhELFNBQVMsSUFDckNELHFCQUFxQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRWhEbEMsUUFBUW1DLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRWlELGdCQUFnQixzQkFBc0IsRUFBRW5ELG1CQUFtQixpQkFBaUIsQ0FBQztRQUU1RyxNQUFNb0QsK0JBQStCLElBQUksQ0FBQ0MsMEJBQTBCLENBQUNKLFdBQVdwQyxnQkFBZ0JDO1FBRWhHLElBQUlzQyw4QkFBOEI7WUFDaENGLG1CQUFtQjtRQUNyQixPQUFPO1lBQ0wsTUFBTXBFLG1CQUFtQixJQUFJLENBQUNELG1CQUFtQixJQUMzQ3lFLDRCQUE0QnZGLFFBQVF3Riw2Q0FBNkMsQ0FBQ3pFO1lBRXhGLElBQUl3RSwyQkFBMkI7Z0JBQzdCLE1BQU1uQyxxQkFBcUJwRCxRQUFRcUQsd0NBQXdDLENBQUN0QyxtQkFDdEV1QyxlQUFlRixvQkFDZnFDLHdDQUF3Q25DLGFBQWFvQywyQkFBMkIsQ0FBQ1I7Z0JBRXZGLElBQUlPLHVDQUF1QztvQkFDekNOLG1CQUFtQjtnQkFDckI7WUFDRixPQUFPO2dCQUNMLE1BQU0sRUFBRVEscUJBQXFCLEVBQUUsR0FBR2pDLGlCQUFRLEVBQ3BDekMsZUFBZSxJQUFJLEVBQUUsR0FBRztnQkFFOUIsSUFBSTJFO2dCQUVKQSx3QkFBd0JELHNCQUFzQkUsNEJBQTRCLENBQUNYLFdBQVdqRSxjQUFjakI7Z0JBRXBHNEYsd0JBQXdCQSxzQkFBc0I3RCxRQUFRLENBQUNlLGdCQUFnQkMsa0JBQW1CLEdBQUc7Z0JBRTdGLElBQUk2QywwQkFBMEIsTUFBTTtvQkFDbENULG1CQUFtQjtnQkFFckI7WUFDRjtRQUNGO1FBRUEsSUFBSUEsa0JBQWtCO1lBQ3BCbkYsUUFBUXNDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFOEMsZ0JBQWdCLHNCQUFzQixFQUFFbkQsbUJBQW1CLGVBQWUsQ0FBQztRQUM5RztRQUVBLE9BQU9rRDtJQUNUO0lBRUFXLGtCQUFrQjdFLFlBQVksRUFBRWpCLE9BQU8sRUFBRTtRQUN2QyxJQUFJK0Y7UUFFSixNQUFNaEQsa0JBQWtCL0MsU0FBUyxHQUFHO1FBRXBDQSxVQUFVLElBQUksQ0FBQ2dHLFVBQVU7UUFFekIsTUFBTWxELGlCQUFpQjlDLFNBQVUsR0FBRztRQUVwQ0EsVUFBVStDLGlCQUFrQixHQUFHO1FBRS9CLE1BQU1rRCxzQkFBc0IsSUFBSSxFQUMxQkMsdUJBQXVCakYsY0FDdkJrRiw0QkFBNEJGLG9CQUFvQi9ELFNBQVMsSUFDekRrRSw2QkFBNkJGLHFCQUFxQmhFLFNBQVM7UUFFakVsQyxRQUFRbUMsS0FBSyxDQUFDLENBQUMsY0FBYyxFQUFFaUUsMkJBQTJCLHlCQUF5QixFQUFFRCwwQkFBMEIsaUJBQWlCLENBQUM7UUFFaklKLHNCQUFzQkQsSUFBQUEsd0JBQWlCLEVBQUNHLHFCQUFxQkMsc0JBQXNCcEQsZ0JBQWdCQztRQUVuRyxJQUFJZ0QscUJBQXFCO1lBQ3ZCL0YsUUFBUXNDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFOEQsMkJBQTJCLHlCQUF5QixFQUFFRCwwQkFBMEIsZUFBZSxDQUFDO1FBQ25JO1FBRUEsT0FBT0o7SUFDVDtJQUVBNUMsdUJBQXVCTixLQUFLLEVBQUVDLGNBQWMsRUFBRUMsZUFBZSxFQUFFO1FBQzdELElBQUlHLDJCQUEyQjtRQUUvQixNQUFNbEQsVUFBVStDLGlCQUNWRSxjQUFjSixNQUFNWCxTQUFTLElBQzdCRCxxQkFBcUIsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUVqRGxDLFFBQVFtQyxLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUVjLFlBQVksaUNBQWlDLEVBQUVoQixtQkFBbUIsaUJBQWlCLENBQUM7UUFFbkgsTUFBTW9FLHlCQUF5QnZELGVBQWV3RCxXQUFXLElBQ25EQywwQkFBMEJ4RCxnQkFBZ0J1RCxXQUFXO1FBRTNELElBQUlELDJCQUEyQkUseUJBQXlCO1lBQ3RELE1BQU14RixtQkFBbUIsSUFBSSxDQUFDRCxtQkFBbUIsSUFDM0MwRix5Q0FBeUMzRCxNQUFNMUIsdUJBQXVCLENBQUNKO1lBRTdFLElBQUl5Rix3Q0FBd0M7Z0JBQzFDdEQsMkJBQTJCO1lBQzdCLE9BQU87Z0JBQ0wsTUFBTXVELGdCQUFnQjVELE1BQU02RCxVQUFVO2dCQUV0QyxJQUFJRCxlQUFlO29CQUNqQixNQUFNRSx3QkFBd0I5RCxNQUFNL0IsbUJBQW1CLElBQ2pEOEYsb0JBQW9CNUcsUUFBUTZHLGtDQUFrQyxDQUFDRix3QkFDL0RWLHNCQUFzQixJQUFJLEVBQzFCQyx1QkFBdUJVLG1CQUN2QkUsbUNBQW1DQyxJQUFBQSxxQ0FBOEIsRUFBQ2QscUJBQXFCQyxzQkFBc0JwRCxnQkFBZ0JDO29CQUVuSUcsMkJBQTJCNEQsa0NBQWtDLEdBQUc7Z0JBQ2xFO1lBQ0Y7UUFDRjtRQUVBLElBQUk1RCwwQkFBMEI7WUFDNUJsRCxRQUFRc0MsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVXLFlBQVksaUNBQWlDLEVBQUVoQixtQkFBbUIsZUFBZSxDQUFDO1FBQ3JIO1FBRUEsT0FBT2lCO0lBQ1Q7SUFFQW9DLDJCQUEyQkosU0FBUyxFQUFFcEMsY0FBYyxFQUFFQyxlQUFlLEVBQUU7UUFDckUsSUFBSXNDLCtCQUErQjtRQUVuQyxNQUFNckYsVUFBVStDLGlCQUNWcUMsa0JBQWtCRixVQUFVaEQsU0FBUyxJQUNyQ0QscUJBQXFCLElBQUksQ0FBQ0MsU0FBUztRQUV6Q2xDLFFBQVFtQyxLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUVpRCxnQkFBZ0IscUNBQXFDLEVBQUVuRCxtQkFBbUIsaUJBQWlCLENBQUM7UUFFM0gsTUFBTW9FLHlCQUF5QnZELGVBQWV3RCxXQUFXLElBQ25EQywwQkFBMEJ4RCxnQkFBZ0J1RCxXQUFXO1FBRTNELElBQUlELDJCQUEyQkUseUJBQXlCO1lBQ3RELE1BQU10RixlQUFlLElBQUksRUFDbkIrRiw2Q0FBNkM5QixVQUFVK0IsbUJBQW1CLENBQUNoRztZQUVqRixJQUFJK0YsNENBQTRDO2dCQUM5QzNCLCtCQUErQjtZQUNqQyxPQUFPO2dCQUNMLE1BQU02Qix3QkFBd0JoQyxVQUFVaUMsZUFBZSxJQUNqRGxCLHNCQUFzQixJQUFJLEVBQzFCQyx1QkFBdUJnQix1QkFDdkJKLG1DQUFtQ0MsSUFBQUEscUNBQThCLEVBQUNkLHFCQUFxQkMsc0JBQXNCcEQsZ0JBQWdCQztnQkFFbklzQywrQkFBK0J5QixrQ0FBa0MsR0FBRztZQUN0RTtRQUNGO1FBRUEsSUFBSXpCLDhCQUE4QjtZQUNoQ3JGLFFBQVFtQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRWlELGdCQUFnQixxQ0FBcUMsRUFBRW5ELG1CQUFtQixlQUFlLENBQUM7UUFDN0g7UUFFQSxPQUFPb0Q7SUFDVDtJQUVBakIsMkJBQTJCTixTQUFTLEVBQUVoQixjQUFjLEVBQUVDLGVBQWUsRUFBRTtRQUNyRSxJQUFJb0IsK0JBQStCO1FBRW5DLE1BQU1uRSxVQUFVK0MsaUJBQ1ZpQixrQkFBa0JGLFVBQVU1QixTQUFTLElBQ3JDRCxxQkFBcUIsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUVqRGxDLFFBQVFtQyxLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUU2QixnQkFBZ0IscUNBQXFDLEVBQUUvQixtQkFBbUIsaUJBQWlCLENBQUM7UUFFM0gsTUFBTW9FLHlCQUF5QnZELGVBQWV3RCxXQUFXLElBQ25EQywwQkFBMEJ4RCxnQkFBZ0J1RCxXQUFXO1FBRTNELElBQUlELDJCQUEyQkUseUJBQXlCO1lBQ3RELE1BQU10RixlQUFlLElBQUksRUFDbkJtRyw2Q0FBNkN0RCxVQUFVbUQsbUJBQW1CLENBQUNoRztZQUVqRixJQUFJbUcsNENBQTRDO2dCQUM5Q2pELCtCQUErQjtZQUNqQyxPQUFPO2dCQUNMLE1BQU1rRCxvQkFBb0J2RCxVQUFVNEMsVUFBVTtnQkFFOUMsSUFBSVcsbUJBQW1CO29CQUNyQixNQUFNQyw0QkFBNEJ4RCxVQUFVaEQsbUJBQW1CLElBQ3pEeUcsd0JBQXdCdkgsUUFBUTZHLGtDQUFrQyxDQUFDUyw0QkFDbkVyQixzQkFBc0IsSUFBSSxFQUMxQkMsdUJBQXVCcUIsdUJBQ3ZCVCxtQ0FBbUNDLElBQUFBLHFDQUE4QixFQUFDZCxxQkFBcUJDLHNCQUFzQnBELGdCQUFnQkM7b0JBRW5Jb0IsK0JBQStCMkMsa0NBQWtDLEdBQUc7Z0JBQ3RFO1lBQ0Y7UUFDRjtRQUVBLElBQUkzQyw4QkFBOEI7WUFDaENuRSxRQUFRc0MsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUwQixnQkFBZ0IscUNBQXFDLEVBQUUvQixtQkFBbUIsZUFBZSxDQUFDO1FBQzdIO1FBRUEsT0FBT2tDO0lBQ1Q7SUFFQXFELFNBQVM7UUFDUCxNQUFNQyxXQUFXQyxJQUFBQSxvQkFBYyxFQUFDLElBQUksQ0FBQ3RILElBQUksR0FDbkN1SCxXQUFXQyxJQUFBQSxvQkFBYyxFQUFDLElBQUksQ0FBQ3pILElBQUksR0FDbkMwSCxlQUFlQyxJQUFBQSw0QkFBc0IsRUFBQyxJQUFJLENBQUN6SCxRQUFRLEdBQ25ERixPQUFPd0gsVUFDUHZILE9BQU9xSCxVQUNQcEgsV0FBV3dILGNBQ1g1SCxTQUFTLElBQUksQ0FBQ2lDLFNBQVMsSUFDdkI2RixPQUFPO1lBQ0w5SDtZQUNBRTtZQUNBQztZQUNBQztRQUNGO1FBRU4sT0FBTzBIO0lBQ1Q7SUFFQSxPQUFPNUgsT0FBTyxlQUFlO0lBRTdCLE9BQU82SCxTQUFTRCxJQUFJLEVBQUUvSCxPQUFPLEVBQUU7UUFDN0IsTUFBTWlCLGVBQWVnSCxJQUFBQSxrQkFBUyxFQUFDLENBQUNqSTtZQUM5QixNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHOEgsTUFDYnRHLG1CQUFtQnlHLElBQUFBLG9DQUF1QixFQUFDakksUUFBUUQsVUFDbkRFLE9BQU91QixrQkFDUHRCLE9BQU9nSSxJQUFBQSxrQkFBWSxFQUFDSixNQUFNL0gsVUFDMUJJLE9BQU9nSSxJQUFBQSxrQkFBWSxFQUFDTCxNQUFNL0gsVUFDMUJLLFdBQVdnSSxJQUFBQSxzQkFBZ0IsRUFBQ04sTUFBTS9ILFVBQ2xDaUIsZUFBZSxJQUFJbkIsYUFBYUUsU0FBU0MsUUFBUUMsTUFBTUMsTUFBTUMsTUFBTUM7WUFFekUsT0FBT1k7UUFFVCxHQUFHakI7UUFFSCxPQUFPaUI7SUFDVDtBQUNGIn0=