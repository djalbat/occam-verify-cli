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
            key: "getSubstitutionNode",
            value: function getSubstitutionNode() {
                var node = this.getNode(), substitutionNode = node; ///
                return substitutionNode;
            }
        },
        {
            key: "matchSubstitutionNode",
            value: function matchSubstitutionNode(substitutionNode) {
                var substitutionNodeA = substitutionNode; ///
                substitutionNode = this.getSubstitutionNode();
                var substitutionNodeB = substitutionNode, substitutionNodeAAMatchesSubstitutionBNodeB = substitutionNodeA.match(substitutionNodeB), equalTo = substitutionNodeAAMatchesSubstitutionBNodeB; ///
                return equalTo;
            }
        },
        {
            key: "isValid",
            value: function isValid(context) {
                var substitutionNode = this.getSubstitutionNode(), substitutionPresent = context.isSubstitutionPresentBySubstitutionNode(substitutionNode), valid = substitutionPresent; ///
                return valid;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(substitution) {
                var substitutionNode = substitution.getNode(), substitutionNodeMatches = this.matchSubstitutionNode(substitutionNode), equalTo = substitutionNodeMatches; ///
                return equalTo;
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
            key: "compare",
            value: function compare(substitution) {
                var comparesToSubstitution = false;
                return comparesToSubstitution;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IHByaW1pdGl2ZVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuY29uc3QgeyBwcmltaXRpdmVGcm9tTm9kZSB9ID1wcmltaXRpdmVVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YnN0aXR1dGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uKCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZ2V0UHJpbWl0aXZlKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSB0aGlzLmdldFJlcGxhY2VtZW50Tm9kZSgpLFxuICAgICAgICAgIG5vZGUgPSByZXBsYWNlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIHByaW1pdGl2ZSA9IHByaW1pdGl2ZUZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZShjb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uTm9kZTtcbiAgfVxuXG4gIG1hdGNoU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZUEgPSBzdWJzdGl0dXRpb25Ob2RlOyAvLy9cblxuICAgIHN1YnN0aXR1dGlvbk5vZGUgPSB0aGlzLmdldFN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGVCID0gc3Vic3RpdHV0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZUFBTWF0Y2hlc1N1YnN0aXR1dGlvbkJOb2RlQiA9IHN1YnN0aXR1dGlvbk5vZGVBLm1hdGNoKHN1YnN0aXR1dGlvbk5vZGVCKSxcbiAgICAgICAgICBlcXVhbFRvID0gc3Vic3RpdHV0aW9uTm9kZUFBTWF0Y2hlc1N1YnN0aXR1dGlvbkJOb2RlQjsgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzVmFsaWQoY29udGV4dCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSB0aGlzLmdldFN1YnN0aXR1dGlvbk5vZGUoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25QcmVzZW50ID0gY29udGV4dC5pc1N1YnN0aXR1dGlvblByZXNlbnRCeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgdmFsaWQgPSBzdWJzdGl0dXRpb25QcmVzZW50OyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWQ7XG4gIH1cblxuICBpc0VxdWFsVG8oc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNTaW1wbGUoKSB7XG4gICAgY29uc3Qgc2ltcGxlID0gdHJ1ZTtcblxuICAgIHJldHVybiBzaW1wbGU7XG4gIH1cblxuICBpc0NvbXBsZXgoKSB7XG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpLFxuICAgICAgICAgIGNvbXBsZXggPSAhc2ltcGxlO1xuXG4gICAgcmV0dXJuIGNvbXBsZXg7XG4gIH1cblxuICBpc1RyaXZpYWwoKSB7XG4gICAgY29uc3QgdHJpdmlhbCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRyaXZpYWw7XG4gIH1cblxuICBpc05vblRyaXZpYWwoKSB7XG4gICAgY29uc3QgdHJpdmlhbCA9IHRoaXMuaXNUcml2aWFsKCksXG4gICAgICAgICAgbm9uVHJpdmxhbCA9ICF0cml2aWFsO1xuXG4gICAgcmV0dXJuIG5vblRyaXZsYWw7XG4gIH1cblxuICBpc0ZyYW1lRXF1YWxUb0ZyYW1lKGZyYW1lKSB7XG4gICAgY29uc3QgZnJhbWVFcXVhbFRvRnJhbWUgPSBmYWxzZTtcblxuICAgIHJldHVybiBmcmFtZUVxdWFsVG9GcmFtZTtcbiAgfVxuXG4gIGlzUmVmZXJlbmNlRXF1YWxUb1JlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCByZWZlcmVuY2VFcXVhbFRvUmVmZXJlbmNlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlRXF1YWxUb1JlZmVyZW5jZTtcbiAgfVxuXG4gIGNvbXBhcmUoc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3QgY29tcGFyZXNUb1N1YnN0aXR1dGlvbiA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdWJzdGl0dXRpb247XG4gIH1cblxuICBjb21wYXJlVGVybSh0ZXJtLCBjb250ZXh0KSB7XG4gICAgY29uc3QgY29tcGFyZXNUb1Rlcm0gPSBmYWxzZTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvVGVybTtcbiAgfVxuXG4gIGNvbXBhcmVTdGF0ZW1lbnQoc3RhdGVtZW50KSB7XG4gICAgY29uc3QgY29tcGFyZXNUb1N0YXRlbWVudCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdGF0ZW1lbnQ7XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGNvbnN0IGNvbXBhcmVzVG9QYXJhbWV0ZXIgPSBmYWxzZTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW1ldGVyO1xuICB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBjb21wYWFyZXNUb01ldGF2YXJpYWJsZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGNvbXBhYXJlc1RvTWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgcmVzb2x2ZShzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3QgcmVzb2x2ZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHJlc29sdmVkO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU3Vic3RpdHV0aW9uIiwicHJpbWl0aXZlRnJvbU5vZGUiLCJwcmltaXRpdmVVdGlsaXRpZXMiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImdldFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsImdldFByaW1pdGl2ZSIsImdldENvbnRleHQiLCJyZXBsYWNlbWVudE5vZGUiLCJnZXRSZXBsYWNlbWVudE5vZGUiLCJwcmltaXRpdmUiLCJnZXRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJnZXRTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0Tm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJtYXRjaFN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlQSIsInN1YnN0aXR1dGlvbk5vZGVCIiwic3Vic3RpdHV0aW9uTm9kZUFBTWF0Y2hlc1N1YnN0aXR1dGlvbkJOb2RlQiIsIm1hdGNoIiwiZXF1YWxUbyIsImlzVmFsaWQiLCJzdWJzdGl0dXRpb25QcmVzZW50IiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlTdWJzdGl0dXRpb25Ob2RlIiwidmFsaWQiLCJpc0VxdWFsVG8iLCJzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyIsImlzU2ltcGxlIiwic2ltcGxlIiwiaXNDb21wbGV4IiwiY29tcGxleCIsImlzVHJpdmlhbCIsInRyaXZpYWwiLCJpc05vblRyaXZpYWwiLCJub25Ucml2bGFsIiwiaXNGcmFtZUVxdWFsVG9GcmFtZSIsImZyYW1lIiwiZnJhbWVFcXVhbFRvRnJhbWUiLCJpc1JlZmVyZW5jZUVxdWFsVG9SZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJyZWZlcmVuY2VFcXVhbFRvUmVmZXJlbmNlIiwiY29tcGFyZSIsImNvbXBhcmVzVG9TdWJzdGl0dXRpb24iLCJjb21wYXJlVGVybSIsInRlcm0iLCJjb21wYXJlc1RvVGVybSIsImNvbXBhcmVTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJjb21wYXJlc1RvU3RhdGVtZW50IiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJjb21wYXJlTWV0YXZhcmlhYmxlIiwiY29tcGFhcmVzVG9NZXRhdmFyaWFibGUiLCJyZXNvbHZlIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwicmVzb2x2ZWQiLCJFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7Ozs4QkFMRzsyQkFDVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLElBQU0sQUFBRUMsb0JBQXFCQywrQkFBa0IsQ0FBdkNEO0FBRU8sSUFBQSxBQUFNRCw2QkFBTjtjQUFNQTthQUFBQSxhQUNQRyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSTtnQ0FEZEw7UUFFakIsT0FBQSxrQkFGaUJBO1lBRVhHO1lBQVNDO1lBQVFDOzs7a0JBRk5MOztZQUtuQk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGVBQWU7Z0JBRXJCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUwsVUFBVSxJQUFJLENBQUNNLFVBQVUsSUFDekJDLGtCQUFrQixJQUFJLENBQUNDLGtCQUFrQixJQUN6Q04sT0FBT0ssaUJBQ1BFLFlBQVlYLGtCQUFrQkksTUFBTUY7Z0JBRTFDLE9BQU9TO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCVixPQUFPO2dCQUNyQixJQUFNVyxlQUFlO2dCQUVyQixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1WLE9BQU8sSUFBSSxDQUFDVyxPQUFPLElBQ25CQyxtQkFBbUJaLE1BQU0sR0FBRztnQkFFbEMsT0FBT1k7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JELGdCQUFnQjtnQkFDcEMsSUFBTUUsb0JBQW9CRixrQkFBa0IsR0FBRztnQkFFL0NBLG1CQUFtQixJQUFJLENBQUNGLG1CQUFtQjtnQkFFM0MsSUFBTUssb0JBQW9CSCxrQkFDcEJJLDhDQUE4Q0Ysa0JBQWtCRyxLQUFLLENBQUNGLG9CQUN0RUcsVUFBVUYsNkNBQTZDLEdBQUc7Z0JBRWhFLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUXJCLE9BQU87Z0JBQ2IsSUFBTWMsbUJBQW1CLElBQUksQ0FBQ0YsbUJBQW1CLElBQzNDVSxzQkFBc0J0QixRQUFRdUIsdUNBQXVDLENBQUNULG1CQUN0RVUsUUFBUUYscUJBQXNCLEdBQUc7Z0JBRXZDLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVXJCLFlBQVk7Z0JBQ3BCLElBQU1VLG1CQUFtQlYsYUFBYVMsT0FBTyxJQUN2Q2EsMEJBQTBCLElBQUksQ0FBQ1gscUJBQXFCLENBQUNELG1CQUNyRE0sVUFBVU0seUJBQTBCLEdBQUc7Z0JBRTdDLE9BQU9OO1lBQ1Q7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsU0FBUztnQkFFZixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ELFNBQVMsSUFBSSxDQUFDRCxRQUFRLElBQ3RCRyxVQUFVLENBQUNGO2dCQUVqQixPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFVBQVU7Z0JBRWhCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUQsVUFBVSxJQUFJLENBQUNELFNBQVMsSUFDeEJHLGFBQWEsQ0FBQ0Y7Z0JBRXBCLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CQyxLQUFLO2dCQUN2QixJQUFNQyxvQkFBb0I7Z0JBRTFCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsNEJBQTRCQyxTQUFTO2dCQUNuQyxJQUFNQyw0QkFBNEI7Z0JBRWxDLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUXJDLFlBQVk7Z0JBQ2xCLElBQU1zQyx5QkFBeUI7Z0JBRS9CLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWUMsSUFBSSxFQUFFNUMsT0FBTztnQkFDdkIsSUFBTTZDLGlCQUFpQjtnQkFFdkIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLFNBQVM7Z0JBQ3hCLElBQU1DLHNCQUFzQjtnQkFFNUIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLFNBQVM7Z0JBQ3hCLElBQU1DLHNCQUFzQjtnQkFFNUIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0J6QyxZQUFZO2dCQUM5QixJQUFNMEMsMEJBQTBCO2dCQUVoQyxPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLGFBQWEsRUFBRUMsY0FBYyxFQUFFQyxlQUFlO2dCQUNwRCxJQUFNQyxXQUFXO2dCQUVqQixPQUFPQTtZQUNUOzs7V0FySW1CN0Q7cUJBQXFCOEQsdUJBQU8ifQ==