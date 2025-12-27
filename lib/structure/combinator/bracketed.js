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
var _combinator = /*#__PURE__*/ _interop_require_default(require("../combinator"));
var _combinator1 = /*#__PURE__*/ _interop_require_default(require("../../context/bracketed/combinator"));
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
var _BracketedCombinator;
var _default = (0, _structure.define)((_BracketedCombinator = /*#__PURE__*/ function(Combinator) {
    _inherits(BracketedCombinator, Combinator);
    function BracketedCombinator() {
        _class_call_check(this, BracketedCombinator);
        return _call_super(this, BracketedCombinator, arguments);
    }
    _create_class(BracketedCombinator, [
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, assignments, stated, context) {
                var statementUnifies;
                var statementString = statement.getString();
                context.trace("Unifying the '".concat(statementString, "' statement with the bracketed combinator..."));
                statementUnifies = _get(_get_prototype_of(BracketedCombinator.prototype), "unifyStatement", this).call(this, statement, assignments, stated, context);
                if (statementUnifies) {
                    context.debug("...unified the '".concat(statementString, "' statement with the bracketed combinator."));
                }
                return statementUnifies;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var Statement = _structure.default.Statement, bracketedStatementNode = _combinator1.default.getBracketedStatementNode(), statementNode = bracketedStatementNode, context = _combinator1.default, statement = Statement.fromStatementNode(statementNode, context), bracketedCombinator = new BracketedCombinator(statement);
                return bracketedCombinator;
            }
        }
    ]);
    return BracketedCombinator;
}(_combinator.default), _define_property(_BracketedCombinator, "name", "BracketedCombinator"), _BracketedCombinator));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHJ1Y3R1cmUvY29tYmluYXRvci9icmFja2V0ZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzdHJ1Y3R1cmUgZnJvbSBcIi4uLy4uL3N0cnVjdHVyZVwiO1xuaW1wb3J0IENvbWJpbmF0b3IgZnJvbSBcIi4uL2NvbWJpbmF0b3JcIjtcbmltcG9ydCBjb21iaW5hdG9yQnJhY2tldGVkQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9icmFja2V0ZWQvY29tYmluYXRvclwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vc3RydWN0dXJlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBCcmFja2V0ZWRDb21iaW5hdG9yIGV4dGVuZHMgQ29tYmluYXRvciB7XG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSBicmFja2V0ZWQgY29tYmluYXRvci4uLmApO1xuXG4gICAgc3RhdGVtZW50VW5pZmllcyA9IHN1cGVyLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlIGJyYWNrZXRlZCBjb21iaW5hdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkJyYWNrZXRlZENvbWJpbmF0b3JcIjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IHN0cnVjdHVyZSxcbiAgICAgICAgICBicmFja2V0ZWRTdGF0ZW1lbnROb2RlID0gY29tYmluYXRvckJyYWNrZXRlZENvbnRleHQuZ2V0QnJhY2tldGVkU3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBicmFja2V0ZWRTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICBjb250ZXh0ID0gY29tYmluYXRvckJyYWNrZXRlZENvbnRleHQsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBicmFja2V0ZWRDb21iaW5hdG9yID0gbmV3IEJyYWNrZXRlZENvbWJpbmF0b3Ioc3RhdGVtZW50KTtcblxuICAgIHJldHVybiBicmFja2V0ZWRDb21iaW5hdG9yO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJCcmFja2V0ZWRDb21iaW5hdG9yIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImNvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwic3RhdGVtZW50U3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJkZWJ1ZyIsImZyb21Ob3RoaW5nIiwiU3RhdGVtZW50Iiwic3RydWN0dXJlIiwiYnJhY2tldGVkU3RhdGVtZW50Tm9kZSIsImNvbWJpbmF0b3JCcmFja2V0ZWRDb250ZXh0IiwiZ2V0QnJhY2tldGVkU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJmcm9tU3RhdGVtZW50Tm9kZSIsImJyYWNrZXRlZENvbWJpbmF0b3IiLCJDb21iaW5hdG9yIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7aUVBTnNCO2lFQUNDO2tFQUNnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUl2QyxXQUFlQSxJQUFBQSxpQkFBTSx3Q0FBQzs7YUFBTUM7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7Ozs7WUFDMUJDLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlQyxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxPQUFPO2dCQUNwRCxJQUFJQztnQkFFSixJQUFNQyxrQkFBa0JMLFVBQVVNLFNBQVM7Z0JBRTNDSCxRQUFRSSxLQUFLLENBQUMsQUFBQyxpQkFBZ0MsT0FBaEJGLGlCQUFnQjtnQkFFL0NELG1CQUFtQix1QkFSS04sZ0NBUUNDLGtCQUFOLElBQUssYUFBZ0JDLFdBQVdDLGFBQWFDLFFBQVFDO2dCQUV4RSxJQUFJQyxrQkFBa0I7b0JBQ3BCRCxRQUFRSyxLQUFLLENBQUMsQUFBQyxtQkFBa0MsT0FBaEJILGlCQUFnQjtnQkFDbkQ7Z0JBRUEsT0FBT0Q7WUFDVDs7OztZQUlPSyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNLEFBQUVDLFlBQWNDLGtCQUFTLENBQXZCRCxXQUNGRSx5QkFBeUJDLG9CQUEwQixDQUFDQyx5QkFBeUIsSUFDN0VDLGdCQUFnQkgsd0JBQ2hCVCxVQUFVVSxvQkFBMEIsRUFDcENiLFlBQVlVLFVBQVVNLGlCQUFpQixDQUFDRCxlQUFlWixVQUN2RGMsc0JBQXNCLElBQUluQixvQkFBb0JFO2dCQUVwRCxPQUFPaUI7WUFDVDs7OztFQTVCc0RDLG1CQUFVLEdBaUJoRSx1Q0FBT0MsUUFBTyJ9