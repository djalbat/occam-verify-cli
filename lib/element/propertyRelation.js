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
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _elements = require("../elements");
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
var _PropertyRelation;
var _default = (0, _elements.define)((_PropertyRelation = /*#__PURE__*/ function(Element) {
    _inherits(PropertyRelation, Element);
    function PropertyRelation(context, string, node, property, term) {
        _class_call_check(this, PropertyRelation);
        var _this;
        _this = _call_super(this, PropertyRelation, [
            context,
            string,
            node
        ]);
        _this.property = property;
        _this.term = term;
        return _this;
    }
    _create_class(PropertyRelation, [
        {
            key: "getProperty",
            value: function getProperty() {
                return this.property;
            }
        },
        {
            key: "getTerm",
            value: function getTerm() {
                return this.term;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(propertyRelation) {
                var propertyRelationNode = propertyRelation.getNode(), matches = this.node.match(propertyRelationNode), equalTo = matches; ///
                return equalTo;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var verifies = false;
                var propertyRelationString = this.string; ///
                context.trace("Verifying the '".concat(propertyRelationString, "' property relation..."));
                var termVerifies = this.verifyTerm(context);
                if (termVerifies) {
                    var propertyVerifies = this.verifyProperty(context);
                    verifies = propertyVerifies;
                }
                if (verifies) {
                    context.debug("...verified the '".concat(propertyRelationString, "' property relation."));
                }
                return verifies;
            }
        },
        {
            key: "verifyTerm",
            value: function verifyTerm(context) {
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
            key: "verifyProperty",
            value: function verifyProperty(context) {
                var propertyVerifies;
                var propertyString = this.property.getString();
                context.trace("Verifying the '".concat(propertyString, "' property..."));
                var termType = this.term.getType(), propertyName = this.property.getName(), termTypeProperties = termType.getProperties(), variableTypeProperty = termTypeProperties.find(function(termTypeProperty) {
                    var propertyNameMatches = termTypeProperty.matchPropertyName(propertyName);
                    if (propertyNameMatches) {
                        return true;
                    }
                }) || null;
                if (variableTypeProperty === null) {
                    var variableString = this.term.getString(), variableTypeString = termType.getString();
                    context.debug("The '".concat(propertyName, "' property is not a property of the '").concat(variableString, "' variable's '").concat(variableTypeString, "' type."));
                } else {
                    propertyVerifies = true;
                }
                if (propertyVerifies) {
                    context.debug("...verified the '".concat(propertyString, "' property."));
                }
                return propertyVerifies;
            }
        }
    ]);
    return PropertyRelation;
}(_wrap_native_super(_element.default)), _define_property(_PropertyRelation, "name", "PropertyRelation"), _PropertyRelation));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb3BlcnR5UmVsYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJvcGVydHlSZWxhdGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHByb3BlcnR5LCB0ZXJtKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICB9XG5cbiAgZ2V0UHJvcGVydHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydHk7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBpc0VxdWFsVG8ocHJvcGVydHlSZWxhdGlvbikge1xuICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25Ob2RlID0gcHJvcGVydHlSZWxhdGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHRoaXMubm9kZS5tYXRjaChwcm9wZXJ0eVJlbGF0aW9uTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IG1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdGVybVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUZXJtKGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllcykge1xuICAgICAgY29uc3QgcHJvcGVydHlWZXJpZmllcyA9IHRoaXMudmVyaWZ5UHJvcGVydHkoY29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVzID0gcHJvcGVydHlWZXJpZmllcztcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VGVybShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1WZXJpZmllcztcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCk7XG5cbiAgICB0ZXJtVmVyaWZpZXMgPSB0aGlzLnRlcm0udmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgIGNvbnN0IHZlcmlmaWVzQWhlYWQgPSB0cnVlO1xuXG4gICAgICByZXR1cm4gdmVyaWZpZXNBaGVhZDtcbiAgICB9KTtcblxuICAgIGlmICh0ZXJtVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydHkoY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eVZlcmlmaWVzO1xuXG4gICAgY29uc3QgcHJvcGVydHlTdHJpbmcgPSB0aGlzLnByb3BlcnR5LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5Li4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVHlwZSA9IHRoaXMudGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgcHJvcGVydHlOYW1lID0gdGhpcy5wcm9wZXJ0eS5nZXROYW1lKCksXG4gICAgICAgICAgdGVybVR5cGVQcm9wZXJ0aWVzID0gdGVybVR5cGUuZ2V0UHJvcGVydGllcygpLFxuICAgICAgICAgIHZhcmlhYmxlVHlwZVByb3BlcnR5ID0gdGVybVR5cGVQcm9wZXJ0aWVzLmZpbmQoKHRlcm1UeXBlUHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZU1hdGNoZXMgPSB0ZXJtVHlwZVByb3BlcnR5Lm1hdGNoUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eU5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAodmFyaWFibGVUeXBlUHJvcGVydHkgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgdmFyaWFibGVUeXBlU3RyaW5nID0gdGVybVR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9wZXJ0eU5hbWV9JyBwcm9wZXJ0eSBpcyBub3QgYSBwcm9wZXJ0eSBvZiB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSdzICcke3ZhcmlhYmxlVHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BlcnR5VmVyaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlWZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9wZXJ0eVJlbGF0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQcm9wZXJ0eVJlbGF0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJwcm9wZXJ0eSIsInRlcm0iLCJnZXRQcm9wZXJ0eSIsImdldFRlcm0iLCJpc0VxdWFsVG8iLCJwcm9wZXJ0eVJlbGF0aW9uIiwicHJvcGVydHlSZWxhdGlvbk5vZGUiLCJnZXROb2RlIiwibWF0Y2hlcyIsIm1hdGNoIiwiZXF1YWxUbyIsInZlcmlmeSIsInZlcmlmaWVzIiwicHJvcGVydHlSZWxhdGlvblN0cmluZyIsInRyYWNlIiwidGVybVZlcmlmaWVzIiwidmVyaWZ5VGVybSIsInByb3BlcnR5VmVyaWZpZXMiLCJ2ZXJpZnlQcm9wZXJ0eSIsImRlYnVnIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInZlcmlmaWVzQWhlYWQiLCJwcm9wZXJ0eVN0cmluZyIsInRlcm1UeXBlIiwiZ2V0VHlwZSIsInByb3BlcnR5TmFtZSIsImdldE5hbWUiLCJ0ZXJtVHlwZVByb3BlcnRpZXMiLCJnZXRQcm9wZXJ0aWVzIiwidmFyaWFibGVUeXBlUHJvcGVydHkiLCJmaW5kIiwidGVybVR5cGVQcm9wZXJ0eSIsInByb3BlcnR5TmFtZU1hdGNoZXMiLCJtYXRjaFByb3BlcnR5TmFtZSIsInZhcmlhYmxlU3RyaW5nIiwidmFyaWFibGVUeXBlU3RyaW5nIiwiRWxlbWVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7OzhEQUpvQjt3QkFFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV2QixXQUFlQSxJQUFBQSxnQkFBTSxxQ0FBQzs7YUFBTUMsaUJBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRUMsSUFBSTtnQ0FEdkJMOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLFFBQVEsR0FBR0E7UUFDaEIsTUFBS0MsSUFBSSxHQUFHQTs7Ozs7WUFHZEMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixRQUFRO1lBQ3RCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLGdCQUFnQjtnQkFDeEIsSUFBTUMsdUJBQXVCRCxpQkFBaUJFLE9BQU8sSUFDL0NDLFVBQVUsSUFBSSxDQUFDVCxJQUFJLENBQUNVLEtBQUssQ0FBQ0gsdUJBQzFCSSxVQUFVRixTQUFVLEdBQUc7Z0JBRTdCLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT2QsT0FBTztnQkFDWixJQUFJZSxXQUFXO2dCQUVmLElBQU1DLHlCQUF5QixJQUFJLENBQUNmLE1BQU0sRUFBRSxHQUFHO2dCQUUvQ0QsUUFBUWlCLEtBQUssQ0FBQyxBQUFDLGtCQUF3QyxPQUF2QkQsd0JBQXVCO2dCQUV2RCxJQUFNRSxlQUFlLElBQUksQ0FBQ0MsVUFBVSxDQUFDbkI7Z0JBRXJDLElBQUlrQixjQUFjO29CQUNoQixJQUFNRSxtQkFBbUIsSUFBSSxDQUFDQyxjQUFjLENBQUNyQjtvQkFFN0NlLFdBQVdLO2dCQUNiO2dCQUVBLElBQUlMLFVBQVU7b0JBQ1pmLFFBQVFzQixLQUFLLENBQUMsQUFBQyxvQkFBMEMsT0FBdkJOLHdCQUF1QjtnQkFDM0Q7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXbkIsT0FBTztnQkFDaEIsSUFBSWtCO2dCQUVKLElBQU1LLGFBQWEsSUFBSSxDQUFDbkIsSUFBSSxDQUFDb0IsU0FBUztnQkFFdEN4QixRQUFRaUIsS0FBSyxDQUFDLEFBQUMsa0JBQTRCLE9BQVhNLFlBQVc7Z0JBRTNDTCxlQUFlLElBQUksQ0FBQ2QsSUFBSSxDQUFDVSxNQUFNLENBQUNkLFNBQVM7b0JBQ3ZDLElBQU15QixnQkFBZ0I7b0JBRXRCLE9BQU9BO2dCQUNUO2dCQUVBLElBQUlQLGNBQWM7b0JBQ2hCbEIsUUFBUXNCLEtBQUssQ0FBQyxBQUFDLG9CQUE4QixPQUFYQyxZQUFXO2dCQUMvQztnQkFFQSxPQUFPTDtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVyQixPQUFPO2dCQUNwQixJQUFJb0I7Z0JBRUosSUFBTU0saUJBQWlCLElBQUksQ0FBQ3ZCLFFBQVEsQ0FBQ3FCLFNBQVM7Z0JBRTlDeEIsUUFBUWlCLEtBQUssQ0FBQyxBQUFDLGtCQUFnQyxPQUFmUyxnQkFBZTtnQkFFL0MsSUFBTUMsV0FBVyxJQUFJLENBQUN2QixJQUFJLENBQUN3QixPQUFPLElBQzVCQyxlQUFlLElBQUksQ0FBQzFCLFFBQVEsQ0FBQzJCLE9BQU8sSUFDcENDLHFCQUFxQkosU0FBU0ssYUFBYSxJQUMzQ0MsdUJBQXVCRixtQkFBbUJHLElBQUksQ0FBQyxTQUFDQztvQkFDOUMsSUFBTUMsc0JBQXNCRCxpQkFBaUJFLGlCQUFpQixDQUFDUjtvQkFFL0QsSUFBSU8scUJBQXFCO3dCQUN2QixPQUFPO29CQUNUO2dCQUNGLE1BQU07Z0JBRVosSUFBSUgseUJBQXlCLE1BQU07b0JBQ2pDLElBQU1LLGlCQUFpQixJQUFJLENBQUNsQyxJQUFJLENBQUNvQixTQUFTLElBQ3BDZSxxQkFBcUJaLFNBQVNILFNBQVM7b0JBRTdDeEIsUUFBUXNCLEtBQUssQ0FBQyxBQUFDLFFBQTJEZ0IsT0FBcERULGNBQWEseUNBQXNFVSxPQUEvQkQsZ0JBQWUsa0JBQW1DLE9BQW5CQyxvQkFBbUI7Z0JBQzlILE9BQU87b0JBQ0xuQixtQkFBbUI7Z0JBQ3JCO2dCQUVBLElBQUlBLGtCQUFrQjtvQkFDcEJwQixRQUFRc0IsS0FBSyxDQUFDLEFBQUMsb0JBQWtDLE9BQWZJLGdCQUFlO2dCQUNuRDtnQkFFQSxPQUFPTjtZQUNUOzs7O3FCQWxHbURvQixnQkFBTyxJQW9HMUQsb0NBQU9DLFFBQU8ifQ==