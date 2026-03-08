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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBlcXVhdGVTdGF0ZW1lbnRzIH0gZnJvbSBcIi4uL3Byb2Nlc3MvZXF1YXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb29mQXNzZXJ0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFByb29mQXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcHJvb2ZBc3NlcnRpb25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHByb29mQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGlzUHJvb2ZBc3NlcnRpb24oKSB7XG4gICAgY29uc3QgcHJvb2ZBc3NlcnRpb24gPSB0cnVlO1xuXG4gICAgcmV0dXJuIHByb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgY29tcGFyZVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyZXNUb1N0YXRlbWVudCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHByb29mQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgdG8gdGhlICcke3Byb29mQXNzZXJ0aW9uU3RyaW5nfScgcHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBsZWZ0U3RhdGVtZW50ID0gc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgcmlnaHRTdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudHNFcXVhdGUgPSBlcXVhdGVTdGF0ZW1lbnRzKGxlZnRTdGF0ZW1lbnQsIHJpZ2h0U3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRzRXF1YXRlKSB7XG4gICAgICBjb21wYXJlc1RvU3RhdGVtZW50ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoY29tcGFyZXNUb1N0YXRlbWVudCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29tcGFyZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB0byB0aGUgJyR7cHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdGF0ZW1lbnQ7XG4gIH1cblxuICB2YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtwcm9vZkFzc2VydGlvblN0cmluZ30nIHByb29mIGFzc2VydGlvbidzICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLiBgKTtcblxuICAgIGNvbnN0IHN0YXRlZCA9IHRoaXMuaXNTdGF0ZWQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudC52YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Byb29mQXNzZXJ0aW9uU3RyaW5nfScgcHJvb2YgYXNzZXJ0aW9uJ3MgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LiBgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBwcm9vZkFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtwcm9vZkFzc2VydGlvblN0cmluZ30nIHByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3Byb29mQXNzZXJ0aW9uU3RyaW5nfScgcHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUHJvb2ZBc3NlcnRpb24iLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJnZXRQcm9vZkFzc2VydGlvbk5vZGUiLCJnZXROb2RlIiwicHJvb2ZBc3NlcnRpb25Ob2RlIiwiaXNQcm9vZkFzc2VydGlvbiIsInByb29mQXNzZXJ0aW9uIiwiY29tcGFyZVN0YXRlbWVudCIsImNvbXBhcmVzVG9TdGF0ZW1lbnQiLCJzdGF0ZW1lbnRTdHJpbmciLCJnZXRTdHJpbmciLCJwcm9vZkFzc2VydGlvblN0cmluZyIsInRyYWNlIiwibGVmdFN0YXRlbWVudCIsInJpZ2h0U3RhdGVtZW50Iiwic3RhdGVtZW50c0VxdWF0ZSIsImVxdWF0ZVN0YXRlbWVudHMiLCJkZWJ1ZyIsInZhbGlkYXRlU3RhdGVtZW50Iiwic3RhdGVtZW50VmFsaWRhdGVzIiwic3RhdGVkIiwiaXNTdGF0ZWQiLCJ2YWxpZGF0ZSIsInVuaWZ5U3RhdGVtZW50IiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7O2dDQUpHO3dCQUVTO0FBRWxCLE1BQU1BLHVCQUF1QkMsdUJBQU87SUFDakQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxDQUFFO1FBQzVDLEtBQUssQ0FBQ0gsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO0lBQ25CO0lBRUFDLGVBQWU7UUFDYixPQUFP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