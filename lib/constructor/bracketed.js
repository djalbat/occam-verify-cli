"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BracketedConstructor;
    }
});
var _dom = /*#__PURE__*/ _interop_require_default(require("../dom"));
var _constructor = /*#__PURE__*/ _interop_require_wildcard(require("../constructor"));
var _constructor1 = /*#__PURE__*/ _interop_require_default(require("../context/bracketed/constructor"));
var _query = require("../utilities/query");
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
var BracketedConstructor = /*#__PURE__*/ function(Constructor) {
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
                var Term = _dom.default.Term, bracketedTermNode = _constructor1.default.getBracketedTermNode(), termNode = bracketedTermNode, context = _constructor1.default, term = Term.fromTermNode(termNode, context), type = null, string = (0, _constructor.stringFromTermAndType)(term, type), bracketedConstructor = new BracketedConstructor(string, term);
                return bracketedConstructor;
            }
        }
    ]);
    return BracketedConstructor;
}(_constructor.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdHJ1Y3Rvci9icmFja2V0ZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gXCIuLi9jb25zdHJ1Y3RvclwiO1xuaW1wb3J0IGNvbnN0cnVjdG9yQnJhY2tldGVkQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9icmFja2V0ZWQvY29uc3RydWN0b3JcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgc3RyaW5nRnJvbVRlcm1BbmRUeXBlIH0gZnJvbSBcIi4uL2NvbnN0cnVjdG9yXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS9hcmd1bWVudC90ZXJtXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmFja2V0ZWRDb25zdHJ1Y3RvciBleHRlbmRzIENvbnN0cnVjdG9yIHtcbiAgdW5pZnlUZXJtKHRlcm0sIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IHRlcm1VbmlmaWVkO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgYnJhY2tldGVkIGNvbnN0cnVjdG9yLi4uYCwgdGVybSk7XG5cbiAgICB0ZXJtVW5pZmllZCA9IHN1cGVyLnVuaWZ5VGVybSh0ZXJtLCBjb250ZXh0LCAoKSA9PiB7XG4gICAgICBsZXQgdmVyaWZpZWRBaGVhZCA9IGZhbHNlO1xuXG4gICAgICBjb25zdCB7IFRlcm0gfSA9IGRvbSxcbiAgICAgICAgICAgIGJyYWNrZXRlZFRlcm0gPSB0ZXJtLCAvLy9cbiAgICAgICAgICAgIGJyYWNrZXRlZFRlcm1Ob2RlID0gYnJhY2tldGVkVGVybS5nZXROb2RlKCksXG4gICAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkoYnJhY2tldGVkVGVybU5vZGUpOyAvLy9cblxuICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdGVybVZWZXJpZmllZCA9IHRlcm0udmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgICAgIGNvbnN0IHR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgICAgICAgIGJyYWNrZXRlZFRlcm0uc2V0VHlwZSh0eXBlKTtcblxuICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZlcmlmaWVkQWhlYWQgPSB0ZXJtVlZlcmlmaWVkOyAgLy8vXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgIH0pO1xuXG4gICAgaWYgKHRlcm1VbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSBicmFja2V0ZWQgY29uc3RydWN0b3IuYCwgdGVybSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1VbmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHsgVGVybSB9ID0gZG9tLFxuICAgICAgICAgIGJyYWNrZXRlZFRlcm1Ob2RlID0gY29uc3RydWN0b3JCcmFja2V0ZWRDb250ZXh0LmdldEJyYWNrZXRlZFRlcm1Ob2RlKCksXG4gICAgICAgICAgdGVybU5vZGUgPSBicmFja2V0ZWRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSBjb25zdHJ1Y3RvckJyYWNrZXRlZENvbnRleHQsIC8vL1xuICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm1BbmRUeXBlKHRlcm0sIHR5cGUpLFxuICAgICAgICAgIGJyYWNrZXRlZENvbnN0cnVjdG9yID0gbmV3IEJyYWNrZXRlZENvbnN0cnVjdG9yKHN0cmluZywgdGVybSk7XG5cbiAgICByZXR1cm4gYnJhY2tldGVkQ29uc3RydWN0b3I7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJCcmFja2V0ZWRDb25zdHJ1Y3RvciIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ1bmlmeVRlcm0iLCJ0ZXJtIiwiY29udGV4dCIsInZlcmlmeUFoZWFkIiwidGVybVVuaWZpZWQiLCJ0ZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2ZXJpZmllZEFoZWFkIiwiVGVybSIsImRvbSIsImJyYWNrZXRlZFRlcm0iLCJicmFja2V0ZWRUZXJtTm9kZSIsImdldE5vZGUiLCJ0ZXJtTm9kZSIsImZyb21UZXJtTm9kZSIsInRlcm1WVmVyaWZpZWQiLCJ2ZXJpZnkiLCJ0eXBlIiwiZ2V0VHlwZSIsInNldFR5cGUiLCJkZWJ1ZyIsImZyb21Ob3RoaW5nIiwiY29uc3RydWN0b3JCcmFja2V0ZWRDb250ZXh0IiwiZ2V0QnJhY2tldGVkVGVybU5vZGUiLCJzdHJpbmciLCJzdHJpbmdGcm9tVGVybUFuZFR5cGUiLCJicmFja2V0ZWRDb25zdHJ1Y3RvciIsIkNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7OzswREFUTDttRUFDUTttRUFDZ0I7cUJBRWQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUVqQixJQUFBLEFBQU1GLHFDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxXQUFXO2dCQUNsQyxJQUFJQztnQkFFSixJQUFNQyxhQUFhSixLQUFLSyxTQUFTO2dCQUVqQ0osUUFBUUssS0FBSyxDQUFDLEFBQUMsaUJBQTJCLE9BQVhGLFlBQVcsNkNBQTJDSjtnQkFFckZHLGNBQWMsdUJBUkdQLGlDQVFHRyxhQUFOLElBQUssYUFBV0MsTUFBTUMsU0FBUztvQkFDM0MsSUFBSU0sZ0JBQWdCO29CQUVwQixJQUFNLEFBQUVDLE9BQVNDLFlBQUcsQ0FBWkQsTUFDRkUsZ0JBQWdCVixNQUNoQlcsb0JBQW9CRCxjQUFjRSxPQUFPLElBQ3pDQyxXQUFXaEIsY0FBY2Msb0JBQW9CLEdBQUc7b0JBRXREWCxPQUFPUSxLQUFLTSxZQUFZLENBQUNELFVBQVVaO29CQUVuQyxJQUFJRCxTQUFTLE1BQU07d0JBQ2pCLElBQU1lLGdCQUFnQmYsS0FBS2dCLE1BQU0sQ0FBQ2YsU0FBUzs0QkFDekMsSUFBSU07NEJBRUosSUFBTVUsT0FBT2pCLEtBQUtrQixPQUFPOzRCQUV6QlIsY0FBY1MsT0FBTyxDQUFDRjs0QkFFdEJWLGdCQUFnQkw7NEJBRWhCLE9BQU9LO3dCQUNUO3dCQUVBQSxnQkFBZ0JRLGVBQWdCLEdBQUc7b0JBQ3JDO29CQUVBLE9BQU9SO2dCQUNUO2dCQUVBLElBQUlKLGFBQWE7b0JBQ2ZGLFFBQVFtQixLQUFLLENBQUMsQUFBQyxtQkFBNkIsT0FBWGhCLFlBQVcsMkNBQXlDSjtnQkFDdkY7Z0JBRUEsT0FBT0c7WUFDVDs7OztZQUVPa0IsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTSxBQUFFYixPQUFTQyxZQUFHLENBQVpELE1BQ0ZHLG9CQUFvQlcscUJBQTJCLENBQUNDLG9CQUFvQixJQUNwRVYsV0FBV0YsbUJBQ1hWLFVBQVVxQixxQkFBMkIsRUFDckN0QixPQUFPUSxLQUFLTSxZQUFZLENBQUNELFVBQVVaLFVBQ25DZ0IsT0FBTyxNQUNQTyxTQUFTQyxJQUFBQSxrQ0FBcUIsRUFBQ3pCLE1BQU1pQixPQUNyQ1MsdUJBQXVCLElBcERaOUIscUJBb0RxQzRCLFFBQVF4QjtnQkFFOUQsT0FBTzBCO1lBQ1Q7OztXQXZEbUI5QjtFQUE2QitCLG9CQUFXIn0=