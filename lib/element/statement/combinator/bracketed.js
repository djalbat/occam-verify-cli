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
var _combinator = /*#__PURE__*/ _interop_require_default(require("../../statement/combinator"));
var _elements = require("../../../elements");
var _element = require("../../../utilities/element");
var _instantiate = require("../../../process/instantiate");
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
var _BracketedCombinatorStatement;
var _default = (0, _elements.define)((_BracketedCombinatorStatement = /*#__PURE__*/ function(CombinatorStatement) {
    _inherits(BracketedCombinatorStatement, CombinatorStatement);
    function BracketedCombinatorStatement() {
        _class_call_check(this, BracketedCombinatorStatement);
        return _call_super(this, BracketedCombinatorStatement, arguments);
    }
    _create_class(BracketedCombinatorStatement, [
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, assignments, stated, context) {
                var statementUnifies;
                var statementString = statement.getString();
                context.trace("Unifying the '".concat(statementString, "' statement with the bracketed combinator..."));
                statementUnifies = _get(_get_prototype_of(BracketedCombinatorStatement.prototype), "unifyStatement", this).call(this, statement, assignments, stated, context);
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
                var bracketedCombinatorStatementNode = (0, _instantiate.instantiateBracketedCombinatorStatement)(), nodeAsString = function() {
                    return _instantiate.bracketedCombinatorStatementString;
                }, context = {
                    nodeAsString: nodeAsString
                }, bracketedCombinatorStatement = (0, _element.statementFromStatementNode)(bracketedCombinatorStatementNode, context);
                return bracketedCombinatorStatement;
            }
        }
    ]);
    return BracketedCombinatorStatement;
}(_combinator.default), _define_property(_BracketedCombinatorStatement, "name", "BracketedCombinatorStatement"), _BracketedCombinatorStatement));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbGVtZW50L3N0YXRlbWVudC9jb21iaW5hdG9yL2JyYWNrZXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbWJpbmF0b3JTdGF0ZW1lbnQgZnJvbSBcIi4uLy4uL3N0YXRlbWVudC9jb21iaW5hdG9yXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IGJyYWNrZXRlZENvbWJpbmF0b3JTdGF0ZW1lbnRTdHJpbmcsIGluc3RhbnRpYXRlQnJhY2tldGVkQ29tYmluYXRvclN0YXRlbWVudCB9IGZyb20gXCIuLi8uLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBCcmFja2V0ZWRDb21iaW5hdG9yU3RhdGVtZW50IGV4dGVuZHMgQ29tYmluYXRvclN0YXRlbWVudCB7XG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSBicmFja2V0ZWQgY29tYmluYXRvci4uLmApO1xuXG4gICAgc3RhdGVtZW50VW5pZmllcyA9IHN1cGVyLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlIGJyYWNrZXRlZCBjb21iaW5hdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkJyYWNrZXRlZENvbWJpbmF0b3JTdGF0ZW1lbnRcIjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgYnJhY2tldGVkQ29tYmluYXRvclN0YXRlbWVudE5vZGUgPSBpbnN0YW50aWF0ZUJyYWNrZXRlZENvbWJpbmF0b3JTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBub2RlQXNTdHJpbmcgPSAoKSA9PiBicmFja2V0ZWRDb21iaW5hdG9yU3RhdGVtZW50U3RyaW5nLFxuICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICBub2RlQXNTdHJpbmdcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJyYWNrZXRlZENvbWJpbmF0b3JTdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShicmFja2V0ZWRDb21iaW5hdG9yU3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYnJhY2tldGVkQ29tYmluYXRvclN0YXRlbWVudDtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQnJhY2tldGVkQ29tYmluYXRvclN0YXRlbWVudCIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJjb250ZXh0Iiwic3RhdGVtZW50VW5pZmllcyIsInN0YXRlbWVudFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiZGVidWciLCJmcm9tTm90aGluZyIsImJyYWNrZXRlZENvbWJpbmF0b3JTdGF0ZW1lbnROb2RlIiwiaW5zdGFudGlhdGVCcmFja2V0ZWRDb21iaW5hdG9yU3RhdGVtZW50Iiwibm9kZUFzU3RyaW5nIiwiYnJhY2tldGVkQ29tYmluYXRvclN0YXRlbWVudFN0cmluZyIsImJyYWNrZXRlZENvbWJpbmF0b3JTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsIkNvbWJpbmF0b3JTdGF0ZW1lbnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OztpRUFOZ0M7d0JBRVQ7dUJBQ29COzJCQUNpRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFNUYsV0FBZUEsSUFBQUEsZ0JBQU0saURBQUM7O2FBQU1DO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOzs7O1lBQzFCQyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsU0FBUyxFQUFFQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsT0FBTztnQkFDcEQsSUFBSUM7Z0JBRUosSUFBTUMsa0JBQWtCTCxVQUFVTSxTQUFTO2dCQUUzQ0gsUUFBUUksS0FBSyxDQUFDLEFBQUMsaUJBQWdDLE9BQWhCRixpQkFBZ0I7Z0JBRS9DRCxtQkFBbUIsdUJBUktOLHlDQVFDQyxrQkFBTixJQUFLLGFBQWdCQyxXQUFXQyxhQUFhQyxRQUFRQztnQkFFeEUsSUFBSUMsa0JBQWtCO29CQUNwQkQsUUFBUUssS0FBSyxDQUFDLEFBQUMsbUJBQWtDLE9BQWhCSCxpQkFBZ0I7Z0JBQ25EO2dCQUVBLE9BQU9EO1lBQ1Q7Ozs7WUFJT0ssS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsbUNBQW1DQyxJQUFBQSxvREFBdUMsS0FDMUVDLGVBQWU7MkJBQU1DLCtDQUFrQzttQkFDdkRWLFVBQVU7b0JBQ1JTLGNBQUFBO2dCQUNGLEdBQ0FFLCtCQUErQkMsSUFBQUEsbUNBQTBCLEVBQUNMLGtDQUFrQ1A7Z0JBRWxHLE9BQU9XO1lBQ1Q7Ozs7RUE1QitERSxtQkFBbUIsR0FpQmxGLGdEQUFPQyxRQUFPIn0=