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
        const typeJSON = (0, _json.typeToTypeJSON)(this.type), provisionalJSON = (0, _json.provisionalToProvisionalJSON)(this.provisional), string = this.getString(), lineIndex = this.getBreakPoint(), type = typeJSON, provisional = provisionalJSON, json = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlVmFyaWFibGUgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgcHJvdmlzaW9uYWxseVN0cmluZ0Zyb21Qcm92aXNpb25hbCB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyB2YXJpYWJsZUZyb21UZXJtTm9kZSwgaWRlbnRpZmllckZyb21WYXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04sIHByb3Zpc2lvbmFsRnJvbUpTT04sIHByb3Zpc2lvbmFsVG9Qcm92aXNpb25hbEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFZhcmlhYmxlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0eXBlLCBpZGVudGlmaWVyLCBwcm92aXNpb25hbCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgICB0aGlzLnByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWw7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmlkZW50aWZpZXI7XG4gIH1cblxuICBpc1Byb3Zpc2lvbmFsKCkge1xuICAgIHJldHVybiB0aGlzLnByb3Zpc2lvbmFsO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIHNldFByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKSB7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBub2RlOyAgLy9cblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRUeXBlU3RyaW5nKCkgeyByZXR1cm4gdGhpcy50eXBlLmdldFN0cmluZygpOyB9XG5cbiAgaXNFc3RhYmxpc2hlZCgpIHtcbiAgICBjb25zdCBwcm92aXNpb25hbCA9IHRoaXMuaXNQcm92aXNpb25hbCgpLFxuICAgICAgICAgIGVzdGFibGlzaGVkID0gIXByb3Zpc2lvbmFsO1xuXG4gICAgcmV0dXJuIGVzdGFibGlzaGVkO1xuICB9XG5cbiAgaXNJZGVudGlmaWVyRXF1YWxUbyhpZGVudGlmaWVyKSB7XG4gICAgY29uc3QgaWRlbnRpZmllckVxdWFsVG8gPSAodGhpcy5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKTtcblxuICAgIHJldHVybiBpZGVudGlmaWVyRXF1YWxUbztcbiAgfVxuXG4gIGNvbXBhcmVWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlLmdldElkZW50aWZpZXIoKSxcbiAgICAgICAgICBjb21wYXJlc1RvVmFyaWFibGUgPSAodGhpcy5pZGVudGlmaWVyID09PSB2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9WYXJpYWJsZTtcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbXRlcihwYXJhbWV0ZXIpIHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gcGFyYW1ldGVyLmdldElkZW50aWZpZXIoKSxcbiAgICAgICAgICBpZGVudGlmaWVyRXF1YWxUbyA9IHRoaXMuaXNJZGVudGlmaWVyRXF1YWxUbyhpZGVudGlmaWVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW10ZXIgPSBpZGVudGlmaWVyRXF1YWxUbzsgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtdGVyO1xuICB9XG5cbiAgY29tcGFyZVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gdmFyaWFibGVJZGVudGlmaWVyLCAvLy9cbiAgICAgICAgICBpZGVudGlmaWVyRXF1YWxUbyA9IHRoaXMuaXNJZGVudGlmaWVyRXF1YWxUbyhpZGVudGlmaWVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyID0gaWRlbnRpZmllckVxdWFsVG87IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXI7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB0aGlzLmlkZW50aWZpZXIsIC8vL1xuICAgICAgICAgIGRlY2xhcmVkVmFyaWFibGUgPSBjb250ZXh0LmZpbmREZWNsYXJlZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgIGlmIChkZWNsYXJlZFZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gZGVjbGFyZWRWYXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0eXBlU3RyaW5nID0gdHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsID0gZGVjbGFyZWRWYXJpYWJsZS5pc1Byb3Zpc2lvbmFsKCksXG4gICAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICAgIHByb3Zpc2luYWxseVN0cmluZyA9IHByb3Zpc2lvbmFsbHlTdHJpbmdGcm9tUHJvdmlzaW9uYWwocHJvdmlzaW9uYWwpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBTZXR0aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlJ3MgdHlwZSB0byB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUke3Byb3Zpc2luYWxseVN0cmluZ30uYCk7XG5cbiAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgICAgIHRoaXMucHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbDtcblxuICAgICAgdmFyaWFibGUgPSB0aGlzO1xuXG4gICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgdW5pZnlUZXJtKHRlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdGVybVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHRlcm1WYXJpYWJsZVVuaWZpZXMgPSB0aGlzLnVuaWZ5VGVybVZhcmlhYmxlKHRlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1WYXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIHRlcm1VbmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgZGVyaXZlZFN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZERlcml2ZWRTdWJzdGl0dXRpb25CeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAoZGVyaXZlZFN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBkZXJpdmVkU3Vic3RpdHV0aW9uVGVybUNvbXBhcmVzVG9UZXJtID0gZGVyaXZlZFN1YnN0aXR1dGlvbi5jb21wYXJlVGVybSh0ZXJtLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoZGVyaXZlZFN1YnN0aXR1dGlvblRlcm1Db21wYXJlc1RvVGVybSkge1xuICAgICAgICAgIGNvbnN0IGRlcml2ZWRTdWJzdGl0dXRpb25TdHJpbmcgPSBkZXJpdmVkU3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2Rlcml2ZWRTdWJzdGl0dXRpb25TdHJpbmd9JyBkZXJpdmVkIHN1YnN0aXR1dGlvbiBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG5cbiAgICAgICAgICB0ZXJtVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHsgVGVybVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHM7XG5cbiAgICAgICAgbGV0IHRlcm1TdWJzdGl0dXRpb247XG5cbiAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IFRlcm1TdWJzdGl0dXRpb24uZnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IHRlcm1TdWJzdGl0dXRpb24udmFsaWRhdGUoY29udGV4dCk7ICAvLy9cblxuICAgICAgICBjb25zdCBkZXJpdmVkU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkRGVyaXZlZFN1YnN0aXR1dGlvbihkZXJpdmVkU3Vic3RpdHV0aW9uKTtcblxuICAgICAgICB0ZXJtVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5VGVybVZhcmlhYmxlKHRlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdGVybVZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3MgdmFyaWFibGUgd2l0aCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9IGdlbmVyYWxDb250ZXh0LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0RmlsZVBhdGggPSBzcGVjaWZpY0NvbnRleHQuZ2V0RmlsZVBhdGgoKTtcblxuICAgIGlmIChnZW5lcmFsQ29udGV4dEZpbGVQYXRoID09PSBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCkge1xuICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdGhpcy5nZXRWYXJpYWJsZU5vZGUoKSwgIC8vL1xuICAgICAgICAgICAgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRlcm0ubWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKHZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgdGVybVZhcmlhYmxlVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRlcm1WYXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3MgdmFyaWFibGUgd2l0aCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGVUb1R5cGVKU09OKHRoaXMudHlwZSksXG4gICAgICAgICAgcHJvdmlzaW9uYWxKU09OID0gcHJvdmlzaW9uYWxUb1Byb3Zpc2lvbmFsSlNPTih0aGlzLnByb3Zpc2lvbmFsKSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBsaW5lSW5kZXggPSB0aGlzLmdldEJyZWFrUG9pbnQoKSxcbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBwcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBsaW5lSW5kZXgsXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgcHJvdmlzaW9uYWxcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcsIGxpbmVJbmRleCB9ID0ganNvbixcbiAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IGluc3RhbnRpYXRlVmFyaWFibGUoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgICBpZGVudGlmaWVyID0gaWRlbnRpZmllckZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWxGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0eXBlLCBpZGVudGlmaWVyLCBwcm92aXNpb25hbCk7XG5cbiAgICAgIHJldHVybiB2YXJpYWJsZTtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybSh0ZXJtLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVmFyaWFibGUiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJ0eXBlIiwiaWRlbnRpZmllciIsInByb3Zpc2lvbmFsIiwiZ2V0VHlwZSIsImdldElkZW50aWZpZXIiLCJpc1Byb3Zpc2lvbmFsIiwic2V0VHlwZSIsInNldFByb3Zpc2lvbmFsIiwiZ2V0VmFyaWFibGVOb2RlIiwiZ2V0Tm9kZSIsInZhcmlhYmxlTm9kZSIsImdldFR5cGVTdHJpbmciLCJnZXRTdHJpbmciLCJpc0VzdGFibGlzaGVkIiwiZXN0YWJsaXNoZWQiLCJpc0lkZW50aWZpZXJFcXVhbFRvIiwiaWRlbnRpZmllckVxdWFsVG8iLCJjb21wYXJlVmFyaWFibGUiLCJ2YXJpYWJsZSIsInZhcmlhYmxlSWRlbnRpZmllciIsImNvbXBhcmVzVG9WYXJpYWJsZSIsImNvbXBhcmVQYXJhbXRlciIsInBhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbXRlciIsImNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIiLCJjb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyIiwidmFsaWRhdGUiLCJ2YXJpYWJsZVN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwiZGVjbGFyZWRWYXJpYWJsZSIsImZpbmREZWNsYXJlZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ0eXBlU3RyaW5nIiwicHJvdmlzaW5hbGx5U3RyaW5nIiwicHJvdmlzaW9uYWxseVN0cmluZ0Zyb21Qcm92aXNpb25hbCIsImRlYnVnIiwidW5pZnlUZXJtIiwidGVybSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidGVybVVuaWZpZXMiLCJ0ZXJtU3RyaW5nIiwidGVybVZhcmlhYmxlVW5pZmllcyIsInVuaWZ5VGVybVZhcmlhYmxlIiwiZGVyaXZlZFN1YnN0aXR1dGlvbiIsImZpbmREZXJpdmVkU3Vic3RpdHV0aW9uQnlWYXJpYWJsZU5vZGUiLCJkZXJpdmVkU3Vic3RpdHV0aW9uVGVybUNvbXBhcmVzVG9UZXJtIiwiY29tcGFyZVRlcm0iLCJkZXJpdmVkU3Vic3RpdHV0aW9uU3RyaW5nIiwiVGVybVN1YnN0aXR1dGlvbiIsImVsZW1lbnRzIiwidGVybVN1YnN0aXR1dGlvbiIsImZyb21UZXJtQW5kVmFyaWFibGUiLCJhZGREZXJpdmVkU3Vic3RpdHV0aW9uIiwiZ2VuZXJhbENvbnRleHRGaWxlUGF0aCIsImdldEZpbGVQYXRoIiwic3BlY2lmaWNDb250ZXh0RmlsZVBhdGgiLCJ2YXJpYWJsZU5vZGVNYXRjaGVzIiwibWF0Y2hWYXJpYWJsZU5vZGUiLCJ0b0pTT04iLCJ0eXBlSlNPTiIsInR5cGVUb1R5cGVKU09OIiwicHJvdmlzaW9uYWxKU09OIiwicHJvdmlzaW9uYWxUb1Byb3Zpc2lvbmFsSlNPTiIsImdldEJyZWFrUG9pbnQiLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVZhcmlhYmxlIiwidHlwZUZyb21KU09OIiwiaWRlbnRpZmllckZyb21WYXJpYWJsZU5vZGUiLCJwcm92aXNpb25hbEZyb21KU09OIiwiZnJvbVRlcm0iLCJ0ZXJtTm9kZSIsInZhcmlhYmxlRnJvbVRlcm1Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OztnQ0FYd0I7a0VBRUg7eUJBR087NkJBQ1E7d0JBQ2U7eUJBQ2M7c0JBQytCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFFaEcsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxpQkFBaUJDLHVCQUFPO0lBQ2xELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsQ0FBRTtRQUMzRSxLQUFLLENBQUNOLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7SUFDckI7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDSCxJQUFJO0lBQ2xCO0lBRUFJLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDSCxVQUFVO0lBQ3hCO0lBRUFJLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDSCxXQUFXO0lBQ3pCO0lBRUFJLFFBQVFOLElBQUksRUFBRTtRQUNaLElBQUksQ0FBQ0EsSUFBSSxHQUFHQTtJQUNkO0lBRUFPLGVBQWVMLFdBQVcsRUFBRTtRQUMxQixJQUFJLENBQUNBLFdBQVcsR0FBR0E7SUFDckI7SUFFQU0sa0JBQWtCO1FBQ2hCLE1BQU1WLE9BQU8sSUFBSSxDQUFDVyxPQUFPLElBQ25CQyxlQUFlWixNQUFPLEVBQUU7UUFFOUIsT0FBT1k7SUFDVDtJQUVBQyxnQkFBZ0I7UUFBRSxPQUFPLElBQUksQ0FBQ1gsSUFBSSxDQUFDWSxTQUFTO0lBQUk7SUFFaERDLGdCQUFnQjtRQUNkLE1BQU1YLGNBQWMsSUFBSSxDQUFDRyxhQUFhLElBQ2hDUyxjQUFjLENBQUNaO1FBRXJCLE9BQU9ZO0lBQ1Q7SUFFQUMsb0JBQW9CZCxVQUFVLEVBQUU7UUFDOUIsTUFBTWUsb0JBQXFCLElBQUksQ0FBQ2YsVUFBVSxLQUFLQTtRQUUvQyxPQUFPZTtJQUNUO0lBRUFDLGdCQUFnQkMsUUFBUSxFQUFFO1FBQ3hCLE1BQU1DLHFCQUFxQkQsU0FBU2QsYUFBYSxJQUMzQ2dCLHFCQUFzQixJQUFJLENBQUNuQixVQUFVLEtBQUtrQjtRQUVoRCxPQUFPQztJQUNUO0lBRUFDLGdCQUFnQkMsU0FBUyxFQUFFO1FBQ3pCLE1BQU1yQixhQUFhcUIsVUFBVWxCLGFBQWEsSUFDcENZLG9CQUFvQixJQUFJLENBQUNELG1CQUFtQixDQUFDZCxhQUM3Q3NCLHFCQUFxQlAsbUJBQW1CLEdBQUc7UUFFakQsT0FBT087SUFDVDtJQUVBQywwQkFBMEJMLGtCQUFrQixFQUFFO1FBQzVDLE1BQU1sQixhQUFha0Isb0JBQ2JILG9CQUFvQixJQUFJLENBQUNELG1CQUFtQixDQUFDZCxhQUM3Q3dCLCtCQUErQlQsbUJBQW1CLEdBQUc7UUFFM0QsT0FBT1M7SUFDVDtJQUVBQyxTQUFTOUIsT0FBTyxFQUFFO1FBQ2hCLElBQUlzQixXQUFXO1FBRWYsTUFBTVMsaUJBQWlCLElBQUksQ0FBQ2YsU0FBUyxJQUFJLEdBQUc7UUFFNUNoQixRQUFRZ0MsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVELGVBQWUsYUFBYSxDQUFDO1FBRTlELElBQUlFLFlBQVk7UUFFaEIsTUFBTVYscUJBQXFCLElBQUksQ0FBQ2xCLFVBQVUsRUFDcEM2QixtQkFBbUJsQyxRQUFRbUMsd0NBQXdDLENBQUNaO1FBRTFFLElBQUlXLHFCQUFxQixNQUFNO1lBQzdCLE1BQU05QixPQUFPOEIsaUJBQWlCM0IsT0FBTyxJQUMvQjZCLGFBQWFoQyxLQUFLWSxTQUFTLElBQzNCVixjQUFjNEIsaUJBQWlCekIsYUFBYSxJQUM1Q3NCLGlCQUFpQixJQUFJLENBQUNmLFNBQVMsSUFDL0JxQixxQkFBcUJDLElBQUFBLDBDQUFrQyxFQUFDaEM7WUFFOUROLFFBQVFnQyxLQUFLLENBQUMsQ0FBQyxhQUFhLEVBQUVELGVBQWUsMEJBQTBCLEVBQUVLLFdBQVcsTUFBTSxFQUFFQyxtQkFBbUIsQ0FBQyxDQUFDO1lBRWpILElBQUksQ0FBQ2pDLElBQUksR0FBR0E7WUFFWixJQUFJLENBQUNFLFdBQVcsR0FBR0E7WUFFbkJnQixXQUFXLElBQUk7WUFFZlcsWUFBWTtRQUNkLE9BQU87WUFDTGpDLFFBQVF1QyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUVSLGVBQWUsMEJBQTBCLENBQUM7UUFDbEU7UUFFQSxJQUFJRSxXQUFXO1lBQ2JqQyxRQUFRdUMsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVSLGVBQWUsV0FBVyxDQUFDO1FBQ2hFO1FBRUEsT0FBT1Q7SUFDVDtJQUVBa0IsVUFBVUMsSUFBSSxFQUFFQyxjQUFjLEVBQUVDLGVBQWUsRUFBRTtRQUMvQyxJQUFJQyxjQUFjO1FBRWxCLE1BQU01QyxVQUFVMkMsaUJBQ1ZFLGFBQWFKLEtBQUt6QixTQUFTLElBQzNCZSxpQkFBaUIsSUFBSSxDQUFDZixTQUFTLElBQUksR0FBRztRQUU1Q2hCLFFBQVFnQyxLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUVhLFdBQVcsaUJBQWlCLEVBQUVkLGVBQWUsYUFBYSxDQUFDO1FBRTFGLE1BQU1ULFdBQVcsSUFBSSxFQUNmd0Isc0JBQXNCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNOLE1BQU1DLGdCQUFnQkM7UUFFekUsSUFBSUcscUJBQXFCO1lBQ3ZCRixjQUFjO1FBQ2hCLE9BQU87WUFDTCxNQUFNOUIsZUFBZVEsU0FBU1QsT0FBTyxJQUMvQm1DLHNCQUFzQmhELFFBQVFpRCxxQ0FBcUMsQ0FBQ25DO1lBRTFFLElBQUlrQyx3QkFBd0IsTUFBTTtnQkFDaEMsTUFBTUUsd0NBQXdDRixvQkFBb0JHLFdBQVcsQ0FBQ1YsTUFBTXpDO2dCQUVwRixJQUFJa0QsdUNBQXVDO29CQUN6QyxNQUFNRSw0QkFBNEJKLG9CQUFvQmhDLFNBQVM7b0JBRS9EaEIsUUFBUWdDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRW9CLDBCQUEwQiwwQ0FBMEMsQ0FBQztvQkFFM0ZSLGNBQWM7Z0JBQ2hCO1lBQ0YsT0FBTztnQkFDTCxNQUFNLEVBQUVTLGdCQUFnQixFQUFFLEdBQUdDLGlCQUFRO2dCQUVyQyxJQUFJQztnQkFFSkEsbUJBQW1CRixpQkFBaUJHLG1CQUFtQixDQUFDZixNQUFNbkIsVUFBVW9CLGdCQUFnQkM7Z0JBRXhGWSxtQkFBbUJBLGlCQUFpQnpCLFFBQVEsQ0FBQzlCLFVBQVcsR0FBRztnQkFFM0QsTUFBTWdELHNCQUFzQk8sa0JBQW1CLEdBQUc7Z0JBRWxEdkQsUUFBUXlELHNCQUFzQixDQUFDVDtnQkFFL0JKLGNBQWM7WUFDaEI7UUFDRjtRQUVBLElBQUlBLGFBQWE7WUFDZjVDLFFBQVF1QyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRU0sV0FBVyxpQkFBaUIsRUFBRWQsZUFBZSxXQUFXLENBQUM7UUFDNUY7UUFFQSxPQUFPYTtJQUNUO0lBRUFHLGtCQUFrQk4sSUFBSSxFQUFFQyxjQUFjLEVBQUVDLGVBQWUsRUFBRTtRQUN2RCxJQUFJRyxzQkFBc0I7UUFFMUIsTUFBTTlDLFVBQVUyQyxpQkFDVkUsYUFBYUosS0FBS3pCLFNBQVMsSUFDM0JlLGlCQUFpQixJQUFJLENBQUNmLFNBQVMsSUFBSyxHQUFHO1FBRTdDaEIsUUFBUWdDLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRWEsV0FBVyw0QkFBNEIsRUFBRWQsZUFBZSxhQUFhLENBQUM7UUFFckcsTUFBTTJCLHlCQUF5QmhCLGVBQWVpQixXQUFXLElBQ25EQywwQkFBMEJqQixnQkFBZ0JnQixXQUFXO1FBRTNELElBQUlELDJCQUEyQkUseUJBQXlCO1lBQ3RELE1BQU05QyxlQUFlLElBQUksQ0FBQ0YsZUFBZSxJQUNuQ2lELHNCQUFzQnBCLEtBQUtxQixpQkFBaUIsQ0FBQ2hEO1lBRW5ELElBQUkrQyxxQkFBcUI7Z0JBQ3ZCZixzQkFBc0I7WUFDeEI7UUFDRjtRQUVBLElBQUlBLHFCQUFxQjtZQUN2QjlDLFFBQVF1QyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRU0sV0FBVyw0QkFBNEIsRUFBRWQsZUFBZSxXQUFXLENBQUM7UUFDdkc7UUFFQSxPQUFPZTtJQUNUO0lBRUFpQixTQUFTO1FBQ1AsTUFBTUMsV0FBV0MsSUFBQUEsb0JBQWMsRUFBQyxJQUFJLENBQUM3RCxJQUFJLEdBQ25DOEQsa0JBQWtCQyxJQUFBQSxrQ0FBNEIsRUFBQyxJQUFJLENBQUM3RCxXQUFXLEdBQy9ETCxTQUFTLElBQUksQ0FBQ2UsU0FBUyxJQUN2QmIsWUFBWSxJQUFJLENBQUNpRSxhQUFhLElBQzlCaEUsT0FBTzRELFVBQ1AxRCxjQUFjNEQsaUJBQ2RHLE9BQU87WUFDTHBFO1lBQ0FFO1lBQ0FDO1lBQ0FFO1FBQ0Y7UUFFTixPQUFPK0Q7SUFDVDtJQUVBLE9BQU9DLE9BQU8sV0FBVztJQUV6QixPQUFPQyxTQUFTRixJQUFJLEVBQUVyRSxPQUFPLEVBQUU7UUFDN0IsT0FBT3dFLElBQUFBLG9CQUFXLEVBQUMsQ0FBQ3hFO1lBQ2xCLE1BQU0sRUFBRUMsTUFBTSxFQUFFRSxTQUFTLEVBQUUsR0FBR2tFLE1BQ3hCdkQsZUFBZTJELElBQUFBLGdDQUFtQixFQUFDeEUsUUFBUUQsVUFDM0NFLE9BQU9ZLGNBQ1BWLE9BQU9zRSxJQUFBQSxrQkFBWSxFQUFDTCxNQUFNckUsVUFDMUJLLGFBQWFzRSxJQUFBQSxtQ0FBMEIsRUFBQzdELGNBQWNkLFVBQ3RETSxjQUFjc0UsSUFBQUEseUJBQW1CLEVBQUNQLE1BQU1yRTtZQUU5Q0EsVUFBVTtZQUVWLE1BQU1zQixXQUFXLElBQUl4QixTQUFTRSxTQUFTQyxRQUFRQyxNQUFNQyxXQUFXQyxNQUFNQyxZQUFZQztZQUVsRixPQUFPZ0I7UUFDVCxHQUFHdEI7SUFDTDtJQUVBLE9BQU82RSxTQUFTcEMsSUFBSSxFQUFFekMsT0FBTyxFQUFFO1FBQzdCLE1BQU04RSxXQUFXckMsS0FBSzVCLE9BQU8sSUFDdkJTLFdBQVd5RCxJQUFBQSw2QkFBb0IsRUFBQ0QsVUFBVTlFO1FBRWhELE9BQU9zQjtJQUNUO0FBQ0YifQ==