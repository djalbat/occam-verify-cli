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
var _brackets = require("../../utilities/brackets");
var _instantiate = require("../../process/instantiate");
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
    function TermSubstitution(context, string, node, term, variable) {
        _class_call_check(this, TermSubstitution);
        var _this;
        _this = _call_super(this, TermSubstitution, [
            context,
            string,
            node
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
                    var Term = _ontology.default.Term, Variable = _ontology.default.Variable, firstTermNode = termSubstitutionNode.getFirstTermNode(), lastVariableNode = termSubstitutionNode.getLastVariableNode(), termNode = firstTermNode, variableNode = lastVariableNode, term = Term.fromTermNode(termNode, context), variable = Variable.fromVariableNode(variableNode, context), node = termSubstitutionNode, string = stringFromTermAndVariable(term, variable);
                    termSubstitution = new TermSubstitution(context, string, node, term, variable);
                }
                return termSubstitution;
            }
        },
        {
            key: "fromTernAndVariable",
            value: function fromTernAndVariable(term, variable, context) {
                var string = stringFromTermAndVariable(term, variable), termSubstitutionNode = (0, _instantiate.instantiateTermSubstitution)(string, context), node = termSubstitutionNode, termSubstitution = new TermSubstitution(context, string, node, term, variable);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9zdWJzdGl0dXRpb24vdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi8uLi9vbnRvbG9neVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9vbnRvbG9neVwiO1xuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21UZXJtIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVUZXJtU3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFRlcm1TdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHZhcmlhYmxlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudE5vZGUoKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0aGlzLnRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IHRlcm1Ob2RlOyAvLy9cblxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGU7XG4gIH1cblxuICBpc1RyaXZpYWwoKSB7XG4gICAgbGV0IHRyaXZpYWwgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlcm1FcXVhbFRvVmFyaWFibGUgPSB0aGlzLnRlcm0uaXNFcXVhbFRvVmFyaWFibGUodGhpcy52YXJpYWJsZSk7XG5cbiAgICBpZiAodGVybUVxdWFsVG9WYXJpYWJsZSkge1xuICAgICAgdHJpdmlhbCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRyaXZpYWw7XG4gIH1cblxuICBpc1Rlcm1FcXVhbFRvVGVybSh0ZXJtLCBjb250ZXh0KSB7XG4gICAgdGVybSA9IHN0cmlwQnJhY2tldHNGcm9tVGVybSh0ZXJtLCBjb250ZXh0KTsgLy8vXG5cbiAgICBjb25zdCB0ZXJtRXF1YWxUb1Rlcm0gPSB0aGlzLnRlcm0uaXNFcXVhbFRvKHRlcm0pO1xuXG4gICAgcmV0dXJuIHRlcm1FcXVhbFRvVGVybTtcbiAgfVxuXG4gIG1hdGNoUGFyYW1ldGVyKHBhcmFtZXRlcikgeyByZXR1cm4gdGhpcy52YXJpYWJsZS5tYXRjaFBhcmFtZXRlcihwYXJhbWV0ZXIpOyB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlcm1TdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZpeWluZyB0aGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtU2luZ3VsYXIgPSB0aGlzLnRlcm0uaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHRlcm1TaW5ndWxhcikge1xuICAgICAgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdGhpcy52YXJpYWJsZS5nZXRJZGVudGlmaWVyKCksXG4gICAgICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgICAgIGlmICh2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMudGVybS5nZXROb2RlKCksXG4gICAgICAgICAgICAgICAgdmFyaWFibGVJZGVudGlmaWVyID0gdGVybU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCksXG4gICAgICAgICAgICAgICAgdGVybVZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlSWRlbnRpZmllciwgIC8vL1xuICAgICAgICAgICAgICAgIHRlcm1WYXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIodGVybVZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICAgICAgICBpZiAodGVybVZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uJ3MgZ2VuZXJhbCB0ZXJtJ3MgdmFyaWFibGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24ncyBzcGVjaWZpYyB0ZXJtJ3MgdmFyaWFibGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24ncyBnZW5lcmFsIHRlcm0gaXMgbm90IHNpbmd1bGFyLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uJ3Mgc3BlY2lmaWMgdGVybSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBzdWJzdGl0aXRvaW4gPSB0aGlzOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXRpdG9pbik7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlRlcm1TdWJzdGl0dXRpb25cIjtcblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICAgIGlmICh0ZXJtU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBUZXJtLCBWYXJpYWJsZSB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgICBmaXJzdFRlcm1Ob2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUuZ2V0Rmlyc3RUZXJtTm9kZSgpLFxuICAgICAgICAgICAgbGFzdFZhcmlhYmxlTm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLmdldExhc3RWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICAgIHRlcm1Ob2RlID0gZmlyc3RUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBsYXN0VmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUpO1xuXG4gICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1TdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCB2YXJpYWJsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm5BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUpLFxuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVUZXJtU3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlKSB7XG4gIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgWyR7dGVybVN0cmluZ30gZm9yICR7dmFyaWFibGVTdHJpbmd9XWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJUZXJtU3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0ZXJtIiwidmFyaWFibGUiLCJnZXRUZXJtIiwiZ2V0VmFyaWFibGUiLCJnZXRSZXBsYWNlbWVudE5vZGUiLCJ0ZXJtTm9kZSIsImdldE5vZGUiLCJyZXBsYWNlbWVudE5vZGUiLCJpc1RyaXZpYWwiLCJ0cml2aWFsIiwidGVybUVxdWFsVG9WYXJpYWJsZSIsImlzRXF1YWxUb1ZhcmlhYmxlIiwiaXNUZXJtRXF1YWxUb1Rlcm0iLCJzdHJpcEJyYWNrZXRzRnJvbVRlcm0iLCJ0ZXJtRXF1YWxUb1Rlcm0iLCJpc0VxdWFsVG8iLCJtYXRjaFBhcmFtZXRlciIsInBhcmFtZXRlciIsInZlcmlmeSIsInZlcmlmaWVzIiwidGVybVN1YnN0aXR1dGlvblN0cmluZyIsInRyYWNlIiwidGVybVNpbmd1bGFyIiwiaXNTaW5ndWxhciIsInZhcmlhYmxlSWRlbnRpZmllciIsImdldElkZW50aWZpZXIiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyIiwiZ2V0VmFyaWFibGVJZGVudGlmaWVyIiwidGVybVZhcmlhYmxlSWRlbnRpZmllciIsInRlcm1WYXJpYWJsZVByZXNlbnQiLCJkZWJ1ZyIsInN1YnN0aXRpdG9pbiIsImFkZFN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJ0ZXJtU3Vic3RpdHV0aW9uIiwic3RhdGVtZW50Tm9kZSIsInRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUiLCJUZXJtIiwib250b2xvZ3kiLCJWYXJpYWJsZSIsImZpcnN0VGVybU5vZGUiLCJnZXRGaXJzdFRlcm1Ob2RlIiwibGFzdFZhcmlhYmxlTm9kZSIsImdldExhc3RWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJmcm9tVGVybU5vZGUiLCJmcm9tVmFyaWFibGVOb2RlIiwic3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSIsImZyb21UZXJuQW5kVmFyaWFibGUiLCJpbnN0YW50aWF0ZVRlcm1TdWJzdGl0dXRpb24iLCJTdWJzdGl0dXRpb24iLCJuYW1lIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInZhcmlhYmxlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OztnRUFQcUI7bUVBQ0k7d0JBR2E7MkJBQ007Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTVDLFdBQWVBLElBQUFBLGdCQUFNLHFDQUFDOzthQUFNQyxpQkFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxRQUFRO2dDQUR2Qkw7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsSUFBSSxHQUFHQTtRQUNaLE1BQUtDLFFBQVEsR0FBR0E7Ozs7O1lBR2xCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFFBQVE7WUFDdEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBVyxJQUFJLENBQUNMLElBQUksQ0FBQ00sT0FBTyxJQUM1QkMsa0JBQWtCRixVQUFVLEdBQUc7Z0JBRXJDLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsVUFBVTtnQkFFZCxJQUFNQyxzQkFBc0Is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