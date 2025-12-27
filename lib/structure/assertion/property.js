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
var _assertion = /*#__PURE__*/ _interop_require_default(require("../assertion"));
var _variable = /*#__PURE__*/ _interop_require_default(require("../../assignment/variable"));
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
var _PropertyAssertion;
var _default = (0, _structure.define)((_PropertyAssertion = /*#__PURE__*/ function(Assertion) {
    _inherits(PropertyAssertion, Assertion);
    function PropertyAssertion(string, node, tokens, term, propertyRelation) {
        _class_call_check(this, PropertyAssertion);
        var _this;
        _this = _call_super(this, PropertyAssertion, [
            string,
            node,
            tokens
        ]);
        _this.term = term;
        _this.propertyRelation = propertyRelation;
        return _this;
    }
    _create_class(PropertyAssertion, [
        {
            key: "getTerm",
            value: function getTerm() {
                return this.term;
            }
        },
        {
            key: "getPropertyRelation",
            value: function getPropertyRelation() {
                return this.propertyRelation;
            }
        },
        {
            key: "matchTermAndPropertyRelation",
            value: function matchTermAndPropertyRelation(term, propertyRelation, context) {
                var propertyMatchesTermAndPropertyRelation = false;
                var termString = term.getString(), propertyRelationString = propertyRelation.getString(), propertyAssertionString = this.getString();
                context.trace("Matching the '".concat(termString, "' term and '").concat(propertyRelationString, "' property relation against the '").concat(propertyAssertionString, "' property assertion..."));
                var termA = term, termB = this.term, termAEqualToTermB = termA.isEqualTo(termB);
                if (termAEqualToTermB) {
                    var propertyRelationEqualToPropertyRelation = this.propertyRelation.isEqualTo(propertyRelation);
                    propertyMatchesTermAndPropertyRelation = propertyRelationEqualToPropertyRelation; ///
                }
                if (propertyMatchesTermAndPropertyRelation) {
                    context.debug("...matched the '".concat(termString, "' term and '").concat(propertyRelationString, "' property relation against the '").concat(propertyAssertionString, "' property assertion."));
                }
                return propertyMatchesTermAndPropertyRelation;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verifies = false;
                var propertyAssertionString = this.getString(); ///
                context.trace("Verifying the '".concat(propertyAssertionString, "' property assertion..."));
                var termVerifies = this.verifyTerm(assignments, stated, context);
                if (termVerifies) {
                    var propertyRelationVerifies = this.verifyPropertyRelation(assignments, stated, context);
                    if (propertyRelationVerifies) {
                        var verifiesWhenStated = false, verifiesWhenDerived = false;
                        if (stated) {
                            verifiesWhenStated = this.verifyWhenStated(assignments, context);
                        } else {
                            verifiesWhenDerived = this.verifyWhenDerived(context);
                        }
                        if (verifiesWhenStated || verifiesWhenDerived) {
                            verifies = true;
                        }
                    }
                }
                if (verifies) {
                    if (stated) {
                        this.assign(assignments, context);
                    }
                }
                if (verifies) {
                    context.debug("...verified the '".concat(propertyAssertionString, "' property assertion."));
                }
                return verifies;
            }
        },
        {
            key: "verifyTerm",
            value: function verifyTerm(assignments, stated, context) {
                var termVerifies;
                var termString = this.term.getString();
                context.trace("Verifying the '".concat(termString, "' term..."));
                termVerifies = this.term.verify(context, function() {
                    var verifiesAhead = true;
                    return verifiesAhead;
                });
                if (termVerifies) {
                    context.debug("...verified the '".concat(termString, "' term."));
                }
                return termVerifies;
            }
        },
        {
            key: "verifyPropertyRelation",
            value: function verifyPropertyRelation(assignments, stated, context) {
                var propertyRelationVerifies;
                var propertyRelationString = this.propertyRelation.getString();
                context.trace("Verifying the '".concat(propertyRelationString, "' property relation..."));
                propertyRelationVerifies = this.propertyRelation.verify(context);
                if (propertyRelationVerifies) {
                    context.debug("...verified the '".concat(propertyRelationString, "' property relation."));
                }
                return propertyRelationVerifies;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, context) {
                var verifiesWhenStated = false;
                var propertyAssertionString = this.getString(); ///
                context.trace("Verifying the '".concat(propertyAssertionString, "' stated property assertion..."));
                verifiesWhenStated = true;
                if (verifiesWhenStated) {
                    context.debug("...verified the '".concat(propertyAssertionString, "' stated property assertion."));
                }
                return verifiesWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(context) {
                var verifiesWhenDerived;
                var propertyAssertionString = this.getString(); ///
                context.trace("Verifying the '".concat(propertyAssertionString, "' derived property assertion..."));
                verifiesWhenDerived = true;
                if (verifiesWhenDerived) {
                    context.debug("...verified the '".concat(propertyAssertionString, "' derived property assertion."));
                }
                return verifiesWhenDerived;
            }
        },
        {
            key: "assign",
            value: function assign(assignments, context) {
                if (assignments === null) {
                    return;
                }
                var variable;
                var Variable = _structure.default.Variable, termNode = this.term.getNode();
                variable = Variable.fromTermNode(termNode, context);
                if (variable !== null) {
                    var variableIdentifier = variable.getIdentifier();
                    variable = context.findVariableByVariableIdentifier(variableIdentifier);
                    variable = Variable.fromVariableAndPropertyRelation(variable, this.propertyRelation);
                    var variableAssignment = _variable.default.fromVariable(variable), assignment = variableAssignment; ///
                    assignments.push(assignment);
                }
            }
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var propertyAssertion = null;
                var propertyAssertionNode = statementNode.getPropertyAssertionNode();
                if (propertyAssertionNode !== null) {
                    var Term = _structure.default.Term, PropertyRelation = _structure.default.PropertyRelation, node = propertyAssertionNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), term = Term.fromPropertyAssertionNode(propertyAssertionNode, context), propertyRelation = PropertyRelation.fromPropertyAssertionNode(propertyAssertionNode, context);
                    propertyAssertion = new PropertyAssertion(string, node, tokens, term, propertyRelation);
                }
                return propertyAssertion;
            }
        }
    ]);
    return PropertyAssertion;
}(_assertion.default), _define_property(_PropertyAssertion, "name", "PropertyAssertion"), _PropertyAssertion));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHJ1Y3R1cmUvYXNzZXJ0aW9uL3Byb3BlcnR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc3RydWN0dXJlIGZyb20gXCIuLi8uLi9zdHJ1Y3R1cmVcIjtcbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uL2Fzc2VydGlvblwiO1xuaW1wb3J0IFZhcmlhYmxlQXNzaWdubWVudCBmcm9tIFwiLi4vLi4vYXNzaWdubWVudC92YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vc3RydWN0dXJlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9wZXJ0eUFzc2VydGlvbiBleHRlbmRzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdG9rZW5zLCB0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uKSB7XG4gICAgc3VwZXIoc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLnByb3BlcnR5UmVsYXRpb24gPSBwcm9wZXJ0eVJlbGF0aW9uO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0UHJvcGVydHlSZWxhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eVJlbGF0aW9uO1xuICB9XG5cbiAgbWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb3BlcnR5TWF0Y2hlc1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nID0gcHJvcGVydHlSZWxhdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwcm9wZXJ0eUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYW5kICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbiBhZ2FpbnN0IHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgdGVybUEgPSB0ZXJtLFxuICAgICAgICAgIHRlcm1CID0gdGhpcy50ZXJtLCAvLy9cbiAgICAgICAgICB0ZXJtQUVxdWFsVG9UZXJtQiA9IHRlcm1BLmlzRXF1YWxUbyh0ZXJtQik7XG5cbiAgICBpZiAodGVybUFFcXVhbFRvVGVybUIpIHtcbiAgICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25FcXVhbFRvUHJvcGVydHlSZWxhdGlvbiA9IHRoaXMucHJvcGVydHlSZWxhdGlvbi5pc0VxdWFsVG8ocHJvcGVydHlSZWxhdGlvbik7XG5cbiAgICAgIHByb3BlcnR5TWF0Y2hlc1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlSZWxhdGlvbkVxdWFsVG9Qcm9wZXJ0eVJlbGF0aW9uOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnR5TWF0Y2hlc1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhbmQgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uIGFnYWluc3QgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgcHJvcGVydHkgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eU1hdGNoZXNUZXJtQW5kUHJvcGVydHlSZWxhdGlvbjtcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgdGVybVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUZXJtKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllcykge1xuICAgICAgY29uc3QgcHJvcGVydHlSZWxhdGlvblZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9wZXJ0eVJlbGF0aW9uKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvcGVydHlSZWxhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgIGxldCB2ZXJpZmllc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgdmVyaWZpZXNXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2ZXJpZmllc1doZW5TdGF0ZWQgfHwgdmVyaWZpZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICB0aGlzLmFzc2lnbihhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBwcm9wZXJ0eSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VGVybShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1WZXJpZmllcztcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCk7XG5cbiAgICB0ZXJtVmVyaWZpZXMgPSB0aGlzLnRlcm0udmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgIGNvbnN0IHZlcmlmaWVzQWhlYWQgPSB0cnVlO1xuXG4gICAgICByZXR1cm4gdmVyaWZpZXNBaGVhZDtcbiAgICB9KTtcblxuICAgIGlmICh0ZXJtVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydHlSZWxhdGlvbihhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb3BlcnR5UmVsYXRpb25WZXJpZmllcztcblxuICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25TdHJpbmcgPSB0aGlzLnByb3BlcnR5UmVsYXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi4uLmApO1xuXG4gICAgcHJvcGVydHlSZWxhdGlvblZlcmlmaWVzID0gdGhpcy5wcm9wZXJ0eVJlbGF0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgIGlmIChwcm9wZXJ0eVJlbGF0aW9uVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb25WZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXNXaGVuU3RhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBwcm9wZXJ0eSBhc3NlcnRpb24uLi5gKTtcblxuICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmVyaWZpZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgcHJvcGVydHkgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgcHJvcGVydHkgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdHJ1ZTtcblxuICAgIGlmICh2ZXJpZmllc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHByb3BlcnR5IGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIGFzc2lnbihhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGlmIChhc3NpZ25tZW50cyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCB2YXJpYWJsZTtcblxuICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IHN0cnVjdHVyZSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IHRoaXMudGVybS5nZXROb2RlKCk7XG5cbiAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlLmdldElkZW50aWZpZXIoKTtcblxuICAgICAgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlQW5kUHJvcGVydHlSZWxhdGlvbih2YXJpYWJsZSwgdGhpcy5wcm9wZXJ0eVJlbGF0aW9uKTtcblxuICAgICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50ID0gVmFyaWFibGVBc3NpZ25tZW50LmZyb21WYXJpYWJsZSh2YXJpYWJsZSksXG4gICAgICAgICAgICBhc3NpZ25tZW50ID0gdmFyaWFibGVBc3NpZ25tZW50OyAgLy8vXG5cbiAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb3BlcnR5QXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvcGVydHlBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgcHJvcGVydHlBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRQcm9wZXJ0eUFzc2VydGlvbk5vZGUoKTtcblxuICAgIGlmIChwcm9wZXJ0eUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVGVybSwgUHJvcGVydHlSZWxhdGlvbiB9ID0gc3RydWN0dXJlLFxuICAgICAgICAgICAgbm9kZSA9IHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHByb3BlcnR5UmVsYXRpb24gPSBQcm9wZXJ0eVJlbGF0aW9uLmZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgcHJvcGVydHlBc3NlcnRpb24gPSBuZXcgUHJvcGVydHlBc3NlcnRpb24oc3RyaW5nLCBub2RlLCB0b2tlbnMsIHRlcm0sIHByb3BlcnR5UmVsYXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eUFzc2VydGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUHJvcGVydHlBc3NlcnRpb24iLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwidGVybSIsInByb3BlcnR5UmVsYXRpb24iLCJnZXRUZXJtIiwiZ2V0UHJvcGVydHlSZWxhdGlvbiIsIm1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJjb250ZXh0IiwicHJvcGVydHlNYXRjaGVzVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJ0ZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwicHJvcGVydHlSZWxhdGlvblN0cmluZyIsInByb3BlcnR5QXNzZXJ0aW9uU3RyaW5nIiwidHJhY2UiLCJ0ZXJtQSIsInRlcm1CIiwidGVybUFFcXVhbFRvVGVybUIiLCJpc0VxdWFsVG8iLCJwcm9wZXJ0eVJlbGF0aW9uRXF1YWxUb1Byb3BlcnR5UmVsYXRpb24iLCJkZWJ1ZyIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmVyaWZpZXMiLCJ0ZXJtVmVyaWZpZXMiLCJ2ZXJpZnlUZXJtIiwicHJvcGVydHlSZWxhdGlvblZlcmlmaWVzIiwidmVyaWZ5UHJvcGVydHlSZWxhdGlvbiIsInZlcmlmaWVzV2hlblN0YXRlZCIsInZlcmlmaWVzV2hlbkRlcml2ZWQiLCJ2ZXJpZnlXaGVuU3RhdGVkIiwidmVyaWZ5V2hlbkRlcml2ZWQiLCJhc3NpZ24iLCJ2ZXJpZmllc0FoZWFkIiwidmFyaWFibGUiLCJWYXJpYWJsZSIsInN0cnVjdHVyZSIsInRlcm1Ob2RlIiwiZ2V0Tm9kZSIsImZyb21UZXJtTm9kZSIsInZhcmlhYmxlSWRlbnRpZmllciIsImdldElkZW50aWZpZXIiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsImZyb21WYXJpYWJsZUFuZFByb3BlcnR5UmVsYXRpb24iLCJ2YXJpYWJsZUFzc2lnbm1lbnQiLCJWYXJpYWJsZUFzc2lnbm1lbnQiLCJmcm9tVmFyaWFibGUiLCJhc3NpZ25tZW50IiwicHVzaCIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsInByb3BlcnR5QXNzZXJ0aW9uIiwicHJvcGVydHlBc3NlcnRpb25Ob2RlIiwiZ2V0UHJvcGVydHlBc3NlcnRpb25Ob2RlIiwiVGVybSIsIlByb3BlcnR5UmVsYXRpb24iLCJub2RlQXNTdHJpbmciLCJub2RlQXNUb2tlbnMiLCJmcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlIiwiQXNzZXJ0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7aUVBTnNCO2dFQUNBOytEQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUkvQixXQUFlQSxJQUFBQSxpQkFBTSxzQ0FBQzs7YUFBTUMsa0JBQ2RDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsZ0JBQWdCO2dDQUQ5Qkw7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFRQztZQUFNQzs7UUFFcEIsTUFBS0MsSUFBSSxHQUFHQTtRQUNaLE1BQUtDLGdCQUFnQixHQUFHQTs7Ozs7WUFHMUJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsZ0JBQWdCO1lBQzlCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLDZCQUE2QkosSUFBSSxFQUFFQyxnQkFBZ0IsRUFBRUksT0FBTztnQkFDMUQsSUFBSUMseUNBQXlDO2dCQUU3QyxJQUFNQyxhQUFhUCxLQUFLUSxTQUFTLElBQzNCQyx5QkFBeUJSLGlCQUFpQk8sU0FBUyxJQUNuREUsMEJBQTBCLElBQUksQ0FBQ0YsU0FBUztnQkFFOUNILFFBQVFNLEtBQUssQ0FBQyxBQUFDLGlCQUF5Q0YsT0FBekJGLFlBQVcsZ0JBQXdFRyxPQUExREQsd0JBQXVCLHFDQUEyRCxPQUF4QkMseUJBQXdCO2dCQUUxSSxJQUFNRSxRQUFRWixNQUNSYSxRQUFR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