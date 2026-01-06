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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb3BlcnR5UmVsYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJvcGVydHlSZWxhdGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHByb3BlcnR5LCB0ZXJtKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICB9XG5cbiAgZ2V0UHJvcGVydHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydHk7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlSZWxhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVRlcm0oY29udGV4dCk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eVZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9wZXJ0eShjb250ZXh0KTtcblxuICAgICAgdmVyaWZpZXMgPSBwcm9wZXJ0eVZlcmlmaWVzO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlUZXJtKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZlcmlmaWVzO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgIHRlcm1WZXJpZmllcyA9IHRoaXMudGVybS52ZXJpZnkoY29udGV4dCwgKCkgPT4ge1xuICAgICAgY29uc3QgdmVyaWZpZXNBaGVhZCA9IHRydWU7XG5cbiAgICAgIHJldHVybiB2ZXJpZmllc0FoZWFkO1xuICAgIH0pO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0eShjb250ZXh0KSB7XG4gICAgbGV0IHByb3BlcnR5VmVyaWZpZXM7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVN0cmluZyA9IHRoaXMucHJvcGVydHkuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1UeXBlID0gdGhpcy50ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSB0aGlzLnByb3BlcnR5LmdldE5hbWUoKSxcbiAgICAgICAgICB0ZXJtVHlwZVByb3BlcnRpZXMgPSB0ZXJtVHlwZS5nZXRQcm9wZXJ0aWVzKCksXG4gICAgICAgICAgdmFyaWFibGVUeXBlUHJvcGVydHkgPSB0ZXJtVHlwZVByb3BlcnRpZXMuZmluZCgodGVybVR5cGVQcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lTWF0Y2hlcyA9IHRlcm1UeXBlUHJvcGVydHkubWF0Y2hQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHByb3BlcnR5TmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmICh2YXJpYWJsZVR5cGVQcm9wZXJ0eSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICB2YXJpYWJsZVR5cGVTdHJpbmcgPSB0ZXJtVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3Byb3BlcnR5TmFtZX0nIHByb3BlcnR5IGlzIG5vdCBhIHByb3BlcnR5IG9mIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlJ3MgJyR7dmFyaWFibGVUeXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcGVydHlWZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnR5VmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb3BlcnR5UmVsYXRpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlByb3BlcnR5UmVsYXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInByb3BlcnR5IiwidGVybSIsImdldFByb3BlcnR5IiwiZ2V0VGVybSIsInZlcmlmeSIsInZlcmlmaWVzIiwicHJvcGVydHlSZWxhdGlvblN0cmluZyIsInRyYWNlIiwidGVybVZlcmlmaWVzIiwidmVyaWZ5VGVybSIsInByb3BlcnR5VmVyaWZpZXMiLCJ2ZXJpZnlQcm9wZXJ0eSIsImRlYnVnIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInZlcmlmaWVzQWhlYWQiLCJwcm9wZXJ0eVN0cmluZyIsInRlcm1UeXBlIiwiZ2V0VHlwZSIsInByb3BlcnR5TmFtZSIsImdldE5hbWUiLCJ0ZXJtVHlwZVByb3BlcnRpZXMiLCJnZXRQcm9wZXJ0aWVzIiwidmFyaWFibGVUeXBlUHJvcGVydHkiLCJmaW5kIiwidGVybVR5cGVQcm9wZXJ0eSIsInByb3BlcnR5TmFtZU1hdGNoZXMiLCJtYXRjaFByb3BlcnR5TmFtZSIsInZhcmlhYmxlU3RyaW5nIiwidmFyaWFibGVUeXBlU3RyaW5nIiwiRWxlbWVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7OzhEQUpvQjt3QkFFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV2QixXQUFlQSxJQUFBQSxnQkFBTSxxQ0FBQzs7YUFBTUMsaUJBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRUMsSUFBSTtnQ0FEdkJMOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLFFBQVEsR0FBR0E7UUFDaEIsTUFBS0MsSUFBSSxHQUFHQTs7Ozs7WUFHZEMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixRQUFRO1lBQ3RCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9QLE9BQU87Z0JBQ1osSUFBSVEsV0FBVztnQkFFZixJQUFNQyx5QkFBeUIsSUFBSSxDQUFDUixNQUFNLEVBQUUsR0FBRztnQkFFL0NELFFBQVFVLEtBQUssQ0FBQyxBQUFDLGtCQUF3QyxPQUF2QkQsd0JBQXVCO2dCQUV2RCxJQUFNRSxlQUFlLElBQUksQ0FBQ0MsVUFBVSxDQUFDWjtnQkFFckMsSUFBSVcsY0FBYztvQkFDaEIsSUFBTUUsbUJBQW1CLElBQUksQ0FBQ0MsY0FBYyxDQUFDZDtvQkFFN0NRLFdBQVdLO2dCQUNiO2dCQUVBLElBQUlMLFVBQVU7b0JBQ1pSLFFBQVFlLEtBQUssQ0FBQyxBQUFDLG9CQUEwQyxPQUF2Qk4sd0JBQXVCO2dCQUMzRDtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdaLE9BQU87Z0JBQ2hCLElBQUlXO2dCQUVKLElBQU1LLGFBQWEsSUFBSSxDQUFDWixJQUFJLENBQUNhLFNBQVM7Z0JBRXRDakIsUUFBUVUsS0FBSyxDQUFDLEFBQUMsa0JBQTRCLE9BQVhNLFlBQVc7Z0JBRTNDTCxlQUFlLElBQUksQ0FBQ1AsSUFBSSxDQUFDRyxNQUFNLENBQUNQLFNBQVM7b0JBQ3ZDLElBQU1rQixnQkFBZ0I7b0JBRXRCLE9BQU9BO2dCQUNUO2dCQUVBLElBQUlQLGNBQWM7b0JBQ2hCWCxRQUFRZSxLQUFLLENBQUMsQUFBQyxvQkFBOEIsT0FBWEMsWUFBVztnQkFDL0M7Z0JBRUEsT0FBT0w7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlZCxPQUFPO2dCQUNwQixJQUFJYTtnQkFFSixJQUFNTSxpQkFBaUIsSUFBSSxDQUFDaEIsUUFBUSxDQUFDYyxTQUFTO2dCQUU5Q2pCLFFBQVFVLEtBQUssQ0FBQyxBQUFDLGtCQUFnQyxPQUFmUyxnQkFBZTtnQkFFL0MsSUFBTUMsV0FBVyxJQUFJLENBQUNoQixJQUFJLENBQUNpQixPQUFPLElBQzVCQyxlQUFlLElBQUksQ0FBQ25CLFFBQVEsQ0FBQ29CLE9BQU8sSUFDcENDLHFCQUFxQkosU0FBU0ssYUFBYSxJQUMzQ0MsdUJBQXVCRixtQkFBbUJHLElBQUksQ0FBQyxTQUFDQztvQkFDOUMsSUFBTUMsc0JBQXNCRCxpQkFBaUJFLGlCQUFpQixDQUFDUjtvQkFFL0QsSUFBSU8scUJBQXFCO3dCQUN2QixPQUFPO29CQUNUO2dCQUNGLE1BQU07Z0JBRVosSUFBSUgseUJBQXlCLE1BQU07b0JBQ2pDLElBQU1LLGlCQUFpQixJQUFJLENBQUMzQixJQUFJLENBQUNhLFNBQVMsSUFDcENlLHFCQUFxQlosU0FBU0gsU0FBUztvQkFFN0NqQixRQUFRZSxLQUFLLENBQUMsQUFBQyxRQUEyRGdCLE9BQXBEVCxjQUFhLHlDQUFzRVUsT0FBL0JELGdCQUFlLGtCQUFtQyxPQUFuQkMsb0JBQW1CO2dCQUM5SCxPQUFPO29CQUNMbkIsbUJBQW1CO2dCQUNyQjtnQkFFQSxJQUFJQSxrQkFBa0I7b0JBQ3BCYixRQUFRZSxLQUFLLENBQUMsQUFBQyxvQkFBa0MsT0FBZkksZ0JBQWU7Z0JBQ25EO2dCQUVBLE9BQU9OO1lBQ1Q7Ozs7cUJBMUZtRG9CLGdCQUFPLElBNEYxRCxvQ0FBT0MsUUFBTyJ9