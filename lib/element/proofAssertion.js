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
        const leftStatement = statement, rightStatement = this.statement, leftStatementNode = leftStatement.getNode(), rightStatementNode = rightStatement.getNode(), statementsEquate = (0, _equate.equateStatements)(leftStatementNode, rightStatementNode, context);
        if (statementsEquate) {
            comparesToStatement = true;
        }
        if (comparesToStatement) {
            context.debug(`...compared the '${statementString}' statement to the '${proofAssertionString}' proof assertion.`);
        }
        return comparesToStatement;
    }
    validateStatement(context) {
        let statementValidates = false;
        const statementString = this.statement.getString(), proofAssertionString = this.getString(); ///
        context.trace(`Validating the '${proofAssertionString}' proof assertion's '${statementString}' statement... `);
        const stated = this.isStated(), statement = this.statement.validate(stated, context);
        if (statement !== null) {
            statementValidates = true;
        }
        if (statementValidates) {
            context.debug(`...validated the '${proofAssertionString}' proof assertion's '${statementString}' statement. `);
        }
        return statementValidates;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBlcXVhdGVTdGF0ZW1lbnRzIH0gZnJvbSBcIi4uL3Byb2Nlc3MvZXF1YXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb29mQXNzZXJ0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFByb29mQXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcHJvb2ZBc3NlcnRpb25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHByb29mQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGlzUHJvb2ZBc3NlcnRpb24oKSB7XG4gICAgY29uc3QgcHJvb2ZBc3NlcnRpb24gPSB0cnVlO1xuXG4gICAgcmV0dXJuIHByb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgY29tcGFyZVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyZXNUb1N0YXRlbWVudCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHByb29mQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgdG8gdGhlICcke3Byb29mQXNzZXJ0aW9uU3RyaW5nfScgcHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBsZWZ0U3RhdGVtZW50ID0gc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgcmlnaHRTdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIGxlZnRTdGF0ZW1lbnROb2RlID0gbGVmdFN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgcmlnaHRTdGF0ZW1lbnROb2RlID0gcmlnaHRTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudHNFcXVhdGUgPSBlcXVhdGVTdGF0ZW1lbnRzKGxlZnRTdGF0ZW1lbnROb2RlLCByaWdodFN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudHNFcXVhdGUpIHtcbiAgICAgIGNvbXBhcmVzVG9TdGF0ZW1lbnQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChjb21wYXJlc1RvU3RhdGVtZW50KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5jb21wYXJlZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHRvIHRoZSAnJHtwcm9vZkFzc2VydGlvblN0cmluZ30nIHByb29mIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1N0YXRlbWVudDtcbiAgfVxuXG4gIHZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwcm9vZkFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Byb29mQXNzZXJ0aW9uU3RyaW5nfScgcHJvb2YgYXNzZXJ0aW9uJ3MgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uIGApO1xuXG4gICAgY29uc3Qgc3RhdGVkID0gdGhpcy5pc1N0YXRlZCgpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LnZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBwcm9vZiBhc3NlcnRpb24ncyAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuIGApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRWYWxpZGF0ZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHByb29mQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3Byb29mQXNzZXJ0aW9uU3RyaW5nfScgcHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQcm9vZkFzc2VydGlvbiIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsImdldFByb29mQXNzZXJ0aW9uTm9kZSIsImdldE5vZGUiLCJwcm9vZkFzc2VydGlvbk5vZGUiLCJpc1Byb29mQXNzZXJ0aW9uIiwicHJvb2ZBc3NlcnRpb24iLCJjb21wYXJlU3RhdGVtZW50IiwiY29tcGFyZXNUb1N0YXRlbWVudCIsInN0YXRlbWVudFN0cmluZyIsImdldFN0cmluZyIsInByb29mQXNzZXJ0aW9uU3RyaW5nIiwidHJhY2UiLCJsZWZ0U3RhdGVtZW50IiwicmlnaHRTdGF0ZW1lbnQiLCJsZWZ0U3RhdGVtZW50Tm9kZSIsInJpZ2h0U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudHNFcXVhdGUiLCJlcXVhdGVTdGF0ZW1lbnRzIiwiZGVidWciLCJ2YWxpZGF0ZVN0YXRlbWVudCIsInN0YXRlbWVudFZhbGlkYXRlcyIsInN0YXRlZCIsImlzU3RhdGVkIiwidmFsaWRhdGUiLCJ1bmlmeVN0YXRlbWVudCIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFxQkE7OztnQ0FKRzt3QkFFUztB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