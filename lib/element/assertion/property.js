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
var _assertion = /*#__PURE__*/ _interop_require_default(require("../assertion"));
var _assign = require("../../process/assign");
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
var _default = (0, _elements.define)((_PropertyAssertion = /*#__PURE__*/ function(Assertion) {
    _inherits(PropertyAssertion, Assertion);
    function PropertyAssertion(context, string, node, term, propertyRelation) {
        _class_call_check(this, PropertyAssertion);
        var _this;
        _this = _call_super(this, PropertyAssertion, [
            context,
            string,
            node
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
            key: "getPropertyAssertionNode",
            value: function getPropertyAssertionNode() {
                var node = this.getNode(), propertyAssertionNode = node; ///
                return propertyAssertionNode;
            }
        },
        {
            key: "compareTermAndPropertyRelation",
            value: function compareTermAndPropertyRelation(term, propertyRelation, context) {
                var comparesToTermAndPropertyRelation = false;
                var termString = term.getString(), propertyRelationString = propertyRelation.getString(), propertyAssertionString = this.getString(); ///
                context.trace("Comparing the '".concat(propertyAssertionString, "' property assertion to the '").concat(termString, "' term and '").concat(propertyRelationString, "' property relation..."));
                var termA = term, termB = this.term, termAEqualToTermB = termA.isEqualTo(termB);
                if (termAEqualToTermB) {
                    var propertyRelationEqualToPropertyRelation = this.propertyRelation.isEqualTo(propertyRelation);
                    comparesToTermAndPropertyRelation = propertyRelationEqualToPropertyRelation; ///
                }
                if (comparesToTermAndPropertyRelation) {
                    context.debug("...compared the '".concat(propertyAssertionString, "' property assertion to the '").concat(termString, "' term and '").concat(propertyRelationString, "' property relation."));
                }
                return comparesToTermAndPropertyRelation;
            }
        },
        {
            key: "validate",
            value: function validate(assignments, stated, context) {
                var validates = false;
                var propertyAssertionString = this.getString(); ///
                context.trace("Validating the '".concat(propertyAssertionString, "' property assertion..."));
                var valid = this.isValid(context);
                if (valid) {
                    validates = true;
                    context.debug("...the '".concat(propertyAssertionString, "' property assertion is already valid."));
                } else {
                    var termValidates = this.validateTerm(assignments, stated, context);
                    if (termValidates) {
                        var propertyRelationVerifies = this.validatePropertyRelation(assignments, stated, context);
                        if (propertyRelationVerifies) {
                            var validatesWhenStated = false, validatesWhenDerived = false;
                            if (stated) {
                                validatesWhenStated = this.validateWhenStated(assignments, context);
                            } else {
                                validatesWhenDerived = this.validateWhenDerived(context);
                            }
                            if (validatesWhenStated || validatesWhenDerived) {
                                validates = true;
                            }
                        }
                    }
                    if (validates) {
                        if (stated) {
                            this.assign(assignments, context);
                        }
                    }
                    if (validates) {
                        context.debug("...validated the '".concat(propertyAssertionString, "' property assertion."));
                    }
                }
                return validates;
            }
        },
        {
            key: "validateTerm",
            value: function validateTerm(assignments, stated, context) {
                var termValidates;
                var termString = this.term.getString();
                context.trace("Validating the '".concat(termString, "' term..."));
                termValidates = this.term.validate(context, function() {
                    var validatesForwards = true;
                    return validatesForwards;
                });
                if (termValidates) {
                    context.debug("...validated the '".concat(termString, "' term."));
                }
                return termValidates;
            }
        },
        {
            key: "validatePropertyRelation",
            value: function validatePropertyRelation(assignments, stated, context) {
                var propertyRelationVerifies;
                var propertyRelationString = this.propertyRelation.getString();
                context.trace("Validating the '".concat(propertyRelationString, "' property relation..."));
                propertyRelationVerifies = this.propertyRelation.validate(context);
                if (propertyRelationVerifies) {
                    context.debug("...validated the '".concat(propertyRelationString, "' property relation."));
                }
                return propertyRelationVerifies;
            }
        },
        {
            key: "validateWhenStated",
            value: function validateWhenStated(assignments, context) {
                var validatesWhenStated;
                var propertyAssertionString = this.getString(); ///
                context.trace("Validating the '".concat(propertyAssertionString, "' stated property assertion..."));
                validatesWhenStated = true;
                if (validatesWhenStated) {
                    context.debug("...validated the '".concat(propertyAssertionString, "' stated property assertion."));
                }
                return validatesWhenStated;
            }
        },
        {
            key: "validateWhenDerived",
            value: function validateWhenDerived(context) {
                var validatesWhenDerived;
                var propertyAssertionString = this.getString(); ///
                context.trace("Validating the '".concat(propertyAssertionString, "' derived property assertion..."));
                validatesWhenDerived = true;
                if (validatesWhenDerived) {
                    context.debug("...validated the '".concat(propertyAssertionString, "' derived property assertion."));
                }
                return validatesWhenDerived;
            }
        },
        {
            key: "assign",
            value: function assign(assignments, context) {
                if (assignments === null) {
                    return;
                }
                var variable;
                var Variable = _elements.default.Variable, termNode = this.term.getNode();
                variable = Variable.fromTermNode(termNode, context);
                if (variable !== null) {
                    var variableIdentifier = variable.getIdentifier();
                    variable = context.findVariableByVariableIdentifier(variableIdentifier);
                    variable = Variable.fromVariableAndPropertyRelation(variable, this.propertyRelation);
                    var variableAssignment = (0, _assign.variableAssignmentFromVariable)(variable), assignment = variableAssignment; ///
                    assignments.push(assignment);
                }
            }
        }
    ]);
    return PropertyAssertion;
}(_assertion.default), _define_property(_PropertyAssertion, "name", "PropertyAssertion"), _PropertyAssertion));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9wcm9wZXJ0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IEFzc2VydGlvbiBmcm9tIFwiLi4vYXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdmFyaWFibGVBc3NpZ25tZW50RnJvbVZhcmlhYmxlIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvYXNzaWduXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9wZXJ0eUFzc2VydGlvbiBleHRlbmRzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgcHJvcGVydHlSZWxhdGlvbikge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMucHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb247XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRQcm9wZXJ0eVJlbGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnR5UmVsYXRpb247XG4gIH1cblxuICBnZXRQcm9wZXJ0eUFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHByb3BlcnR5QXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvblN0cmluZyA9IHByb3BlcnR5UmVsYXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcHJvcGVydHlBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBwcm9wZXJ0eSBhc3NlcnRpb24gdG8gdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFuZCAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRlcm1BID0gdGVybSxcbiAgICAgICAgICB0ZXJtQiA9IHRoaXMudGVybSwgLy8vXG4gICAgICAgICAgdGVybUFFcXVhbFRvVGVybUIgPSB0ZXJtQS5pc0VxdWFsVG8odGVybUIpO1xuXG4gICAgaWYgKHRlcm1BRXF1YWxUb1Rlcm1CKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uRXF1YWxUb1Byb3BlcnR5UmVsYXRpb24gPSB0aGlzLnByb3BlcnR5UmVsYXRpb24uaXNFcXVhbFRvKHByb3BlcnR5UmVsYXRpb24pO1xuXG4gICAgICBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24gPSBwcm9wZXJ0eVJlbGF0aW9uRXF1YWxUb1Byb3BlcnR5UmVsYXRpb247ICAvLy9cbiAgICB9XG5cbiAgICBpZiAoY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5jb21wYXJlZCB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBwcm9wZXJ0eSBhc3NlcnRpb24gdG8gdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFuZCAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBwcm9wZXJ0eSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkID0gdGhpcy5pc1ZhbGlkKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBwcm9wZXJ0eSBhc3NlcnRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUZXJtKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uVmVyaWZpZXMgPSB0aGlzLnZhbGlkYXRlUHJvcGVydHlSZWxhdGlvbihhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAocHJvcGVydHlSZWxhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRoaXMudmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgdGhpcy5hc3NpZ24oYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVUZXJtKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZhbGlkYXRlcztcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgdGVybVZhbGlkYXRlcyA9IHRoaXMudGVybS52YWxpZGF0ZShjb250ZXh0LCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICB9KTtcblxuICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVQcm9wZXJ0eVJlbGF0aW9uKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvcGVydHlSZWxhdGlvblZlcmlmaWVzO1xuXG4gICAgY29uc3QgcHJvcGVydHlSZWxhdGlvblN0cmluZyA9IHRoaXMucHJvcGVydHlSZWxhdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi4uLmApO1xuXG4gICAgcHJvcGVydHlSZWxhdGlvblZlcmlmaWVzID0gdGhpcy5wcm9wZXJ0eVJlbGF0aW9uLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKHByb3BlcnR5UmVsYXRpb25WZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb25WZXJpZmllcztcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgcHJvcGVydHlBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHByb3BlcnR5IGFzc2VydGlvbi4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBwcm9wZXJ0eSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHByb3BlcnR5IGFzc2VydGlvbi4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBwcm9wZXJ0eSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgYXNzaWduKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgaWYgKGFzc2lnbm1lbnRzID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHZhcmlhYmxlO1xuXG4gICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgdGVybU5vZGUgPSB0aGlzLnRlcm0uZ2V0Tm9kZSgpO1xuXG4gICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZS5nZXRJZGVudGlmaWVyKCk7XG5cbiAgICAgIHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZUFuZFByb3BlcnR5UmVsYXRpb24odmFyaWFibGUsIHRoaXMucHJvcGVydHlSZWxhdGlvbik7XG5cbiAgICAgIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudCA9IHZhcmlhYmxlQXNzaWdubWVudEZyb21WYXJpYWJsZSh2YXJpYWJsZSksXG4gICAgICAgICAgICBhc3NpZ25tZW50ID0gdmFyaWFibGVBc3NpZ25tZW50OyAgLy8vXG5cbiAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb3BlcnR5QXNzZXJ0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQcm9wZXJ0eUFzc2VydGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidGVybSIsInByb3BlcnR5UmVsYXRpb24iLCJnZXRUZXJtIiwiZ2V0UHJvcGVydHlSZWxhdGlvbiIsImdldFByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsImdldE5vZGUiLCJwcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJjb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJ0ZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwicHJvcGVydHlSZWxhdGlvblN0cmluZyIsInByb3BlcnR5QXNzZXJ0aW9uU3RyaW5nIiwidHJhY2UiLCJ0ZXJtQSIsInRlcm1CIiwidGVybUFFcXVhbFRvVGVybUIiLCJpc0VxdWFsVG8iLCJwcm9wZXJ0eVJlbGF0aW9uRXF1YWxUb1Byb3BlcnR5UmVsYXRpb24iLCJkZWJ1ZyIsInZhbGlkYXRlIiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2YWxpZGF0ZXMiLCJ2YWxpZCIsImlzVmFsaWQiLCJ0ZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVUZXJtIiwicHJvcGVydHlSZWxhdGlvblZlcmlmaWVzIiwidmFsaWRhdGVQcm9wZXJ0eVJlbGF0aW9uIiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImFzc2lnbiIsInZhbGlkYXRlc0ZvcndhcmRzIiwidmFyaWFibGUiLCJWYXJpYWJsZSIsImVsZW1lbnRzIiwidGVybU5vZGUiLCJmcm9tVGVybU5vZGUiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJnZXRJZGVudGlmaWVyIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJmcm9tVmFyaWFibGVBbmRQcm9wZXJ0eVJlbGF0aW9uIiwidmFyaWFibGVBc3NpZ25tZW50IiwidmFyaWFibGVBc3NpZ25tZW50RnJvbVZhcmlhYmxlIiwiYXNzaWdubWVudCIsInB1c2giLCJBc3NlcnRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OztnRUFOcUI7Z0VBQ0M7c0JBR3lCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUvQyxXQUFlQSxJQUFBQSxnQkFBTSxzQ0FBQzs7YUFBTUMsa0JBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsZ0JBQWdCO2dDQUQvQkw7O2dCQUV4QixrQkFGd0JBO1lBRWxC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