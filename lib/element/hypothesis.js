"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _occamlanguages = require("occam-languages");
const _elements = require("../elements");
const _json = require("../utilities/json");
const _default = (0, _elements.define)(class Hypothesis extends _occamlanguages.Element {
    constructor(context, string, node, statement){
        super(context, string, node);
        this.statement = statement;
    }
    getStatement() {
        return this.statement;
    }
    getHypothesisNode() {
        const node = this.getNode(), hypothesisNode = node; ///
        return hypothesisNode;
    }
    compareProofAssertion(proofAssertion, context) {
        let comparesToProofAssertion = false;
        const hypothesisString = this.getString(), proofAssertionString = proofAssertion.getString();
        context.trace(`Is the '${hypothesisString}' hypothesis equal to the '${proofAssertionString}' proof assertion...`);
        const proofAssertionStatement = proofAssertion.getStatement(), statementEqualToStepStatement = this.statement.isEqualTo(proofAssertionStatement);
        if (statementEqualToStepStatement) {
            comparesToProofAssertion = true;
        }
        if (comparesToProofAssertion) {
            context.trace(`...the '${hypothesisString}' hypothesis is equal to the '${proofAssertionString}' proof assertion.`);
        }
        return comparesToProofAssertion;
    }
    async verify(context) {
        let verifies = false;
        await this.break(context);
        const hypothesisString = this.getString(); ///
        context.trace(`Verifying the '${hypothesisString}' hypothesis...`);
        if (false) {
        ///
        } else if (this.statement !== null) {
            let statementValidates = false;
            const stated = true, statement = this.statement.validate(stated, context);
            if (statement !== null) {
                statementValidates = true;
            }
            if (statementValidates) {
                const subproofOrProofAssertion = this; ///
                context.assignAssignments();
                context.addSubproofOrProofAssertion(subproofOrProofAssertion);
                verifies = true;
            }
        } else {
            context.debug(`Unable to verify the '${hypothesisString}' hypothesis because it is nonsense.`);
        }
        if (verifies) {
            context.debug(`...verified the '${hypothesisString}' hypothesis.`);
        }
        return verifies;
    }
    toJSON() {
        const statementJSON = (0, _json.statementToStatementJSON)(this.statement), statement = statementJSON, string = this.getString(), json = {
            string,
            statement
        };
        return json;
    }
    static name = "Hypothesis";
    static fromJSON(json, context) {
        debugger;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2h5cG90aGVzaXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgc3RhdGVtZW50RnJvbUpTT04sIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgSHlwb3RoZXNpcyBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRIeXBvdGhlc2lzTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgaHlwb3RoZXNpc05vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gaHlwb3RoZXNpc05vZGU7XG4gIH1cblxuICBjb21wYXJlUHJvb2ZBc3NlcnRpb24ocHJvb2ZBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyZXNUb1Byb29mQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBoeXBvdGhlc2lzU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgcHJvb2ZBc3NlcnRpb25TdHJpbmcgPSBwcm9vZkFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYElzIHRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcyBlcXVhbCB0byB0aGUgJyR7cHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBwcm9vZiBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHByb29mQXNzZXJ0aW9uU3RhdGVtZW50ID0gcHJvb2ZBc3NlcnRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50RXF1YWxUb1N0ZXBTdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudC5pc0VxdWFsVG8ocHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQpO1xuXG4gICAgaWYgKHN0YXRlbWVudEVxdWFsVG9TdGVwU3RhdGVtZW50KSB7XG4gICAgICBjb21wYXJlc1RvUHJvb2ZBc3NlcnRpb24gPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChjb21wYXJlc1RvUHJvb2ZBc3NlcnRpb24pIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcyBpcyBlcXVhbCB0byB0aGUgJyR7cHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9Qcm9vZkFzc2VydGlvbjtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgaHlwb3RoZXNpc1N0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcy4uLmApO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudC52YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uID0gdGhpczsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQuYXNzaWduQXNzaWdubWVudHMoKTtcblxuICAgICAgICBjb250ZXh0LmFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pO1xuXG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7aHlwb3RoZXNpc1N0cmluZ30nIGh5cG90aGVzaXMgYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTih0aGlzLnN0YXRlbWVudCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIHN0YXRlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJIeXBvdGhlc2lzXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBkZWJ1Z2dlclxuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJIeXBvdGhlc2lzIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwiZ2V0SHlwb3RoZXNpc05vZGUiLCJnZXROb2RlIiwiaHlwb3RoZXNpc05vZGUiLCJjb21wYXJlUHJvb2ZBc3NlcnRpb24iLCJwcm9vZkFzc2VydGlvbiIsImNvbXBhcmVzVG9Qcm9vZkFzc2VydGlvbiIsImh5cG90aGVzaXNTdHJpbmciLCJnZXRTdHJpbmciLCJwcm9vZkFzc2VydGlvblN0cmluZyIsInRyYWNlIiwicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQiLCJzdGF0ZW1lbnRFcXVhbFRvU3RlcFN0YXRlbWVudCIsImlzRXF1YWxUbyIsInZlcmlmeSIsInZlcmlmaWVzIiwiYnJlYWsiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJzdGF0ZWQiLCJ2YWxpZGF0ZSIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsImFzc2lnbkFzc2lnbm1lbnRzIiwiYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwiZGVidWciLCJ0b0pTT04iLCJzdGF0ZW1lbnRKU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7Z0NBTHdCOzBCQUVEO3NCQUNxQztNQUU1RCxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLG1CQUFtQkMsdUJBQU87SUFDcEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxDQUFFO1FBQzVDLEtBQUssQ0FBQ0gsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxD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