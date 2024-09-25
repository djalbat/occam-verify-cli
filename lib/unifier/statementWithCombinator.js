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
var _frameWithMetaType = /*#__PURE__*/ _interop_require_default(require("../unify/frameWithMetaType"));
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
var termNodeQuery = (0, _query.nodeQuery)("/term!"), typeNodeQuery = (0, _query.nodeQuery)("/type!"), frameNodeQuery = (0, _query.nodeQuery)("/frame!"), metaTypeNodeQuery = (0, _query.nodeQuery)("/metaType!"), statementNodeQuery = (0, _query.nodeQuery)("/statement!");
var StatementWithCombinatorUnifier = /*#__PURE__*/ function(Unifier) {
    _inherits(StatementWithCombinatorUnifier, Unifier);
    function StatementWithCombinatorUnifier() {
        _class_call_check(this, StatementWithCombinatorUnifier);
        return _call_super(this, StatementWithCombinatorUnifier, arguments);
    }
    _create_class(StatementWithCombinatorUnifier, [
        {
            key: "unify",
            value: function unify(statementNode, combinatorStatementNode, assignments, stated, localContext) {
                var statementUnifiedWithCombinator;
                var nonTerminalNodeA = statementNode, nonTerminalNodeB = combinatorStatementNode, nonTerminalNodeUnified = this.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, assignments, stated, localContext);
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
        unify: function(statementNodeA, metaTypeNodeB, assignments, stated, localContext) {
            var metaTypeNode = metaTypeNodeB, statementNode = statementNodeA, statementUnifiedWithMetaType = (0, _statementWithMetaType.default)(statementNode, metaTypeNode, assignments, stated, localContext);
            return statementUnifiedWithMetaType;
        }
    },
    {
        nodeQueryA: frameNodeQuery,
        nodeQueryB: metaTypeNodeQuery,
        unify: function(frameNodeA, metaTypeNodeB, assignments, stated, localContext) {
            var metaTypeNode = metaTypeNodeB, frameNode = frameNodeA, frameUnifiedWithMetaType = (0, _frameWithMetaType.default)(frameNode, metaTypeNode, assignments, stated, localContext);
            return frameUnifiedWithMetaType;
        }
    },
    {
        nodeQueryA: termNodeQuery,
        nodeQueryB: typeNodeQuery,
        unify: function(termNodeA, typeNodeB, assignments, stated, localContext) {
            var termNode = termNodeA, typeNode = typeNodeB, termUnifiedWithType = (0, _termWithType.default)(termNode, typeNode, localContext);
            return termUnifiedWithType;
        }
    }
]);
var statementWithCombinatorUnifier = new StatementWithCombinatorUnifier();
var _default = statementWithCombinatorUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL3N0YXRlbWVudFdpdGhDb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVW5pZmllciBmcm9tIFwiLi4vdW5pZmllclwiO1xuaW1wb3J0IHVuaWZ5VGVybVdpdGhUeXBlIGZyb20gXCIuLi91bmlmeS90ZXJtV2l0aFR5cGVcIjtcbmltcG9ydCB1bmlmeUZyYW1lV2l0aE1ldGFUeXBlIGZyb20gXCIuLi91bmlmeS9mcmFtZVdpdGhNZXRhVHlwZVwiO1xuaW1wb3J0IHVuaWZ5U3RhdGVtZW50V2l0aE1ldGFUeXBlIGZyb20gXCIuLi91bmlmeS9zdGF0ZW1lbnRXaXRoTWV0YVR5cGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0hXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlIVwiKSxcbiAgICAgIGZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lIVwiKSxcbiAgICAgIG1ldGFUeXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFUeXBlIVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQhXCIpO1xuXG5jbGFzcyBTdGF0ZW1lbnRXaXRoQ29tYmluYXRvclVuaWZpZXIgZXh0ZW5kcyBVbmlmaWVyIHtcbiAgdW5pZnkoc3RhdGVtZW50Tm9kZSwgY29tYmluYXRvclN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbWJpbmF0b3I7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVVbmlmaWVkID0gdGhpcy51bmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZFdpdGhDb21iaW5hdG9yID0gbm9uVGVybWluYWxOb2RlVW5pZmllZDsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZFdpdGhDb21iaW5hdG9yO1xuICB9O1xuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIG5vZGVRdWVyeUE6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIG5vZGVRdWVyeUI6IG1ldGFUeXBlTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6IChzdGF0ZW1lbnROb2RlQSwgbWV0YVR5cGVOb2RlQiwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGFUeXBlTm9kZSA9IG1ldGFUeXBlTm9kZUIsIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUEsIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkV2l0aE1ldGFUeXBlID0gdW5pZnlTdGF0ZW1lbnRXaXRoTWV0YVR5cGUoc3RhdGVtZW50Tm9kZSwgbWV0YVR5cGVOb2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkV2l0aE1ldGFUeXBlO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5QTogZnJhbWVOb2RlUXVlcnksXG4gICAgICBub2RlUXVlcnlCOiBtZXRhVHlwZU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAoZnJhbWVOb2RlQSwgbWV0YVR5cGVOb2RlQiwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGFUeXBlTm9kZSA9IG1ldGFUeXBlTm9kZUIsIC8vL1xuICAgICAgICAgICAgICBmcmFtZU5vZGUgPSBmcmFtZU5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgZnJhbWVVbmlmaWVkV2l0aE1ldGFUeXBlID0gdW5pZnlGcmFtZVdpdGhNZXRhVHlwZShmcmFtZU5vZGUsIG1ldGFUeXBlTm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gZnJhbWVVbmlmaWVkV2l0aE1ldGFUeXBlO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5QTogdGVybU5vZGVRdWVyeSxcbiAgICAgIG5vZGVRdWVyeUI6IHR5cGVOb2RlUXVlcnksXG4gICAgICB1bmlmeTogKHRlcm1Ob2RlQSwgdHlwZU5vZGVCLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZUEsIC8vL1xuICAgICAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlQiwgLy8vXG4gICAgICAgICAgICAgIHRlcm1VbmlmaWVkV2l0aFR5cGUgPSB1bmlmeVRlcm1XaXRoVHlwZSh0ZXJtTm9kZSwgdHlwZU5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIHRlcm1VbmlmaWVkV2l0aFR5cGU7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCBzdGF0ZW1lbnRXaXRoQ29tYmluYXRvclVuaWZpZXIgPSBuZXcgU3RhdGVtZW50V2l0aENvbWJpbmF0b3JVbmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRlbWVudFdpdGhDb21iaW5hdG9yVW5pZmllcjtcbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsImZyYW1lTm9kZVF1ZXJ5IiwibWV0YVR5cGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJTdGF0ZW1lbnRXaXRoQ29tYmluYXRvclVuaWZpZXIiLCJ1bmlmeSIsInN0YXRlbWVudE5vZGUiLCJjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwibG9jYWxDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllZFdpdGhDb21iaW5hdG9yIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub25UZXJtaW5hbE5vZGVVbmlmaWVkIiwidW5pZnlOb25UZXJtaW5hbE5vZGUiLCJVbmlmaWVyIiwibWFwcyIsIm5vZGVRdWVyeUEiLCJub2RlUXVlcnlCIiwic3RhdGVtZW50Tm9kZUEiLCJtZXRhVHlwZU5vZGVCIiwibWV0YVR5cGVOb2RlIiwic3RhdGVtZW50VW5pZmllZFdpdGhNZXRhVHlwZSIsInVuaWZ5U3RhdGVtZW50V2l0aE1ldGFUeXBlIiwiZnJhbWVOb2RlQSIsImZyYW1lTm9kZSIsImZyYW1lVW5pZmllZFdpdGhNZXRhVHlwZSIsInVuaWZ5RnJhbWVXaXRoTWV0YVR5cGUiLCJ0ZXJtTm9kZUEiLCJ0eXBlTm9kZUIiLCJ0ZXJtTm9kZSIsInR5cGVOb2RlIiwidGVybVVuaWZpZWRXaXRoVHlwZSIsInVuaWZ5VGVybVdpdGhUeXBlIiwic3RhdGVtZW50V2l0aENvbWJpbmF0b3JVbmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtRUE7OztlQUFBOzs7OERBakVvQjttRUFDVTt3RUFDSzs0RUFDSTtxQkFFYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLFdBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUMsV0FDMUJFLGlCQUFpQkYsSUFBQUEsZ0JBQVMsRUFBQyxZQUMzQkcsb0JBQW9CSCxJQUFBQSxnQkFBUyxFQUFDLGVBQzlCSSxxQkFBcUJKLElBQUFBLGdCQUFTLEVBQUM7QUFFckMsSUFBQSxBQUFNSywrQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxhQUFhLEVBQUVDLHVCQUF1QixFQUFFQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsWUFBWTtnQkFDN0UsSUFBSUM7Z0JBRUosSUFBTUMsbUJBQW1CTixlQUNuQk8sbUJBQW1CTix5QkFDbkJPLHlCQUF5QixJQUFJLENBQUNDLG9CQUFvQixDQUFDSCxrQkFBa0JDLGtCQUFrQkwsYUFBYUMsUUFBUUM7Z0JBRWxIQyxpQ0FBaUNHLHdCQUF3QixHQUFHO2dCQUU1RCxPQUFPSDtZQUNUOzs7V0FYSVA7RUFBdUNZLGdCQUFPO0FBYWxELGlCQWJJWixnQ0FhR2EsUUFBTztJQUNaO1FBQ0VDLFlBQVlmO1FBQ1pnQixZQUFZakI7UUFDWkcsT0FBTyxTQUFDZSxnQkFBZ0JDLGVBQWViLGFBQWFDLFFBQVFDO1lBQzFELElBQU1ZLGVBQWVELGVBQ2ZmLGdCQUFnQmMsZ0JBQ2hCRywrQkFBK0JDLElBQUFBLDhCQUEwQixFQUFDbEIsZUFBZWdCLGNBQWNkLGFBQWFDLFFBQVFDO1lBRWxILE9BQU9hO1FBQ1Q7SUFDRjtJQUNBO1FBQ0VMLFlBQVlqQjtRQUNaa0IsWUFBWWpCO1FBQ1pHLE9BQU8sU0FBQ29CLFlBQVlKLGVBQWViLGFBQWFDLFFBQVFDO1lBQ3RELElBQU1ZLGVBQWVELGVBQ2ZLLFlBQVlELFlBQ1pFLDJCQUEyQkMsSUFBQUEsMEJBQXNCLEVBQUNGLFdBQVdKLGNBQWNkLGFBQWFDLFFBQVFDO1lBRXRHLE9BQU9pQjtRQUNUO0lBQ0Y7SUFDQTtRQUNFVCxZQUFZcEI7UUFDWnFCLFlBQVluQjtRQUNaSyxPQUFPLFNBQUN3QixXQUFXQyxXQUFXdEIsYUFBYUMsUUFBUUM7WUFDakQsSUFBTXFCLFdBQVdGLFdBQ1hHLFdBQVdGLFdBQ1hHLHNCQUFzQkMsSUFBQUEscUJBQWlCLEVBQUNILFVBQVVDLFVBQVV0QjtZQUVsRSxPQUFPdUI7UUFDVDtJQUNGO0NBQ0Q7QUFHSCxJQUFNRSxpQ0FBaUMsSUFBSS9CO0lBRTNDLFdBQWUrQiJ9