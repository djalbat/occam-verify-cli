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
        const string = this.getString(), json = {
            string
        };
        return json;
    }
    static name = "Hypothesis";
    static fromJSON(json, context) {
        const hypothesis = (0, _context.literally)((context)=>{
            const { string } = json, hypothesisNode = (0, _instantiate.instantiateHypothesis)(string, context), node = hypothesisNode, statement = (0, _element.statementFromHypothesisNode)(hypothesisNode, context);
            context = null;
            const hypothesis = new Hypothesis(context, string, node, statement);
            return hypothesis;
        }, context);
        return hypothesis;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2h5cG90aGVzaXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHtsaXRlcmFsbHl9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVIeXBvdGhlc2lzIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHN0YXRlbWVudEZyb21IeXBvdGhlc2lzTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgSHlwb3RoZXNpcyBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRIeXBvdGhlc2lzTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgaHlwb3RoZXNpc05vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gaHlwb3RoZXNpc05vZGU7XG4gIH1cblxuICBjb21wYXJlUHJvb2ZBc3NlcnRpb24ocHJvb2ZBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyZXNUb1Byb29mQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBoeXBvdGhlc2lzU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgcHJvb2ZBc3NlcnRpb25TdHJpbmcgPSBwcm9vZkFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYElzIHRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcyBlcXVhbCB0byB0aGUgJyR7cHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBwcm9vZiBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHByb29mQXNzZXJ0aW9uU3RhdGVtZW50ID0gcHJvb2ZBc3NlcnRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50RXF1YWxUb1N0ZXBTdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudC5pc0VxdWFsVG8ocHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQpO1xuXG4gICAgaWYgKHN0YXRlbWVudEVxdWFsVG9TdGVwU3RhdGVtZW50KSB7XG4gICAgICBjb21wYXJlc1RvUHJvb2ZBc3NlcnRpb24gPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChjb21wYXJlc1RvUHJvb2ZBc3NlcnRpb24pIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcyBpcyBlcXVhbCB0byB0aGUgJyR7cHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9Qcm9vZkFzc2VydGlvbjtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgaHlwb3RoZXNpc1N0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcy4uLmApO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudC52YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uID0gdGhpczsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQuYXNzaWduQXNzaWdubWVudHMoKTtcblxuICAgICAgICBjb250ZXh0LmFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pO1xuXG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7aHlwb3RoZXNpc1N0cmluZ30nIGh5cG90aGVzaXMgYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkh5cG90aGVzaXNcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGh5cG90aGVzaXMgPSBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgaHlwb3RoZXNpc05vZGUgPSBpbnN0YW50aWF0ZUh5cG90aGVzaXMoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBoeXBvdGhlc2lzTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzaXNOb2RlLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IGh5cG90aGVzaXMgPSBuZXcgSHlwb3RoZXNpcyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgICAgIHJldHVybiBoeXBvdGhlc2lzO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGh5cG90aGVzaXM7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkh5cG90aGVzaXMiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJnZXRIeXBvdGhlc2lzTm9kZSIsImdldE5vZGUiLCJoeXBvdGhlc2lzTm9kZSIsImNvbXBhcmVQcm9vZkFzc2VydGlvbiIsInByb29mQXNzZXJ0aW9uIiwiY29tcGFyZXNUb1Byb29mQXNzZXJ0aW9uIiwiaHlwb3RoZXNpc1N0cmluZyIsImdldFN0cmluZyIsInByb29mQXNzZXJ0aW9uU3RyaW5nIiwidHJhY2UiLCJwcm9vZkFzc2VydGlvblN0YXRlbWVudCIsInN0YXRlbWVudEVxdWFsVG9TdGVwU3RhdGVtZW50IiwiaXNFcXVhbFRvIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJicmVhayIsInN0YXRlbWVudFZhbGlkYXRlcyIsInN0YXRlZCIsInZhbGlkYXRlIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwiYXNzaWduQXNzaWdubWVudHMiLCJhZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJkZWJ1ZyIsInRvSlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJoeXBvdGhlc2lzIiwibGl0ZXJhbGx5IiwiaW5zdGFudGlhdGVIeXBvdGhlc2lzIiwic3RhdGVtZW50RnJvbUh5cG90aGVzaXNOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OztnQ0FQd0I7MEJBRUQ7eUJBQ0M7NkJBQ2M7eUJBQ007TUFFNUMsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxtQkFBbUJDLHVCQUFPO0lBQ3BELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsQ0FBRTtRQUM1QyxLQUFLLENBQUNILFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtJQUNuQjtJQUVBQyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUNELFNBQVM7SUFDdkI7SUFFQUUsb0JBQW9CO1FBQ2xCLE1BQU1ILE9BQU8sSUFBSSxDQUFDSSxPQUFPLElBQ25CQyxpQkFBaUJMLE1BQU8sR0FBRztRQUVqQyxPQUFPSztJQUNUO0lBRUFDLHNCQUFzQkMsY0FBYyxFQUFFVCxPQUFPLEVBQUU7UUFDN0MsSUFBSVUsMkJBQTJCO1FBRS9CLE1BQU1DLG1CQUFtQixJQUFJLENBQUNDLFNBQVMsSUFDakNDLHVCQUF1QkosZUFBZUcsU0FBUztRQUVyRFosUUFBUWMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFSCxpQkFBaUIsMkJBQTJCLEVBQUVFLHFCQUFxQixvQkFBb0IsQ0FBQztRQUVqSCxNQUFNRSwwQkFBMEJOLGVBQWVMLFlBQVksSUFDckRZLGdDQUFnQyxJQUFJLENBQUNiLFNBQVMsQ0FBQ2MsU0FBUyxDQUFDRjtRQUUvRCxJQUFJQywrQkFBK0I7WUFDakNOLDJCQUEyQjtRQUM3QjtRQUVBLElBQUlBLDBCQUEwQjtZQUM1QlYsUUFBUWMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFSCxpQkFBaUIsOEJBQThCLEVBQUVFLHFCQUFxQixrQkFBa0IsQ0FBQztRQUNwSDtRQUVBLE9BQU9IO0lBQ1Q7SUFFQSxNQUFNUSxPQUFPbEIsT0FBTyxFQUFFO1FBQ3BCLElBQUltQixXQUFXO1FBRWYsTUFBTSxJQUFJLENBQUNDLEtBQUssQ0FBQ3BCO1FBRWpCLE1BQU1XLG1CQUFtQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRTlDWixRQUFRYyxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVILGlCQUFpQixlQUFlLENBQUM7UUFFakUsSUFBSSxPQUFPO1FBQ1QsR0FBRztRQUNMLE9BQU8sSUFBSSxJQUFJLENBQUNSLFNBQVMsS0FBSyxNQUFNO1lBQ2xDLElBQUlrQixxQkFBcUI7WUFFekIsTUFBTUMsU0FBUyxNQUNUbkIsWUFBWSxJQUFJLENBQUNBLFNBQVMsQ0FBQ29CLFFBQVEsQ0FBQ0QsUUFBUXRCO1lBRWxELElBQUlHLGNBQWMsTUFBTTtnQkFDdEJrQixxQkFBcUI7WUFDdkI7WUFFQSxJQUFJQSxvQkFBb0I7Z0JBQ3RCLE1BQU1HLDJCQUEyQixJQUFJLEVBQUcsR0FBRztnQkFFM0N4QixRQUFReUIsaUJBQWlCO2dCQUV6QnpCLFFBQVEwQiwyQkFBMkIsQ0FBQ0Y7Z0JBRXBDTCxXQUFXO1lBQ2I7UUFDRixPQUFPO1lBQ0xuQixRQUFRMkIsS0FBSyxDQUFDLENBQUMsc0JBQXNCLEVBQUVoQixpQkFBaUIsb0NBQW9DLENBQUM7UUFDL0Y7UUFFQSxJQUFJUSxVQUFVO1lBQ1puQixRQUFRMkIsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVoQixpQkFBaUIsYUFBYSxDQUFDO1FBQ25FO1FBRUEsT0FBT1E7SUFDVDtJQUVBUyxTQUFTO1FBQ1AsTUFBTTNCLFNBQVMsSUFBSSxDQUFDVyxTQUFTLElBQ3ZCaUIsT0FBTztZQUNMNUI7UUFDRjtRQUVOLE9BQU80QjtJQUNUO0lBRUEsT0FBT0MsT0FBTyxhQUFhO0lBRTNCLE9BQU9DLFNBQVNGLElBQUksRUFBRTdCLE9BQU8sRUFBRTtRQUM3QixNQUFNZ0MsYUFBYUMsSUFBQUEsa0JBQVMsRUFBQyxDQUFDakM7WUFDNUIsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBRzRCLE1BQ2J0QixpQkFBaUIyQixJQUFBQSxrQ0FBcUIsRUFBQ2pDLFFBQVFELFVBQy9DRSxPQUFPSyxnQkFDUEosWUFBWWdDLElBQUFBLG9DQUEyQixFQUFDNUIsZ0JBQWdCUDtZQUU5REEsVUFBVTtZQUVWLE1BQU1nQyxhQUFhLElBQUlsQyxXQUFXRSxTQUFTQyxRQUFRQyxNQUFNQztZQUV6RCxPQUFPNkI7UUFDVCxHQUFHaEM7UUFFSCxPQUFPZ0M7SUFDVDtBQUNGIn0=