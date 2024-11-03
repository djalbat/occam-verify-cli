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
var _dom = /*#__PURE__*/ _interop_require_default(require("../dom"));
var _constructor = /*#__PURE__*/ _interop_require_default(require("../context/bracketed/constructor"));
var _query = require("../utilities/query");
var _constructor1 = require("../constructor");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
var termNodeQuery = (0, _query.nodeQuery)("/term/argument/term");
var constructorBracketedContext = _constructor.default.fromNothing();
var bracketedTermNode = constructorBracketedContext.getBracketedTermNode();
var BracketedConstructor = /*#__PURE__*/ function() {
    function BracketedConstructor(string, term) {
        _class_call_check(this, BracketedConstructor);
        this.string = string;
        this.term = term;
    }
    _create_class(BracketedConstructor, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getTerm",
            value: function getTerm() {
                return this.term;
            }
        },
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
                var Term = _dom.default.Term, termNode = bracketedTermNode, context = constructorBracketedContext, term = Term.fromTermNode(termNode, context), type = null, string = (0, _constructor1.stringFromTermAndType)(term, type), bracketedConstructor = new BracketedConstructor(string, term);
                return bracketedConstructor;
            }
        }
    ]);
    return BracketedConstructor;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdHJ1Y3Rvci9icmFja2V0ZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IENvbnN0cnVjdG9yQnJhY2tldGVkQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9icmFja2V0ZWQvY29uc3RydWN0b3JcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgc3RyaW5nRnJvbVRlcm1BbmRUeXBlIH0gZnJvbSBcIi4uL2NvbnN0cnVjdG9yXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS9hcmd1bWVudC90ZXJtXCIpO1xuXG5jb25zdCBjb25zdHJ1Y3RvckJyYWNrZXRlZENvbnRleHQgPSBDb25zdHJ1Y3RvckJyYWNrZXRlZENvbnRleHQuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGNvbnN0IGJyYWNrZXRlZFRlcm1Ob2RlID0gY29uc3RydWN0b3JCcmFja2V0ZWRDb250ZXh0LmdldEJyYWNrZXRlZFRlcm1Ob2RlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyYWNrZXRlZENvbnN0cnVjdG9yIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0ZXJtKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICB1bmlmeVRlcm0odGVybSwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgdGVybVVuaWZpZWQ7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSBicmFja2V0ZWQgY29uc3RydWN0b3IuLi5gLCB0ZXJtKTtcblxuICAgIHRlcm1VbmlmaWVkID0gc3VwZXIudW5pZnlUZXJtKHRlcm0sIGNvbnRleHQsICgpID0+IHtcbiAgICAgIGxldCB2ZXJpZmllZEFoZWFkID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHsgVGVybSB9ID0gZG9tLFxuICAgICAgICAgICAgYnJhY2tldGVkVGVybSA9IHRlcm0sIC8vL1xuICAgICAgICAgICAgYnJhY2tldGVkVGVybU5vZGUgPSBicmFja2V0ZWRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShicmFja2V0ZWRUZXJtTm9kZSk7IC8vL1xuXG4gICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0ZXJtVlZlcmlmaWVkID0gdGVybS52ZXJpZnkoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICAgICAgY29uc3QgdHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgICAgICAgYnJhY2tldGVkVGVybS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHRlcm1WVmVyaWZpZWQ7ICAvLy9cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgfSk7XG5cbiAgICBpZiAodGVybVVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlIGJyYWNrZXRlZCBjb25zdHJ1Y3Rvci5gLCB0ZXJtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVVuaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgeyBUZXJtIH0gPSBkb20sXG4gICAgICAgICAgdGVybU5vZGUgPSBicmFja2V0ZWRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSBjb25zdHJ1Y3RvckJyYWNrZXRlZENvbnRleHQsIC8vL1xuICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm1BbmRUeXBlKHRlcm0sIHR5cGUpLFxuICAgICAgICAgIGJyYWNrZXRlZENvbnN0cnVjdG9yID0gbmV3IEJyYWNrZXRlZENvbnN0cnVjdG9yKHN0cmluZywgdGVybSk7XG5cbiAgICByZXR1cm4gYnJhY2tldGVkQ29uc3RydWN0b3I7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJicmFja2V0ZWRUZXJtTm9kZSIsIkJyYWNrZXRlZENvbnN0cnVjdG9yIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImNvbnN0cnVjdG9yQnJhY2tldGVkQ29udGV4dCIsIkNvbnN0cnVjdG9yQnJhY2tldGVkQ29udGV4dCIsImZyb21Ob3RoaW5nIiwiZ2V0QnJhY2tldGVkVGVybU5vZGUiLCJzdHJpbmciLCJ0ZXJtIiwiZ2V0U3RyaW5nIiwiZ2V0VGVybSIsInVuaWZ5VGVybSIsImNvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsInRlcm1VbmlmaWVkIiwidGVybVN0cmluZyIsInRyYWNlIiwidmVyaWZpZWRBaGVhZCIsIlRlcm0iLCJkb20iLCJicmFja2V0ZWRUZXJtIiwiZ2V0Tm9kZSIsInRlcm1Ob2RlIiwiZnJvbVRlcm1Ob2RlIiwidGVybVZWZXJpZmllZCIsInZlcmlmeSIsInR5cGUiLCJnZXRUeXBlIiwic2V0VHlwZSIsImRlYnVnIiwic3RyaW5nRnJvbVRlcm1BbmRUeXBlIiwiYnJhY2tldGVkQ29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQVlhQSxpQkFBaUI7ZUFBakJBOzs7ZUFFUUM7OzswREFaTDtrRUFDd0I7cUJBRWQ7NEJBQ1k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFaEMsSUFBTUMsOEJBQThCQyxvQkFBMkIsQ0FBQ0MsV0FBVztBQUVwRSxJQUFNTixvQkFBb0JJLDRCQUE0Qkcsb0JBQW9CO0FBRWxFLElBQUEsQUFBTU4scUNBQU47YUFBTUEscUJBQ1BPLE1BQU0sRUFBRUMsSUFBSTtnQ0FETFI7UUFFakIsSUFBSSxDQUFDTyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBOztrQkFIS1I7O1lBTW5CUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUgsSUFBSSxFQUFFSSxPQUFPLEVBQUVDLFdBQVc7Z0JBQ2xDLElBQUlDO2dCQUVKLElBQU1DLGFBQWFQLEtBQUtDLFNBQVM7Z0JBRWpDRyxRQUFRSSxLQUFLLENBQUMsQUFBQyxpQkFBMkIsT0FBWEQsWUFBVyw2Q0FBMkNQO2dCQUVyRk0sY0FBYyx1QkFyQkdkLGlDQXFCR1csYUFBTixJQUFLLGFBQVdILE1BQU1JLFNBQVM7b0JBQzNDLElBQUlLLGdCQUFnQjtvQkFFcEIsSUFBTSxBQUFFQyxPQUFTQyxZQUFHLENBQVpELE1BQ0ZFLGdCQUFnQlosTUFDaEJULG9CQUFvQnFCLGNBQWNDLE9BQU8sSUFDekNDLFdBQVdyQixjQUFjRixvQkFBb0IsR0FBRztvQkFFdERTLE9BQU9VLEtBQUtLLFlBQVksQ0FBQ0QsVUFBVVY7b0JBRW5DLElBQUlKLFNBQVMsTUFBTTt3QkFDakIsSUFBTWdCLGdCQUFnQmhCLEtBQUtpQixNQUFNLENBQUNiLFNBQVM7NEJBQ3pDLElBQUlLOzRCQUVKLElBQU1TLE9BQU9sQixLQUFLbUIsT0FBTzs0QkFFekJQLGNBQWNRLE9BQU8sQ0FBQ0Y7NEJBRXRCVCxnQkFBZ0JKOzRCQUVoQixPQUFPSTt3QkFDVDt3QkFFQUEsZ0JBQWdCTyxlQUFnQixHQUFHO29CQUNyQztvQkFFQSxPQUFPUDtnQkFDVDtnQkFFQSxJQUFJSCxhQUFhO29CQUNmRixRQUFRaUIsS0FBSyxDQUFDLEFBQUMsbUJBQTZCLE9BQVhkLFlBQVcsMkNBQXlDUDtnQkFDdkY7Z0JBRUEsT0FBT007WUFDVDs7OztZQUVPVCxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNLEFBQUVhLE9BQVNDLFlBQUcsQ0FBWkQsTUFDRkksV0FBV3ZCLG1CQUNYYSxVQUFVVCw2QkFDVkssT0FBT1UsS0FBS0ssWUFBWSxDQUFDRCxVQUFVVixVQUNuQ2MsT0FBTyxNQUNQbkIsU0FBU3VCLElBQUFBLG1DQUFxQixFQUFDdEIsTUFBTWtCLE9BQ3JDSyx1QkFBdUIsSUFoRVovQixxQkFnRXFDTyxRQUFRQztnQkFFOUQsT0FBT3VCO1lBQ1Q7OztXQW5FbUIvQiJ9