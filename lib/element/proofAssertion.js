"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ProofAssertion;
    }
});
const _occamlanguages = require("occam-languages");
const _equate = require("../process/equate");
class ProofAssertion extends _occamlanguages.Element {
    constructor(context, string, node, lineIndex, statement){
        super(context, string, node, lineIndex);
        this.statement = statement;
    }
    getStatement() {
        return this.statement;
    }
    getProofAssertionNode() {
        const node = this.getNode(), proofAssertionNode = node; ///
        return proofAssertionNode;
    }
    isProofAssertion() {
        const proofAssertion = true;
        return proofAssertion;
    }
    compareStep(step, context) {
        let comparesToStep = false;
        const stepString = step.getString(), proofAssertionString = this.getString(); ///
        context.trace(`Comparing the '${stepString}' step to the '${proofAssertionString}' proof assertion...`);
        const statement = step.getStatement(), leftStatement = statement, rightStatement = this.statement, statementsEquate = (0, _equate.equateStatements)(leftStatement, rightStatement, context);
        if (statementsEquate) {
            comparesToStep = true;
        }
        if (comparesToStep) {
            context.debug(`...compared the '${stepString}' step to the '${proofAssertionString}' proof assertion.`);
        }
        return comparesToStep;
    }
    unifyStatement(statement, generalContext, specificContext) {
        let statementUnifies = false;
        if (this.statement !== null) {
            const context = specificContext, statementString = statement.getString(), proofAssertionString = this.getString(); ///
            context.trace(`Unifying the '${statementString}' statement with the '${proofAssertionString}' proof assertion...`);
            statementUnifies = this.statement.unifyStatement(statement, generalContext, specificContext);
            if (statementUnifies) {
                context.debug(`...unified the '${statementString}' statement with the '${proofAssertionString}' proof assertion.`);
            }
        }
        return statementUnifies;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBlcXVhdGVTdGF0ZW1lbnRzIH0gZnJvbSBcIi4uL3Byb2Nlc3MvZXF1YXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb29mQXNzZXJ0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBzdGF0ZW1lbnQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRQcm9vZkFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHByb29mQXNzZXJ0aW9uTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBwcm9vZkFzc2VydGlvbk5vZGU7XG4gIH1cblxuICBpc1Byb29mQXNzZXJ0aW9uKCkge1xuICAgIGNvbnN0IHByb29mQXNzZXJ0aW9uID0gdHJ1ZTtcblxuICAgIHJldHVybiBwcm9vZkFzc2VydGlvbjtcbiAgfVxuXG4gIGNvbXBhcmVTdGVwKHN0ZXAsIGNvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyZXNUb1N0ZXAgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSBzdGVwLmdldFN0cmluZygpLFxuICAgICAgICAgIHByb29mQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB0byB0aGUgJyR7cHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBwcm9vZiBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgbGVmdFN0YXRlbWVudCA9IHN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIHJpZ2h0U3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRzRXF1YXRlID0gZXF1YXRlU3RhdGVtZW50cyhsZWZ0U3RhdGVtZW50LCByaWdodFN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50c0VxdWF0ZSkge1xuICAgICAgY29tcGFyZXNUb1N0ZXAgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChjb21wYXJlc1RvU3RlcCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29tcGFyZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHRvIHRoZSAnJHtwcm9vZkFzc2VydGlvblN0cmluZ30nIHByb29mIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1N0ZXA7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHByb29mQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3Byb29mQXNzZXJ0aW9uU3RyaW5nfScgcHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQcm9vZkFzc2VydGlvbiIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsInN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsImdldFByb29mQXNzZXJ0aW9uTm9kZSIsImdldE5vZGUiLCJwcm9vZkFzc2VydGlvbk5vZGUiLCJpc1Byb29mQXNzZXJ0aW9uIiwicHJvb2ZBc3NlcnRpb24iLCJjb21wYXJlU3RlcCIsInN0ZXAiLCJjb21wYXJlc1RvU3RlcCIsInN0ZXBTdHJpbmciLCJnZXRTdHJpbmciLCJwcm9vZkFzc2VydGlvblN0cmluZyIsInRyYWNlIiwibGVmdFN0YXRlbWVudCIsInJpZ2h0U3RhdGVtZW50Iiwic3RhdGVtZW50c0VxdWF0ZSIsImVxdWF0ZVN0YXRlbWVudHMiLCJkZWJ1ZyIsInVuaWZ5U3RhdGVtZW50IiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwic3RhdGVtZW50U3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7O2dDQUpHO3dCQUVTO0FBRWxCLE1BQU1BLHVCQUF1QkMsdUJBQU87SUFDakQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLENBQUU7UUFDdkQsS0FBSyxDQUFDSixTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLFNBQVMsR0FBR0E7SUFDbkI7SUFFQUMsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDRCxTQUFTO0lBQ3ZCO0lBRUFFLHdCQUF3QjtRQUN0QixNQUFNSixPQUFPLElBQUksQ0FBQ0ssT0FBTyxJQUNuQkMscUJBQXFCTixNQUFPLEdBQUc7UUFFckMsT0FBT007SUFDVDtJQUVBQyxtQkFBbUI7UUFDakIsTUFBTUMsaUJBQWlCO1FBRXZCLE9BQU9BO0lBQ1Q7SUFFQUMsWUFBWUMsSUFBSSxFQUFFWixPQUFPLEVBQUU7UUFDekIsSUFBSWEsaUJBQWlCO1FBRXJCLE1BQU1DLGFBQWFGLEtBQUtHLFNBQVMsSUFDM0JDLHVCQUF1QixJQUFJLENBQUNELFNBQVMsSUFBSyxHQUFHO1FBRW5EZixRQUFRaUIsS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFSCxXQUFXLGVBQWUsRUFBRUUscUJBQXFCLG9CQUFvQixDQUFDO1FBRXRHLE1BQU1aLFlBQVlRLEtBQUtQLFlBQVksSUFDN0JhLGdCQUFnQmQsV0FDaEJlLGlCQUFpQixJQUFJLENBQUNmLFNBQVMsRUFDL0JnQixtQkFBbUJDLElBQUFBLHdCQUFnQixFQUFDSCxlQUFlQyxnQkFBZ0JuQjtRQUV6RSxJQUFJb0Isa0JBQWtCO1lBQ3BCUCxpQkFBaUI7UUFDbkI7UUFFQSxJQUFJQSxnQkFBZ0I7WUFDbEJiLFFBQVFzQixLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRVIsV0FBVyxlQUFlLEVBQUVFLHFCQUFxQixrQkFBa0IsQ0FBQztRQUN4RztRQUVBLE9BQU9IO0lBQ1Q7SUFFQVUsZUFBZW5CLFNBQVMsRUFBRW9CLGNBQWMsRUFBRUMsZUFBZSxFQUFFO1FBQ3pELElBQUlDLG1CQUFtQjtRQUV2QixJQUFJLElBQUksQ0FBQ3RCLFNBQVMsS0FBSyxNQUFNO1lBQzNCLE1BQU1KLFVBQVV5QixpQkFDVkUsa0JBQWtCdkIsVUFBVVcsU0FBUyxJQUNyQ0MsdUJBQXVCLElBQUksQ0FBQ0QsU0FBUyxJQUFLLEdBQUc7WUFFbkRmLFFBQVFpQixLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUVVLGdCQUFnQixzQkFBc0IsRUFBRVgscUJBQXFCLG9CQUFvQixDQUFDO1lBRWpIVSxtQkFBbUIsSUFBSSxDQUFDdEIsU0FBUyxDQUFDbUIsY0FBYyxDQUFDbkIsV0FBV29CLGdCQUFnQkM7WUFFNUUsSUFBSUMsa0JBQWtCO2dCQUNwQjFCLFFBQVFzQixLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUssZ0JBQWdCLHNCQUFzQixFQUFFWCxxQkFBcUIsa0JBQWtCLENBQUM7WUFDbkg7UUFDRjtRQUVBLE9BQU9VO0lBQ1Q7QUFDRiJ9