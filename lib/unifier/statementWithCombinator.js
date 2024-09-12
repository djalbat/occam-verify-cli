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
var _termWithType = /*#__PURE__*/ _interop_require_default(require("../unify/termWithType"));
var _statementWithMetaType = /*#__PURE__*/ _interop_require_default(require("../unify/statementWithMetaType"));
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
var StatementWithCombinatorUnifier = /*#__PURE__*/ function(Unifier) {
    _inherits(StatementWithCombinatorUnifier, Unifier);
    function StatementWithCombinatorUnifier() {
        _class_call_check(this, StatementWithCombinatorUnifier);
        return _call_super(this, StatementWithCombinatorUnifier, arguments);
    }
    _create_class(StatementWithCombinatorUnifier, [
        {
            key: "unify",
            value: function unify(statementNode, combinatorStatementNode, assignments, derived, localContext) {
                var statementUnifiedWithCombinator;
                var nonTerminalNodeA = statementNode, nonTerminalNodeB = combinatorStatementNode, nonTerminalNodeUnified = this.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, assignments, derived, localContext);
                statementUnifiedWithCombinator = nonTerminalNodeUnified; ///
                return statementUnifiedWithCombinator;
            }
        }
    ]);
    return StatementWithCombinatorUnifier;
}(_unifier.default);
_define_property(StatementWithCombinatorUnifier, "maps", [
    {
        nodeQueryA: statementNodeQuery,
        nodeQueryB: metaTypeNodeQuery,
        unify: function(statementNodeA, metaTypeNodeB, assignments, derived, localContext) {
            var metaTypeNode = metaTypeNodeB, statementNode = statementNodeA, statementUnifiedWithMetaType = (0, _statementWithMetaType.default)(statementNode, metaTypeNode, assignments, derived, localContext);
            return statementUnifiedWithMetaType;
        }
    },
    {
        nodeQueryA: termNodeQuery,
        nodeQueryB: typeNodeQuery,
        unify: function(termNodeA, typeNodeB, assignments, derived, localContext) {
            var termNode = termNodeA, typeNode = typeNodeB, termUnifiedWithType = (0, _termWithType.default)(termNode, typeNode, localContext);
            return termUnifiedWithType;
        }
    }
]);
var statementWithCombinatorUnifier = new StatementWithCombinatorUnifier();
var _default = statementWithCombinatorUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL3N0YXRlbWVudFdpdGhDb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVW5pZmllciBmcm9tIFwiLi4vdW5pZmllclwiO1xuaW1wb3J0IHVuaWZ5VGVybVdpdGhUeXBlIGZyb20gXCIuLi91bmlmeS90ZXJtV2l0aFR5cGVcIjtcbmltcG9ydCB1bmlmeVN0YXRlbWVudFdpdGhNZXRhVHlwZSBmcm9tIFwiLi4vdW5pZnkvc3RhdGVtZW50V2l0aE1ldGFUeXBlXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtIVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZSFcIiksXG4gICAgICBtZXRhVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhVHlwZSFcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50IVwiKTtcblxuY2xhc3MgU3RhdGVtZW50V2l0aENvbWJpbmF0b3JVbmlmaWVyIGV4dGVuZHMgVW5pZmllciB7XG4gIHVuaWZ5KHN0YXRlbWVudE5vZGUsIGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWRXaXRoQ29tYmluYXRvcjtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gY29tYmluYXRvclN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPSB0aGlzLnVuaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZFdpdGhDb21iaW5hdG9yID0gbm9uVGVybWluYWxOb2RlVW5pZmllZDsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZFdpdGhDb21iaW5hdG9yO1xuICB9O1xuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIG5vZGVRdWVyeUE6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIG5vZGVRdWVyeUI6IG1ldGFUeXBlTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6IChzdGF0ZW1lbnROb2RlQSwgbWV0YVR5cGVOb2RlQiwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhVHlwZU5vZGUgPSBtZXRhVHlwZU5vZGVCLCAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllZFdpdGhNZXRhVHlwZSA9IHVuaWZ5U3RhdGVtZW50V2l0aE1ldGFUeXBlKHN0YXRlbWVudE5vZGUsIG1ldGFUeXBlTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWRXaXRoTWV0YVR5cGU7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnlBOiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgbm9kZVF1ZXJ5QjogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAodGVybU5vZGVBLCB0eXBlTm9kZUIsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZUEsIC8vL1xuICAgICAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlQiwgLy8vXG4gICAgICAgICAgICAgIHRlcm1VbmlmaWVkV2l0aFR5cGUgPSB1bmlmeVRlcm1XaXRoVHlwZSh0ZXJtTm9kZSwgdHlwZU5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIHRlcm1VbmlmaWVkV2l0aFR5cGU7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCBzdGF0ZW1lbnRXaXRoQ29tYmluYXRvclVuaWZpZXIgPSBuZXcgU3RhdGVtZW50V2l0aENvbWJpbmF0b3JVbmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRlbWVudFdpdGhDb21iaW5hdG9yVW5pZmllcjtcbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsIm1ldGFUeXBlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwiU3RhdGVtZW50V2l0aENvbWJpbmF0b3JVbmlmaWVyIiwidW5pZnkiLCJzdGF0ZW1lbnROb2RlIiwiY29tYmluYXRvclN0YXRlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsImRlcml2ZWQiLCJsb2NhbENvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbWJpbmF0b3IiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsIm5vblRlcm1pbmFsTm9kZVVuaWZpZWQiLCJ1bmlmeU5vblRlcm1pbmFsTm9kZSIsIlVuaWZpZXIiLCJtYXBzIiwibm9kZVF1ZXJ5QSIsIm5vZGVRdWVyeUIiLCJzdGF0ZW1lbnROb2RlQSIsIm1ldGFUeXBlTm9kZUIiLCJtZXRhVHlwZU5vZGUiLCJzdGF0ZW1lbnRVbmlmaWVkV2l0aE1ldGFUeXBlIiwidW5pZnlTdGF0ZW1lbnRXaXRoTWV0YVR5cGUiLCJ0ZXJtTm9kZUEiLCJ0eXBlTm9kZUIiLCJ0ZXJtTm9kZSIsInR5cGVOb2RlIiwidGVybVVuaWZpZWRXaXRoVHlwZSIsInVuaWZ5VGVybVdpdGhUeXBlIiwic3RhdGVtZW50V2l0aENvbWJpbmF0b3JVbmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzREE7OztlQUFBOzs7OERBcERvQjttRUFDVTs0RUFDUztxQkFFYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLFdBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUMsV0FDMUJFLG9CQUFvQkYsSUFBQUEsZ0JBQVMsRUFBQyxlQUM5QkcscUJBQXFCSCxJQUFBQSxnQkFBUyxFQUFDO0FBRXJDLElBQUEsQUFBTUksK0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsYUFBYSxFQUFFQyx1QkFBdUIsRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLFlBQVk7Z0JBQzlFLElBQUlDO2dCQUVKLElBQU1DLG1CQUFtQk4sZUFDbkJPLG1CQUFtQk4seUJBQ25CTyx5QkFBeUIsSUFBSSxDQUFDQyxvQkFBb0IsQ0FBQ0gsa0JBQWtCQyxrQkFBa0JMLGFBQWFDLFNBQVNDO2dCQUVuSEMsaUNBQWlDRyx3QkFBd0IsR0FBRztnQkFFNUQsT0FBT0g7WUFDVDs7O1dBWElQO0VBQXVDWSxnQkFBTztBQWFsRCxpQkFiSVosZ0NBYUdhLFFBQU87SUFDWjtRQUNFQyxZQUFZZjtRQUNaZ0IsWUFBWWpCO1FBQ1pHLE9BQU8sU0FBQ2UsZ0JBQWdCQyxlQUFlYixhQUFhQyxTQUFTQztZQUMzRCxJQUFNWSxlQUFlRCxlQUNmZixnQkFBZ0JjLGdCQUNoQkcsK0JBQStCQyxJQUFBQSw4QkFBMEIsRUFBQ2xCLGVBQWVnQixjQUFjZCxhQUFhQyxTQUFTQztZQUVuSCxPQUFPYTtRQUNUO0lBQ0Y7SUFDQTtRQUNFTCxZQUFZbkI7UUFDWm9CLFlBQVlsQjtRQUNaSSxPQUFPLFNBQUNvQixXQUFXQyxXQUFXbEIsYUFBYUMsU0FBU0M7WUFDbEQsSUFBTWlCLFdBQVdGLFdBQ1hHLFdBQVdGLFdBQ1hHLHNCQUFzQkMsSUFBQUEscUJBQWlCLEVBQUNILFVBQVVDLFVBQVVsQjtZQUVsRSxPQUFPbUI7UUFDVDtJQUNGO0NBQ0Q7QUFHSCxJQUFNRSxpQ0FBaUMsSUFBSTNCO0lBRTNDLFdBQWUyQiJ9