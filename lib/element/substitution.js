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
var _occamlanguages = require("occam-languages");
var _occamfurtle = require("occam-furtle");
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
var primitiveFromNode = _occamfurtle.primitiveUtilities.primitiveFromNode;
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
            key: "getSubstitution",
            value: function getSubstitution() {
                var substitution = null;
                return substitution;
            }
        },
        {
            key: "getPrimitive",
            value: function getPrimitive() {
                var context = this.getContext(), replacementNode = this.getReplacementNode(), node = replacementNode, primitive = primitiveFromNode(node, context);
                return primitive;
            }
        },
        {
            key: "getMetavariable",
            value: function getMetavariable(context) {
                var metavariable = null;
                return metavariable;
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
            key: "isNonTrivial",
            value: function isNonTrivial() {
                var trivial = this.isTrivial(), nonTrivlal = !trivial;
                return nonTrivlal;
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
            value: function isReferenceEqualToReference(reference) {
                var referenceEqualToReference = false;
                return referenceEqualToReference;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(substitution) {
                var substitutionA = this, substitutionB = substitution, substitutionANode = substitutionA.getNode(), substitutionBNode = substitutionB.getNode(), substitutionANodeMatchesSubstitutionBNode = substitutionANode.match(substitutionBNode), equalTo = substitutionANodeMatchesSubstitutionBNode; ///
                return equalTo;
            }
        },
        {
            key: "compareTerm",
            value: function compareTerm(term, context) {
                var comparesToTerm = false;
                return comparesToTerm;
            }
        },
        {
            key: "compareStatement",
            value: function compareStatement(statement) {
                var comparesToStatement = false;
                return comparesToStatement;
            }
        },
        {
            key: "compareParameter",
            value: function compareParameter(parameter) {
                var comparesToParameter = false;
                return comparesToParameter;
            }
        },
        {
            key: "compareSubstitution",
            value: function compareSubstitution(substitution) {
                var comparesToSubstitution = false;
                return comparesToSubstitution;
            }
        },
        {
            key: "compareMetavariable",
            value: function compareMetavariable(metavariable) {
                var compaaresToMetavariable = false;
                return compaaresToMetavariable;
            }
        },
        {
            key: "resolve",
            value: function resolve(substitutions, generalContext, specificContext) {
                var resolved = true;
                return resolved;
            }
        }
    ]);
    return Substitution;
}(_wrap_native_super(_occamlanguages.Element));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IHByaW1pdGl2ZVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuY29uc3QgeyBwcmltaXRpdmVGcm9tTm9kZSB9ID1wcmltaXRpdmVVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YnN0aXR1dGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uKCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZ2V0UHJpbWl0aXZlKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSB0aGlzLmdldFJlcGxhY2VtZW50Tm9kZSgpLFxuICAgICAgICAgIG5vZGUgPSByZXBsYWNlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIHByaW1pdGl2ZSA9IHByaW1pdGl2ZUZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZShjb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIGlzQ29tcGxleCgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCksXG4gICAgICAgICAgY29tcGxleCA9ICFzaW1wbGU7XG5cbiAgICByZXR1cm4gY29tcGxleDtcbiAgfVxuXG4gIGlzVHJpdmlhbCgpIHtcbiAgICBjb25zdCB0cml2aWFsID0gZmFsc2U7XG5cbiAgICByZXR1cm4gdHJpdmlhbDtcbiAgfVxuXG4gIGlzTm9uVHJpdmlhbCgpIHtcbiAgICBjb25zdCB0cml2aWFsID0gdGhpcy5pc1RyaXZpYWwoKSxcbiAgICAgICAgICBub25Ucml2bGFsID0gIXRyaXZpYWw7XG5cbiAgICByZXR1cm4gbm9uVHJpdmxhbDtcbiAgfVxuXG4gIGlzRnJhbWVFcXVhbFRvRnJhbWUoZnJhbWUpIHtcbiAgICBjb25zdCBmcmFtZUVxdWFsVG9GcmFtZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGZyYW1lRXF1YWxUb0ZyYW1lO1xuICB9XG5cbiAgaXNSZWZlcmVuY2VFcXVhbFRvUmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IHJlZmVyZW5jZUVxdWFsVG9SZWZlcmVuY2UgPSBmYWxzZTtcblxuICAgIHJldHVybiByZWZlcmVuY2VFcXVhbFRvUmVmZXJlbmNlO1xuICB9XG5cbiAgaXNFcXVhbFRvKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkEgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25BTm9kZSA9IHN1YnN0aXR1dGlvbkEuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbkJOb2RlID0gc3Vic3RpdHV0aW9uQi5nZXROb2RlKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uQU5vZGVNYXRjaGVzU3Vic3RpdHV0aW9uQk5vZGUgPSBzdWJzdGl0dXRpb25BTm9kZS5tYXRjaChzdWJzdGl0dXRpb25CTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IHN1YnN0aXR1dGlvbkFOb2RlTWF0Y2hlc1N1YnN0aXR1dGlvbkJOb2RlOyAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgY29tcGFyZVRlcm0odGVybSwgY29udGV4dCkge1xuICAgIGNvbnN0IGNvbXBhcmVzVG9UZXJtID0gZmFsc2U7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1Rlcm07XG4gIH1cblxuICBjb21wYXJlU3RhdGVtZW50KHN0YXRlbWVudCkge1xuICAgIGNvbnN0IGNvbXBhcmVzVG9TdGF0ZW1lbnQgPSBmYWxzZTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvU3RhdGVtZW50O1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBjb25zdCBjb21wYXJlc1RvUGFyYW1ldGVyID0gZmFsc2U7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtZXRlcjtcbiAgfVxuXG4gIGNvbXBhcmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3QgY29tcGFyZXNUb1N1YnN0aXR1dGlvbiA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdWJzdGl0dXRpb247XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGNvbXBhYXJlc1RvTWV0YXZhcmlhYmxlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gY29tcGFhcmVzVG9NZXRhdmFyaWFibGU7XG4gIH1cblxuICByZXNvbHZlKHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCByZXNvbHZlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTdWJzdGl0dXRpb24iLCJwcmltaXRpdmVGcm9tTm9kZSIsInByaW1pdGl2ZVV0aWxpdGllcyIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiZ2V0U3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwiZ2V0UHJpbWl0aXZlIiwiZ2V0Q29udGV4dCIsInJlcGxhY2VtZW50Tm9kZSIsImdldFJlcGxhY2VtZW50Tm9kZSIsInByaW1pdGl2ZSIsImdldE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsImlzU2ltcGxlIiwic2ltcGxlIiwiaXNDb21wbGV4IiwiY29tcGxleCIsImlzVHJpdmlhbCIsInRyaXZpYWwiLCJpc05vblRyaXZpYWwiLCJub25Ucml2bGFsIiwiaXNGcmFtZUVxdWFsVG9GcmFtZSIsImZyYW1lIiwiZnJhbWVFcXVhbFRvRnJhbWUiLCJpc1JlZmVyZW5jZUVxdWFsVG9SZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJyZWZlcmVuY2VFcXVhbFRvUmVmZXJlbmNlIiwiaXNFcXVhbFRvIiwic3Vic3RpdHV0aW9uQSIsInN1YnN0aXR1dGlvbkIiLCJzdWJzdGl0dXRpb25BTm9kZSIsImdldE5vZGUiLCJzdWJzdGl0dXRpb25CTm9kZSIsInN1YnN0aXR1dGlvbkFOb2RlTWF0Y2hlc1N1YnN0aXR1dGlvbkJOb2RlIiwibWF0Y2giLCJlcXVhbFRvIiwiY29tcGFyZVRlcm0iLCJ0ZXJtIiwiY29tcGFyZXNUb1Rlcm0iLCJjb21wYXJlU3RhdGVtZW50Iiwic3RhdGVtZW50IiwiY29tcGFyZXNUb1N0YXRlbWVudCIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW1ldGVyIiwiY29tcGFyZVN1YnN0aXR1dGlvbiIsImNvbXBhcmVzVG9TdWJzdGl0dXRpb24iLCJjb21wYXJlTWV0YXZhcmlhYmxlIiwiY29tcGFhcmVzVG9NZXRhdmFyaWFibGUiLCJyZXNvbHZlIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwicmVzb2x2ZWQiLCJFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7Ozs4QkFMRzsyQkFDVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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