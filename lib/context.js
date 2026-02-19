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
            key: "getEqualities",
            value: function getEqualities() {
                var context = this.getContext(), equalities = context.getEqualities();
                return equalities;
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
            key: "getEquivalences",
            value: function getEquivalences() {
                var context = this.getContext(), equivalences = context.getEquivalences();
                return equivalences;
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
            key: "findTermByTermNode",
            value: function findTermByTermNode(termNode) {
                var context = this.getContext(), term = context.findTermByTermNode(termNode);
                return term;
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
            key: "findEqualityByEqualityNode",
            value: function findEqualityByEqualityNode(equalityNode) {
                var context = this.getContext(), equality = context.findEqualityByEqualityNode(equalityNode);
                return equality;
            }
        },
        {
            key: "findJudgementByJudgementNode",
            value: function findJudgementByJudgementNode(judgementNode) {
                var context = this.getContext(), judgement = context.findJudgementByJudgementNode(judgementNode);
                return judgement;
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
            key: "findProcedureByProcedureName",
            value: function findProcedureByProcedureName(procedureName) {
                var context = this.getContext(), procedure = context.findProcedureByProcedureName(procedureName);
                return procedure;
            }
        },
        {
            key: "isMetavariablePresent",
            value: function isMetavariablePresent(metavariable) {
                metavariable = this.findMetavariable(metavariable); ///
                var metavariablePresent = metavariable !== null;
                return metavariablePresent;
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
            key: "isJudgementPresentByJudgementNode",
            value: function isJudgementPresentByJudgementNode(judgementNode) {
                var context = this.getContext(), judgementPresent = context.isJudgementPresentByJudgementNode(judgementNode);
                return judgementPresent;
            }
        },
        {
            key: "isEqualityPresentByEqualityNode",
            value: function isEqualityPresentByEqualityNode(equalityNode) {
                var context = this.getContext(), equalityPresent = context.isEqualityPresentByEqualityNode(equalityNode);
                return equalityPresent;
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
            key: "isReferencePresentByMetavariableNode",
            value: function isReferencePresentByMetavariableNode(metvvariableNode) {
                var context = this.getContext(), referencePresent = context.isReferencePresentByMetavariableNode(metvvariableNode);
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
            key: "isProcedurePresentByProcedureName",
            value: function isProcedurePresentByProcedureName(procedureName) {
                var context = this.getContext(), procedurePresent = context.isProcedurePresentByProcedureName(procedureName);
                return procedurePresent;
            }
        },
        {
            key: "addTerm",
            value: function addTerm(term) {
                var context = this.getContext();
                context.addTerm(term);
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
                var context = this.getContext();
                context.addJudgement(judgement);
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
            key: "addSubproofOrProofAssertion",
            value: function addSubproofOrProofAssertion(subproofOrProofAssertion) {
                var context = this.getContext();
                context.addSubproofOrProofAssertion(subproofOrProofAssertion);
            }
        }
    ]);
    return Context;
}(_occamlanguages.Context);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb250ZXh0IGFzIENvbnRleHRCYXNlIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IGV4dGVuZHMgQ29udGV4dEJhc2Uge1xuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCk7XG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHBhcnNlciA9IGNvbnRleHQuZ2V0UGFyc2VyKCk7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gY29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRlcm1zID0gY29udGV4dC5nZXRUZXJtcygpO1xuXG4gICAgcmV0dXJuIHRlcm1zO1xuICB9XG5cbiAgZ2V0RnJhbWVzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgIGZyYW1lcyA9IGNvbnRleHQuZ2V0RnJhbWVzKCk7XG5cbiAgICByZXR1cm4gZnJhbWVzO1xuICB9XG5cbiAgZ2V0RXF1YWxpdGllcygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZXF1YWxpdGllcyA9IGNvbnRleHQuZ2V0RXF1YWxpdGllcygpO1xuXG4gICAgcmV0dXJuIGVxdWFsaXRpZXM7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRzID0gY29udGV4dC5nZXRTdGF0ZW1lbnRzKCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50cztcbiAgfVxuXG4gIGdldFJlZmVyZW5jZXMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJlZmVyZW5jZXMgPSBjb250ZXh0LmdldFJlZmVyZW5jZXMoKTtcblxuICAgIHJldHVybiByZWZlcmVuY2VzO1xuICB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSBjb250ZXh0LmdldEVxdWl2YWxlbmNlcygpO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBjb250ZXh0LmdldFN1YnN0aXR1dGlvbnMoKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IGNvbnRleHQuZ2V0VmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhpbmNsdWRlUmVsZWFzZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBjb21iaW5hdG9ycyA9IGNvbnRleHQuZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JzO1xuICB9XG5cbiAgZ2V0Q29uc3RydXN0b3JzKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnRleHQuZ2V0Q29uc3RydXN0b3JzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBjb250ZXh0LmdldE1ldGF2YXJpYWJsZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCk7XG5cbiAgICByZXR1cm4gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgbWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7ICAvLy9cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBmaW5kUnVsZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgIHJ1bGUgPSBjb250ZXh0LmZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uID0gY29udGV4dC5maW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsQXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIGZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgIGZyYW1lID0gY29udGV4dC5maW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgZXF1YWxpdHkgPSBjb250ZXh0LmZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSk7XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cblxuICBmaW5kSnVkZ2VtZW50QnlKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAganVkZ2VtZW50ID0gY29udGV4dC5maW5kSnVkZ2VtZW50QnlKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxuXG4gIGZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IGNvbnRleHQuZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICByZXR1cm4gc2ltcGxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgY29tcGxleFN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGNvbXBsZXhTdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5hbWUsIHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIHN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOYW1lLCBzdWJzdGl0dXRpb24pOyAvLy9cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICBwcm9jZWR1cmUgPSBjb250ZXh0LmZpbmRQcm9jZWR1cmVCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlO1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50KG1ldGF2YXJpYWJsZSkge1xuICAgIG1ldGF2YXJpYWJsZSA9IHRoaXMuZmluZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpOyAvLy9cblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVByZXNlbnQgPSAobWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGFiZWxQcmVzZW50ID0gY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gbGFiZWxQcmVzZW50O1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzVGVybVByZXNlbnRCeVRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRlcm1QcmVzZW50ID0gY29udGV4dC5pc1Rlcm1QcmVzZW50QnlUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybVByZXNlbnQ7XG4gIH1cblxuICBpc0ZyYW1lUHJlc2VudEJ5RnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBmcmFtZVByZXNlbnQgPSBjb250ZXh0LmlzRnJhbWVQcmVzZW50QnlGcmFtZU5vZGUoZnJhbWVOb2RlKTtcblxuICAgIHJldHVybiBmcmFtZVByZXNlbnQ7XG4gIH1cblxuICBpc0p1ZGdlbWVudFByZXNlbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBqdWRnZW1lbnRQcmVzZW50ID0gY29udGV4dC5pc0p1ZGdlbWVudFByZXNlbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50UHJlc2VudDtcbiAgfVxuXG4gIGlzRXF1YWxpdHlQcmVzZW50QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGVxdWFsaXR5UHJlc2VudCA9IGNvbnRleHQuaXNFcXVhbGl0eVByZXNlbnRCeUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5UHJlc2VudDtcbiAgfVxuXG4gIGlzU3RhdGVtZW50UHJlc2VudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgc3RhdGVtZW50UHJlc2VudCA9IGNvbnRleHQuaXNTdGF0ZW1lbnRQcmVzZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFByZXNlbnQ7XG4gIH1cblxuICBpc0Fzc2VydGlvblByZXNlbnRCeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBhc3NlcnRpb25QcmVzZW50ID0gY29udGV4dC5pc0Fzc2VydGlvblByZXNlbnRCeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSk7XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzUmVmZXJlbmNlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXR2dmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJlZmVyZW5jZVByZXNlbnQgPSBjb250ZXh0LmlzUmVmZXJlbmNlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXR2dmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiByZWZlcmVuY2VQcmVzZW50O1xuICB9XG5cbiAgaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAganVkZ2VtZW50UHJlc2VudCA9IGNvbnRleHQuaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudFByZXNlbnQ7XG4gIH1cblxuICBpc1N1YnN0aXR1dGlvblByZXNlbnRCeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25QcmVzZW50ID0gY29udGV4dC5pc1N1YnN0aXR1dGlvblByZXNlbnRCeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzUHJvY2VkdXJlUHJlc2VudEJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHByb2NlZHVyZVByZXNlbnQgPSBjb250ZXh0LmlzUHJvY2VkdXJlUHJlc2VudEJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVQcmVzZW50O1xuICB9XG5cbiAgYWRkVGVybSh0ZXJtKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRUZXJtKHRlcm0pO1xuICB9XG5cbiAgYWRkRnJhbWUoZnJhbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZEZyYW1lKGZyYW1lKTtcbiAgfVxuXG4gIGFkZFN0YXRlbWVudChzdGF0ZW1lbnQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZFN0YXRlbWVudChzdGF0ZW1lbnQpO1xuICB9XG5cbiAgYWRkUmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkUmVmZXJlbmNlKHJlZmVyZW5jZSk7XG4gIH1cblxuICBhZGRKdWRnZW1lbnQoanVkZ2VtZW50KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRKdWRnZW1lbnQoanVkZ2VtZW50KTtcbiAgfVxuXG4gIGFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pO1xuICB9XG5cbiAgYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb250ZXh0IiwiZ2V0TGV4ZXIiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImxleGVyIiwiZ2V0UGFyc2VyIiwicGFyc2VyIiwiZ2V0RmlsZVBhdGgiLCJmaWxlUGF0aCIsImdldFRlcm1zIiwidGVybXMiLCJnZXRGcmFtZXMiLCJmcmFtZXMiLCJnZXRFcXVhbGl0aWVzIiwiZXF1YWxpdGllcyIsImdldFN0YXRlbWVudHMiLCJzdGF0ZW1lbnRzIiwiZ2V0UmVmZXJlbmNlcyIsInJlZmVyZW5jZXMiLCJnZXRFcXVpdmFsZW5jZXMiLCJlcXVpdmFsZW5jZXMiLCJnZXRTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9ucyIsImdldFZhcmlhYmxlcyIsImluY2x1ZGVSZWxlYXNlIiwidmFyaWFibGVzIiwiZ2V0Q29tYmluYXRvcnMiLCJjb21iaW5hdG9ycyIsImdldENvbnN0cnVzdG9ycyIsImNvbnN0cnVjdG9ycyIsImdldE1ldGF2YXJpYWJsZXMiLCJtZXRhdmFyaWFibGVzIiwiZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJmaW5kTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwiZmluZFJ1bGVCeVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInJ1bGUiLCJmaW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZSIsInRvcExldmVsQXNzZXJ0aW9uIiwiZmluZFRlcm1CeVRlcm1Ob2RlIiwidGVybU5vZGUiLCJ0ZXJtIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJmcmFtZU5vZGUiLCJmcmFtZSIsImZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlOb2RlIiwiZXF1YWxpdHkiLCJmaW5kSnVkZ2VtZW50QnlKdWRnZW1lbnROb2RlIiwianVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudCIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50IiwiZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJzdWJzdGl0dXRpb24iLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwiZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVJZGVudGlmaWVyIiwiZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZSIsInNpbXBsZVN1YnN0aXR1dGlvbiIsImZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTmFtZSIsImNvbXBsZXhTdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uIiwiZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZU5hbWUiLCJwcm9jZWR1cmUiLCJpc01ldGF2YXJpYWJsZVByZXNlbnQiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZSIsImxhYmVsUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlIiwiaXNUZXJtUHJlc2VudEJ5VGVybU5vZGUiLCJ0ZXJtUHJlc2VudCIsImlzRnJhbWVQcmVzZW50QnlGcmFtZU5vZGUiLCJmcmFtZVByZXNlbnQiLCJpc0p1ZGdlbWVudFByZXNlbnRCeUp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnRQcmVzZW50IiwiaXNFcXVhbGl0eVByZXNlbnRCeUVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5UHJlc2VudCIsImlzU3RhdGVtZW50UHJlc2VudEJ5U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFByZXNlbnQiLCJpc0Fzc2VydGlvblByZXNlbnRCeUFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uUHJlc2VudCIsImlzUmVmZXJlbmNlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldHZ2YXJpYWJsZU5vZGUiLCJyZWZlcmVuY2VQcmVzZW50IiwiaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvblByZXNlbnQiLCJpc1Byb2NlZHVyZVByZXNlbnRCeVByb2NlZHVyZU5hbWUiLCJwcm9jZWR1cmVQcmVzZW50IiwiYWRkVGVybSIsImFkZEZyYW1lIiwiYWRkU3RhdGVtZW50IiwiYWRkUmVmZXJlbmNlIiwiYWRkSnVkZ2VtZW50IiwiYWRkU3Vic3RpdHV0aW9uIiwiYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwiQ29udGV4dEJhc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzhCQUZrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEIsSUFBQSxBQUFNQSx3QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCQyxRQUFRRixRQUFRRCxRQUFRO2dCQUU5QixPQUFPRztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ILFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCRyxTQUFTSixRQUFRRyxTQUFTO2dCQUVoQyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1MLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCSyxXQUFXTixRQUFRSyxXQUFXO2dCQUVwQyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1QLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCTyxRQUFRUixRQUFRTyxRQUFRO2dCQUU5QixPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ULFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQzdCUyxTQUFTVixRQUFRUyxTQUFTO2dCQUU1QixPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1YLFVBQVUsSUFBSSxD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