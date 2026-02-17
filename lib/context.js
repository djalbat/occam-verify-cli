"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Context;
    }
});
var _occamlanguages = require("occam-languages");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var Context = /*#__PURE__*/ function(ContextBase) {
    _inherits(Context, ContextBase);
    function Context() {
        _class_call_check(this, Context);
        return _call_super(this, Context, arguments);
    }
    _create_class(Context, [
        {
            key: "getLexer",
            value: function getLexer() {
                var context = this.getContext(), lexer = context.getLexer();
                return lexer;
            }
        },
        {
            key: "getParser",
            value: function getParser() {
                var context = this.getContext(), parser = context.getParser();
                return parser;
            }
        },
        {
            key: "getFilePath",
            value: function getFilePath() {
                var context = this.getContext(), filePath = context.getFilePath();
                return filePath;
            }
        },
        {
            key: "getTerms",
            value: function getTerms() {
                var context = this.getContext(), terms = context.getTerms();
                return terms;
            }
        },
        {
            key: "getFrames",
            value: function getFrames() {
                var context = this.getContext(), frames = context.getFrames();
                return frames;
            }
        },
        {
            key: "getSubstitutions",
            value: function getSubstitutions() {
                var context = this.getContext(), substitutions = context.getSubstitutions();
                return substitutions;
            }
        },
        {
            key: "getVariables",
            value: function getVariables(includeRelease) {
                var context = this.getContext(), variables = context.getVariables(includeRelease);
                return variables;
            }
        },
        {
            key: "getCombinators",
            value: function getCombinators(includeRelease) {
                var context = this.getContext(), combinators = context.getCombinators(includeRelease);
                return combinators;
            }
        },
        {
            key: "getMetavariables",
            value: function getMetavariables(includeRelease) {
                var context = this.getContext(), metavariables = context.getMetavariables(includeRelease);
                return metavariables;
            }
        },
        {
            key: "getSubproofOrProofAssertions",
            value: function getSubproofOrProofAssertions() {
                var context = this.getContext(), subproofOrProofAssertions = context.getSubproofOrProofAssertions();
                return subproofOrProofAssertions;
            }
        },
        {
            key: "findMetavariable",
            value: function findMetavariable(metavariable) {
                var context = this.getContext();
                metavariable = context.findMetavariable(metavariable); ///
                return metavariable;
            }
        },
        {
            key: "findProcedureByName",
            value: function findProcedureByName(name) {
                var context = this.getContext(), procedure = context.findProcedureByName(name);
                return procedure;
            }
        },
        {
            key: "findRuleByReference",
            value: function findRuleByReference(reference) {
                var context = this.getContext(), rule = context.findRuleByReference(reference);
                return rule;
            }
        },
        {
            key: "findFrameByFrameNode",
            value: function findFrameByFrameNode(frameNode) {
                var context = this.getContext(), frame = context.findFrameByFrameNode(frameNode);
                return frame;
            }
        },
        {
            key: "findStatementByStatementNode",
            value: function findStatementByStatementNode(statementNode) {
                var context = this.getContext(), statement = context.findStatementByStatementNode(statementNode);
                return statement;
            }
        },
        {
            key: "findReferenceByMetavariableNode",
            value: function findReferenceByMetavariableNode(metavariableNode) {
                var context = this.getContext(), reference = context.findReferenceByMetavariableNode(metavariableNode);
                return reference;
            }
        },
        {
            key: "findTopLevelAssertionByReference",
            value: function findTopLevelAssertionByReference(reference) {
                var context = this.getContext(), topLevelAssertion = context.findTopLevelAssertionByReference(reference);
                return topLevelAssertion;
            }
        },
        {
            key: "findSubstitutionByVariable",
            value: function findSubstitutionByVariable(variable, generalContext, specificContext) {
                var context = this.getContext(), substitution = context.findSubstitutionByVariable(variable, generalContext, specificContext);
                return substitution;
            }
        },
        {
            key: "findSubstitutionByMetavariable",
            value: function findSubstitutionByMetavariable(metavariable, generalContet, specificContext) {
                var context = this.getContext(), substitution = context.findSubstitutionByMetavariable(metavariable, generalContet, specificContext);
                return substitution;
            }
        },
        {
            key: "findVariableByVariableIdentifier",
            value: function findVariableByVariableIdentifier(variableIdentifier) {
                var context = this.getContext(), variable = context.findVariableByVariableIdentifier(variableIdentifier);
                return variable;
            }
        },
        {
            key: "findMetavariableByMetavariableName",
            value: function findMetavariableByMetavariableName(metavariableName) {
                var context = this.getContext(), metavariable = context.findMetavariableByMetavariableName(metavariableName);
                return metavariable;
            }
        },
        {
            key: "findSimpleSubstitutionByMetavariable",
            value: function findSimpleSubstitutionByMetavariable(metavariable) {
                var context = this.getContext(), simpleSubstitution = context.findSimpleSubstitutionByMetavariable(metavariable);
                return simpleSubstitution;
            }
        },
        {
            key: "findSubstitutionByMetavariableAndSubstitution",
            value: function findSubstitutionByMetavariableAndSubstitution(metavariable, substitution, generalContet, specificContext) {
                var context = this.getContext();
                substitution = context.findSubstitutionByMetavariableAndSubstitution(metavariable, substitution, generalContet, specificContext); ///
                return substitution;
            }
        },
        {
            key: "isTermPresentByTermNode",
            value: function isTermPresentByTermNode(termNode) {
                var context = this.getContext(), termPresent = context.isTermPresentByTermNode(termNode);
                return termPresent;
            }
        },
        {
            key: "isFramePresentByFrameNode",
            value: function isFramePresentByFrameNode(frameNode) {
                var context = this.getContext(), framePresent = context.isFramePresentByFrameNode(frameNode);
                return framePresent;
            }
        },
        {
            key: "isJudgementPresentByMetavariable",
            value: function isJudgementPresentByMetavariable(metavariable) {
                var context = this.getContext(), judgementPresent = context.isJudgementPresentByMetavariable(metavariable);
                return judgementPresent;
            }
        },
        {
            key: "isStatementPresentByStatementNode",
            value: function isStatementPresentByStatementNode(statementNode) {
                var context = this.getContext(), statementPresent = context.isStatementPresentByStatementNode(statementNode);
                return statementPresent;
            }
        },
        {
            key: "isAssertionPresentByAssertionNode",
            value: function isAssertionPresentByAssertionNode(assertionNode) {
                var context = this.getContext(), assertionPresent = context.isAssertionPresentByAssertionNode(assertionNode);
                return assertionPresent;
            }
        },
        {
            key: "isReferencePresentByReferenceNode",
            value: function isReferencePresentByReferenceNode(referenceNode) {
                var context = this.getContext(), referencePresent = context.isReferencePresentByReferenceNode(referenceNode);
                return referencePresent;
            }
        },
        {
            key: "isSubstitutionPresentBySubstitutionNode",
            value: function isSubstitutionPresentBySubstitutionNode(substitutionNode) {
                var context = this.getContext(), substitutionPresent = context.isSubstitutionPresentBySubstitutionNode(substitutionNode);
                return substitutionPresent;
            }
        },
        {
            key: "isProcedurePresentByName",
            value: function isProcedurePresentByName(name) {
                var context = this.getContext(), procedurePresent = context.isProcedurePresentByName(name);
                return procedurePresent;
            }
        },
        {
            key: "isLabelPresentByReference",
            value: function isLabelPresentByReference(reference) {
                var context = this.getContext(), labelPresent = context.isLabelPresentByReference(reference);
                return labelPresent;
            }
        },
        {
            key: "isMetavariablePresentByReference",
            value: function isMetavariablePresentByReference(reference) {
                var context = this.getContext(), metavariablePresent = context.isMetavariablePresentByReference(reference);
                return metavariablePresent;
            }
        },
        {
            key: "addRule",
            value: function addRule(rule) {
                var context = this.getContext();
                context.addRule(rule);
            }
        },
        {
            key: "adTerm",
            value: function adTerm(term) {
                var context = this.getContext();
                context.adTerm(term);
            }
        },
        {
            key: "addFrame",
            value: function addFrame(frame) {
                var context = this.getContext();
                context.addFrame(frame);
            }
        },
        {
            key: "addStatement",
            value: function addStatement(statement) {
                var context = this.getContext();
                context.addStatement(statement);
            }
        },
        {
            key: "addReference",
            value: function addReference(reference) {
                var context = this.getContext();
                context.addReference(reference);
            }
        },
        {
            key: "addJudgement",
            value: function addJudgement(judgement) {
                var context = this.getContext(), judgementAdded = context.addJudgement(judgement);
                return judgementAdded;
            }
        },
        {
            key: "addSubstitution",
            value: function addSubstitution(substitution) {
                var context = this.getContext();
                context.addSubstitution(substitution);
            }
        },
        {
            key: "removeSubstitution",
            value: function removeSubstitution(substitution) {
                var context = this.getContext();
                context.removeSubstitution(substitution);
            }
        },
        {
            key: "addSubproofOrProofAssertion",
            value: function addSubproofOrProofAssertion(subproofOrProofAssertion) {
                var context = this.getContext();
                context.addSubproofOrProofAssertion(subproofOrProofAssertion);
            }
        }
    ]);
    return Context;
}(_occamlanguages.Context);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb250ZXh0IGFzIENvbnRleHRCYXNlIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IGV4dGVuZHMgQ29udGV4dEJhc2Uge1xuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCk7XG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHBhcnNlciA9IGNvbnRleHQuZ2V0UGFyc2VyKCk7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gY29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRlcm1zID0gY29udGV4dC5nZXRUZXJtcygpO1xuXG4gICAgcmV0dXJuIHRlcm1zO1xuICB9XG5cbiAgZ2V0RnJhbWVzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgIGZyYW1lcyA9IGNvbnRleHQuZ2V0RnJhbWVzKCk7XG5cbiAgICByZXR1cm4gZnJhbWVzO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9ucygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IGNvbnRleHQuZ2V0U3Vic3RpdHV0aW9ucygpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICB2YXJpYWJsZXMgPSBjb250ZXh0LmdldFZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBjb250ZXh0LmdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IGNvbnRleHQuZ2V0TWV0YXZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBjb250ZXh0LmdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoKTtcblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuICB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRQcm9jZWR1cmVCeU5hbWUobmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcm9jZWR1cmUgPSBjb250ZXh0LmZpbmRQcm9jZWR1cmVCeU5hbWUobmFtZSk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlO1xuICB9XG5cbiAgZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcnVsZSA9IGNvbnRleHQuZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBmaW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZnJhbWUgPSBjb250ZXh0LmZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSk7XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIGZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBjb250ZXh0LmZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgdG9wTGV2ZWxBc3NlcnRpb24gPSBjb250ZXh0LmZpbmRUb3BMZXZlbEFzc2VydGlvbkJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxBc3NlcnRpb247XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZSh2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlKHZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIHNpbXBsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiwgZ2VuZXJhbENvbnRldCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgc3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGdlbmVyYWxDb250ZXQsIHNwZWNpZmljQ29udGV4dCk7IC8vL1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGlzVGVybVByZXNlbnRCeVRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRlcm1QcmVzZW50ID0gY29udGV4dC5pc1Rlcm1QcmVzZW50QnlUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybVByZXNlbnQ7XG4gIH1cblxuICBpc0ZyYW1lUHJlc2VudEJ5RnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBmcmFtZVByZXNlbnQgPSBjb250ZXh0LmlzRnJhbWVQcmVzZW50QnlGcmFtZU5vZGUoZnJhbWVOb2RlKTtcblxuICAgIHJldHVybiBmcmFtZVByZXNlbnQ7XG4gIH1cblxuICBpc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAganVkZ2VtZW50UHJlc2VudCA9IGNvbnRleHQuaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgIHJldHVybiBqdWRnZW1lbnRQcmVzZW50O1xuICB9XG5cbiAgaXNTdGF0ZW1lbnRQcmVzZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICBzdGF0ZW1lbnRQcmVzZW50ID0gY29udGV4dC5pc1N0YXRlbWVudFByZXNlbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50UHJlc2VudDtcbiAgfVxuXG4gIGlzQXNzZXJ0aW9uUHJlc2VudEJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGFzc2VydGlvblByZXNlbnQgPSBjb250ZXh0LmlzQXNzZXJ0aW9uUHJlc2VudEJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKTtcblxuICAgIHJldHVybiBhc3NlcnRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNSZWZlcmVuY2VQcmVzZW50QnlSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcmVmZXJlbmNlUHJlc2VudCA9IGNvbnRleHQuaXNSZWZlcmVuY2VQcmVzZW50QnlSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVByZXNlbnQ7XG4gIH1cblxuICBpc1N1YnN0aXR1dGlvblByZXNlbnRCeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25QcmVzZW50ID0gY29udGV4dC5pc1N1YnN0aXR1dGlvblByZXNlbnRCeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzUHJvY2VkdXJlUHJlc2VudEJ5TmFtZShuYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHByb2NlZHVyZVByZXNlbnQgPSBjb250ZXh0LmlzUHJvY2VkdXJlUHJlc2VudEJ5TmFtZShuYW1lKTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVQcmVzZW50O1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGFiZWxQcmVzZW50ID0gY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gbGFiZWxQcmVzZW50O1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGFkZFJ1bGUocnVsZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkUnVsZShydWxlKTtcbiAgfVxuXG4gIGFkVGVybSh0ZXJtKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZFRlcm0odGVybSk7XG4gIH1cblxuICBhZGRGcmFtZShmcmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkRnJhbWUoZnJhbWUpO1xuICB9XG5cbiAgYWRkU3RhdGVtZW50KHN0YXRlbWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkU3RhdGVtZW50KHN0YXRlbWVudCk7XG4gIH1cblxuICBhZGRSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRSZWZlcmVuY2UocmVmZXJlbmNlKTtcbiAgfVxuXG4gIGFkZEp1ZGdlbWVudChqdWRnZW1lbnQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAganVkZ2VtZW50QWRkZWQgPSBjb250ZXh0LmFkZEp1ZGdlbWVudChqdWRnZW1lbnQpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudEFkZGVkO1xuICB9XG5cbiAgYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG4gIH1cblxuICByZW1vdmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5yZW1vdmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKTtcbiAgfVxuXG4gIGFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29udGV4dCIsImdldExleGVyIiwiY29udGV4dCIsImdldENvbnRleHQiLCJsZXhlciIsImdldFBhcnNlciIsInBhcnNlciIsImdldEZpbGVQYXRoIiwiZmlsZVBhdGgiLCJnZXRUZXJtcyIsInRlcm1zIiwiZ2V0RnJhbWVzIiwiZnJhbWVzIiwiZ2V0U3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJnZXRWYXJpYWJsZXMiLCJpbmNsdWRlUmVsZWFzZSIsInZhcmlhYmxlcyIsImdldENvbWJpbmF0b3JzIiwiY29tYmluYXRvcnMiLCJnZXRNZXRhdmFyaWFibGVzIiwibWV0YXZhcmlhYmxlcyIsImdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiZmluZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsImZpbmRQcm9jZWR1cmVCeU5hbWUiLCJuYW1lIiwicHJvY2VkdXJlIiwiZmluZFJ1bGVCeVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInJ1bGUiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsImZyYW1lTm9kZSIsImZyYW1lIiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnQiLCJmaW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImZpbmRUb3BMZXZlbEFzc2VydGlvbkJ5UmVmZXJlbmNlIiwidG9wTGV2ZWxBc3NlcnRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZSIsInZhcmlhYmxlIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUiLCJnZW5lcmFsQ29udGV0IiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZSIsInNpbXBsZVN1YnN0aXR1dGlvbiIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsImlzVGVybVByZXNlbnRCeVRlcm1Ob2RlIiwidGVybU5vZGUiLCJ0ZXJtUHJlc2VudCIsImlzRnJhbWVQcmVzZW50QnlGcmFtZU5vZGUiLCJmcmFtZVByZXNlbnQiLCJpc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZSIsImp1ZGdlbWVudFByZXNlbnQiLCJpc1N0YXRlbWVudFByZXNlbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRQcmVzZW50IiwiaXNBc3NlcnRpb25QcmVzZW50QnlBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvblByZXNlbnQiLCJpc1JlZmVyZW5jZVByZXNlbnRCeVJlZmVyZW5jZU5vZGUiLCJyZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlUHJlc2VudCIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5U3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25QcmVzZW50IiwiaXNQcm9jZWR1cmVQcmVzZW50QnlOYW1lIiwicHJvY2VkdXJlUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UiLCJsYWJlbFByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJhZGRSdWxlIiwiYWRUZXJtIiwidGVybSIsImFkZEZyYW1lIiwiYWRkU3RhdGVtZW50IiwiYWRkUmVmZXJlbmNlIiwiYWRkSnVkZ2VtZW50IiwianVkZ2VtZW50IiwianVkZ2VtZW50QWRkZWQiLCJhZGRTdWJzdGl0dXRpb24iLCJyZW1vdmVTdWJzdGl0dXRpb24iLCJhZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJDb250ZXh0QmFzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7OEJBRmtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QixJQUFBLEFBQU1BLHdCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJDLFFBQVFGLFFBQVFELFFBQVE7Z0JBRTlCLE9BQU9HO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUgsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJHLFNBQVNKLFFBQVFHLFNBQVM7Z0JBRWhDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUwsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJLLFdBQVdOLFFBQVFLLFdBQVc7Z0JBRXBDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVAsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJPLFFBQVFSLFFBQVFPLFFBQVE7Z0JBRTlCLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVQsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDN0JTLFNBQVNWLFFBQVFTLFNBQVM7Z0JBRTVCLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVgsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJXLGdCQUFnQlosUUFBUVcsZ0JBQWdCO2dCQUU5QyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFDLGNBQWM7Z0JBQ3pCLElBQU1kLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQzdCYyxZQUFZZixRQUFRYSxZQUFZLENBQUNDO2dCQUVuQyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVGLGNBQWM7Z0JBQzNCLElBQU1kLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCZ0IsY0FBY2pCLFFBQVFnQixjQUFjLENBQUNGO2dCQUUzQyxPQUFPRztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkosY0FBYztnQkFDN0IsSUFBTWQsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJrQixnQkFBZ0JuQixRQUFRa0IsZ0JBQWdCLENBQUNKO2dCQUUvQyxPQUFPSztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1wQixVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6Qm9CLDRCQUE0QnJCLFFBQVFvQiw0QkFBNEI7Z0JBRXRFLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxZQUFZO2dCQUMzQixJQUFNdkIsVUFBVSxJQUFJLENBQUNDLFVBQVU7Z0JBRS9Cc0IsZUFBZXZCLFFBQVFzQixnQkFBZ0IsQ0FBQ0MsZUFBZ0IsR0FBRztnQkFFM0QsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0JDLElBQUk7Z0JBQ3RCLElBQU16QixVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QnlCLFlBQVkxQixRQUFRd0IsbUJBQW1CLENBQUNDO2dCQUU5QyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQkMsU0FBUztnQkFDM0IsSUFBTTVCLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCNEIsT0FBTzdCLFFBQVEyQixtQkFBbUIsQ0FBQ0M7Z0JBRXpDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCQyxTQUFTO2dCQUM1QixJQUFNL0IsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekIrQixRQUFRaEMsUUFBUThCLG9CQUFvQixDQUFDQztnQkFFM0MsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSw2QkFBNkJDLGFBQWE7Z0JBQ3hDLElBQU1sQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QmtDLFlBQVluQyxRQUFRaUMsNEJBQTRCLENBQUNDO2dCQUV2RCxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGdDQUFnQ0MsZ0JBQWdCO2dCQUM5QyxJQUFNckMsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekIyQixZQUFZNUIsUUFBUW9DLCtCQUErQixDQUFDQztnQkFFMUQsT0FBT1Q7WUFDVDs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQSxpQ0FBaUNWLFNBQVM7Z0JBQ3hDLElBQU01QixVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUM3QnNDLG9CQUFvQnZDLFFBQVFzQyxnQ0FBZ0MsQ0FBQ1Y7Z0JBRS9ELE9BQU9XO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsMkJBQTJCQyxRQUFRLEVBQUVDLGNBQWMsRUFBRUMsZUFBZTtnQkFDbEUsSUFBTTNDLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCMkMsZUFBZTVDLFFBQVF3QywwQkFBMEIsQ0FBQ0MsVUFBVUMsZ0JBQWdCQztnQkFFbEYsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSwrQkFBK0J0QixZQUFZLEVBQUV1QixhQUFhLEVBQUVILGVBQWU7Z0JBQ3pFLElBQU0zQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QjJDLGVBQWU1QyxRQUFRNkMsOEJBQThCLENBQUN0QixjQUFjdUIsZUFBZUg7Z0JBRXpGLE9BQU9DO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsaUNBQWlDQyxrQkFBa0I7Z0JBQ2pELElBQU1oRCxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QndDLFdBQVd6QyxRQUFRK0MsZ0NBQWdDLENBQUNDO2dCQUUxRCxPQUFPUDtZQUNUOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBLG1DQUFtQ0MsZ0JBQWdCO2dCQUNqRCxJQUFNbEQsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJzQixlQUFldkIsUUFBUWlELGtDQUFrQyxDQUFDQztnQkFFaEUsT0FBTzNCO1lBQ1Q7OztZQUVBNEIsS0FBQUE7bUJBQUFBLFNBQUFBLHFDQUFxQzVCLFlBQVk7Z0JBQy9DLElBQU12QixVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6Qm1ELHFCQUFxQnBELFFBQVFtRCxvQ0FBb0MsQ0FBQzVCO2dCQUV4RSxPQUFPNkI7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSw4Q0FBOEM5QixZQUFZLEVBQUVxQixZQUFZLEVBQUVFLGFBQWEsRUFBRUgsZUFBZTtnQkFDdEcsSUFBTTNDLFVBQVUsSUFBSSxDQUFDQyxVQUFVO2dCQUUvQjJDLGVBQWU1QyxRQUFRcUQsNkNBQTZDLENBQUM5QixjQUFjcUIsY0FBY0UsZUFBZUgsa0JBQWtCLEdBQUc7Z0JBRXJJLE9BQU9DO1lBQ1Q7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUEsd0JBQXdCQyxRQUFRO2dCQUM5QixJQUFNdkQsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJ1RCxjQUFjeEQsUUFBUXNELHVCQUF1QixDQUFDQztnQkFFcEQsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSwwQkFBMEIxQixTQUFTO2dCQUNqQyxJQUFNL0IsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJ5RCxlQUFlMUQsUUFBUXlELHlCQUF5QixDQUFDMUI7Z0JBRXZELE9BQU8yQjtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGlDQUFpQ3BDLFlBQVk7Z0JBQzNDLElBQU12QixVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QjJELG1CQUFtQjVELFFBQVEyRCxnQ0FBZ0MsQ0FBQ3BDO2dCQUVsRSxPQUFPcUM7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxrQ0FBa0MzQixhQUFhO2dCQUM3QyxJQUFNbEMsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDN0I2RCxtQkFBbUI5RCxRQUFRNkQsaUNBQWlDLENBQUMzQjtnQkFFL0QsT0FBTzRCO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsa0NBQWtDQyxhQUFhO2dCQUM3QyxJQUFNaEUsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJnRSxtQkFBbUJqRSxRQUFRK0QsaUNBQWlDLENBQUNDO2dCQUVuRSxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGtDQUFrQ0MsYUFBYTtnQkFDN0MsSUFBTW5FLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCbUUsbUJBQW1CcEUsUUFBUWtFLGlDQUFpQyxDQUFDQztnQkFFbkUsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSx3Q0FBd0NDLGdCQUFnQjtnQkFDdEQsSUFBTXRFLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCc0Usc0JBQXNCdkUsUUFBUXFFLHVDQUF1QyxDQUFDQztnQkFFNUUsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSx5QkFBeUIvQyxJQUFJO2dCQUMzQixJQUFNekIsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJ3RSxtQkFBbUJ6RSxRQUFRd0Usd0JBQXdCLENBQUMvQztnQkFFMUQsT0FBT2dEO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsMEJBQTBCOUMsU0FBUztnQkFDakMsSUFBTTVCLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCMEUsZUFBZTNFLFFBQVEwRSx5QkFBeUIsQ0FBQzlDO2dCQUV2RCxPQUFPK0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxpQ0FBaUNoRCxTQUFTO2dCQUN4QyxJQUFNNUIsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekI0RSxzQkFBc0I3RSxRQUFRNEUsZ0NBQWdDLENBQUNoRDtnQkFFckUsT0FBT2lEO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUWpELElBQUk7Z0JBQ1YsSUFBTTdCLFVBQVUsSUFBSSxDQUFDQyxVQUFVO2dCQUUvQkQsUUFBUThFLE9BQU8sQ0FBQ2pEO1lBQ2xCOzs7WUFFQWtELEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxJQUFJO2dCQUNULElBQU1oRixVQUFVLElBQUksQ0FBQ0MsVUFBVTtnQkFFL0JELFFBQVErRSxNQUFNLENBQUNDO1lBQ2pCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNqRCxLQUFLO2dCQUNaLElBQU1oQyxVQUFVLElBQUksQ0FBQ0MsVUFBVTtnQkFFL0JELFFBQVFpRixRQUFRLENBQUNqRDtZQUNuQjs7O1lBRUFrRCxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYS9DLFNBQVM7Z0JBQ3BCLElBQU1uQyxVQUFVLElBQUksQ0FBQ0MsVUFBVTtnQkFFL0JELFFBQVFrRixZQUFZLENBQUMvQztZQUN2Qjs7O1lBRUFnRCxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYXZELFNBQVM7Z0JBQ3BCLElBQU01QixVQUFVLElBQUksQ0FBQ0MsVUFBVTtnQkFFL0JELFFBQVFtRixZQUFZLENBQUN2RDtZQUN2Qjs7O1lBRUF3RCxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUMsU0FBUztnQkFDcEIsSUFBTXJGLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCcUYsaUJBQWlCdEYsUUFBUW9GLFlBQVksQ0FBQ0M7Z0JBRTVDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCM0MsWUFBWTtnQkFDMUIsSUFBTTVDLFVBQVUsSUFBSSxDQUFDQyxVQUFVO2dCQUUvQkQsUUFBUXVGLGVBQWUsQ0FBQzNDO1lBQzFCOzs7WUFFQTRDLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUI1QyxZQUFZO2dCQUM3QixJQUFNNUMsVUFBVSxJQUFJLENBQUNDLFVBQVU7Z0JBRS9CRCxRQUFRd0Ysa0JBQWtCLENBQUM1QztZQUM3Qjs7O1lBRUE2QyxLQUFBQTttQkFBQUEsU0FBQUEsNEJBQTRCQyx3QkFBd0I7Z0JBQ2xELElBQU0xRixVQUFVLElBQUksQ0FBQ0MsVUFBVTtnQkFFL0JELFFBQVF5RiwyQkFBMkIsQ0FBQ0M7WUFDdEM7OztXQS9SbUI1RjtFQUFnQjZGLHVCQUFXIn0=