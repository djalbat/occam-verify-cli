"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Equality;
    }
});
var _equality = /*#__PURE__*/ _interop_require_default(require("./unifier/equality"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Equality = /*#__PURE__*/ function() {
    function Equality(node, leftTerm, rightTerm) {
        _class_call_check(this, Equality);
        this.node = node;
        this.leftTerm = leftTerm;
        this.rightTerm = rightTerm;
    }
    _create_class(Equality, [
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getLeftTerm",
            value: function getLeftTerm() {
                return this.leftTerm;
            }
        },
        {
            key: "getRightTerm",
            value: function getRightTerm() {
                return this.rightTerm;
            }
        },
        {
            key: "isReflexive",
            value: function isReflexive() {
                var leftTermMatchesRightTerm = this.leftTerm.match(this.rightTerm), reflexive = leftTermMatchesRightTerm; ///
                return reflexive;
            }
        },
        {
            key: "isEqual",
            value: function isEqual(localContext) {
                var leftTermNode = this.leftTerm.getNode(), rightTermNode = this.rightTerm.getNode(), equalityUnified = _equality.default.unify(leftTermNode, rightTermNode, localContext), equal = equalityUnified; ///
                return equal;
            }
        }
    ], [
        {
            key: "fromLeftTermRightTermAndEqualityNode",
            value: function fromLeftTermRightTermAndEqualityNode(leftTerm, rightTerm, equalityNode) {
                var equality = null;
                var leftTermType = leftTerm.getType(), rightTermType = rightTerm.getType(), leftTermTypeComparableToRightTermType = leftTermType.isComparableTo(rightTermType);
                if (leftTermTypeComparableToRightTermType) {
                    var node = equalityNode; ///
                    equality = new Equality(node, leftTerm, rightTerm);
                }
                return equality;
            }
        }
    ]);
    return Equality;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVxdWFsaXR5VW5pZmllciBmcm9tIFwiLi91bmlmaWVyL2VxdWFsaXR5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVxdWFsaXR5IHtcbiAgY29uc3RydWN0b3Iobm9kZSwgbGVmdFRlcm0sIHJpZ2h0VGVybSkge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5sZWZ0VGVybSA9IGxlZnRUZXJtO1xuICAgIHRoaXMucmlnaHRUZXJtID0gcmlnaHRUZXJtO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFRlcm07XG4gIH1cblxuICBnZXRSaWdodFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRUZXJtO1xuICB9XG5cbiAgaXNSZWZsZXhpdmUoKSB7XG4gICAgY29uc3QgbGVmdFRlcm1NYXRjaGVzUmlnaHRUZXJtID0gdGhpcy5sZWZ0VGVybS5tYXRjaCh0aGlzLnJpZ2h0VGVybSksXG4gICAgICAgICAgcmVmbGV4aXZlID0gbGVmdFRlcm1NYXRjaGVzUmlnaHRUZXJtOyAvLy9cblxuICAgIHJldHVybiByZWZsZXhpdmU7XG4gIH1cblxuICBpc0VxdWFsKGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IGxlZnRUZXJtTm9kZSA9IHRoaXMubGVmdFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSB0aGlzLnJpZ2h0VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgZXF1YWxpdHlVbmlmaWVkID0gZXF1YWxpdHlVbmlmaWVyLnVuaWZ5KGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICBlcXVhbCA9IGVxdWFsaXR5VW5pZmllZDsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsO1xuICB9XG5cbiAgc3RhdGljIGZyb21MZWZ0VGVybVJpZ2h0VGVybUFuZEVxdWFsaXR5Tm9kZShsZWZ0VGVybSwgcmlnaHRUZXJtLCBlcXVhbGl0eU5vZGUpIHtcbiAgICBsZXQgZXF1YWxpdHkgPSBudWxsO1xuXG4gICAgY29uc3QgbGVmdFRlcm1UeXBlID0gbGVmdFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSByaWdodFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIGxlZnRUZXJtVHlwZUNvbXBhcmFibGVUb1JpZ2h0VGVybVR5cGUgPSBsZWZ0VGVybVR5cGUuaXNDb21wYXJhYmxlVG8ocmlnaHRUZXJtVHlwZSk7XG5cbiAgICBpZiAobGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZSkge1xuICAgICAgY29uc3Qgbm9kZSA9IGVxdWFsaXR5Tm9kZTsgIC8vL1xuXG4gICAgICBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShub2RlLCBsZWZ0VGVybSwgcmlnaHRUZXJtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFcXVhbGl0eSIsIm5vZGUiLCJsZWZ0VGVybSIsInJpZ2h0VGVybSIsImdldE5vZGUiLCJnZXRMZWZ0VGVybSIsImdldFJpZ2h0VGVybSIsImlzUmVmbGV4aXZlIiwibGVmdFRlcm1NYXRjaGVzUmlnaHRUZXJtIiwibWF0Y2giLCJyZWZsZXhpdmUiLCJpc0VxdWFsIiwibG9jYWxDb250ZXh0IiwibGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImVxdWFsaXR5VW5pZmllZCIsImVxdWFsaXR5VW5pZmllciIsInVuaWZ5IiwiZXF1YWwiLCJmcm9tTGVmdFRlcm1SaWdodFRlcm1BbmRFcXVhbGl0eU5vZGUiLCJlcXVhbGl0eU5vZGUiLCJlcXVhbGl0eSIsImxlZnRUZXJtVHlwZSIsImdldFR5cGUiLCJyaWdodFRlcm1UeXBlIiwibGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZSIsImlzQ29tcGFyYWJsZVRvIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzsrREFGTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUViLElBQUEsQUFBTUEseUJBQUQsQUFBTDthQUFNQSxTQUNQQyxJQUFJLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztnQ0FEbEJIO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7O2tCQUpBSDs7WUFPbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsU0FBUztZQUN2Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQywyQkFBMkIsSUFBSSxDQUFDTixRQUFRLENBQUNPLEtBQUssQ0FBQyxJQUFJLENBQUNOLFNBQVMsR0FDN0RPLFlBQVlGLDBCQUEwQixHQUFHO2dCQUUvQyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLFlBQVk7Z0JBQ2xCLElBQU1DLGVBQWUsSUFBSSxDQUFDWCxRQUFRLENBQUNFLE9BQU8sSUFDcENVLGdCQUFnQixJQUFJLENBQUNYLFNBQVMsQ0FBQ0MsT0FBTyxJQUN0Q1csa0JBQWtCQyxpQkFBZSxDQUFDQyxLQUFLLENBQUNKLGNBQWNDLGVBQWVGLGVBQ3JFTSxRQUFRSCxpQkFBa0IsR0FBRztnQkFFbkMsT0FBT0c7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxxQ0FBcUNqQixRQUFRLEVBQUVDLFNBQVMsRUFBRWlCLFlBQVk7Z0JBQzNFLElBQUlDLFdBQVc7Z0JBRWYsSUFBTUMsZUFBZXBCLFNBQVNxQixPQUFPLElBQy9CQyxnQkFBZ0JyQixVQUFVb0IsT0FBTyxJQUNqQ0Usd0NBQXdDSCxhQUFhSSxjQUFjLENBQUNGO2dCQUUxRSxJQUFJQyx1Q0FBdUM7b0JBQ3pDLElBQU14QixPQUFPbUIsY0FBZSxHQUFHO29CQUUvQkMsV0FBVyxJQTdDSXJCLFNBNkNTQyxNQUFNQyxVQUFVQztnQkFDMUM7Z0JBRUEsT0FBT2tCO1lBQ1Q7OztXQWpEbUJyQiJ9