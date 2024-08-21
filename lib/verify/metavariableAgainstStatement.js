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
            var termForVariableSubstitution = _termForVariable.default.fromSubstitutionNode(substitutionNode), substitution1 = termForVariableSubstitution, statementNodeB = statementNode, statementNodeA = substitutionStatementNode, statementNodeMatches = (0, _statementForMetavariable.matchStatementNode)(statementNodeA, statementNodeB, substitution1, substitutions, localContextA, localContextB);
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
        var statementForMetavariableSubstitution;
        if (substitutionNode !== null) {
            var termForVariableSubstitution1 = _termForVariable.default.fromSubstitutionNode(substitutionNode), substitution2 = termForVariableSubstitution1; ///
            statementForMetavariableSubstitution = _statementForMetavariable.default.fromMetavariableNodeStatementNodeAndSubstitution(metavariableNode, statementNode, substitution2);
        } else {
            statementForMetavariableSubstitution = _statementForMetavariable.default.fromMetavariableNodeAndStatementNode(metavariableNode, statementNode);
        }
        var substitution3 = statementForMetavariableSubstitution; ///
        var verifiedAhead2;
        substitutions.push(substitution3);
        verifiedAhead2 = verifyAhead();
        if (!verifiedAhead2) {
            substitutions.pop();
        }
        metavariableVerifiedAgainstStatement = verifiedAhead2; ///
    }
    return metavariableVerifiedAgainstStatement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbWV0YXZhcmlhYmxlQWdhaW5zdFN0YXRlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uL3Rlcm1Gb3JWYXJpYWJsZVwiO1xuaW1wb3J0IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uL3N0YXRlbWVudEZvck1ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBtYXRjaFN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uL3N0YXRlbWVudEZvck1ldGF2YXJpYWJsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlNZXRhdmFyaWFibGVBZ2FpbnN0U3RhdGVtZW50KG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbk5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBtZXRhdmFyaWFibGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnQgPSBmYWxzZTtcblxuICBjb25zdCBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXNNZXRhdmFyaWFibGVOb2RlQSA9IHN1YnN0aXR1dGlvbi5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGVBKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pIHx8IG51bGw7XG5cbiAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0YXRlbWVudE5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlQiA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZUEgPSBzdWJzdGl0dXRpb25TdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgaWYgKHN0YXRlbWVudE5vZGVNYXRjaGVzKSB7XG4gICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudCA9IHZlcmlmaWVkQWhlYWQ7ICAvLy9cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50Tm9kZU1hdGNoZXMpIHtcbiAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50ID0gdmVyaWZpZWRBaGVhZDsgIC8vL1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZXQgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tTWV0YXZhcmlhYmxlTm9kZVN0YXRlbWVudE5vZGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21NZXRhdmFyaWFibGVOb2RlQW5kU3RhdGVtZW50Tm9kZShtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247ICAvLy9cblxuICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgc3Vic3RpdHV0aW9ucy5wdXNoKHN1YnN0aXR1dGlvbik7XG5cbiAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgIGlmICghdmVyaWZpZWRBaGVhZCkge1xuICAgICAgc3Vic3RpdHV0aW9ucy5wb3AoKTtcbiAgICB9XG5cbiAgICBtZXRhdmFyaWFibGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnQgPSB2ZXJpZmllZEFoZWFkOyAgLy8vXG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50O1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeU1ldGF2YXJpYWJsZUFnYWluc3RTdGF0ZW1lbnQiLCJtZXRhdmFyaWFibGVOb2RlIiwic3RhdGVtZW50Tm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJ2ZXJpZnlBaGVhZCIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudCIsInN1YnN0aXR1dGlvbiIsImZpbmQiLCJzdWJzdGl0dXRpb25NYXRjaGVzTWV0YXZhcmlhYmxlTm9kZUEiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJzdWJzdGl0dXRpb25TdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsInRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsIlRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21TdWJzdGl0dXRpb25Ob2RlIiwic3RhdGVtZW50Tm9kZUIiLCJzdGF0ZW1lbnROb2RlQSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwidmVyaWZpZWRBaGVhZCIsInN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsIlN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21NZXRhdmFyaWFibGVOb2RlU3RhdGVtZW50Tm9kZUFuZFN1YnN0aXR1dGlvbiIsImZyb21NZXRhdmFyaWFibGVOb2RlQW5kU3RhdGVtZW50Tm9kZSIsInB1c2giLCJwb3AiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBd0JBOzs7c0VBTGdCO2dGQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlsQyxTQUFTQSxtQ0FBbUNDLGdCQUFnQixFQUFFQyxhQUFhLEVBQUVDLGdCQUFnQixFQUFFQyxhQUFhLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxXQUFXO0lBQ3BLLElBQUlDLHVDQUF1QztJQUUzQyxJQUFNQyxlQUFlTCxjQUFjTSxJQUFJLENBQUMsU0FBQ0Q7UUFDdkMsSUFBTUUsdUNBQXVDRixhQUFhRyxxQkFBcUIsQ0FBQ1g7UUFFaEYsSUFBSVUsc0NBQXNDO1lBQ3hDLE9BQU87UUFDVDtJQUNGLE1BQU07SUFFTixJQUFJRixpQkFBaUIsTUFBTTtRQUN6QixJQUFNSSw0QkFBNEJKLGFBQWFLLGdCQUFnQjtRQUUvRCxJQUFJWCxxQkFBcUIsTUFBTTtZQUM3QixJQUFNWSw4QkFBOEJDLHdCQUEyQixDQUFDQyxvQkFBb0IsQ0FBQ2QsbUJBQy9FTSxnQkFBZU0sNkJBQ2ZHLGlCQUFpQmhCLGVBQ2pCaUIsaUJBQWlCTiwyQkFDakJPLHVCQUF1QkMsSUFBQUEsNENBQWtCLEVBQUNGLGdCQUFnQkQsZ0JBQWdCVCxlQUFjTCxlQUFlQyxlQUFlQztZQUU1SCxJQUFJYyxzQkFBc0I7Z0JBQ3hCLElBQU1FLGdCQUFnQmY7Z0JBRXRCQyx1Q0FBdUNjLGVBQWdCLEdBQUc7WUFDNUQ7UUFDRixPQUFPO1lBQ0wsSUFBTUYsd0JBQXVCWCxhQUFhWSxrQkFBa0IsQ0FBQ25CO1lBRTdELElBQUlrQix1QkFBc0I7Z0JBQ3hCLElBQU1FLGlCQUFnQmY7Z0JBRXRCQyx1Q0FBdUNjLGdCQUFnQixHQUFHO1lBQzVEO1FBQ0Y7SUFDRixPQUFPO1FBQ0wsSUFBSUM7UUFFSixJQUFJcEIscUJBQXFCLE1BQU07WUFDN0IsSUFBTVksK0JBQThCQyx3QkFBMkIsQ0FBQ0Msb0JBQW9CLENBQUNkLG1CQUMvRU0sZ0JBQWVNLDhCQUE2QixHQUFHO1lBRXJEUSx1Q0FBdUNDLGlDQUFvQyxDQUFDQyxnREFBZ0QsQ0FBQ3hCLGtCQUFrQkMsZUFBZU87UUFDaEssT0FBTztZQUNMYyx1Q0FBdUNDLGlDQUFvQyxDQUFDRSxvQ0FBb0MsQ0FBQ3pCLGtCQUFrQkM7UUFDckk7UUFFQSxJQUFNTyxnQkFBZWMsc0NBQXVDLEdBQUc7UUFFL0QsSUFBSUQ7UUFFSmxCLGNBQWN1QixJQUFJLENBQUNsQjtRQUVuQmEsaUJBQWdCZjtRQUVoQixJQUFJLENBQUNlLGdCQUFlO1lBQ2xCbEIsY0FBY3dCLEdBQUc7UUFDbkI7UUFFQXBCLHVDQUF1Q2MsZ0JBQWdCLEdBQUc7SUFDNUQ7SUFFQSxPQUFPZDtBQUNUIn0=