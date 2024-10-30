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
            value: function unify(combinatorStatementNode, statementNode, assignments, stated, generalContext, specificContext) {
                var statementUnifiedWithCombinator;
                var generalNonTerminalNode = combinatorStatementNode, specificNonTerminalNode = statementNode, nonTerminalNodeUnified = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, assignments, stated, generalContext, specificContext);
                statementUnifiedWithCombinator = nonTerminalNodeUnified; ///
                return statementUnifiedWithCombinator;
            }
        }
    ]);
    return StatementWithCombinatorUnifier;
}(_unifier.default);
_define_property(StatementWithCombinatorUnifier, "maps", [
    {
        generalNodeQuery: metaTypeNodeQuery,
        specificNodeQuery: statementNodeQuery,
        unify: function(generalMetaTypeNode, specificStatementNode, assignments, stated, generalContext, specificContext) {
            var unified;
            var Statement = _shim.default.Statement, MetaType = _shim.default.MetaType, metaTypeNode = generalMetaTypeNode, statementNode = specificStatementNode; ///
            var context;
            context = generalContext; ///
            var metaType = MetaType.fromMetaTypeNode(metaTypeNode, context);
            context = specificContext; ///
            var statement = Statement.fromStatementNode(statementNode, context), statementVerifiedGivenType = statement.verifyGivenMetaType(metaType, assignments, stated, context);
            unified = statementVerifiedGivenType;
            return unified;
        }
    },
    {
        generalNodeQuery: metaTypeNodeQuery,
        specificNodeQuery: frameNodeQuery,
        unify: function(generalMetaTypeNode, specificFrameNode, assignments, stated, generalContext, specificContext) {
            var unified;
            var Frame = _shim.default.Frame, MetaType = _shim.default.MetaType, metaTypeNode = generalMetaTypeNode, frameNode = specificFrameNode; ///
            var context;
            context = generalContext; ///
            var metaType = MetaType.fromMetaTypeNode(metaTypeNode, context);
            context = specificContext; ///
            var frame = Frame.fromFrameNode(frameNode, context), frameVerifiedGivenType = frame.verifyGivenMetaType(metaType, assignments, stated, context);
            unified = frameVerifiedGivenType;
            return unified;
        }
    },
    {
        generalNodeQuery: typeNodeQuery,
        specificNodeQuery: termNodeQuery,
        unify: function(generalTypeNode, specificTermNode, assignments, stated, generalContext, specificContext) {
            var unified = false;
            var Term = _shim.default.Term, typeNode = generalTypeNode, termNode = specificTermNode, typeName = (0, _name.typeNameFromTypeNode)(typeNode);
            var context;
            context = generalContext; ///
            var type = context.findTypeByTypeName(typeName);
            context = specificContext; ///
            var term = Term.fromTermNode(termNode, context), termVerifiedGivenType = term.verifyGivenType(type, generalContext, specificContext);
            if (termVerifiedGivenType) {
                unified = true;
            }
            return unified;
        }
    }
]);
var statementWithCombinatorUnifier = new StatementWithCombinatorUnifier();
var _default = statementWithCombinatorUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL3N0YXRlbWVudFdpdGhDb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFVuaWZpZXIgZnJvbSBcIi4uL3VuaWZpZXJcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25hbWVcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlXCIpLFxuICAgICAgZnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWVcIiksXG4gICAgICBtZXRhVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhVHlwZVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnRcIik7XG5cbmNsYXNzIFN0YXRlbWVudFdpdGhDb21iaW5hdG9yVW5pZmllciBleHRlbmRzIFVuaWZpZXIge1xuICB1bmlmeShjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSwgc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbWJpbmF0b3I7XG5cbiAgICBjb25zdCBnZW5lcmFsTm9uVGVybWluYWxOb2RlID0gY29tYmluYXRvclN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIHNwZWNpZmljTm9uVGVybWluYWxOb2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVW5pZmllZCA9IHRoaXMudW5pZnlOb25UZXJtaW5hbE5vZGUoZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSwgc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZFdpdGhDb21iaW5hdG9yID0gbm9uVGVybWluYWxOb2RlVW5pZmllZDsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZFdpdGhDb21iaW5hdG9yO1xuICB9O1xuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IG1ldGFUeXBlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAoZ2VuZXJhbE1ldGFUeXBlTm9kZSwgc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCB1bmlmaWVkO1xuXG4gICAgICAgIGNvbnN0IHsgU3RhdGVtZW50LCBNZXRhVHlwZSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgbWV0YVR5cGVOb2RlID0gZ2VuZXJhbE1ldGFUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzcGVjaWZpY1N0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgbWV0YVR5cGUgPSBNZXRhVHlwZS5mcm9tTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWRHaXZlblR5cGUgPSBzdGF0ZW1lbnQudmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgdW5pZmllZCA9IHN0YXRlbWVudFZlcmlmaWVkR2l2ZW5UeXBlO1xuXG4gICAgICAgIHJldHVybiB1bmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogbWV0YVR5cGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogZnJhbWVOb2RlUXVlcnksXG4gICAgICB1bmlmeTogKGdlbmVyYWxNZXRhVHlwZU5vZGUsIHNwZWNpZmljRnJhbWVOb2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCB1bmlmaWVkO1xuXG4gICAgICAgIGNvbnN0IHsgRnJhbWUsIE1ldGFUeXBlIH0gPSBzaGltLFxuICAgICAgICAgICAgICBtZXRhVHlwZU5vZGUgPSBnZW5lcmFsTWV0YVR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgZnJhbWVOb2RlID0gc3BlY2lmaWNGcmFtZU5vZGU7IC8vL1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgbWV0YVR5cGUgPSBNZXRhVHlwZS5mcm9tTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnN0IGZyYW1lID0gRnJhbWUuZnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBmcmFtZVZlcmlmaWVkR2l2ZW5UeXBlID0gZnJhbWUudmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgdW5pZmllZCA9IGZyYW1lVmVyaWZpZWRHaXZlblR5cGU7XG5cbiAgICAgICAgcmV0dXJuIHVuaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICB1bmlmeTogKGdlbmVyYWxUeXBlTm9kZSwgc3BlY2lmaWNUZXJtTm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgdW5pZmllZCA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHsgVGVybSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgdHlwZU5vZGUgPSBnZW5lcmFsVHlwZU5vZGUsIC8vL1xuICAgICAgICAgICAgICB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKTtcblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnN0IHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHRlcm1WZXJpZmllZEdpdmVuVHlwZSA9IHRlcm0udmVyaWZ5R2l2ZW5UeXBlKHR5cGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmICh0ZXJtVmVyaWZpZWRHaXZlblR5cGUpIHtcbiAgICAgICAgICB1bmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmlmaWVkO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3Qgc3RhdGVtZW50V2l0aENvbWJpbmF0b3JVbmlmaWVyID0gbmV3IFN0YXRlbWVudFdpdGhDb21iaW5hdG9yVW5pZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBzdGF0ZW1lbnRXaXRoQ29tYmluYXRvclVuaWZpZXI7XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJmcmFtZU5vZGVRdWVyeSIsIm1ldGFUeXBlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwiU3RhdGVtZW50V2l0aENvbWJpbmF0b3JVbmlmaWVyIiwidW5pZnkiLCJjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllZFdpdGhDb21iaW5hdG9yIiwiZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSIsInNwZWNpZmljTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlVW5pZmllZCIsInVuaWZ5Tm9uVGVybWluYWxOb2RlIiwiVW5pZmllciIsIm1hcHMiLCJnZW5lcmFsTm9kZVF1ZXJ5Iiwic3BlY2lmaWNOb2RlUXVlcnkiLCJnZW5lcmFsTWV0YVR5cGVOb2RlIiwic3BlY2lmaWNTdGF0ZW1lbnROb2RlIiwidW5pZmllZCIsIlN0YXRlbWVudCIsInNoaW0iLCJNZXRhVHlwZSIsIm1ldGFUeXBlTm9kZSIsImNvbnRleHQiLCJtZXRhVHlwZSIsImZyb21NZXRhVHlwZU5vZGUiLCJzdGF0ZW1lbnQiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFZlcmlmaWVkR2l2ZW5UeXBlIiwidmVyaWZ5R2l2ZW5NZXRhVHlwZSIsInNwZWNpZmljRnJhbWVOb2RlIiwiRnJhbWUiLCJmcmFtZU5vZGUiLCJmcmFtZSIsImZyb21GcmFtZU5vZGUiLCJmcmFtZVZlcmlmaWVkR2l2ZW5UeXBlIiwiZ2VuZXJhbFR5cGVOb2RlIiwic3BlY2lmaWNUZXJtTm9kZSIsIlRlcm0iLCJ0eXBlTm9kZSIsInRlcm1Ob2RlIiwidHlwZU5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsInR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0ZXJtIiwiZnJvbVRlcm1Ob2RlIiwidGVybVZlcmlmaWVkR2l2ZW5UeXBlIiwidmVyaWZ5R2l2ZW5UeXBlIiwic3RhdGVtZW50V2l0aENvbWJpbmF0b3JVbmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrSEE7OztlQUFBOzs7MkRBaEhpQjs4REFDRztxQkFFTTtvQkFDVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLFVBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUMsVUFDMUJFLGlCQUFpQkYsSUFBQUEsZ0JBQVMsRUFBQyxXQUMzQkcsb0JBQW9CSCxJQUFBQSxnQkFBUyxFQUFDLGNBQzlCSSxxQkFBcUJKLElBQUFBLGdCQUFTLEVBQUM7QUFFckMsSUFBQSxBQUFNSywrQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyx1QkFBdUIsRUFBRUMsYUFBYSxFQUFFQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsY0FBYyxFQUFFQyxlQUFlO2dCQUNoRyxJQUFJQztnQkFFSixJQUFNQyx5QkFBeUJQLHlCQUN6QlEsMEJBQTBCUCxlQUMxQlEseUJBQXlCLElBQUks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