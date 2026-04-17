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
const _instantiate = require("../process/instantiate");
const _string = require("../utilities/string");
const _element = require("../utilities/element");
const _json = require("../utilities/json");
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
const _default = (0, _elements.define)(class Variable extends _occamlanguages.Element {
    constructor(context, string, node, lineIndex, type, identifier, provisional){
        super(context, string, node, lineIndex);
        this.type = type;
        this.identifier = identifier;
        this.provisional = provisional;
    }
    getType() {
        return this.type;
    }
    getIdentifier() {
        return this.identifier;
    }
    isProvisional() {
        return this.provisional;
    }
    setType(type) {
        this.type = type;
    }
    setProvisional(provisional) {
        this.provisional = provisional;
    }
    getVariableNode() {
        const node = this.getNode(), variableNode = node; //
        return variableNode;
    }
    getTypeString() {
        return this.type.getString();
    }
    isEstablished() {
        const provisional = this.isProvisional(), established = !provisional;
        return established;
    }
    isIdentifierEqualTo(identifier) {
        const identifierEqualTo = this.identifier === identifier;
        return identifierEqualTo;
    }
    compareVariable(variable) {
        const variableIdentifier = variable.getIdentifier(), comparesToVariable = this.identifier === variableIdentifier;
        return comparesToVariable;
    }
    compareParamter(parameter) {
        const identifier = parameter.getIdentifier(), identifierEqualTo = this.isIdentifierEqualTo(identifier), comparesToParamter = identifierEqualTo; ///
        return comparesToParamter;
    }
    compareVariableIdentifier(variableIdentifier) {
        const identifier = variableIdentifier, identifierEqualTo = this.isIdentifierEqualTo(identifier), comparesToVariableIdentifier = identifierEqualTo; ///
        return comparesToVariableIdentifier;
    }
    validate(context) {
        let variable = null;
        const variableString = this.getString(); ///
        context.trace(`Validating the '${variableString}' variable...`);
        let validates = false;
        const variableIdentifier = this.identifier, declaredVariable = context.findDeclaredVariableByVariableIdentifier(variableIdentifier);
        if (declaredVariable !== null) {
            const type = declaredVariable.getType(), typeString = type.getString(), provisional = declaredVariable.isProvisional(), variableString = this.getString(), provisinallyString = (0, _string.provisionallyStringFromProvisional)(provisional);
            context.trace(`Setting the '${variableString}' variable's type to the '${typeString}' type${provisinallyString}.`);
            this.type = type;
            this.provisional = provisional;
            variable = this;
            validates = true;
        } else {
            context.debug(`The '${variableString}' variable is not present.`);
        }
        if (validates) {
            context.debug(`...validated the '${variableString}' variable.`);
        }
        return variable;
    }
    unifyTerm(term, generalContext, specificContext) {
        let termUnifies = false;
        const context = specificContext, termString = term.getString(), variableString = this.getString(); ///
        context.trace(`Unifying the '${termString}' term with the '${variableString}' variable...`);
        let variable, derivedSubstitution;
        variable = this; ///
        const variableNode = variable.getNode();
        derivedSubstitution = context.findDerivedSubstitutionByVariableNode(variableNode);
        if (derivedSubstitution !== null) {
            const derivedSubstitutionComparesToTerm = derivedSubstitution.compareTerm(term, context);
            if (derivedSubstitutionComparesToTerm) {
                const derivedSubstitutionString = derivedSubstitution.getString();
                context.trace(`The '${derivedSubstitutionString}' derived substitution is already present.`);
                termUnifies = true;
            }
        } else {
            let context;
            context = generalContext; ///
            const variableNode = variable.getNode();
            variable = context.findVariableByVariableNode(variableNode);
            context = specificContext; ///
            const termNode = term.getNode();
            term = context.findTermByTermNode(termNode);
            const termType = term.getType(), variableType = variable.getType(), termTypeEqualToOrSubTypeOfVariableType = termType.isEqualToOrSubTypeOf(variableType);
            if (termTypeEqualToOrSubTypeOfVariableType) {
                const { TermSubstitution } = _elements.default;
                let termSubstitution;
                termSubstitution = TermSubstitution.fromTermAndVariable(term, variable, generalContext, specificContext);
                termSubstitution = termSubstitution.validate(context); ///
                const derivedSubstitution = termSubstitution; ///
                context.addDerivedSubstitution(derivedSubstitution);
                termUnifies = true;
            }
        }
        if (termUnifies) {
            context.debug(`...unified the '${termString}' term with the '${variableString}' variable.`);
        }
        return termUnifies;
    }
    toJSON() {
        const typeJSON = (0, _json.typeToTypeJSON)(this.type), provisionalJSON = (0, _json.provisionalToProvisionalJSON)(this.provisional), string = this.getString(), lineIndex = this.getLineIndex(), type = typeJSON, provisional = provisionalJSON, json = {
            string,
            lineIndex,
            type,
            provisional
        };
        return json;
    }
    static name = "Variable";
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string, lineIndex } = json, variableNode = (0, _instantiate.instantiateVariable)(string, context), node = variableNode, type = (0, _json.typeFromJSON)(json, context), identifier = (0, _element.identifierFromVariableNode)(variableNode, context), provisional = (0, _json.provisionalFromJSON)(json, context);
            context = null;
            const variable = new Variable(context, string, node, lineIndex, type, identifier, provisional);
            return variable;
        }, context);
    }
    static fromTerm(term, context) {
        const termNode = term.getNode(), variable = (0, _element.variableFromTermNode)(termNode, context);
        return variable;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlVmFyaWFibGUgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgcHJvdmlzaW9uYWxseVN0cmluZ0Zyb21Qcm92aXNpb25hbCB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyB2YXJpYWJsZUZyb21UZXJtTm9kZSwgaWRlbnRpZmllckZyb21WYXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04sIHByb3Zpc2lvbmFsRnJvbUpTT04sIHByb3Zpc2lvbmFsVG9Qcm92aXNpb25hbEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFZhcmlhYmxlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0eXBlLCBpZGVudGlmaWVyLCBwcm92aXNpb25hbCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgICB0aGlzLnByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWw7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmlkZW50aWZpZXI7XG4gIH1cblxuICBpc1Byb3Zpc2lvbmFsKCkge1xuICAgIHJldHVybiB0aGlzLnByb3Zpc2lvbmFsO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIHNldFByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKSB7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBub2RlOyAgLy9cblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRUeXBlU3RyaW5nKCkgeyByZXR1cm4gdGhpcy50eXBlLmdldFN0cmluZygpOyB9XG5cbiAgaXNFc3RhYmxpc2hlZCgpIHtcbiAgICBjb25zdCBwcm92aXNpb25hbCA9IHRoaXMuaXNQcm92aXNpb25hbCgpLFxuICAgICAgICAgIGVzdGFibGlzaGVkID0gIXByb3Zpc2lvbmFsO1xuXG4gICAgcmV0dXJuIGVzdGFibGlzaGVkO1xuICB9XG5cbiAgaXNJZGVudGlmaWVyRXF1YWxUbyhpZGVudGlmaWVyKSB7XG4gICAgY29uc3QgaWRlbnRpZmllckVxdWFsVG8gPSAodGhpcy5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKTtcblxuICAgIHJldHVybiBpZGVudGlmaWVyRXF1YWxUbztcbiAgfVxuXG4gIGNvbXBhcmVWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlLmdldElkZW50aWZpZXIoKSxcbiAgICAgICAgICBjb21wYXJlc1RvVmFyaWFibGUgPSAodGhpcy5pZGVudGlmaWVyID09PSB2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9WYXJpYWJsZTtcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbXRlcihwYXJhbWV0ZXIpIHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gcGFyYW1ldGVyLmdldElkZW50aWZpZXIoKSxcbiAgICAgICAgICBpZGVudGlmaWVyRXF1YWxUbyA9IHRoaXMuaXNJZGVudGlmaWVyRXF1YWxUbyhpZGVudGlmaWVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW10ZXIgPSBpZGVudGlmaWVyRXF1YWxUbzsgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtdGVyO1xuICB9XG5cbiAgY29tcGFyZVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gdmFyaWFibGVJZGVudGlmaWVyLCAvLy9cbiAgICAgICAgICBpZGVudGlmaWVyRXF1YWxUbyA9IHRoaXMuaXNJZGVudGlmaWVyRXF1YWxUbyhpZGVudGlmaWVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyID0gaWRlbnRpZmllckVxdWFsVG87IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXI7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB0aGlzLmlkZW50aWZpZXIsIC8vL1xuICAgICAgICAgIGRlY2xhcmVkVmFyaWFibGUgPSBjb250ZXh0LmZpbmREZWNsYXJlZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgIGlmIChkZWNsYXJlZFZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gZGVjbGFyZWRWYXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0eXBlU3RyaW5nID0gdHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsID0gZGVjbGFyZWRWYXJpYWJsZS5pc1Byb3Zpc2lvbmFsKCksXG4gICAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICAgIHByb3Zpc2luYWxseVN0cmluZyA9IHByb3Zpc2lvbmFsbHlTdHJpbmdGcm9tUHJvdmlzaW9uYWwocHJvdmlzaW9uYWwpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBTZXR0aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlJ3MgdHlwZSB0byB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUke3Byb3Zpc2luYWxseVN0cmluZ30uYCk7XG5cbiAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgICAgIHRoaXMucHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbDtcblxuICAgICAgdmFyaWFibGUgPSB0aGlzO1xuXG4gICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgdW5pZnlUZXJtKHRlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdGVybVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGxldCB2YXJpYWJsZSxcbiAgICAgICAgZGVyaXZlZFN1YnN0aXR1dGlvbjtcblxuICAgIHZhcmlhYmxlID0gdGhpczsgLy8vXG5cbiAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZS5nZXROb2RlKCk7XG5cbiAgICBkZXJpdmVkU3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kRGVyaXZlZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAoZGVyaXZlZFN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGVyaXZlZFN1YnN0aXR1dGlvbkNvbXBhcmVzVG9UZXJtID0gZGVyaXZlZFN1YnN0aXR1dGlvbi5jb21wYXJlVGVybSh0ZXJtLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGRlcml2ZWRTdWJzdGl0dXRpb25Db21wYXJlc1RvVGVybSkge1xuICAgICAgICBjb25zdCBkZXJpdmVkU3Vic3RpdHV0aW9uU3RyaW5nID0gZGVyaXZlZFN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7ZGVyaXZlZFN1YnN0aXR1dGlvblN0cmluZ30nIGRlcml2ZWQgc3Vic3RpdHV0aW9uIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcblxuICAgICAgICB0ZXJtVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7ICAvLy9cblxuICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGUuZ2V0Tm9kZSgpO1xuXG4gICAgICB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpO1xuXG4gICAgICB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdmFyaWFibGVUeXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUgPSB0ZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih2YXJpYWJsZVR5cGUpO1xuXG4gICAgICBpZiAodGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUpIHtcbiAgICAgICAgY29uc3QgeyBUZXJtU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cztcblxuICAgICAgICBsZXQgdGVybVN1YnN0aXR1dGlvbjtcblxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gVGVybVN1YnN0aXR1dGlvbi5mcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbi52YWxpZGF0ZShjb250ZXh0KTsgIC8vL1xuXG4gICAgICAgIGNvbnN0IGRlcml2ZWRTdWJzdGl0dXRpb24gPSB0ZXJtU3Vic3RpdHV0aW9uOyAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZERlcml2ZWRTdWJzdGl0dXRpb24oZGVyaXZlZFN1YnN0aXR1dGlvbik7XG5cbiAgICAgICAgdGVybVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlVG9UeXBlSlNPTih0aGlzLnR5cGUpLFxuICAgICAgICAgIHByb3Zpc2lvbmFsSlNPTiA9IHByb3Zpc2lvbmFsVG9Qcm92aXNpb25hbEpTT04odGhpcy5wcm92aXNpb25hbCksXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgbGluZUluZGV4ID0gdGhpcy5nZXRMaW5lSW5kZXgoKSxcbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBwcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBsaW5lSW5kZXgsXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgcHJvdmlzaW9uYWxcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcsIGxpbmVJbmRleCB9ID0ganNvbixcbiAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IGluc3RhbnRpYXRlVmFyaWFibGUoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgICBpZGVudGlmaWVyID0gaWRlbnRpZmllckZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWxGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0eXBlLCBpZGVudGlmaWVyLCBwcm92aXNpb25hbCk7XG5cbiAgICAgIHJldHVybiB2YXJpYWJsZTtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybSh0ZXJtLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVmFyaWFibGUiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJ0eXBlIiwiaWRlbnRpZmllciIsInByb3Zpc2lvbmFsIiwiZ2V0VHlwZSIsImdldElkZW50aWZpZXIiLCJpc1Byb3Zpc2lvbmFsIiwic2V0VHlwZSIsInNldFByb3Zpc2lvbmFsIiwiZ2V0VmFyaWFibGVOb2RlIiwiZ2V0Tm9kZSIsInZhcmlhYmxlTm9kZSIsImdldFR5cGVTdHJpbmciLCJnZXRTdHJpbmciLCJpc0VzdGFibGlzaGVkIiwiZXN0YWJsaXNoZWQiLCJpc0lkZW50aWZpZXJFcXVhbFRvIiwiaWRlbnRpZmllckVxdWFsVG8iLCJjb21wYXJlVmFyaWFibGUiLCJ2YXJpYWJsZSIsInZhcmlhYmxlSWRlbnRpZmllciIsImNvbXBhcmVzVG9WYXJpYWJsZSIsImNvbXBhcmVQYXJhbXRlciIsInBhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbXRlciIsImNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIiLCJjb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyIiwidmFsaWRhdGUiLCJ2YXJpYWJsZVN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwiZGVjbGFyZWRWYXJpYWJsZSIsImZpbmREZWNsYXJlZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ0eXBlU3RyaW5nIiwicHJvdmlzaW5hbGx5U3RyaW5nIiwicHJvdmlzaW9uYWxseVN0cmluZ0Zyb21Qcm92aXNpb25hbCIsImRlYnVnIiwidW5pZnlUZXJtIiwidGVybSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidGVybVVuaWZpZXMiLCJ0ZXJtU3RyaW5nIiwiZGVyaXZlZFN1YnN0aXR1dGlvbiIsImZpbmREZXJpdmVkU3Vic3RpdHV0aW9uQnlWYXJpYWJsZU5vZGUiLCJkZXJpdmVkU3Vic3RpdHV0aW9uQ29tcGFyZXNUb1Rlcm0iLCJjb21wYXJlVGVybSIsImRlcml2ZWRTdWJzdGl0dXRpb25TdHJpbmciLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSIsInRlcm1Ob2RlIiwiZmluZFRlcm1CeVRlcm1Ob2RlIiwidGVybVR5cGUiLCJ2YXJpYWJsZVR5cGUiLCJ0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiVGVybVN1YnN0aXR1dGlvbiIsImVsZW1lbnRzIiwidGVybVN1YnN0aXR1dGlvbiIsImZyb21UZXJtQW5kVmFyaWFibGUiLCJhZGREZXJpdmVkU3Vic3RpdHV0aW9uIiwidG9KU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsInByb3Zpc2lvbmFsSlNPTiIsInByb3Zpc2lvbmFsVG9Qcm92aXNpb25hbEpTT04iLCJnZXRMaW5lSW5kZXgiLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVZhcmlhYmxlIiwidHlwZUZyb21KU09OIiwiaWRlbnRpZmllckZyb21WYXJpYWJsZU5vZGUiLCJwcm92aXNpb25hbEZyb21KU09OIiwiZnJvbVRlcm0iLCJ2YXJpYWJsZUZyb21UZXJtTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7Z0NBWHdCO2tFQUVIO3lCQUdPOzZCQUNRO3dCQUNlO3lCQUNjO3NCQUMrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BRWhHLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsaUJBQWlCQyx1QkFBTztJQUNsRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxXQUFXLENBQUU7UUFDM0UsS0FBSyxDQUFDTixTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO0lBQ3JCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0gsSUFBSTtJQUNsQjtJQUVBSSxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0gsVUFBVTtJQUN4QjtJQUVBSSxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0gsV0FBVztJQUN6QjtJQUVBSSxRQUFRTixJQUFJLEVBQUU7UUFDWixJQUFJLENBQUNBLElBQUksR0FBR0E7SUFDZDtJQUVBTyxlQUFlTCxXQUFXLEVBQUU7UUFDMUIsSUFBSSxDQUFDQSxXQUFXLEdB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