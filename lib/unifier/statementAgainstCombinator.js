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
var _unifier = /*#__PURE__*/ _interop_require_default(require("../unifier"));
var _termAgainstType = /*#__PURE__*/ _interop_require_default(require("../unify/termAgainstType"));
var _statementAgainstMetaType = /*#__PURE__*/ _interop_require_default(require("../unify/statementAgainstMetaType"));
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
var termNodeQuery = (0, _query.nodeQuery)("/term!"), typeNodeQuery = (0, _query.nodeQuery)("/type!"), metaTypeNodeQuery = (0, _query.nodeQuery)("/metaType!"), statementNodeQuery = (0, _query.nodeQuery)("/statement!");
var StatementAgainstCombinatorUnifier = /*#__PURE__*/ function(Unifier) {
    _inherits(StatementAgainstCombinatorUnifier, Unifier);
    function StatementAgainstCombinatorUnifier() {
        _class_call_check(this, StatementAgainstCombinatorUnifier);
        return _call_super(this, StatementAgainstCombinatorUnifier, arguments);
    }
    _create_class(StatementAgainstCombinatorUnifier, [
        {
            key: "unify",
            value: function unify(statementNode, combinatorStatementNode, localContext) {
                var statementUnifiedAgainstCombinator;
                var nonTerminalNodeA = statementNode, nonTerminalNodeB = combinatorStatementNode, nonTerminalNodeUnified = this.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext);
                statementUnifiedAgainstCombinator = nonTerminalNodeUnified; ///
                return statementUnifiedAgainstCombinator;
            }
        }
    ]);
    return StatementAgainstCombinatorUnifier;
}(_unifier.default);
_define_property(StatementAgainstCombinatorUnifier, "maps", [
    {
        nodeQueryA: statementNodeQuery,
        nodeQueryB: metaTypeNodeQuery,
        unify: function(statementNodeA, metaTypeNodeB, localContext) {
            var metaTypeNode = metaTypeNodeB, statementNode = statementNodeA, statementUnifiedAgainstMetaType = (0, _statementAgainstMetaType.default)(statementNode, metaTypeNode, localContext);
            return statementUnifiedAgainstMetaType;
        }
    },
    {
        nodeQueryA: termNodeQuery,
        nodeQueryB: typeNodeQuery,
        unify: function(termNodeA, typeNodeB, localContext) {
            var termNode = termNodeA, typeNode = typeNodeB, termUnifiedAgainstType = (0, _termAgainstType.default)(termNode, typeNode, localContext);
            return termUnifiedAgainstType;
        }
    }
]);
var statementAgainstCombinatorUnifier = new StatementAgainstCombinatorUnifier();
var _default = statementAgainstCombinatorUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL3N0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVW5pZmllciBmcm9tIFwiLi4vdW5pZmllclwiO1xuaW1wb3J0IHVuaWZ5VGVybUFnYWluc3RUeXBlIGZyb20gXCIuLi91bmlmeS90ZXJtQWdhaW5zdFR5cGVcIjtcbmltcG9ydCB1bmlmeVN0YXRlbWVudEFnYWluc3RNZXRhVHlwZSBmcm9tIFwiLi4vdW5pZnkvc3RhdGVtZW50QWdhaW5zdE1ldGFUeXBlXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtIVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZSFcIiksXG4gICAgICBtZXRhVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhVHlwZSFcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50IVwiKTtcblxuY2xhc3MgU3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JVbmlmaWVyIGV4dGVuZHMgVW5pZmllciB7XG4gIHVuaWZ5KHN0YXRlbWVudE5vZGUsIGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZEFnYWluc3RDb21iaW5hdG9yO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVW5pZmllZCA9IHRoaXMudW5pZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgbG9jYWxDb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0Q29tYmluYXRvciA9IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0Q29tYmluYXRvcjtcbiAgfTtcblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnlBOiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICBub2RlUXVlcnlCOiBtZXRhVHlwZU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAoc3RhdGVtZW50Tm9kZUEsIG1ldGFUeXBlTm9kZUIsIGxvY2FsQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhVHlwZU5vZGUgPSBtZXRhVHlwZU5vZGVCLCAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllZEFnYWluc3RNZXRhVHlwZSA9IHVuaWZ5U3RhdGVtZW50QWdhaW5zdE1ldGFUeXBlKHN0YXRlbWVudE5vZGUsIG1ldGFUeXBlTm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZEFnYWluc3RNZXRhVHlwZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeUE6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBub2RlUXVlcnlCOiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6ICh0ZXJtTm9kZUEsIHR5cGVOb2RlQiwgbG9jYWxDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybU5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgdHlwZU5vZGUgPSB0eXBlTm9kZUIsIC8vL1xuICAgICAgICAgICAgICB0ZXJtVW5pZmllZEFnYWluc3RUeXBlID0gdW5pZnlUZXJtQWdhaW5zdFR5cGUodGVybU5vZGUsIHR5cGVOb2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiB0ZXJtVW5pZmllZEFnYWluc3RUeXBlO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3Qgc3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JVbmlmaWVyID0gbmV3IFN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yVW5pZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBzdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvclVuaWZpZXI7XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJtZXRhVHlwZU5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsIlN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yVW5pZmllciIsInVuaWZ5Iiwic3RhdGVtZW50Tm9kZSIsImNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlIiwibG9jYWxDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllZEFnYWluc3RDb21iaW5hdG9yIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub25UZXJtaW5hbE5vZGVVbmlmaWVkIiwidW5pZnlOb25UZXJtaW5hbE5vZGUiLCJVbmlmaWVyIiwibWFwcyIsIm5vZGVRdWVyeUEiLCJub2RlUXVlcnlCIiwic3RhdGVtZW50Tm9kZUEiLCJtZXRhVHlwZU5vZGVCIiwibWV0YVR5cGVOb2RlIiwic3RhdGVtZW50VW5pZmllZEFnYWluc3RNZXRhVHlwZSIsInVuaWZ5U3RhdGVtZW50QWdhaW5zdE1ldGFUeXBlIiwidGVybU5vZGVBIiwidHlwZU5vZGVCIiwidGVybU5vZGUiLCJ0eXBlTm9kZSIsInRlcm1VbmlmaWVkQWdhaW5zdFR5cGUiLCJ1bmlmeVRlcm1BZ2FpbnN0VHlwZSIsInN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yVW5pZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBc0RBOzs7ZUFBQTs7OzhEQXBEb0I7c0VBQ2E7K0VBQ1M7cUJBRWhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsV0FDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQyxXQUMxQkUsb0JBQW9CRixJQUFBQSxnQkFBUyxFQUFDLGVBQzlCRyxxQkFBcUJILElBQUFBLGdCQUFTLEVBQUM7QUFFckMsSUFBQSxBQUFNSSxrREFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxhQUFhLEVBQUVDLHVCQUF1QixFQUFFQyxZQUFZO2dCQUN4RCxJQUFJQztnQkFFSixJQUFNQyxtQkFBbUJKLGVBQ25CSyxtQkFBbUJKLHlCQUNuQksseUJBQXlCLElBQUksQ0FBQ0Msb0JBQW9CLENBQUNILGtCQUFrQkMsa0JBQWtCSDtnQkFFN0ZDLG9DQUFvQ0csd0JBQXdCLEdBQUc7Z0JBRS9ELE9BQU9IO1lBQ1Q7OztXQVhJTDtFQUEwQ1UsZ0JBQU87QUFhckQsaUJBYklWLG1DQWFHVyxRQUFPO0lBQ1o7UUFDRUMsWUFBWWI7UUFDWmMsWUFBWWY7UUFDWkcsT0FBTyxTQUFDYSxnQkFBZ0JDLGVBQWVYO1lBQ3JDLElBQU1ZLGVBQWVELGVBQ2ZiLGdCQUFnQlksZ0JBQ2hCRyxrQ0FBa0NDLElBQUFBLGlDQUE2QixFQUFDaEIsZUFBZWMsY0FBY1o7WUFFbkcsT0FBT2E7UUFDVDtJQUNGO0lBQ0E7UUFDRUwsWUFBWWpCO1FBQ1prQixZQUFZaEI7UUFDWkksT0FBTyxTQUFDa0IsV0FBV0MsV0FBV2hCO1lBQzVCLElBQU1pQixXQUFXRixXQUNYRyxXQUFXRixXQUNYRyx5QkFBeUJDLElBQUFBLHdCQUFvQixFQUFDSCxVQUFVQyxVQUFVbEI7WUFFeEUsT0FBT21CO1FBQ1Q7SUFDRjtDQUNEO0FBR0gsSUFBTUUsb0NBQW9DLElBQUl6QjtJQUU5QyxXQUFleUIifQ==