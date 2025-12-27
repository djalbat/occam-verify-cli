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
var _topLevelMetaAssertion = /*#__PURE__*/ _interop_require_default(require("./topLevelMetaAssertion"));
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
var _MetaLemma;
var _default = (0, _structure.define)((_MetaLemma = /*#__PURE__*/ function(TopLevelMetaAssertion) {
    _inherits(MetaLemma, TopLevelMetaAssertion);
    function MetaLemma() {
        _class_call_check(this, MetaLemma);
        return _call_super(this, MetaLemma, arguments);
    }
    _create_class(MetaLemma, [
        {
            key: "verify",
            value: function verify() {
                var verifies;
                var node = this.getNode(), context = this.getContext(), metaLemma = this, metaLemmaString = metaLemma.getString();
                context.trace("Verifying the '".concat(metaLemmaString, "' meta-lemma..."), node);
                verifies = _get(_get_prototype_of(MetaLemma.prototype), "verify", this).call(this);
                if (verifies) {
                    var metaTheorem = this; ///
                    context.addMetatheorem(metaTheorem);
                    context.debug("...verified the '".concat(metaLemmaString, "' meta-lemma."), node);
                }
                return verifies;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                return _topLevelMetaAssertion.default.fromJSON(MetaLemma, json, context);
            }
        },
        {
            key: "fromMetaLemmaNode",
            value: function fromMetaLemmaNode(metaLemmaNode, context) {
                var node = metaLemmaNode, metaLemma = _topLevelMetaAssertion.default.fromNode(MetaLemma, node, context);
                return metaLemma;
            }
        }
    ]);
    return MetaLemma;
}(_topLevelMetaAssertion.default), _define_property(_MetaLemma, "name", "MetaLemma"), _MetaLemma));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJ1Y3R1cmUvbWV0YUxlbW1hLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIGZyb20gXCIuL3RvcExldmVsTWV0YUFzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vc3RydWN0dXJlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBNZXRhTGVtbWEgZXh0ZW5kcyBUb3BMZXZlbE1ldGFBc3NlcnRpb24ge1xuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhTGVtbWEgPSB0aGlzLCAvLy9cbiAgICAgICAgICBtZXRhTGVtbWFTdHJpbmcgPSBtZXRhTGVtbWEuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGFMZW1tYVN0cmluZ30nIG1ldGEtbGVtbWEuLi5gLCBub2RlKTtcblxuICAgIHZlcmlmaWVzID0gc3VwZXIudmVyaWZ5KCk7XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IG1ldGFUaGVvcmVtID0gdGhpczsgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkTWV0YXRoZW9yZW0obWV0YVRoZW9yZW0pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YUxlbW1hU3RyaW5nfScgbWV0YS1sZW1tYS5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTWV0YUxlbW1hXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHsgcmV0dXJuIFRvcExldmVsTWV0YUFzc2VydGlvbi5mcm9tSlNPTihNZXRhTGVtbWEsIGpzb24sIGNvbnRleHQpOyB9XG5cbiAgc3RhdGljIGZyb21NZXRhTGVtbWFOb2RlKG1ldGFMZW1tYU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gbWV0YUxlbW1hTm9kZSwgLy8vXG4gICAgICAgICAgbWV0YUxlbW1hID0gVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmZyb21Ob2RlKE1ldGFMZW1tYSwgbm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJNZXRhTGVtbWEiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsIm5vZGUiLCJnZXROb2RlIiwiY29udGV4dCIsImdldENvbnRleHQiLCJtZXRhTGVtbWEiLCJtZXRhTGVtbWFTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsIm1ldGFUaGVvcmVtIiwiYWRkTWV0YXRoZW9yZW0iLCJkZWJ1ZyIsImZyb21KU09OIiwianNvbiIsIlRvcExldmVsTWV0YUFzc2VydGlvbiIsImZyb21NZXRhTGVtbWFOb2RlIiwibWV0YUxlbW1hTm9kZSIsImZyb21Ob2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7NEVBSmtDO3lCQUVYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV2QixXQUFlQSxJQUFBQSxpQkFBTSw4QkFBQzs7YUFBTUM7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7Ozs7WUFDMUJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQztnQkFFSixJQUFNQyxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUNuQkMsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJDLFlBQVksSUFBSSxFQUNoQkMsa0JBQWtCRCxVQUFVRSxTQUFTO2dCQUUzQ0osUUFBUUssS0FBSyxDQUFDLEFBQUMsa0JBQWlDLE9BQWhCRixpQkFBZ0Isb0JBQWtCTDtnQkFFbEVELFdBQVcsdUJBWGFGLHNCQVdQQyxVQUFOLElBQUs7Z0JBRWhCLElBQUlDLFVBQVU7b0JBQ1osSUFBTVMsY0FBYyxJQUFJLEVBQUUsR0FBRztvQkFFN0JOLFFBQVFPLGNBQWMsQ0FBQ0Q7b0JBRXZCTixRQUFRUSxLQUFLLENBQUMsQUFBQyxvQkFBbUMsT0FBaEJMLGlCQUFnQixrQkFBZ0JMO2dCQUNwRTtnQkFFQSxPQUFPRDtZQUNUOzs7O1lBSU9ZLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNDLElBQUksRUFBRVYsT0FBTztnQkFBSSxPQUFPVyw4QkFBcUIsQ0FBQ0YsUUFBUSxDQUFDZCxXQUFXZSxNQUFNVjtZQUFVOzs7WUFFM0ZZLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsYUFBYSxFQUFFYixPQUFPO2dCQUM3QyxJQUFNRixPQUFPZSxlQUNQWCxZQUFZUyw4QkFBcUIsQ0FBQ0csUUFBUSxDQUFDbkIsV0FBV0csTUFBTUU7Z0JBRWxFLE9BQU9FO1lBQ1Q7Ozs7RUFqQzRDUyw4QkFBcUIsR0F3QmpFLDZCQUFPSSxRQUFPIn0=