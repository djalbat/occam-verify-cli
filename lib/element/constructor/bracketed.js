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
var _constructor = /*#__PURE__*/ _interop_require_default(require("../constructor"));
var _elements = require("../../elements");
var _element = require("../../utilities/element");
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
var _BracketedConstructor;
var _default = (0, _elements.define)((_BracketedConstructor = /*#__PURE__*/ function(Constructor) {
    _inherits(BracketedConstructor, Constructor);
    function BracketedConstructor() {
        _class_call_check(this, BracketedConstructor);
        return _call_super(this, BracketedConstructor, arguments);
    }
    _create_class(BracketedConstructor, [
        {
            key: "getBracketedConstructorNode",
            value: function getBracketedConstructorNode() {
                var node = this.getNode(), bracketedConstructorNode = node; ///
                return bracketedConstructorNode;
            }
        },
        {
            key: "unifyTerm",
            value: function unifyTerm(term, context, validateForwards) {
                var termUnifies;
                var termString = term.getString();
                context.trace("Unifying the '".concat(termString, "' term with the bracketed constructor..."));
                termUnifies = _get(_get_prototype_of(BracketedConstructor.prototype), "unifyTerm", this).call(this, term, context, function() {
                    var validatesForwards = false;
                    var bracketedTerm = term, bracketedTermNode = bracketedTerm.getNode(), singularTermNode = bracketedTermNode.getSingularTermNode();
                    if (singularTermNode !== null) {
                        var termNode = singularTermNode; ///
                        term = (0, _element.termFromTermNode)(termNode, context);
                        term = term.validate(context, function() {
                            var validatesForwards;
                            var type = term.getType();
                            bracketedTerm.setType(type);
                            validatesForwards = validateForwards();
                            return validatesForwards;
                        });
                        if (term !== null) {
                            validatesForwards = true;
                        }
                    }
                    return validatesForwards;
                });
                if (termUnifies) {
                    context.debug("...unified the '".concat(termString, "' term with the bracketed constructor."));
                }
                return termUnifies;
            }
        }
    ]);
    return BracketedConstructor;
}(_constructor.default), _define_property(_BracketedConstructor, "name", "BracketedConstructor"), _BracketedConstructor));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NvbnN0cnVjdG9yL2JyYWNrZXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gXCIuLi9jb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHRlcm1Gcm9tVGVybU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEJyYWNrZXRlZENvbnN0cnVjdG9yIGV4dGVuZHMgQ29uc3RydWN0b3Ige1xuICBnZXRCcmFja2V0ZWRDb25zdHJ1Y3Rvck5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGJyYWNrZXRlZENvbnN0cnVjdG9yTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBicmFja2V0ZWRDb25zdHJ1Y3Rvck5vZGU7XG4gIH1cblxuICB1bmlmeVRlcm0odGVybSwgY29udGV4dCwgdmFsaWRhdGVGb3J3YXJkcykge1xuICAgIGxldCB0ZXJtVW5pZmllcztcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlIGJyYWNrZXRlZCBjb25zdHJ1Y3Rvci4uLmApO1xuXG4gICAgdGVybVVuaWZpZXMgPSBzdXBlci51bmlmeVRlcm0odGVybSwgY29udGV4dCwgKCkgPT4ge1xuICAgICAgbGV0IHZhbGlkYXRlc0ZvcndhcmRzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IGJyYWNrZXRlZFRlcm0gPSB0ZXJtLCAvLy9cbiAgICAgICAgICAgIGJyYWNrZXRlZFRlcm1Ob2RlID0gYnJhY2tldGVkVGVybS5nZXROb2RlKCksXG4gICAgICAgICAgICBzaW5ndWxhclRlcm1Ob2RlID0gYnJhY2tldGVkVGVybU5vZGUuZ2V0U2luZ3VsYXJUZXJtTm9kZSgpO1xuXG4gICAgICBpZiAoc2luZ3VsYXJUZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHNpbmd1bGFyVGVybU5vZGU7ICAvLy9cblxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgdGVybSA9IHRlcm0udmFsaWRhdGUoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgIGxldCB2YWxpZGF0ZXNGb3J3YXJkcztcblxuICAgICAgICAgIGNvbnN0IHR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgICAgICAgIGJyYWNrZXRlZFRlcm0uc2V0VHlwZSh0eXBlKTtcblxuICAgICAgICAgIHZhbGlkYXRlc0ZvcndhcmRzID0gdmFsaWRhdGVGb3J3YXJkcygpO1xuXG4gICAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgICAgIHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgfSk7XG5cbiAgICBpZiAodGVybVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlIGJyYWNrZXRlZCBjb25zdHJ1Y3Rvci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVVuaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQnJhY2tldGVkQ29uc3RydWN0b3JcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkJyYWNrZXRlZENvbnN0cnVjdG9yIiwiZ2V0QnJhY2tldGVkQ29uc3RydWN0b3JOb2RlIiwibm9kZSIsImdldE5vZGUiLCJicmFja2V0ZWRDb25zdHJ1Y3Rvck5vZGUiLCJ1bmlmeVRlcm0iLCJ0ZXJtIiwiY29udGV4dCIsInZhbGlkYXRlRm9yd2FyZHMiLCJ0ZXJtVW5pZmllcyIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkYXRlc0ZvcndhcmRzIiwiYnJhY2tldGVkVGVybSIsImJyYWNrZXRlZFRlcm1Ob2RlIiwic2luZ3VsYXJUZXJtTm9kZSIsImdldFNpbmd1bGFyVGVybU5vZGUiLCJ0ZXJtTm9kZSIsInRlcm1Gcm9tVGVybU5vZGUiLCJ2YWxpZGF0ZSIsInR5cGUiLCJnZXRUeXBlIiwic2V0VHlwZSIsImRlYnVnIiwiQ29uc3RydWN0b3IiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OztrRUFMd0I7d0JBRUQ7dUJBQ1U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWpDLFdBQWVBLElBQUFBLGdCQUFNLHlDQUFDOzthQUFNQztnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7OztZQUMxQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ25CQywyQkFBMkJGLE1BQU8sR0FBRztnQkFFM0MsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsZ0JBQWdCO2dCQUN2QyxJQUFJQztnQkFFSixJQUFNQyxhQUFhSixLQUFLSyxTQUFTO2dCQUVqQ0osUUFBUUssS0FBSyxDQUFDLEFBQUMsaUJBQTJCLE9BQVhGLFlBQVc7Z0JBRTFDRCxjQUFjLHVCQWZVVCxpQ0FlSkssYUFBTixJQUFLLGFBQVdDLE1BQU1DLFNBQVM7b0JBQzNDLElBQUlNLG9CQUFvQjtvQkFFeEIsSUFBTUMsZ0JBQWdCUixNQUNoQlMsb0JBQW9CRCxjQUFjWCxPQUFPLElBQ3pDYSxtQkFBbUJELGtCQUFrQkUsbUJBQW1CO29CQUU5RCxJQUFJRCxxQkFBcUIsTUFBTTt3QkFDN0IsSUFBTUUsV0FBV0Ysa0JBQW1CLEdBQUc7d0JBRXZDVixPQUFPYSxJQUFBQSx5QkFBZ0IsRUFBQ0QsVUFBVVg7d0JBRWxDRCxPQUFPQSxLQUFLYyxRQUFRLENBQUNiLFNBQVM7NEJBQzVCLElBQUlNOzRCQUVKLElBQU1RLE9BQU9mLEtBQUtnQixPQUFPOzRCQUV6QlIsY0FBY1MsT0FBTyxDQUFDRjs0QkFFdEJSLG9CQUFvQkw7NEJBRXBCLE9BQU9LO3dCQUNUO3dCQUVBLElBQUlQLFNBQVMsTUFBTTs0QkFDakJPLG9CQUFvQjt3QkFDdEI7b0JBQ0Y7b0JBRUEsT0FBT0E7Z0JBQ1Q7Z0JBRUEsSUFBSUosYUFBYTtvQkFDZkYsUUFBUWlCLEtBQUssQ0FBQyxBQUFDLG1CQUE2QixPQUFYZCxZQUFXO2dCQUM5QztnQkFFQSxPQUFPRDtZQUNUOzs7O0VBcER1RGdCLG9CQUFXLEdBc0RsRSx3Q0FBT0MsUUFBTyJ9