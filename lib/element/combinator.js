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
            const statementVerifies = this.verifyStatement(context);
            if (statementVerifies) {
                this.setContext(context);
                verifies = true;
            }
        }, context);
        if (verifies) {
            context.debug(`...verified the '${combinatorString}' combinator.`);
        }
        return verifies;
    }
    verifyStatement(context) {
        let statementVerifies = false;
        const statementString = this.statement.getString(), combinatorString = this.getString(); ///
        context.trace(`Verifying the '${combinatorString}' combinator's '${statementString}' statement...`);
        const statementVerifiesAsCombinator = (0, _verify.verifyStatementAsCombinator)(this.statement, context);
        if (statementVerifiesAsCombinator) {
            statementVerifies = true;
        }
        if (statementVerifies) {
            context.debug(`...verified the '${combinatorString}' combinator's '${statementString}' statement.`);
        }
        return statementVerifies;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbWJpbmF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgYXR0ZW1wdCwgbGl0ZXJhbGx5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUNvbWJpbmF0b3IgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgZXBoZW1lcmFsQ29udGV4dEZyb21KU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyB2ZXJpZnlTdGF0ZW1lbnRBc0NvbWJpbmF0b3IgfSBmcm9tIFwiLi4vcHJvY2Vzcy92ZXJpZnlcIjtcbmltcG9ydCB7IHN0YXRlbWVudEZyb21Db21iaW5hdG9yTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnRXaXRoQ29tYmluYXRvciB9IGZyb20gXCIuLi9wcm9jZXNzL3VuaWZ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBDb21iaW5hdG9yIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldENvbmJpbmF0b3JOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb21iaW5hdG9yTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBjb21iaW5hdG9yTm9kZTtcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb21iaW5hdG9yU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci4uLmApO1xuXG4gICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZXMgPSB0aGlzLnZlcmlmeVN0YXRlbWVudChjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZlcmlmaWVzKSB7XG4gICAgICAgIHRoaXMuc2V0Q29udGV4dChjb250ZXh0KTtcblxuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgY29udGV4dClcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN0YXRlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBjb21iaW5hdG9yU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvcidzICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZXNBc0NvbWJpbmF0b3IgPSB2ZXJpZnlTdGF0ZW1lbnRBc0NvbWJpbmF0b3IodGhpcy5zdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVzQXNDb21iaW5hdG9yKSB7XG4gICAgICBzdGF0ZW1lbnRWZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29tYmluYXRvclN0cmluZ30nIGNvbWJpbmF0b3IncyAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBjb21iaW5hdG9yU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaUNvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaUNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgY29tYmluYXRvciA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvciA9IHVuaWZ5U3RhdGVtZW50V2l0aENvbWJpbmF0b3Ioc3RhdGVtZW50LCBjb21iaW5hdG9yLCBzdGF0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpQ29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVzID0gc3RhdGVtZW50VW5pZmllc1dpdGhDb21iaW5hdG9yOyAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Y29tYmluYXRvclN0cmluZ30nIGNvbWJpbmF0b3IuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgbGV0IGNvbnRleHQ7XG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBjb250ZXh0SlNPTiA9IGNvbnRleHQudG9KU09OKCk7XG5cbiAgICBjb250ZXh0ID0gY29udGV4dEpTT047ICAvLy9cblxuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29tYmluYXRvclwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgY29tYmluYXRvciA9IGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBjb21iaW5hdG9yTm9kZSA9IGluc3RhbnRpYXRlQ29tYmluYXRvcihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IGNvbWJpbmF0b3JOb2RlLCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQ29tYmluYXRvck5vZGUoY29tYmluYXRvck5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgZXBoZW1lcmFsQ29udGV4dCA9IGVwaGVtZXJhbENvbnRleHRGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IGVwaGVtZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICBjb25zdCBjb21iaW5hdG9yID0gbmV3IENvbWJpbmF0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gICAgICByZXR1cm4gY29tYmluYXRvcjtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb21iaW5hdG9yO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJDb21iaW5hdG9yIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwiZ2V0Q29uYmluYXRvck5vZGUiLCJnZXROb2RlIiwiY29tYmluYXRvck5vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImNvbWJpbmF0b3JTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImF0dGVtcHQiLCJzdGF0ZW1lbnRWZXJpZmllcyIsInZlcmlmeVN0YXRlbWVudCIsInNldENvbnRleHQiLCJkZWJ1ZyIsInN0YXRlbWVudFN0cmluZyIsInN0YXRlbWVudFZlcmlmaWVzQXNDb21iaW5hdG9yIiwidmVyaWZ5U3RhdGVtZW50QXNDb21iaW5hdG9yIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZWQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwic3BlY2lmaUNvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJjb21iaW5hdG9yIiwic3RhdGVtZW50VW5pZmllc1dpdGhDb21iaW5hdG9yIiwidW5pZnlTdGF0ZW1lbnRXaXRoQ29tYmluYXRvciIsInRvSlNPTiIsImNvbnRleHRKU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImxpdGVyYWxseSIsImluc3RhbnRpYXRlQ29tYmluYXRvciIsInN0YXRlbWVudEZyb21Db21iaW5hdG9yTm9kZSIsImVwaGVtZXJhbENvbnRleHQiLCJlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7O2dDQVZ3QjswQkFFRDt5QkFDWTs2QkFDRztzQkFDRzt3QkFDRzt5QkFDQTt1QkFDQztNQUU3QyxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLG1CQUFtQkMsdUJBQU87SUFDcEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxDQUFFO1FBQzVDLEtBQUssQ0FBQ0gsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO0lBQ25CO0lBRUFDLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQ0QsU0FBUztJQUN2QjtJQUVBRSxvQkFBb0I7UUFDbEIsTUFBTUgsT0FBTyxJQUFJLENBQUNJLE9BQU8sSUFDbkJDLGlCQUFpQkwsTUFBTyxHQUFHO1FBRWpDLE9BQU9LO0lBQ1Q7SUFFQUMsT0FBT1IsT0FBTyxFQUFFO1FBQ2QsSUFBSVMsV0FBVztRQUVmLE1BQU1DLG1CQUFtQixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRS9DWCxRQUFRWSxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVGLGlCQUFpQixlQUFlLENBQUM7UUFFakVHLElBQUFBLGdCQUFPLEVBQUMsQ0FBQ2I7WUFDUCxNQUFNYyxvQkFBb0IsSUFBSSxDQUFDQyxlQUFlLENBQUNmO1lBRS9DLElBQUljLG1CQUFtQjtnQkFDckIsSUFBSSxDQUFDRSxVQUFVLENBQUNoQjtnQkFFaEJTLFdBQVc7WUFDYjtRQUNGLEdBQUdUO1FBRUgsSUFBSVMsVUFBVTtZQUNaVCxRQUFRaUIsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVQLGlCQUFpQixhQUFhLENBQUM7UUFDbkU7UUFFQSxPQUFPRDtJQUNUO0lBRUFNLGdCQUFnQmYs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