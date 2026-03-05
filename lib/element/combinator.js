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
const _json = require("../utilities/json");
const _verify = require("../process/verify");
const _element = require("../utilities/element");
const _unify = require("../process/unify");
const _default = (0, _elements.define)(class Combinator extends _occamlanguages.Element {
    constructor(context, string, node, statement){
        super(context, string, node);
        this.statement = statement;
    }
    getStatement() {
        return this.statement;
    }
    getConbinatorNode() {
        const node = this.getNode(), combinatorNode = node; ///
        return combinatorNode;
    }
    verify(context) {
        let verifies = false;
        const combinatorString = this.getString(); ///
        context.trace(`Verifying the '${combinatorString}' combinator...`);
        (0, _context.attempt)((context)=>{
            const statementVerifiesAsCombinator = (0, _verify.verifyStatementAsCombinator)(this.statement, context);
            if (statementVerifiesAsCombinator) {
                this.setContext(context);
                verifies = true;
            }
        }, context);
        if (verifies) {
            context.debug(`...verified the '${combinatorString}' combinator.`);
        }
        return verifies;
    }
    unifyStatement(statement, stated, context) {
        let statementUnifies;
        const statementString = statement.getString(), combinatorString = this.getString(); ///
        context.trace(`Unifying the '${statementString}' statement with the '${combinatorString}' combinator...`);
        const specifiContext = context; ///
        context = this.getContext();
        const generalContext = context; ///
        context = specifiContext; ///
        const combinator = this, statementUnifiesWithCombinator = (0, _unify.unifyStatementWithCombinator)(statement, combinator, stated, generalContext, specifiContext);
        statementUnifies = statementUnifiesWithCombinator; ///
        if (statementUnifies) {
            context.debug(`...unified the '${statementString}' statement with the '${combinatorString}' combinator.`);
        }
        return statementUnifies;
    }
    toJSON() {
        let context;
        context = this.getContext();
        const contextJSON = context.toJSON();
        context = contextJSON; ///
        const string = this.getString(), json = {
            context,
            string
        };
        return json;
    }
    static name = "Combinator";
    static fromJSON(json, context) {
        const combinator = (0, _context.literally)((context)=>{
            const { string } = json, combinatorNode = (0, _instantiate.instantiateCombinator)(string, context), node = combinatorNode, statement = (0, _element.statementFromCombinatorNode)(combinatorNode, context), ephemeralContext = (0, _json.ephemeralContextFromJSON)(json, context);
            context = ephemeralContext; ///
            const combinator = new Combinator(context, string, node, statement);
            return combinator;
        }, context);
        return combinator;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbWJpbmF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgYXR0ZW1wdCwgbGl0ZXJhbGx5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUNvbWJpbmF0b3IgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgZXBoZW1lcmFsQ29udGV4dEZyb21KU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyB2ZXJpZnlTdGF0ZW1lbnRBc0NvbWJpbmF0b3IgfSBmcm9tIFwiLi4vcHJvY2Vzcy92ZXJpZnlcIjtcbmltcG9ydCB7IHN0YXRlbWVudEZyb21Db21iaW5hdG9yTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnRXaXRoQ29tYmluYXRvciB9IGZyb20gXCIuLi9wcm9jZXNzL3VuaWZ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBDb21iaW5hdG9yIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldENvbmJpbmF0b3JOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb21iaW5hdG9yTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBjb21iaW5hdG9yTm9kZTtcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb21iaW5hdG9yU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci4uLmApO1xuXG4gICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZXNBc0NvbWJpbmF0b3IgPSB2ZXJpZnlTdGF0ZW1lbnRBc0NvbWJpbmF0b3IodGhpcy5zdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZXNBc0NvbWJpbmF0b3IpIHtcbiAgICAgICAgdGhpcy5zZXRDb250ZXh0KGNvbnRleHQpO1xuXG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29tYmluYXRvclN0cmluZ30nIGNvbWJpbmF0b3IuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBjb21iaW5hdG9yU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaUNvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaUNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgY29tYmluYXRvciA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvciA9IHVuaWZ5U3RhdGVtZW50V2l0aENvbWJpbmF0b3Ioc3RhdGVtZW50LCBjb21iaW5hdG9yLCBzdGF0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpQ29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVzID0gc3RhdGVtZW50VW5pZmllc1dpdGhDb21iaW5hdG9yOyAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Y29tYmluYXRvclN0cmluZ30nIGNvbWJpbmF0b3IuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgbGV0IGNvbnRleHQ7XG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBjb250ZXh0SlNPTiA9IGNvbnRleHQudG9KU09OKCk7XG5cbiAgICBjb250ZXh0ID0gY29udGV4dEpTT047ICAvLy9cblxuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29tYmluYXRvclwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgY29tYmluYXRvciA9IGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBjb21iaW5hdG9yTm9kZSA9IGluc3RhbnRpYXRlQ29tYmluYXRvcihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IGNvbWJpbmF0b3JOb2RlLCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQ29tYmluYXRvck5vZGUoY29tYmluYXRvck5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgZXBoZW1lcmFsQ29udGV4dCA9IGVwaGVtZXJhbENvbnRleHRGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IGVwaGVtZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICBjb25zdCBjb21iaW5hdG9yID0gbmV3IENvbWJpbmF0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gICAgICByZXR1cm4gY29tYmluYXRvcjtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb21iaW5hdG9yO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJDb21iaW5hdG9yIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwiZ2V0Q29uYmluYXRvck5vZGUiLCJnZXROb2RlIiwiY29tYmluYXRvck5vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImNvbWJpbmF0b3JTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImF0dGVtcHQiLCJzdGF0ZW1lbnRWZXJpZmllc0FzQ29tYmluYXRvciIsInZlcmlmeVN0YXRlbWVudEFzQ29tYmluYXRvciIsInNldENvbnRleHQiLCJkZWJ1ZyIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVkIiwic3RhdGVtZW50VW5pZmllcyIsInN0YXRlbWVudFN0cmluZyIsInNwZWNpZmlDb250ZXh0IiwiZ2V0Q29udGV4dCIsImdlbmVyYWxDb250ZXh0IiwiY29tYmluYXRvciIsInN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvciIsInVuaWZ5U3RhdGVtZW50V2l0aENvbWJpbmF0b3IiLCJ0b0pTT04iLCJjb250ZXh0SlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJsaXRlcmFsbHkiLCJpbnN0YW50aWF0ZUNvbWJpbmF0b3IiLCJzdGF0ZW1lbnRGcm9tQ29tYmluYXRvck5vZGUiLCJlcGhlbWVyYWxDb250ZXh0IiwiZXBoZW1lcmFsQ29udGV4dEZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OztnQ0FWd0I7MEJBRUQ7eUJBQ1k7NkJBQ0c7c0JBQ0c7d0JBQ0c7eUJBQ0E7dUJBQ0M7TUFFN0MsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxtQkFBbUJDLHVCQUFPO0lBQ3BELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsQ0FBRTtRQUM1QyxLQUFLLENBQUNILFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtJQUNuQjtJQUVBQyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUNELFNBQVM7SUFDdkI7SUFFQUUsb0JBQW9CO1FBQ2xCLE1BQU1ILE9BQU8sSUFBSSxDQUFDSSxPQUFPLElBQ25CQyxpQkFBaUJMLE1BQU8sR0FBRztRQUVqQyxPQUFPSztJQUNUO0lBRUFDLE9BQU9SLE9BQU8sRUFBRTtRQUNkLElBQUlTLFdBQVc7UUFFZixNQUFNQyxtQkFBbUIsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUUvQ1gsUUFBUVksS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFRixpQkFBaUIsZUFBZSxDQUFDO1FBRWpFRyxJQUFBQSxnQkFBTyxFQUFDLENBQUNiO1lBQ1AsTUFBTWMsZ0NBQWdDQyxJQUFBQSxtQ0FBMkIsRUFBQyxJQUFJLENBQUNaLFNBQVMsRUFBRUg7WUFFbEYsSUFBSWMsK0JBQStCO2dCQUNqQyxJQUFJLENBQUNFLFVBQVUsQ0FBQ2hCO2dCQUVoQlMsV0FBVztZQUNiO1FBQ0YsR0FBR1Q7UUFFSCxJQUFJUyxVQUFVO1lBQ1pULFFBQVFpQixLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRVAsaUJBQWlCLGFBQWEsQ0FBQztRQUNuRTtRQUVBLE9BQU9EO0lBQ1Q7SUFFQVMsZUFBZWYsU0FBUyxFQUFFZ0IsTUFBTSxFQUFFbkIsT0FBTyxFQUFFO1FBQ3pDLElBQUlvQjtRQUVKLE1BQU1DLGtCQUFrQmxCLFVBQVVRLFNBQVMsSUFDckNELG1CQUFtQixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRS9DWCxRQUFRWSxLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUVTLGdCQUFnQixzQkFBc0IsRUFBRVgsaUJBQWlCLGVBQWUsQ0FBQztRQUV4RyxNQUFNWSxpQkFBaUJ0QixTQUFTLEdBQUc7UUFFbkNBLFVBQVUsSUFBSSxDQUFDdUIsVUFBVTtRQUV6QixNQUFNQyxpQkFBaUJ4QixTQUFTLEdBQUc7UUFFbkNBLFVBQVVzQixnQkFBZ0IsR0FBRztRQUU3QixNQUFNRyxhQUFhLElBQUksRUFDakJDLGlDQUFpQ0MsSUFBQUEsbUNBQTRCLEVBQUN4QixXQUFXc0IsWUFBWU4sUUFBUUssZ0JBQWdCRjtRQUVuSEYsbUJBQW1CTSxnQ0FBZ0MsR0FBRztRQUV0RCxJQUFJTixrQkFBa0I7WUFDcEJwQixRQUFRaUIsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVJLGdCQUFnQixzQkFBc0IsRUFBRVgsaUJBQWlCLGFBQWEsQ0FBQztRQUMxRztRQUVBLE9BQU9VO0lBQ1Q7SUFFQVEsU0FBUztRQUNQLElBQUk1QjtRQUVKQSxVQUFVLElBQUksQ0FBQ3VCLFVBQVU7UUFFekIsTUFBTU0sY0FBYzdCLFFBQVE0QixNQUFNO1FBRWxDNUIsVUFBVTZCLGFBQWMsR0FBRztRQUUzQixNQUFNNUIsU0FBUyxJQUFJLENBQUNVLFNBQVMsSUFDdkJtQixPQUFPO1lBQ0w5QjtZQUNBQztRQUNGO1FBRU4sT0FBTzZCO0lBQ1Q7SUFFQSxPQUFPQyxPQUFPLGFBQWE7SUFFM0IsT0FBT0MsU0FBU0YsSUFBSSxFQUFFOUIsT0FBTyxFQUFFO1FBQzdCLE1BQU15QixhQUFhUSxJQUFBQSxrQkFBUyxFQUFDLENBQUNqQztZQUM1QixNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHNkIsTUFDYnZCLGlCQUFpQjJCLElBQUFBLGtDQUFxQixFQUFDakMsUUFBUUQsVUFDL0NFLE9BQU9LLGdCQUNQSixZQUFZZ0MsSUFBQUEsb0NBQTJCLEVBQUM1QixnQkFBZ0JQLFVBQ3hEb0MsbUJBQW1CQyxJQUFBQSw4QkFBd0IsRUFBQ1AsTUFBTTlCO1lBRXhEQSxVQUFVb0Msa0JBQWtCLEdBQUc7WUFFL0IsTUFBTVgsYUFBYSxJQUFJM0IsV0FBV0UsU0FBU0MsUUFBUUMsTUFBTUM7WUFFekQsT0FBT3NCO1FBQ1QsR0FBR3pCO1FBRUgsT0FBT3lCO0lBQ1Q7QUFDRiJ9