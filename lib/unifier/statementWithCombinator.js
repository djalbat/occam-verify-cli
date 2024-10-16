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
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _unifier = /*#__PURE__*/ _interop_require_default(require("../unifier"));
var _query = require("../utilities/query");
var _name = require("../utilities/name");
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
            var unified;
            var Statement = _shim.default.Statement, MetaType = _shim.default.MetaType, metaTypeNode = metaTypeNodeB, statementNode = statementNodeA, metaType = MetaType.fromMetaTypeNode(metaTypeNode, localContext), statement = Statement.fromStatementNode(statementNode, localContext), statementVerifiedGivenType = statement.verifyGivenMetaType(metaType, assignments, stated, localContext);
            unified = statementVerifiedGivenType;
            return unified;
        }
    },
    {
        nodeQueryA: frameNodeQuery,
        nodeQueryB: metaTypeNodeQuery,
        unify: function(frameNodeA, metaTypeNodeB, assignments, stated, localContext) {
            var unified;
            var Frame = _shim.default.Frame, MetaType = _shim.default.MetaType, metaTypeNode = metaTypeNodeB, frameNode = frameNodeA, metaType = MetaType.fromMetaTypeNode(metaTypeNode, localContext), frame = Frame.fromFrameNode(frameNode, localContext), frameVerifiedGivenType = frame.verifyGivenMetaType(metaType, assignments, stated, localContext);
            unified = frameVerifiedGivenType;
            return unified;
        }
    },
    {
        nodeQueryA: termNodeQuery,
        nodeQueryB: typeNodeQuery,
        unify: function(termNodeA, typeNodeB, assignments, stated, localContext) {
            var unified = false;
            var Term = _shim.default.Term, typeNode = typeNodeB, typeName = (0, _name.typeNameFromTypeNode)(typeNode), type = localContext.findTypeByTypeName(typeName);
            if (type !== null) {
                var termNode = termNodeA, term = Term.fromTermNode(termNode, localContext), termVerifiedGivenType = term.verifyGivenType(type, localContext);
                if (termVerifiedGivenType) {
                    unified = true;
                }
            }
            return unified;
        }
    }
]);
var statementWithCombinatorUnifier = new StatementWithCombinatorUnifier();
var _default = statementWithCombinatorUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL3N0YXRlbWVudFdpdGhDb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFVuaWZpZXIgZnJvbSBcIi4uL3VuaWZpZXJcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25hbWVcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtIVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZSFcIiksXG4gICAgICBmcmFtZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9mcmFtZSFcIiksXG4gICAgICBtZXRhVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhVHlwZSFcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50IVwiKTtcblxuY2xhc3MgU3RhdGVtZW50V2l0aENvbWJpbmF0b3JVbmlmaWVyIGV4dGVuZHMgVW5pZmllciB7XG4gIHVuaWZ5KHN0YXRlbWVudE5vZGUsIGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZFdpdGhDb21iaW5hdG9yO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVW5pZmllZCA9IHRoaXMudW5pZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFVuaWZpZWRXaXRoQ29tYmluYXRvciA9IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWRXaXRoQ29tYmluYXRvcjtcbiAgfTtcblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnlBOiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICBub2RlUXVlcnlCOiBtZXRhVHlwZU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAoc3RhdGVtZW50Tm9kZUEsIG1ldGFUeXBlTm9kZUIsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgdW5pZmllZDtcblxuICAgICAgICBjb25zdCB7IFN0YXRlbWVudCwgTWV0YVR5cGUgfSA9IHNoaW0sXG4gICAgICAgICAgICAgIG1ldGFUeXBlTm9kZSA9IG1ldGFUeXBlTm9kZUIsIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUEsIC8vL1xuICAgICAgICAgICAgICBtZXRhVHlwZSA9IE1ldGFUeXBlLmZyb21NZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWRHaXZlblR5cGUgPSBzdGF0ZW1lbnQudmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICB1bmlmaWVkID0gc3RhdGVtZW50VmVyaWZpZWRHaXZlblR5cGU7XG5cbiAgICAgICAgcmV0dXJuIHVuaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnlBOiBmcmFtZU5vZGVRdWVyeSxcbiAgICAgIG5vZGVRdWVyeUI6IG1ldGFUeXBlTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6IChmcmFtZU5vZGVBLCBtZXRhVHlwZU5vZGVCLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHVuaWZpZWQ7XG5cbiAgICAgICAgY29uc3QgeyBGcmFtZSwgTWV0YVR5cGUgfSA9IHNoaW0sXG4gICAgICAgICAgICAgIG1ldGFUeXBlTm9kZSA9IG1ldGFUeXBlTm9kZUIsIC8vL1xuICAgICAgICAgICAgICBmcmFtZU5vZGUgPSBmcmFtZU5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgbWV0YVR5cGUgPSBNZXRhVHlwZS5mcm9tTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgICAgZnJhbWUgPSBGcmFtZS5mcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgICAgZnJhbWVWZXJpZmllZEdpdmVuVHlwZSA9IGZyYW1lLnZlcmlmeUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgdW5pZmllZCA9IGZyYW1lVmVyaWZpZWRHaXZlblR5cGU7XG5cbiAgICAgICAgcmV0dXJuIHVuaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnlBOiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgbm9kZVF1ZXJ5QjogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAodGVybU5vZGVBLCB0eXBlTm9kZUIsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgdW5pZmllZCA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHsgVGVybSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgdHlwZU5vZGUgPSB0eXBlTm9kZUIsIC8vL1xuICAgICAgICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgICAgICAgdHlwZSA9IGxvY2FsQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZUEsIC8vL1xuICAgICAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgICAgICB0ZXJtVmVyaWZpZWRHaXZlblR5cGUgPSB0ZXJtLnZlcmlmeUdpdmVuVHlwZSh0eXBlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHRlcm1WZXJpZmllZEdpdmVuVHlwZSkge1xuICAgICAgICAgICAgdW5pZmllZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuaWZpZWQ7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCBzdGF0ZW1lbnRXaXRoQ29tYmluYXRvclVuaWZpZXIgPSBuZXcgU3RhdGVtZW50V2l0aENvbWJpbmF0b3JVbmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRlbWVudFdpdGhDb21iaW5hdG9yVW5pZmllcjtcbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsImZyYW1lTm9kZVF1ZXJ5IiwibWV0YVR5cGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJTdGF0ZW1lbnRXaXRoQ29tYmluYXRvclVuaWZpZXIiLCJ1bmlmeSIsInN0YXRlbWVudE5vZGUiLCJjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwibG9jYWxDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllZFdpdGhDb21iaW5hdG9yIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub25UZXJtaW5hbE5vZGVVbmlmaWVkIiwidW5pZnlOb25UZXJtaW5hbE5vZGUiLCJVbmlmaWVyIiwibWFwcyIsIm5vZGVRdWVyeUEiLCJub2RlUXVlcnlCIiwic3RhdGVtZW50Tm9kZUEiLCJtZXRhVHlwZU5vZGVCIiwidW5pZmllZCIsIlN0YXRlbWVudCIsInNoaW0iLCJNZXRhVHlwZSIsIm1ldGFUeXBlTm9kZSIsIm1ldGFUeXBlIiwiZnJvbU1ldGFUeXBlTm9kZSIsInN0YXRlbWVudCIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50VmVyaWZpZWRHaXZlblR5cGUiLCJ2ZXJpZnlHaXZlbk1ldGFUeXBlIiwiZnJhbWVOb2RlQSIsIkZyYW1lIiwiZnJhbWVOb2RlIiwiZnJhbWUiLCJmcm9tRnJhbWVOb2RlIiwiZnJhbWVWZXJpZmllZEdpdmVuVHlwZSIsInRlcm1Ob2RlQSIsInR5cGVOb2RlQiIsIlRlcm0iLCJ0eXBlTm9kZSIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJ0eXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidGVybU5vZGUiLCJ0ZXJtIiwiZnJvbVRlcm1Ob2RlIiwidGVybVZlcmlmaWVkR2l2ZW5UeXBlIiwidmVyaWZ5R2l2ZW5UeXBlIiwic3RhdGVtZW50V2l0aENvbWJpbmF0b3JVbmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE2RkE7OztlQUFBOzs7MkRBM0ZpQjs4REFDRztxQkFFTTtvQkFDVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLFdBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVB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