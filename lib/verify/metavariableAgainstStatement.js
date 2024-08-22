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
            var termForVariableSubstitution = _termForVariable.default.fromSubstitutionNode(substitutionNode), substitution1 = termForVariableSubstitution, statementNodeA = substitutionStatementNode, statementNodeB = statementNode, statementNodeMatches = (0, _statementForMetavariable.matchStatementNode)(statementNodeA, statementNodeB, substitution1, substitutions, localContextA, localContextB);
            if (statementNodeMatches) {
                var verifiedAhead = verifyAhead();
                metavariableVerifiedAgainstStatement = verifiedAhead; ///
            }
        } else {
            var substitutionSubstitution = substitution.getSubstitution();
            if (substitutionSubstitution !== null) {
                var substitution2 = substitutionSubstitution, statementNodeA1 = substitutionStatementNode, statementNodeB1 = statementNode, statementNodeMatches1 = (0, _statementForMetavariable.matchStatementNode)(statementNodeA1, statementNodeB1, substitution2, substitutions, localContextA, localContextB);
            } else {
                var statementNodeMatches2 = substitution.matchStatementNode(statementNode);
                if (statementNodeMatches2) {
                    var verifiedAhead1 = verifyAhead();
                    metavariableVerifiedAgainstStatement = verifiedAhead1; ///
                }
            }
        }
    } else {
        var verifiedAhead2;
        var statementForMetavariableSubstitution = _statementForMetavariable.default.fromMetavariableNodeStatementNodeAndSubstitutionNode(metavariableNode, statementNode, substitutionNode), substitution3 = statementForMetavariableSubstitution; ///
        substitutions.push(substitution3);
        verifiedAhead2 = verifyAhead();
        if (!verifiedAhead2) {
            substitutions.pop();
        }
        metavariableVerifiedAgainstStatement = verifiedAhead2; ///
    }
    return metavariableVerifiedAgainstStatement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbWV0YXZhcmlhYmxlQWdhaW5zdFN0YXRlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uL3Rlcm1Gb3JWYXJpYWJsZVwiO1xuaW1wb3J0IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uL3N0YXRlbWVudEZvck1ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBtYXRjaFN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uL3N0YXRlbWVudEZvck1ldGF2YXJpYWJsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlNZXRhdmFyaWFibGVBZ2FpbnN0U3RhdGVtZW50KG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbk5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBtZXRhdmFyaWFibGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnQgPSBmYWxzZTtcblxuICBjb25zdCBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXNNZXRhdmFyaWFibGVOb2RlQSA9IHN1YnN0aXR1dGlvbi5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGVBKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pIHx8IG51bGw7XG5cbiAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0YXRlbWVudE5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlQSA9IHN1YnN0aXR1dGlvblN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZUIgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgaWYgKHN0YXRlbWVudE5vZGVNYXRjaGVzKSB7XG4gICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudCA9IHZlcmlmaWVkQWhlYWQ7ICAvLy9cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLmdldFN1YnN0aXR1dGlvbigpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uU3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvblN1YnN0aXR1dGlvbixcbiAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZUEgPSBzdWJzdGl0dXRpb25TdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZUIgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBtYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudE5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnQgPSB2ZXJpZmllZEFoZWFkOyAgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24uZnJvbU1ldGF2YXJpYWJsZU5vZGVTdGF0ZW1lbnROb2RlQW5kU3Vic3RpdHV0aW9uTm9kZShtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247ICAvLy9cblxuICAgIHN1YnN0aXR1dGlvbnMucHVzaChzdWJzdGl0dXRpb24pO1xuXG4gICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICBpZiAoIXZlcmlmaWVkQWhlYWQpIHtcbiAgICAgIHN1YnN0aXR1dGlvbnMucG9wKCk7XG4gICAgfVxuXG4gICAgbWV0YXZhcmlhYmxlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50ID0gdmVyaWZpZWRBaGVhZDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlNZXRhdmFyaWFibGVBZ2FpbnN0U3RhdGVtZW50IiwibWV0YXZhcmlhYmxlTm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwidmVyaWZ5QWhlYWQiLCJtZXRhdmFyaWFibGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnQiLCJzdWJzdGl0dXRpb24iLCJmaW5kIiwic3Vic3RpdHV0aW9uTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGVBIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwic3Vic3RpdHV0aW9uU3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJ0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJmcm9tU3Vic3RpdHV0aW9uTm9kZSIsInN0YXRlbWVudE5vZGVBIiwic3RhdGVtZW50Tm9kZUIiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInZlcmlmaWVkQWhlYWQiLCJzdWJzdGl0dXRpb25TdWJzdGl0dXRpb24iLCJnZXRTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJmcm9tTWV0YXZhcmlhYmxlTm9kZVN0YXRlbWVudE5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlIiwicHVzaCIsInBvcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUF3QkE7OztzRUFMZ0I7Z0ZBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWxDLFNBQVNBLG1DQUFtQ0MsZ0JBQWdCLEVBQUVDLGFBQWEsRUFBRUMsZ0JBQWdCLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxhQUFhLEVBQUVDLFdBQVc7SUFDcEssSUFBSUMsdUNBQXVDO0lBRTNDLElBQU1DLGVBQWVMLGNBQWNNLElBQUksQ0FBQyxTQUFDRDtRQUN2QyxJQUFNRSx1Q0FBdUNGLGFBQWFHLHFCQUFxQixDQUFDWDtRQUVoRixJQUFJVSxzQ0FBc0M7WUFDeEMsT0FBTztRQUNUO0lBQ0YsTUFBTTtJQUVOLElBQUlGLGlCQUFpQixNQUFNO1FBQ3pCLElBQU1JLDRCQUE0QkosYUFBYUssZ0JBQWdCO1FBRS9ELElBQUlYLHFCQUFxQixNQUFNO1lBQzdCLElBQU1ZLDhCQUE4QkMsd0JBQTJCLENBQUNDLG9CQUFvQixDQUFDZCxtQkFDL0VNLGdCQUFlTSw2QkFDZkcsaUJBQWlCTCwyQkFDakJNLGlCQUFpQmpCLGVBQ2pCa0IsdUJBQXVCQyxJQUFBQSw0Q0FBa0IsRUFBQ0gsZ0JBQWdCQyxnQkFBZ0JWLGVBQWNMLGVBQWVDLGVBQWVDO1lBRTVILElBQUljLHNCQUFzQjtnQkFDeEIsSUFBTUUsZ0JBQWdCZjtnQkFFdEJDLHVDQUF1Q2MsZUFBZ0IsR0FBRztZQUM1RDtRQUNGLE9BQU87WUFDTCxJQUFNQywyQkFBMkJkLGFBQWFlLGVBQWU7WUFFN0QsSUFBSUQsNkJBQTZCLE1BQU07Z0JBQ3JDLElBQU1kLGdCQUFlYywwQkFDZkwsa0JBQWlCTCwyQkFDakJNLGtCQUFpQmpCLGVBQ2pCa0Isd0JBQXVCQyxJQUFBQSw0Q0FBa0IsRUFBQ0gsaUJBQWdCQyxpQkFBZ0JWLGVBQWNMLGVBQWVDLGVBQWVDO1lBRTlILE9BQU87Z0JBQ0wsSUFBTWMsd0JBQXVCWCxhQUFhWSxrQkFBa0IsQ0FBQ25CO2dCQUU3RCxJQUFJa0IsdUJBQXNCO29CQUN4QixJQUFNRSxpQkFBZ0JmO29CQUV0QkMsdUNBQXVDYyxnQkFBZ0IsR0FBRztnQkFDNUQ7WUFDRjtRQUNGO0lBQ0YsT0FBTztRQUNMLElBQUlBO1FBRUosSUFBTUcsdUNBQXVDQyxpQ0FBb0MsQ0FBQ0Msb0RBQW9ELENBQUMxQixrQkFBa0JDLGVBQWVDLG1CQUNsS00sZ0JBQWVnQixzQ0FBdUMsR0FBRztRQUUvRHJCLGNBQWN3QixJQUFJLENBQUNuQjtRQUVuQmEsaUJBQWdCZjtRQUVoQixJQUFJLENBQUNlLGdCQUFlO1lBQ2xCbEIsY0FBY3lCLEdBQUc7UUFDbkI7UUFFQXJCLHVDQUF1Q2MsZ0JBQWdCLEdBQUc7SUFDNUQ7SUFFQSxPQUFPZDtBQUNUIn0=