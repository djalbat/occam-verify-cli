"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    bracketedTermNode: function() {
        return bracketedTermNode;
    },
    default: function() {
        return BracketedConstructor;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
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
var constructorBracketedContext = _constructor1.default.fromNothing();
var bracketedTermNode = constructorBracketedContext.getBracketedTermNode();
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
                    var Term = _shim.default.Term, bracketedTerm = term, bracketedTermNode = bracketedTerm.getNode(), termNode = termNodeQuery(bracketedTermNode); ///
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
                var Term = _shim.default.Term, termNode = bracketedTermNode, context = constructorBracketedContext, term = Term.fromTermNode(termNode, context), type = null, string = (0, _constructor.stringFromTermAndType)(term, type), bracketedConstructor = new BracketedConstructor(string, term);
                return bracketedConstructor;
            }
        }
    ]);
    return BracketedConstructor;
}(_constructor.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdHJ1Y3Rvci9icmFja2V0ZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgQ29uc3RydWN0b3IgZnJvbSBcIi4uL2NvbnN0cnVjdG9yXCI7XG5pbXBvcnQgQ29uc3RydWN0b3JCcmFja2V0ZWRDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2JyYWNrZXRlZC9jb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBzdHJpbmdGcm9tVGVybUFuZFR5cGUgfSBmcm9tIFwiLi4vY29uc3RydWN0b3JcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL2FyZ3VtZW50L3Rlcm1cIik7XG5cbmNvbnN0IGNvbnN0cnVjdG9yQnJhY2tldGVkQ29udGV4dCA9IENvbnN0cnVjdG9yQnJhY2tldGVkQ29udGV4dC5mcm9tTm90aGluZygpO1xuXG5leHBvcnQgY29uc3QgYnJhY2tldGVkVGVybU5vZGUgPSBjb25zdHJ1Y3RvckJyYWNrZXRlZENvbnRleHQuZ2V0QnJhY2tldGVkVGVybU5vZGUoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJhY2tldGVkQ29uc3RydWN0b3IgZXh0ZW5kcyBDb25zdHJ1Y3RvciB7XG4gIHVuaWZ5VGVybSh0ZXJtLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCB0ZXJtVW5pZmllZDtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlIGJyYWNrZXRlZCBjb25zdHJ1Y3Rvci4uLmAsIHRlcm0pO1xuXG4gICAgdGVybVVuaWZpZWQgPSBzdXBlci51bmlmeVRlcm0odGVybSwgY29udGV4dCwgKCkgPT4ge1xuICAgICAgbGV0IHZlcmlmaWVkQWhlYWQgPSBmYWxzZTtcblxuICAgICAgY29uc3QgeyBUZXJtIH0gPSBzaGltLFxuICAgICAgICAgICAgYnJhY2tldGVkVGVybSA9IHRlcm0sIC8vL1xuICAgICAgICAgICAgYnJhY2tldGVkVGVybU5vZGUgPSBicmFja2V0ZWRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShicmFja2V0ZWRUZXJtTm9kZSk7IC8vL1xuXG4gICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0ZXJtVlZlcmlmaWVkID0gdGVybS52ZXJpZnkoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICAgICAgY29uc3QgdHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgICAgICAgYnJhY2tldGVkVGVybS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHRlcm1WVmVyaWZpZWQ7ICAvLy9cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgfSk7XG5cbiAgICBpZiAodGVybVVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlIGJyYWNrZXRlZCBjb25zdHJ1Y3Rvci5gLCB0ZXJtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVVuaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgeyBUZXJtIH0gPSBzaGltLFxuICAgICAgICAgIHRlcm1Ob2RlID0gYnJhY2tldGVkVGVybU5vZGUsICAvLy9cbiAgICAgICAgICBjb250ZXh0ID0gY29uc3RydWN0b3JCcmFja2V0ZWRDb250ZXh0LCAvLy9cbiAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtQW5kVHlwZSh0ZXJtLCB0eXBlKSxcbiAgICAgICAgICBicmFja2V0ZWRDb25zdHJ1Y3RvciA9IG5ldyBCcmFja2V0ZWRDb25zdHJ1Y3RvcihzdHJpbmcsIHRlcm0pO1xuXG4gICAgcmV0dXJuIGJyYWNrZXRlZENvbnN0cnVjdG9yO1xuICB9XG59XG4iXSwibmFtZXMiOlsiYnJhY2tldGVkVGVybU5vZGUiLCJCcmFja2V0ZWRDb25zdHJ1Y3RvciIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJjb25zdHJ1Y3RvckJyYWNrZXRlZENvbnRleHQiLCJDb25zdHJ1Y3RvckJyYWNrZXRlZENvbnRleHQiLCJmcm9tTm90aGluZyIsImdldEJyYWNrZXRlZFRlcm1Ob2RlIiwidW5pZnlUZXJtIiwidGVybSIsImNvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsInRlcm1VbmlmaWVkIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmVyaWZpZWRBaGVhZCIsIlRlcm0iLCJzaGltIiwiYnJhY2tldGVkVGVybSIsImdldE5vZGUiLCJ0ZXJtTm9kZSIsImZyb21UZXJtTm9kZSIsInRlcm1WVmVyaWZpZWQiLCJ2ZXJpZnkiLCJ0eXBlIiwiZ2V0VHlwZSIsInNldFR5cGUiLCJkZWJ1ZyIsInN0cmluZyIsInN0cmluZ0Zyb21UZXJtQW5kVHlwZSIsImJyYWNrZXRlZENvbnN0cnVjdG9yIiwiQ29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWFhQSxpQkFBaUI7ZUFBakJBOzs7ZUFFUUM7OzsyREFiSjttRUFDTzttRUFDZ0I7cUJBRWQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUVoQyxJQUFNQyw4QkFBOEJDLHFCQUEyQixDQUFDQyxXQUFXO0FBRXBFLElBQU1OLG9CQUFvQkksNEJBQTRCRyxvQkFBb0I7QUFFbEUsSUFBQSxBQUFNTixxQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ25CTyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFdBQVc7Z0JBQ2xDLElBQUlDO2dCQUVKLElBQU1DLGFBQWFKLEtBQUtLLFNBQVM7Z0JBRWpDSixRQUFRSyxLQUFLLENBQUMsQUFBQyxpQkFBMkIsT0FBWEYsWUFBVyw2Q0FBMkNKO2dCQUVyRkcsY0FBYyx1QkFSR1gsaUNBUUdPLGFBQU4sSUFBSyxhQUFXQyxNQUFNQyxTQUFTO29CQUMzQyxJQUFJTSxnQkFBZ0I7b0JBRXBCLElBQU0sQUFBRUMsT0FBU0MsYUFBSSxDQUFiRCxNQUNGRSxnQkFBZ0JWLE1BQ2hCVCxvQkFBb0JtQixjQUFjQyxPQUFPLElBQ3pDQyxXQUFXbkIsY0FBY0Ysb0JBQW9CLEdBQUc7b0JBRXREUyxPQUFPUSxLQUFLSyxZQUFZLENBQUNELFVBQVVYO29CQUVuQyxJQUFJRCxTQUFTLE1BQU07d0JBQ2pCLElBQU1jLGdCQUFnQmQsS0FBS2UsTUFBTSxDQUFDZCxTQUFTOzRCQUN6QyxJQUFJTTs0QkFFSixJQUFNUyxPQUFPaEIsS0FBS2lCLE9BQU87NEJBRXpCUCxjQUFjUSxPQUFPLENBQUNGOzRCQUV0QlQsZ0JBQWdCTDs0QkFFaEIsT0FBT0s7d0JBQ1Q7d0JBRUFBLGdCQUFnQk8sZUFBZ0IsR0FBRztvQkFDckM7b0JBRUEsT0FBT1A7Z0JBQ1Q7Z0JBRUEsSUFBSUosYUFBYTtvQkFDZkYsUUFBUWtCLEtBQUssQ0FBQyxBQUFDLG1CQUE2QixPQUFYZixZQUFXLDJDQUF5Q0o7Z0JBQ3ZGO2dCQUVBLE9BQU9HO1lBQ1Q7Ozs7WUFFT04sS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTSxBQUFFVyxPQUFTQyxhQUFJLENBQWJELE1BQ0ZJLFdBQVdyQixtQkFDWFUsVUFBVU4sNkJBQ1ZLLE9BQU9RLEtBQUtLLFlBQVksQ0FBQ0QsVUFBVVgsVUFDbkNlLE9BQU8sTUFDUEksU0FBU0MsSUFBQUEsa0NBQXFCLEVBQUNyQixNQUFNZ0IsT0FDckNNLHVCQUF1QixJQW5EWjlCLHFCQW1EcUM0QixRQUFRcEI7Z0JBRTlELE9BQU9zQjtZQUNUOzs7V0F0RG1COUI7RUFBNkIrQixvQkFBVyJ9