"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Assertion;
    }
});
const _occamlanguages = require("occam-languages");
class Assertion extends _occamlanguages.Element {
    getAssertionNode() {
        const node = this.getNode(), assertionNode = node; ///
        return assertionNode;
    }
    matchAssertionNode(assertionNode) {
        const node = assertionNode, nodeMatches = this.matchNode(node), assertionNodeMatches = nodeMatches; ///
        return assertionNodeMatches;
    }
    isEqualTo(assertion) {
        const assertionNode = assertion.getNode(), assertionNodeMatches = this.matchAssertionNode(assertionNode), equalTo = assertionNodeMatches; ///
        return equalTo;
    }
    findValidAssertion(context) {
        const assertionNode = this.getAssertionNode(), assertion = context.findAssertionByAssertionNode(assertionNode), validAssertion = assertion; ///
        return validAssertion;
    }
    toJSON() {
        const { name } = this.constructor, string = this.getString(), lineIndex = this.getLineIndex(), json = {
            name,
            string,
            lineIndex
        };
        return json;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNzZXJ0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldEFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGFzc2VydGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBhc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgbWF0Y2hBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gYXNzZXJ0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICBhc3NlcnRpb25Ob2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBhc3NlcnRpb25Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIGlzRXF1YWxUbyhhc3NlcnRpb24pIHtcbiAgICBjb25zdCBhc3NlcnRpb25Ob2RlID0gYXNzZXJ0aW9uLmdldE5vZGUoKSxcbiAgICAgICAgICBhc3NlcnRpb25Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBhc3NlcnRpb25Ob2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBmaW5kVmFsaWRBc3NlcnRpb24oY29udGV4dCkge1xuICAgIGNvbnN0IGFzc2VydGlvbk5vZGUgPSB0aGlzLmdldEFzc2VydGlvbk5vZGUoKSxcbiAgICAgICAgICBhc3NlcnRpb24gPSBjb250ZXh0LmZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgdmFsaWRBc3NlcnRpb24gPSBhc3NlcnRpb247ICAvLy9cblxuICAgIHJldHVybiB2YWxpZEFzc2VydGlvbjtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBsaW5lSW5kZXggPSB0aGlzLmdldExpbmVJbmRleCgpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbGluZUluZGV4XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQXNzZXJ0aW9uIiwiRWxlbWVudCIsImdldEFzc2VydGlvbk5vZGUiLCJub2RlIiwiZ2V0Tm9kZSIsImFzc2VydGlvbk5vZGUiLCJtYXRjaEFzc2VydGlvbk5vZGUiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsImFzc2VydGlvbk5vZGVNYXRjaGVzIiwiaXNFcXVhbFRvIiwiYXNzZXJ0aW9uIiwiZXF1YWxUbyIsImZpbmRWYWxpZEFzc2VydGlvbiIsImNvbnRleHQiLCJmaW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlIiwidmFsaWRBc3NlcnRpb24iLCJ0b0pTT04iLCJuYW1lIiwic3RyaW5nIiwiZ2V0U3RyaW5nIiwibGluZUluZGV4IiwiZ2V0TGluZUluZGV4IiwianNvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7OztnQ0FGRztBQUVULE1BQU1BLGtCQUFrQkMsdUJBQU87SUFDNUNDLG1CQUFtQjtRQUNqQixNQUFNQyxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUNuQkMsZ0JBQWdCRixNQUFNLEdBQUc7UUFFL0IsT0FBT0U7SUFDVDtJQUVBQyxtQkFBbUJELGFBQWEsRUFBRTtRQUNoQyxNQUFNRixPQUFPRSxlQUNQRSxjQUFjLElBQUksQ0FBQ0MsU0FBUyxDQUFDTCxPQUM3Qk0sdUJBQXVCRixhQUFhLEdBQUc7UUFFN0MsT0FBT0U7SUFDVDtJQUVBQyxVQUFVQyxTQUFTLEVBQUU7UUFDbkIsTUFBTU4sZ0JBQWdCTSxVQUFVUCxPQUFPLElBQ2pDSyx1QkFBdUIsSUFBSSxDQUFDSCxrQkFBa0IsQ0FBQ0QsZ0JBQy9DTyxVQUFVSCxzQkFBdUIsR0FBRztRQUUxQyxPQUFPRztJQUNUO0lBRUFDLG1CQUFtQkMsT0FBTyxFQUFFO1FBQzFCLE1BQU1ULGdCQUFnQixJQUFJLENBQUNILGdCQUFnQixJQUNyQ1MsWUFBWUcsUUFBUUMsNEJBQTRCLENBQUNWLGdCQUNqRFcsaUJBQWlCTCxXQUFZLEdBQUc7UUFFdEMsT0FBT0s7SUFDVDtJQUVBQyxTQUFTO1FBQ1AsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUMzQkMsU0FBUyxJQUFJLENBQUNDLFNBQVMsSUFDdkJDLFlBQVksSUFBSSxDQUFDQyxZQUFZLElBQzdCQyxPQUFPO1lBQ0xMO1lBQ0FDO1lBQ0FFO1FBQ0Y7UUFFTixPQUFPRTtJQUNUO0FBQ0YifQ==