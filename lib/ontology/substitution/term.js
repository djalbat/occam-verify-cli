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
                var termSingular = this.term.isSingular();
                if (termSingular) {
                    if (this.variable === null) {
                        context.debug("The specific term is not singular.");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9zdWJzdGl0dXRpb24vdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi8uLi9vbnRvbG9neVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5pbXBvcnQgVGVybVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L3BhcnRpYWwvc3Vic3RpdHV0aW9uL3Rlcm1cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL29udG9sb2d5XCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVRlcm0gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5pbXBvcnQgeyB0ZXJtVmFyaWFibGVJZGVudGlmaWVyRnJvbVRlcm1Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy92YXJpYWJsZVwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUZXJtU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0b2tlbnMsIHRlcm0sIHZhcmlhYmxlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMudGVybS5nZXROb2RlKCksXG4gICAgICAgICAgcmVwbGFjZW1lbnROb2RlID0gdGVybU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIGlzVHJpdmlhbCgpIHtcbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdGhpcy52YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB0cml2aWFsID0gKHRlcm1TdHJpbmcgPT09IHZhcmlhYmxlU3RyaW5nKTtcblxuICAgIHJldHVybiB0cml2aWFsO1xuICB9XG5cbiAgaXNUZXJtRXF1YWxUb1Rlcm0odGVybSwgY29udGV4dCkge1xuICAgIHRlcm0gPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm0odGVybSwgY29udGV4dCk7IC8vL1xuXG4gICAgY29uc3QgdGVybUVxdWFsVG9UZXJtID0gdGhpcy50ZXJtLmlzRXF1YWxUbyh0ZXJtKTtcblxuICAgIHJldHVybiB0ZXJtRXF1YWxUb1Rlcm07XG4gIH1cblxuICBtYXRjaFBhcmFtZXRlcihwYXJhbWV0ZXIpIHsgcmV0dXJuIHRoaXMudmFyaWFibGUubWF0Y2hQYXJhbWV0ZXIocGFyYW1ldGVyKTsgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmaXlpbmcgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGluLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtU2luZ3VsYXIgPSB0aGlzLnRlcm0uaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHRlcm1TaW5ndWxhcikge1xuICAgICAgaWYgKHRoaXMudmFyaWFibGUgPT09IG51bGwpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlIHNwZWNpZmljIHRlcm0gaXMgbm90IHNpbmd1bGFyLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdGhpcy52YXJpYWJsZS5nZXRJZGVudGlmaWVyKCksXG4gICAgICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgICAgIGlmICh2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMudGVybS5nZXROb2RlKCksXG4gICAgICAgICAgICAgICAgdGVybVZhcmlhYmxlSWRlbnRpZmllciA9IHRlcm1WYXJpYWJsZUlkZW50aWZpZXJGcm9tVGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgICAgICAgIHRlcm1WYXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIodGVybVZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICAgICAgICBpZiAodGVybVZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlIGdlbmVyYWwgdGVybSBpcyBub3Qgc2ltcGxlLmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29uc3Qgc3Vic3RpdGl0b2luID0gdGhpczsgIC8vL1xuXG4gICAgICBjb250ZXh0LmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0aXRvaW4pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlRlcm1TdWJzdGl0dXRpb25cIjtcblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICAgIGlmICh0ZXJtU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBUZXJtLCBWYXJpYWJsZSB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgICBmaXJzdFRlcm1Ob2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUuZ2V0Rmlyc3RUZXJtTm9kZSgpLFxuICAgICAgICAgICAgbGFzdFZhcmlhYmxlTm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLmdldExhc3RWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICAgIHRlcm1Ob2RlID0gZmlyc3RUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBsYXN0VmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSk7XG5cbiAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSBuZXcgVGVybVN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRva2VucywgdGVybSwgdmFyaWFibGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJuQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBsZXhlciA9IGNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBjb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUpLFxuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dCA9IFRlcm1TdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5mcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIoc3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBub2RlID0gdGVybVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmdldE5vZGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSB0ZXJtU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQuZ2V0VG9rZW5zKCk7XG5cbiAgICBjb25zdCB0ZXJtU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1TdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0b2tlbnMsIHRlcm0sIHZhcmlhYmxlKTtcblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSkge1xuICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgc3RyaW5nID0gYFske3Rlcm1TdHJpbmd9IGZvciAke3ZhcmlhYmxlU3RyaW5nfV1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVGVybVN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwidGVybSIsInZhcmlhYmxlIiwiZ2V0VGVybSIsImdldFZhcmlhYmxlIiwiZ2V0UmVwbGFjZW1lbnROb2RlIiwidGVybU5vZGUiLCJnZXROb2RlIiwicmVwbGFjZW1lbnROb2RlIiwiaXNUcml2aWFsIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInZhcmlhYmxlU3RyaW5nIiwidHJpdmlhbCIsImlzVGVybUVxdWFsVG9UZXJtIiwic3RyaXBCcmFja2V0c0Zyb21UZXJtIiwidGVybUVxdWFsVG9UZXJtIiwiaXNFcXVhbFRvIiwibWF0Y2hQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInRlcm1TdWJzdGl0dXRpb25TdHJpbmciLCJ0cmFjZSIsInRlcm1TaW5ndWxhciIsImlzU2luZ3VsYXIiLCJkZWJ1ZyIsInZhcmlhYmxlSWRlbnRpZmllciIsImdldElkZW50aWZpZXIiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyIiwidGVybVZhcmlhYmxlSWRlbnRpZmllciIsInRlcm1WYXJpYWJsZUlkZW50aWZpZXJGcm9tVGVybU5vZGUiLCJ0ZXJtVmFyaWFibGVQcmVzZW50Iiwic3Vic3RpdGl0b2luIiwiYWRkU3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudCIsInN0YXRlbWVudCIsInRlcm1TdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnROb2RlIiwidGVybVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSIsIlRlcm0iLCJvbnRvbG9neSIsIlZhcmlhYmxlIiwiZmlyc3RUZXJtTm9kZSIsImdldEZpcnN0VGVybU5vZGUiLCJsYXN0VmFyaWFibGVOb2RlIiwiZ2V0TGFzdFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsImZyb21UZXJtTm9kZSIsImZyb21WYXJpYWJsZU5vZGUiLCJub2RlQXNUb2tlbnMiLCJzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlIiwiZnJvbVRlcm5BbmRWYXJpYWJsZSIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJ0ZXJtU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQiLCJUZXJtU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQiLCJmcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIiLCJnZXRUb2tlbnMiLCJTdWJzdGl0dXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OztnRUFUcUI7bUVBQ0k7MkRBQ2tCO3dCQUdMO3dCQUNhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUduRCxXQUFlQSxJQUFBQSxnQkFBTSxxQ0FBQzs7YUFBTUMsaUJBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFRO2dDQUQv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