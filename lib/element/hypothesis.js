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
    constructor(context, string, node, lineIndex, statement){
        super(context, string, node, lineIndex);
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
    static name = "Hypothesis";
    toJSON() {
        const string = this.getString(), lineIndex = this.getLineIndex(), json = {
            string,
            lineIndex
        };
        return json;
    }
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string, lineIndex } = json, hypothesisNode = (0, _instantiate.instantiateHypothesis)(string, context), node = hypothesisNode, statement = (0, _element.statementFromHypothesisNode)(hypothesisNode, context);
            context = null;
            const hypothesis = new Hypothesis(context, string, node, lineIndex, statement);
            return hypothesis;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2h5cG90aGVzaXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgZGVzY2VuZCwgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlSHlwb3RoZXNpcyB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnRGcm9tSHlwb3RoZXNpc05vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEh5cG90aGVzaXMgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldEh5cG90aGVzaXNOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBoeXBvdGhlc2lzTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBoeXBvdGhlc2lzTm9kZTtcbiAgfVxuXG4gIGNvbXBhcmVQcm9vZkFzc2VydGlvbihwcm9vZkFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvUHJvb2ZBc3NlcnRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IGh5cG90aGVzaXNTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBwcm9vZkFzc2VydGlvblN0cmluZyA9IHByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgSXMgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzIGVxdWFsIHRvIHRoZSAnJHtwcm9vZkFzc2VydGlvblN0cmluZ30nIHByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgcHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQgPSBwcm9vZkFzc2VydGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRFcXVhbFRvU3RlcFN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LmlzRXF1YWxUbyhwcm9vZkFzc2VydGlvblN0YXRlbWVudCk7XG5cbiAgICBpZiAoc3RhdGVtZW50RXF1YWxUb1N0ZXBTdGF0ZW1lbnQpIHtcbiAgICAgIGNvbXBhcmVzVG9Qcm9vZkFzc2VydGlvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNvbXBhcmVzVG9Qcm9vZkFzc2VydGlvbikge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzIGlzIGVxdWFsIHRvIHRoZSAnJHtwcm9vZkFzc2VydGlvblN0cmluZ30nIHByb29mIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1Byb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBoeXBvdGhlc2lzU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzLi4uYCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGxldCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgZGVzY2VuZCgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudC52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uID0gdGhpczsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQuYXNzaWduQXNzaWdubWVudHMoKTtcblxuICAgICAgICBjb250ZXh0LmFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pO1xuXG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7aHlwb3RoZXNpc1N0cmluZ30nIGh5cG90aGVzaXMgYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiSHlwb3RoZXNpc1wiO1xuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0TGluZUluZGV4KCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIGxpbmVJbmRleFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgaHlwb3RoZXNpc05vZGUgPSBpbnN0YW50aWF0ZUh5cG90aGVzaXMoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBoeXBvdGhlc2lzTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzaXNOb2RlLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IGh5cG90aGVzaXMgPSBuZXcgSHlwb3RoZXNpcyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgc3RhdGVtZW50KTtcblxuICAgICAgcmV0dXJuIGh5cG90aGVzaXM7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkh5cG90aGVzaXMiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJnZXRIeXBvdGhlc2lzTm9kZSIsImdldE5vZGUiLCJoeXBvdGhlc2lzTm9kZSIsImNvbXBhcmVQcm9vZkFzc2VydGlvbiIsInByb29mQXNzZXJ0aW9uIiwiY29tcGFyZXNUb1Byb29mQXNzZXJ0aW9uIiwiaHlwb3RoZXNpc1N0cmluZyIsImdldFN0cmluZyIsInByb29mQXNzZXJ0aW9uU3RyaW5nIiwidHJhY2UiLCJwcm9vZkFzc2VydGlvblN0YXRlbWVudCIsInN0YXRlbWVudEVxdWFsVG9TdGVwU3RhdGVtZW50IiwiaXNFcXVhbFRvIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJicmVhayIsInN0YXRlbWVudFZhbGlkYXRlcyIsImRlc2NlbmQiLCJ2YWxpZGF0ZSIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsImFzc2lnbkFzc2lnbm1lbnRzIiwiYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwiZGVidWciLCJuYW1lIiwidG9KU09OIiwiZ2V0TGluZUluZGV4IiwianNvbiIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZUh5cG90aGVzaXMiLCJzdGF0ZW1lbnRGcm9tSHlwb3RoZXNpc05vZGUiLCJoeXBvdGhlc2lzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OztnQ0FQd0I7MEJBRUQ7eUJBQ2M7NkJBQ0M7eUJBQ007TUFFNUMsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxtQkFBbUJDLHVCQUFPO0lBQ3BELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxDQUFFO1FBQ3ZELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO0lBQ25CO0lBRUFDLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQ0QsU0FBUztJQUN2QjtJQUVBRSxvQkFBb0I7UUFDbEIsTUFBTUosT0FBTyxJQUFJLENBQUNLLE9BQU8sSUFDbkJDLGlCQUFpQk4sTUFBTyxHQUFHO1FBRWpDLE9BQU9NO0lBQ1Q7SUFFQUMsc0JBQXNCQyxjQUFjLEVBQUVWLE9BQU8sRUFBRTtRQUM3QyxJQUFJVywyQkFBMkI7UUFFL0IsTUFBTUMsbUJBQW1CLElBQUksQ0FBQ0MsU0FBUyxJQUNqQ0MsdUJBQXVCSixlQUFlRyxTQUFTO1FBRXJEYixRQUFRZSxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUVILGlCQUFpQiwyQkFBMkIsRUFBRUUscUJBQXFCLG9CQUFvQixDQUFDO1FBRWpILE1BQU1FLDBCQUEwQk4sZUFBZUwsWUFBWSxJQUNyRFksZ0NBQWdDLElBQUksQ0FBQ2IsU0FBUyxDQUFDYyxTQUFTLENBQUNGO1FBRS9ELElBQUlDLCtCQUErQjtZQUNqQ04sMkJBQTJCO1FBQzdCO1FBRUEsSUFBSUEsMEJBQTBCO1lBQzVCWCxRQUFRZSxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUVILGlCQUFpQiw4QkFBOEIsRUFBRUUscUJBQXFCLGtCQUFrQixDQUFDO1FBQ3BIO1FBRUEsT0FBT0g7SUFDVDtJQUVBLE1BQU1RLE9BQU9uQixPQUFPLEVBQUU7UUFDcEIsSUFBSW9CLFdBQVc7UUFFZixNQUFNLElBQUksQ0FBQ0MsS0FBSyxDQUFDckI7UUFFakIsTUFBTVksbUJBQW1CLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFOUNiLFFBQVFlLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUgsaUJBQWlCLGVBQWUsQ0FBQztRQUVqRSxJQUFJLE9BQU87UUFDVCxHQUFHO1FBQ0wsT0FBTyxJQUFJLElBQUksQ0FBQ1IsU0FBUyxLQUFLLE1BQU07WUFDbEMsSUFBSWtCLHFCQUFxQjtZQUV6QkMsSUFBQUEsZ0JBQU8sRUFBQyxDQUFDdkI7Z0JBQ1AsTUFBTUksWUFBWSxJQUFJLENBQUNBLFNBQVMsQ0FBQ29CLFFBQVEsQ0FBQ3hCO2dCQUUxQyxJQUFJSSxjQUFjLE1BQU07b0JBQ3RCa0IscUJBQXFCO2dCQUN2QjtZQUNGLEdBQUd0QjtZQUVILElBQUlzQixvQkFBb0I7Z0JBQ3RCLE1BQU1HLDJCQUEyQixJQUFJLEVBQUcsR0FBRztnQkFFM0N6QixRQUFRMEIsaUJBQWlCO2dCQUV6QjFCLFFBQVEyQiwyQkFBMkIsQ0FBQ0Y7Z0JBRXBDTCxXQUFXO1lBQ2I7UUFDRixPQUFPO1lBQ0xwQixRQUFRNEIsS0FBSyxDQUFDLENBQUMsc0JBQXNCLEVBQUVoQixpQkFBaUIsb0NBQW9DLENBQUM7UUFDL0Y7UUFFQSxJQUFJUSxVQUFVO1lBQ1pwQixRQUFRNEIsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVoQixpQkFBaUIsYUFBYSxDQUFDO1FBQ25FO1FBRUEsT0FBT1E7SUFDVDtJQUVBLE9BQU9TLE9BQU8sYUFBYTtJQUUzQkMsU0FBUztRQUNQLE1BQU03QixTQUFTLElBQUksQ0FBQ1ksU0FBUyxJQUN2QlYsWUFBWSxJQUFJLENBQUM0QixZQUFZLElBQzdCQyxPQUFPO1lBQ0wvQjtZQUNBRTtRQUNGO1FBRU4sT0FBTzZCO0lBQ1Q7SUFFQSxPQUFPQyxTQUFTRCxJQUFJLEVBQUVoQyxPQUFPLEVBQUU7UUFDN0IsT0FBT2tDLElBQUFBLG9CQUFXLEVBQUMsQ0FBQ2xDO1lBQ2xCLE1BQU0sRUFBRUMsTUFBTSxFQUFFRSxTQUFTLEVBQUUsR0FBRzZCLE1BQ3hCeEIsaUJBQWlCMkIsSUFBQUEsa0NBQXFCLEVBQUNsQyxRQUFRRCxVQUMvQ0UsT0FBT00sZ0JBQ1BKLFlBQVlnQyxJQUFBQSxvQ0FBMkIsRUFBQzVCLGdCQUFnQlI7WUFFOURBLFVBQVU7WUFFVixNQUFNcUMsYUFBYSxJQUFJdkMsV0FBV0UsU0FBU0MsUUFBUUMsTUFBTUMsV0FBV0M7WUFFcEUsT0FBT2lDO1FBQ1QsR0FBR3JDO0lBQ0w7QUFDRiJ9