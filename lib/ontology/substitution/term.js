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
var _default = (0, _ontology.define)((_TermSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(TermSubstitution, Substitution);
    function TermSubstitution(context, string, node, tokens, term, variable1) {
        _class_call_check(this, TermSubstitution);
        var _this;
        _this = _call_super(this, TermSubstitution, [
            context,
            string,
            node,
            tokens
        ]);
        _this.term = term;
        _this.variable = variable1;
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
                        var variableIdentifier = this.variable.getIdentifier(), variablePresent = context.isVariablePresentByVariableIdentifier(variableIdentifier);
                        if (variablePresent) {
                            var termNode = this.term.getNode(), termVariableIdentifier = (0, _variable.termVariableIdentifierFromTermNode)(termNode), termVariablePresent = context.isVariablePresentByVariableIdentifier(termVariableIdentifier);
                            if (termVariablePresent) {
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
                    var Term = _ontology.default.Term, Variable = _ontology.default.Variable, firstTermNode = termSubstitutionNode.getFirstTermNode(), lastVariableNode = termSubstitutionNode.getLastVariableNode(), termNode = firstTermNode, variableNode = lastVariableNode, term = Term.fromTermNode(termNode, context), variable1 = Variable.fromVariableNode(variableNode, context), node = termSubstitutionNode, tokens = context.nodeAsTokens(node), string = stringFromTermAndVariable(term, variable1);
                    termSubstitution = new TermSubstitution(context, string, node, tokens, term, variable1);
                }
                return termSubstitution;
            }
        },
        {
            key: "fromTernAndVariable",
            value: function fromTernAndVariable(term, variable1, context) {
                var lexer = context.getLexer(), parser = context.getParser(), string = stringFromTermAndVariable(term, variable1), termSubstitutionPartialContext = _term.default.fromStringLexerAndParser(string, lexer, parser), node = termSubstitutionPartialContext.getNode(), tokens = termSubstitutionPartialContext.getTokens();
                var termSubstitution = new TermSubstitution(context, string, node, tokens, term, variable1);
                return termSubstitution;
            }
        }
    ]);
    return TermSubstitution;
}(_substitution.default), _define_property(_TermSubstitution, "name", "TermSubstitution"), _TermSubstitution));
function stringFromTermAndVariable(term, variable1) {
    var termString = term.getString(), variableString = variable1.getString(), string = "[".concat(termString, " for ").concat(variableString, "]");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9zdWJzdGl0dXRpb24vdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi8uLi9vbnRvbG9neVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5pbXBvcnQgVGVybVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L3BhcnRpYWwvc3Vic3RpdHV0aW9uL3Rlcm1cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL29udG9sb2d5XCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVRlcm0gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5pbXBvcnQgeyB0ZXJtVmFyaWFibGVJZGVudGlmaWVyRnJvbVRlcm1Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy92YXJpYWJsZVwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUZXJtU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0b2tlbnMsIHRlcm0sIHZhcmlhYmxlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMudGVybS5nZXROb2RlKCksXG4gICAgICAgICAgcmVwbGFjZW1lbnROb2RlID0gdGVybU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIGlzVHJpdmlhbCgpIHtcbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdGhpcy52YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB0cml2aWFsID0gKHRlcm1TdHJpbmcgPT09IHZhcmlhYmxlU3RyaW5nKTtcblxuICAgIHJldHVybiB0cml2aWFsO1xuICB9XG5cbiAgaXNUZXJtRXF1YWxUb1Rlcm0odGVybSwgY29udGV4dCkge1xuICAgIHRlcm0gPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm0odGVybSwgY29udGV4dCk7IC8vL1xuXG4gICAgY29uc3QgdGVybUVxdWFsVG9UZXJtID0gdGhpcy50ZXJtLmlzRXF1YWxUbyh0ZXJtKTtcblxuICAgIHJldHVybiB0ZXJtRXF1YWxUb1Rlcm07XG4gIH1cblxuICBtYXRjaFBhcmFtZXRlcihwYXJhbWV0ZXIpIHsgcmV0dXJuIHRoaXMudmFyaWFibGUubWF0Y2hQYXJhbWV0ZXIocGFyYW1ldGVyKTsgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmaXlpbmcgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGluLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtU2ltcGxlID0gdGhpcy50ZXJtLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAodGVybVNpbXBsZSkge1xuICAgICAgaWYgKHRoaXMudmFyaWFibGUgPT09IG51bGwpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlIHNwZWNpZmljIHRlcm0gaXMgbm90IHNpbXBsZS5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHRoaXMudmFyaWFibGUuZ2V0SWRlbnRpZmllcigpLFxuICAgICAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgICBpZiAodmFyaWFibGVQcmVzZW50KSB7XG4gICAgICAgICAgY29uc3QgdGVybU5vZGUgPSB0aGlzLnRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICAgIHRlcm1WYXJpYWJsZUlkZW50aWZpZXIgPSB0ZXJtVmFyaWFibGVJZGVudGlmaWVyRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgICB0ZXJtVmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyKHRlcm1WYXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgICAgICAgaWYgKHRlcm1WYXJpYWJsZVByZXNlbnQpIHtcbiAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdGhpcy52YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSBnZW5lcmFsIHRlcm0gaXMgbm90IHNpbXBsZS5gKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXRpdG9pbiA9IHRoaXM7ICAvLy9cblxuICAgICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdGl0b2luKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGluLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUZXJtU3Vic3RpdHV0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1TdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFRlcm1TdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgICBpZiAodGVybVN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVGVybSwgVmFyaWFibGUgfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgZmlyc3RUZXJtTm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLmdldEZpcnN0VGVybU5vZGUoKSxcbiAgICAgICAgICAgIGxhc3RWYXJpYWJsZU5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZS5nZXRMYXN0VmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgICB0ZXJtTm9kZSA9IGZpcnN0VGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gbGFzdFZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUpO1xuXG4gICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1TdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0b2tlbnMsIHRlcm0sIHZhcmlhYmxlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybkFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gY29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlKSxcbiAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQgPSBUZXJtU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQuZnJvbVN0cmluZ0xleGVyQW5kUGFyc2VyKHN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgbm9kZSA9IHRlcm1TdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5nZXROb2RlKCksXG4gICAgICAgICAgdG9rZW5zID0gdGVybVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmdldFRva2VucygpO1xuXG4gICAgY29uc3QgdGVybVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdG9rZW5zLCB0ZXJtLCB2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUpIHtcbiAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIHN0cmluZyA9IGBbJHt0ZXJtU3RyaW5nfSBmb3IgJHt2YXJpYWJsZVN0cmluZ31dYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlRlcm1TdWJzdGl0dXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsInRlcm0iLCJ2YXJpYWJsZSIsImdldFRlcm0iLCJnZXRWYXJpYWJsZSIsImdldFJlcGxhY2VtZW50Tm9kZSIsInRlcm1Ob2RlIiwiZ2V0Tm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsImlzVHJpdmlhbCIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJ2YXJpYWJsZVN0cmluZyIsInRyaXZpYWwiLCJpc1Rlcm1FcXVhbFRvVGVybSIsInN0cmlwQnJhY2tldHNGcm9tVGVybSIsInRlcm1FcXVhbFRvVGVybSIsImlzRXF1YWxUbyIsIm1hdGNoUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJ0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nIiwidHJhY2UiLCJ0ZXJtU2ltcGxlIiwiaXNTaW1wbGUiLCJkZWJ1ZyIsInZhcmlhYmxlSWRlbnRpZmllciIsImdldElkZW50aWZpZXIiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyIiwidGVybVZhcmlhYmxlSWRlbnRpZmllciIsInRlcm1WYXJpYWJsZUlkZW50aWZpZXJGcm9tVGVybU5vZGUiLCJ0ZXJtVmFyaWFibGVQcmVzZW50Iiwic3Vic3RpdGl0b2luIiwiYWRkU3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudCIsInN0YXRlbWVudCIsInRlcm1TdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnROb2RlIiwidGVybVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSIsIlRlcm0iLCJvbnRvbG9neSIsIlZhcmlhYmxlIiwiZmlyc3RUZXJtTm9kZSIsImdldEZpcnN0VGVybU5vZGUiLCJsYXN0VmFyaWFibGVOb2RlIiwiZ2V0TGFzdFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsImZyb21UZXJtTm9kZSIsImZyb21WYXJpYWJsZU5vZGUiLCJub2RlQXNUb2tlbnMiLCJzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlIiwiZnJvbVRlcm5BbmRWYXJpYWJsZSIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJ0ZXJtU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQiLCJUZXJtU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQiLCJmcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIiLCJnZXRUb2tlbnMiLCJTdWJzdGl0dXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OztnRUFUcUI7bUVBQ0k7MkRBQ2tCO3dCQUdMO3dCQUNhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUduRCxXQUFlQSxJQUFBQSxnQkFBTSxxQ0FBQzs7YUFBTUMsaUJBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFRO2dDQUQvQk47O2dCQUV4Qixr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