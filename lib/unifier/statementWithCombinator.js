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
            var Statement = _shim.default.Statement, MetaType = _shim.default.MetaType, metaTypeNode = metaTypeNodeB, statementeNode = statementeNodeA, metaType = MetaType.fromMetaTypeNode(metaTypeNode, localContext), statemente = Statement.fromTermNode(statementeNode, localContext), statementeVerifiedGivenType = statemente.verifyGivenMetaType(metaType, localContext);
            unified = statementeVerifiedGivenType;
            return unified;
        }
    },
    {
        nodeQueryA: frameNodeQuery,
        nodeQueryB: metaTypeNodeQuery,
        unify: function(frameNodeA, metaTypeNodeB, assignments, stated, localContext) {
            var unified;
            var Frame = _shim.default.Frame, MetaType = _shim.default.MetaType, metaTypeNode = metaTypeNodeB, frameNode = frameNodeA, metaType = MetaType.fromMetaTypeNode(metaTypeNode, localContext), frame = Frame.fromTermNode(frameNode, localContext), frameVerifiedGivenType = frame.verifyGivenMetaType(metaType, localContext);
            unified = frameVerifiedGivenType;
            return unified;
        }
    },
    {
        nodeQueryA: termNodeQuery,
        nodeQueryB: typeNodeQuery,
        unify: function(termNodeA, typeNodeB, assignments, stated, localContext) {
            var unified = false;
            var Term = _shim.default.Term, Type = _shim.default.Type, typeNode = typeNodeB, type = Type.fromTypeNode(typeNode, localContext), typeVerified = type.verify(localContext);
            if (typeVerified) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL3N0YXRlbWVudFdpdGhDb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFVuaWZpZXIgZnJvbSBcIi4uL3VuaWZpZXJcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0hXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlIVwiKSxcbiAgICAgIGZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lIVwiKSxcbiAgICAgIG1ldGFUeXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFUeXBlIVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQhXCIpO1xuXG5jbGFzcyBTdGF0ZW1lbnRXaXRoQ29tYmluYXRvclVuaWZpZXIgZXh0ZW5kcyBVbmlmaWVyIHtcbiAgdW5pZnkoc3RhdGVtZW50Tm9kZSwgY29tYmluYXRvclN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbWJpbmF0b3I7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVVbmlmaWVkID0gdGhpcy51bmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZFdpdGhDb21iaW5hdG9yID0gbm9uVGVybWluYWxOb2RlVW5pZmllZDsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZFdpdGhDb21iaW5hdG9yO1xuICB9O1xuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIG5vZGVRdWVyeUE6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIG5vZGVRdWVyeUI6IG1ldGFUeXBlTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6IChzdGF0ZW1lbnROb2RlQSwgbWV0YVR5cGVOb2RlQiwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCB1bmlmaWVkO1xuXG4gICAgICAgIGNvbnN0IHsgU3RhdGVtZW50LCBNZXRhVHlwZSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgbWV0YVR5cGVOb2RlID0gbWV0YVR5cGVOb2RlQiwgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudGVOb2RlID0gc3RhdGVtZW50ZU5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgbWV0YVR5cGUgPSBNZXRhVHlwZS5mcm9tTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50ZSA9IFN0YXRlbWVudC5mcm9tVGVybU5vZGUoc3RhdGVtZW50ZU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICAgIHN0YXRlbWVudGVWZXJpZmllZEdpdmVuVHlwZSA9IHN0YXRlbWVudGUudmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICB1bmlmaWVkID0gc3RhdGVtZW50ZVZlcmlmaWVkR2l2ZW5UeXBlO1xuXG4gICAgICAgIHJldHVybiB1bmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5QTogZnJhbWVOb2RlUXVlcnksXG4gICAgICBub2RlUXVlcnlCOiBtZXRhVHlwZU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAoZnJhbWVOb2RlQSwgbWV0YVR5cGVOb2RlQiwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCB1bmlmaWVkO1xuXG4gICAgICAgIGNvbnN0IHsgRnJhbWUsIE1ldGFUeXBlIH0gPSBzaGltLFxuICAgICAgICAgICAgICBtZXRhVHlwZU5vZGUgPSBtZXRhVHlwZU5vZGVCLCAvLy9cbiAgICAgICAgICAgICAgZnJhbWVOb2RlID0gZnJhbWVOb2RlQSwgLy8vXG4gICAgICAgICAgICAgIG1ldGFUeXBlID0gTWV0YVR5cGUuZnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICAgIGZyYW1lID0gRnJhbWUuZnJvbVRlcm1Ob2RlKGZyYW1lTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgICAgZnJhbWVWZXJpZmllZEdpdmVuVHlwZSA9IGZyYW1lLnZlcmlmeUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgdW5pZmllZCA9IGZyYW1lVmVyaWZpZWRHaXZlblR5cGU7XG5cbiAgICAgICAgcmV0dXJuIHVuaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnlBOiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgbm9kZVF1ZXJ5QjogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAodGVybU5vZGVBLCB0eXBlTm9kZUIsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgdW5pZmllZCA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHsgVGVybSwgVHlwZSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgdHlwZU5vZGUgPSB0eXBlTm9kZUIsIC8vL1xuICAgICAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tVHlwZU5vZGUodHlwZU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICAgIHR5cGVWZXJpZmllZCA9IHR5cGUudmVyaWZ5KGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHR5cGVWZXJpZmllZCkge1xuICAgICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybU5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICAgICAgdGVybVZlcmlmaWVkR2l2ZW5UeXBlID0gdGVybS52ZXJpZnlHaXZlblR5cGUodHlwZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgIGlmICh0ZXJtVmVyaWZpZWRHaXZlblR5cGUpIHtcbiAgICAgICAgICAgIHVuaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmlmaWVkO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3Qgc3RhdGVtZW50V2l0aENvbWJpbmF0b3JVbmlmaWVyID0gbmV3IFN0YXRlbWVudFdpdGhDb21iaW5hdG9yVW5pZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBzdGF0ZW1lbnRXaXRoQ29tYmluYXRvclVuaWZpZXI7XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJmcmFtZU5vZGVRdWVyeSIsIm1ldGFUeXBlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwiU3RhdGVtZW50V2l0aENvbWJpbmF0b3JVbmlmaWVyIiwidW5pZnkiLCJzdGF0ZW1lbnROb2RlIiwiY29tYmluYXRvclN0YXRlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImxvY2FsQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZWRXaXRoQ29tYmluYXRvciIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwibm9uVGVybWluYWxOb2RlVW5pZmllZCIsInVuaWZ5Tm9uVGVybWluYWxOb2RlIiwiVW5pZmllciIsIm1hcHMiLCJub2RlUXVlcnlBIiwibm9kZVF1ZXJ5QiIsInN0YXRlbWVudE5vZGVBIiwibWV0YVR5cGVOb2RlQiIsInVuaWZpZWQiLCJTdGF0ZW1lbnQiLCJzaGltIiwiTWV0YVR5cGUiLCJtZXRhVHlwZU5vZGUiLCJzdGF0ZW1lbnRlTm9kZSIsInN0YXRlbWVudGVOb2RlQSIsIm1ldGFUeXBlIiwiZnJvbU1ldGFUeXBlTm9kZSIsInN0YXRlbWVudGUiLCJmcm9tVGVybU5vZGUiLCJzdGF0ZW1lbnRlVmVyaWZpZWRHaXZlblR5cGUiLCJ2ZXJpZnlHaXZlbk1ldGFUeXBlIiwiZnJhbWVOb2RlQSIsIkZyYW1lIiwiZnJhbWVOb2RlIiwiZnJhbWUiLCJmcmFtZVZlcmlmaWVkR2l2ZW5UeXBlIiwidGVybU5vZGVBIiwidHlwZU5vZGVCIiwiVGVybSIsIlR5cGUiLCJ0eXBlTm9kZSIsInR5cGUiLCJmcm9tVHlwZU5vZGUiLCJ0eXBlVmVyaWZpZWQiLCJ2ZXJpZnkiLCJ0ZXJtTm9kZSIsInRlcm0iLCJ0ZXJtVmVyaWZpZWRHaXZlblR5cGUiLCJ2ZXJpZnlHaXZlblR5cGUiLCJzdGF0ZW1lbnRXaXRoQ29tYmluYXRvclVuaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTRGQTs7O2VBQUE7OzsyREExRmlCOzhEQUNHO3FCQUVNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsV0FDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQyxXQUMxQkUsaUJBQWlCRixJQUFBQSxnQkFBUyxFQUFDLFlBQzNCRyxvQkFBb0JILElBQUFBLGdCQUFTLEVBQUMsZUFDOUJJLHFCQUFxQkosSUFBQUEsZ0JBQVMsRUFBQztBQUVyQyxJQUFBLEFBQU1LLCtDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLGFBQWEsRUFBRUMsdUJBQXVCLEVBQUVDLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxZQUFZO2dCQUM3RSxJQUFJQztnQkFFSixJQUFNQyxtQkFBbUJOLGVBQ25CTyxtQkFBbUJOLHlCQUNuQk8seUJBQXlCLElBQUksQ0FBQ0Msb0JBQW9CLENBQUNILGtCQUFrQkMsa0JBQWtCTCxhQUFhQyxRQUFRQztnQkFFbEhDLGlDQUFpQ0csd0JBQXdCLEdBQUc7Z0JBRTVELE9BQU9IO1lBQ1Q7OztXQVhJUDtFQUF1Q1ksZ0JBQU87QUFhbEQsaUJBYklaLGdDQWFHYSxRQUFPO0lBQ1o7UUFDRUMsWUFBWWY7UUFDWmdCLFlBQVlqQjtRQUNaRyxPQUFPLFNBQUNlLGdCQUFnQkMsZUFBZWIsYUFBYUMsUUFBUUM7WUFDMUQsSUFBSVk7WUFFSixJQUFRQyxZQUF3QkMsYUFBSSxDQUE1QkQsV0FBV0UsV0FBYUQsYUFBSSxDQUFqQkMsVUFDYkMsZUFBZUwsZUFDZk0saUJBQWlCQyxpQkFDakJDLFdBQVdKLFNBQVNLLGdCQUFnQixDQUFDSixjQUFjaEIsZUFDbkRxQixhQUFhUixVQUFVUyxZQUFZLENBQUNMLGdCQUFnQmpCLGVBQ3BEdUIsOEJBQThCRixXQUFXRyxtQkFBbUIsQ0FBQ0wsVUFBVW5CO1lBRTdFWSxVQUFVVztZQUVWLE9BQU9YO1FBQ1Q7SUFDRjtJQUNBO1FBQ0VKLFlBQVlqQjtRQUNaa0IsWUFBWWpCO1FBQ1pHLE9BQU8sU0FBQzhCLFlBQVlkLGVBQWViLGFBQWFDLFFBQVFDO1lBQ3RELElBQUlZO1lBRUosSUFBUWMsUUFBb0JaLGFBQUksQ0FBeEJZLE9BQU9YLFdBQWFELGFBQUksQ0FBakJDLFVBQ1RDLGVBQWVMLGVBQ2ZnQixZQUFZRixZQUNaTixXQUFXSixTQUFTSyxnQkFBZ0IsQ0FBQ0osY0FBY2hCLGVBQ25ENEIsUUFBUUYsTUFBTUosWUFBWSxDQUFDSyxXQUFXM0IsZUFDdEM2Qix5QkFBeUJELE1BQU1KLG1CQUFtQixDQUFDTCxVQUFVbkI7WUFFbkVZLFVBQVVpQjtZQUVWLE9BQU9qQjtRQUNUO0lBQ0Y7SUFDQTtRQUNFSixZQUFZcEI7UUFDWnFCLFlBQVluQjtRQUNaSyxPQUFPLFNBQUNtQyxXQUFXQyxXQUFXakMsYUFBYUMsUUFBUUM7WUFDakQsSUFBSVksVUFBVTtZQUVkLElBQVFvQixPQUFlbEIsYUFBSSxDQUFuQmtCLE1BQU1DLE9BQVNuQixhQUFJLENBQWJtQixNQUNSQyxXQUFXSCxXQUNYSSxPQUFPRixLQUFLRyxZQUFZLENBQUNGLFVBQVVsQyxlQUNuQ3FDLGVBQWVGLEtBQUtHLE1BQU0sQ0FBQ3RDO1lBRWpDLElBQUlxQyxjQUFjO2dCQUNoQixJQUFNRSxXQUFXVCxXQUNYVSxPQUFPUixLQUFLVixZQUFZLENBQUNpQixVQUFVdkMsZUFDbkN5Qyx3QkFBd0JELEtBQUtFLGVBQWUsQ0FBQ1AsTUFBTW5DO2dCQUV6RCxJQUFJeUMsdUJBQXVCO29CQUN6QjdCLFVBQVU7Z0JBQ1o7WUFDRjtZQUVBLE9BQU9BO1FBQ1Q7SUFDRjtDQUNEO0FBR0gsSUFBTStCLGlDQUFpQyxJQUFJakQ7SUFFM0MsV0FBZWlEIn0=