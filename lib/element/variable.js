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
                const { TermSubstitution } = _elements.default, termSubstitution = TermSubstitution.fromTermAndVariable(term, variable, generalContext, specificContext);
                termSubstitution.validate(context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlVmFyaWFibGUgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgcHJvdmlzaW9uYWxseVN0cmluZ0Zyb21Qcm92aXNpb25hbCB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyB2YXJpYWJsZUZyb21UZXJtTm9kZSwgaWRlbnRpZmllckZyb21WYXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04sIHByb3Zpc2lvbmFsRnJvbUpTT04sIHByb3Zpc2lvbmFsVG9Qcm92aXNpb25hbEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFZhcmlhYmxlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0eXBlLCBpZGVudGlmaWVyLCBwcm92aXNpb25hbCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgICB0aGlzLnByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWw7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmlkZW50aWZpZXI7XG4gIH1cblxuICBpc1Byb3Zpc2lvbmFsKCkge1xuICAgIHJldHVybiB0aGlzLnByb3Zpc2lvbmFsO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIHNldFByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKSB7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBub2RlOyAgLy9cblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRUeXBlU3RyaW5nKCkgeyByZXR1cm4gdGhpcy50eXBlLmdldFN0cmluZygpOyB9XG5cbiAgaXNJZGVudGlmaWVyRXF1YWxUbyhpZGVudGlmaWVyKSB7XG4gICAgY29uc3QgaWRlbnRpZmllckVxdWFsVG8gPSAodGhpcy5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKTtcblxuICAgIHJldHVybiBpZGVudGlmaWVyRXF1YWxUbztcbiAgfVxuXG4gIGNvbXBhcmVWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlLmdldElkZW50aWZpZXIoKSxcbiAgICAgICAgICBjb21wYXJlc1RvVmFyaWFibGUgPSAodGhpcy5pZGVudGlmaWVyID09PSB2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9WYXJpYWJsZTtcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbXRlcihwYXJhbWV0ZXIpIHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gcGFyYW1ldGVyLmdldElkZW50aWZpZXIoKSxcbiAgICAgICAgICBpZGVudGlmaWVyRXF1YWxUbyA9IHRoaXMuaXNJZGVudGlmaWVyRXF1YWxUbyhpZGVudGlmaWVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW10ZXIgPSBpZGVudGlmaWVyRXF1YWxUbzsgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtdGVyO1xuICB9XG5cbiAgY29tcGFyZVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gdmFyaWFibGVJZGVudGlmaWVyLCAvLy9cbiAgICAgICAgICBpZGVudGlmaWVyRXF1YWxUbyA9IHRoaXMuaXNJZGVudGlmaWVyRXF1YWxUbyhpZGVudGlmaWVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyID0gaWRlbnRpZmllckVxdWFsVG87IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXI7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB0aGlzLmlkZW50aWZpZXIsIC8vL1xuICAgICAgICAgIGRlY2xhcmVkVmFyaWFibGUgPSBjb250ZXh0LmZpbmREZWNsYXJlZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgIGlmIChkZWNsYXJlZFZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gZGVjbGFyZWRWYXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0eXBlU3RyaW5nID0gdHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsID0gZGVjbGFyZWRWYXJpYWJsZS5pc1Byb3Zpc2lvbmFsKCksXG4gICAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICAgIHByb3Zpc2luYWxseVN0cmluZyA9IHByb3Zpc2lvbmFsbHlTdHJpbmdGcm9tUHJvdmlzaW9uYWwocHJvdmlzaW9uYWwpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBTZXR0aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlJ3MgdHlwZSB0byB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUke3Byb3Zpc2luYWxseVN0cmluZ30uYCk7XG5cbiAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgICAgIHRoaXMucHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbDtcblxuICAgICAgdmFyaWFibGUgPSB0aGlzO1xuXG4gICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgdW5pZnlUZXJtKHRlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdGVybVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGxldCB2YXJpYWJsZSxcbiAgICAgICAgZGVyaXZlZFN1YnN0aXR1dGlvbjtcblxuICAgIHZhcmlhYmxlID0gdGhpczsgLy8vXG5cbiAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZS5nZXROb2RlKCk7XG5cbiAgICBkZXJpdmVkU3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kRGVyaXZlZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAoZGVyaXZlZFN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGVyaXZlZFN1YnN0aXR1dGlvbkNvbXBhcmVzVG9UZXJtID0gZGVyaXZlZFN1YnN0aXR1dGlvbi5jb21wYXJlVGVybSh0ZXJtLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGRlcml2ZWRTdWJzdGl0dXRpb25Db21wYXJlc1RvVGVybSkge1xuICAgICAgICBjb25zdCBkZXJpdmVkU3Vic3RpdHV0aW9uU3RyaW5nID0gZGVyaXZlZFN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7ZGVyaXZlZFN1YnN0aXR1dGlvblN0cmluZ30nIGRlcml2ZWQgc3Vic3RpdHV0aW9uIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcblxuICAgICAgICB0ZXJtVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7ICAvLy9cblxuICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGUuZ2V0Tm9kZSgpO1xuXG4gICAgICB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpO1xuXG4gICAgICB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdmFyaWFibGVUeXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUgPSB0ZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih2YXJpYWJsZVR5cGUpO1xuXG4gICAgICBpZiAodGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUpIHtcbiAgICAgICAgY29uc3QgeyBUZXJtU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IFRlcm1TdWJzdGl0dXRpb24uZnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgdGVybVN1YnN0aXR1dGlvbi52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgICBjb25zdCBkZXJpdmVkU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGREZXJpdmVkU3Vic3RpdHV0aW9uKGRlcml2ZWRTdWJzdGl0dXRpb24pO1xuXG4gICAgICAgIHRlcm1VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGVybVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICBwcm92aXNpb25hbEpTT04gPSBwcm92aXNpb25hbFRvUHJvdmlzaW9uYWxKU09OKHRoaXMucHJvdmlzaW9uYWwpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0TGluZUluZGV4KCksXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbEpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbGluZUluZGV4LFxuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhcmlhYmxlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nLCBsaW5lSW5kZXggfSA9IGpzb24sXG4gICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBpbnN0YW50aWF0ZVZhcmlhYmxlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICB0eXBlID0gdHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgICAgaWRlbnRpZmllciA9IGlkZW50aWZpZXJGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBwcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdHlwZSwgaWRlbnRpZmllciwgcHJvdmlzaW9uYWwpO1xuXG4gICAgICByZXR1cm4gdmFyaWFibGU7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm0odGVybSwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlZhcmlhYmxlIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwidHlwZSIsImlkZW50aWZpZXIiLCJwcm92aXNpb25hbCIsImdldFR5cGUiLCJnZXRJZGVudGlmaWVyIiwiaXNQcm92aXNpb25hbCIsInNldFR5cGUiLCJzZXRQcm92aXNpb25hbCIsImdldFZhcmlhYmxlTm9kZSIsImdldE5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJnZXRUeXBlU3RyaW5nIiwiZ2V0U3RyaW5nIiwiaXNJZGVudGlmaWVyRXF1YWxUbyIsImlkZW50aWZpZXJFcXVhbFRvIiwiY29tcGFyZVZhcmlhYmxlIiwidmFyaWFibGUiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJjb21wYXJlc1RvVmFyaWFibGUiLCJjb21wYXJlUGFyYW10ZXIiLCJwYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW10ZXIiLCJjb21wYXJlVmFyaWFibGVJZGVudGlmaWVyIiwiY29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllciIsInZhbGlkYXRlIiwidmFyaWFibGVTdHJpbmciLCJ0cmFjZSIsInZhbGlkYXRlcyIsImRlY2xhcmVkVmFyaWFibGUiLCJmaW5kRGVjbGFyZWRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyIiwidHlwZVN0cmluZyIsInByb3Zpc2luYWxseVN0cmluZyIsInByb3Zpc2lvbmFsbHlTdHJpbmdGcm9tUHJvdmlzaW9uYWwiLCJkZWJ1ZyIsInVuaWZ5VGVybSIsInRlcm0iLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInRlcm1VbmlmaWVzIiwidGVybVN0cmluZyIsImRlcml2ZWRTdWJzdGl0dXRpb24iLCJmaW5kRGVyaXZlZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVOb2RlIiwiZGVyaXZlZFN1YnN0aXR1dGlvbkNvbXBhcmVzVG9UZXJtIiwiY29tcGFyZVRlcm0iLCJkZXJpdmVkU3Vic3RpdHV0aW9uU3RyaW5nIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ0ZXJtTm9kZSIsImZpbmRUZXJtQnlUZXJtTm9kZSIsInRlcm1UeXBlIiwidmFyaWFibGVUeXBlIiwidGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsIlRlcm1TdWJzdGl0dXRpb24iLCJlbGVtZW50cyIsInRlcm1TdWJzdGl0dXRpb24iLCJmcm9tVGVybUFuZFZhcmlhYmxlIiwiYWRkRGVyaXZlZFN1YnN0aXR1dGlvbiIsInRvSlNPTiIsInR5cGVKU09OIiwidHlwZVRvVHlwZUpTT04iLCJwcm92aXNpb25hbEpTT04iLCJwcm92aXNpb25hbFRvUHJvdmlzaW9uYWxKU09OIiwiZ2V0TGluZUluZGV4IiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVWYXJpYWJsZSIsInR5cGVGcm9tSlNPTiIsImlkZW50aWZpZXJGcm9tVmFyaWFibGVOb2RlIiwicHJvdmlzaW9uYWxGcm9tSlNPTiIsImZyb21UZXJtIiwidmFyaWFibGVGcm9tVGVybU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7O2dDQVh3QjtrRUFFSDt5QkFHTzs2QkFDUTt3QkFDZTt5QkFDYztzQkFDK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUVoRyxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGlCQUFpQkMsdUJBQU87SUFDbEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxDQUFFO1FBQzNFLEtBQUssQ0FBQ04sU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtJQUNyQjtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNILElBQUk7SUFDbEI7SUFFQUksZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNILFVBQVU7SUFDeEI7SUFFQUksZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNILFdBQVc7SUFDekI7SUFFQUksUUFBUU4sSUFBSSxFQUFFO1FBQ1osSUFBSSxDQUFDQSxJQUFJLEdBQUdBO0lBQ2Q7SUFFQU8sZUFBZUwsV0FBVyxFQUFFO1FBQzFCLElBQUksQ0FBQ0EsV0FBVyxHQUFHQTtJQUNyQjtJQUVBTSxrQkFBa0I7UUFDaEIsTUFBTVYsT0FBTyxJQUFJLENBQUNXLE9BQU8sSUFDbkJDLGVBQWVaLE1BQU8sRUFBRTtRQUU5QixPQUFPWTtJQUNUO0lBRUFDLGdCQUFnQjtRQUFFLE9BQU8sSUFBSSxDQUFDWCxJQUFJLENBQUNZLFNBQVM7SUFBSTtJQUVoREMsb0JBQW9CWixVQUFVLEVBQUU7UUFDOUIsTUFBTWEsb0JBQXFCLElBQUksQ0FBQ2IsVUFBVSxLQUFLQTtRQUUvQyxP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