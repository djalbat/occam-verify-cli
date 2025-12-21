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
var _substitution = /*#__PURE__*/ _interop_require_default(require("../substitution"));
var _term = /*#__PURE__*/ _interop_require_default(require("../../context/partial/substitution/term"));
var _ontology = /*#__PURE__*/ _interop_require_wildcard(require("../../ontology"));
var _query = require("../../utilities/query");
var _brackets = require("../../utilities/brackets");
var _variable = require("../../utilities/variable");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
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
var _TermSubstitution;
var termVariableNodeQuery = (0, _query.nodeQuery)("/term/variable!");
var _default = (0, _ontology.define)((_TermSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(TermSubstitution, Substitution);
    function TermSubstitution(context, string, node, tokens, term, variable) {
        _class_call_check(this, TermSubstitution);
        var _this;
        _this = _call_super(this, TermSubstitution, [
            context,
            string,
            node,
            tokens
        ]);
        _this.term = term;
        _this.variable = variable;
        return _this;
    }
    _create_class(TermSubstitution, [
        {
            key: "getTerm",
            value: function getTerm() {
                return this.term;
            }
        },
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "getReplacementNode",
            value: function getReplacementNode() {
                var termNode = this.term.getNode(), replacementNode = termNode; ///
                return replacementNode;
            }
        },
        {
            key: "isTrivial",
            value: function isTrivial() {
                var termString = this.term.getString(), variableString = this.variable.getString(), trivial = termString === variableString;
                return trivial;
            }
        },
        {
            key: "isTermEqualToTerm",
            value: function isTermEqualToTerm(term, context) {
                term = (0, _brackets.stripBracketsFromTerm)(term, context); ///
                var termEqualToTerm = this.term.isEqualTo(term);
                return termEqualToTerm;
            }
        },
        {
            key: "isTermVariableEqualToTerm",
            value: function isTermVariableEqualToTerm(termVariable, context) {
                var termVariableEqualToTerm = false;
                var termNode = this.term.getNode();
                var termVariableNode;
                termVariableNode = termVariableNodeQuery(termNode);
                if (termVariableNode !== null) {
                    var termVariableNodeA = termVariableNode; ///
                    termVariableNode = termVariable.getNode();
                    var termVariableNodeB = termVariableNode, termVariableNodeAMatchesTermVariableNodeB = termVariableNodeA.match(termVariableNodeB);
                    if (termVariableNodeAMatchesTermVariableNodeB) {
                        termVariableEqualToTerm = true;
                    }
                }
                return termVariableEqualToTerm;
            }
        },
        {
            key: "matchParameter",
            value: function matchParameter(parameter) {
                return this.variable.matchParameter(parameter);
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var verifies = false;
                var termSubstitutionString = this.string; ///
                context.trace("Verifiying the '".concat(termSubstitutionString, "' term substitutin..."));
                var termSimple = this.term.isSimple();
                if (termSimple) {
                    if (this.variable === null) {
                        context.debug("The specific term is not simple.");
                    } else {
                        var variableIdentigier = this.variable.getIdentifier(), variablePresent = context.isVariablePresentByVariableIdentifier(variableIdentigier);
                        if (variablePresent) {
                            var variable = this.term.getVariable(), variableIdentigier1 = variable.getIdentifier(), variablePresent1 = context.isVariablePresentByVariableIdentifier(variableIdentigier1);
                            if (variablePresent1) {
                                verifies = true;
                            } else {
                                var variableString = variable.getString();
                                context.debug("The '".concat(variableString, "' variable is not present."));
                            }
                        } else {
                            var variableString1 = this.variable.getString();
                            context.debug("The '".concat(variableString1, "' variable is not present."));
                        }
                    }
                } else {
                    context.debug("The general term is not simple.");
                }
                if (verifies) {
                    var substititoin = this; ///
                    context.addSubstitution(substititoin);
                    context.debug("...verified the '".concat(termSubstitutionString, "' term substitutin."));
                }
                return verifies;
            }
        }
    ], [
        {
            key: "fromStatement",
            value: function fromStatement(statement, context) {
                var termSubstitution = null;
                var statementNode = statement.getNode(), termSubstitutionNode = statementNode.getTermSubstitutionNode();
                if (termSubstitutionNode !== null) {
                    var Term = _ontology.default.Term, Variable = _ontology.default.Variable, firstTermNode = termSubstitutionNode.getFirstTermNode(), lastVariableNode = termSubstitutionNode.getLastVariableNode(), termNode = firstTermNode, variableNode = lastVariableNode, term = Term.fromTermNode(termNode, context), variable = Variable.fromVariableNode(variableNode, context), node = termSubstitutionNode, tokens = context.nodeAsTokens(node), string = stringFromTermAndVariable(term, variable);
                    termSubstitution = new TermSubstitution(context, string, node, tokens, term, variable);
                }
                return termSubstitution;
            }
        },
        {
            key: "fromTernAndVariable",
            value: function fromTernAndVariable(term, variable, context) {
                var lexer = context.getLexer(), parser = context.getParser(), string = stringFromTermAndVariable(term, variable), termSubstitutionPartialContext = _term.default.fromStringLexerAndParser(string, lexer, parser), node = termSubstitutionPartialContext.getNode(), tokens = termSubstitutionPartialContext.getTokens();
                var termSubstitution = new TermSubstitution(context, string, node, tokens, term, variable);
                return termSubstitution;
            }
        }
    ]);
    return TermSubstitution;
}(_substitution.default), _define_property(_TermSubstitution, "name", "TermSubstitution"), _TermSubstitution));
function stringFromTermAndVariable(term, variable) {
    var termString = term.getString(), variableString = variable.getString(), string = "[".concat(termString, " for ").concat(variableString, "]");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9zdWJzdGl0dXRpb24vdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5pbXBvcnQgVGVybVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L3BhcnRpYWwvc3Vic3RpdHV0aW9uL3Rlcm1cIjtcblxuaW1wb3J0IG9udG9sb2d5LCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9vbnRvbG9neVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21UZXJtIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuaW1wb3J0IHsgdmFyaWFibGVJZGVudGlmaWVyRnJvbVZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmFyaWFibGVcIjtcblxuY29uc3QgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdG9rZW5zLCB0ZXJtLCB2YXJpYWJsZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdG9rZW5zKTtcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudE5vZGUoKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0aGlzLnRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IHRlcm1Ob2RlOyAvLy9cblxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGU7XG4gIH1cblxuICBpc1RyaXZpYWwoKSB7XG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHRoaXMudmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdHJpdmlhbCA9ICh0ZXJtU3RyaW5nID09PSB2YXJpYWJsZVN0cmluZyk7XG5cbiAgICByZXR1cm4gdHJpdmlhbDtcbiAgfVxuXG4gIGlzVGVybUVxdWFsVG9UZXJtKHRlcm0sIGNvbnRleHQpIHtcbiAgICB0ZXJtID0gc3RyaXBCcmFja2V0c0Zyb21UZXJtKHRlcm0sIGNvbnRleHQpOyAvLy9cblxuICAgIGNvbnN0IHRlcm1FcXVhbFRvVGVybSA9IHRoaXMudGVybS5pc0VxdWFsVG8odGVybSk7XG5cbiAgICByZXR1cm4gdGVybUVxdWFsVG9UZXJtO1xuICB9XG5cbiAgaXNUZXJtVmFyaWFibGVFcXVhbFRvVGVybSh0ZXJtVmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZhcmlhYmxlRXF1YWxUb1Rlcm0gPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGhpcy50ZXJtLmdldE5vZGUoKTtcblxuICAgIGxldCB0ZXJtVmFyaWFibGVOb2RlO1xuXG4gICAgdGVybVZhcmlhYmxlTm9kZSA9IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgICBpZiAodGVybVZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybVZhcmlhYmxlTm9kZUEgPSB0ZXJtVmFyaWFibGVOb2RlOyAvLy9cblxuICAgICAgdGVybVZhcmlhYmxlTm9kZSA9IHRlcm1WYXJpYWJsZS5nZXROb2RlKCk7XG5cbiAgICAgIGNvbnN0IHRlcm1WYXJpYWJsZU5vZGVCID0gdGVybVZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICB0ZXJtVmFyaWFibGVOb2RlQU1hdGNoZXNUZXJtVmFyaWFibGVOb2RlQiA9IHRlcm1WYXJpYWJsZU5vZGVBLm1hdGNoKHRlcm1WYXJpYWJsZU5vZGVCKTtcblxuICAgICAgaWYgKHRlcm1WYXJpYWJsZU5vZGVBTWF0Y2hlc1Rlcm1WYXJpYWJsZU5vZGVCKSB7XG4gICAgICAgIHRlcm1WYXJpYWJsZUVxdWFsVG9UZXJtID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVZhcmlhYmxlRXF1YWxUb1Rlcm07XG4gIH1cblxuICBtYXRjaFBhcmFtZXRlcihwYXJhbWV0ZXIpIHsgcmV0dXJuIHRoaXMudmFyaWFibGUubWF0Y2hQYXJhbWV0ZXIocGFyYW1ldGVyKTsgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmaXlpbmcgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGluLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtU2ltcGxlID0gdGhpcy50ZXJtLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAodGVybVNpbXBsZSkge1xuICAgICAgaWYgKHRoaXMudmFyaWFibGUgPT09IG51bGwpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlIHNwZWNpZmljIHRlcm0gaXMgbm90IHNpbXBsZS5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZ2llciA9IHRoaXMudmFyaWFibGUuZ2V0SWRlbnRpZmllcigpLFxuICAgICAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlnaWVyKTtcblxuICAgICAgICBpZiAodmFyaWFibGVQcmVzZW50KSB7XG4gICAgICAgICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLnRlcm0uZ2V0VmFyaWFibGUoKSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZUlkZW50aWdpZXIgPSB2YXJpYWJsZS5nZXRJZGVudGlmaWVyKCksXG4gICAgICAgICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZ2llcik7XG5cbiAgICAgICAgICBpZiAodmFyaWFibGVQcmVzZW50KSB7XG4gICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMudmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgZ2VuZXJhbCB0ZXJtIGlzIG5vdCBzaW1wbGUuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBzdWJzdGl0aXRvaW4gPSB0aGlzOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXRpdG9pbik7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVGVybVN1YnN0aXR1dGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSgpO1xuXG4gICAgaWYgKHRlcm1TdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFRlcm0sIFZhcmlhYmxlIH0gPSBvbnRvbG9neSxcbiAgICAgICAgICAgIGZpcnN0VGVybU5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZS5nZXRGaXJzdFRlcm1Ob2RlKCksXG4gICAgICAgICAgICBsYXN0VmFyaWFibGVOb2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUuZ2V0TGFzdFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgICAgdGVybU5vZGUgPSBmaXJzdFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IGxhc3RWYXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgdG9rZW5zID0gY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlKTtcblxuICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdG9rZW5zLCB0ZXJtLCB2YXJpYWJsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm5BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGxleGVyID0gY29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSksXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0ID0gVGVybVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmZyb21TdHJpbmdMZXhlckFuZFBhcnNlcihzdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgIG5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRva2VucyA9IHRlcm1TdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5nZXRUb2tlbnMoKTtcblxuICAgIGNvbnN0IHRlcm1TdWJzdGl0dXRpb24gPSBuZXcgVGVybVN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRva2VucywgdGVybSwgdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlKSB7XG4gIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgWyR7dGVybVN0cmluZ30gZm9yICR7dmFyaWFibGVTdHJpbmd9XWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJ0ZXJtVmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkZWZpbmUiLCJUZXJtU3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJ0ZXJtIiwidmFyaWFibGUiLCJnZXRUZXJtIiwiZ2V0VmFyaWFibGUiLCJnZXRSZXBsYWNlbWVudE5vZGUiLCJ0ZXJtTm9kZSIsImdldE5vZGUiLCJyZXBsYWNlbWVudE5vZGUiLCJpc1RyaXZpYWwiLCJ0ZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwidmFyaWFibGVTdHJpbmciLCJ0cml2aWFsIiwiaXNUZXJtRXF1YWxUb1Rlcm0iLCJzdHJpcEJyYWNrZXRzRnJvbVRlcm0iLCJ0ZXJtRXF1YWxUb1Rlcm0iLCJpc0VxdWFsVG8iLCJpc1Rlcm1WYXJpYWJsZUVxdWFsVG9UZXJtIiwidGVybVZhcmlhYmxlIiwidGVybVZhcmlhYmxlRXF1YWxUb1Rlcm0iLCJ0ZXJtVmFyaWFibGVOb2RlIiwidGVybVZhcmlhYmxlTm9kZUEiLCJ0ZXJtVmFyaWFibGVOb2RlQiIsInRlcm1WYXJpYWJsZU5vZGVBTWF0Y2hlc1Rlcm1WYXJpYWJsZU5vZGVCIiwibWF0Y2giLCJtYXRjaFBhcmFtZXRlciIsInBhcmFtZXRlciIsInZlcmlmeSIsInZlcmlmaWVzIiwidGVybVN1YnN0aXR1dGlvblN0cmluZyIsInRyYWNlIiwidGVybVNpbXBsZSIsImlzU2ltcGxlIiwiZGVidWciLCJ2YXJpYWJsZUlkZW50aWdpZXIiLCJnZXRJZGVudGlmaWVyIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllciIsInN1YnN0aXRpdG9pbiIsImFkZFN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJ0ZXJtU3Vic3RpdHV0aW9uIiwic3RhdGVtZW50Tm9kZSIsInRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUiLCJUZXJtIiwib250b2xvZ3kiLCJWYXJpYWJsZSIsImZpcnN0VGVybU5vZGUiLCJnZXRGaXJzdFRlcm1Ob2RlIiwibGFzdFZhcmlhYmxlTm9kZSIsImdldExhc3RWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJmcm9tVGVybU5vZGUiLCJmcm9tVmFyaWFibGVOb2RlIiwibm9kZUFzVG9rZW5zIiwic3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSIsImZyb21UZXJuQW5kVmFyaWFibGUiLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwidGVybVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0IiwiVGVybVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0IiwiZnJvbVN0cmluZ0xleGVyQW5kUGFyc2VyIiwiZ2V0VG9rZW5zIiwiU3Vic3RpdHV0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7bUVBVnlCOzJEQUNrQjtnRUFFVjtxQkFDUDt3QkFDWTt3QkFDYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkQsSUFBTUEsd0JBQXdCQyxJQUFBQSxnQkFBUyxFQUFDO0lBRXhDLFdBQWVDLElBQUFBLGdCQUFNLHFDQUFDOzthQUFNQyxpQkFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVD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