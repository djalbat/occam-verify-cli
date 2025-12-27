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
var _structure = /*#__PURE__*/ _interop_require_wildcard(require("../../structure"));
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
var _default = (0, _structure.define)((_TermSubstitution = /*#__PURE__*/ function(Substitution) {
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
                    var Term = _structure.default.Term, Variable = _structure.default.Variable, firstTermNode = termSubstitutionNode.getFirstTermNode(), lastVariableNode = termSubstitutionNode.getLastVariableNode(), termNode = firstTermNode, variableNode = lastVariableNode, term = Term.fromTermNode(termNode, context), variable = Variable.fromVariableNode(variableNode, context), node = termSubstitutionNode, tokens = context.nodeAsTokens(node), string = stringFromTermAndVariable(term, variable);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHJ1Y3R1cmUvc3Vic3RpdHV0aW9uL3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzdHJ1Y3R1cmUgZnJvbSBcIi4uLy4uL3N0cnVjdHVyZVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5pbXBvcnQgVGVybVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L3BhcnRpYWwvc3Vic3RpdHV0aW9uL3Rlcm1cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL3N0cnVjdHVyZVwiO1xuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21UZXJtIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUZXJtU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0b2tlbnMsIHRlcm0sIHZhcmlhYmxlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMudGVybS5nZXROb2RlKCksXG4gICAgICAgICAgcmVwbGFjZW1lbnROb2RlID0gdGVybU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIGlzVHJpdmlhbCgpIHtcbiAgICBsZXQgdHJpdmlhbCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybUVxdWFsVG9WYXJpYWJsZSA9IHRoaXMudGVybS5pc0VxdWFsVG9WYXJpYWJsZSh0aGlzLnZhcmlhYmxlKTtcblxuICAgIGlmICh0ZXJtRXF1YWxUb1ZhcmlhYmxlKSB7XG4gICAgICB0cml2aWFsID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJpdmlhbDtcbiAgfVxuXG4gIGlzVGVybUVxdWFsVG9UZXJtKHRlcm0sIGNvbnRleHQpIHtcbiAgICB0ZXJtID0gc3RyaXBCcmFja2V0c0Zyb21UZXJtKHRlcm0sIGNvbnRleHQpOyAvLy9cblxuICAgIGNvbnN0IHRlcm1FcXVhbFRvVGVybSA9IHRoaXMudGVybS5pc0VxdWFsVG8odGVybSk7XG5cbiAgICByZXR1cm4gdGVybUVxdWFsVG9UZXJtO1xuICB9XG5cbiAgbWF0Y2hQYXJhbWV0ZXIocGFyYW1ldGVyKSB7IHJldHVybiB0aGlzLnZhcmlhYmxlLm1hdGNoUGFyYW1ldGVyKHBhcmFtZXRlcik7IH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZml5aW5nIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRlcm1TaW5ndWxhciA9IHRoaXMudGVybS5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAodGVybVNpbmd1bGFyKSB7XG4gICAgICBpZiAodGhpcy52YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB0aGlzLnZhcmlhYmxlLmdldElkZW50aWZpZXIoKSxcbiAgICAgICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICAgICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdGhpcy50ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZUlkZW50aWZpZXIgPSB0ZXJtTm9kZS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKSxcbiAgICAgICAgICAgICAgICB0ZXJtVmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGVJZGVudGlmaWVyLCAgLy8vXG4gICAgICAgICAgICAgICAgdGVybVZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllcih0ZXJtVmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgICAgIGlmICh0ZXJtVmFyaWFibGVQcmVzZW50KSB7XG4gICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24ncyBnZW5lcmFsIHRlcm0ncyB2YXJpYWJsZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbidzIHNwZWNpZmljIHRlcm0ncyB2YXJpYWJsZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbidzIGdlbmVyYWwgdGVybSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24ncyBzcGVjaWZpYyB0ZXJtIGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXRpdG9pbiA9IHRoaXM7ICAvLy9cblxuICAgICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdGl0b2luKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVGVybVN1YnN0aXR1dGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSgpO1xuXG4gICAgaWYgKHRlcm1TdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFRlcm0sIFZhcmlhYmxlIH0gPSBzdHJ1Y3R1cmUsXG4gICAgICAgICAgICBmaXJzdFRlcm1Ob2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUuZ2V0Rmlyc3RUZXJtTm9kZSgpLFxuICAgICAgICAgICAgbGFzdFZhcmlhYmxlTm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLmdldExhc3RWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICAgIHRlcm1Ob2RlID0gZmlyc3RUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBsYXN0VmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSk7XG5cbiAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSBuZXcgVGVybVN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRva2VucywgdGVybSwgdmFyaWFibGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJuQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBsZXhlciA9IGNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBjb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUpLFxuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dCA9IFRlcm1TdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5mcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIoc3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBub2RlID0gdGVybVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmdldE5vZGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSB0ZXJtU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQuZ2V0VG9rZW5zKCk7XG5cbiAgICBjb25zdCB0ZXJtU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1TdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0b2tlbnMsIHRlcm0sIHZhcmlhYmxlKTtcblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSkge1xuICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgc3RyaW5nID0gYFske3Rlcm1TdHJpbmd9IGZvciAke3ZhcmlhYmxlU3RyaW5nfV1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVGVybVN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwidGVybSIsInZhcmlhYmxlIiwiZ2V0VGVybSIsImdldFZhcmlhYmxlIiwiZ2V0UmVwbGFjZW1lbnROb2RlIiwidGVybU5vZGUiLCJnZXROb2RlIiwicmVwbGFjZW1lbnROb2RlIiwiaXNUcml2aWFsIiwidHJpdmlhbCIsInRlcm1FcXVhbFRvVmFyaWFibGUiLCJpc0VxdWFsVG9WYXJpYWJsZSIsImlzVGVybUVxdWFsVG9UZXJtIiwic3RyaXBCcmFja2V0c0Zyb21UZXJtIiwidGVybUVxdWFsVG9UZXJtIiwiaXNFcXVhbFRvIiwibWF0Y2hQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInRlcm1TdWJzdGl0dXRpb25TdHJpbmciLCJ0cmFjZSIsInRlcm1TaW5ndWxhciIsImlzU2luZ3VsYXIiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJnZXRJZGVudGlmaWVyIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllciIsImdldFZhcmlhYmxlSWRlbnRpZmllciIsInRlcm1WYXJpYWJsZUlkZW50aWZpZXIiLCJ0ZXJtVmFyaWFibGVQcmVzZW50IiwiZGVidWciLCJzdWJzdGl0aXRvaW4iLCJhZGRTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50IiwidGVybVN1YnN0aXR1dGlvbiIsInN0YXRlbWVudE5vZGUiLCJ0ZXJtU3Vic3RpdHV0aW9uTm9kZSIsImdldFRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiVGVybSIsInN0cnVjdHVyZSIsIlZhcmlhYmxlIiwiZmlyc3RUZXJtTm9kZSIsImdldEZpcnN0VGVybU5vZGUiLCJsYXN0VmFyaWFibGVOb2RlIiwiZ2V0TGFzdFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsImZyb21UZXJtTm9kZSIsImZyb21WYXJpYWJsZU5vZGUiLCJub2RlQXNUb2tlbnMiLCJzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlIiwiZnJvbVRlcm5BbmRWYXJpYWJsZSIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJ0ZXJtU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQiLCJUZXJtU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQiLCJmcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIiLCJnZXRUb2tlbnMiLCJTdWJzdGl0dXRpb24iLCJuYW1lIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInZhcmlhYmxlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztpRUFSc0I7bUVBQ0c7MkRBQ2tCO3dCQUdMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUd0QyxXQUFlQSxJQUFBQSxpQkFBTSxxQ0FBQzs7YUFB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