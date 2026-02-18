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
            key: "getStatements",
            value: function getStatements() {
                var context = this.getContext(), statements = context.getStatements();
                return statements;
            }
        },
        {
            key: "getReferences",
            value: function getReferences() {
                var context = this.getContext(), references = context.getReferences();
                return references;
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
            key: "getConstrustors",
            value: function getConstrustors(includeRelease) {
                var context = this.getContext(), constructors = context.getConstrustors(includeRelease);
                return constructors;
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
            key: "findVariableByVariableIdentifier",
            value: function findVariableByVariableIdentifier(variableIdentifier) {
                var context = this.getContext(), variable = context.findVariableByVariableIdentifier(variableIdentifier);
                return variable;
            }
        },
        {
            key: "findSubstitutionByMetavariableName",
            value: function findSubstitutionByMetavariableName(metavariableName) {
                var context = this.getContext(), substitution = context.findSubstitutionByMetavariableName(metavariableName);
                return substitution;
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
            key: "findSubstitutionByVariableIdentifier",
            value: function findSubstitutionByVariableIdentifier(variableIdentifier) {
                var context = this.getContext(), substitution = context.findSubstitutionByVariableIdentifier(variableIdentifier);
                return substitution;
            }
        },
        {
            key: "findSimpleSubstitutionByMetavariableName",
            value: function findSimpleSubstitutionByMetavariableName(metavariableName) {
                var context = this.getContext(), simpleSubstitution = context.findSimpleSubstitutionByMetavariableName(metavariableName);
                return simpleSubstitution;
            }
        },
        {
            key: "findComplexSubstitutionsByMetavariableName",
            value: function findComplexSubstitutionsByMetavariableName(metavariableName) {
                var context = this.getContext(), complexSubstitution = context.findComplexSubstitutionsByMetavariableName(metavariableName);
                return complexSubstitution;
            }
        },
        {
            key: "findSubstitutionByMetavariableNameAndSubstitution",
            value: function findSubstitutionByMetavariableNameAndSubstitution(metavariableName, substitution) {
                var context = this.getContext();
                substitution = context.findSubstitutionByMetavariableNameAndSubstitution(metavariableName, substitution); ///
                return substitution;
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
            key: "findTopLevelAssertionByReference",
            value: function findTopLevelAssertionByReference(reference) {
                var context = this.getContext(), topLevelAssertion = context.findTopLevelAssertionByReference(reference);
                return topLevelAssertion;
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
            key: "isProcedurePresentByName",
            value: function isProcedurePresentByName(name) {
                var context = this.getContext(), procedurePresent = context.isProcedurePresentByName(name);
                return procedurePresent;
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
            key: "isJudgementPresentByMetavariableName",
            value: function isJudgementPresentByMetavariableName(metavariableName) {
                var context = this.getContext(), judgementPresent = context.isJudgementPresentByMetavariableName(metavariableName);
                return judgementPresent;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb250ZXh0IGFzIENvbnRleHRCYXNlIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IGV4dGVuZHMgQ29udGV4dEJhc2Uge1xuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCk7XG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHBhcnNlciA9IGNvbnRleHQuZ2V0UGFyc2VyKCk7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gY29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRlcm1zID0gY29udGV4dC5nZXRUZXJtcygpO1xuXG4gICAgcmV0dXJuIHRlcm1zO1xuICB9XG5cbiAgZ2V0RnJhbWVzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBmcmFtZXMgPSBjb250ZXh0LmdldEZyYW1lcygpO1xuXG4gICAgcmV0dXJuIGZyYW1lcztcbiAgfVxuXG4gIGdldFN0YXRlbWVudHMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN0YXRlbWVudHMgPSBjb250ZXh0LmdldFN0YXRlbWVudHMoKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlcygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcmVmZXJlbmNlcyA9IGNvbnRleHQuZ2V0UmVmZXJlbmNlcygpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZXM7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25zKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gY29udGV4dC5nZXRTdWJzdGl0dXRpb25zKCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldFZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB2YXJpYWJsZXMgPSBjb250ZXh0LmdldFZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBjb250ZXh0LmdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVzdG9ycyhpbmNsdWRlUmVsZWFzZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb250ZXh0LmdldENvbnN0cnVzdG9ycyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gY29udGV4dC5nZXRNZXRhdmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpO1xuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnM7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZmluZFByb2NlZHVyZUJ5TmFtZShuYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHByb2NlZHVyZSA9IGNvbnRleHQuZmluZFByb2NlZHVyZUJ5TmFtZShuYW1lKTtcblxuICAgIHJldHVybiBwcm9jZWR1cmU7XG4gIH1cblxuICBmaW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZnJhbWUgPSBjb250ZXh0LmZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSk7XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIGZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBjb250ZXh0LmZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHNpbXBsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIHJldHVybiBjb21wbGV4U3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOYW1lLCBzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBzdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTmFtZSwgc3Vic3RpdHV0aW9uKTsgLy8vXG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcnVsZSA9IGNvbnRleHQuZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBmaW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb24gPSBjb250ZXh0LmZpbmRUb3BMZXZlbEFzc2VydGlvbkJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxBc3NlcnRpb247XG4gIH1cblxuICBpc1Rlcm1QcmVzZW50QnlUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0ZXJtUHJlc2VudCA9IGNvbnRleHQuaXNUZXJtUHJlc2VudEJ5VGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgcmV0dXJuIHRlcm1QcmVzZW50O1xuICB9XG5cbiAgaXNQcm9jZWR1cmVQcmVzZW50QnlOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcHJvY2VkdXJlUHJlc2VudCA9IGNvbnRleHQuaXNQcm9jZWR1cmVQcmVzZW50QnlOYW1lKG5hbWUpO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZVByZXNlbnQ7XG4gIH1cblxuICBpc0ZyYW1lUHJlc2VudEJ5RnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBmcmFtZVByZXNlbnQgPSBjb250ZXh0LmlzRnJhbWVQcmVzZW50QnlGcmFtZU5vZGUoZnJhbWVOb2RlKTtcblxuICAgIHJldHVybiBmcmFtZVByZXNlbnQ7XG4gIH1cblxuICBpc1N0YXRlbWVudFByZXNlbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgIHN0YXRlbWVudFByZXNlbnQgPSBjb250ZXh0LmlzU3RhdGVtZW50UHJlc2VudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRQcmVzZW50O1xuICB9XG5cbiAgaXNBc3NlcnRpb25QcmVzZW50QnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgYXNzZXJ0aW9uUHJlc2VudCA9IGNvbnRleHQuaXNBc3NlcnRpb25QcmVzZW50QnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIGFzc2VydGlvblByZXNlbnQ7XG4gIH1cblxuICBpc1JlZmVyZW5jZVByZXNlbnRCeVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICByZWZlcmVuY2VQcmVzZW50ID0gY29udGV4dC5pc1JlZmVyZW5jZVByZXNlbnRCeVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlUHJlc2VudDtcbiAgfVxuXG4gIGlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGp1ZGdlbWVudFByZXNlbnQgPSBjb250ZXh0LmlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIHJldHVybiBqdWRnZW1lbnRQcmVzZW50O1xuICB9XG5cbiAgaXNTdWJzdGl0dXRpb25QcmVzZW50QnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uUHJlc2VudCA9IGNvbnRleHQuaXNTdWJzdGl0dXRpb25QcmVzZW50QnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSBjb250ZXh0LmlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIHJldHVybiBsYWJlbFByZXNlbnQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgYWRkUnVsZShydWxlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRSdWxlKHJ1bGUpO1xuICB9XG5cbiAgYWRUZXJtKHRlcm0pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkVGVybSh0ZXJtKTtcbiAgfVxuXG4gIGFkZEZyYW1lKGZyYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRGcmFtZShmcmFtZSk7XG4gIH1cblxuICBhZGRTdGF0ZW1lbnQoc3RhdGVtZW50KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRTdGF0ZW1lbnQoc3RhdGVtZW50KTtcbiAgfVxuXG4gIGFkZFJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZFJlZmVyZW5jZShyZWZlcmVuY2UpO1xuICB9XG5cbiAgYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBqdWRnZW1lbnRBZGRlZCA9IGNvbnRleHQuYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50QWRkZWQ7XG4gIH1cblxuICBhZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKTtcbiAgfVxuXG4gIHJlbW92ZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LnJlbW92ZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pO1xuICB9XG5cbiAgYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb250ZXh0IiwiZ2V0TGV4ZXIiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImxleGVyIiwiZ2V0UGFyc2VyIiwicGFyc2VyIiwiZ2V0RmlsZVBhdGgiLCJmaWxlUGF0aCIsImdldFRlcm1zIiwidGVybXMiLCJnZXRGcmFtZXMiLCJmcmFtZXMiLCJnZXRTdGF0ZW1lbnRzIiwic3RhdGVtZW50cyIsImdldFJlZmVyZW5jZXMiLCJyZWZlcmVuY2VzIiwiZ2V0U3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJnZXRWYXJpYWJsZXMiLCJpbmNsdWRlUmVsZWFzZSIsInZhcmlhYmxlcyIsImdldENvbWJpbmF0b3JzIiwiY29tYmluYXRvcnMiLCJnZXRDb25zdHJ1c3RvcnMiLCJjb25zdHJ1Y3RvcnMiLCJnZXRNZXRhdmFyaWFibGVzIiwibWV0YXZhcmlhYmxlcyIsImdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiZmluZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsImZpbmRQcm9jZWR1cmVCeU5hbWUiLCJuYW1lIiwicHJvY2VkdXJlIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJmcmFtZU5vZGUiLCJmcmFtZSIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50IiwiZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJyZWZlcmVuY2UiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJzdWJzdGl0dXRpb24iLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwiZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVJZGVudGlmaWVyIiwiZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZSIsInNpbXBsZVN1YnN0aXR1dGlvbiIsImZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTmFtZSIsImNvbXBsZXhTdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uIiwiZmluZFJ1bGVCeVJlZmVyZW5jZSIsInJ1bGUiLCJmaW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZSIsInRvcExldmVsQXNzZXJ0aW9uIiwiaXNUZXJtUHJlc2VudEJ5VGVybU5vZGUiLCJ0ZXJtTm9kZSIsInRlcm1QcmVzZW50IiwiaXNQcm9jZWR1cmVQcmVzZW50QnlOYW1lIiwicHJvY2VkdXJlUHJlc2VudCIsImlzRnJhbWVQcmVzZW50QnlGcmFtZU5vZGUiLCJmcmFtZVByZXNlbnQiLCJpc1N0YXRlbWVudFByZXNlbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRQcmVzZW50IiwiaXNBc3NlcnRpb25QcmVzZW50QnlBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvblByZXNlbnQiLCJpc1JlZmVyZW5jZVByZXNlbnRCeVJlZmVyZW5jZU5vZGUiLCJyZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlUHJlc2VudCIsImlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImp1ZGdlbWVudFByZXNlbnQiLCJpc1N1YnN0aXR1dGlvblByZXNlbnRCeVN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UiLCJsYWJlbFByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJhZGRSdWxlIiwiYWRUZXJtIiwidGVybSIsImFkZEZyYW1lIiwiYWRkU3RhdGVtZW50IiwiYWRkUmVmZXJlbmNlIiwiYWRkSnVkZ2VtZW50IiwianVkZ2VtZW50IiwianVkZ2VtZW50QWRkZWQiLCJhZGRTdWJzdGl0dXRpb24iLCJyZW1vdmVTdWJzdGl0dXRpb24iLCJhZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJDb250ZXh0QmFzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7OEJBRmtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QixJQUFBLEFBQU1BLHdCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJDLFFBQVFGLFFBQVFELFFBQVE7Z0JBRTlCLE9BQU9HO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUgsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJHLFNBQVNKLFFBQVFHLFNBQVM7Z0JBRWhDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUwsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJLLFdBQVdOLFFBQVFLLFdBQVc7Z0JBRXBDLE9BQU9DO1lB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