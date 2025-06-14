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
var _query = require("../../utilities/query");
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
var termNodeQuery = (0, _query.nodeQuery)("/term/argument/term");
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
                    var Term = _dom.default.Term, bracketedTerm = term, bracketedTermNode = bracketedTerm.getNode(), termNode = termNodeQuery(bracketedTermNode); ///
                    term = Term.fromTermNode(termNode, context);
                    if (term !== null) {
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
                var Term = _dom.default.Term, bracketedTermNode = _constructor1.default.getBracketedTermNode(), termNode = bracketedTermNode, context = _constructor1.default, term = Term.fromTermNode(termNode, context), string = term.getString(), provisional = null, bracketedConstructor = new BracketedConstructor(string, term, provisional);
                return bracketedConstructor;
            }
        }
    ]);
    return BracketedConstructor;
}(_constructor.default));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vY29uc3RydWN0b3IvYnJhY2tldGVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCBDb25zdHJ1Y3RvciBmcm9tIFwiLi4vY29uc3RydWN0b3JcIjtcbmltcG9ydCBjb25zdHJ1Y3RvckJyYWNrZXRlZENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvYnJhY2tldGVkL2NvbnN0cnVjdG9yXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vYXJndW1lbnQvdGVybVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQnJhY2tldGVkQ29uc3RydWN0b3IgZXh0ZW5kcyBDb25zdHJ1Y3RvciB7XG4gIHVuaWZ5VGVybSh0ZXJtLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCB0ZXJtVW5pZmllZDtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlIGJyYWNrZXRlZCBjb25zdHJ1Y3Rvci4uLmAsIHRlcm0pO1xuXG4gICAgdGVybVVuaWZpZWQgPSBzdXBlci51bmlmeVRlcm0odGVybSwgY29udGV4dCwgKCkgPT4ge1xuICAgICAgbGV0IHZlcmlmaWVkQWhlYWQgPSBmYWxzZTtcblxuICAgICAgY29uc3QgeyBUZXJtIH0gPSBkb20sXG4gICAgICAgICAgICBicmFja2V0ZWRUZXJtID0gdGVybSwgLy8vXG4gICAgICAgICAgICBicmFja2V0ZWRUZXJtTm9kZSA9IGJyYWNrZXRlZFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGJyYWNrZXRlZFRlcm1Ob2RlKTsgLy8vXG5cbiAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHRlcm1WVmVyaWZpZWQgPSB0ZXJtLnZlcmlmeShjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgICAgICBjb25zdCB0eXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICAgICAgICBicmFja2V0ZWRUZXJtLnNldFR5cGUodHlwZSk7XG5cbiAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICB9KTtcblxuICAgICAgICB2ZXJpZmllZEFoZWFkID0gdGVybVZWZXJpZmllZDsgIC8vL1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICB9KTtcblxuICAgIGlmICh0ZXJtVW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgYnJhY2tldGVkIGNvbnN0cnVjdG9yLmAsIHRlcm0pO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVW5pZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB7IFRlcm0gfSA9IGRvbSxcbiAgICAgICAgICBicmFja2V0ZWRUZXJtTm9kZSA9IGNvbnN0cnVjdG9yQnJhY2tldGVkQ29udGV4dC5nZXRCcmFja2V0ZWRUZXJtTm9kZSgpLFxuICAgICAgICAgIHRlcm1Ob2RlID0gYnJhY2tldGVkVGVybU5vZGUsICAvLy9cbiAgICAgICAgICBjb250ZXh0ID0gY29uc3RydWN0b3JCcmFja2V0ZWRDb250ZXh0LCAvLy9cbiAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBudWxsLFxuICAgICAgICAgIGJyYWNrZXRlZENvbnN0cnVjdG9yID0gbmV3IEJyYWNrZXRlZENvbnN0cnVjdG9yKHN0cmluZywgdGVybSwgcHJvdmlzaW9uYWwpO1xuXG4gICAgcmV0dXJuIGJyYWNrZXRlZENvbnN0cnVjdG9yO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJCcmFja2V0ZWRDb25zdHJ1Y3RvciIsInVuaWZ5VGVybSIsInRlcm0iLCJjb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJ0ZXJtVW5pZmllZCIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZlcmlmaWVkQWhlYWQiLCJUZXJtIiwiZG9tIiwiYnJhY2tldGVkVGVybSIsImJyYWNrZXRlZFRlcm1Ob2RlIiwiZ2V0Tm9kZSIsInRlcm1Ob2RlIiwiZnJvbVRlcm1Ob2RlIiwidGVybVZWZXJpZmllZCIsInZlcmlmeSIsInR5cGUiLCJnZXRUeXBlIiwic2V0VHlwZSIsImRlYnVnIiwiZnJvbU5vdGhpbmciLCJjb25zdHJ1Y3RvckJyYWNrZXRlZENvbnRleHQiLCJnZXRCcmFja2V0ZWRUZXJtTm9kZSIsInN0cmluZyIsInByb3Zpc2lvbmFsIiwiYnJhY2tldGVkQ29uc3RydWN0b3IiLCJDb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7MkRBVGdCO2tFQUNRO21FQUNnQjtxQkFFZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHMUIsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDO0lBRWhDLFdBQWVDLElBQUFBLGdCQUFXLGdCQUFDOzthQUFNQztnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7OztZQUMvQkMsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxXQUFXO2dCQUNsQyxJQUFJQztnQkFFSixJQUFNQyxhQUFhSixLQUFLSyxTQUFTO2dCQUVqQ0osUUFBUUssS0FBSyxDQUFDLEFBQUMsaUJBQTJCLE9BQVhGLFlBQVcsNkNBQTJDSjtnQkFFckZHLGNBQWMsdUJBUmVMLGlDQVFUQyxhQUFOLElBQUssYUFBV0MsTUFBTUMsU0FBUztvQkFDM0MsSUFBSU0sZ0JBQWdCO29CQUVwQixJQUFNLEFBQUVDLE9BQVNDLFlBQUcsQ0FBWkQsTUFDRkUsZ0JBQWdCVixNQUNoQlcsb0JBQW9CRCxjQUFjRSxPQUFPLElBQ3pDQyxXQUFXbEIsY0FBY2dCLG9CQUFvQixHQUFHO29CQUV0RFgsT0FBT1EsS0FBS00sWUFBWSxDQUFDRCxVQUFVWjtvQkFFbkMsSUFBSUQsU0FBUyxNQUFNO3dCQUNqQixJQUFNZSxnQkFBZ0JmLEtBQUtnQixNQUFNLENBQUNmLFNBQVM7NEJBQ3pDLElBQUlNOzRCQUVKLElBQU1VLE9BQU9qQixLQUFLa0IsT0FBTzs0QkFFekJSLGNBQWNTLE9BQU8sQ0FBQ0Y7NEJBRXRCVixnQkFBZ0JMOzRCQUVoQixPQUFPSzt3QkFDVDt3QkFFQUEsZ0JBQWdCUSxlQUFnQixHQUFHO29CQUNyQztvQkFFQSxPQUFPUjtnQkFDVDtnQkFFQSxJQUFJSixhQUFhO29CQUNmRixRQUFRbUIsS0FBSyxDQUFDLEFBQUMsbUJBQTZCLE9BQVhoQixZQUFXLDJDQUF5Q0o7Z0JBQ3ZGO2dCQUVBLE9BQU9HO1lBQ1Q7Ozs7WUFFT2tCLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU0sQUFBRWIsT0FBU0MsWUFBRyxDQUFaRCxNQUNGRyxvQkFBb0JXLHFCQUEyQixDQUFDQyxvQkFBb0IsSUFDcEVWLFdBQVdGLG1CQUNYVixVQUFVcUIscUJBQTJCLEVBQ3JDdEIsT0FBT1EsS0FBS00sWUFBWSxDQUFDRCxVQUFVWixVQUNuQ3VCLFNBQVN4QixLQUFLSyxTQUFTLElBQ3ZCb0IsY0FBYyxNQUNkQyx1QkFBdUIsSUFBSTVCLHFCQUFxQjBCLFFBQVF4QixNQUFNeUI7Z0JBRXBFLE9BQU9DO1lBQ1Q7Ozs7RUF2RDREQyxvQkFBVyJ9