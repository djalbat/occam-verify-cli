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
var _structure = /*#__PURE__*/ _interop_require_wildcard(require("../../structure"));
var _constructor = /*#__PURE__*/ _interop_require_default(require("../constructor"));
var _constructor1 = /*#__PURE__*/ _interop_require_default(require("../../context/bracketed/constructor"));
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
var _default = (0, _structure.define)((_BracketedConstructor = /*#__PURE__*/ function(Constructor) {
    _inherits(BracketedConstructor, Constructor);
    function BracketedConstructor() {
        _class_call_check(this, BracketedConstructor);
        return _call_super(this, BracketedConstructor, arguments);
    }
    _create_class(BracketedConstructor, [
        {
            key: "unifyTerm",
            value: function unifyTerm(term, context, verifyAhead) {
                var termUnifies;
                var termString = term.getString();
                context.trace("Unifying the '".concat(termString, "' term with the bracketed constructor..."));
                termUnifies = _get(_get_prototype_of(BracketedConstructor.prototype), "unifyTerm", this).call(this, term, context, function() {
                    var verifiesAhead = false;
                    var Term = _structure.default.Term, bracketedTerm = term, bracketedTermNode = bracketedTerm.getNode(), singularTermNode = bracketedTermNode.getSingularTermNode();
                    if (singularTermNode !== null) {
                        var termNode = singularTermNode; ///
                        term = Term.fromTermNode(termNode, context);
                        var termVVerifies = term.verify(context, function() {
                            var verifiesAhead;
                            var type = term.getType();
                            bracketedTerm.setType(type);
                            verifiesAhead = verifyAhead();
                            return verifiesAhead;
                        });
                        verifiesAhead = termVVerifies; ///
                    }
                    return verifiesAhead;
                });
                if (termUnifies) {
                    context.debug("...unified the '".concat(termString, "' term with the bracketed constructor."));
                }
                return termUnifies;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var Term = _structure.default.Term, bracketedTermNode = _constructor1.default.getBracketedTermNode(), termNode = bracketedTermNode, context = _constructor1.default, term = Term.fromTermNode(termNode, context), string = term.getString(), bracketedConstructor = new BracketedConstructor(string, term);
                return bracketedConstructor;
            }
        }
    ]);
    return BracketedConstructor;
}(_constructor.default), _define_property(_BracketedConstructor, "name", "BracketedConstructor"), _BracketedConstructor));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHJ1Y3R1cmUvY29uc3RydWN0b3IvYnJhY2tldGVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc3RydWN0dXJlIGZyb20gXCIuLi8uLi9zdHJ1Y3R1cmVcIjtcbmltcG9ydCBDb25zdHJ1Y3RvciBmcm9tIFwiLi4vY29uc3RydWN0b3JcIjtcbmltcG9ydCBjb25zdHJ1Y3RvckJyYWNrZXRlZENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvYnJhY2tldGVkL2NvbnN0cnVjdG9yXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9zdHJ1Y3R1cmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEJyYWNrZXRlZENvbnN0cnVjdG9yIGV4dGVuZHMgQ29uc3RydWN0b3Ige1xuICB1bmlmeVRlcm0odGVybSwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgdGVybVVuaWZpZXM7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSBicmFja2V0ZWQgY29uc3RydWN0b3IuLi5gKTtcblxuICAgIHRlcm1VbmlmaWVzID0gc3VwZXIudW5pZnlUZXJtKHRlcm0sIGNvbnRleHQsICgpID0+IHtcbiAgICAgIGxldCB2ZXJpZmllc0FoZWFkID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHsgVGVybSB9ID0gc3RydWN0dXJlLFxuICAgICAgICAgICAgYnJhY2tldGVkVGVybSA9IHRlcm0sIC8vL1xuICAgICAgICAgICAgYnJhY2tldGVkVGVybU5vZGUgPSBicmFja2V0ZWRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgIHNpbmd1bGFyVGVybU5vZGUgPSBicmFja2V0ZWRUZXJtTm9kZS5nZXRTaW5ndWxhclRlcm1Ob2RlKCk7XG5cbiAgICAgIGlmIChzaW5ndWxhclRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gc2luZ3VsYXJUZXJtTm9kZTsgIC8vL1xuXG4gICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgY29uc3QgdGVybVZWZXJpZmllcyA9IHRlcm0udmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICBsZXQgdmVyaWZpZXNBaGVhZDtcblxuICAgICAgICAgIGNvbnN0IHR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgICAgICAgIGJyYWNrZXRlZFRlcm0uc2V0VHlwZSh0eXBlKTtcblxuICAgICAgICAgIHZlcmlmaWVzQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICAgICAgcmV0dXJuIHZlcmlmaWVzQWhlYWQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZlcmlmaWVzQWhlYWQgPSB0ZXJtVlZlcmlmaWVzOyAgLy8vXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2ZXJpZmllc0FoZWFkO1xuICAgIH0pO1xuXG4gICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSBicmFja2V0ZWQgY29uc3RydWN0b3IuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1VbmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkJyYWNrZXRlZENvbnN0cnVjdG9yXCI7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHsgVGVybSB9ID0gc3RydWN0dXJlLFxuICAgICAgICAgIGJyYWNrZXRlZFRlcm1Ob2RlID0gY29uc3RydWN0b3JCcmFja2V0ZWRDb250ZXh0LmdldEJyYWNrZXRlZFRlcm1Ob2RlKCksXG4gICAgICAgICAgdGVybU5vZGUgPSBicmFja2V0ZWRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSBjb25zdHJ1Y3RvckJyYWNrZXRlZENvbnRleHQsIC8vL1xuICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBicmFja2V0ZWRDb25zdHJ1Y3RvciA9IG5ldyBCcmFja2V0ZWRDb25zdHJ1Y3RvcihzdHJpbmcsIHRlcm0pO1xuXG4gICAgcmV0dXJuIGJyYWNrZXRlZENvbnN0cnVjdG9yO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJCcmFja2V0ZWRDb25zdHJ1Y3RvciIsInVuaWZ5VGVybSIsInRlcm0iLCJjb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJ0ZXJtVW5pZmllcyIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZlcmlmaWVzQWhlYWQiLCJUZXJtIiwic3RydWN0dXJlIiwiYnJhY2tldGVkVGVybSIsImJyYWNrZXRlZFRlcm1Ob2RlIiwiZ2V0Tm9kZSIsInNpbmd1bGFyVGVybU5vZGUiLCJnZXRTaW5ndWxhclRlcm1Ob2RlIiwidGVybU5vZGUiLCJmcm9tVGVybU5vZGUiLCJ0ZXJtVlZlcmlmaWVzIiwidmVyaWZ5IiwidHlwZSIsImdldFR5cGUiLCJzZXRUeXBlIiwiZGVidWciLCJmcm9tTm90aGluZyIsImNvbnN0cnVjdG9yQnJhY2tldGVkQ29udGV4dCIsImdldEJyYWNrZXRlZFRlcm1Ob2RlIiwic3RyaW5nIiwiYnJhY2tldGVkQ29uc3RydWN0b3IiLCJDb25zdHJ1Y3RvciIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7O2lFQU5zQjtrRUFDRTttRUFDZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJeEMsV0FBZUEsSUFBQUEsaUJBQU0seUNBQUM7O2FBQU1DO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOzs7O1lBQzFCQyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFdBQVc7Z0JBQ2xDLElBQUlDO2dCQUVKLElBQU1DLGFBQWFKLEtBQUtLLFNBQVM7Z0JBRWpDSixRQUFRSyxLQUFLLENBQUMsQUFBQyxpQkFBMkIsT0FBWEYsWUFBVztnQkFFMUNELGNBQWMsdUJBUlVMLGlDQVFKQyxhQUFOLElBQUssYUFBV0MsTUFBTUMsU0FBUztvQkFDM0MsSUFBSU0sZ0JBQWdCO29CQUVwQixJQUFNLEFBQUVDLE9BQVNDLGtCQUFTLENBQWxCRCxNQUNGRSxnQkFBZ0JWLE1BQ2hCVyxvQkFBb0JELGNBQWNFLE9BQU8sSUFDekNDLG1CQUFtQkYsa0JBQWtCRyxtQkFBbUI7b0JBRTlELElBQUlELHFCQUFxQixNQUFNO3dCQUM3QixJQUFNRSxXQUFXRixrQkFBbUIsR0FBRzt3QkFFdkNiLE9BQU9RLEtBQUtRLFlBQVksQ0FBQ0QsVUFBVWQ7d0JBRW5DLElBQU1nQixnQkFBZ0JqQixLQUFLa0IsTUFBTSxDQUFDakIsU0FBUzs0QkFDekMsSUFBSU07NEJBRUosSUFBTVksT0FBT25CLEtBQUtvQixPQUFPOzRCQUV6QlYsY0FBY1csT0FBTyxDQUFDRjs0QkFFdEJaLGdCQUFnQkw7NEJBRWhCLE9BQU9LO3dCQUNUO3dCQUVBQSxnQkFBZ0JVLGVBQWdCLEdBQUc7b0JBQ3JDO29CQUVBLE9BQU9WO2dCQUNUO2dCQUVBLElBQUlKLGFBQWE7b0JBQ2ZGLFFBQVFxQixLQUFLLENBQUMsQUFBQyxtQkFBNkIsT0FBWGxCLFlBQVc7Z0JBQzlDO2dCQUVBLE9BQU9EO1lBQ1Q7Ozs7WUFJT29CLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU0sQUFBRWYsT0FBU0Msa0JBQVMsQ0FBbEJELE1BQ0ZHLG9CQUFvQmEscUJBQTJCLENBQUNDLG9CQUFvQixJQUNwRVYsV0FBV0osbUJBQ1hWLFVBQVV1QixxQkFBMkIsRUFDckN4QixPQUFPUSxLQUFLUSxZQUFZLENBQUNELFVBQVVkLFVBQ25DeUIsU0FBUzFCLEtBQUtLLFNBQVMsSUFDdkJzQix1QkFBdUIsSUFBSTdCLHFCQUFxQjRCLFFBQVExQjtnQkFFOUQsT0FBTzJCO1lBQ1Q7Ozs7RUExRHVEQyxvQkFBVyxHQThDbEUsd0NBQU9DLFFBQU8ifQ==