"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get equateStatements () {
        return equateStatements;
    },
    get equateTerms () {
        return equateTerms;
    }
});
const _occamlanguages = require("occam-languages");
const { nodeQuery } = _occamlanguages.queryUtilities;
const termNodeQuery = nodeQuery("/term");
class EquationalPass extends _occamlanguages.EquivalencePass {
    static maps = [
        {
            leftNodeQuery: termNodeQuery,
            rightNodeQuery: termNodeQuery,
            run: (leftTermNode, rightTermNode, context)=>{
                let success = false;
                if (!success) {
                    const depth = Infinity, leftTermNodeMatchesRightTermNode = leftTermNode.match(rightTermNode, depth);
                    if (leftTermNodeMatchesRightTermNode) {
                        success = true;
                    }
                }
                if (!success) {
                    const equivalences = context.getEquivalences(), termNodes = [
                        leftTermNode,
                        rightTermNode
                    ], equivalence = equivalences.findEquivalenceByTermNodes(termNodes);
                    if (equivalence !== null) {
                        success = true;
                    }
                }
                if (!success) {
                    const depth = 1, leftTermNodeMatchesRightTermNode = leftTermNode.match(rightTermNode, depth);
                    if (leftTermNodeMatchesRightTermNode) {
                        const leftNonTerminalNode = leftTermNode, rightNonTerminalNode = rightTermNode, leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(), rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(), leftChildNodes = leftNonTerminalNodeChildNodes, rightChildNodes = rightNonTerminalNodeChildNodes, descended = equationalPass.descend(leftChildNodes, rightChildNodes, context);
                        if (descended) {
                            success = true;
                        }
                    }
                }
                return success;
            }
        }
    ];
}
const equationalPass = new EquationalPass();
function equateTerms(leftTermNode, rightTermNode, context) {
    let termsEquate;
    const leftNode = leftTermNode, rightNode = rightTermNode, success = equationalPass.run(leftNode, rightNode, context);
    termsEquate = success; ///
    return termsEquate;
}
function equateStatements(leftStatementNode, rightStatementNode, context) {
    let statementsEquate;
    const leftNode = leftStatementNode, rightNode = rightStatementNode, success = equationalPass.run(leftNode, rightNode, context);
    statementsEquate = success; ///
    return statementsEquate;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL2VxdWF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcXVlcnlVdGlsaXRpZXMsIEVxdWl2YWxlbmNlUGFzcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuY29uc3QgeyBub2RlUXVlcnkgfSA9IHF1ZXJ5VXRpbGl0aWVzO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm1cIik7XG5cbmNsYXNzIEVxdWF0aW9uYWxQYXNzIGV4dGVuZHMgRXF1aXZhbGVuY2VQYXNzIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbGVmdE5vZGVRdWVyeTogdGVybU5vZGVRdWVyeSwgIC8vL1xuICAgICAgcmlnaHROb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksIC8vL1xuICAgICAgcnVuOiAobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgY29uc3QgZGVwdGggPSBJbmZpbml0eSxcbiAgICAgICAgICAgICAgICBsZWZ0VGVybU5vZGVNYXRjaGVzUmlnaHRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZS5tYXRjaChyaWdodFRlcm1Ob2RlLCBkZXB0aCk7XG5cbiAgICAgICAgICBpZiAobGVmdFRlcm1Ob2RlTWF0Y2hlc1JpZ2h0VGVybU5vZGUpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgIGNvbnN0IGVxdWl2YWxlbmNlcyA9IGNvbnRleHQuZ2V0RXF1aXZhbGVuY2VzKCksXG4gICAgICAgICAgICAgICAgdGVybU5vZGVzID0gW1xuICAgICAgICAgICAgICAgICAgbGVmdFRlcm1Ob2RlLFxuICAgICAgICAgICAgICAgICAgcmlnaHRUZXJtTm9kZVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZXMuZmluZEVxdWl2YWxlbmNlQnlUZXJtTm9kZXModGVybU5vZGVzKTtcblxuICAgICAgICAgIGlmIChlcXVpdmFsZW5jZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgY29uc3QgZGVwdGggPSAxLFxuICAgICAgICAgICAgICAgIGxlZnRUZXJtTm9kZU1hdGNoZXNSaWdodFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlLm1hdGNoKHJpZ2h0VGVybU5vZGUsIGRlcHRoKTtcblxuICAgICAgICAgIGlmIChsZWZ0VGVybU5vZGVNYXRjaGVzUmlnaHRUZXJtTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZSA9IGxlZnRUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZSA9IHJpZ2h0VGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgbGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSBsZWZ0Tm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICAgIGxlZnRDaGlsZE5vZGVzID0gbGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgcmlnaHRDaGlsZE5vZGVzID0gcmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgIGRlc2NlbmRlZCA9IGVxdWF0aW9uYWxQYXNzLmRlc2NlbmQobGVmdENoaWxkTm9kZXMsIHJpZ2h0Q2hpbGROb2RlcywgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChkZXNjZW5kZWQpIHtcbiAgICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCBlcXVhdGlvbmFsUGFzcyA9IG5ldyBFcXVhdGlvbmFsUGFzcygpO1xuXG5leHBvcnQgZnVuY3Rpb24gZXF1YXRlVGVybXMobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtc0VxdWF0ZTtcblxuICBjb25zdCBsZWZ0Tm9kZSA9IGxlZnRUZXJtTm9kZSwgLy8vXG4gICAgICAgIHJpZ2h0Tm9kZSA9IHJpZ2h0VGVybU5vZGUsIC8vL1xuICAgICAgICBzdWNjZXNzID0gZXF1YXRpb25hbFBhc3MucnVuKGxlZnROb2RlLCByaWdodE5vZGUsIGNvbnRleHQpO1xuXG4gIHRlcm1zRXF1YXRlID0gc3VjY2VzczsgLy8vXG5cbiAgcmV0dXJuIHRlcm1zRXF1YXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YXRlU3RhdGVtZW50cyhsZWZ0U3RhdGVtZW50Tm9kZSwgcmlnaHRTdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRzRXF1YXRlO1xuXG4gIGNvbnN0IGxlZnROb2RlID0gbGVmdFN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICByaWdodE5vZGUgPSByaWdodFN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBzdWNjZXNzID0gZXF1YXRpb25hbFBhc3MucnVuKGxlZnROb2RlLCByaWdodE5vZGUsIGNvbnRleHQpO1xuXG4gIHN0YXRlbWVudHNFcXVhdGUgPSBzdWNjZXNzOyAvLy9cblxuICByZXR1cm4gc3RhdGVtZW50c0VxdWF0ZTtcbn1cbiJdLCJuYW1lcyI6WyJlcXVhdGVTdGF0ZW1lbnRzIiwiZXF1YXRlVGVybXMiLCJub2RlUXVlcnkiLCJxdWVyeVV0aWxpdGllcyIsInRlcm1Ob2RlUXVlcnkiLCJFcXVhdGlvbmFsUGFzcyIsIkVxdWl2YWxlbmNlUGFzcyIsIm1hcHMiLCJsZWZ0Tm9kZVF1ZXJ5IiwicmlnaHROb2RlUXVlcnkiLCJydW4iLCJsZWZ0VGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiY29udGV4dCIsInN1Y2Nlc3MiLCJkZXB0aCIsIkluZmluaXR5IiwibGVmdFRlcm1Ob2RlTWF0Y2hlc1JpZ2h0VGVybU5vZGUiLCJtYXRjaCIsImVxdWl2YWxlbmNlcyIsImdldEVxdWl2YWxlbmNlcyIsInRlcm1Ob2RlcyIsImVxdWl2YWxlbmNlIiwiZmluZEVxdWl2YWxlbmNlQnlUZXJtTm9kZXMiLCJsZWZ0Tm9uVGVybWluYWxOb2RlIiwicmlnaHROb25UZXJtaW5hbE5vZGUiLCJsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJyaWdodE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJsZWZ0Q2hpbGROb2RlcyIsInJpZ2h0Q2hpbGROb2RlcyIsImRlc2NlbmRlZCIsImVxdWF0aW9uYWxQYXNzIiwiZGVzY2VuZCIsInRlcm1zRXF1YXRlIiwibGVmdE5vZGUiLCJyaWdodE5vZGUiLCJsZWZ0U3RhdGVtZW50Tm9kZSIsInJpZ2h0U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudHNFcXVhdGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQTZFZ0JBO2VBQUFBOztRQVpBQztlQUFBQTs7O2dDQS9EZ0M7QUFFaEQsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBR0MsOEJBQWM7QUFFcEMsTUFBTUMsZ0JBQWdCRixVQUFVO0FBRWhDLE1BQU1HLHVCQUF1QkMsK0JBQWU7SUFDMUMsT0FBT0MsT0FBTztRQUNaO1lBQ0VDLGVBQWVKO1lBQ2ZLLGdCQUFnQkw7WUFDaEJNLEtBQUssQ0FBQ0MsY0FBY0MsZUFBZUM7Z0JBQ2pDLElBQUlDLFVBQVU7Z0JBRWQsSUFBSSxDQUFDQSxTQUFTO29CQUNaLE1BQU1DLFFBQVFDLFVBQ1JDLG1DQUFtQ04sYUFBYU8sS0FBSyxDQUFDTixlQUFlRztvQkFFM0UsSUFBSUUsa0NBQWtDO3dCQUNwQ0gsVUFBVTtvQkFDWjtnQkFDRjtnQkFFQSxJQUFJLENBQUNBLFNBQVM7b0JBQ1osTUFBTUssZUFBZU4sUUFBUU8sZUFBZSxJQUN0Q0MsWUFBWTt3QkFDVlY7d0JBQ0FDO3FCQUNELEVBQ0RVLGNBQWNILGFBQWFJLDBCQUEwQixDQUFDRjtvQkFFNUQsSUFBSUMsZ0JBQWdCLE1BQU07d0JBQ3hCUixVQUFVO29CQUNaO2dCQUNGO2dCQUVBLElBQUksQ0FBQ0EsU0FBUztvQkFDWixNQUFNQyxRQUFRLEdBQ1JFLG1DQUFtQ04sYUFBYU8sS0FBSyxDQUFDTixlQUFlRztvQkFFM0UsSUFBSUUsa0NBQWtDO3dCQUNwQyxNQUFNTyxzQkFBc0JiLGNBQ3RCYyx1QkFBdUJiLGVBQ3ZCYyxnQ0FBZ0NGLG9CQUFvQkcsYUFBYSxJQUNqRUMsaUNBQWlDSCxxQkFBcUJFLGFBQWEsSUFDbkVFLGlCQUFpQkgsK0JBQ2pCSSxrQkFBa0JGLGdDQUNsQkcsWUFBWUMsZUFBZUMsT0FBTyxDQUFDSixnQkFBZ0JDLGlCQUFpQmpCO3dCQUUxRSxJQUFJa0IsV0FBVzs0QkFDYmpCLFVBQVU7d0JBQ1o7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT0E7WUFDVDtRQUNGO0tBQ0QsQ0FBQztBQUNKO0FBRUEsTUFBTWtCLGlCQUFpQixJQUFJM0I7QUFFcEIsU0FBU0osWUFBWVUsWUFBWSxFQUFFQyxhQUFhLEVBQUVDLE9BQU87SUFDOUQsSUFBSXFCO0lBRUosTUFBTUMsV0FBV3hCLGNBQ1h5QixZQUFZeEIsZUFDWkUsVUFBVWtCLGVBQWV0QixHQUFHLENBQUN5QixVQUFVQyxXQUFXdkI7SUFFeERxQixjQUFjcEIsU0FBUyxHQUFHO0lBRTFCLE9BQU9vQjtBQUNUO0FBRU8sU0FBU2xDLGlCQUFpQnFDLGlCQUFpQixFQUFFQyxrQkFBa0IsRUFBRXpCLE9BQU87SUFDN0UsSUFBSTBCO0lBRUosTUFBTUosV0FBV0UsbUJBQ1hELFlBQVlFLG9CQUNaeEIsVUFBVWtCLGVBQWV0QixHQUFHLENBQUN5QixVQUFVQyxXQUFXdkI7SUFFeEQwQixtQkFBbUJ6QixTQUFTLEdBQUc7SUFFL0IsT0FBT3lCO0FBQ1QifQ==