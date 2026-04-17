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
        const name = this.getName(), string = this.getString();
        let breakPoint;
        breakPoint = this.getBreakPoint();
        const breakPointJSON = breakPoint.toJSON();
        breakPoint = breakPointJSON; ///
        const json = {
            name,
            string,
            breakPoint
        };
        return json;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNzZXJ0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldE5hbWUoKSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cblxuICBnZXRBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBhc3NlcnRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIG1hdGNoQXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IGFzc2VydGlvbk5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgYXNzZXJ0aW9uTm9kZU1hdGNoZXMgPSBub2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uTm9kZU1hdGNoZXM7XG4gIH1cblxuICBpc0VxdWFsVG8oYXNzZXJ0aW9uKSB7XG4gICAgY29uc3QgYXNzZXJ0aW9uTm9kZSA9IGFzc2VydGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgYXNzZXJ0aW9uTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoQXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gYXNzZXJ0aW9uTm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgZmluZFZhbGlkQXNzZXJ0aW9uKGNvbnRleHQpIHtcbiAgICBjb25zdCBhc3NlcnRpb25Ob2RlID0gdGhpcy5nZXRBc3NlcnRpb25Ob2RlKCksXG4gICAgICAgICAgYXNzZXJ0aW9uID0gY29udGV4dC5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIHZhbGlkQXNzZXJ0aW9uID0gYXNzZXJ0aW9uOyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRBc3NlcnRpb247XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBsZXQgYnJlYWtQb2ludDtcblxuICAgIGJyZWFrUG9pbnQgPSB0aGlzLmdldEJyZWFrUG9pbnQoKTtcblxuICAgIGNvbnN0IGJyZWFrUG9pbnRKU09OID0gYnJlYWtQb2ludC50b0pTT04oKTtcblxuICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50SlNPTjsgIC8vL1xuXG4gICAgY29uc3QganNvbiA9IHtcbiAgICAgIG5hbWUsXG4gICAgICBzdHJpbmcsXG4gICAgICBicmVha1BvaW50XG4gICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQXNzZXJ0aW9uIiwiRWxlbWVudCIsImdldE5hbWUiLCJuYW1lIiwiZ2V0QXNzZXJ0aW9uTm9kZSIsIm5vZGUiLCJnZXROb2RlIiwiYXNzZXJ0aW9uTm9kZSIsIm1hdGNoQXNzZXJ0aW9uTm9kZSIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwiYXNzZXJ0aW9uTm9kZU1hdGNoZXMiLCJpc0VxdWFsVG8iLCJhc3NlcnRpb24iLCJlcXVhbFRvIiwiZmluZFZhbGlkQXNzZXJ0aW9uIiwiY29udGV4dCIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJ2YWxpZEFzc2VydGlvbiIsInRvSlNPTiIsInN0cmluZyIsImdldFN0cmluZyIsImJyZWFrUG9pbnQiLCJnZXRCcmVha1BvaW50IiwiYnJlYWtQb2ludEpTT04iLCJqc29uIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7O2dDQUZHO0FBRVQsTUFBTUEsa0JBQWtCQyx1QkFBTztJQUM1Q0MsVUFBVTtRQUNSLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVc7UUFFakMsT0FBT0E7SUFDVDtJQUVBQyxtQkFBbUI7UUFDakIsTUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLGdCQUFnQkYsTUFBTSxHQUFHO1FBRS9CLE9BQU9FO0lBQ1Q7SUFFQUMsbUJBQW1CRCxhQUFhLEVBQUU7UUFDaEMsTUFBTUYsT0FBT0UsZUFDUEUsY0FBYyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0wsT0FDN0JNLHVCQUF1QkYsYUFBYSxHQUFHO1FBRTdDLE9BQU9FO0lBQ1Q7SUFFQUMsVUFBVUMsU0FBUyxFQUFFO1FBQ25CLE1BQU1OLGdCQUFnQk0sVUFBVVAsT0FBTyxJQUNqQ0ssdUJBQXVCLElBQUksQ0FBQ0gsa0JBQWtCLENBQUNELGdCQUMvQ08sVUFBVUgsc0JBQXVCLEdBQUc7UUFFMUMsT0FBT0c7SUFDVDtJQUVBQyxtQkFBbUJDLE9BQU8sRUFBRTtRQUMxQixNQUFNVCxnQkFBZ0IsSUFBSSxDQUFDSCxnQkFBZ0IsSUFDckNTLFlBQVlHLFFBQVFDLDRCQUE0QixDQUFDVixnQkFDakRXLGlCQUFpQkwsV0FBWSxHQUFHO1FBRXRDLE9BQU9LO0lBQ1Q7SUFFQUMsU0FBUztRQUNQLE1BQU1oQixPQUFPLElBQUksQ0FBQ0QsT0FBTyxJQUNuQmtCLFNBQVMsSUFBSSxDQUFDQyxTQUFTO1FBRTdCLElBQUlDO1FBRUpBLGFBQWEsSUFBSSxDQUFDQyxhQUFhO1FBRS9CLE1BQU1DLGlCQUFpQkYsV0FBV0gsTUFBTTtRQUV4Q0csYUFBYUUsZ0JBQWlCLEdBQUc7UUFFakMsTUFBTUMsT0FBTztZQUNYdEI7WUFDQWlCO1lBQ0FFO1FBQ0Y7UUFFQSxPQUFPRztJQUNUO0FBQ0YifQ==