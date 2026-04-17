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
        const variable = this, termVariableUnifies = this.unifyTermVariable(term, generalContext, specificContext);
        if (termVariableUnifies) {
            termUnifies = true;
        } else {
            const variableNode = variable.getNode(), derivedSubstitution = context.findDerivedSubstitutionByVariableNode(variableNode);
            if (derivedSubstitution !== null) {
                const derivedSubstitutionTermComparesToTerm = derivedSubstitution.compareTerm(term, context);
                if (derivedSubstitutionTermComparesToTerm) {
                    const derivedSubstitutionString = derivedSubstitution.getString();
                    context.trace(`The '${derivedSubstitutionString}' derived substitution is already present.`);
                    termUnifies = true;
                }
            } else {
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
    unifyTermVariable(term, generalContext, specificContext) {
        let termVariableUnifies = false;
        const context = specificContext, termString = term.getString(), variableString = this.getString(); ///
        context.trace(`Unifying the '${termString}' term's variable with the '${variableString}' variable...`);
        const generalContextFilePath = generalContext.getFilePath(), specificContextFilePath = specificContext.getFilePath();
        if (generalContextFilePath === specificContextFilePath) {
            const variableNode = this.getVariableNode(), variableNodeMatches = term.matchVariableNode(variableNode);
            if (variableNodeMatches) {
                termVariableUnifies = true;
            }
        }
        if (termVariableUnifies) {
            context.debug(`...unified the '${termString}' term's variable with the '${variableString}' variable.`);
        }
        return termVariableUnifies;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlVmFyaWFibGUgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgcHJvdmlzaW9uYWxseVN0cmluZ0Zyb21Qcm92aXNpb25hbCB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyB2YXJpYWJsZUZyb21UZXJtTm9kZSwgaWRlbnRpZmllckZyb21WYXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04sIHByb3Zpc2lvbmFsRnJvbUpTT04sIHByb3Zpc2lvbmFsVG9Qcm92aXNpb25hbEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFZhcmlhYmxlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0eXBlLCBpZGVudGlmaWVyLCBwcm92aXNpb25hbCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgICB0aGlzLnByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWw7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmlkZW50aWZpZXI7XG4gIH1cblxuICBpc1Byb3Zpc2lvbmFsKCkge1xuICAgIHJldHVybiB0aGlzLnByb3Zpc2lvbmFsO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIHNldFByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKSB7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBub2RlOyAgLy9cblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRUeXBlU3RyaW5nKCkgeyByZXR1cm4gdGhpcy50eXBlLmdldFN0cmluZygpOyB9XG5cbiAgaXNFc3RhYmxpc2hlZCgpIHtcbiAgICBjb25zdCBwcm92aXNpb25hbCA9IHRoaXMuaXNQcm92aXNpb25hbCgpLFxuICAgICAgICAgIGVzdGFibGlzaGVkID0gIXByb3Zpc2lvbmFsO1xuXG4gICAgcmV0dXJuIGVzdGFibGlzaGVkO1xuICB9XG5cbiAgaXNJZGVudGlmaWVyRXF1YWxUbyhpZGVudGlmaWVyKSB7XG4gICAgY29uc3QgaWRlbnRpZmllckVxdWFsVG8gPSAodGhpcy5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKTtcblxuICAgIHJldHVybiBpZGVudGlmaWVyRXF1YWxUbztcbiAgfVxuXG4gIGNvbXBhcmVWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlLmdldElkZW50aWZpZXIoKSxcbiAgICAgICAgICBjb21wYXJlc1RvVmFyaWFibGUgPSAodGhpcy5pZGVudGlmaWVyID09PSB2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9WYXJpYWJsZTtcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbXRlcihwYXJhbWV0ZXIpIHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gcGFyYW1ldGVyLmdldElkZW50aWZpZXIoKSxcbiAgICAgICAgICBpZGVudGlmaWVyRXF1YWxUbyA9IHRoaXMuaXNJZGVudGlmaWVyRXF1YWxUbyhpZGVudGlmaWVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW10ZXIgPSBpZGVudGlmaWVyRXF1YWxUbzsgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtdGVyO1xuICB9XG5cbiAgY29tcGFyZVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gdmFyaWFibGVJZGVudGlmaWVyLCAvLy9cbiAgICAgICAgICBpZGVudGlmaWVyRXF1YWxUbyA9IHRoaXMuaXNJZGVudGlmaWVyRXF1YWxUbyhpZGVudGlmaWVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyID0gaWRlbnRpZmllckVxdWFsVG87IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXI7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB0aGlzLmlkZW50aWZpZXIsIC8vL1xuICAgICAgICAgIGRlY2xhcmVkVmFyaWFibGUgPSBjb250ZXh0LmZpbmREZWNsYXJlZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgIGlmIChkZWNsYXJlZFZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gZGVjbGFyZWRWYXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0eXBlU3RyaW5nID0gdHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsID0gZGVjbGFyZWRWYXJpYWJsZS5pc1Byb3Zpc2lvbmFsKCksXG4gICAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICAgIHByb3Zpc2luYWxseVN0cmluZyA9IHByb3Zpc2lvbmFsbHlTdHJpbmdGcm9tUHJvdmlzaW9uYWwocHJvdmlzaW9uYWwpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBTZXR0aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlJ3MgdHlwZSB0byB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUke3Byb3Zpc2luYWxseVN0cmluZ30uYCk7XG5cbiAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgICAgIHRoaXMucHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbDtcblxuICAgICAgdmFyaWFibGUgPSB0aGlzO1xuXG4gICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgdW5pZnlUZXJtKHRlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdGVybVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHRlcm1WYXJpYWJsZVVuaWZpZXMgPSB0aGlzLnVuaWZ5VGVybVZhcmlhYmxlKHRlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1WYXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIHRlcm1VbmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgZGVyaXZlZFN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZERlcml2ZWRTdWJzdGl0dXRpb25CeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAoZGVyaXZlZFN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBkZXJpdmVkU3Vic3RpdHV0aW9uVGVybUNvbXBhcmVzVG9UZXJtID0gZGVyaXZlZFN1YnN0aXR1dGlvbi5jb21wYXJlVGVybSh0ZXJtLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoZGVyaXZlZFN1YnN0aXR1dGlvblRlcm1Db21wYXJlc1RvVGVybSkge1xuICAgICAgICAgIGNvbnN0IGRlcml2ZWRTdWJzdGl0dXRpb25TdHJpbmcgPSBkZXJpdmVkU3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2Rlcml2ZWRTdWJzdGl0dXRpb25TdHJpbmd9JyBkZXJpdmVkIHN1YnN0aXR1dGlvbiBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG5cbiAgICAgICAgICB0ZXJtVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHsgVGVybVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHM7XG5cbiAgICAgICAgbGV0IHRlcm1TdWJzdGl0dXRpb247XG5cbiAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IFRlcm1TdWJzdGl0dXRpb24uZnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IHRlcm1TdWJzdGl0dXRpb24udmFsaWRhdGUoY29udGV4dCk7ICAvLy9cblxuICAgICAgICBjb25zdCBkZXJpdmVkU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkRGVyaXZlZFN1YnN0aXR1dGlvbihkZXJpdmVkU3Vic3RpdHV0aW9uKTtcblxuICAgICAgICB0ZXJtVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5VGVybVZhcmlhYmxlKHRlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdGVybVZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3MgdmFyaWFibGUgd2l0aCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9IGdlbmVyYWxDb250ZXh0LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0RmlsZVBhdGggPSBzcGVjaWZpY0NvbnRleHQuZ2V0RmlsZVBhdGgoKTtcblxuICAgIGlmIChnZW5lcmFsQ29udGV4dEZpbGVQYXRoID09PSBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCkge1xuICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdGhpcy5nZXRWYXJpYWJsZU5vZGUoKSwgIC8vL1xuICAgICAgICAgICAgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRlcm0ubWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKHZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgdGVybVZhcmlhYmxlVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRlcm1WYXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3MgdmFyaWFibGUgd2l0aCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGVUb1R5cGVKU09OKHRoaXMudHlwZSksXG4gICAgICAgICAgcHJvdmlzaW9uYWxKU09OID0gcHJvdmlzaW9uYWxUb1Byb3Zpc2lvbmFsSlNPTih0aGlzLnByb3Zpc2lvbmFsKSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBsaW5lSW5kZXggPSB0aGlzLmdldExpbmVJbmRleCgpLFxuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIHByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWxKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIGxpbmVJbmRleCxcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBwcm92aXNpb25hbFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYXJpYWJsZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gaW5zdGFudGlhdGVWYXJpYWJsZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGlkZW50aWZpZXIgPSBpZGVudGlmaWVyRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbEZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgY29uc3QgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHR5cGUsIGlkZW50aWZpZXIsIHByb3Zpc2lvbmFsKTtcblxuICAgICAgcmV0dXJuIHZhcmlhYmxlO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJtKHRlcm0sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJWYXJpYWJsZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsInR5cGUiLCJpZGVudGlmaWVyIiwicHJvdmlzaW9uYWwiLCJnZXRUeXBlIiwiZ2V0SWRlbnRpZmllciIsImlzUHJvdmlzaW9uYWwiLCJzZXRUeXBlIiwic2V0UHJvdmlzaW9uYWwiLCJnZXRWYXJpYWJsZU5vZGUiLCJnZXROb2RlIiwidmFyaWFibGVOb2RlIiwiZ2V0VHlwZVN0cmluZyIsImdldFN0cmluZyIsImlzRXN0YWJsaXNoZWQiLCJlc3RhYmxpc2hlZCIsImlzSWRlbnRpZmllckVxdWFsVG8iLCJpZGVudGlmaWVyRXF1YWxUbyIsImNvbXBhcmVWYXJpYWJsZSIsInZhcmlhYmxlIiwidmFyaWFibGVJZGVudGlmaWVyIiwiY29tcGFyZXNUb1ZhcmlhYmxlIiwiY29tcGFyZVBhcmFtdGVyIiwicGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtdGVyIiwiY29tcGFyZVZhcmlhYmxlSWRlbnRpZmllciIsImNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXIiLCJ2YWxpZGF0ZSIsInZhcmlhYmxlU3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJkZWNsYXJlZFZhcmlhYmxlIiwiZmluZERlY2xhcmVkVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInR5cGVTdHJpbmciLCJwcm92aXNpbmFsbHlTdHJpbmciLCJwcm92aXNpb25hbGx5U3RyaW5nRnJvbVByb3Zpc2lvbmFsIiwiZGVidWciLCJ1bmlmeVRlcm0iLCJ0ZXJtIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ0ZXJtVW5pZmllcyIsInRlcm1TdHJpbmciLCJ0ZXJtVmFyaWFibGVVbmlmaWVzIiwidW5pZnlUZXJtVmFyaWFibGUiLCJkZXJpdmVkU3Vic3RpdHV0aW9uIiwiZmluZERlcml2ZWRTdWJzdGl0dXRpb25CeVZhcmlhYmxlTm9kZSIsImRlcml2ZWRTdWJzdGl0dXRpb25UZXJtQ29tcGFyZXNUb1Rlcm0iLCJjb21wYXJlVGVybSIsImRlcml2ZWRTdWJzdGl0dXRpb25TdHJpbmciLCJUZXJtU3Vic3RpdHV0aW9uIiwiZWxlbWVudHMiLCJ0ZXJtU3Vic3RpdHV0aW9uIiwiZnJvbVRlcm1BbmRWYXJpYWJsZSIsImFkZERlcml2ZWRTdWJzdGl0dXRpb24iLCJnZW5lcmFsQ29udGV4dEZpbGVQYXRoIiwiZ2V0RmlsZVBhdGgiLCJzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCIsInZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaFZhcmlhYmxlTm9kZSIsInRvSlNPTiIsInR5cGVKU09OIiwidHlwZVRvVHlwZUpTT04iLCJwcm92aXNpb25hbEpTT04iLCJwcm92aXNpb25hbFRvUHJvdmlzaW9uYWxKU09OIiwiZ2V0TGluZUluZGV4IiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVWYXJpYWJsZSIsInR5cGVGcm9tSlNPTiIsImlkZW50aWZpZXJGcm9tVmFyaWFibGVOb2RlIiwicHJvdmlzaW9uYWxGcm9tSlNPTiIsImZyb21UZXJtIiwidGVybU5vZGUiLCJ2YXJpYWJsZUZyb21UZXJtTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7Z0NBWHdC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