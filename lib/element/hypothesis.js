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
            (0, _context.descend)((stated, context)=>{
                const statement = this.statement.validate(stated, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2h5cG90aGVzaXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHtkZXNjZW5kLCBpbnN0YW50aWF0ZX0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUh5cG90aGVzaXMgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgc3RhdGVtZW50RnJvbUh5cG90aGVzaXNOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBIeXBvdGhlc2lzIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldEh5cG90aGVzaXNOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBoeXBvdGhlc2lzTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBoeXBvdGhlc2lzTm9kZTtcbiAgfVxuXG4gIGNvbXBhcmVQcm9vZkFzc2VydGlvbihwcm9vZkFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvUHJvb2ZBc3NlcnRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IGh5cG90aGVzaXNTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBwcm9vZkFzc2VydGlvblN0cmluZyA9IHByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgSXMgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzIGVxdWFsIHRvIHRoZSAnJHtwcm9vZkFzc2VydGlvblN0cmluZ30nIHByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgcHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQgPSBwcm9vZkFzc2VydGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRFcXVhbFRvU3RlcFN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LmlzRXF1YWxUbyhwcm9vZkFzc2VydGlvblN0YXRlbWVudCk7XG5cbiAgICBpZiAoc3RhdGVtZW50RXF1YWxUb1N0ZXBTdGF0ZW1lbnQpIHtcbiAgICAgIGNvbXBhcmVzVG9Qcm9vZkFzc2VydGlvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNvbXBhcmVzVG9Qcm9vZkFzc2VydGlvbikge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzIGlzIGVxdWFsIHRvIHRoZSAnJHtwcm9vZkFzc2VydGlvblN0cmluZ30nIHByb29mIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1Byb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBoeXBvdGhlc2lzU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzLi4uYCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGxldCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgZGVzY2VuZCgoc3RhdGVkLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LnZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiA9IHRoaXM7ICAvLy9cblxuICAgICAgICBjb250ZXh0LmFzc2lnbkFzc2lnbm1lbnRzKCk7XG5cbiAgICAgICAgY29udGV4dC5hZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKTtcblxuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7aHlwb3RoZXNpc1N0cmluZ30nIGh5cG90aGVzaXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJIeXBvdGhlc2lzXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgaHlwb3RoZXNpc05vZGUgPSBpbnN0YW50aWF0ZUh5cG90aGVzaXMoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBoeXBvdGhlc2lzTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzaXNOb2RlLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IGh5cG90aGVzaXMgPSBuZXcgSHlwb3RoZXNpcyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgICAgIHJldHVybiBoeXBvdGhlc2lzO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJIeXBvdGhlc2lzIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwiZ2V0SHlwb3RoZXNpc05vZGUiLCJnZXROb2RlIiwiaHlwb3RoZXNpc05vZGUiLCJjb21wYXJlUHJvb2ZBc3NlcnRpb24iLCJwcm9vZkFzc2VydGlvbiIsImNvbXBhcmVzVG9Qcm9vZkFzc2VydGlvbiIsImh5cG90aGVzaXNTdHJpbmciLCJnZXRTdHJpbmciLCJwcm9vZkFzc2VydGlvblN0cmluZyIsInRyYWNlIiwicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQiLCJzdGF0ZW1lbnRFcXVhbFRvU3RlcFN0YXRlbWVudCIsImlzRXF1YWxUbyIsInZlcmlmeSIsInZlcmlmaWVzIiwiYnJlYWsiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJkZXNjZW5kIiwic3RhdGVkIiwidmFsaWRhdGUiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJhc3NpZ25Bc3NpZ25tZW50cyIsImFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsImRlYnVnIiwidG9KU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVIeXBvdGhlc2lzIiwic3RhdGVtZW50RnJvbUh5cG90aGVzaXNOb2RlIiwiaHlwb3RoZXNpcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7Z0NBUHdCOzBCQUVEO3lCQUNZOzZCQUNHO3lCQUNNO01BRTVDLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsbUJBQW1CQyx1QkFBTztJQUNwRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLENBQUU7UUFDNUMsS0FBSyxDQUFDSCxTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLFNBQVMsR0FBR0E7SUFDbkI7SUFFQUMsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDRCxTQUFTO0lBQ3ZCO0lBRUFFLG9CQUFvQjtRQUNsQixNQUFNSCxPQUFPLElBQUksQ0FBQ0ksT0FBTyxJQUNuQkMsaUJBQWlCTCxNQUFPLEdBQUc7UUFFakMsT0FBT0s7SUFDVDtJQUVBQyxzQkFBc0JDLGNBQWMsRUFBRVQsT0FBTyxFQUFFO1FBQzdDLElBQUlVLDJCQUEyQjtRQUUvQixNQUFNQyxtQkFBbUIsSUFBSSxDQUFDQyxTQUFTLElBQ2pDQyx1QkFBdUJKLGVBQWVHLFNBQVM7UUFFckRaLFFBQVFjLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRUgsaUJBQWlCLDJCQUEyQixFQUFFRSxxQkFBcUIsb0JBQW9CLENBQUM7UUFFakgsTUFBTUUsMEJBQTBCTixlQUFlTCxZQUFZLElBQ3JEWSxnQ0FBZ0MsSUFBSSxDQUFDYixTQUFTLENBQUNjLFNBQVMsQ0FBQ0Y7UUFFL0QsSUFBSUMsK0JBQStCO1lBQ2pDTiwyQkFBMkI7UUFDN0I7UUFFQSxJQUFJQSwwQkFBMEI7WUFDNUJWLFFBQVFjLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRUgsaUJBQWlCLDhCQUE4QixFQUFFRSxxQkFBcUIsa0JBQWtCLENBQUM7UUFDcEg7UUFFQSxPQUFPSDtJQUNUO0lBRUEsTUFBTVEsT0FBT2xCLE9BQU8sRUFBRTtRQUNwQixJQUFJbUIsV0FBVztRQUVmLE1BQU0sSUFBSSxDQUFDQyxLQUFLLENBQUNwQjtRQUVqQixNQUFNVyxtQkFBbUIsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUU5Q1osUUFBUWMsS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFSCxpQkFBaUIsZUFBZSxDQUFDO1FBRWpFLElBQUksT0FBTztRQUNULEdBQUc7UUFDTCxPQUFPLElBQUksSUFBSSxDQUFDUixTQUFTLEtBQUssTUFBTTtZQUNsQyxJQUFJa0IscUJBQXFCO1lBRXpCQyxJQUFBQSxnQkFBTyxFQUFDLENBQUNDLFFBQVF2QjtnQkFDZixNQUFNRyxZQUFZLElBQUksQ0FBQ0EsU0FBUyxDQUFDcUIsUUFBUSxDQUFDRCxRQUFRdkI7Z0JBRWxELElBQUlHLGNBQWMsTUFBTTtvQkFDdEJrQixxQkFBcUI7Z0JBQ3ZCO1lBQ0YsR0FBR3JCO1lBRUgsSUFBSXFCLG9CQUFvQjtnQkFDdEIsTUFBTUksMkJBQTJCLElBQUksRUFBRyxHQUFHO2dCQUUzQ3pCLFFBQVEwQixpQkFBaUI7Z0JBRXpCMUIsUUFBUTJCLDJCQUEyQixDQUFDRjtnQkFFcENOLFdBQVc7WUFDYjtRQUNGLE9BQU87WUFDTG5CLFFBQVE0QixLQUFLLENBQUMsQ0FBQyxzQkFBc0IsRUFBRWpCLGlCQUFpQixvQ0FBb0MsQ0FBQztRQUMvRjtRQUVBLElBQUlRLFVBQVU7WUFDWm5CLFFBQVE0QixLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRWpCLGlCQUFpQixhQUFhLENBQUM7UUFDbkU7UUFFQSxPQUFPUTtJQUNUO0lBRUFVLFNBQVM7UUFDUCxNQUFNNUIsU0FBUyxJQUFJLENBQUNXLFNBQVMsSUFDdkJrQixPQUFPO1lBQ0w3QjtRQUNGO1FBRU4sT0FBTzZCO0lBQ1Q7SUFFQSxPQUFPQyxPQUFPLGFBQWE7SUFFM0IsT0FBT0MsU0FBU0YsSUFBSSxFQUFFOUIsT0FBTyxFQUFFO1FBQzdCLE9BQU9pQyxJQUFBQSxvQkFBVyxFQUFDLENBQUNqQztZQUNsQixNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHNkIsTUFDYnZCLGlCQUFpQjJCLElBQUFBLGtDQUFxQixFQUFDakMsUUFBUUQsVUFDL0NFLE9BQU9LLGdCQUNQSixZQUFZZ0MsSUFBQUEsb0NBQTJCLEVBQUM1QixnQkFBZ0JQO1lBRTlEQSxVQUFVO1lBRVYsTUFBTW9DLGFBQWEsSUFBSXRDLFdBQVdFLFNBQVNDLFFBQVFDLE1BQU1DO1lBRXpELE9BQU9pQztRQUNULEdBQUdwQztJQUNMO0FBQ0YifQ==