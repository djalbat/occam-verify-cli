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
var _structure = /*#__PURE__*/ _interop_require_default(require("../structure"));
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
            var metaTypeNode = generalMetaTypeNode, statementNode = specificStatementNode; ///
            var context;
            context = generalContext; ///
            var metaTypeName = metaTypeNode.getMetaTypeName(), metaType = context.findMetaTypeByMetaTypeName(metaTypeName);
            context = specificContext; ///
            var Statement = _structure.default.Statement, statement = Statement.fromStatementNode(statementNode, context), statementVerifiesGivenType = statement.verifyGivenMetaType(metaType, assignments, stated, context);
            unifies = statementVerifiesGivenType;
            return unifies;
        }
    },
    {
        generalNodeQuery: metaTypeNodeQuery,
        specificNodeQuery: frameNodeQuery,
        unify: function(generalMetaTypeNode, specificFrameNode, assignments, stated, generalContext, specificContext) {
            var unifies;
            var metaTypeNode = generalMetaTypeNode, frameNode = specificFrameNode; ///
            var context;
            context = generalContext; ///
            var metaTypeName = metaTypeNode.getMetaTypeName(), metaType = context.findMetaTypeByMetaTypeName(metaTypeName);
            context = specificContext; ///
            var Frame = _structure.default.Frame, frame = Frame.fromFrameNode(frameNode, context), frameVerifiesGivenType = frame.verifyGivenMetaType(metaType, assignments, stated, context);
            unifies = frameVerifiesGivenType;
            return unifies;
        }
    },
    {
        generalNodeQuery: typeNodeQuery,
        specificNodeQuery: termNodeQuery,
        unify: function(generalTypeNode, specificTermNode, assignments, stated, generalContext, specificContext) {
            var unifies = false;
            var typeNode = generalTypeNode, termNode = specificTermNode, nominalTypeName = typeNode.getNominalTypeName();
            var context;
            context = generalContext; ///
            var type = context.findTypeByNominalTypeName(nominalTypeName);
            if (type !== null) {
                context = specificContext; ///
                var Term = _structure.default.Term, term = Term.fromTermNode(termNode, context), termVerifiesGivenType = term.verifyGivenType(type, generalContext, specificContext);
                if (termVerifiesGivenType) {
                    unifies = true;
                }
                return unifies;
            }
        }
    }
]);
var statementWithCombinatorUnifier = new StatementWithCombinatorUnifier();
var _default = statementWithCombinatorUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL3N0YXRlbWVudFdpdGhDb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVW5pZmllciBmcm9tIFwiLi4vdW5pZmllclwiO1xuaW1wb3J0IHN0cnVjdHVyZSBmcm9tIFwiLi4vc3RydWN0dXJlXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlXCIpLFxuICAgICAgZnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWVcIiksXG4gICAgICBtZXRhVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhVHlwZVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnRcIik7XG5cbmNsYXNzIFN0YXRlbWVudFdpdGhDb21iaW5hdG9yVW5pZmllciBleHRlbmRzIFVuaWZpZXIge1xuICB1bmlmeShjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSwgc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbWJpbmF0b3I7XG5cbiAgICBjb25zdCBnZW5lcmFsTm9uVGVybWluYWxOb2RlID0gY29tYmluYXRvclN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIHNwZWNpZmljTm9uVGVybWluYWxOb2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVW5pZmllcyA9IHRoaXMudW5pZnlOb25UZXJtaW5hbE5vZGUoZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSwgc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllc1dpdGhDb21iaW5hdG9yID0gbm9uVGVybWluYWxOb2RlVW5pZmllczsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllc1dpdGhDb21iaW5hdG9yO1xuICB9O1xuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IG1ldGFUeXBlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAoZ2VuZXJhbE1ldGFUeXBlTm9kZSwgc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCB1bmlmaWVzO1xuXG4gICAgICAgIGNvbnN0IG1ldGFUeXBlTm9kZSA9IGdlbmVyYWxNZXRhVHlwZU5vZGUsIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3BlY2lmaWNTdGF0ZW1lbnROb2RlOyAvLy9cblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlTm9kZS5nZXRNZXRhVHlwZU5hbWUoKSxcbiAgICAgICAgICAgICAgbWV0YVR5cGUgPSBjb250ZXh0LmZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBzdHJ1Y3R1cmUsXG4gICAgICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50VmVyaWZpZXNHaXZlblR5cGUgPSBzdGF0ZW1lbnQudmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgdW5pZmllcyA9IHN0YXRlbWVudFZlcmlmaWVzR2l2ZW5UeXBlO1xuXG4gICAgICAgIHJldHVybiB1bmlmaWVzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogbWV0YVR5cGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogZnJhbWVOb2RlUXVlcnksXG4gICAgICB1bmlmeTogKGdlbmVyYWxNZXRhVHlwZU5vZGUsIHNwZWNpZmljRnJhbWVOb2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCB1bmlmaWVzO1xuXG4gICAgICAgIGNvbnN0IG1ldGFUeXBlTm9kZSA9IGdlbmVyYWxNZXRhVHlwZU5vZGUsIC8vL1xuICAgICAgICAgICAgICBmcmFtZU5vZGUgPSBzcGVjaWZpY0ZyYW1lTm9kZTsgLy8vXG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZU5vZGUuZ2V0TWV0YVR5cGVOYW1lKCksXG4gICAgICAgICAgICAgIG1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCB7IEZyYW1lIH0gPSBzdHJ1Y3R1cmUsXG4gICAgICAgICAgICAgIGZyYW1lID0gRnJhbWUuZnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBmcmFtZVZlcmlmaWVzR2l2ZW5UeXBlID0gZnJhbWUudmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgdW5pZmllcyA9IGZyYW1lVmVyaWZpZXNHaXZlblR5cGU7XG5cbiAgICAgICAgcmV0dXJuIHVuaWZpZXM7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICB1bmlmeTogKGdlbmVyYWxUeXBlTm9kZSwgc3BlY2lmaWNUZXJtTm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgdW5pZmllcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHR5cGVOb2RlID0gZ2VuZXJhbFR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgdGVybU5vZGUgPSBzcGVjaWZpY1Rlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCk7XG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgICBjb25zdCB7IFRlcm0gfSA9IHN0cnVjdHVyZSxcbiAgICAgICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHRlcm1WZXJpZmllc0dpdmVuVHlwZSA9IHRlcm0udmVyaWZ5R2l2ZW5UeXBlKHR5cGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHRlcm1WZXJpZmllc0dpdmVuVHlwZSkge1xuICAgICAgICAgICAgdW5pZmllcyA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHVuaWZpZXM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IHN0YXRlbWVudFdpdGhDb21iaW5hdG9yVW5pZmllciA9IG5ldyBTdGF0ZW1lbnRXaXRoQ29tYmluYXRvclVuaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RhdGVtZW50V2l0aENvbWJpbmF0b3JVbmlmaWVyO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwiZnJhbWVOb2RlUXVlcnkiLCJtZXRhVHlwZU5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsIlN0YXRlbWVudFdpdGhDb21iaW5hdG9yVW5pZmllciIsInVuaWZ5IiwiY29tYmluYXRvclN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvciIsImdlbmVyYWxOb25UZXJtaW5hbE5vZGUiLCJzcGVjaWZpY05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVVuaWZpZXMiLCJ1bmlmeU5vblRlcm1pbmFsTm9kZSIsIlVuaWZpZXIiLCJtYXBzIiwiZ2VuZXJhbE5vZGVRdWVyeSIsInNwZWNpZmljTm9kZVF1ZXJ5IiwiZ2VuZXJhbE1ldGFUeXBlTm9kZSIsInNwZWNpZmljU3RhdGVtZW50Tm9kZSIsInVuaWZpZXMiLCJtZXRhVHlwZU5vZGUiLCJjb250ZXh0IiwibWV0YVR5cGVOYW1lIiwiZ2V0TWV0YVR5cGVOYW1lIiwibWV0YVR5cGUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIlN0YXRlbWVudCIsInN0cnVjdHVyZSIsInN0YXRlbWVudCIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50VmVyaWZpZXNHaXZlblR5cGUiLCJ2ZXJpZnlHaXZlbk1ldGFUeXBlIiwic3BlY2lmaWNGcmFtZU5vZGUiLCJmcmFtZU5vZGUiLCJGcmFtZSIsImZyYW1lIiwiZnJvbUZyYW1lTm9kZSIsImZyYW1lVmVyaWZpZXNHaXZlblR5cGUiLCJnZW5lcmFsVHlwZU5vZGUiLCJzcGVjaWZpY1Rlcm1Ob2RlIiwidHlwZU5vZGUiLCJ0ZXJtTm9kZSIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInR5cGUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwiVGVybSIsInRlcm0iLCJmcm9tVGVybU5vZGUiLCJ0ZXJtVmVyaWZpZXNHaXZlblR5cGUiLCJ2ZXJpZnlHaXZlblR5cGUiLCJzdGF0ZW1lbnRXaXRoQ29tYmluYXRvclVuaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFIQTs7O2VBQUE7Ozs4REFuSG9CO2dFQUNFO3FCQUVJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsVUFDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQyxVQUMxQkUsaUJBQWlCRixJQUFBQSxnQkFBUyxFQUFDLFdBQzNCRyxvQkFBb0JILElBQUFBLGdCQUFTLEVBQUMsY0FDOUJJLHFCQUFxQkosSUFBQUEsZ0JBQVMsRUFBQztBQUVyQyxJQUFBLEFBQU1LLCtDQUFOO2NBQU1BO2FB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