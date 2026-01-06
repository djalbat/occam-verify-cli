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
var _json = require("../utilities/json");
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
var _Label;
var _default = (0, _elements.define)((_Label = /*#__PURE__*/ function(Element) {
    _inherits(Label, Element);
    function Label(context, string, node, metavariable) {
        _class_call_check(this, Label);
        var _this;
        _this = _call_super(this, Label, [
            context,
            string,
            node
        ]);
        _this.metavariable = metavariable;
        return _this;
    }
    _create_class(Label, [
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                return this.metavariable;
            }
        },
        {
            key: "getMetavariableName",
            value: function getMetavariableName() {
                var metavariableName = this.metavariable.getName();
                return metavariableName;
            }
        },
        {
            key: "getMetavariableNode",
            value: function getMetavariableNode() {
                var metavariableNode = this.metavariable.getNode();
                return metavariableNode;
            }
        },
        {
            key: "matchReference",
            value: function matchReference(reference) {
                var metavariable = reference.getMetavariable(), metavariableEqualToMetavariable = this.isMetavariableEqualToMetavariable(metavariable), referenceMatches = metavariableEqualToMetavariable; ///
                return referenceMatches;
            }
        },
        {
            key: "isMetavariableEqualToMetavariable",
            value: function isMetavariableEqualToMetavariable(metavariable) {
                return this.metavariable.isEqualTo(metavariable);
            }
        },
        {
            key: "matchMetavariableName",
            value: function matchMetavariableName(metavariableName) {
                return this.metavariable.matchMetavariableName(metavariableName);
            }
        },
        {
            key: "verify",
            value: function verify(nameOnly) {
                var verifies = false;
                var labelString = this.getString(); ///
                this.context.trace("Verifying the '".concat(labelString, "' label..."));
                var labelPresent;
                if (nameOnly) {
                    var metavariableName = this.getMetavariableName();
                    labelPresent = this.context.isLabelPresentByMetavariableName(metavariableName);
                } else {
                    var metavariable = this.getMetavariable();
                    labelPresent = this.context.isLabelPresentByMetavariable(metavariable);
                }
                if (labelPresent) {
                    this.context.debug("The '".concat(labelString, "' label is already present."));
                } else {
                    verifies = true;
                }
                if (verifies) {
                    this.context.debug("...verified the '".concat(labelString, "' label."));
                }
                return verifies;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var metavariableJSON = (0, _json.metavariableToMetavariableJSON)(this.metavariable), metavariable = metavariableJSON, json = {
                    metavariable: metavariable
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var metavariable = (0, _json.metavariableFromJSON)(json, context), string = metavariable.getString(), node = metavariable.getNode(), label = new Label(context, string, node, metavariable);
                return label;
            }
        }
    ]);
    return Label;
}(_wrap_native_super(_element.default)), _define_property(_Label, "name", "Label"), _Label));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2xhYmVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZUZyb21KU09OLCBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIExhYmVsIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5hbWUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0Tm9kZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBtYXRjaFJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSA9IHRoaXMuaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgcmVmZXJlbmNlTWF0Y2hlcyA9IG1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZU1hdGNoZXM7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5pc0VxdWFsVG8obWV0YXZhcmlhYmxlKTsgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICB2ZXJpZnkobmFtZU9ubHkpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxhYmVsU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbC4uLmApO1xuXG4gICAgbGV0IGxhYmVsUHJlc2VudDtcblxuICAgIGlmIChuYW1lT25seSkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICBsYWJlbFByZXNlbnQgPSB0aGlzLmNvbnRleHQuaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlKCk7XG5cbiAgICAgIGxhYmVsUHJlc2VudCA9IHRoaXMuY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG4gICAgfVxuXG4gICAgaWYgKGxhYmVsUHJlc2VudCkge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGBUaGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04odGhpcy5tZXRhdmFyaWFibGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkxhYmVsXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgbGFiZWwgPSBuZXcgTGFiZWwoY29udGV4dCwgc3RyaW5nLCBub2RlLCBtZXRhdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJMYWJlbCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXROYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXROb2RlIiwibWF0Y2hSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwiaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlTWF0Y2hlcyIsImlzRXF1YWxUbyIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZSIsInZlcmlmeSIsIm5hbWVPbmx5IiwidmVyaWZpZXMiLCJsYWJlbFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwibGFiZWxQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlIiwiZGVidWciLCJ0b0pTT04iLCJtZXRhdmFyaWFibGVKU09OIiwibWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIiwianNvbiIsImZyb21KU09OIiwibWV0YXZhcmlhYmxlRnJvbUpTT04iLCJsYWJlbCIsIkVsZW1lbnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7Ozs4REFMb0I7d0JBRUc7b0JBQzhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXJFLFdBQWVBLElBQUFBLGdCQUFNLDBCQUFDOzthQUFNQyxNQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxZQUFZO2dDQURyQko7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsWUFBWSxHQUFHQTs7Ozs7WUFH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