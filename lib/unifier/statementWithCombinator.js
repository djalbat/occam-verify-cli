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
var _dom = /*#__PURE__*/ _interop_require_default(require("../dom"));
var _unifier = /*#__PURE__*/ _interop_require_default(require("../unifier"));
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
                var statementUnifiesWithCombinator;
                var generalNonTerminalNode = combinatorStatementNode, specificNonTerminalNode = statementNode, nonTerminalNodeUnifies = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, assignments, stated, generalContext, specificContext);
                statementUnifiesWithCombinator = nonTerminalNodeUnifies; ///
                return statementUnifiesWithCombinator;
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
            var unifies;
            var Statement = _dom.default.Statement, MetaType = _dom.default.MetaType, metaTypeNode = generalMetaTypeNode, statementNode = specificStatementNode; ///
            var context;
            context = generalContext; ///
            var metaType = MetaType.fromMetaTypeNode(metaTypeNode, context);
            context = specificContext; ///
            var statement = Statement.fromStatementNode(statementNode, context), statementVerifiesGivenType = statement.verifyGivenMetaType(metaType, assignments, stated, context);
            unifies = statementVerifiesGivenType;
            return unifies;
        }
    },
    {
        generalNodeQuery: metaTypeNodeQuery,
        specificNodeQuery: frameNodeQuery,
        unify: function(generalMetaTypeNode, specificFrameNode, assignments, stated, generalContext, specificContext) {
            var unifies;
            var Frame = _dom.default.Frame, MetaType = _dom.default.MetaType, metaTypeNode = generalMetaTypeNode, frameNode = specificFrameNode; ///
            var context;
            context = generalContext; ///
            var metaType = MetaType.fromMetaTypeNode(metaTypeNode, context);
            context = specificContext; ///
            var frame = Frame.fromFrameNode(frameNode, context), frameVerifiesGivenType = frame.verifyGivenMetaType(metaType, assignments, stated, context);
            unifies = frameVerifiesGivenType;
            return unifies;
        }
    },
    {
        generalNodeQuery: typeNodeQuery,
        specificNodeQuery: termNodeQuery,
        unify: function(generalTypeNode, specificTermNode, assignments, stated, generalContext, specificContext) {
            var unifies = false;
            var Term = _dom.default.Term, typeNode = generalTypeNode, termNode = specificTermNode, typeName = typeNode.getTypeName();
            var context;
            context = generalContext; ///
            var type = context.findTypeByTypeName(typeName);
            context = specificContext; ///
            var term = Term.fromTermNode(termNode, context), termVerifiesGivenType = term.verifyGivenType(type, generalContext, specificContext);
            if (termVerifiesGivenType) {
                unifies = true;
            }
            return unifies;
        }
    }
]);
var statementWithCombinatorUnifier = new StatementWithCombinatorUnifier();
var _default = statementWithCombinatorUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL3N0YXRlbWVudFdpdGhDb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlXCIpLFxuICAgICAgZnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWVcIiksXG4gICAgICBtZXRhVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhVHlwZVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnRcIik7XG5cbmNsYXNzIFN0YXRlbWVudFdpdGhDb21iaW5hdG9yVW5pZmllciBleHRlbmRzIFVuaWZpZXIge1xuICB1bmlmeShjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSwgc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbWJpbmF0b3I7XG5cbiAgICBjb25zdCBnZW5lcmFsTm9uVGVybWluYWxOb2RlID0gY29tYmluYXRvclN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIHNwZWNpZmljTm9uVGVybWluYWxOb2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVW5pZmllcyA9IHRoaXMudW5pZnlOb25UZXJtaW5hbE5vZGUoZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSwgc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllc1dpdGhDb21iaW5hdG9yID0gbm9uVGVybWluYWxOb2RlVW5pZmllczsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllc1dpdGhDb21iaW5hdG9yO1xuICB9O1xuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IG1ldGFUeXBlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAoZ2VuZXJhbE1ldGFUeXBlTm9kZSwgc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCB1bmlmaWVzO1xuXG4gICAgICAgIGNvbnN0IHsgU3RhdGVtZW50LCBNZXRhVHlwZSB9ID0gZG9tLFxuICAgICAgICAgICAgICBtZXRhVHlwZU5vZGUgPSBnZW5lcmFsTWV0YVR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHNwZWNpZmljU3RhdGVtZW50Tm9kZTsgLy8vXG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCBtZXRhVHlwZSA9IE1ldGFUeXBlLmZyb21NZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllc0dpdmVuVHlwZSA9IHN0YXRlbWVudC52ZXJpZnlHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICB1bmlmaWVzID0gc3RhdGVtZW50VmVyaWZpZXNHaXZlblR5cGU7XG5cbiAgICAgICAgcmV0dXJuIHVuaWZpZXM7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiBtZXRhVHlwZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBmcmFtZU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAoZ2VuZXJhbE1ldGFUeXBlTm9kZSwgc3BlY2lmaWNGcmFtZU5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHVuaWZpZXM7XG5cbiAgICAgICAgY29uc3QgeyBGcmFtZSwgTWV0YVR5cGUgfSA9IGRvbSxcbiAgICAgICAgICAgICAgbWV0YVR5cGVOb2RlID0gZ2VuZXJhbE1ldGFUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIGZyYW1lTm9kZSA9IHNwZWNpZmljRnJhbWVOb2RlOyAvLy9cblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IG1ldGFUeXBlID0gTWV0YVR5cGUuZnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCBmcmFtZSA9IEZyYW1lLmZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgZnJhbWVWZXJpZmllc0dpdmVuVHlwZSA9IGZyYW1lLnZlcmlmeUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIHVuaWZpZXMgPSBmcmFtZVZlcmlmaWVzR2l2ZW5UeXBlO1xuXG4gICAgICAgIHJldHVybiB1bmlmaWVzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6IChnZW5lcmFsVHlwZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHVuaWZpZXMgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB7IFRlcm0gfSA9IGRvbSxcbiAgICAgICAgICAgICAgdHlwZU5vZGUgPSBnZW5lcmFsVHlwZU5vZGUsIC8vL1xuICAgICAgICAgICAgICB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICB0eXBlTmFtZSA9IHR5cGVOb2RlLmdldFR5cGVOYW1lKCk7XG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB0ZXJtVmVyaWZpZXNHaXZlblR5cGUgPSB0ZXJtLnZlcmlmeUdpdmVuVHlwZSh0eXBlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAodGVybVZlcmlmaWVzR2l2ZW5UeXBlKSB7XG4gICAgICAgICAgdW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5pZmllcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IHN0YXRlbWVudFdpdGhDb21iaW5hdG9yVW5pZmllciA9IG5ldyBTdGF0ZW1lbnRXaXRoQ29tYmluYXRvclVuaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RhdGVtZW50V2l0aENvbWJpbmF0b3JVbmlmaWVyO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwiZnJhbWVOb2RlUXVlcnkiLCJtZXRhVHlwZU5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsIlN0YXRlbWVudFdpdGhDb21iaW5hdG9yVW5pZmllciIsInVuaWZ5IiwiY29tYmluYXRvclN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvciIsImdlbmVyYWxOb25UZXJtaW5hbE5vZGUiLCJzcGVjaWZpY05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVVuaWZpZXMiLCJ1bmlmeU5vblRlcm1pbmFsTm9kZSIsIlVuaWZpZXIiLCJtYXBzIiwiZ2VuZXJhbE5vZGVRdWVyeSIsInNwZWNpZmljTm9kZVF1ZXJ5IiwiZ2VuZXJhbE1ldGFUeXBlTm9kZSIsInNwZWNpZmljU3RhdGVtZW50Tm9kZSIsInVuaWZpZXMiLCJTdGF0ZW1lbnQiLCJkb20iLCJNZXRhVHlwZSIsIm1ldGFUeXBlTm9kZSIsImNvbnRleHQiLCJtZXRhVHlwZSIsImZyb21NZXRhVHlwZU5vZGUiLCJzdGF0ZW1lbnQiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFZlcmlmaWVzR2l2ZW5UeXBlIiwidmVyaWZ5R2l2ZW5NZXRhVHlwZSIsInNwZWNpZmljRnJhbWVOb2RlIiwiRnJhbWUiLCJmcmFtZU5vZGUiLCJmcmFtZSIsImZyb21GcmFtZU5vZGUiLCJmcmFtZVZlcmlmaWVzR2l2ZW5UeXBlIiwiZ2VuZXJhbFR5cGVOb2RlIiwic3BlY2lmaWNUZXJtTm9kZSIsIlRlcm0iLCJ0eXBlTm9kZSIsInRlcm1Ob2RlIiwidHlwZU5hbWUiLCJnZXRUeXBlTmFtZSIsInR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0ZXJtIiwiZnJvbVRlcm1Ob2RlIiwidGVybVZlcmlmaWVzR2l2ZW5UeXBlIiwidmVyaWZ5R2l2ZW5UeXBlIiwic3RhdGVtZW50V2l0aENvbWJpbmF0b3JVbmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpSEE7OztlQUFBOzs7MERBL0dnQjs4REFDSTtxQkFFTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLFVBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUMsVUFDMUJFLGlCQUFpQkYsSUFBQUEsZ0JBQVMsRUFBQyxXQUMzQkcsb0JBQW9CSCxJQUFBQSxnQkFBUyxFQUFDLGNBQzlCSSxxQkFBcUJKLElBQUFBLGdCQUFTLEVBQUM7QUFFckMsSUFBQSxBQUFNSywrQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsdUJBQXVCLEVBQUVDLGFBQWEsRUFBRUMsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLGNBQWMsRUFBRUMsZUFBZTtnQkFDaEcsSUFBSUM7Z0JBRUosSUFBTUMseUJBQXlCUCx5QkFDekJRLDBCQUEwQlAsZUFDMUJRLHlCQUF5QixJQUFJLENBQUNDLG9CQUFvQixDQUFDSCx3QkFBd0JDLHlCQUF5Qk4sYUFBYUMsUUFBUUMsZ0JBQWdCQztnQkFFL0lDLGlDQUFpQ0csd0JBQXdCLEdBQUc7Z0JBRTVELE9BQU9IO1lBQ1Q7OztXQVhJUjtFQUF1Q2EsZ0JBQU87QUFhbEQsaUJBYkliLGdDQWFHYyxRQUFPO0lBQ1o7UUFDRUMsa0JBQWtCakI7UUFDbEJrQixtQkFBbUJqQjtRQUNuQkUsT0FBTyxTQUFDZ0IscUJBQXFCQyx1QkFBdUJkLGFBQWFDLFFBQVFDLGdCQUFnQkM7WUFDdkYsSUFBSVk7WUFFSixJQUFRQyxZQUF3QkMsWUFBRyxDQUEzQkQsV0FBV0UsV0FBYUQsWUFBRyxDQUFoQkMsVUFDYkMsZUFBZU4scUJBQ2ZkLGdCQUFnQmUsdUJBQXVCLEdBQUc7WUFFaEQsSUFBSU07WUFFSkEsVUFBVWxCLGdCQUFnQixHQUFHO1lBRTdCLElBQU1tQixXQUFXSCxTQUFTSSxnQkFBZ0IsQ0FBQ0gsY0FBY0M7WUFFekRBLFVBQVVqQixpQkFBa0IsR0FBRztZQUUvQixJQUFNb0IsWUFBWVAsVUFBVVEsaUJBQWlCLENBQUN6QixlQUFlcUIsVUFDdkRLLDZCQUE2QkYsVUFBVUcsbUJBQW1CLENBQUNMLFVBQVVyQixhQUFhQyxRQUFRbUI7WUFFaEdMLFVBQVVVO1lBRVYsT0FBT1Y7UUFDVDtJQUNGO0lBQ0E7UUFDRUosa0JBQWtCakI7UUFDbEJrQixtQkFBbUJuQjtRQUNuQkksT0FBTyxTQUFDZ0IscUJBQXFCYyxtQkFBbUIzQixhQUFhQyxRQUFRQyxnQkFBZ0JDO1lBQ25GLElBQUlZO1lBRUosSUFBUWEsUUFBb0JYLFlBQUcsQ0FBdkJXLE9BQU9WLFdBQWFELFlBQUcsQ0FBaEJDLFVBQ1RDLGVBQWVOLHFCQUNmZ0IsWUFBWUYsbUJBQW1CLEdBQUc7WUFFeEMsSUFBSVA7WUFFSkEsVUFBVWxCLGdCQUFnQixHQUFHO1lBRTdCLElBQU1tQixXQUFXSCxTQUFTSSxnQkFBZ0IsQ0FBQ0gsY0FBY0M7WUFFekRBLFVBQVVqQixpQkFBa0IsR0FBRztZQUUvQixJQUFNMkIsUUFBUUYsTUFBTUcsYUFBYSxDQUFDRixXQUFXVCxVQUN2Q1kseUJBQXlCRixNQUFNSixtQkFBbUIsQ0FBQ0wsVUFBVXJCLGFBQWFDLFFBQVFtQjtZQUV4RkwsVUFBVWlCO1lBRVYsT0FBT2pCO1FBQ1Q7SUFDRjtJQUNBO1FBQ0VKLGtCQUFrQm5CO1FBQ2xCb0IsbUJBQW1CdEI7UUFDbkJPLE9BQU8sU0FBQ29DLGlCQUFpQkMsa0JBQWtCbEMsYUFBYUMsUUFBUUMsZ0JBQWdCQztZQUM5RSxJQUFJWSxVQUFVO1lBRWQsSUFBTSxBQUFFb0IsT0FBU2xCLFlBQUcsQ0FBWmtCLE1BQ0ZDLFdBQVdILGlCQUNYSSxXQUFXSCxrQkFDWEksV0FBV0YsU0FBU0csV0FBVztZQUVyQyxJQUFJbkI7WUFFSkEsVUFBVWxCLGdCQUFnQixHQUFHO1lBRTdCLElBQU1zQyxPQUFPcEIsUUFBUXFCLGtCQUFrQixDQUFDSDtZQUV4Q2xCLFVBQVVqQixpQkFBa0IsR0FBRztZQUUvQixJQUFNdUMsT0FBT1AsS0FBS1EsWUFBWSxDQUFDTixVQUFVakIsVUFDbkN3Qix3QkFBd0JGLEtBQUtHLGVBQWUsQ0FBQ0wsTUFBTXRDLGdCQUFnQkM7WUFFekUsSUFBSXlDLHVCQUF1QjtnQkFDekI3QixVQUFVO1lBQ1o7WUFFQSxPQUFPQTtRQUNUO0lBQ0Y7Q0FDRDtBQUdILElBQU0rQixpQ0FBaUMsSUFBSWxEO0lBRTNDLFdBQWVrRCJ9