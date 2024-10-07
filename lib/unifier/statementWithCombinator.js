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
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
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
            var Frame = _shim.default.Frame, MetaType = _shim.default.MetaType, metaTypeNode = metaTypeNodeB, frameNode = frameNodeA, metaType = MetaType.fromMetaTypeNode(metaTypeNode, localContext), frame = Frame.fromFrameNode(frameNode, localContext), frameVerifiedGivenType = frame.verifyGivenMetaType(metaType, localContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL3N0YXRlbWVudFdpdGhDb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFVuaWZpZXIgZnJvbSBcIi4uL3VuaWZpZXJcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCBsb2NhbCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0hXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlIVwiKSxcbiAgICAgIGZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lIVwiKSxcbiAgICAgIG1ldGFUeXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFUeXBlIVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQhXCIpO1xuXG5jbGFzcyBTdGF0ZW1lbnRXaXRoQ29tYmluYXRvclVuaWZpZXIgZXh0ZW5kcyBVbmlmaWVyIHtcbiAgdW5pZnkoc3RhdGVtZW50Tm9kZSwgY29tYmluYXRvclN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbWJpbmF0b3I7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVVbmlmaWVkID0gdGhpcy51bmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZFdpdGhDb21iaW5hdG9yID0gbm9uVGVybWluYWxOb2RlVW5pZmllZDsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZFdpdGhDb21iaW5hdG9yO1xuICB9O1xuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIG5vZGVRdWVyeUE6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIG5vZGVRdWVyeUI6IG1ldGFUeXBlTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6IChzdGF0ZW1lbnROb2RlQSwgbWV0YVR5cGVOb2RlQiwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCB1bmlmaWVkO1xuXG4gICAgICAgIGNvbnN0IHsgU3RhdGVtZW50LCBNZXRhVHlwZSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgbWV0YVR5cGVOb2RlID0gbWV0YVR5cGVOb2RlQiwgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlQSwgLy8vXG4gICAgICAgICAgICAgIG1ldGFUeXBlID0gTWV0YVR5cGUuZnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZEdpdmVuVHlwZSA9IHN0YXRlbWVudC52ZXJpZnlHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIHVuaWZpZWQgPSBzdGF0ZW1lbnRWZXJpZmllZEdpdmVuVHlwZTtcblxuICAgICAgICByZXR1cm4gdW5pZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeUE6IGZyYW1lTm9kZVF1ZXJ5LFxuICAgICAgbm9kZVF1ZXJ5QjogbWV0YVR5cGVOb2RlUXVlcnksXG4gICAgICB1bmlmeTogKGZyYW1lTm9kZUEsIG1ldGFUeXBlTm9kZUIsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgdW5pZmllZDtcblxuICAgICAgICBjb25zdCB7IEZyYW1lLCBNZXRhVHlwZSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgbWV0YVR5cGVOb2RlID0gbWV0YVR5cGVOb2RlQiwgLy8vXG4gICAgICAgICAgICAgIGZyYW1lTm9kZSA9IGZyYW1lTm9kZUEsIC8vL1xuICAgICAgICAgICAgICBtZXRhVHlwZSA9IE1ldGFUeXBlLmZyb21NZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgICBmcmFtZSA9IEZyYW1lLmZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgICBmcmFtZVZlcmlmaWVkR2l2ZW5UeXBlID0gZnJhbWUudmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICB1bmlmaWVkID0gZnJhbWVWZXJpZmllZEdpdmVuVHlwZTtcblxuICAgICAgICByZXR1cm4gdW5pZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeUE6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBub2RlUXVlcnlCOiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6ICh0ZXJtTm9kZUEsIHR5cGVOb2RlQiwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCB1bmlmaWVkID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgeyBUZXJtIH0gPSBzaGltLFxuICAgICAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlQiwgLy8vXG4gICAgICAgICAgICAgIHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgICAgICB0eXBlID0gbG9jYWxDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1Ob2RlQSwgLy8vXG4gICAgICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgICAgIHRlcm1WZXJpZmllZEdpdmVuVHlwZSA9IHRlcm0udmVyaWZ5R2l2ZW5UeXBlKHR5cGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAodGVybVZlcmlmaWVkR2l2ZW5UeXBlKSB7XG4gICAgICAgICAgICB1bmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5pZmllZDtcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IHN0YXRlbWVudFdpdGhDb21iaW5hdG9yVW5pZmllciA9IG5ldyBTdGF0ZW1lbnRXaXRoQ29tYmluYXRvclVuaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RhdGVtZW50V2l0aENvbWJpbmF0b3JVbmlmaWVyO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwiZnJhbWVOb2RlUXVlcnkiLCJtZXRhVHlwZU5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsIlN0YXRlbWVudFdpdGhDb21iaW5hdG9yVW5pZmllciIsInVuaWZ5Iiwic3RhdGVtZW50Tm9kZSIsImNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlIiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJsb2NhbENvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbWJpbmF0b3IiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsIm5vblRlcm1pbmFsTm9kZVVuaWZpZWQiLCJ1bmlmeU5vblRlcm1pbmFsTm9kZSIsIlVuaWZpZXIiLCJtYXBzIiwibm9kZVF1ZXJ5QSIsIm5vZGVRdWVyeUIiLCJzdGF0ZW1lbnROb2RlQSIsIm1ldGFUeXBlTm9kZUIiLCJ1bmlmaWVkIiwiU3RhdGVtZW50Iiwic2hpbSIsIk1ldGFUeXBlIiwibWV0YVR5cGVOb2RlIiwibWV0YVR5cGUiLCJmcm9tTWV0YVR5cGVOb2RlIiwic3RhdGVtZW50IiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRWZXJpZmllZEdpdmVuVHlwZSIsInZlcmlmeUdpdmVuTWV0YVR5cGUiLCJmcmFtZU5vZGVBIiwiRnJhbWUiLCJmcmFtZU5vZGUiLCJmcmFtZSIsImZyb21GcmFtZU5vZGUiLCJmcmFtZVZlcmlmaWVkR2l2ZW5UeXBlIiwidGVybU5vZGVBIiwidHlwZU5vZGVCIiwiVGVybSIsInR5cGVOb2RlIiwidHlwZU5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsInR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0ZXJtTm9kZSIsInRlcm0iLCJmcm9tVGVybU5vZGUiLCJ0ZXJtVmVyaWZpZWRHaXZlblR5cGUiLCJ2ZXJpZnlHaXZlblR5cGUiLCJzdGF0ZW1lbnRXaXRoQ29tYmluYXRvclVuaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQThGQTs7O2VBQUE7OzsyREE1RmlCOzhEQUNHO3FCQUVNO29CQUNXOzREQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLFdBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUMsV0FDMUJFLGlCQUFpQkYsSUFBQUEsZ0JBQVMsRUFBQyxZQUMzQkcsb0JBQW9CSCxJQUFBQSxnQkFBUyxFQUFDLGVBQzlCSSxxQkFBcUJKLElBQUFBLGdCQUFTLEVBQUM7QUFFckMsSUFBQSxBQUFNSywrQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxhQUFhLEVBQUVDLHVCQUF1QixFQUFFQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsWUFBWTtnQkFDN0UsSUFBSUM7Z0JBRUosSUFBTUMsbUJBQW1CTixlQUNuQk8sbUJBQW1CTix5QkFDbkJPLHlCQUF5QixJQUFJLENBQUNDLG9CQUFvQixDQUFDSCxrQkFBa0JDLGtCQUFrQkwsYUFBYUMsUUFBUUM7Z0JBRWxIQyxpQ0FBaUNHLHdCQUF3QixHQUFHO2dCQUU1RCxPQUFPSDtZQUNUOzs7V0FYSVA7RUFBdUNZLGdCQUFPO0FBYWxELGlCQWJJWixnQ0FhR2EsUUFBTztJQUNaO1FBQ0VDLFlBQVlmO1FBQ1pnQixZQUFZakI7UUFDWkcsT0FBTyxTQUFDZSxnQkFBZ0JDLGVBQWViLGFBQWFDLFFBQVFDO1lBQzFELElBQUlZO1lBRUosSUFBUUMsWUFBd0JDLGFBQUksQ0FBNUJELFdBQVdFLFdBQWFELGFBQUksQ0FBakJDLFVBQ2JDLGVBQWVMLGVBQ2ZmLGdCQUFnQmMsZ0JBQ2hCTyxXQUFXRixTQUFTRyxnQkFBZ0IsQ0FBQ0YsY0FBY2hCLGVBQ25EbUIsWUFBWU4sVUFBVU8saUJBQWlCLENBQUN4QixlQUFlSSxlQUN2RHFCLDZCQUE2QkYsVUFBVUcsbUJBQW1CLENBQUNMLFVBQVVuQixhQUFhQyxRQUFRQztZQUVoR1ksVUFBVVM7WUFFVixPQUFPVDtRQUNUO0lBQ0Y7SUFDQTtRQUNFSixZQUFZakI7UUFDWmtCLFlBQVlqQjtRQUNaRyxPQUFPLFNBQUM0QixZQUFZWixlQUFlYixhQUFhQyxRQUFRQztZQUN0RCxJQUFJWTtZQUVKLElBQVFZLFFBQW9CVixhQUFJLENBQXhCVSxPQUFPVCxXQUFhRCxhQUFJLENBQWpCQyxVQUNUQyxlQUFlTCxlQUNmYyxZQUFZRixZQUNaTixXQUFXRixTQUFTRyxnQkFBZ0IsQ0FBQ0YsY0FBY2hCLGVBQ25EMEIsUUFBUUYsTUFBTUcsYUFBYSxDQUFDRixXQUFXekIsZUFDdkM0Qix5QkFBeUJGLE1BQU1KLG1CQUFtQixDQUFDTCxVQUFVakI7WUFFbkVZLFVBQVVnQjtZQUVWLE9BQU9oQjtRQUNUO0lBQ0Y7SUFDQTtRQUNFSixZQUFZcEI7UUFDWnFCLFlBQVluQjtRQUNaSyxPQUFPLFNBQUNrQyxXQUFXQyxXQUFXaEMsYUFBYUMsUUFBUUM7WUFDakQsSUFBSVksVUFBVTtZQUVkLElBQU0sQUFBRW1CLE9BQVNqQixhQUFJLENBQWJpQixNQUNGQyxXQUFXRixXQUNYRyxXQUFXQyxJQUFBQSwwQkFBb0IsRUFBQ0YsV0FDaENHLE9BQU9uQyxhQUFhb0Msa0JBQWtCLENBQUNIO1lBRTdDLElBQUlFLFNBQVMsTUFBTTtnQkFDakIsSUFBTUUsV0FBV1IsV0FDWFMsT0FBT1AsS0FBS1EsWUFBWSxDQUFDRixVQUFVckMsZUFDbkN3Qyx3QkFBd0JGLEtBQUtHLGVBQWUsQ0FBQ04sTUFBTW5DO2dCQUV6RCxJQUFJd0MsdUJBQXVCO29CQUN6QjVCLFVBQVU7Z0JBQ1o7WUFDRjtZQUVBLE9BQU9BO1FBQ1Q7SUFDRjtDQUNEO0FBR0gsSUFBTThCLGlDQUFpQyxJQUFJaEQ7SUFFM0MsV0FBZWdEIn0=