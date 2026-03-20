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
    compareStatement(statement, context) {
        let comparesToStatement = false;
        const statementString = statement.getString(), proofAssertionString = this.getString(); ///
        context.trace(`Comparing the '${statementString}' statement to the '${proofAssertionString}' proof assertion...`);
        const leftStatement = statement, rightStatement = this.statement, statementsEquate = (0, _equate.equateStatements)(leftStatement, rightStatement, context);
        if (statementsEquate) {
            comparesToStatement = true;
        }
        if (comparesToStatement) {
            context.debug(`...compared the '${statementString}' statement to the '${proofAssertionString}' proof assertion.`);
        }
        return comparesToStatement;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBlcXVhdGVTdGF0ZW1lbnRzIH0gZnJvbSBcIi4uL3Byb2Nlc3MvZXF1YXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb29mQXNzZXJ0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFByb29mQXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcHJvb2ZBc3NlcnRpb25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHByb29mQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGlzUHJvb2ZBc3NlcnRpb24oKSB7XG4gICAgY29uc3QgcHJvb2ZBc3NlcnRpb24gPSB0cnVlO1xuXG4gICAgcmV0dXJuIHByb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgY29tcGFyZVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyZXNUb1N0YXRlbWVudCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHByb29mQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgdG8gdGhlICcke3Byb29mQXNzZXJ0aW9uU3RyaW5nfScgcHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBsZWZ0U3RhdGVtZW50ID0gc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgcmlnaHRTdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudHNFcXVhdGUgPSBlcXVhdGVTdGF0ZW1lbnRzKGxlZnRTdGF0ZW1lbnQsIHJpZ2h0U3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRzRXF1YXRlKSB7XG4gICAgICBjb21wYXJlc1RvU3RhdGVtZW50ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoY29tcGFyZXNUb1N0YXRlbWVudCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29tcGFyZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB0byB0aGUgJyR7cHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdGF0ZW1lbnQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHByb29mQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3Byb29mQXNzZXJ0aW9uU3RyaW5nfScgcHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQcm9vZkFzc2VydGlvbiIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsImdldFByb29mQXNzZXJ0aW9uTm9kZSIsImdldE5vZGUiLCJwcm9vZkFzc2VydGlvbk5vZGUiLCJpc1Byb29mQXNzZXJ0aW9uIiwicHJvb2ZBc3NlcnRpb24iLCJjb21wYXJlU3RhdGVtZW50IiwiY29tcGFyZXNUb1N0YXRlbWVudCIsInN0YXRlbWVudFN0cmluZyIsImdldFN0cmluZyIsInByb29mQXNzZXJ0aW9uU3RyaW5nIiwidHJhY2UiLCJsZWZ0U3RhdGVtZW50IiwicmlnaHRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRzRXF1YXRlIiwiZXF1YXRlU3RhdGVtZW50cyIsImRlYnVnIiwidW5pZnlTdGF0ZW1lbnQiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7Z0NBSkc7d0JBRVM7QUFFbEIsTUFBTUEsdUJBQXVCQyx1QkFBTztJQUNqRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLENBQUU7UUFDNUMsS0FBSyxDQUFDSCxTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLFNBQVMsR0FBR0E7SUFDbkI7SUFFQUMsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDRCxTQUFTO0lBQ3ZCO0lBRUFFLHdCQUF3QjtRQUN0QixNQUFNSCxPQUFPLElBQUksQ0FBQ0ksT0FBTyxJQUNuQkMscUJBQXFCTCxNQUFPLEdBQUc7UUFFckMsT0FBT0s7SUFDVDtJQUVBQyxtQkFBbUI7UUFDakIsTUFBTUMsaUJBQWlCO1FBRXZCLE9BQU9BO0lBQ1Q7SUFFQUMsaUJBQWlCUCxTQUFTLEVBQUVILE9BQU8sRUFBRTtRQUNuQyxJQUFJVyxzQkFBc0I7UUFFMUIsTUFBTUMsa0JBQWtCVCxVQUFVVSxTQUFTLElBQ3JDQyx1QkFBdUIsSUFBSSxDQUFDRCxTQUFTLElBQUssR0FBRztRQUVuRGIsUUFBUWUsS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFSCxnQkFBZ0Isb0JBQW9CLEVBQUVFLHFCQUFxQixvQkFBb0IsQ0FBQztRQUVoSCxNQUFNRSxnQkFBZ0JiLFdBQ2hCYyxpQkFBaUIsSUFBSSxDQUFDZCxTQUFTLEVBQy9CZSxtQkFBbUJDLElBQUFBLHdCQUFnQixFQUFDSCxlQUFlQyxnQkFBZ0JqQjtRQUV6RSxJQUFJa0Isa0JBQWtCO1lBQ3BCUCxzQkFBc0I7UUFDeEI7UUFFQSxJQUFJQSxxQkFBcUI7WUFDdkJYLFFBQVFvQixLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRVIsZ0JBQWdCLG9CQUFvQixFQUFFRSxxQkFBcUIsa0JBQWtCLENBQUM7UUFDbEg7UUFFQSxPQUFPSDtJQUNUO0lBRUFVLGVBQWVsQixTQUFTLEVBQUVtQixjQUFjLEVBQUVDLGVBQWUsRUFBRTtRQUN6RCxJQUFJQyxtQkFBbUI7UUFFdkIsSUFBSSxJQUFJLENBQUNyQixTQUFTLEtBQUssTUFBTTtZQUMzQixNQUFNSCxVQUFVdUIsaUJBQ1ZYLGtCQUFrQlQsVUFBVVUsU0FBUyxJQUNyQ0MsdUJBQXVCLElBQUksQ0FBQ0QsU0FBUyxJQUFLLEdBQUc7WUFFbkRiLFFBQVFlLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRUgsZ0JBQWdCLHNCQUFzQixFQUFFRSxxQkFBcUIsb0JBQW9CLENBQUM7WUFFakhVLG1CQUFtQixJQUFJLENBQUNyQixTQUFTLENBQUNrQixjQUFjLENBQUNsQixXQUFXbUIsZ0JBQWdCQztZQUU1RSxJQUFJQyxrQkFBa0I7Z0JBQ3BCeEIsUUFBUW9CLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFUixnQkFBZ0Isc0JBQXNCLEVBQUVFLHFCQUFxQixrQkFBa0IsQ0FBQztZQUNuSDtRQUNGO1FBRUEsT0FBT1U7SUFDVDtBQUNGIn0=