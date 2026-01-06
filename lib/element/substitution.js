"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Substitution;
    }
});
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var Substitution = /*#__PURE__*/ function(Element) {
    _inherits(Substitution, Element);
    function Substitution(context, string, node) {
        _class_call_check(this, Substitution);
        return _call_super(this, Substitution, [
            context,
            string,
            node
        ]);
    }
    _create_class(Substitution, [
        {
            key: "getTerm",
            value: function getTerm() {
                var term = null;
                return term;
            }
        },
        {
            key: "getFrame",
            value: function getFrame() {
                var frame = null;
                return frame;
            }
        },
        {
            key: "getVariable",
            value: function getVariable() {
                var variable = null;
                return variable;
            }
        },
        {
            key: "getReference",
            value: function getReference() {
                var reference = null;
                return reference;
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                var statement = null;
                return statement;
            }
        },
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                var metavariableNode = null;
                return metavariableNode;
            }
        },
        {
            key: "getSubstitution",
            value: function getSubstitution() {
                var substitution = null;
                return substitution;
            }
        },
        {
            key: "getReplacementNode",
            value: function getReplacementNode() {
                var replacementNode = null;
                return replacementNode;
            }
        },
        {
            key: "isSimple",
            value: function isSimple() {
                var simple = true;
                return simple;
            }
        },
        {
            key: "isComplex",
            value: function isComplex() {
                var simple = this.isSimple(), complex = !simple;
                return complex;
            }
        },
        {
            key: "isTrivial",
            value: function isTrivial() {
                var trivial = false;
                return trivial;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(substitution) {
                var substitutionNode = substitution.getNode(), matches = this.node.match(substitutionNode), equalTo = matches; ///
                return equalTo;
            }
        },
        {
            key: "isTermEqualToTerm",
            value: function isTermEqualToTerm(term, context) {
                var termEqualToTerm = false;
                return termEqualToTerm;
            }
        },
        {
            key: "isFrameEqualToFrame",
            value: function isFrameEqualToFrame(frame) {
                var frameEqualToFrame = false;
                return frameEqualToFrame;
            }
        },
        {
            key: "isReferenceEqualToReference",
            value: function isReferenceEqualToReference(reference, context) {
                var referenceEqualToReference = false;
                return referenceEqualToReference;
            }
        },
        {
            key: "isStatementEqualToStatement",
            value: function isStatementEqualToStatement(statement, context) {
                var statementEqualToStatement = false;
                return statementEqualToStatement;
            }
        },
        {
            key: "isMetavariableEqualToMetavariable",
            value: function isMetavariableEqualToMetavariable(metavariable) {
                var metavariableEqualToMetavariable = false;
                return metavariableEqualToMetavariable;
            }
        },
        {
            key: "isSubstitutionEqualToSubstitution",
            value: function isSubstitutionEqualToSubstitution(substitution) {
                var substitutionEqualToSubstitution = substitution === null;
                return substitutionEqualToSubstitution;
            }
        },
        {
            key: "matchParameter",
            value: function matchParameter(parameter) {
                var parameterMatches = false;
                return parameterMatches;
            }
        },
        {
            key: "matchSubstitutionNode",
            value: function matchSubstitutionNode(substitutionNode) {
                return this.node.match(substitutionNode);
            }
        },
        {
            key: "resolve",
            value: function resolve(substitutions, context) {
                var resolved = true;
                return resolved;
            }
        }
    ]);
    return Substitution;
}(_wrap_native_super(_element.default));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Vic3RpdHV0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIGNvbnN0IHRlcm0gPSBudWxsO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBnZXRGcmFtZSgpIHtcbiAgICBjb25zdCBmcmFtZSA9IG51bGw7XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlID0gbnVsbDtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbigpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudE5vZGUgPSBudWxsO1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIGlzU2ltcGxlKCkge1xuICAgIGNvbnN0IHNpbXBsZSA9IHRydWU7XG5cbiAgICByZXR1cm4gc2ltcGxlO1xuICB9XG5cbiAgaXNDb21wbGV4KCkge1xuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKSxcbiAgICAgICAgICBjb21wbGV4ID0gIXNpbXBsZTtcblxuICAgIHJldHVybiBjb21wbGV4O1xuICB9XG5cbiAgaXNUcml2aWFsKCkge1xuICAgIGNvbnN0IHRyaXZpYWwgPSBmYWxzZTtcblxuICAgIHJldHVybiB0cml2aWFsO1xuICB9XG5cbiAgaXNFcXVhbFRvKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2goc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IG1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNUZXJtRXF1YWxUb1Rlcm0odGVybSwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1FcXVhbFRvVGVybSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1FcXVhbFRvVGVybTtcbiAgfVxuXG4gIGlzRnJhbWVFcXVhbFRvRnJhbWUoZnJhbWUpIHtcbiAgICBjb25zdCBmcmFtZUVxdWFsVG9GcmFtZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGZyYW1lRXF1YWxUb0ZyYW1lO1xuICB9XG5cbiAgaXNSZWZlcmVuY2VFcXVhbFRvUmVmZXJlbmNlKHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHJlZmVyZW5jZUVxdWFsVG9SZWZlcmVuY2UgPSBmYWxzZTtcblxuICAgIHJldHVybiByZWZlcmVuY2VFcXVhbFRvUmVmZXJlbmNlO1xuICB9XG5cbiAgaXNTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQgPSBmYWxzZTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50O1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUgPSBmYWxzZTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgaXNTdWJzdGl0dXRpb25FcXVhbFRvU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dXRpb24gPSAoc3Vic3RpdHV0aW9uID09PSBudWxsKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25FcXVhbFRvU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgbWF0Y2hQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgY29uc3QgcGFyYW1ldGVyTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlck1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkgeyByZXR1cm4gdGhpcy5ub2RlLm1hdGNoKHN1YnN0aXR1dGlvbk5vZGUpOyB9XG5cbiAgcmVzb2x2ZShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcmVzb2x2ZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHJlc29sdmVkO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJnZXRUZXJtIiwidGVybSIsImdldEZyYW1lIiwiZnJhbWUiLCJnZXRWYXJpYWJsZSIsInZhcmlhYmxlIiwiZ2V0UmVmZXJlbmNlIiwicmVmZXJlbmNlIiwiZ2V0U3RhdGVtZW50Iiwic3RhdGVtZW50IiwiZ2V0TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsImdldFJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsImlzU2ltcGxlIiwic2ltcGxlIiwiaXNDb21wbGV4IiwiY29tcGxleCIsImlzVHJpdmlhbCIsInRyaXZpYWwiLCJpc0VxdWFsVG8iLCJzdWJzdGl0dXRpb25Ob2RlIiwiZ2V0Tm9kZSIsIm1hdGNoZXMiLCJtYXRjaCIsImVxdWFsVG8iLCJpc1Rlcm1FcXVhbFRvVGVybSIsInRlcm1FcXVhbFRvVGVybSIsImlzRnJhbWVFcXVhbFRvRnJhbWUiLCJmcmFtZUVxdWFsVG9GcmFtZSIsImlzUmVmZXJlbmNlRXF1YWxUb1JlZmVyZW5jZSIsInJlZmVyZW5jZUVxdWFsVG9SZWZlcmVuY2UiLCJpc1N0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQiLCJzdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50IiwiaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsImlzU3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dXRpb24iLCJtYXRjaFBhcmFtZXRlciIsInBhcmFtZXRlciIsInBhcmFtZXRlck1hdGNoZXMiLCJtYXRjaFN1YnN0aXR1dGlvbk5vZGUiLCJyZXNvbHZlIiwic3Vic3RpdHV0aW9ucyIsInJlc29sdmVkIiwiRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7OERBRkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUwsSUFBQSxB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