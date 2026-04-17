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
    getName() {
        const { name } = this.constructor;
        return name;
    }
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
        const name = this.getName(), string = this.getString(), breakPoint = this.getBreakPoint(), json = {
            name,
            string,
            breakPoint
        };
        return json;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNzZXJ0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldE5hbWUoKSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cblxuICBnZXRBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBhc3NlcnRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIG1hdGNoQXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IGFzc2VydGlvbk5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgYXNzZXJ0aW9uTm9kZU1hdGNoZXMgPSBub2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uTm9kZU1hdGNoZXM7XG4gIH1cblxuICBpc0VxdWFsVG8oYXNzZXJ0aW9uKSB7XG4gICAgY29uc3QgYXNzZXJ0aW9uTm9kZSA9IGFzc2VydGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgYXNzZXJ0aW9uTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoQXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gYXNzZXJ0aW9uTm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgZmluZFZhbGlkQXNzZXJ0aW9uKGNvbnRleHQpIHtcbiAgICBjb25zdCBhc3NlcnRpb25Ob2RlID0gdGhpcy5nZXRBc3NlcnRpb25Ob2RlKCksXG4gICAgICAgICAgYXNzZXJ0aW9uID0gY29udGV4dC5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIHZhbGlkQXNzZXJ0aW9uID0gYXNzZXJ0aW9uOyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRBc3NlcnRpb247XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgYnJlYWtQb2ludCA9IHRoaXMuZ2V0QnJlYWtQb2ludCgpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgYnJlYWtQb2ludFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkFzc2VydGlvbiIsIkVsZW1lbnQiLCJnZXROYW1lIiwibmFtZSIsImdldEFzc2VydGlvbk5vZGUiLCJub2RlIiwiZ2V0Tm9kZSIsImFzc2VydGlvbk5vZGUiLCJtYXRjaEFzc2VydGlvbk5vZGUiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsImFzc2VydGlvbk5vZGVNYXRjaGVzIiwiaXNFcXVhbFRvIiwiYXNzZXJ0aW9uIiwiZXF1YWxUbyIsImZpbmRWYWxpZEFzc2VydGlvbiIsImNvbnRleHQiLCJmaW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlIiwidmFsaWRBc3NlcnRpb24iLCJ0b0pTT04iLCJzdHJpbmciLCJnZXRTdHJpbmciLCJicmVha1BvaW50IiwiZ2V0QnJlYWtQb2ludCIsImpzb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7Z0NBRkc7QUFFVCxNQUFNQSxrQkFBa0JDLHVCQUFPO0lBQzVDQyxVQUFVO1FBQ1IsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVztRQUVqQyxPQUFPQTtJQUNUO0lBRUFDLG1CQUFtQjtRQUNqQixNQUFNQyxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUNuQkMsZ0JBQWdCRixNQUFNLEdBQUc7UUFFL0IsT0FBT0U7SUFDVDtJQUVBQyxtQkFBbUJELGFBQWEsRUFBRTtRQUNoQyxNQUFNRixPQUFPRSxlQUNQRSxjQUFjLElBQUksQ0FBQ0MsU0FBUyxDQUFDTCxPQUM3Qk0sdUJBQXVCRixhQUFhLEdBQUc7UUFFN0MsT0FBT0U7SUFDVDtJQUVBQyxVQUFVQyxTQUFTLEVBQUU7UUFDbkIsTUFBTU4sZ0JBQWdCTSxVQUFVUCxPQUFPLElBQ2pDSyx1QkFBdUIsSUFBSSxDQUFDSCxrQkFBa0IsQ0FBQ0QsZ0JBQy9DTyxVQUFVSCxzQkFBdUIsR0FBRztRQUUxQyxPQUFPRztJQUNUO0lBRUFDLG1CQUFtQkMsT0FBTyxFQUFFO1FBQzFCLE1BQU1ULGdCQUFnQixJQUFJLENBQUNILGdCQUFnQixJQUNyQ1MsWUFBWUcsUUFBUUMsNEJBQTRCLENBQUNWLGdCQUNqRFcsaUJBQWlCTCxXQUFZLEdBQUc7UUFFdEMsT0FBT0s7SUFDVDtJQUVBQyxTQUFTO1FBQ1AsTUFBTWhCLE9BQU8sSUFBSSxDQUFDRCxPQUFPLElBQ25Ca0IsU0FBUyxJQUFJLENBQUNDLFNBQVMsSUFDdkJDLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxPQUFPO1lBQ0xyQjtZQUNBaUI7WUFDQUU7UUFDRjtRQUVOLE9BQU9FO0lBQ1Q7QUFDRiJ9