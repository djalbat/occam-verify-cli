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
const _equivalences = require("../utilities/equivalences");
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
                    ], equivalence = (0, _equivalences.findEquivalenceByTermNodes)(equivalences, termNodes);
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
function equateTerms(leftTerm, rightTerm, context) {
    let termsEquate;
    const leftTermNode = leftTerm.getNode(), rightTermNode = rightTerm.getNode(), leftNode = leftTermNode, rightNode = rightTermNode, success = equationalPass.run(leftNode, rightNode, context);
    termsEquate = success; ///
    return termsEquate;
}
function equateStatements(leftStatement, rightStatement, context) {
    let statementsEquate;
    const leftStatementNode = leftStatement.getNode(), rightStatementNode = rightStatement.getNode(), leftNode = leftStatementNode, rightNode = rightStatementNode, success = equationalPass.run(leftNode, rightNode, context);
    statementsEquate = success; ///
    return statementsEquate;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL2VxdWF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcXVlcnlVdGlsaXRpZXMsIEVxdWl2YWxlbmNlUGFzcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZmluZEVxdWl2YWxlbmNlQnlUZXJtTm9kZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VxdWl2YWxlbmNlc1wiO1xuXG5jb25zdCB7IG5vZGVRdWVyeSB9ID0gcXVlcnlVdGlsaXRpZXM7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKTtcblxuY2xhc3MgRXF1YXRpb25hbFBhc3MgZXh0ZW5kcyBFcXVpdmFsZW5jZVBhc3Mge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBsZWZ0Tm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LCAgLy8vXG4gICAgICByaWdodE5vZGVRdWVyeTogdGVybU5vZGVRdWVyeSwgLy8vXG4gICAgICBydW46IChsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICBjb25zdCBkZXB0aCA9IEluZmluaXR5LFxuICAgICAgICAgICAgICAgIGxlZnRUZXJtTm9kZU1hdGNoZXNSaWdodFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlLm1hdGNoKHJpZ2h0VGVybU5vZGUsIGRlcHRoKTtcblxuICAgICAgICAgIGlmIChsZWZ0VGVybU5vZGVNYXRjaGVzUmlnaHRUZXJtTm9kZSkge1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgY29uc3QgZXF1aXZhbGVuY2VzID0gY29udGV4dC5nZXRFcXVpdmFsZW5jZXMoKSxcbiAgICAgICAgICAgICAgICB0ZXJtTm9kZXMgPSBbXG4gICAgICAgICAgICAgICAgICBsZWZ0VGVybU5vZGUsXG4gICAgICAgICAgICAgICAgICByaWdodFRlcm1Ob2RlXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBlcXVpdmFsZW5jZSA9IGZpbmRFcXVpdmFsZW5jZUJ5VGVybU5vZGVzKGVxdWl2YWxlbmNlcywgdGVybU5vZGVzKTtcblxuICAgICAgICAgIGlmIChlcXVpdmFsZW5jZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgY29uc3QgZGVwdGggPSAxLFxuICAgICAgICAgICAgICAgIGxlZnRUZXJtTm9kZU1hdGNoZXNSaWdodFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlLm1hdGNoKHJpZ2h0VGVybU5vZGUsIGRlcHRoKTtcblxuICAgICAgICAgIGlmIChsZWZ0VGVybU5vZGVNYXRjaGVzUmlnaHRUZXJtTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZSA9IGxlZnRUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZSA9IHJpZ2h0VGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgbGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSBsZWZ0Tm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICAgIGxlZnRDaGlsZE5vZGVzID0gbGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgcmlnaHRDaGlsZE5vZGVzID0gcmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgIGRlc2NlbmRlZCA9IGVxdWF0aW9uYWxQYXNzLmRlc2NlbmQobGVmdENoaWxkTm9kZXMsIHJpZ2h0Q2hpbGROb2RlcywgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChkZXNjZW5kZWQpIHtcbiAgICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCBlcXVhdGlvbmFsUGFzcyA9IG5ldyBFcXVhdGlvbmFsUGFzcygpO1xuXG5leHBvcnQgZnVuY3Rpb24gZXF1YXRlVGVybXMobGVmdFRlcm0sIHJpZ2h0VGVybSwgY29udGV4dCkge1xuICBsZXQgdGVybXNFcXVhdGU7XG5cbiAgY29uc3QgbGVmdFRlcm1Ob2RlID0gbGVmdFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICByaWdodFRlcm1Ob2RlID0gcmlnaHRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgbGVmdE5vZGUgPSBsZWZ0VGVybU5vZGUsIC8vL1xuICAgICAgICByaWdodE5vZGUgPSByaWdodFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgc3VjY2VzcyA9IGVxdWF0aW9uYWxQYXNzLnJ1bihsZWZ0Tm9kZSwgcmlnaHROb2RlLCBjb250ZXh0KTtcblxuICB0ZXJtc0VxdWF0ZSA9IHN1Y2Nlc3M7IC8vL1xuXG4gIHJldHVybiB0ZXJtc0VxdWF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWF0ZVN0YXRlbWVudHMobGVmdFN0YXRlbWVudCwgcmlnaHRTdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudHNFcXVhdGU7XG5cbiAgY29uc3QgbGVmdFN0YXRlbWVudE5vZGUgPSBsZWZ0U3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgcmlnaHRTdGF0ZW1lbnROb2RlID0gcmlnaHRTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICBsZWZ0Tm9kZSA9IGxlZnRTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgcmlnaHROb2RlID0gcmlnaHRTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3VjY2VzcyA9IGVxdWF0aW9uYWxQYXNzLnJ1bihsZWZ0Tm9kZSwgcmlnaHROb2RlLCBjb250ZXh0KTtcblxuICBzdGF0ZW1lbnRzRXF1YXRlID0gc3VjY2VzczsgLy8vXG5cbiAgcmV0dXJuIHN0YXRlbWVudHNFcXVhdGU7XG59XG4iXSwibmFtZXMiOlsiZXF1YXRlU3RhdGVtZW50cyIsImVxdWF0ZVRlcm1zIiwibm9kZVF1ZXJ5IiwicXVlcnlVdGlsaXRpZXMiLCJ0ZXJtTm9kZVF1ZXJ5IiwiRXF1YXRpb25hbFBhc3MiLCJFcXVpdmFsZW5jZVBhc3MiLCJtYXBzIiwibGVmdE5vZGVRdWVyeSIsInJpZ2h0Tm9kZVF1ZXJ5IiwicnVuIiwibGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImNvbnRleHQiLCJzdWNjZXNzIiwiZGVwdGgiLCJJbmZpbml0eSIsImxlZnRUZXJtTm9kZU1hdGNoZXNSaWdodFRlcm1Ob2RlIiwibWF0Y2giLCJlcXVpdmFsZW5jZXMiLCJnZXRFcXVpdmFsZW5jZXMiLCJ0ZXJtTm9kZXMiLCJlcXVpdmFsZW5jZSIsImZpbmRFcXVpdmFsZW5jZUJ5VGVybU5vZGVzIiwibGVmdE5vblRlcm1pbmFsTm9kZSIsInJpZ2h0Tm9uVGVybWluYWxOb2RlIiwibGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwibGVmdENoaWxkTm9kZXMiLCJyaWdodENoaWxkTm9kZXMiLCJkZXNjZW5kZWQiLCJlcXVhdGlvbmFsUGFzcyIsImRlc2NlbmQiLCJsZWZ0VGVybSIsInJpZ2h0VGVybSIsInRlcm1zRXF1YXRlIiwiZ2V0Tm9kZSIsImxlZnROb2RlIiwicmlnaHROb2RlIiwibGVmdFN0YXRlbWVudCIsInJpZ2h0U3RhdGVtZW50Iiwic3RhdGVtZW50c0VxdWF0ZSIsImxlZnRTdGF0ZW1lbnROb2RlIiwicmlnaHRTdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFpRmdCQTtlQUFBQTs7UUFkQUM7ZUFBQUE7OztnQ0FqRWdDOzhCQUVMO0FBRTNDLE1BQU0sRUFBRUMsU0FBUyxFQUFFLEdBQUdDLDhCQUFjO0FBRXBDLE1BQU1DLGdCQUFnQkYsVUFBVTtBQUVoQyxNQUFNRyx1QkFBdUJDLCtCQUFlO0lBQzFDLE9BQU9DLE9BQU87UUFDWjtZQUNFQyxlQUFlSjtZQUNmSyxnQkFBZ0JMO1lBQ2hCTSxLQUFLLENBQUNDLGNBQWNDLGVBQWVDO2dCQUNqQyxJQUFJQyxVQUFVO2dCQUVkLElBQUksQ0FBQ0EsU0FBUztvQkFDWixNQUFNQyxRQUFRQyxVQUNSQyxtQ0FBbUNOLGFBQWFPLEtBQUssQ0FBQ04sZUFBZUc7b0JBRTNFLElBQUlFLGtDQUFrQzt3QkFDcENILFVBQVU7b0JBQ1o7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDQSxTQUFTO29CQUNaLE1BQU1LLGVBQWVOLFFBQVFPLGVBQWUsSUFDdENDLFlBQVk7d0JBQ1ZWO3dCQUNBQztxQkFDRCxFQUNEVSxjQUFjQyxJQUFBQSx3Q0FBMEIsRUFBQ0osY0FBY0U7b0JBRTdELElBQUlDLGdCQUFnQixNQUFNO3dCQUN4QlIsVUFBVTtvQkFDWjtnQkFDRjtnQkFFQSxJQUFJLENBQUNBLFNBQVM7b0JBQ1osTUFBTUMsUUFBUSxHQUNSRSxtQ0FBbUNOLGFBQWFPLEtBQUssQ0FBQ04sZUFBZUc7b0JBRTNFLElBQUlFLGtDQUFrQzt3QkFDcEMsTUFBTU8sc0JBQXNCYixjQUN0QmMsdUJBQXVCYixlQUN2QmMsZ0NBQWdDRixvQkFBb0JHLGFBQWEsSUFDakVDLGlDQUFpQ0gscUJBQXFCRSxhQUFhLElBQ25FRSxpQkFBaUJILCtCQUNqQkksa0JBQWtCRixnQ0FDbEJHLFlBQVlDLGVBQWVDLE9BQU8sQ0FBQ0osZ0JBQWdCQyxpQkFBaUJqQjt3QkFFMUUsSUFBSWtCLFdBQVc7NEJBQ2JqQixVQUFVO3dCQUNaO29CQUNGO2dCQUNGO2dCQUVBLE9BQU9BO1lBQ1Q7UUFDRjtLQUNELENBQUM7QUFDSjtBQUVBLE1BQU1rQixpQkFBaUIsSUFBSTNCO0FBRXBCLFNBQVNKLFlBQVlpQyxRQUFRLEVBQUVDLFNBQVMsRUFBRXRCLE9BQU87SUFDdEQsSUFBSXVCO0lBRUosTUFBTXpCLGVBQWV1QixTQUFTRyxPQUFPLElBQy9CekIsZ0JBQWdCdUIsVUFBVUUsT0FBTyxJQUNqQ0MsV0FBVzNCLGNBQ1g0QixZQUFZM0IsZUFDWkUsVUFBVWtCLGVBQWV0QixHQUFHLENBQUM0QixVQUFVQyxXQUFXMUI7SUFFeER1QixjQUFjdEIsU0FBUyxHQUFHO0lBRTFCLE9BQU9zQjtBQUNUO0FBRU8sU0FBU3BDLGlCQUFpQndDLGFBQWEsRUFBRUMsY0FBYyxFQUFFNUIsT0FBTztJQUNyRSxJQUFJNkI7SUFFSixNQUFNQyxvQkFBb0JILGNBQWNILE9BQU8sSUFDekNPLHFCQUFxQkgsZUFBZUosT0FBTyxJQUMzQ0MsV0FBV0ssbUJBQ1hKLFlBQVlLLG9CQUNaOUIsVUFBVWtCLGVBQWV0QixHQUFHLENBQUM0QixVQUFVQyxXQUFXMUI7SUFFeEQ2QixtQkFBbUI1QixTQUFTLEdBQUc7SUFFL0IsT0FBTzRCO0FBQ1QifQ==