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
var _Section;
var define = _occamfurtle.elements.define;
var _default = define((_Section = /*#__PURE__*/ function(Element) {
    _inherits(Section, Element);
    function Section(context, string, node, hypotheses, axiom, lemma, theorem, conjecture) {
        _class_call_check(this, Section);
        var _this;
        _this = _call_super(this, Section, [
            context,
            string,
            node
        ]);
        _this.hypotheses = hypotheses;
        _this.axiom = axiom;
        _this.lemma = lemma;
        _this.theorem = theorem;
        _this.conjecture = conjecture;
        return _this;
    }
    _create_class(Section, [
        {
            key: "getHypotheses",
            value: function getHypotheses() {
                return this.hypotheses;
            }
        },
        {
            key: "getAxiom",
            value: function getAxiom() {
                return this.axiom;
            }
        },
        {
            key: "getLemma",
            value: function getLemma() {
                return this.lemma;
            }
        },
        {
            key: "getTheorem",
            value: function getTheorem() {
                return this.theorem;
            }
        },
        {
            key: "getConjecture",
            value: function getConjecture() {
                return this.conjecture;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verifies = false;
                var sectionString = this.getString(); ///
                this.context.trace("Verifying the '".concat(sectionString, "' section..."), this.node);
                var hypothesesVerify = this.verifyHypotheses();
                if (hypothesesVerify) {
                    var topLevelAssertion = this.axiom || this.lemma || this.theorem || this.conjecture, topLevelAssertionVerifies = topLevelAssertion.verify(this.context);
                    if (topLevelAssertionVerifies) {
                        topLevelAssertion.setHypotheses(this.hypotheses);
                        verifies = true;
                    }
                }
                if (verifies) {
                    this.context.debug("...verified the '".concat(sectionString, "' section."), this.node);
                }
                return verifies;
            }
        },
        {
            key: "verifyHypotheses",
            value: function verifyHypotheses() {
                var _this = this;
                var hypothesesVerify = this.hypotheses.every(function(hypothesis) {
                    var hypothesisVerifies = hypothesis.verify(_this.context);
                    if (hypothesisVerifies) {
                        return true;
                    }
                });
                return hypothesesVerify;
            }
        }
    ]);
    return Section;
}(_wrap_native_super(_occamfurtle.Element)), _define_property(_Section, "name", "Section"), _Section));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NlY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQsIGVsZW1lbnRzIH0gZnJvbSBcIm9jY2FtLWZ1cnRsZVwiO1xuXG5jb25zdCB7IGRlZmluZSB9ID0gZWxlbWVudHM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTZWN0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgaHlwb3RoZXNlcywgYXhpb20sIGxlbW1hLCB0aGVvcmVtLCBjb25qZWN0dXJlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuaHlwb3RoZXNlcyA9IGh5cG90aGVzZXM7XG4gICAgdGhpcy5heGlvbSA9IGF4aW9tO1xuICAgIHRoaXMubGVtbWEgPSBsZW1tYTtcbiAgICB0aGlzLnRoZW9yZW0gPSB0aGVvcmVtO1xuICAgIHRoaXMuY29uamVjdHVyZSA9IGNvbmplY3R1cmU7XG4gIH1cblxuICBnZXRIeXBvdGhlc2VzKCkge1xuICAgIHJldHVybiB0aGlzLmh5cG90aGVzZXM7XG4gIH1cblxuICBnZXRBeGlvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5heGlvbTtcbiAgfVxuXG4gIGdldExlbW1hKCkge1xuICAgIHJldHVybiB0aGlzLmxlbW1hO1xuICB9XG5cbiAgZ2V0VGhlb3JlbSgpIHtcbiAgICByZXR1cm4gdGhpcy50aGVvcmVtO1xuICB9XG5cbiAgZ2V0Q29uamVjdHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb25qZWN0dXJlO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2VjdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzZWN0aW9uU3RyaW5nfScgc2VjdGlvbi4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCBoeXBvdGhlc2VzVmVyaWZ5ID0gdGhpcy52ZXJpZnlIeXBvdGhlc2VzKCk7XG5cbiAgICBpZiAoaHlwb3RoZXNlc1ZlcmlmeSkge1xuICAgICAgY29uc3QgdG9wTGV2ZWxBc3NlcnRpb24gPSAodGhpcy5heGlvbSB8fCB0aGlzLmxlbW1hIHx8IHRoaXMudGhlb3JlbSB8fCB0aGlzLmNvbmplY3R1cmUpLFxuICAgICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25WZXJpZmllcyA9IHRvcExldmVsQXNzZXJ0aW9uLnZlcmlmeSh0aGlzLmNvbnRleHQpO1xuXG4gICAgICBpZiAodG9wTGV2ZWxBc3NlcnRpb25WZXJpZmllcykge1xuICAgICAgICB0b3BMZXZlbEFzc2VydGlvbi5zZXRIeXBvdGhlc2VzKHRoaXMuaHlwb3RoZXNlcyk7XG5cbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2VjdGlvblN0cmluZ30nIHNlY3Rpb24uYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlIeXBvdGhlc2VzKCkge1xuICAgIGNvbnN0IGh5cG90aGVzZXNWZXJpZnkgPSB0aGlzLmh5cG90aGVzZXMuZXZlcnkoKGh5cG90aGVzaXMpID0+IHtcbiAgICAgIGNvbnN0IGh5cG90aGVzaXNWZXJpZmllcyA9IGh5cG90aGVzaXMudmVyaWZ5KHRoaXMuY29udGV4dCk7XG5cbiAgICAgIGlmIChoeXBvdGhlc2lzVmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXNlc1ZlcmlmeTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTZWN0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJlbGVtZW50cyIsIlNlY3Rpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImh5cG90aGVzZXMiLCJheGlvbSIsImxlbW1hIiwidGhlb3JlbSIsImNvbmplY3R1cmUiLCJnZXRIeXBvdGhlc2VzIiwiZ2V0QXhpb20iLCJnZXRMZW1tYSIsImdldFRoZW9yZW0iLCJnZXRDb25qZWN0dXJlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJzZWN0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJoeXBvdGhlc2VzVmVyaWZ5IiwidmVyaWZ5SHlwb3RoZXNlcyIsInRvcExldmVsQXNzZXJ0aW9uIiwidG9wTGV2ZWxBc3NlcnRpb25WZXJpZmllcyIsInNldEh5cG90aGVzZXMiLCJkZWJ1ZyIsImV2ZXJ5IiwiaHlwb3RoZXNpcyIsImh5cG90aGVzaXNWZXJpZmllcyIsIkVsZW1lbnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OzsyQkFKa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLElBQU0sQUFBRUEsU0FBV0MscUJBQVEsQ0FBbkJEO0lBRVIsV0FBZUEsaUNBQU87O2FBQU1FLFFBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQ0FEdERSOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLFVBQVUsR0FBR0E7UUFDbEIsTUFBS0MsS0FBSyxHQUFHQTtRQUNiLE1BQUtDLEtBQUssR0FBR0E7UUFDYixNQUFLQyxPQUFPLEdBQUdBO1FBQ2YsTUFBS0MsVUFBVSxHQUFHQTs7Ozs7WUFHcEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsVUFBVTtZQUN4Qjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsS0FBSztZQUNuQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsS0FBSztZQUNuQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsT0FBTztZQUNyQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsVUFBVTtZQUN4Qjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxXQUFXO2dCQUVmLElBQU1DLGdCQUFnQixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO2dCQUU1QyxJQUFJLENBQUNoQixPQUFPLENBQUNpQixLQUFLLENBQUMsQUFBQyxrQkFBK0IsT0FBZEYsZUFBYyxpQkFBZSxJQUFJLENBQUNiLElBQUk7Z0JBRTNFLElBQU1nQixtQkFBbUIsSUFBSSxDQUFDQyxnQkFBZ0I7Z0JBRTlDLElBQUlELGtCQUFrQjtvQkFDcEIsSUFBTUUsb0JBQXFCLElBQUksQ0FBQ2hCLEtBQUssSUFBSSxJQUFJLENBQUNDLEtBQUssSUFBSSxJQUFJLENBQUNDLE9BQU8sSUFBSSxJQUFJLENBQUNDLFVBQVUsRUFDaEZjLDRCQUE0QkQsa0JBQWtCUCxNQUFNLENBQUMsSUFBSSxDQUFDYixPQUFPO29CQUV2RSxJQUFJcUIsMkJBQTJCO3dCQUM3QkQsa0JBQWtCRSxhQUFhLENBQUMsSUFBSSxDQUFDbkIsVUFBVTt3QkFFL0NXLFdBQVc7b0JBQ2I7Z0JBQ0Y7Z0JBRUEsSUFBSUEsVUFBVTtvQkFDWixJQUFJLENBQUNkLE9BQU8sQ0FBQ3VCLEtBQUssQ0FBQyxBQUFDLG9CQUFpQyxPQUFkUixlQUFjLGVBQWEsSUFBSSxDQUFDYixJQUFJO2dCQUM3RTtnQkFFQSxPQUFPWTtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBOztnQkFDRSxJQUFNRCxtQkFBbUIsSUFBSSxDQUFDZixVQUFVLENBQUNxQixLQUFLLENBQUMsU0FBQ0M7b0JBQzlDLElBQU1DLHFCQUFxQkQsV0FBV1osTUFBTSxDQUFDLE1BQUtiLE9BQU87b0JBRXpELElBQUkwQixvQkFBb0I7d0JBQ3RCLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBT1I7WUFDVDs7OztxQkFwRTBDUyxvQkFBTyxJQXNFakQsMkJBQU9DLFFBQU8ifQ==