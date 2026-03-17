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
        return (0, _context.instantiate)((context)=>{
            const { string } = json, hypothesisNode = (0, _instantiate.instantiateHypothesis)(string, context), node = hypothesisNode, statement = (0, _element.statementFromHypothesisNode)(hypothesisNode, context);
            context = null;
            const hypothesis = new Hypothesis(context, string, node, statement);
            return hypothesis;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2h5cG90aGVzaXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHtpbnN0YW50aWF0ZX0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUh5cG90aGVzaXMgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgc3RhdGVtZW50RnJvbUh5cG90aGVzaXNOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBIeXBvdGhlc2lzIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldEh5cG90aGVzaXNOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBoeXBvdGhlc2lzTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBoeXBvdGhlc2lzTm9kZTtcbiAgfVxuXG4gIGNvbXBhcmVQcm9vZkFzc2VydGlvbihwcm9vZkFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvUHJvb2ZBc3NlcnRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IGh5cG90aGVzaXNTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBwcm9vZkFzc2VydGlvblN0cmluZyA9IHByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgSXMgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzIGVxdWFsIHRvIHRoZSAnJHtwcm9vZkFzc2VydGlvblN0cmluZ30nIHByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgcHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQgPSBwcm9vZkFzc2VydGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRFcXVhbFRvU3RlcFN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LmlzRXF1YWxUbyhwcm9vZkFzc2VydGlvblN0YXRlbWVudCk7XG5cbiAgICBpZiAoc3RhdGVtZW50RXF1YWxUb1N0ZXBTdGF0ZW1lbnQpIHtcbiAgICAgIGNvbXBhcmVzVG9Qcm9vZkFzc2VydGlvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNvbXBhcmVzVG9Qcm9vZkFzc2VydGlvbikge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzIGlzIGVxdWFsIHRvIHRoZSAnJHtwcm9vZkFzc2VydGlvblN0cmluZ30nIHByb29mIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1Byb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBoeXBvdGhlc2lzU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzLi4uYCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGxldCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LnZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgY29udGV4dC5hc3NpZ25Bc3NpZ25tZW50cygpO1xuXG4gICAgICAgIGNvbnRleHQuYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbik7XG5cbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcyBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiSHlwb3RoZXNpc1wiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIGh5cG90aGVzaXNOb2RlID0gaW5zdGFudGlhdGVIeXBvdGhlc2lzKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gaHlwb3RoZXNpc05vZGUsICAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21IeXBvdGhlc2lzTm9kZShoeXBvdGhlc2lzTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCBoeXBvdGhlc2lzID0gbmV3IEh5cG90aGVzaXMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gICAgICByZXR1cm4gaHlwb3RoZXNpcztcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiSHlwb3RoZXNpcyIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsImdldEh5cG90aGVzaXNOb2RlIiwiZ2V0Tm9kZSIsImh5cG90aGVzaXNOb2RlIiwiY29tcGFyZVByb29mQXNzZXJ0aW9uIiwicHJvb2ZBc3NlcnRpb24iLCJjb21wYXJlc1RvUHJvb2ZBc3NlcnRpb24iLCJoeXBvdGhlc2lzU3RyaW5nIiwiZ2V0U3RyaW5nIiwicHJvb2ZBc3NlcnRpb25TdHJpbmciLCJ0cmFjZSIsInByb29mQXNzZXJ0aW9uU3RhdGVtZW50Iiwic3RhdGVtZW50RXF1YWxUb1N0ZXBTdGF0ZW1lbnQiLCJpc0VxdWFsVG8iLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImJyZWFrIiwic3RhdGVtZW50VmFsaWRhdGVzIiwic3RhdGVkIiwidmFsaWRhdGUiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJhc3NpZ25Bc3NpZ25tZW50cyIsImFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsImRlYnVnIiwidG9KU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVIeXBvdGhlc2lzIiwic3RhdGVtZW50RnJvbUh5cG90aGVzaXNOb2RlIiwiaHlwb3RoZXNpcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7Z0NBUHdCOzBCQUVEO3lCQUNHOzZCQUNZO3lCQUNNO01BRTVDLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsbUJBQW1CQyx1QkFBTztJQUNwRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLENBQUU7UUFDNUMsS0FBSyxDQUFDSCxTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLFNBQVMsR0FBR0E7SUFDbkI7SUFFQUMsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDRCxTQUFTO0lBQ3ZCO0lBRUFFLG9CQUFvQjtRQUNsQixNQUFNSCxPQUFPLElBQUksQ0FBQ0ksT0FBTyxJQUNuQkMsaUJBQWlCTCxNQUFPLEdBQUc7UUFFakMsT0FBT0s7SUFDVDtJQUVBQyxzQkFBc0JDLGNBQWMsRUFBRVQsT0FBTyxFQUFFO1FBQzdDLElBQUlVLDJCQUEyQjtRQUUvQixNQUFNQyxtQkFBbUIsSUFBSSxDQUFDQyxTQUFTLElBQ2pDQyx1QkFBdUJKLGVBQWVHLFNBQVM7UUFFckRaLFFBQVFjLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRUgsaUJBQWlCLDJCQUEyQixFQUFFRSxxQkFBcUIsb0JBQW9CLENBQUM7UUFFakgsTUFBTUUsMEJBQTBCTixlQUFlTCxZQUFZLElBQ3JEWSxnQ0FBZ0MsSUFBSSxDQUFDYixTQUFTLENBQUNjLFNBQVMsQ0FBQ0Y7UUFFL0QsSUFBSUMsK0JBQStCO1lBQ2pDTiwyQkFBMkI7UUFDN0I7UUFFQSxJQUFJQSwwQkFBMEI7WUFDNUJWLFFBQVFjLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRUgsaUJBQWlCLDhCQUE4QixFQUFFRSxxQkFBcUIsa0JBQWtCLENBQUM7UUFDcEg7UUFFQSxPQUFPSDtJQUNUO0lBRUEsTUFBTVEsT0FBT2xCLE9BQU8sRUFBRTtRQUNwQixJQUFJbUIsV0FBVztRQUVmLE1BQU0sSUFBSSxDQUFDQyxLQUFLLENBQUNwQjtRQUVqQixNQUFNVyxtQkFBbUIsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUU5Q1osUUFBUWMsS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFSCxpQkFBaUIsZUFBZSxDQUFDO1FBRWpFLElBQUksT0FBTztRQUNULEdBQUc7UUFDTCxPQUFPLElBQUksSUFBSSxDQUFDUixTQUFTLEtBQUssTUFBTTtZQUNsQyxJQUFJa0IscUJBQXFCO1lBRXpCLE1BQU1DLFNBQVMsTUFDVG5CLFlBQVksSUFBSSxDQUFDQSxTQUFTLENBQUNvQixRQUFRLENBQUNELFFBQVF0QjtZQUVsRCxJQUFJRyxjQUFjLE1BQU07Z0JBQ3RCa0IscUJBQXFCO1lBQ3ZCO1lBRUEsSUFBSUEsb0JBQW9CO2dCQUN0QixNQUFNRywyQkFBMkIsSUFBSSxFQUFHLEdBQUc7Z0JBRTNDeEIsUUFBUXlCLGlCQUFpQjtnQkFFekJ6QixRQUFRMEIsMkJBQTJCLENBQUNGO2dCQUVwQ0wsV0FBVztZQUNiO1FBQ0YsT0FBTztZQUNMbkIsUUFBUTJCLEtBQUssQ0FBQyxDQUFDLHNCQUFzQixFQUFFaEIsaUJBQWlCLG9DQUFvQyxDQUFDO1FBQy9GO1FBRUEsSUFBSVEsVUFBVTtZQUNabkIsUUFBUTJCLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFaEIsaUJBQWlCLGFBQWEsQ0FBQztRQUNuRTtRQUVBLE9BQU9RO0lBQ1Q7SUFFQVMsU0FBUztRQUNQLE1BQU0zQixTQUFTLElBQUksQ0FBQ1csU0FBUyxJQUN2QmlCLE9BQU87WUFDTDVCO1FBQ0Y7UUFFTixPQUFPNEI7SUFDVDtJQUVBLE9BQU9DLE9BQU8sYUFBYTtJQUUzQixPQUFPQyxTQUFTRixJQUFJLEVBQUU3QixPQUFPLEVBQUU7UUFDN0IsT0FBT2dDLElBQUFBLG9CQUFXLEVBQUMsQ0FBQ2hDO1lBQ2xCLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUc0QixNQUNidEIsaUJBQWlCMEIsSUFBQUEsa0NBQXFCLEVBQUNoQyxRQUFRRCxVQUMvQ0UsT0FBT0ssZ0JBQ1BKLFlBQVkrQixJQUFBQSxvQ0FBMkIsRUFBQzNCLGdCQUFnQlA7WUFFOURBLFVBQVU7WUFFVixNQUFNbUMsYUFBYSxJQUFJckMsV0FBV0UsU0FBU0MsUUFBUUMsTUFBTUM7WUFFekQsT0FBT2dDO1FBQ1QsR0FBR25DO0lBQ0w7QUFDRiJ9