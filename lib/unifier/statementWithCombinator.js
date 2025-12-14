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
var _ontology = /*#__PURE__*/ _interop_require_default(require("../ontology"));
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
                var statementUnifiedWithCombinator;
                var generalNonTerminalNode = combinatorStatementNode, specificNonTerminalNode = statementNode, nonTerminalNodeUnifies = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, assignments, stated, generalContext, specificContext);
                statementUnifiedWithCombinator = nonTerminalNodeUnifies; ///
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
            var unifies;
            var Statement = _ontology.default.Statement, MetaType = _ontology.default.MetaType, metaTypeNode = generalMetaTypeNode, statementNode = specificStatementNode; ///
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
            var Frame = _ontology.default.Frame, MetaType = _ontology.default.MetaType, metaTypeNode = generalMetaTypeNode, frameNode = specificFrameNode; ///
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
            var Term = _ontology.default.Term, typeNode = generalTypeNode, termNode = specificTermNode, nominalTypeName = typeNode.getNominalTypeName();
            var context;
            context = generalContext; ///
            var type = context.findTypeByNominalTypeName(nominalTypeName);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL3N0YXRlbWVudFdpdGhDb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgb250b2xvZ3kgZnJvbSBcIi4uL29udG9sb2d5XCI7XG5pbXBvcnQgVW5pZmllciBmcm9tIFwiLi4vdW5pZmllclwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZVwiKSxcbiAgICAgIGZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lXCIpLFxuICAgICAgbWV0YVR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YVR5cGVcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50XCIpO1xuXG5jbGFzcyBTdGF0ZW1lbnRXaXRoQ29tYmluYXRvclVuaWZpZXIgZXh0ZW5kcyBVbmlmaWVyIHtcbiAgdW5pZnkoY29tYmluYXRvclN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZFdpdGhDb21iaW5hdG9yO1xuXG4gICAgY29uc3QgZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSA9IGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICBzcGVjaWZpY05vblRlcm1pbmFsTm9kZSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZXMgPSB0aGlzLnVuaWZ5Tm9uVGVybWluYWxOb2RlKGdlbmVyYWxOb25UZXJtaW5hbE5vZGUsIHNwZWNpZmljTm9uVGVybWluYWxOb2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFVuaWZpZWRXaXRoQ29tYmluYXRvciA9IG5vblRlcm1pbmFsTm9kZVVuaWZpZXM7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWRXaXRoQ29tYmluYXRvcjtcbiAgfTtcblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiBtZXRhVHlwZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICB1bmlmeTogKGdlbmVyYWxNZXRhVHlwZU5vZGUsIHNwZWNpZmljU3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgdW5pZmllcztcblxuICAgICAgICBjb25zdCB7IFN0YXRlbWVudCwgTWV0YVR5cGUgfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgICBtZXRhVHlwZU5vZGUgPSBnZW5lcmFsTWV0YVR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHNwZWNpZmljU3RhdGVtZW50Tm9kZTsgLy8vXG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCBtZXRhVHlwZSA9IE1ldGFUeXBlLmZyb21NZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllc0dpdmVuVHlwZSA9IHN0YXRlbWVudC52ZXJpZnlHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICB1bmlmaWVzID0gc3RhdGVtZW50VmVyaWZpZXNHaXZlblR5cGU7XG5cbiAgICAgICAgcmV0dXJuIHVuaWZpZXM7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiBtZXRhVHlwZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBmcmFtZU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAoZ2VuZXJhbE1ldGFUeXBlTm9kZSwgc3BlY2lmaWNGcmFtZU5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHVuaWZpZXM7XG5cbiAgICAgICAgY29uc3QgeyBGcmFtZSwgTWV0YVR5cGUgfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgICBtZXRhVHlwZU5vZGUgPSBnZW5lcmFsTWV0YVR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgZnJhbWVOb2RlID0gc3BlY2lmaWNGcmFtZU5vZGU7IC8vL1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgbWV0YVR5cGUgPSBNZXRhVHlwZS5mcm9tTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnN0IGZyYW1lID0gRnJhbWUuZnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBmcmFtZVZlcmlmaWVzR2l2ZW5UeXBlID0gZnJhbWUudmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgdW5pZmllcyA9IGZyYW1lVmVyaWZpZXNHaXZlblR5cGU7XG5cbiAgICAgICAgcmV0dXJuIHVuaWZpZXM7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICB1bmlmeTogKGdlbmVyYWxUeXBlTm9kZSwgc3BlY2lmaWNUZXJtTm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgdW5pZmllcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHsgVGVybSB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgICAgIHR5cGVOb2RlID0gZ2VuZXJhbFR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgdGVybU5vZGUgPSBzcGVjaWZpY1Rlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCk7XG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnN0IHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHRlcm1WZXJpZmllc0dpdmVuVHlwZSA9IHRlcm0udmVyaWZ5R2l2ZW5UeXBlKHR5cGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmICh0ZXJtVmVyaWZpZXNHaXZlblR5cGUpIHtcbiAgICAgICAgICB1bmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmlmaWVzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3Qgc3RhdGVtZW50V2l0aENvbWJpbmF0b3JVbmlmaWVyID0gbmV3IFN0YXRlbWVudFdpdGhDb21iaW5hdG9yVW5pZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBzdGF0ZW1lbnRXaXRoQ29tYmluYXRvclVuaWZpZXI7XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJmcmFtZU5vZGVRdWVyeSIsIm1ldGFUeXBlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwiU3RhdGVtZW50V2l0aENvbWJpbmF0b3JVbmlmaWVyIiwidW5pZnkiLCJjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllZFdpdGhDb21iaW5hdG9yIiwiZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSIsInNwZWNpZmljTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlVW5pZmllcyIsInVuaWZ5Tm9uVGVybWluYWxOb2RlIiwiVW5pZmllciIsIm1hcHMiLCJnZW5lcmFsTm9kZVF1ZXJ5Iiwic3BlY2lmaWNOb2RlUXVlcnkiLCJnZW5lcmFsTWV0YVR5cGVOb2RlIiwic3BlY2lmaWNTdGF0ZW1lbnROb2RlIiwidW5pZmllcyIsIlN0YXRlbWVudCIsIm9udG9sb2d5IiwiTWV0YVR5cGUiLCJtZXRhVHlwZU5vZGUiLCJjb250ZXh0IiwibWV0YVR5cGUiLCJmcm9tTWV0YVR5cGVOb2RlIiwic3RhdGVtZW50IiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRWZXJpZmllc0dpdmVuVHlwZSIsInZlcmlmeUdpdmVuTWV0YVR5cGUiLCJzcGVjaWZpY0ZyYW1lTm9kZSIsIkZyYW1lIiwiZnJhbWVOb2RlIiwiZnJhbWUiLCJmcm9tRnJhbWVOb2RlIiwiZnJhbWVWZXJpZmllc0dpdmVuVHlwZSIsImdlbmVyYWxUeXBlTm9kZSIsInNwZWNpZmljVGVybU5vZGUiLCJUZXJtIiwidHlwZU5vZGUiLCJ0ZXJtTm9kZSIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInR5cGUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwidGVybSIsImZyb21UZXJtTm9kZSIsInRlcm1WZXJpZmllc0dpdmVuVHlwZSIsInZlcmlmeUdpdmVuVHlwZSIsInN0YXRlbWVudFdpdGhDb21iaW5hdG9yVW5pZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUhBOzs7ZUFBQTs7OytEQS9HcUI7OERBQ0Q7cUJBRU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxVQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDLFVBQzFCRSxpQkFBaUJGLElBQUFBLGdCQUFTLEVBQUMsV0FDM0JHLG9CQUFvQkgsSUFBQUEsZ0JBQVMsRUFBQyxjQUM5QkkscUJBQXFCSixJQUFBQSxnQkFBUyxFQUFDO0FBRXJDLElBQUEsQUFBTUssK0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLHVCQUF1QixFQUFFQyxhQUFhLEVBQUVDLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxjQUFjLEVBQUVDLGVBQWU7Z0JBQ2hHLElBQUlDO2dCQUVKLElBQU1DLHlCQUF5QlAseUJBQ3pCUSwwQkFBMEJQLGVBQzFCUSx5QkFBeUIsSUFBSSxD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