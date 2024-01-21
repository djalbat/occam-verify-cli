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
var _equality = /*#__PURE__*/ _interop_require_default(require("./verifier/nodes/equality"));
var _collection = require("./utilities/collection");
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
            value: function isEqual(context) {
                var equal;
                var leftTerm = this.getLeftTerm(), rightTerm = this.getRightTerm(), collections = context.getCollections(), leftTermNode = leftTerm.getNode(), rightTermNode = rightTerm.getNode(), termNodesEqual = (0, _collection.areTermNodesEqual)(leftTermNode, rightTermNode, collections);
                if (termNodesEqual) {
                    equal = true;
                } else {
                    var leftNonTerminalNode = leftTermNode, rightNonTerminalNode = rightTermNode, leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(), rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(), childNodesA = leftNonTerminalNodeChildNodes, childNodesB = rightNonTerminalNodeChildNodes, localContext = this, childNodesVerify = _equality.default.verifyChildNodes(childNodesA, childNodesB, collections, localContext, function() {
                        var verifiedAhead = true;
                        return verifiedAhead;
                    });
                    equal = childNodesVerify; ///
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVxdWFsaXR5Tm9kZXNWZXJpZmllciBmcm9tIFwiLi92ZXJpZmllci9ub2Rlcy9lcXVhbGl0eVwiO1xuXG5pbXBvcnQgeyBhcmVUZXJtTm9kZXNFcXVhbCB9IGZyb20gXCIuL3V0aWxpdGllcy9jb2xsZWN0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVxdWFsaXR5IHtcbiAgY29uc3RydWN0b3Iobm9kZSwgbGVmdFRlcm0sIHJpZ2h0VGVybSkge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5sZWZ0VGVybSA9IGxlZnRUZXJtO1xuICAgIHRoaXMucmlnaHRUZXJtID0gcmlnaHRUZXJtO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFRlcm07XG4gIH1cblxuICBnZXRSaWdodFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRUZXJtO1xuICB9XG5cbiAgaXNSZWZsZXhpdmUoKSB7XG4gICAgY29uc3QgbGVmdFRlcm1NYXRjaGVzUmlnaHRUZXJtID0gdGhpcy5sZWZ0VGVybS5tYXRjaCh0aGlzLnJpZ2h0VGVybSksXG4gICAgICAgICAgcmVmbGV4aXZlID0gbGVmdFRlcm1NYXRjaGVzUmlnaHRUZXJtOyAvLy9cblxuICAgIHJldHVybiByZWZsZXhpdmU7XG4gIH1cblxuICBpc0VxdWFsKGNvbnRleHQpIHtcbiAgICBsZXQgZXF1YWw7XG5cbiAgICBjb25zdCBsZWZ0VGVybSA9IHRoaXMuZ2V0TGVmdFRlcm0oKSxcbiAgICAgICAgICByaWdodFRlcm0gPSB0aGlzLmdldFJpZ2h0VGVybSgpLFxuICAgICAgICAgIGNvbGxlY3Rpb25zID0gY29udGV4dC5nZXRDb2xsZWN0aW9ucygpLFxuICAgICAgICAgIGxlZnRUZXJtTm9kZSA9IGxlZnRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICByaWdodFRlcm1Ob2RlID0gcmlnaHRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtTm9kZXNFcXVhbCA9IGFyZVRlcm1Ob2Rlc0VxdWFsKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgY29sbGVjdGlvbnMpO1xuXG4gICAgaWYgKHRlcm1Ob2Rlc0VxdWFsKSB7XG4gICAgICBlcXVhbCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGUgPSBsZWZ0VGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGUgPSByaWdodFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgIGxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gbGVmdE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSByaWdodE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICBjaGlsZE5vZGVzQSA9IGxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVzQiA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICBsb2NhbENvbnRleHQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZ5ID0gZXF1YWxpdHlOb2Rlc1ZlcmlmaWVyLnZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2Rlc0EsIGNoaWxkTm9kZXNCLCBjb2xsZWN0aW9ucywgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGVxdWFsID0gY2hpbGROb2Rlc1ZlcmlmeTsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGVmdFRlcm1SaWdodFRlcm1BbmRFcXVhbGl0eU5vZGUobGVmdFRlcm0sIHJpZ2h0VGVybSwgZXF1YWxpdHlOb2RlKSB7XG4gICAgbGV0IGVxdWFsaXR5ID0gbnVsbDtcblxuICAgIGNvbnN0IGxlZnRUZXJtVHlwZSA9IGxlZnRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICByaWdodFRlcm1UeXBlID0gcmlnaHRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICBsZWZ0VGVybVR5cGVDb21wYXJhYmxlVG9SaWdodFRlcm1UeXBlID0gbGVmdFRlcm1UeXBlLmlzQ29tcGFyYWJsZVRvKHJpZ2h0VGVybVR5cGUpO1xuXG4gICAgaWYgKGxlZnRUZXJtVHlwZUNvbXBhcmFibGVUb1JpZ2h0VGVybVR5cGUpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBlcXVhbGl0eU5vZGU7ICAvLy9cblxuICAgICAgZXF1YWxpdHkgPSBuZXcgRXF1YWxpdHkobm9kZSwgbGVmdFRlcm0sIHJpZ2h0VGVybSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsaXR5O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRXF1YWxpdHkiLCJub2RlIiwibGVmdFRlcm0iLCJyaWdodFRlcm0iLCJnZXROb2RlIiwiZ2V0TGVmdFRlcm0iLCJnZXRSaWdodFRlcm0iLCJpc1JlZmxleGl2ZSIsImxlZnRUZXJtTWF0Y2hlc1JpZ2h0VGVybSIsIm1hdGNoIiwicmVmbGV4aXZlIiwiaXNFcXVhbCIsImNvbnRleHQiLCJlcXVhbCIsImNvbGxlY3Rpb25zIiwiZ2V0Q29sbGVjdGlvbnMiLCJsZWZ0VGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwidGVybU5vZGVzRXF1YWwiLCJhcmVUZXJtTm9kZXNFcXVhbCIsImxlZnROb25UZXJtaW5hbE5vZGUiLCJyaWdodE5vblRlcm1pbmFsTm9kZSIsImxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsImNoaWxkTm9kZXNBIiwiY2hpbGROb2Rlc0IiLCJsb2NhbENvbnRleHQiLCJjaGlsZE5vZGVzVmVyaWZ5IiwiZXF1YWxpdHlOb2Rlc1ZlcmlmaWVyIiwidmVyaWZ5Q2hpbGROb2RlcyIsInZlcmlmaWVkQWhlYWQiLCJmcm9tTGVmdFRlcm1SaWdodFRlcm1BbmRFcXVhbGl0eU5vZGUiLCJlcXVhbGl0eU5vZGUiLCJlcXVhbGl0eSIsImxlZnRUZXJtVHlwZSIsImdldFR5cGUiLCJyaWdodFRlcm1UeXBlIiwibGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZSIsImlzQ29tcGFyYWJsZVRvIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsrREFKYTswQkFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQixJQUFBLEFBQU1BLHlCQUFELEFBQUw7YUFBTUEsU0FDUEMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLFNBQVM7Z0NBRGxCSDtRQUVqQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOztrQkFKQUg7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFNBQVM7WUFDdkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsMkJBQTJCLElBQUksQ0FBQ04sUUFBUSxDQUFDTyxLQUFLLENBQUMsSUFBSSxDQUFDTixTQUFTLEdBQzdETyxZQUFZRiwwQkFBMEIsR0FBRztnQkFFL0MsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxPQUFPO2dCQUNiLElBQUlDO2dCQUVKLElBQU1YLFdBQVcsSUFBSSxDQUFDRyxXQUFXLElBQzNCRixZQUFZLElBQUksQ0FBQ0csWUFBWSxJQUM3QlEsY0FBY0YsUUFBUUcsY0FBYyxJQUNwQ0MsZUFBZWQsU0FBU0UsT0FBTyxJQUMvQmEsZ0JBQWdCZCxVQUFVQyxPQUFPLElBQ2pDYyxpQkFBaUJDLElBQUFBLDZCQUFpQixFQUFDSCxjQUFjQyxlQUFlSDtnQkFFdEUsSUFBSUksZ0JBQWdCO29CQUNsQkwsUUFBUTtnQkFDVixPQUFPO29CQUNMLElBQU1PLHNCQUFzQkosY0FDdEJLLHVCQUF1QkosZUFDdkJLLGdDQUFnQ0Ysb0JBQW9CRyxhQUFhLElBQ2pFQyxpQ0FBaUNILHFCQUFxQkUsYUFBYSxJQUNuRUUsY0FBY0gsK0JBQ2RJLGNBQWNGLGdDQUNkRyxlQUFlLElBQUksRUFDbkJDLG1CQUFtQkMsaUJBQXFCLENBQUNDLGdCQUFnQixDQUFDTCxhQUFhQyxhQUFhWixhQUFhYSxjQUFjO3dCQUM3RyxJQUFNSSxnQkFBZ0I7d0JBRXRCLE9BQU9BO29CQUNUO29CQUVObEIsUUFBUWUsa0JBQW1CLEdBQUc7Z0JBQ2hDO2dCQUVBLE9BQU9mO1lBQ1Q7Ozs7WUFFT21CLEtBQUFBO21CQUFQLFNBQU9BLHFDQUFxQzlCLFFBQVEsRUFBRUMsU0FBUyxFQUFFOEIsWUFBWTtnQkFDM0UsSUFBSUMsV0FBVztnQkFFZixJQUFNQyxlQUFlakMsU0FBU2tDLE9BQU8sSUFDL0JDLGdCQUFnQmxDLFVBQVVpQyxPQUFPLElBQ2pDRSx3Q0FBd0NILGFBQWFJLGNBQWMsQ0FBQ0Y7Z0JBRTFFLElBQUlDLHVDQUF1QztvQkFDekMsSUFBTXJDLE9BQU9nQyxjQUFlLEdBQUc7b0JBRS9CQyxXQUFXLElBcEVJbEMsU0FvRVNDLE1BQU1DLFVBQVVDO2dCQUMxQztnQkFFQSxPQUFPK0I7WUFDVDs7O1dBeEVtQmxDIn0=