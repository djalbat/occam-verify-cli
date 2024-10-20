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
var termNodeQuery = (0, _query.nodeQuery)("/term"), typeNodeQuery = (0, _query.nodeQuery)("/type"), frameNodeQuery = (0, _query.nodeQuery)("/frame"), metaTypeNodeQuery = (0, _query.nodeQuery)("/metaType"), statementNodeQuery = (0, _query.nodeQuery)("/statement");
var StatementWithCombinatorUnifier = /*#__PURE__*/ function(Unifier) {
    _inherits(StatementWithCombinatorUnifier, Unifier);
    function StatementWithCombinatorUnifier() {
        _class_call_check(this, StatementWithCombinatorUnifier);
        return _call_super(this, StatementWithCombinatorUnifier, arguments);
    }
    _create_class(StatementWithCombinatorUnifier, [
        {
            key: "unify",
            value: function unify(combinatorStatementNode, statementNode, assignments, stated, localContext) {
                var statementUnifiedWithCombinator;
                var nonTerminalNodeA = combinatorStatementNode, nonTerminalNodeB = statementNode, nonTerminalNodeUnified = this.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, assignments, stated, localContext);
                statementUnifiedWithCombinator = nonTerminalNodeUnified; ///
                return statementUnifiedWithCombinator;
            }
        }
    ]);
    return StatementWithCombinatorUnifier;
}(_unifier.default);
_define_property(StatementWithCombinatorUnifier, "maps", [
    {
        nodeQueryA: metaTypeNodeQuery,
        nodeQueryB: statementNodeQuery,
        unify: function(metaTypeNodeA, statementNodeB, assignments, stated, localContext) {
            var unified;
            var Statement = _shim.default.Statement, MetaType = _shim.default.MetaType, metaTypeNode = metaTypeNodeA, statementNode = statementNodeB, metaType = MetaType.fromMetaTypeNode(metaTypeNode, localContext), statement = Statement.fromStatementNode(statementNode, localContext), statementVerifiedGivenType = statement.verifyGivenMetaType(metaType, assignments, stated, localContext);
            unified = statementVerifiedGivenType;
            return unified;
        }
    },
    {
        nodeQueryA: metaTypeNodeQuery,
        nodeQueryB: frameNodeQuery,
        unify: function(metaTypeNodeA, frameNodeB, assignments, stated, localContext) {
            var unified;
            var Frame = _shim.default.Frame, MetaType = _shim.default.MetaType, metaTypeNode = metaTypeNodeA, frameNode = frameNodeB, metaType = MetaType.fromMetaTypeNode(metaTypeNode, localContext), frame = Frame.fromFrameNode(frameNode, localContext), frameVerifiedGivenType = frame.verifyGivenMetaType(metaType, assignments, stated, localContext);
            unified = frameVerifiedGivenType;
            return unified;
        }
    },
    {
        nodeQueryA: typeNodeQuery,
        nodeQueryB: termNodeQuery,
        unify: function(typeNodeA, termNodeB, assignments, stated, localContext) {
            var unified = false;
            var Term = _shim.default.Term, typeNode = typeNodeA, typeName = (0, _name.typeNameFromTypeNode)(typeNode), type = localContext.findTypeByTypeName(typeName);
            if (type !== null) {
                var termNode = termNodeB, term = Term.fromTermNode(termNode, localContext), termVerifiedGivenType = term.verifyGivenType(type, localContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL3N0YXRlbWVudFdpdGhDb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFVuaWZpZXIgZnJvbSBcIi4uL3VuaWZpZXJcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25hbWVcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlXCIpLFxuICAgICAgZnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWVcIiksXG4gICAgICBtZXRhVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhVHlwZVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnRcIik7XG5cbmNsYXNzIFN0YXRlbWVudFdpdGhDb21iaW5hdG9yVW5pZmllciBleHRlbmRzIFVuaWZpZXIge1xuICB1bmlmeShjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSwgc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWRXaXRoQ29tYmluYXRvcjtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPSB0aGlzLnVuaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbWJpbmF0b3IgPSBub25UZXJtaW5hbE5vZGVVbmlmaWVkOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbWJpbmF0b3I7XG4gIH07XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5QTogbWV0YVR5cGVOb2RlUXVlcnksXG4gICAgICBub2RlUXVlcnlCOiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICB1bmlmeTogKG1ldGFUeXBlTm9kZUEsIHN0YXRlbWVudE5vZGVCLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHVuaWZpZWQ7XG5cbiAgICAgICAgY29uc3QgeyBTdGF0ZW1lbnQsIE1ldGFUeXBlIH0gPSBzaGltLFxuICAgICAgICAgICAgICBtZXRhVHlwZU5vZGUgPSBtZXRhVHlwZU5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVCLCAvLy9cbiAgICAgICAgICAgICAgbWV0YVR5cGUgPSBNZXRhVHlwZS5mcm9tTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkR2l2ZW5UeXBlID0gc3RhdGVtZW50LnZlcmlmeUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgdW5pZmllZCA9IHN0YXRlbWVudFZlcmlmaWVkR2l2ZW5UeXBlO1xuXG4gICAgICAgIHJldHVybiB1bmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5QTogbWV0YVR5cGVOb2RlUXVlcnksXG4gICAgICBub2RlUXVlcnlCOiBmcmFtZU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAobWV0YVR5cGVOb2RlQSwgZnJhbWVOb2RlQiwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCB1bmlmaWVkO1xuXG4gICAgICAgIGNvbnN0IHsgRnJhbWUsIE1ldGFUeXBlIH0gPSBzaGltLFxuICAgICAgICAgICAgICBtZXRhVHlwZU5vZGUgPSBtZXRhVHlwZU5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgZnJhbWVOb2RlID0gZnJhbWVOb2RlQiwgLy8vXG4gICAgICAgICAgICAgIG1ldGFUeXBlID0gTWV0YVR5cGUuZnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICAgIGZyYW1lID0gRnJhbWUuZnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICAgIGZyYW1lVmVyaWZpZWRHaXZlblR5cGUgPSBmcmFtZS52ZXJpZnlHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIHVuaWZpZWQgPSBmcmFtZVZlcmlmaWVkR2l2ZW5UeXBlO1xuXG4gICAgICAgIHJldHVybiB1bmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5QTogdHlwZU5vZGVRdWVyeSxcbiAgICAgIG5vZGVRdWVyeUI6IHRlcm1Ob2RlUXVlcnksXG4gICAgICB1bmlmeTogKHR5cGVOb2RlQSwgdGVybU5vZGVCLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHVuaWZpZWQgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB7IFRlcm0gfSA9IHNoaW0sXG4gICAgICAgICAgICAgIHR5cGVOb2RlID0gdHlwZU5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgICAgIHR5cGUgPSBsb2NhbENvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybU5vZGVCLCAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICAgICAgdGVybVZlcmlmaWVkR2l2ZW5UeXBlID0gdGVybS52ZXJpZnlHaXZlblR5cGUodHlwZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgIGlmICh0ZXJtVmVyaWZpZWRHaXZlblR5cGUpIHtcbiAgICAgICAgICAgIHVuaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmlmaWVkO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3Qgc3RhdGVtZW50V2l0aENvbWJpbmF0b3JVbmlmaWVyID0gbmV3IFN0YXRlbWVudFdpdGhDb21iaW5hdG9yVW5pZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBzdGF0ZW1lbnRXaXRoQ29tYmluYXRvclVuaWZpZXI7XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJmcmFtZU5vZGVRdWVyeSIsIm1ldGFUeXBlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwiU3RhdGVtZW50V2l0aENvbWJpbmF0b3JVbmlmaWVyIiwidW5pZnkiLCJjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImxvY2FsQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZWRXaXRoQ29tYmluYXRvciIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwibm9uVGVybWluYWxOb2RlVW5pZmllZCIsInVuaWZ5Tm9uVGVybWluYWxOb2RlIiwiVW5pZmllciIsIm1hcHMiLCJub2RlUXVlcnlBIiwibm9kZVF1ZXJ5QiIsIm1ldGFUeXBlTm9kZUEiLCJzdGF0ZW1lbnROb2RlQiIsInVuaWZpZWQiLCJTdGF0ZW1lbnQiLCJzaGltIiwiTWV0YVR5cGUiLCJtZXRhVHlwZU5vZGUiLCJtZXRhVHlwZSIsImZyb21NZXRhVHlwZU5vZGUiLCJzdGF0ZW1lbnQiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFZlcmlmaWVkR2l2ZW5UeXBlIiwidmVyaWZ5R2l2ZW5NZXRhVHlwZSIsImZyYW1lTm9kZUIiLCJGcmFtZSIsImZyYW1lTm9kZSIsImZyYW1lIiwiZnJvbUZyYW1lTm9kZSIsImZyYW1lVmVyaWZpZWRHaXZlblR5cGUiLCJ0eXBlTm9kZUEiLCJ0ZXJtTm9kZUIiLCJUZXJtIiwidHlwZU5vZGUiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwidHlwZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInRlcm1Ob2RlIiwidGVybSIsImZyb21UZXJtTm9kZSIsInRlcm1WZXJpZmllZEdpdmVuVHlwZSIsInZlcmlmeUdpdmVuVHlwZSIsInN0YXRlbWVudFdpdGhDb21iaW5hdG9yVW5pZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNkZBOzs7ZUFBQTs7OzJEQTNGaUI7OERBQ0c7cUJBRU07b0JBQ1c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJDLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxVQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDLFVB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