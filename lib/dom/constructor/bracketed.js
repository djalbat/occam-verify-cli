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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../../dom"));
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
var _default = (0, _dom.domAssigned)(/*#__PURE__*/ function(Constructor) {
    _inherits(BracketedConstructor, Constructor);
    function BracketedConstructor() {
        _class_call_check(this, BracketedConstructor);
        return _call_super(this, BracketedConstructor, arguments);
    }
    _create_class(BracketedConstructor, [
        {
            key: "unifyTerm",
            value: function unifyTerm(term, context, verifyAhead) {
                var termUnified;
                var termString = term.getString();
                context.trace("Unifying the '".concat(termString, "' term with the bracketed constructor..."), term);
                termUnified = _get(_get_prototype_of(BracketedConstructor.prototype), "unifyTerm", this).call(this, term, context, function() {
                    var verifiedAhead = false;
                    var Term = _dom.default.Term, bracketedTerm = term, bracketedTermNode = bracketedTerm.getNode(), singularTermNode = bracketedTermNode.getSingularTermNode();
                    if (singularTermNode !== null) {
                        var termNode = singularTermNode; ///
                        term = Term.fromTermNode(termNode, context);
                        var termVVerified = term.verify(context, function() {
                            var verifiedAhead;
                            var type = term.getType();
                            bracketedTerm.setType(type);
                            verifiedAhead = verifyAhead();
                            return verifiedAhead;
                        });
                        verifiedAhead = termVVerified; ///
                    }
                    return verifiedAhead;
                });
                if (termUnified) {
                    context.debug("...unified the '".concat(termString, "' term with the bracketed constructor."), term);
                }
                return termUnified;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var Term = _dom.default.Term, bracketedTermNode = _constructor1.default.getBracketedTermNode(), termNode = bracketedTermNode, context = _constructor1.default, term = Term.fromTermNode(termNode, context), string = term.getString(), bracketedConstructor = new BracketedConstructor(string, term);
                return bracketedConstructor;
            }
        }
    ]);
    return BracketedConstructor;
}(_constructor.default));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vY29uc3RydWN0b3IvYnJhY2tldGVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCBDb25zdHJ1Y3RvciBmcm9tIFwiLi4vY29uc3RydWN0b3JcIjtcbmltcG9ydCBjb25zdHJ1Y3RvckJyYWNrZXRlZENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvYnJhY2tldGVkL2NvbnN0cnVjdG9yXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBCcmFja2V0ZWRDb25zdHJ1Y3RvciBleHRlbmRzIENvbnN0cnVjdG9yIHtcbiAgdW5pZnlUZXJtKHRlcm0sIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IHRlcm1VbmlmaWVkO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgYnJhY2tldGVkIGNvbnN0cnVjdG9yLi4uYCwgdGVybSk7XG5cbiAgICB0ZXJtVW5pZmllZCA9IHN1cGVyLnVuaWZ5VGVybSh0ZXJtLCBjb250ZXh0LCAoKSA9PiB7XG4gICAgICBsZXQgdmVyaWZpZWRBaGVhZCA9IGZhbHNlO1xuXG4gICAgICBjb25zdCB7IFRlcm0gfSA9IGRvbSxcbiAgICAgICAgICAgIGJyYWNrZXRlZFRlcm0gPSB0ZXJtLCAvLy9cbiAgICAgICAgICAgIGJyYWNrZXRlZFRlcm1Ob2RlID0gYnJhY2tldGVkVGVybS5nZXROb2RlKCksXG4gICAgICAgICAgICBzaW5ndWxhclRlcm1Ob2RlID0gYnJhY2tldGVkVGVybU5vZGUuZ2V0U2luZ3VsYXJUZXJtTm9kZSgpO1xuXG4gICAgICBpZiAoc2luZ3VsYXJUZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHNpbmd1bGFyVGVybU5vZGU7ICAvLy9cblxuICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnN0IHRlcm1WVmVyaWZpZWQgPSB0ZXJtLnZlcmlmeShjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgICAgICBjb25zdCB0eXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICAgICAgICBicmFja2V0ZWRUZXJtLnNldFR5cGUodHlwZSk7XG5cbiAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICB9KTtcblxuICAgICAgICB2ZXJpZmllZEFoZWFkID0gdGVybVZWZXJpZmllZDsgIC8vL1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICB9KTtcblxuICAgIGlmICh0ZXJtVW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgYnJhY2tldGVkIGNvbnN0cnVjdG9yLmAsIHRlcm0pO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVW5pZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB7IFRlcm0gfSA9IGRvbSxcbiAgICAgICAgICBicmFja2V0ZWRUZXJtTm9kZSA9IGNvbnN0cnVjdG9yQnJhY2tldGVkQ29udGV4dC5nZXRCcmFja2V0ZWRUZXJtTm9kZSgpLFxuICAgICAgICAgIHRlcm1Ob2RlID0gYnJhY2tldGVkVGVybU5vZGUsICAvLy9cbiAgICAgICAgICBjb250ZXh0ID0gY29uc3RydWN0b3JCcmFja2V0ZWRDb250ZXh0LCAvLy9cbiAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgYnJhY2tldGVkQ29uc3RydWN0b3IgPSBuZXcgQnJhY2tldGVkQ29uc3RydWN0b3Ioc3RyaW5nLCB0ZXJtKTtcblxuICAgIHJldHVybiBicmFja2V0ZWRDb25zdHJ1Y3RvcjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJCcmFja2V0ZWRDb25zdHJ1Y3RvciIsInVuaWZ5VGVybSIsInRlcm0iLCJjb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJ0ZXJtVW5pZmllZCIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZlcmlmaWVkQWhlYWQiLCJUZXJtIiwiZG9tIiwiYnJhY2tldGVkVGVybSIsImJyYWNrZXRlZFRlcm1Ob2RlIiwiZ2V0Tm9kZSIsInNpbmd1bGFyVGVybU5vZGUiLCJnZXRTaW5ndWxhclRlcm1Ob2RlIiwidGVybU5vZGUiLCJmcm9tVGVybU5vZGUiLCJ0ZXJtVlZlcmlmaWVkIiwidmVyaWZ5IiwidHlwZSIsImdldFR5cGUiLCJzZXRUeXBlIiwiZGVidWciLCJmcm9tTm90aGluZyIsImNvbnN0cnVjdG9yQnJhY2tldGVkQ29udGV4dCIsImdldEJyYWNrZXRlZFRlcm1Ob2RlIiwic3RyaW5nIiwiYnJhY2tldGVkQ29uc3RydWN0b3IiLCJDb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7MkRBTmdCO2tFQUNRO21FQUNnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJeEMsV0FBZUEsSUFBQUEsZ0JBQVcsZ0JBQUM7O2FBQU1DO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOzs7O1lBQy9CQyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFdBQVc7Z0JBQ2xDLElBQUlDO2dCQUVKLElBQU1DLGFBQWFKLEtBQUtLLFNBQVM7Z0JBRWpDSixRQUFRSyxLQUFLLENBQUMsQUFBQyxpQkFBMkIsT0FBWEYsWUFBVyw2Q0FBMkNKO2dCQUVyRkcsY0FBYyx1QkFSZUwsaUNBUVRDLGFBQU4sSUFBSyxhQUFXQyxNQUFNQyxTQUFTO29CQUMzQyxJQUFJTSxnQkFBZ0I7b0JBRXBCLElBQU0sQUFBRUMsT0FBU0MsWUFBRyxDQUFaRCxNQUNGRSxnQkFBZ0JWLE1BQ2hCVyxvQkFBb0JELGNBQWNFLE9BQU8sSUFDekNDLG1CQUFtQkYsa0JBQWtCRyxtQkFBbUI7b0JBRTlELElBQUlELHFCQUFxQixNQUFNO3dCQUM3QixJQUFNRSxXQUFXRixrQkFBbUIsR0FBRzt3QkFFdkNiLE9BQU9RLEtBQUtRLFlBQVksQ0FBQ0QsVUFBVWQ7d0JBRW5DLElBQU1nQixnQkFBZ0JqQixLQUFLa0IsTUFBTSxDQUFDakIsU0FBUzs0QkFDekMsSUFBSU07NEJBRUosSUFBTVksT0FBT25CLEtBQUtvQixPQUFPOzRCQUV6QlYsY0FBY1csT0FBTyxDQUFDRjs0QkFFdEJaLGdCQUFnQkw7NEJBRWhCLE9BQU9LO3dCQUNUO3dCQUVBQSxnQkFBZ0JVLGVBQWdCLEdBQUc7b0JBQ3JDO29CQUVBLE9BQU9WO2dCQUNUO2dCQUVBLElBQUlKLGFBQWE7b0JBQ2ZGLFFBQVFxQixLQUFLLENBQUMsQUFBQyxtQkFBNkIsT0FBWGxCLFlBQVcsMkNBQXlDSjtnQkFDdkY7Z0JBRUEsT0FBT0c7WUFDVDs7OztZQUVPb0IsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTSxBQUFFZixPQUFTQyxZQUFHLENBQVpELE1BQ0ZHLG9CQUFvQmEscUJBQTJCLENBQUNDLG9CQUFvQixJQUNwRVYsV0FBV0osbUJBQ1hWLFVBQVV1QixxQkFBMkIsRUFDckN4QixPQUFPUSxLQUFLUSxZQUFZLENBQUNELFVBQVVkLFVBQ25DeUIsU0FBUzFCLEtBQUtLLFNBQVMsSUFDdkJzQix1QkFBdUIsSUFBSTdCLHFCQUFxQjRCLFFBQVExQjtnQkFFOUQsT0FBTzJCO1lBQ1Q7Ozs7RUF4RDREQyxvQkFBVyJ9