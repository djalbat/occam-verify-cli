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
            value: function unify(combinatorStatementNode, statementNode, assignments, stated, context) {
                var statementUnifiedWithCombinator;
                var generalNonTerminalNode = combinatorStatementNode, specificNonTerminalNode = statementNode, nonTerminalNodeUnified = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, assignments, stated, context);
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
        unify: function(generalMetaTypeNode, specificStatementNode, assignments, stated, context) {
            var unified;
            var Statement = _shim.default.Statement, MetaType = _shim.default.MetaType, metaTypeNode = generalMetaTypeNode, statementNode = specificStatementNode, metaType = MetaType.fromMetaTypeNode(metaTypeNode, context), statement = Statement.fromStatementNode(statementNode, context), statementVerifiedGivenType = statement.verifyGivenMetaType(metaType, assignments, stated, context);
            unified = statementVerifiedGivenType;
            return unified;
        }
    },
    {
        generalNodeQuery: metaTypeNodeQuery,
        specificNodeQuery: frameNodeQuery,
        unify: function(generalMetaTypeNode, specificFrameNode, assignments, stated, context) {
            var unified;
            var Frame = _shim.default.Frame, MetaType = _shim.default.MetaType, metaTypeNode = generalMetaTypeNode, frameNode = specificFrameNode, metaType = MetaType.fromMetaTypeNode(metaTypeNode, context), frame = Frame.fromFrameNode(frameNode, context), frameVerifiedGivenType = frame.verifyGivenMetaType(metaType, assignments, stated, context);
            unified = frameVerifiedGivenType;
            return unified;
        }
    },
    {
        generalNodeQuery: typeNodeQuery,
        specificNodeQuery: termNodeQuery,
        unify: function(generalTypeNode, specificTermNode, assignments, stated, context) {
            var unified = false;
            var Term = _shim.default.Term, typeNode = generalTypeNode, typeName = (0, _name.typeNameFromTypeNode)(typeNode), type = context.findTypeByTypeName(typeName);
            if (type !== null) {
                var termNode = specificTermNode, term = Term.fromTermNode(termNode, context), termVerifiedGivenType = term.verifyGivenType(type, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL3N0YXRlbWVudFdpdGhDb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFVuaWZpZXIgZnJvbSBcIi4uL3VuaWZpZXJcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25hbWVcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlXCIpLFxuICAgICAgZnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWVcIiksXG4gICAgICBtZXRhVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhVHlwZVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnRcIik7XG5cbmNsYXNzIFN0YXRlbWVudFdpdGhDb21iaW5hdG9yVW5pZmllciBleHRlbmRzIFVuaWZpZXIge1xuICB1bmlmeShjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSwgc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbWJpbmF0b3I7XG5cbiAgICBjb25zdCBnZW5lcmFsTm9uVGVybWluYWxOb2RlID0gY29tYmluYXRvclN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIHNwZWNpZmljTm9uVGVybWluYWxOb2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVW5pZmllZCA9IHRoaXMudW5pZnlOb25UZXJtaW5hbE5vZGUoZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSwgc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZFdpdGhDb21iaW5hdG9yID0gbm9uVGVybWluYWxOb2RlVW5pZmllZDsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZFdpdGhDb21iaW5hdG9yO1xuICB9O1xuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IG1ldGFUeXBlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAoZ2VuZXJhbE1ldGFUeXBlTm9kZSwgc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCB1bmlmaWVkO1xuXG4gICAgICAgIGNvbnN0IHsgU3RhdGVtZW50LCBNZXRhVHlwZSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgbWV0YVR5cGVOb2RlID0gZ2VuZXJhbE1ldGFUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzcGVjaWZpY1N0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgICBtZXRhVHlwZSA9IE1ldGFUeXBlLmZyb21NZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZEdpdmVuVHlwZSA9IHN0YXRlbWVudC52ZXJpZnlHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICB1bmlmaWVkID0gc3RhdGVtZW50VmVyaWZpZWRHaXZlblR5cGU7XG5cbiAgICAgICAgcmV0dXJuIHVuaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiBtZXRhVHlwZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBmcmFtZU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAoZ2VuZXJhbE1ldGFUeXBlTm9kZSwgc3BlY2lmaWNGcmFtZU5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHVuaWZpZWQ7XG5cbiAgICAgICAgY29uc3QgeyBGcmFtZSwgTWV0YVR5cGUgfSA9IHNoaW0sXG4gICAgICAgICAgICAgIG1ldGFUeXBlTm9kZSA9IGdlbmVyYWxNZXRhVHlwZU5vZGUsIC8vL1xuICAgICAgICAgICAgICBmcmFtZU5vZGUgPSBzcGVjaWZpY0ZyYW1lTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG1ldGFUeXBlID0gTWV0YVR5cGUuZnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBmcmFtZSA9IEZyYW1lLmZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgZnJhbWVWZXJpZmllZEdpdmVuVHlwZSA9IGZyYW1lLnZlcmlmeUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIHVuaWZpZWQgPSBmcmFtZVZlcmlmaWVkR2l2ZW5UeXBlO1xuXG4gICAgICAgIHJldHVybiB1bmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6IChnZW5lcmFsVHlwZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHVuaWZpZWQgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB7IFRlcm0gfSA9IHNoaW0sXG4gICAgICAgICAgICAgIHR5cGVOb2RlID0gZ2VuZXJhbFR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgdGVybVZlcmlmaWVkR2l2ZW5UeXBlID0gdGVybS52ZXJpZnlHaXZlblR5cGUodHlwZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAodGVybVZlcmlmaWVkR2l2ZW5UeXBlKSB7XG4gICAgICAgICAgICB1bmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5pZmllZDtcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IHN0YXRlbWVudFdpdGhDb21iaW5hdG9yVW5pZmllciA9IG5ldyBTdGF0ZW1lbnRXaXRoQ29tYmluYXRvclVuaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RhdGVtZW50V2l0aENvbWJpbmF0b3JVbmlmaWVyO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwiZnJhbWVOb2RlUXVlcnkiLCJtZXRhVHlwZU5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsIlN0YXRlbWVudFdpdGhDb21iaW5hdG9yVW5pZmllciIsInVuaWZ5IiwiY29tYmluYXRvclN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJjb250ZXh0Iiwic3RhdGVtZW50VW5pZmllZFdpdGhDb21iaW5hdG9yIiwiZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSIsInNwZWNpZmljTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlVW5pZmllZCIsInVuaWZ5Tm9uVGVybWluYWxOb2RlIiwiVW5pZmllciIsIm1hcHMiLCJnZW5lcmFsTm9kZVF1ZXJ5Iiwic3BlY2lmaWNOb2RlUXVlcnkiLCJnZW5lcmFsTWV0YVR5cGVOb2RlIiwic3BlY2lmaWNTdGF0ZW1lbnROb2RlIiwidW5pZmllZCIsIlN0YXRlbWVudCIsInNoaW0iLCJNZXRhVHlwZSIsIm1ldGFUeXBlTm9kZSIsIm1ldGFUeXBlIiwiZnJvbU1ldGFUeXBlTm9kZSIsInN0YXRlbWVudCIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50VmVyaWZpZWRHaXZlblR5cGUiLCJ2ZXJpZnlHaXZlbk1ldGFUeXBlIiwic3BlY2lmaWNGcmFtZU5vZGUiLCJGcmFtZSIsImZyYW1lTm9kZSIsImZyYW1lIiwiZnJvbUZyYW1lTm9kZSIsImZyYW1lVmVyaWZpZWRHaXZlblR5cGUiLCJnZW5lcmFsVHlwZU5vZGUiLCJzcGVjaWZpY1Rlcm1Ob2RlIiwiVGVybSIsInR5cGVOb2RlIiwidHlwZU5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsInR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0ZXJtTm9kZSIsInRlcm0iLCJmcm9tVGVybU5vZGUiLCJ0ZXJtVmVyaWZpZWRHaXZlblR5cGUiLCJ2ZXJpZnlHaXZlblR5cGUiLCJzdGF0ZW1lbnRXaXRoQ29tYmluYXRvclVuaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTZGQTs7O2VBQUE7OzsyREEzRmlCOzhEQUNHO3FCQUVNO29CQUNXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsVUFDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQyxVQUMxQkUsaUJBQWlCRixJQUFBQSxnQkFBUyxFQUFDLFdBQzNCRyxvQkFBb0JILElBQUFBLGdCQUFTLEVBQUMsY0FDOUJJLHFCQUFxQkosSUFBQUEsZ0JBQVMsRUFBQztBQUVyQyxJQUFBLEFBQU1LLCtDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLHVCQUF1QixFQUFFQyxhQUFhLEVBQUVDLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxPQUFPO2dCQUN4RSxJQUFJQztnQkFFSixJQUFNQyx5QkFBeUJOLHlCQUN6Qk8sMEJBQTBCTixlQUMxQk8seUJBQXlCLElBQUksQ0FBQ0Msb0JBQW9CLENBQUNILHdCQUF3QkMseUJBQXlCTCxhQUFhQyxRQUFRQztnQkFFL0hDLGlDQUFpQ0csd0JBQXdCLEdBQUc7Z0JBRTVELE9BQU9IO1lBQ1Q7OztXQVhJUDtFQUF1Q1ksZ0JBQU87QUFhbEQsaUJBYklaLGdDQWFHYSxRQUFPO0lBQ1o7UUFDRUMsa0JBQWtCaEI7UUFDbEJpQixtQkFBbUJoQjtRQUNuQkUsT0FBTyxTQUFDZSxxQkFBcUJDLHVCQUF1QmIsYUFBYUMsUUFBUUM7WUFDdkUsSUFBSVk7WUFFSixJQUFRQyxZQUF3QkMsYUFBSSxDQUE1QkQsV0FBV0UsV0FBYUQsYUFBSSxDQUFqQkMsVUFDYkMsZUFBZU4scUJBQ2ZiLGdCQUFnQmMsdUJBQ2hCTSxXQUFXRixTQUFTRyxnQkFBZ0IsQ0FBQ0YsY0FBY2hCLFVBQ25EbUIsWUFBWU4sVUFBVU8saUJBQWlCLENBQUN2QixlQUFlRyxVQUN2RHFCLDZCQUE2QkYsVUFBVUcsbUJBQW1CLENBQUNMLFVBQVVuQixhQUFhQyxRQUFRQztZQUVoR1ksVUFBVVM7WUFFVixPQUFPVDtRQUNUO0lBQ0Y7SUFDQTtRQUNFSixrQkFBa0JoQjtRQUNsQmlCLG1CQUFtQmxCO1FBQ25CSSxPQUFPLFNBQUNlLHFCQUFxQmEsbUJBQW1CekIsYUFBYUMsUUFBUUM7WUFDbkUsSUFBSVk7WUFFSixJQUFRWSxRQUFvQlYsYUFBSSxDQUF4QlUsT0FBT1QsV0FBYUQsYUFBSSxDQUFqQkMsVUFDVEMsZUFBZU4scUJBQ2ZlLFlBQVlGLG1CQUNaTixXQUFXRixTQUFTRyxnQkFBZ0IsQ0FBQ0YsY0FBY2hCLFVBQ25EMEIsUUFBUUYsTUFBTUcsYUFBYSxDQUFDRixXQUFXekIsVUFDdkM0Qix5QkFBeUJGLE1BQU1KLG1CQUFtQixDQUFDTCxVQUFVbkIsYUFBYUMsUUFBUUM7WUFFeEZZLFVBQVVnQjtZQUVWLE9BQU9oQjtRQUNUO0lBQ0Y7SUFDQTtRQUNFSixrQkFBa0JsQjtRQUNsQm1CLG1CQUFtQnJCO1FBQ25CTyxPQUFPLFNBQUNrQyxpQkFBaUJDLGtCQUFrQmhDLGFBQWFDLFFBQVFDO1lBQzlELElBQUlZLFVBQVU7WUFFZCxJQUFNLEFBQUVtQixPQUFTakIsYUFBSSxDQUFiaUIsTUFDRkMsV0FBV0gsaUJBQ1hJLFdBQVdDLElBQUFBLDBCQUFvQixFQUFDRixXQUNoQ0csT0FBT25DLFFBQVFvQyxrQkFBa0IsQ0FBQ0g7WUFFeEMsSUFBSUUsU0FBUyxNQUFNO2dCQUNqQixJQUFNRSxXQUFXUCxrQkFDWFEsT0FBT1AsS0FBS1EsWUFBWSxDQUFDRixVQUFVckMsVUFDbkN3Qyx3QkFBd0JGLEtBQUtHLGVBQWUsQ0FBQ04sTUFBTW5DO2dCQUV6RCxJQUFJd0MsdUJBQXVCO29CQUN6QjVCLFVBQVU7Z0JBQ1o7WUFDRjtZQUVBLE9BQU9BO1FBQ1Q7SUFDRjtDQUNEO0FBR0gsSUFBTThCLGlDQUFpQyxJQUFJaEQ7SUFFM0MsV0FBZWdEIn0=