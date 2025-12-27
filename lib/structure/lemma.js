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
var _topLevelAssertion = /*#__PURE__*/ _interop_require_default(require("./topLevelAssertion"));
var _structure = require("../structure");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
var _Lemma;
var _default = (0, _structure.define)((_Lemma = /*#__PURE__*/ function(TopLevelAssertion) {
    _inherits(Lemma, TopLevelAssertion);
    function Lemma() {
        _class_call_check(this, Lemma);
        return _call_super(this, Lemma, arguments);
    }
    _create_class(Lemma, [
        {
            key: "verify",
            value: function verify() {
                var verifies;
                var lemma = this, node = this.getNode(), context = this.getContext(), lemmaString = lemma.getString();
                lemmaString === null ? context.trace("Verifying a lemma...", node) : context.trace("Verifying the '".concat(lemmaString, "' lemma..."), node);
                verifies = _get(_get_prototype_of(Lemma.prototype), "verify", this).call(this);
                if (verifies) {
                    var lemma1 = this; ///
                    context.addLemma(lemma1);
                    lemmaString === null ? context.debug("...verified a lemma.", node) : context.debug("...verified the '".concat(lemmaString, "' lemma."), node);
                }
                return verifies;
            }
        }
    ], [
        {
            key: "fromLemmaNode",
            value: function fromLemmaNode(lemmaNode, context) {
                var node = lemmaNode, lemma = _topLevelAssertion.default.fromNode(Lemma, node, context);
                return lemma;
            }
        }
    ]);
    return Lemma;
}(_topLevelAssertion.default), _define_property(_Lemma, "name", "Lemma"), _Lemma));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJ1Y3R1cmUvbGVtbWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUb3BMZXZlbEFzc2VydGlvbiBmcm9tIFwiLi90b3BMZXZlbEFzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vc3RydWN0dXJlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBMZW1tYSBleHRlbmRzIFRvcExldmVsQXNzZXJ0aW9uIHtcbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcztcblxuICAgIGNvbnN0IGxlbW1hID0gdGhpcywgLy8vXG4gICAgICAgICAgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBsZW1tYVN0cmluZyA9IGxlbW1hLmdldFN0cmluZygpO1xuXG4gICAgKGxlbW1hU3RyaW5nID09PSBudWxsKSA/XG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgYSBsZW1tYS4uLmAsIG5vZGUpIDpcbiAgICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtsZW1tYVN0cmluZ30nIGxlbW1hLi4uYCwgbm9kZSk7XG5cbiAgICB2ZXJpZmllcyA9IHN1cGVyLnZlcmlmeSgpO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBsZW1tYSA9IHRoaXM7IC8vL1xuXG4gICAgICBjb250ZXh0LmFkZExlbW1hKGxlbW1hKTtcblxuICAgICAgKGxlbW1hU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIGEgbGVtbWEuYCwgbm9kZSkgOlxuICAgICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtsZW1tYVN0cmluZ30nIGxlbW1hLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJMZW1tYVwiO1xuXG4gIHN0YXRpYyBmcm9tTGVtbWFOb2RlKGxlbW1hTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBsZW1tYU5vZGUsIC8vL1xuICAgICAgICAgIGxlbW1hID0gVG9wTGV2ZWxBc3NlcnRpb24uZnJvbU5vZGUoTGVtbWEsIG5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGxlbW1hO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJMZW1tYSIsInZlcmlmeSIsInZlcmlmaWVzIiwibGVtbWEiLCJub2RlIiwiZ2V0Tm9kZSIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwibGVtbWFTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImFkZExlbW1hIiwiZGVidWciLCJmcm9tTGVtbWFOb2RlIiwibGVtbWFOb2RlIiwiVG9wTGV2ZWxBc3NlcnRpb24iLCJmcm9tTm9kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O3dFQUo4Qjt5QkFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdkIsV0FBZUEsSUFBQUEsaUJBQU0sMEJBQUM7O2FBQU1DO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOzs7O1lBQzFCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUM7Z0JBRUosSUFBTUMsUUFBUSxJQUFJLEVBQ1pDLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ25CQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkMsY0FBY0wsTUFBTU0sU0FBUztnQkFFbENELGdCQUFnQixPQUNmRixRQUFRSSxLQUFLLENBQUMsd0JBQXdCTixRQUNwQ0UsUUFBUUksS0FBSyxDQUFDLEFBQUMsa0JBQTZCLE9BQVpGLGFBQVksZUFBYUo7Z0JBRTdERixXQUFXLHVCQWJhRixrQkFhUEMsVUFBTixJQUFLO2dCQUVoQixJQUFJQyxVQUFVO29CQUNaLElBQU1DLFNBQVEsSUFBSSxFQUFFLEdBQUc7b0JBRXZCRyxRQUFRSyxRQUFRLENBQUNSO29CQUVoQkssZ0JBQWdCLE9BQ2ZGLFFBQVFNLEtBQUssQ0FBQyx3QkFBd0JSLFFBQ3BDRSxRQUFRTSxLQUFLLENBQUMsQUFBQyxvQkFBK0IsT0FBWkosYUFBWSxhQUFXSjtnQkFDL0Q7Z0JBRUEsT0FBT0Y7WUFDVDs7OztZQUlPVyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTLEVBQUVSLE9BQU87Z0JBQ3JDLElBQU1GLE9BQU9VLFdBQ1BYLFFBQVFZLDBCQUFpQixDQUFDQyxRQUFRLENBQUNoQixPQUFPSSxNQUFNRTtnQkFFdEQsT0FBT0g7WUFDVDs7OztFQW5Dd0NZLDBCQUFpQixHQTRCekQseUJBQU9FLFFBQU8ifQ==