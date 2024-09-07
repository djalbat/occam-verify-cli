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
                var nonTerminalNodeA = statementNode, nonTerminalNodeB = combinatorStatementNode, nonTerminalNodeUnified = this.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, function() {
                    var unifiedAhead = true;
                    return unifiedAhead;
                });
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
        unify: function(statementNodeA, metaTypeNodeB, localContext, unifyAhead) {
            var statementUnifiedAgainstMetaType = (0, _statementAgainstMetaType.default)(statementNodeA, metaTypeNodeB, localContext, unifyAhead);
            return statementUnifiedAgainstMetaType;
        }
    },
    {
        nodeQueryA: termNodeQuery,
        nodeQueryB: typeNodeQuery,
        unify: function(termNodeA, typeNodeB, localContext, unifyAhead) {
            var termUnifiedAgainstType = (0, _termAgainstType.default)(termNodeA, typeNodeB, localContext, unifyAhead);
            return termUnifiedAgainstType;
        }
    }
]);
var statementAgainstCombinatorUnifier = new StatementAgainstCombinatorUnifier();
var _default = statementAgainstCombinatorUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL3N0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVW5pZmllciBmcm9tIFwiLi4vdW5pZmllclwiO1xuaW1wb3J0IHVuaWZ5VGVybUFnYWluc3RUeXBlIGZyb20gXCIuLi91bmlmeS90ZXJtQWdhaW5zdFR5cGVcIjtcbmltcG9ydCB1bmlmeVN0YXRlbWVudEFnYWluc3RNZXRhVHlwZSBmcm9tIFwiLi4vdW5pZnkvc3RhdGVtZW50QWdhaW5zdE1ldGFUeXBlXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtIVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZSFcIiksXG4gICAgICBtZXRhVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhVHlwZSFcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50IVwiKTtcblxuY2xhc3MgU3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JVbmlmaWVyIGV4dGVuZHMgVW5pZmllciB7XG4gIHVuaWZ5KHN0YXRlbWVudE5vZGUsIGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZEFnYWluc3RDb21iaW5hdG9yO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVW5pZmllZCA9IHRoaXMudW5pZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1bmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gdW5pZmllZEFoZWFkO1xuICAgICAgICAgIH0pO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZEFnYWluc3RDb21iaW5hdG9yID0gbm9uVGVybWluYWxOb2RlVW5pZmllZDsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZEFnYWluc3RDb21iaW5hdG9yO1xuICB9O1xuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIG5vZGVRdWVyeUE6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIG5vZGVRdWVyeUI6IG1ldGFUeXBlTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6IChzdGF0ZW1lbnROb2RlQSwgbWV0YVR5cGVOb2RlQiwgbG9jYWxDb250ZXh0LCB1bmlmeUFoZWFkKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0TWV0YVR5cGUgPSB1bmlmeVN0YXRlbWVudEFnYWluc3RNZXRhVHlwZShzdGF0ZW1lbnROb2RlQSwgbWV0YVR5cGVOb2RlQiwgbG9jYWxDb250ZXh0LCB1bmlmeUFoZWFkKTtcblxuICAgICAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZEFnYWluc3RNZXRhVHlwZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeUE6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBub2RlUXVlcnlCOiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6ICh0ZXJtTm9kZUEsIHR5cGVOb2RlQiwgbG9jYWxDb250ZXh0LCB1bmlmeUFoZWFkKSA9PiB7XG4gICAgICAgIGNvbnN0IHRlcm1VbmlmaWVkQWdhaW5zdFR5cGUgPSB1bmlmeVRlcm1BZ2FpbnN0VHlwZSh0ZXJtTm9kZUEsIHR5cGVOb2RlQiwgbG9jYWxDb250ZXh0LCB1bmlmeUFoZWFkKTtcblxuICAgICAgICByZXR1cm4gdGVybVVuaWZpZWRBZ2FpbnN0VHlwZTtcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IHN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yVW5pZmllciA9IG5ldyBTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvclVuaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JVbmlmaWVyO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwibWV0YVR5cGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvclVuaWZpZXIiLCJ1bmlmeSIsInN0YXRlbWVudE5vZGUiLCJjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSIsImxvY2FsQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0Q29tYmluYXRvciIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwibm9uVGVybWluYWxOb2RlVW5pZmllZCIsInVuaWZ5Tm9uVGVybWluYWxOb2RlIiwidW5pZmllZEFoZWFkIiwiVW5pZmllciIsIm1hcHMiLCJub2RlUXVlcnlBIiwibm9kZVF1ZXJ5QiIsInN0YXRlbWVudE5vZGVBIiwibWV0YVR5cGVOb2RlQiIsInVuaWZ5QWhlYWQiLCJzdGF0ZW1lbnRVbmlmaWVkQWdhaW5zdE1ldGFUeXBlIiwidW5pZnlTdGF0ZW1lbnRBZ2FpbnN0TWV0YVR5cGUiLCJ0ZXJtTm9kZUEiLCJ0eXBlTm9kZUIiLCJ0ZXJtVW5pZmllZEFnYWluc3RUeXBlIiwidW5pZnlUZXJtQWdhaW5zdFR5cGUiLCJzdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvclVuaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNEQTs7O2VBQUE7Ozs4REFwRG9CO3NFQUNhOytFQUNTO3FCQUVoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLFdBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUMsV0FDMUJFLG9CQUFvQkYsSUFBQUEsZ0JBQVMsRUFBQyxlQUM5QkcscUJBQXFCSCxJQUFBQSxnQkFBUyxFQUFDO0FBRXJDLElBQUEsQUFBTUksa0RBQUQsQUFBTDtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxhQUFhLEVBQUVDLHVCQUF1QixFQUFFQyxZQUFZO2dCQUN4RCxJQUFJQztnQkFFSixJQUFNQyxtQkFBbUJKLGVBQ25CSyxtQkFBbUJKLHlCQUNuQksseUJBQXlCLElBQUksQ0FBQ0Msb0JBQW9CLENBQUNILGtCQUFrQkMsa0JBQWtCSCxjQUFjO29CQUNuRyxJQUFNTSxlQUFlO29CQUVyQixPQUFPQTtnQkFDVDtnQkFFTkwsb0NBQW9DRyx3QkFBd0IsR0FBRztnQkFFL0QsT0FBT0g7WUFDVDs7O1dBZklMO0VBQTBDVyxnQkFBTztBQWlCckQsaUJBakJJWCxtQ0FpQkdZLFFBQU87SUFDWjtRQUNFQyxZQUFZZDtRQUNaZSxZQUFZaEI7UUFDWkcsT0FBTyxTQUFDYyxnQkFBZ0JDLGVBQWVaLGNBQWNhO1lBQ25ELElBQU1DLGtDQUFrQ0MsSUFBQUEsaUNBQTZCLEVBQUNKLGdCQUFnQkMsZUFBZVosY0FBY2E7WUFFbkgsT0FBT0M7UUFDVDtJQUNGO0lBQ0E7UUFDRUwsWUFBWWxCO1FBQ1ptQixZQUFZakI7UUFDWkksT0FBTyxTQUFDbUIsV0FBV0MsV0FBV2pCLGNBQWNhO1lBQzFDLElBQU1LLHlCQUF5QkMsSUFBQUEsd0JBQW9CLEVBQUNILFdBQVdDLFdBQVdqQixjQUFjYTtZQUV4RixPQUFPSztRQUNUO0lBQ0Y7Q0FDRDtBQUdILElBQU1FLG9DQUFvQyxJQUFJeEI7SUFFOUMsV0FBZXdCIn0=