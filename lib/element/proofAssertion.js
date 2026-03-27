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
    constructor(context, string, node, statement){
        super(context, string, node);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBlcXVhdGVTdGF0ZW1lbnRzIH0gZnJvbSBcIi4uL3Byb2Nlc3MvZXF1YXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb29mQXNzZXJ0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFByb29mQXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcHJvb2ZBc3NlcnRpb25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHByb29mQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGlzUHJvb2ZBc3NlcnRpb24oKSB7XG4gICAgY29uc3QgcHJvb2ZBc3NlcnRpb24gPSB0cnVlO1xuXG4gICAgcmV0dXJuIHByb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgY29tcGFyZVN0ZXAoc3RlcCwgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvU3RlcCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHN0ZXAuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHRvIHRoZSAnJHtwcm9vZkFzc2VydGlvblN0cmluZ30nIHByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3RlcC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBsZWZ0U3RhdGVtZW50ID0gc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgcmlnaHRTdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudHNFcXVhdGUgPSBlcXVhdGVTdGF0ZW1lbnRzKGxlZnRTdGF0ZW1lbnQsIHJpZ2h0U3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRzRXF1YXRlKSB7XG4gICAgICBjb21wYXJlc1RvU3RlcCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNvbXBhcmVzVG9TdGVwKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5jb21wYXJlZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgdG8gdGhlICcke3Byb29mQXNzZXJ0aW9uU3RyaW5nfScgcHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvU3RlcDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgICAgcHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBwcm9vZiBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMuc3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtwcm9vZkFzc2VydGlvblN0cmluZ30nIHByb29mIGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlByb29mQXNzZXJ0aW9uIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwiZ2V0UHJvb2ZBc3NlcnRpb25Ob2RlIiwiZ2V0Tm9kZSIsInByb29mQXNzZXJ0aW9uTm9kZSIsImlzUHJvb2ZBc3NlcnRpb24iLCJwcm9vZkFzc2VydGlvbiIsImNvbXBhcmVTdGVwIiwic3RlcCIsImNvbXBhcmVzVG9TdGVwIiwic3RlcFN0cmluZyIsImdldFN0cmluZyIsInByb29mQXNzZXJ0aW9uU3RyaW5nIiwidHJhY2UiLCJsZWZ0U3RhdGVtZW50IiwicmlnaHRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRzRXF1YXRlIiwiZXF1YXRlU3RhdGVtZW50cyIsImRlYnVnIiwidW5pZnlTdGF0ZW1lbnQiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZXMiLCJzdGF0ZW1lbnRTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7Z0NBSkc7d0JBRVM7QUFFbEIsTUFBTUEsdUJBQXVCQyx1QkFBTztJQUNqRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLENBQUU7UUFDNUMsS0FBSyxDQUFDSCxTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLFNBQVMsR0FBR0E7SUFDbkI7SUFFQUMsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDRCxTQUFTO0lBQ3ZCO0lBRUFFLHdCQUF3QjtRQUN0QixNQUFNSCxPQUFPLElBQUksQ0FBQ0ksT0FBTyxJQUNuQkMscUJBQXFCTCxNQUFPLEdBQUc7UUFFckMsT0FBT0s7SUFDVDtJQUVBQyxtQkFBbUI7UUFDakIsTUFBTUMsaUJBQWlCO1FBRXZCLE9BQU9BO0lBQ1Q7SUFFQUMsWUFBWUMsSUFBSSxFQUFFWCxPQUFPLEVBQUU7UUFDekIsSUFBSVksaUJBQWlCO1FBRXJCLE1BQU1DLGFBQWFGLEtBQUtHLFNBQVMsSUFDM0JDLHVCQUF1QixJQUFJLENBQUNELFNBQVMsSUFBSyxHQUFHO1FBRW5EZCxRQUFRZ0IsS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFSCxXQUFXLGVBQWUsRUFBRUUscUJBQXFCLG9CQUFvQixDQUFDO1FBRXRHLE1BQU1aLFlBQVlRLEtBQUtQLFlBQVksSUFDN0JhLGdCQUFnQmQsV0FDaEJlLGlCQUFpQixJQUFJLENBQUNmLFNBQVMsRUFDL0JnQixtQkFBbUJDLElBQUFBLHdCQUFnQixFQUFDSCxlQUFlQyxnQkFBZ0JsQjtRQUV6RSxJQUFJbUIsa0JBQWtCO1lBQ3BCUCxpQkFBaUI7UUFDbkI7UUFFQSxJQUFJQSxnQkFBZ0I7WUFDbEJaLFFBQVFxQixLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRVIsV0FBVyxlQUFlLEVBQUVFLHFCQUFxQixrQkFBa0IsQ0FBQztRQUN4RztRQUVBLE9BQU9IO0lBQ1Q7SUFFQVUsZUFBZW5CLFNBQVMsRUFBRW9CLGNBQWMsRUFBRUMsZUFBZSxFQUFFO1FBQ3pELElBQUlDLG1CQUFtQjtRQUV2QixJQUFJLElBQUksQ0FBQ3RCLFNBQVMsS0FBSyxNQUFNO1lBQzNCLE1BQU1ILFVBQVV3QixpQkFDVkUsa0JBQWtCdkIsVUFBVVcsU0FBUyxJQUNyQ0MsdUJBQXVCLElBQUksQ0FBQ0QsU0FBUyxJQUFLLEdBQUc7WUFFbkRkLFFBQVFnQixLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUVVLGdCQUFnQixzQkFBc0IsRUFBRVgscUJBQXFCLG9CQUFvQixDQUFDO1lBRWpIVSxtQkFBbUIsSUFBSSxDQUFDdEIsU0FBUyxDQUFDbUIsY0FBYyxDQUFDbkIsV0FBV29CLGdCQUFnQkM7WUFFNUUsSUFBSUMsa0JBQWtCO2dCQUNwQnpCLFFBQVFxQixLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUssZ0JBQWdCLHNCQUFzQixFQUFFWCxxQkFBcUIsa0JBQWtCLENBQUM7WUFDbkg7UUFDRjtRQUVBLE9BQU9VO0lBQ1Q7QUFDRiJ9