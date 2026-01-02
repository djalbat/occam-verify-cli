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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../../elements"));
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
var _default = (0, _elements.define)((_TermSubstitution = /*#__PURE__*/ function(Substitution) {
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
                    var Term = _elements.default.Term, Variable = _elements.default.Variable, firstTermNode = termSubstitutionNode.getFirstTermNode(), lastVariableNode = termSubstitutionNode.getLastVariableNode(), termNode = firstTermNode, variableNode = lastVariableNode, term = Term.fromTermNode(termNode, context), variable = Variable.fromVariableNode(variableNode, context), node = termSubstitutionNode, string = stringFromTermAndVariable(term, variable);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVRlcm0gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVRlcm1TdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgdmFyaWFibGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMudGVybS5nZXROb2RlKCksXG4gICAgICAgICAgcmVwbGFjZW1lbnROb2RlID0gdGVybU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIGlzVHJpdmlhbCgpIHtcbiAgICBsZXQgdHJpdmlhbCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybUVxdWFsVG9WYXJpYWJsZSA9IHRoaXMudGVybS5pc0VxdWFsVG9WYXJpYWJsZSh0aGlzLnZhcmlhYmxlKTtcblxuICAgIGlmICh0ZXJtRXF1YWxUb1ZhcmlhYmxlKSB7XG4gICAgICB0cml2aWFsID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJpdmlhbDtcbiAgfVxuXG4gIGlzVGVybUVxdWFsVG9UZXJtKHRlcm0sIGNvbnRleHQpIHtcbiAgICB0ZXJtID0gc3RyaXBCcmFja2V0c0Zyb21UZXJtKHRlcm0sIGNvbnRleHQpOyAvLy9cblxuICAgIGNvbnN0IHRlcm1FcXVhbFRvVGVybSA9IHRoaXMudGVybS5pc0VxdWFsVG8odGVybSk7XG5cbiAgICByZXR1cm4gdGVybUVxdWFsVG9UZXJtO1xuICB9XG5cbiAgbWF0Y2hQYXJhbWV0ZXIocGFyYW1ldGVyKSB7IHJldHVybiB0aGlzLnZhcmlhYmxlLm1hdGNoUGFyYW1ldGVyKHBhcmFtZXRlcik7IH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZml5aW5nIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRlcm1TaW5ndWxhciA9IHRoaXMudGVybS5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAodGVybVNpbmd1bGFyKSB7XG4gICAgICBpZiAodGhpcy52YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB0aGlzLnZhcmlhYmxlLmdldElkZW50aWZpZXIoKSxcbiAgICAgICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICAgICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdGhpcy50ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZUlkZW50aWZpZXIgPSB0ZXJtTm9kZS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKSxcbiAgICAgICAgICAgICAgICB0ZXJtVmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGVJZGVudGlmaWVyLCAgLy8vXG4gICAgICAgICAgICAgICAgdGVybVZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllcih0ZXJtVmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgICAgIGlmICh0ZXJtVmFyaWFibGVQcmVzZW50KSB7XG4gICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24ncyBnZW5lcmFsIHRlcm0ncyB2YXJpYWJsZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbidzIHNwZWNpZmljIHRlcm0ncyB2YXJpYWJsZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbidzIGdlbmVyYWwgdGVybSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24ncyBzcGVjaWZpYyB0ZXJtIGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXRpdG9pbiA9IHRoaXM7ICAvLy9cblxuICAgICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdGl0b2luKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVGVybVN1YnN0aXR1dGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSgpO1xuXG4gICAgaWYgKHRlcm1TdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFRlcm0sIFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICAgIGZpcnN0VGVybU5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZS5nZXRGaXJzdFRlcm1Ob2RlKCksXG4gICAgICAgICAgICBsYXN0VmFyaWFibGVOb2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUuZ2V0TGFzdFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgICAgdGVybU5vZGUgPSBmaXJzdFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IGxhc3RWYXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSk7XG5cbiAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSBuZXcgVGVybVN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHZhcmlhYmxlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybkFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSksXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVRlcm1TdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1TdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCB2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUpIHtcbiAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIHN0cmluZyA9IGBbJHt0ZXJtU3RyaW5nfSBmb3IgJHt2YXJpYWJsZVN0cmluZ31dYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlRlcm1TdWJzdGl0dXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInRlcm0iLCJ2YXJpYWJsZSIsImdldFRlcm0iLCJnZXRWYXJpYWJsZSIsImdldFJlcGxhY2VtZW50Tm9kZSIsInRlcm1Ob2RlIiwiZ2V0Tm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsImlzVHJpdmlhbCIsInRyaXZpYWwiLCJ0ZXJtRXF1YWxUb1ZhcmlhYmxlIiwiaXNFcXVhbFRvVmFyaWFibGUiLCJpc1Rlcm1FcXVhbFRvVGVybSIsInN0cmlwQnJhY2tldHNGcm9tVGVybSIsInRlcm1FcXVhbFRvVGVybSIsImlzRXF1YWxUbyIsIm1hdGNoUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJ0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nIiwidHJhY2UiLCJ0ZXJtU2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZ2V0SWRlbnRpZmllciIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIiLCJnZXRWYXJpYWJsZUlkZW50aWZpZXIiLCJ0ZXJtVmFyaWFibGVJZGVudGlmaWVyIiwidGVybVZhcmlhYmxlUHJlc2VudCIsImRlYnVnIiwic3Vic3RpdGl0b2luIiwiYWRkU3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudCIsInN0YXRlbWVudCIsInRlcm1TdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnROb2RlIiwidGVybVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSIsIlRlcm0iLCJlbGVtZW50cyIsIlZhcmlhYmxlIiwiZmlyc3RUZXJtTm9kZSIsImdldEZpcnN0VGVybU5vZGUiLCJsYXN0VmFyaWFibGVOb2RlIiwiZ2V0TGFzdFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsImZyb21UZXJtTm9kZSIsImZyb21WYXJpYWJsZU5vZGUiLCJzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlIiwiZnJvbVRlcm5BbmRWYXJpYWJsZSIsImluc3RhbnRpYXRlVGVybVN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsIm5hbWUiLCJ0ZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwidmFyaWFibGVTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2dFQVBxQjttRUFDSTt3QkFHYTsyQkFDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFNUMsV0FBZUEsSUFBQUEsZ0JBQU0scUNBQUM7O2FBQU1DLGlCQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFFBQVE7Z0NBRHZCTDs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxJQUFJLEdBQUdBO1FBQ1osTUFBS0MsUUFBUSxHQUFHQTs7Ozs7WUFHbEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsUUFBUTtZQUN0Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXLElBQUksQ0FBQ0wsSUFBSSxDQUFDTSxPQUFPLElBQzVCQyxrQkFBa0JGLFVBQVUsR0FBRztnQkFFckMsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxVQUFVO2dCQUVkLElBQU1DLHNCQUFzQixJ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