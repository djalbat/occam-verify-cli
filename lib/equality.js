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
var Equality = /*#__PURE__*/ function() {
    function Equality(leftTerm, rightTerm) {
        _class_call_check(this, Equality);
        this.leftTerm = leftTerm;
        this.rightTerm = rightTerm;
    }
    _create_class(Equality, [
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
                var leftTermMatchesRightTerm = this.leftTerm.match(this.rightTerm), reflexive = leftTermMatchesRightTerm;
                return reflexive;
            }
        }
    ], [
        {
            key: "fromLeftTermAndRightTerm",
            value: // matchTermNodes(leftTermNode, rightTermNode, reversed, equalities, context) {
            //   let termNodesMatch = true;
            //
            //   if (termNodesMatch) {
            //     const leftNonTerminalNode = reversed ?
            //                                   this.rightTermNode :
            //                                     this.leftTermNode,  ///
            //           rightNonTerminalNode = leftTermNode,  ///
            //           nonTerminalNodeVerified = equalityNodesVerifier.verifyNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context);
            //
            //     termNodesMatch = nonTerminalNodeVerified; ///
            //   }
            //
            //   if (termNodesMatch) {
            //     const leftNonTerminalNode = reversed ?
            //                                   this.leftTermNode :
            //                                     this.rightTermNode,  ///
            //           rightNonTerminalNode = rightTermNode,  ///
            //           nonTerminalNodeVerified = equalityNodesVerifier.verifyNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context);
            //
            //     termNodesMatch = nonTerminalNodeVerified; ///
            //   }
            //
            //   return termNodesMatch;
            // }
            // match(equality, equalities, context) {
            //   let matches = false;
            //
            //   const leftTermNode = equality.getLeftTermNode(),
            //         rightTermNode = equality.getRightTermNode();
            //
            //   equalities = filterEqualities(equalities, equality);  ///
            //
            //   if (!matches) {
            //     const reversed = false,
            //           leftTermNodeAndRightTermNodeMatch = this.matchTermNodes(leftTermNode, rightTermNode, reversed, equalities, context);
            //
            //     matches = leftTermNodeAndRightTermNodeMatch;  ///
            //   }
            //
            //   if (!matches) {
            //     const reversed = true,
            //           leftTermNodeAndRightTermNodeMatch = this.matchTermNodes(leftTermNode, rightTermNode, reversed, equalities, context);
            //
            //     matches = leftTermNodeAndRightTermNodeMatch;  ///
            //   }
            //
            //   return matches;
            // }
            // verify(equalities, context, verifyAhead) {
            //   const leftNonTerminalNode = this.leftTermNode,  ///
            //         rightNonTerminalNode = this.rightTermNode,  ///
            //         nonTerminalNodeVerified = equalityNodesVerifier.verifyNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context, verifyAhead),
            //         verified = nonTerminalNodeVerified; ///
            //
            //   return verified;
            // }
            function fromLeftTermAndRightTerm(leftTerm, rightTerm) {
                var equality = null;
                var leftTermType = leftTerm.getType(), rightTermType = rightTerm.getType(), leftTermTypeEqualToSubTypeOfOrSuperTypeOfRightTermType = leftTermType.isEqualToSubTypeOfOrSuperTypeOf(rightTermType);
                if (leftTermTypeEqualToSubTypeOfOrSuperTypeOfRightTermType) {
                    equality = new Equality(leftTerm, rightTerm);
                }
                return equality;
            }
        }
    ]);
    return Equality;
} // function filterEqualities(equalities, equality) {
 //   const equalityA = equality; ///
 //
 //   equalities = equalities.filter((equality) => {
 //     const equalityB = equality; ///
 //
 //     if (equalityA !== equalityB) {
 //       return true;
 //     }
 //   });
 //
 //   return equalities;
 // }
();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXF1YWxpdHkge1xuICBjb25zdHJ1Y3RvcihsZWZ0VGVybSwgcmlnaHRUZXJtKSB7XG4gICAgdGhpcy5sZWZ0VGVybSA9IGxlZnRUZXJtO1xuICAgIHRoaXMucmlnaHRUZXJtID0gcmlnaHRUZXJtO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFRlcm07XG4gIH1cblxuICBnZXRSaWdodFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRUZXJtO1xuICB9XG5cbiAgaXNSZWZsZXhpdmUoKSB7XG4gICAgY29uc3QgbGVmdFRlcm1NYXRjaGVzUmlnaHRUZXJtID0gdGhpcy5sZWZ0VGVybS5tYXRjaCh0aGlzLnJpZ2h0VGVybSksXG4gICAgICAgICAgcmVmbGV4aXZlID0gbGVmdFRlcm1NYXRjaGVzUmlnaHRUZXJtO1xuXG4gICAgcmV0dXJuIHJlZmxleGl2ZTtcbiAgfVxuXG4gIC8vIG1hdGNoVGVybU5vZGVzKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgcmV2ZXJzZWQsIGVxdWFsaXRpZXMsIGNvbnRleHQpIHtcbiAgLy8gICBsZXQgdGVybU5vZGVzTWF0Y2ggPSB0cnVlO1xuICAvL1xuICAvLyAgIGlmICh0ZXJtTm9kZXNNYXRjaCkge1xuICAvLyAgICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZSA9IHJldmVyc2VkID9cbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRUZXJtTm9kZSA6XG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdFRlcm1Ob2RlLCAgLy8vXG4gIC8vICAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZSA9IGxlZnRUZXJtTm9kZSwgIC8vL1xuICAvLyAgICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBlcXVhbGl0eU5vZGVzVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKGxlZnROb25UZXJtaW5hbE5vZGUsIHJpZ2h0Tm9uVGVybWluYWxOb2RlLCBlcXVhbGl0aWVzLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICAgIHRlcm1Ob2Rlc01hdGNoID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7IC8vL1xuICAvLyAgIH1cbiAgLy9cbiAgLy8gICBpZiAodGVybU5vZGVzTWF0Y2gpIHtcbiAgLy8gICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGUgPSByZXZlcnNlZCA/XG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRUZXJtTm9kZSA6XG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRUZXJtTm9kZSwgIC8vL1xuICAvLyAgICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGUgPSByaWdodFRlcm1Ob2RlLCAgLy8vXG4gIC8vICAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGVxdWFsaXR5Tm9kZXNWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobGVmdE5vblRlcm1pbmFsTm9kZSwgcmlnaHROb25UZXJtaW5hbE5vZGUsIGVxdWFsaXRpZXMsIGNvbnRleHQpO1xuICAvL1xuICAvLyAgICAgdGVybU5vZGVzTWF0Y2ggPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG4gIC8vICAgfVxuICAvL1xuICAvLyAgIHJldHVybiB0ZXJtTm9kZXNNYXRjaDtcbiAgLy8gfVxuXG4gIC8vIG1hdGNoKGVxdWFsaXR5LCBlcXVhbGl0aWVzLCBjb250ZXh0KSB7XG4gIC8vICAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcbiAgLy9cbiAgLy8gICBjb25zdCBsZWZ0VGVybU5vZGUgPSBlcXVhbGl0eS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgLy8gICAgICAgICByaWdodFRlcm1Ob2RlID0gZXF1YWxpdHkuZ2V0UmlnaHRUZXJtTm9kZSgpO1xuICAvL1xuICAvLyAgIGVxdWFsaXRpZXMgPSBmaWx0ZXJFcXVhbGl0aWVzKGVxdWFsaXRpZXMsIGVxdWFsaXR5KTsgIC8vL1xuICAvL1xuICAvLyAgIGlmICghbWF0Y2hlcykge1xuICAvLyAgICAgY29uc3QgcmV2ZXJzZWQgPSBmYWxzZSxcbiAgLy8gICAgICAgICAgIGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCA9IHRoaXMubWF0Y2hUZXJtTm9kZXMobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCByZXZlcnNlZCwgZXF1YWxpdGllcywgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgICBtYXRjaGVzID0gbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoOyAgLy8vXG4gIC8vICAgfVxuICAvL1xuICAvLyAgIGlmICghbWF0Y2hlcykge1xuICAvLyAgICAgY29uc3QgcmV2ZXJzZWQgPSB0cnVlLFxuICAvLyAgICAgICAgICAgbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoID0gdGhpcy5tYXRjaFRlcm1Ob2RlcyhsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIHJldmVyc2VkLCBlcXVhbGl0aWVzLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICAgIG1hdGNoZXMgPSBsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2g7ICAvLy9cbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgcmV0dXJuIG1hdGNoZXM7XG4gIC8vIH1cblxuICAvLyB2ZXJpZnkoZXF1YWxpdGllcywgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgLy8gICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlID0gdGhpcy5sZWZ0VGVybU5vZGUsICAvLy9cbiAgLy8gICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZSA9IHRoaXMucmlnaHRUZXJtTm9kZSwgIC8vL1xuICAvLyAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gZXF1YWxpdHlOb2Rlc1ZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShsZWZ0Tm9uVGVybWluYWxOb2RlLCByaWdodE5vblRlcm1pbmFsTm9kZSwgZXF1YWxpdGllcywgY29udGV4dCwgdmVyaWZ5QWhlYWQpLFxuICAvLyAgICAgICAgIHZlcmlmaWVkID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7IC8vL1xuICAvL1xuICAvLyAgIHJldHVybiB2ZXJpZmllZDtcbiAgLy8gfVxuXG4gIHN0YXRpYyBmcm9tTGVmdFRlcm1BbmRSaWdodFRlcm0obGVmdFRlcm0sIHJpZ2h0VGVybSkge1xuICAgIGxldCBlcXVhbGl0eSA9IG51bGw7XG5cbiAgICBjb25zdCBsZWZ0VGVybVR5cGUgPSBsZWZ0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgcmlnaHRUZXJtVHlwZSA9IHJpZ2h0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgbGVmdFRlcm1UeXBlRXF1YWxUb1N1YlR5cGVPZk9yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlID0gbGVmdFRlcm1UeXBlLmlzRXF1YWxUb1N1YlR5cGVPZk9yU3VwZXJUeXBlT2YocmlnaHRUZXJtVHlwZSk7XG5cbiAgICBpZiAobGVmdFRlcm1UeXBlRXF1YWxUb1N1YlR5cGVPZk9yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlKSB7XG4gICAgICBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShsZWZ0VGVybSwgcmlnaHRUZXJtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cbn1cblxuLy8gZnVuY3Rpb24gZmlsdGVyRXF1YWxpdGllcyhlcXVhbGl0aWVzLCBlcXVhbGl0eSkge1xuLy8gICBjb25zdCBlcXVhbGl0eUEgPSBlcXVhbGl0eTsgLy8vXG4vL1xuLy8gICBlcXVhbGl0aWVzID0gZXF1YWxpdGllcy5maWx0ZXIoKGVxdWFsaXR5KSA9PiB7XG4vLyAgICAgY29uc3QgZXF1YWxpdHlCID0gZXF1YWxpdHk7IC8vL1xuLy9cbi8vICAgICBpZiAoZXF1YWxpdHlBICE9PSBlcXVhbGl0eUIpIHtcbi8vICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgIH1cbi8vICAgfSk7XG4vL1xuLy8gICByZXR1cm4gZXF1YWxpdGllcztcbi8vIH1cbiJdLCJuYW1lcyI6WyJFcXVhbGl0eSIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwiZ2V0TGVmdFRlcm0iLCJnZXRSaWdodFRlcm0iLCJpc1JlZmxleGl2ZSIsImxlZnRUZXJtTWF0Y2hlc1JpZ2h0VGVybSIsIm1hdGNoIiwicmVmbGV4aXZlIiwiZnJvbUxlZnRUZXJtQW5kUmlnaHRUZXJtIiwiZXF1YWxpdHkiLCJsZWZ0VGVybVR5cGUiLCJnZXRUeXBlIiwicmlnaHRUZXJtVHlwZSIsImxlZnRUZXJtVHlwZUVxdWFsVG9TdWJUeXBlT2ZPclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSIsImlzRXF1YWxUb1N1YlR5cGVPZk9yU3VwZXJUeXBlT2YiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEseUJBZ0dsQixBQWhHWTthQUFNQSxTQUNQQyxRQUFRLEVBQUVDLFNBQVM7Z0NBRFpGO1FBRWpCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7O2tCQUhBRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsUUFBUTtZQUN0Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsU0FBUztZQUN2Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQywyQkFBMkIsSUFBSSxDQUFDTCxRQUFRLENBQUNNLEtBQUssQ0FBQyxJQUFJLENBQUNMLFNBQVMsR0FDN0RNLFlBQVlGO2dCQUVsQixPQUFPRTtZQUNUOzs7O1lBOERPQyxLQUFBQTttQkFBUCxBQTVEQSwrRUFBK0U7WUFDL0UsK0JBQStCO1lBQy9CLEVBQUU7WUFDRiwwQkFBMEI7WUFDMUIsNkNBQTZDO1lBQzdDLHlEQUF5RDtZQUN6RCw4REFBOEQ7WUFDOUQsc0RBQXNEO1lBQ3RELG1KQUFtSjtZQUNuSixFQUFFO1lBQ0Ysb0RBQW9EO1lBQ3BELE1BQU07WUFDTixFQUFFO1lBQ0YsMEJBQTBCO1lBQzFCLDZDQUE2QztZQUM3Qyx3REFBd0Q7WUFDeEQsK0RBQStEO1lBQy9ELHVEQUF1RDtZQUN2RCxtSkFBbUo7WUFDbkosRUFBRTtZQUNGLG9EQUFvRDtZQUNwRCxNQUFNO1lBQ04sRUFBRTtZQUNGLDJCQUEyQjtZQUMzQixJQUFJO1lBRUoseUNBQXlDO1lBQ3pDLHlCQUF5QjtZQUN6QixFQUFFO1lBQ0YscURBQXFEO1lBQ3JELHVEQUF1RDtZQUN2RCxFQUFFO1lBQ0YsOERBQThEO1lBQzlELEVBQUU7WUFDRixvQkFBb0I7WUFDcEIsOEJBQThCO1lBQzlCLGlJQUFpSTtZQUNqSSxFQUFFO1lBQ0Ysd0RBQXdEO1lBQ3hELE1BQU07WUFDTixFQUFFO1lBQ0Ysb0JBQW9CO1lBQ3BCLDZCQUE2QjtZQUM3QixpSUFBaUk7WUFDakksRUFBRTtZQUNGLHdEQUF3RDtZQUN4RCxNQUFNO1lBQ04sRUFBRTtZQUNGLG9CQUFvQjtZQUNwQixJQUFJO1lBRUosNkNBQTZDO1lBQzdDLHdEQUF3RDtZQUN4RCwwREFBMEQ7WUFDMUQsOEpBQThKO1lBQzlKLGtEQUFrRDtZQUNsRCxFQUFFO1lBQ0YscUJBQXFCO1lBQ3JCLElBQUk7WUFFSixTQUFPQSx5QkFBeUJSLFFBQVEsRUFBRUMsU0FBUztnQkFDakQsSUFBSVEsV0FBVztnQkFFZixJQUFNQyxlQUFlVixTQUFTVyxPQUFPLElBQy9CQyxnQkFBZ0JYLFVBQVVVLE9BQU8sSUFDakNFLHlEQUF5REgsYUFBYUksK0JBQStCLENBQUNGO2dCQUU1RyxJQUFJQyx3REFBd0Q7b0JBQzFESixXQUFXLElBekZJVixTQXlGU0MsVUFBVUM7Z0JBQ3BDO2dCQUVBLE9BQU9RO1lBQ1Q7OztXQTdGbUJWO0VBZ0dyQixvREFBb0Q7Q0FDcEQsb0NBQW9DO0NBQ3BDLEVBQUU7Q0FDRixtREFBbUQ7Q0FDbkQsc0NBQXNDO0NBQ3RDLEVBQUU7Q0FDRixxQ0FBcUM7Q0FDckMscUJBQXFCO0NBQ3JCLFFBQVE7Q0FDUixRQUFRO0NBQ1IsRUFBRTtDQUNGLHVCQUF1QjtDQUN2QixJQUFJIn0=