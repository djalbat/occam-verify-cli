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
var _occamlanguages = require("occam-languages");
var _elements = require("../elements");
var _context = require("../utilities/context");
var _instantiate = require("../process/instantiate");
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
            key: "getLabelNode",
            value: function getLabelNode() {
                var node = this.getNode(), labelNode1 = node; ///
                return labelNode1;
            }
        },
        {
            key: "getMetavariableName",
            value: function getMetavariableName() {
                return this.metavariable.getName();
            }
        },
        {
            key: "getMetavariableNode",
            value: function getMetavariableNode() {
                return this.metavariable.getNode();
            }
        },
        {
            key: "compareMetavariable",
            value: function compareMetavariable(metavariable) {
                return this.metavariable.compare(metavariable);
            }
        },
        {
            key: "compareMetavariableName",
            value: function compareMetavariableName(metavariableName) {
                return this.metavariable.compareMetavariableName(metavariableName);
            }
        },
        {
            key: "compareReference",
            value: function compareReference(reference) {
                var metavariable = reference.getMetavariable(), metavariableComparesToMetavariable = this.compareMetavariable(metavariable), comparesToReference = metavariableComparesToMetavariable; ///
                return comparesToReference;
            }
        },
        {
            key: "verify",
            value: function verify(nameOnly) {
                var verifies = false;
                var context = this.getContext(), labelString = this.getString(); ///
                context.trace("Verifying the '".concat(labelString, "' label..."));
                var labelPresent;
                if (nameOnly) {
                    var metavariableName = this.getMetavariableName();
                    labelPresent = context.isLabelPresentByMetavariableName(metavariableName);
                } else {
                    var metavariable = this.getMetavariable();
                    labelPresent = context.isLabelPresentByMetavariable(metavariable);
                }
                if (labelPresent) {
                    context.debug("The '".concat(labelString, "' label is already present."));
                } else {
                    verifies = true;
                }
                if (verifies) {
                    context.debug("...verified the '".concat(labelString, "' label."));
                }
                return verifies;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var metavariableJSON = (0, _json.metavariableToMetavariableJSON)(this.metavariable), metavariable = metavariableJSON, string = this.getString(), json = {
                    string: string,
                    metavariable: metavariable
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                debugger;
                var string = json.string, node = nodeFromString(string, context), metavariableNode = labelNode.getMetavariableNode(), metavariable = context.findMetavariableByMetavariableNode(metavariableNode);
            }
        }
    ]);
    return Label;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Label, "name", "Label"), _Label));
function nodeFromString(string, context) {
    var node = (0, _context.literally)(function(context) {
        var labelNode1 = (0, _instantiate.instantiateLabel)(string, context), node = labelNode1; ///
        return node;
    }, context);
    return node;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2xhYmVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGxpdGVyYWxseSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVMYWJlbCB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVGcm9tSlNPTiwgbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBMYWJlbCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRMYWJlbE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGxhYmVsTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGxhYmVsTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCk7IH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuZ2V0Tm9kZSgpOyB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLmNvbXBhcmUobWV0YXZhcmlhYmxlKTsgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpOyB9XG5cbiAgY29tcGFyZVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZSA9IHRoaXMuY29tcGFyZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICAgIGNvbXBhcmVzVG9SZWZlcmVuY2UgPSBtZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlOyAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvUmVmZXJlbmNlO1xuICB9XG5cbiAgdmVyaWZ5KG5hbWVPbmx5KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGFiZWxTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbC4uLmApO1xuXG4gICAgbGV0IGxhYmVsUHJlc2VudDtcblxuICAgIGlmIChuYW1lT25seSkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICBsYWJlbFByZXNlbnQgPSBjb250ZXh0LmlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZSgpO1xuXG4gICAgICBsYWJlbFByZXNlbnQgPSBjb250ZXh0LmlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcbiAgICB9XG5cbiAgICBpZiAobGFiZWxQcmVzZW50KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OKHRoaXMubWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkxhYmVsXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBkZWJ1Z2dlclxuXG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgbm9kZSA9IG5vZGVGcm9tU3RyaW5nKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGxhYmVsTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG5cbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG5vZGVGcm9tU3RyaW5nKHN0cmluZywgY29udGV4dCkge1xuICBjb25zdCBub2RlID0gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgY29uc3QgbGFiZWxOb2RlID0gaW5zdGFudGlhdGVMYWJlbChzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgICAgbm9kZSA9IGxhYmVsTm9kZTsgLy8vXG5cbiAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIG5vZGU7XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTGFiZWwiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsIm1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsImdldExhYmVsTm9kZSIsImdldE5vZGUiLCJsYWJlbE5vZGUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJjb21wYXJlTWV0YXZhcmlhYmxlIiwiY29tcGFyZSIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImNvbXBhcmVSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlIiwiY29tcGFyZXNUb1JlZmVyZW5jZSIsInZlcmlmeSIsIm5hbWVPbmx5IiwidmVyaWZpZXMiLCJnZXRDb250ZXh0IiwibGFiZWxTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImxhYmVsUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwiaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZSIsImRlYnVnIiwidG9KU09OIiwibWV0YXZhcmlhYmxlSlNPTiIsIm1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIm5vZGVGcm9tU3RyaW5nIiwibWV0YXZhcmlhYmxlTm9kZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJFbGVtZW50IiwibmFtZSIsImxpdGVyYWxseSIsImluc3RhbnRpYXRlTGFiZWwiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7OzhCQVB3Qjt3QkFFRDt1QkFDRzsyQkFDTztvQkFDb0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXJFLFdBQWVBLElBQUFBLGdCQUFNLDBCQUFDOzthQUFNQyxNQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxZQUFZO2dDQURyQko7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsWUFBWSxHQUFHQTs7Ozs7WUFHdEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsWUFBWTtZQUMxQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSCxPQUFPLElBQUksQ0FBQ0ksT0FBTyxJQUNuQkMsYUFBWUwsTUFBTSxHQUFHO2dCQUUzQixPQUFPSztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUF3QixPQUFPLElBQUksQ0FBQ0wsWUFBWSxDQUFDTSxPQUFPO1lBQUk7OztZQUU1REMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUF3QixPQUFPLElBQUksQ0FBQ1AsWUFBWSxDQUFDRyxPQUFPO1lBQUk7OztZQUU1REssS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQlIsWUFBWTtnQkFBSSxPQUFPLElBQUksQ0FBQ0EsWUFBWSxDQUFDUyxPQUFPLENBQUNUO1lBQWU7OztZQUVwRlUsS0FBQUE7bUJBQUFBLFNBQUFBLHdCQUF3QkMsZ0JBQWdCO2dCQUFJLE9BQU8sSUFBSSxDQUFDWCxZQUFZLENBQUNVLHVCQUF1QixDQUFDQztZQUFtQjs7O1lBRWhIQyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxTQUFTO2dCQUN4QixJQUFNYixlQUFlYSxVQUFVWixlQUFlLElBQ3hDYSxxQ0FBcUMsSUFBSSxDQUFDTixtQkFBbUIsQ0FBQ1IsZUFDOURlLHNCQUFzQkQsb0NBQW9DLEdBQUc7Z0JBRW5FLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsUUFBUTtnQkFDYixJQUFJQyxXQUFXO2dCQUVmLElBQU1yQixVQUFVLElBQUksQ0FBQ3NCLFVBQVUsSUFDekJDLGNBQWMsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztnQkFFekN4QixRQUFReUIsS0FBSyxDQUFDLEFBQUMsa0JBQTZCLE9BQVpGLGFBQVk7Z0JBRTVDLElBQUlHO2dCQUVKLElBQUlOLFVBQVU7b0JBQ1osSUFBTU4sbUJBQW1CLElBQUksQ0FBQ04sbUJBQW1CO29CQUVqRGtCLGVBQWUxQixRQUFRMkIsZ0NBQWdDLENBQUNiO2dCQUMxRCxPQUFPO29CQUNMLElBQU1YLGVBQWUsSUFBSSxDQUFDQyxlQUFlO29CQUV6Q3NCLGVBQWUxQixRQUFRNEIsNEJBQTRCLENBQUN6QjtnQkFDdEQ7Z0JBRUEsSUFBSXVCLGNBQWM7b0JBQ2hCMUIsUUFBUTZCLEtBQUssQ0FBQyxBQUFDLFFBQW1CLE9BQVpOLGFBQVk7Z0JBQ3BDLE9BQU87b0JBQ0xGLFdBQVc7Z0JBQ2I7Z0JBRUEsSUFBSUEsVUFBVTtvQkFDWnJCLFFBQVE2QixLQUFLLENBQUMsQUFBQyxvQkFBK0IsT0FBWk4sYUFBWTtnQkFDaEQ7Z0JBRUEsT0FBT0Y7WUFDVDs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxtQkFBbUJDLElBQUFBLG9DQUE4QixFQUFDLElBQUksQ0FBQzdCLFlBQVksR0FDbkVBLGVBQWU0QixrQkFDZjlCLFNBQVMsSUFBSSxDQUFDdUIsU0FBUyxJQUN2QlMsT0FBTztvQkFDTGhDLFFBQUFBO29CQUNBRSxjQUFBQTtnQkFDRjtnQkFFTixPQUFPOEI7WUFDVDs7OztZQUlPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUVqQyxPQUFPO2dCQUMzQixRQUFRO2dCQUVSLElBQU0sQUFBRUMsU0FBV2dDLEtBQVhoQyxRQUNGQyxPQUFPaUMsZUFBZWxDLFFBQVFELFVBQzlCb0MsbUJBQW1CN0IsVUFBVUcsbUJBQW1CLElBQ2hEUCxlQUFlSCxRQUFRcUMsa0NBQWtDLENBQUNEO1lBR2xFOzs7O3FCQTFGd0NFLHVCQUFPLElBK0UvQyx5QkFBT0MsUUFBTztBQWNoQixTQUFTSixlQUFlbEMsTUFBTSxFQUFFRCxPQUFPO0lBQ3JDLElBQU1FLE9BQU9zQyxJQUFBQSxrQkFBUyxFQUFDLFNBQUN4QztRQUNoQixJQUFNTyxhQUFZa0MsSUFBQUEsNkJBQWdCLEVBQUN4QyxRQUFRRCxVQUNuQ0UsT0FBT0ssWUFBVyxHQUFHO1FBRTdCLE9BQU9MO0lBQ1QsR0FBR0Y7SUFFVCxPQUFPRTtBQUNUIn0=