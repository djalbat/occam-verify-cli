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
var _ontology = /*#__PURE__*/ _interop_require_wildcard(require("../../ontology"));
var _substitution = /*#__PURE__*/ _interop_require_default(require("../substitution"));
var _term = /*#__PURE__*/ _interop_require_default(require("../../context/partial/substitution/term"));
var _brackets = require("../../utilities/brackets");
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
                var trivial = false;
                var termEqualToVariable = this.term.isEqualToVariable(this.variable);
                if (termEqualToVariable) {
                    trivial = true;
                }
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
                context.trace("Verifiying the '".concat(termSubstitutionString, "' term substitution..."));
                var termSingular = this.term.isSingular();
                if (termSingular) {
                    if (this.variable !== null) {
                        var variableIdentifier = this.variable.getIdentifier(), variablePresent = context.isVariablePresentByVariableIdentifier(variableIdentifier);
                        if (variablePresent) {
                            var termNode = this.term.getNode(), variableIdentifier1 = termNode.getVariableIdentifier(), termVariableIdentifier = variableIdentifier1, termVariablePresent = context.isVariablePresentByVariableIdentifier(termVariableIdentifier);
                            if (termVariablePresent) {
                                verifies = true;
                            } else {
                                context.debug("The '".concat(termSubstitutionString, "' term substitution's general term's variable is not present."));
                            }
                        } else {
                            context.debug("The '".concat(termSubstitutionString, "' term substitution's specific term's variable is not present."));
                        }
                    } else {
                        context.debug("The '".concat(termSubstitutionString, "' term substitution's general term is not singular."));
                    }
                } else {
                    context.debug("The '".concat(termSubstitutionString, "' term substitution's specific term is not singular."));
                }
                if (verifies) {
                    var substititoin = this; ///
                    context.addSubstitution(substititoin);
                    context.debug("...verified the '".concat(termSubstitutionString, "' term substitution."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9zdWJzdGl0dXRpb24vdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi8uLi9vbnRvbG9neVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5pbXBvcnQgVGVybVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L3BhcnRpYWwvc3Vic3RpdHV0aW9uL3Rlcm1cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL29udG9sb2d5XCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVRlcm0gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFRlcm1TdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRva2VucywgdGVybSwgdmFyaWFibGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRva2Vucyk7XG5cbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGhpcy50ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSB0ZXJtTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnROb2RlO1xuICB9XG5cbiAgaXNUcml2aWFsKCkge1xuICAgIGxldCB0cml2aWFsID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtRXF1YWxUb1ZhcmlhYmxlID0gdGhpcy50ZXJtLmlzRXF1YWxUb1ZhcmlhYmxlKHRoaXMudmFyaWFibGUpO1xuXG4gICAgaWYgKHRlcm1FcXVhbFRvVmFyaWFibGUpIHtcbiAgICAgIHRyaXZpYWwgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB0cml2aWFsO1xuICB9XG5cbiAgaXNUZXJtRXF1YWxUb1Rlcm0odGVybSwgY29udGV4dCkge1xuICAgIHRlcm0gPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm0odGVybSwgY29udGV4dCk7IC8vL1xuXG4gICAgY29uc3QgdGVybUVxdWFsVG9UZXJtID0gdGhpcy50ZXJtLmlzRXF1YWxUbyh0ZXJtKTtcblxuICAgIHJldHVybiB0ZXJtRXF1YWxUb1Rlcm07XG4gIH1cblxuICBtYXRjaFBhcmFtZXRlcihwYXJhbWV0ZXIpIHsgcmV0dXJuIHRoaXMudmFyaWFibGUubWF0Y2hQYXJhbWV0ZXIocGFyYW1ldGVyKTsgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmaXlpbmcgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgY29uc3QgdGVybVNpbmd1bGFyID0gdGhpcy50ZXJtLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmICh0ZXJtU2luZ3VsYXIpIHtcbiAgICAgIGlmICh0aGlzLnZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHRoaXMudmFyaWFibGUuZ2V0SWRlbnRpZmllcigpLFxuICAgICAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgICBpZiAodmFyaWFibGVQcmVzZW50KSB7XG4gICAgICAgICAgY29uc3QgdGVybU5vZGUgPSB0aGlzLnRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlSWRlbnRpZmllciA9IHRlcm1Ob2RlLmdldFZhcmlhYmxlSWRlbnRpZmllcigpLFxuICAgICAgICAgICAgICAgIHRlcm1WYXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZUlkZW50aWZpZXIsICAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtVmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyKHRlcm1WYXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgICAgICAgaWYgKHRlcm1WYXJpYWJsZVByZXNlbnQpIHtcbiAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbidzIGdlbmVyYWwgdGVybSdzIHZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uJ3Mgc3BlY2lmaWMgdGVybSdzIHZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uJ3MgZ2VuZXJhbCB0ZXJtIGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbidzIHNwZWNpZmljIHRlcm0gaXMgbm90IHNpbmd1bGFyLmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29uc3Qgc3Vic3RpdGl0b2luID0gdGhpczsgIC8vL1xuXG4gICAgICBjb250ZXh0LmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0aXRvaW4pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUZXJtU3Vic3RpdHV0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1TdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFRlcm1TdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgICBpZiAodGVybVN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVGVybSwgVmFyaWFibGUgfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgZmlyc3RUZXJtTm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLmdldEZpcnN0VGVybU5vZGUoKSxcbiAgICAgICAgICAgIGxhc3RWYXJpYWJsZU5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZS5nZXRMYXN0VmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgICB0ZXJtTm9kZSA9IGZpcnN0VGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gbGFzdFZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUpO1xuXG4gICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1TdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0b2tlbnMsIHRlcm0sIHZhcmlhYmxlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybkFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gY29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlKSxcbiAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQgPSBUZXJtU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQuZnJvbVN0cmluZ0xleGVyQW5kUGFyc2VyKHN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgbm9kZSA9IHRlcm1TdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5nZXROb2RlKCksXG4gICAgICAgICAgdG9rZW5zID0gdGVybVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmdldFRva2VucygpO1xuXG4gICAgY29uc3QgdGVybVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdG9rZW5zLCB0ZXJtLCB2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUpIHtcbiAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIHN0cmluZyA9IGBbJHt0ZXJtU3RyaW5nfSBmb3IgJHt2YXJpYWJsZVN0cmluZ31dYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlRlcm1TdWJzdGl0dXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsInRlcm0iLCJ2YXJpYWJsZSIsImdldFRlcm0iLCJnZXRWYXJpYWJsZSIsImdldFJlcGxhY2VtZW50Tm9kZSIsInRlcm1Ob2RlIiwiZ2V0Tm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsImlzVHJpdmlhbCIsInRyaXZpYWwiLCJ0ZXJtRXF1YWxUb1ZhcmlhYmxlIiwiaXNFcXVhbFRvVmFyaWFibGUiLCJpc1Rlcm1FcXVhbFRvVGVybSIsInN0cmlwQnJhY2tldHNGcm9tVGVybSIsInRlcm1FcXVhbFRvVGVybSIsImlzRXF1YWxUbyIsIm1hdGNoUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJ0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nIiwidHJhY2UiLCJ0ZXJtU2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZ2V0SWRlbnRpZmllciIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIiLCJnZXRWYXJpYWJsZUlkZW50aWZpZXIiLCJ0ZXJtVmFyaWFibGVJZGVudGlmaWVyIiwidGVybVZhcmlhYmxlUHJlc2VudCIsImRlYnVnIiwic3Vic3RpdGl0b2luIiwiYWRkU3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudCIsInN0YXRlbWVudCIsInRlcm1TdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnROb2RlIiwidGVybVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSIsIlRlcm0iLCJvbnRvbG9neSIsIlZhcmlhYmxlIiwiZmlyc3RUZXJtTm9kZSIsImdldEZpcnN0VGVybU5vZGUiLCJsYXN0VmFyaWFibGVOb2RlIiwiZ2V0TGFzdFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsImZyb21UZXJtTm9kZSIsImZyb21WYXJpYWJsZU5vZGUiLCJub2RlQXNUb2tlbnMiLCJzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlIiwiZnJvbVRlcm5BbmRWYXJpYWJsZSIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJ0ZXJtU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQiLCJUZXJtU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQiLCJmcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIiLCJnZXRUb2tlbnMiLCJTdWJzdGl0dXRpb24iLCJuYW1lIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInZhcmlhYmxlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztnRUFScUI7bUVBQ0k7MkRBQ2tCO3dCQUdMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUd0QyxXQUFlQSxJQUFBQSxnQkFBTSxxQ0FBQzs7YUFBTUMsaUJB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