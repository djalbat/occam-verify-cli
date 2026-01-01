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
var _ontology = /*#__PURE__*/ _interop_require_wildcard(require("../../ontology"));
var _constructor = /*#__PURE__*/ _interop_require_default(require("../constructor"));
var _instantiate = require("../../process/instantiate");
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
var _default = (0, _ontology.define)((_BracketedConstructor = /*#__PURE__*/ function(Constructor) {
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
                    var Term = _ontology.default.Term, bracketedTerm = term, bracketedTermNode = bracketedTerm.getNode(), singularTermNode = bracketedTermNode.getSingularTermNode();
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
                var Term = _ontology.default.Term, bracketedConstructorTermNode = (0, _instantiate.instantiateBracketedConstructorTerm)(), string = _instantiate.bracketedConstructorTermString, node = bracketedConstructorTermNode, type = null, term = new Term(string, node, type), bracketedConstructor = new BracketedConstructor(term);
                return bracketedConstructor;
            }
        }
    ]);
    return BracketedConstructor;
}(_constructor.default), _define_property(_BracketedConstructor, "name", "BracketedConstructor"), _BracketedConstructor));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9jb25zdHJ1Y3Rvci9icmFja2V0ZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBvbnRvbG9neSBmcm9tIFwiLi4vLi4vb250b2xvZ3lcIjtcbmltcG9ydCBDb25zdHJ1Y3RvciBmcm9tIFwiLi4vY29uc3RydWN0b3JcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL29udG9sb2d5XCI7XG5pbXBvcnQgeyBicmFja2V0ZWRDb25zdHJ1Y3RvclRlcm1TdHJpbmcsIGluc3RhbnRpYXRlQnJhY2tldGVkQ29uc3RydWN0b3JUZXJtIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEJyYWNrZXRlZENvbnN0cnVjdG9yIGV4dGVuZHMgQ29uc3RydWN0b3Ige1xuICB1bmlmeVRlcm0odGVybSwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgdGVybVVuaWZpZXM7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSBicmFja2V0ZWQgY29uc3RydWN0b3IuLi5gKTtcblxuICAgIHRlcm1VbmlmaWVzID0gc3VwZXIudW5pZnlUZXJtKHRlcm0sIGNvbnRleHQsICgpID0+IHtcbiAgICAgIGxldCB2ZXJpZmllc0FoZWFkID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHsgVGVybSB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgICBicmFja2V0ZWRUZXJtID0gdGVybSwgLy8vXG4gICAgICAgICAgICBicmFja2V0ZWRUZXJtTm9kZSA9IGJyYWNrZXRlZFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgc2luZ3VsYXJUZXJtTm9kZSA9IGJyYWNrZXRlZFRlcm1Ob2RlLmdldFNpbmd1bGFyVGVybU5vZGUoKTtcblxuICAgICAgaWYgKHNpbmd1bGFyVGVybU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdGVybU5vZGUgPSBzaW5ndWxhclRlcm1Ob2RlOyAgLy8vXG5cbiAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICBjb25zdCB0ZXJtVlZlcmlmaWVzID0gdGVybS52ZXJpZnkoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgIGxldCB2ZXJpZmllc0FoZWFkO1xuXG4gICAgICAgICAgY29uc3QgdHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgICAgICAgYnJhY2tldGVkVGVybS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICAgICAgdmVyaWZpZXNBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgICByZXR1cm4gdmVyaWZpZXNBaGVhZDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmVyaWZpZXNBaGVhZCA9IHRlcm1WVmVyaWZpZXM7ICAvLy9cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZlcmlmaWVzQWhlYWQ7XG4gICAgfSk7XG5cbiAgICBpZiAodGVybVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlIGJyYWNrZXRlZCBjb25zdHJ1Y3Rvci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVVuaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQnJhY2tldGVkQ29uc3RydWN0b3JcIjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgeyBUZXJtIH0gPSBvbnRvbG9neSxcbiAgICAgICAgICBicmFja2V0ZWRDb25zdHJ1Y3RvclRlcm1Ob2RlID0gaW5zdGFudGlhdGVCcmFja2V0ZWRDb25zdHJ1Y3RvclRlcm0oKSxcbiAgICAgICAgICBzdHJpbmcgPSBicmFja2V0ZWRDb25zdHJ1Y3RvclRlcm1TdHJpbmcsICAvLy9cbiAgICAgICAgICBub2RlID0gYnJhY2tldGVkQ29uc3RydWN0b3JUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICAgIHRlcm0gPSBuZXcgVGVybShzdHJpbmcsIG5vZGUsIHR5cGUpLFxuICAgICAgICAgIGJyYWNrZXRlZENvbnN0cnVjdG9yID0gbmV3IEJyYWNrZXRlZENvbnN0cnVjdG9yKHRlcm0pO1xuXG4gICAgcmV0dXJuIGJyYWNrZXRlZENvbnN0cnVjdG9yO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJCcmFja2V0ZWRDb25zdHJ1Y3RvciIsInVuaWZ5VGVybSIsInRlcm0iLCJjb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJ0ZXJtVW5pZmllcyIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZlcmlmaWVzQWhlYWQiLCJUZXJtIiwib250b2xvZ3kiLCJicmFja2V0ZWRUZXJtIiwiYnJhY2tldGVkVGVybU5vZGUiLCJnZXROb2RlIiwic2luZ3VsYXJUZXJtTm9kZSIsImdldFNpbmd1bGFyVGVybU5vZGUiLCJ0ZXJtTm9kZSIsImZyb21UZXJtTm9kZSIsInRlcm1WVmVyaWZpZXMiLCJ2ZXJpZnkiLCJ0eXBlIiwiZ2V0VHlwZSIsInNldFR5cGUiLCJkZWJ1ZyIsImZyb21Ob3RoaW5nIiwiYnJhY2tldGVkQ29uc3RydWN0b3JUZXJtTm9kZSIsImluc3RhbnRpYXRlQnJhY2tldGVkQ29uc3RydWN0b3JUZXJtIiwic3RyaW5nIiwiYnJhY2tldGVkQ29uc3RydWN0b3JUZXJtU3RyaW5nIiwibm9kZSIsImJyYWNrZXRlZENvbnN0cnVjdG9yIiwiQ29uc3RydWN0b3IiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OztnRUFOcUI7a0VBQ0c7MkJBRzREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXBGLFdBQWVBLElBQUFBLGdCQUFNLHlDQUFDOzthQUFNQztnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7OztZQUMxQkMsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxXQUFXO2dCQUNsQyxJQUFJQztnQkFFSixJQUFNQyxhQUFhSixLQUFLSyxTQUFTO2dCQUVqQ0osUUFBUUssS0FBSyxDQUFDLEFBQUMsaUJBQTJCLE9BQVhGLFlBQVc7Z0JBRTFDRCxjQUFjLHVCQVJVTCxpQ0FRSkMsYUFBTixJQUFLLGFBQVdDLE1BQU1DLFNBQVM7b0JBQzNDLElBQUlNLGdCQUFnQjtvQkFFcEIsSUFBTSxBQUFFQyxPQUFTQyxpQkFBUSxDQUFqQkQsTUFDRkUsZ0JBQWdCVixNQUNoQlcsb0JBQW9CRCxjQUFjRSxPQUFPLElBQ3pDQyxtQkFBbUJGLGtCQUFrQkcsbUJBQW1CO29CQUU5RCxJQUFJRCxxQkFBcUIsTUFBTTt3QkFDN0IsSUFBTUUsV0FBV0Ysa0JBQW1CLEdBQUc7d0JBRXZDYixPQUFPUSxLQUFLUSxZQUFZLENBQUNELFVBQVVkO3dCQUVuQyxJQUFNZ0IsZ0JBQWdCakIsS0FBS2tCLE1BQU0sQ0FBQ2pCLFNBQVM7NEJBQ3pDLElBQUlNOzRCQUVKLElBQU1ZLE9BQU9uQixLQUFLb0IsT0FBTzs0QkFFekJWLGNBQWNXLE9BQU8sQ0FBQ0Y7NEJBRXRCWixnQkFBZ0JMOzRCQUVoQixPQUFPSzt3QkFDVDt3QkFFQUEsZ0JBQWdCVSxlQUFnQixHQUFHO29CQUNyQztvQkFFQSxPQUFPVjtnQkFDVDtnQkFFQSxJQUFJSixhQUFhO29CQUNmRixRQUFRcUIsS0FBSyxDQUFDLEFBQUMsbUJBQTZCLE9BQVhsQixZQUFXO2dCQUM5QztnQkFFQSxPQUFPRDtZQUNUOzs7O1lBSU9vQixLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNLEFBQUVmLE9BQVNDLGlCQUFRLENBQWpCRCxNQUNGZ0IsK0JBQStCQyxJQUFBQSxnREFBbUMsS0FDbEVDLFNBQVNDLDJDQUE4QixFQUN2Q0MsT0FBT0osOEJBQ1BMLE9BQU8sTUFDUG5CLE9BQU8sSUFBSVEsS0FBS2tCLFFBQVFFLE1BQU1ULE9BQzlCVSx1QkFBdUIsSUFBSS9CLHFCQUFxQkU7Z0JBRXRELE9BQU82QjtZQUNUOzs7O0VBMUR1REMsb0JBQVcsR0E4Q2xFLHdDQUFPQyxRQUFPIn0=