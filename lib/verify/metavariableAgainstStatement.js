"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyMetavariableAgainstStatement;
    }
});
var _termForVariable = /*#__PURE__*/ _interop_require_default(require("../substitution/termForVariable"));
var _statementForMetavariable = /*#__PURE__*/ _interop_require_wildcard(require("../substitution/statementForMetavariable"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function verifyMetavariableAgainstStatement(metavariableNode, statementNode, substitutionNode, substitutions, localContextA, localContextB, verifyAhead) {
    var metavariableVerifiedAgainstStatement = false;
    var substitution = substitutions.find(function(substitution) {
        var substitutionMatchesMetavariableNodeA = substitution.matchMetavariableNode(metavariableNode);
        if (substitutionMatchesMetavariableNodeA) {
            return true;
        }
    }) || null;
    if (substitution !== null) {
        var substitutionStatementNode = substitution.getStatementNode();
        if (substitutionNode !== null) {
            var termForVariableSubstitution = _termForVariable.default.fromSubstitutionNode(substitutionNode), substitution1 = termForVariableSubstitution, statementNodeA = statementNode, statementNodeB = substitutionStatementNode, statementNodeMatches = (0, _statementForMetavariable.matchStatementNode)(statementNodeA, statementNodeB, substitution1, substitutions, localContextA, localContextB);
            if (statementNodeMatches) {
                var verifiedAhead = verifyAhead();
                metavariableVerifiedAgainstStatement = verifiedAhead; ///
            }
        } else {
            var statementNodeMatches1 = substitution.matchStatementNode(statementNode);
            if (statementNodeMatches1) {
                var verifiedAhead1 = verifyAhead();
                metavariableVerifiedAgainstStatement = verifiedAhead1; ///
            }
        }
    } else {
        var verifiedAhead2;
        var substitution2 = substitutionFromSubstitutionNodeMetavariableNodeAndStatementNode(substitutionNode, metavariableNode, statementNode); ///
        substitutions.push(substitution2);
        verifiedAhead2 = verifyAhead();
        if (!verifiedAhead2) {
            substitutions.pop();
        }
        metavariableVerifiedAgainstStatement = verifiedAhead2; ///
    }
    return metavariableVerifiedAgainstStatement;
}
function substitutionFromSubstitutionNodeMetavariableNodeAndStatementNode(substitutionNode, metavariableNode, statementNode) {
    var statementForMetavariableSubstitution;
    if (substitutionNode !== null) {
        var termForVariableSubstitution = _termForVariable.default.fromSubstitutionNode(substitutionNode), substitution = termForVariableSubstitution; ///
        statementForMetavariableSubstitution = _statementForMetavariable.default.fromMetavariableNodeStatementNodeAndSubstitution(metavariableNode, statementNode, substitution);
    } else {
        statementForMetavariableSubstitution = _statementForMetavariable.default.fromMetavariableNodeAndStatementNode(metavariableNode, statementNode);
    }
    var substitution1 = statementForMetavariableSubstitution; ///
    return substitution1;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbWV0YXZhcmlhYmxlQWdhaW5zdFN0YXRlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uL3Rlcm1Gb3JWYXJpYWJsZVwiO1xuaW1wb3J0IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uL3N0YXRlbWVudEZvck1ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBtYXRjaFN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uL3N0YXRlbWVudEZvck1ldGF2YXJpYWJsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlNZXRhdmFyaWFibGVBZ2FpbnN0U3RhdGVtZW50KG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbk5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBtZXRhdmFyaWFibGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnQgPSBmYWxzZTtcblxuICBjb25zdCBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXNNZXRhdmFyaWFibGVOb2RlQSA9IHN1YnN0aXR1dGlvbi5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGVBKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pIHx8IG51bGw7XG5cbiAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0YXRlbWVudE5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlQSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZUIgPSBzdWJzdGl0dXRpb25TdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgaWYgKHN0YXRlbWVudE5vZGVNYXRjaGVzKSB7XG4gICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudCA9IHZlcmlmaWVkQWhlYWQ7ICAvLy9cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50Tm9kZU1hdGNoZXMpIHtcbiAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50ID0gdmVyaWZpZWRBaGVhZDsgIC8vL1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbkZyb21TdWJzdGl0dXRpb25Ob2RlTWV0YXZhcmlhYmxlTm9kZUFuZFN0YXRlbWVudE5vZGUoc3Vic3RpdHV0aW9uTm9kZSwgbWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSk7ICAvLy9cblxuICAgIHN1YnN0aXR1dGlvbnMucHVzaChzdWJzdGl0dXRpb24pO1xuXG4gICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICBpZiAoIXZlcmlmaWVkQWhlYWQpIHtcbiAgICAgIHN1YnN0aXR1dGlvbnMucG9wKCk7XG4gICAgfVxuXG4gICAgbWV0YXZhcmlhYmxlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50ID0gdmVyaWZpZWRBaGVhZDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudDtcbn1cblxuZnVuY3Rpb24gc3Vic3RpdHV0aW9uRnJvbVN1YnN0aXR1dGlvbk5vZGVNZXRhdmFyaWFibGVOb2RlQW5kU3RhdGVtZW50Tm9kZShzdWJzdGl0dXRpb25Ob2RlLCBtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlKSB7XG4gIGxldCBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG5cbiAgaWYgKHN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24uZnJvbVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uOyAvLy9cblxuICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tTWV0YXZhcmlhYmxlTm9kZVN0YXRlbWVudE5vZGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24uZnJvbU1ldGF2YXJpYWJsZU5vZGVBbmRTdGF0ZW1lbnROb2RlKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUpO1xuICB9XG5cbiAgY29uc3Qgc3Vic3RpdHV0aW9uID0gc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlNZXRhdmFyaWFibGVBZ2FpbnN0U3RhdGVtZW50IiwibWV0YXZhcmlhYmxlTm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwidmVyaWZ5QWhlYWQiLCJtZXRhdmFyaWFibGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnQiLCJzdWJzdGl0dXRpb24iLCJmaW5kIiwic3Vic3RpdHV0aW9uTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGVBIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwic3Vic3RpdHV0aW9uU3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJ0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJmcm9tU3Vic3RpdHV0aW9uTm9kZSIsInN0YXRlbWVudE5vZGVBIiwic3RhdGVtZW50Tm9kZUIiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInZlcmlmaWVkQWhlYWQiLCJzdWJzdGl0dXRpb25Gcm9tU3Vic3RpdHV0aW9uTm9kZU1ldGF2YXJpYWJsZU5vZGVBbmRTdGF0ZW1lbnROb2RlIiwicHVzaCIsInBvcCIsInN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsIlN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21NZXRhdmFyaWFibGVOb2RlU3RhdGVtZW50Tm9kZUFuZFN1YnN0aXR1dGlvbiIsImZyb21NZXRhdmFyaWFibGVOb2RlQW5kU3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUF3QkE7OztzRUFMZ0I7Z0ZBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWxDLFNBQVNBLG1DQUFtQ0MsZ0JBQWdCLEVBQUVDLGFBQWEsRUFBRUMsZ0JBQWdCLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxhQUFhLEVBQUVDLFdBQVc7SUFDcEssSUFBSUMsdUNBQXVDO0lBRTNDLElBQU1DLGVBQWVMLGNBQWNNLElBQUksQ0FBQyxTQUFDRDtRQUN2QyxJQUFNRSx1Q0FBdUNGLGFBQWFHLHFCQUFxQixDQUFDWDtRQUVoRixJQUFJVSxzQ0FBc0M7WUFDeEMsT0FBTztRQUNUO0lBQ0YsTUFBTTtJQUVOLElBQUlGLGlCQUFpQixNQUFNO1FBQ3pCLElBQU1JLDRCQUE0QkosYUFBYUssZ0JBQWdCO1FBRS9ELElBQUlYLHFCQUFxQixNQUFNO1lBQzdCLElBQU1ZLDhCQUE4QkMsd0JBQTJCLENBQUNDLG9CQUFvQixDQUFDZCxtQkFDL0VNLGdCQUFlTSw2QkFDZkcsaUJBQWlCaEIsZUFDakJpQixpQkFBaUJOLDJCQUNqQk8sdUJBQXVCQyxJQUFBQSw0Q0FBa0IsRUFBQ0gsZ0JBQWdCQyxnQkFBZ0JWLGVBQWNMLGVBQWVDLGVBQWVDO1lBRTVILElBQUljLHNCQUFzQjtnQkFDeEIsSUFBTUUsZ0JBQWdCZjtnQkFFdEJDLHVDQUF1Q2MsZUFBZ0IsR0FBRztZQUM1RDtRQUNGLE9BQU87WUFDTCxJQUFNRix3QkFBdUJYLGFBQWFZLGtCQUFrQixDQUFDbkI7WUFFN0QsSUFBSWtCLHVCQUFzQjtnQkFDeEIsSUFBTUUsaUJBQWdCZjtnQkFFdEJDLHVDQUF1Q2MsZ0JBQWdCLEdBQUc7WUFDNUQ7UUFDRjtJQUNGLE9BQU87UUFDTCxJQUFJQTtRQUVKLElBQU1iLGdCQUFlYyxpRUFBaUVwQixrQkFBa0JGLGtCQUFrQkMsZ0JBQWlCLEdBQUc7UUFFOUlFLGNBQWNvQixJQUFJLENBQUNmO1FBRW5CYSxpQkFBZ0JmO1FBRWhCLElBQUksQ0FBQ2UsZ0JBQWU7WUFDbEJsQixjQUFjcUIsR0FBRztRQUNuQjtRQUVBakIsdUNBQXVDYyxnQkFBZ0IsR0FBRztJQUM1RDtJQUVBLE9BQU9kO0FBQ1Q7QUFFQSxTQUFTZSxpRUFBaUVwQixnQkFBZ0IsRUFBRUYsZ0JBQWdCLEVBQUVDLGFBQWE7SUFDekgsSUFBSXdCO0lBRUosSUFBSXZCLHFCQUFxQixNQUFNO1FBQzdCLElBQU1ZLDhCQUE4QkMsd0JBQTJCLENBQUNDLG9CQUFvQixDQUFDZCxtQkFDL0VNLGVBQWVNLDZCQUE2QixHQUFHO1FBRXJEVyx1Q0FBdUNDLGlDQUFvQyxDQUFDQyxnREFBZ0QsQ0FBQzNCLGtCQUFrQkMsZUFBZU87SUFDaEssT0FBTztRQUNMaUIsdUNBQXVDQyxpQ0FBb0MsQ0FBQ0Usb0NBQW9DLENBQUM1QixrQkFBa0JDO0lBQ3JJO0lBRUEsSUFBTU8sZ0JBQWVpQixzQ0FBdUMsR0FBRztJQUUvRCxPQUFPakI7QUFDVCJ9