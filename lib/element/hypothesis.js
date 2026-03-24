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
const _context = require("../utilities/context");
const _instantiate = require("../process/instantiate");
const _element = require("../utilities/element");
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
            (0, _context.descend)((context)=>{
                const statement = this.statement.validate(context);
                if (statement !== null) {
                    statementValidates = true;
                }
            }, context);
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
        const string = this.getString(), json = {
            string
        };
        return json;
    }
    static name = "Hypothesis";
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string } = json, hypothesisNode = (0, _instantiate.instantiateHypothesis)(string, context), node = hypothesisNode, statement = (0, _element.statementFromHypothesisNode)(hypothesisNode, context);
            context = null;
            const hypothesis = new Hypothesis(context, string, node, statement);
            return hypothesis;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2h5cG90aGVzaXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgZGVzY2VuZCwgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlSHlwb3RoZXNpcyB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnRGcm9tSHlwb3RoZXNpc05vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEh5cG90aGVzaXMgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0SHlwb3RoZXNpc05vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGh5cG90aGVzaXNOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGh5cG90aGVzaXNOb2RlO1xuICB9XG5cbiAgY29tcGFyZVByb29mQXNzZXJ0aW9uKHByb29mQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9Qcm9vZkFzc2VydGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3QgaHlwb3RoZXNpc1N0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHByb29mQXNzZXJ0aW9uU3RyaW5nID0gcHJvb2ZBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBJcyB0aGUgJyR7aHlwb3RoZXNpc1N0cmluZ30nIGh5cG90aGVzaXMgZXF1YWwgdG8gdGhlICcke3Byb29mQXNzZXJ0aW9uU3RyaW5nfScgcHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBwcm9vZkFzc2VydGlvblN0YXRlbWVudCA9IHByb29mQXNzZXJ0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudEVxdWFsVG9TdGVwU3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQuaXNFcXVhbFRvKHByb29mQXNzZXJ0aW9uU3RhdGVtZW50KTtcblxuICAgIGlmIChzdGF0ZW1lbnRFcXVhbFRvU3RlcFN0YXRlbWVudCkge1xuICAgICAgY29tcGFyZXNUb1Byb29mQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoY29tcGFyZXNUb1Byb29mQXNzZXJ0aW9uKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi50aGUgJyR7aHlwb3RoZXNpc1N0cmluZ30nIGh5cG90aGVzaXMgaXMgZXF1YWwgdG8gdGhlICcke3Byb29mQXNzZXJ0aW9uU3RyaW5nfScgcHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvUHJvb2ZBc3NlcnRpb247XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IGh5cG90aGVzaXNTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7aHlwb3RoZXNpc1N0cmluZ30nIGh5cG90aGVzaXMuLi5gKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgbGV0IHN0YXRlbWVudFZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBkZXNjZW5kKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgY29udGV4dC5hc3NpZ25Bc3NpZ25tZW50cygpO1xuXG4gICAgICAgIGNvbnRleHQuYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbik7XG5cbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcyBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiSHlwb3RoZXNpc1wiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIGh5cG90aGVzaXNOb2RlID0gaW5zdGFudGlhdGVIeXBvdGhlc2lzKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gaHlwb3RoZXNpc05vZGUsICAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21IeXBvdGhlc2lzTm9kZShoeXBvdGhlc2lzTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCBoeXBvdGhlc2lzID0gbmV3IEh5cG90aGVzaXMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gICAgICByZXR1cm4gaHlwb3RoZXNpcztcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiSHlwb3RoZXNpcyIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsImdldEh5cG90aGVzaXNOb2RlIiwiZ2V0Tm9kZSIsImh5cG90aGVzaXNOb2RlIiwiY29tcGFyZVByb29mQXNzZXJ0aW9uIiwicHJvb2ZBc3NlcnRpb24iLCJjb21wYXJlc1RvUHJvb2ZBc3NlcnRpb24iLCJoeXBvdGhlc2lzU3RyaW5nIiwiZ2V0U3RyaW5nIiwicHJvb2ZBc3NlcnRpb25TdHJpbmciLCJ0cmFjZSIsInByb29mQXNzZXJ0aW9uU3RhdGVtZW50Iiwic3RhdGVtZW50RXF1YWxUb1N0ZXBTdGF0ZW1lbnQiLCJpc0VxdWFsVG8iLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImJyZWFrIiwic3RhdGVtZW50VmFsaWRhdGVzIiwiZGVzY2VuZCIsInZhbGlkYXRlIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwiYXNzaWduQXNzaWdubWVudHMiLCJhZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJkZWJ1ZyIsInRvSlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlSHlwb3RoZXNpcyIsInN0YXRlbWVudEZyb21IeXBvdGhlc2lzTm9kZSIsImh5cG90aGVzaXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2dDQVB3QjswQkFFRDt5QkFDYzs2QkFDQzt5QkFDTTtNQUU1QyxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLG1CQUFtQkMsdUJBQU87SUFDcEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxDQUFFO1FBQzVDLEtBQUssQ0FBQ0gsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO0lBQ25CO0lBRUFDLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQ0QsU0FBUztJQUN2QjtJQUVBRSxvQkFBb0I7UUFDbEIsTUFBTUgsT0FBTyxJQUFJLENBQUNJLE9BQU8sSUFDbkJDLGlCQUFpQkwsTUFBTyxHQUFHO1FBRWpDLE9BQU9LO0lBQ1Q7SUFFQUMsc0JBQXNCQyxjQUFjLEVBQUVULE9BQU8sRUFBRTtRQUM3QyxJQUFJVSwyQkFBMkI7UUFFL0IsTUFBTUMsbUJBQW1CLElBQUksQ0FBQ0MsU0FBUyxJQUNqQ0MsdUJBQXVCSixlQUFlRyxTQUFTO1FBRXJEWixRQUFRYyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUVILGlCQUFpQiwyQkFBMkIsRUFBRUUscUJBQXFCLG9CQUFvQixDQUFDO1FBRWpILE1BQU1FLDBCQUEwQk4sZUFBZUwsWUFBWSxJQUNyRFksZ0NBQWdDLElBQUksQ0FBQ2IsU0FBUyxDQUFDYyxTQUFTLENBQUNGO1FBRS9ELElBQUlDLCtCQUErQjtZQUNqQ04sMkJBQTJCO1FBQzdCO1FBRUEsSUFBSUEsMEJBQTBCO1lBQzVCVixRQUFRYyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUVILGlCQUFpQiw4QkFBOEIsRUFBRUUscUJBQXFCLGtCQUFrQixDQUFDO1FBQ3BIO1FBRUEsT0FBT0g7SUFDVDtJQUVBLE1BQU1RLE9BQU9sQixPQUFPLEVBQUU7UUFDcEIsSUFBSW1CLFdBQVc7UUFFZixNQUFNLElBQUksQ0FBQ0MsS0FBSyxDQUFDcEI7UUFFakIsTUFBTVcsbUJBQW1CLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFOUNaLFFBQVFjLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUgsaUJBQWlCLGVBQWUsQ0FBQztRQUVqRSxJQUFJLE9BQU87UUFDVCxHQUFHO1FBQ0wsT0FBTyxJQUFJLElBQUksQ0FBQ1IsU0FBUyxLQUFLLE1BQU07WUFDbEMsSUFBSWtCLHFCQUFxQjtZQUV6QkMsSUFBQUEsZ0JBQU8sRUFBQyxDQUFDdEI7Z0JBQ1AsTUFBTUcsWUFBWSxJQUFJLENBQUNBLFNBQVMsQ0FBQ29CLFFBQVEsQ0FBQ3ZCO2dCQUUxQyxJQUFJRyxjQUFjLE1BQU07b0JBQ3RCa0IscUJBQXFCO2dCQUN2QjtZQUNGLEdBQUdyQjtZQUVILElBQUlxQixvQkFBb0I7Z0JBQ3RCLE1BQU1HLDJCQUEyQixJQUFJLEVBQUcsR0FBRztnQkFFM0N4QixRQUFReUIsaUJBQWlCO2dCQUV6QnpCLFFBQVEwQiwyQkFBMkIsQ0FBQ0Y7Z0JBRXBDTCxXQUFXO1lBQ2I7UUFDRixPQUFPO1lBQ0xuQixRQUFRMkIsS0FBSyxDQUFDLENBQUMsc0JBQXNCLEVBQUVoQixpQkFBaUIsb0NBQW9DLENBQUM7UUFDL0Y7UUFFQSxJQUFJUSxVQUFVO1lBQ1puQixRQUFRMkIsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVoQixpQkFBaUIsYUFBYSxDQUFDO1FBQ25FO1FBRUEsT0FBT1E7SUFDVDtJQUVBUyxTQUFTO1FBQ1AsTUFBTTNCLFNBQVMsSUFBSSxDQUFDVyxTQUFTLElBQ3ZCaUIsT0FBTztZQUNMNUI7UUFDRjtRQUVOLE9BQU80QjtJQUNUO0lBRUEsT0FBT0MsT0FBTyxhQUFhO0lBRTNCLE9BQU9DLFNBQVNGLElBQUksRUFBRTdCLE9BQU8sRUFBRTtRQUM3QixPQUFPZ0MsSUFBQUEsb0JBQVcsRUFBQyxDQUFDaEM7WUFDbEIsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBRzRCLE1BQ2J0QixpQkFBaUIwQixJQUFBQSxrQ0FBcUIsRUFBQ2hDLFFBQVFELFVBQy9DRSxPQUFPSyxnQkFDUEosWUFBWStCLElBQUFBLG9DQUEyQixFQUFDM0IsZ0JBQWdCUDtZQUU5REEsVUFBVTtZQUVWLE1BQU1tQyxhQUFhLElBQUlyQyxXQUFXRSxTQUFTQyxRQUFRQyxNQUFNQztZQUV6RCxPQUFPZ0M7UUFDVCxHQUFHbkM7SUFDTDtBQUNGIn0=