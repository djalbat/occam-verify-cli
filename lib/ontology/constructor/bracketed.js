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
                var Term = _ontology.default.Term, bracketedTermNode = _constructor1.default.getBracketedTermNode(), termNode = bracketedTermNode, context = _constructor1.default, term = Term.fromTermNode(termNode, context), string = term.getString(), bracketedConstructor = new BracketedConstructor(string, term);
                return bracketedConstructor;
            }
        }
    ]);
    return BracketedConstructor;
}(_constructor.default), _define_property(_BracketedConstructor, "name", "BracketedConstructor"), _BracketedConstructor));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9jb25zdHJ1Y3Rvci9icmFja2V0ZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBvbnRvbG9neSBmcm9tIFwiLi4vLi4vb250b2xvZ3lcIjtcbmltcG9ydCBDb25zdHJ1Y3RvciBmcm9tIFwiLi4vY29uc3RydWN0b3JcIjtcbmltcG9ydCBjb25zdHJ1Y3RvckJyYWNrZXRlZENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvYnJhY2tldGVkL2NvbnN0cnVjdG9yXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9vbnRvbG9neVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQnJhY2tldGVkQ29uc3RydWN0b3IgZXh0ZW5kcyBDb25zdHJ1Y3RvciB7XG4gIHVuaWZ5VGVybSh0ZXJtLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCB0ZXJtVW5pZmllcztcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlIGJyYWNrZXRlZCBjb25zdHJ1Y3Rvci4uLmApO1xuXG4gICAgdGVybVVuaWZpZXMgPSBzdXBlci51bmlmeVRlcm0odGVybSwgY29udGV4dCwgKCkgPT4ge1xuICAgICAgbGV0IHZlcmlmaWVzQWhlYWQgPSBmYWxzZTtcblxuICAgICAgY29uc3QgeyBUZXJtIH0gPSBvbnRvbG9neSxcbiAgICAgICAgICAgIGJyYWNrZXRlZFRlcm0gPSB0ZXJtLCAvLy9cbiAgICAgICAgICAgIGJyYWNrZXRlZFRlcm1Ob2RlID0gYnJhY2tldGVkVGVybS5nZXROb2RlKCksXG4gICAgICAgICAgICBzaW5ndWxhclRlcm1Ob2RlID0gYnJhY2tldGVkVGVybU5vZGUuZ2V0U2luZ3VsYXJUZXJtTm9kZSgpO1xuXG4gICAgICBpZiAoc2luZ3VsYXJUZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHNpbmd1bGFyVGVybU5vZGU7ICAvLy9cblxuICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnN0IHRlcm1WVmVyaWZpZXMgPSB0ZXJtLnZlcmlmeShjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgbGV0IHZlcmlmaWVzQWhlYWQ7XG5cbiAgICAgICAgICBjb25zdCB0eXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICAgICAgICBicmFja2V0ZWRUZXJtLnNldFR5cGUodHlwZSk7XG5cbiAgICAgICAgICB2ZXJpZmllc0FoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgICAgIHJldHVybiB2ZXJpZmllc0FoZWFkO1xuICAgICAgICB9KTtcblxuICAgICAgICB2ZXJpZmllc0FoZWFkID0gdGVybVZWZXJpZmllczsgIC8vL1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmVyaWZpZXNBaGVhZDtcbiAgICB9KTtcblxuICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgYnJhY2tldGVkIGNvbnN0cnVjdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVW5pZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJCcmFja2V0ZWRDb25zdHJ1Y3RvclwiO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB7IFRlcm0gfSA9IG9udG9sb2d5LFxuICAgICAgICAgIGJyYWNrZXRlZFRlcm1Ob2RlID0gY29uc3RydWN0b3JCcmFja2V0ZWRDb250ZXh0LmdldEJyYWNrZXRlZFRlcm1Ob2RlKCksXG4gICAgICAgICAgdGVybU5vZGUgPSBicmFja2V0ZWRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSBjb25zdHJ1Y3RvckJyYWNrZXRlZENvbnRleHQsIC8vL1xuICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBicmFja2V0ZWRDb25zdHJ1Y3RvciA9IG5ldyBCcmFja2V0ZWRDb25zdHJ1Y3RvcihzdHJpbmcsIHRlcm0pO1xuXG4gICAgcmV0dXJuIGJyYWNrZXRlZENvbnN0cnVjdG9yO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJCcmFja2V0ZWRDb25zdHJ1Y3RvciIsInVuaWZ5VGVybSIsInRlcm0iLCJjb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJ0ZXJtVW5pZmllcyIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZlcmlmaWVzQWhlYWQiLCJUZXJtIiwib250b2xvZ3kiLCJicmFja2V0ZWRUZXJtIiwiYnJhY2tldGVkVGVybU5vZGUiLCJnZXROb2RlIiwic2luZ3VsYXJUZXJtTm9kZSIsImdldFNpbmd1bGFyVGVybU5vZGUiLCJ0ZXJtTm9kZSIsImZyb21UZXJtTm9kZSIsInRlcm1WVmVyaWZpZXMiLCJ2ZXJpZnkiLCJ0eXBlIiwiZ2V0VHlwZSIsInNldFR5cGUiLCJkZWJ1ZyIsImZyb21Ob3RoaW5nIiwiY29uc3RydWN0b3JCcmFja2V0ZWRDb250ZXh0IiwiZ2V0QnJhY2tldGVkVGVybU5vZGUiLCJzdHJpbmciLCJicmFja2V0ZWRDb25zdHJ1Y3RvciIsIkNvbnN0cnVjdG9yIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7Z0VBTnFCO2tFQUNHO21FQUNnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUl4QyxXQUFlQSxJQUFBQSxnQkFBTSx5Q0FBQzs7YUFBTUM7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7Ozs7WUFDMUJDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsV0FBVztnQkFDbEMsSUFBSUM7Z0JBRUosSUFBTUMsYUFBYUosS0FBS0ssU0FBUztnQkFFakNKLFFBQVFLLEtBQUssQ0FBQyxBQUFDLGlCQUEyQixPQUFYRixZQUFXO2dCQUUxQ0QsY0FBYyx1QkFSVUwsaUNBUUpDLGFBQU4sSUFBSyxhQUFXQyxNQUFNQyxTQUFTO29CQUMzQyxJQUFJTSxnQkFBZ0I7b0JBRXBCLElBQU0sQUFBRUMsT0FBU0MsaUJBQVEsQ0FBakJELE1BQ0ZFLGdCQUFnQlYsTUFDaEJXLG9CQUFvQkQsY0FBY0UsT0FBTyxJQUN6Q0MsbUJBQW1CRixrQkFBa0JHLG1CQUFtQjtvQkFFOUQsSUFBSUQscUJBQXFCLE1BQU07d0JBQzdCLElBQU1FLFdBQVdGLGtCQUFtQixHQUFHO3dCQUV2Q2IsT0FBT1EsS0FBS1EsWUFBWSxDQUFDRCxVQUFVZDt3QkFFbkMsSUFBTWdCLGdCQUFnQmpCLEtBQUtrQixNQUFNLENBQUNqQixTQUFTOzRCQUN6QyxJQUFJTTs0QkFFSixJQUFNWSxPQUFPbkIsS0FBS29CLE9BQU87NEJBRXpCVixjQUFjVyxPQUFPLENBQUNGOzRCQUV0QlosZ0JBQWdCTDs0QkFFaEIsT0FBT0s7d0JBQ1Q7d0JBRUFBLGdCQUFnQlUsZUFBZ0IsR0FBRztvQkFDckM7b0JBRUEsT0FBT1Y7Z0JBQ1Q7Z0JBRUEsSUFBSUosYUFBYTtvQkFDZkYsUUFBUXFCLEtBQUssQ0FBQyxBQUFDLG1CQUE2QixPQUFYbEIsWUFBVztnQkFDOUM7Z0JBRUEsT0FBT0Q7WUFDVDs7OztZQUlPb0IsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTSxBQUFFZixPQUFTQyxpQkFBUSxDQUFqQkQsTUFDRkcsb0JBQW9CYSxxQkFBMkIsQ0FBQ0Msb0JBQW9CLElBQ3BFVixXQUFXSixtQkFDWFYsVUFBVXVCLHFCQUEyQixFQUNyQ3hCLE9BQU9RLEtBQUtRLFlBQVksQ0FBQ0QsVUFBVWQsVUFDbkN5QixTQUFTMUIsS0FBS0ssU0FBUyxJQUN2QnNCLHVCQUF1QixJQUFJN0IscUJBQXFCNEIsUUFBUTFCO2dCQUU5RCxPQUFPMkI7WUFDVDs7OztFQTFEdURDLG9CQUFXLEdBOENsRSx3Q0FBT0MsUUFBTyJ9