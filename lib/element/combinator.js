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
const _verify = require("../process/verify");
const _unify = require("../process/unify");
const _json = require("../utilities/json");
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
        const statementJSON = (0, _json.statementToStatementJSON)(this.statement), statement = statementJSON, string = this.getString(), json = {
            context,
            string,
            statement
        };
        return json;
    }
    static name = "Combinator";
    static fromJSON(json, context) {
        const combinator = (0, _context.literally)((context)=>{
            const { string } = json, combinatorNode = (0, _instantiate.instantiateCombinator)(string, context), node = combinatorNode, statement = (0, _json.statementFromJSON)(json, context), ephemeralContext = (0, _json.ephemeralContextFromJSON)(json, context);
            context = ephemeralContext; ///
            const combinator = new Combinator(context, string, node, statement);
            return combinator;
        }, context);
        return combinator;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbWJpbmF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgYXR0ZW1wdCwgbGl0ZXJhbGx5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUNvbWJpbmF0b3IgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgdmVyaWZ5U3RhdGVtZW50QXNDb21iaW5hdG9yIH0gZnJvbSBcIi4uL3Byb2Nlc3MvdmVyaWZ5XCI7XG5pbXBvcnQgeyB1bmlmeVN0YXRlbWVudFdpdGhDb21iaW5hdG9yIH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7XG4gIHN0YXRlbWVudEZyb21KU09OLFxuICBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04sXG4gIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTixcbiAgcHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT05cbn0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBDb21iaW5hdG9yIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKVxuXG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0Q29uYmluYXRvck5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbWJpbmF0b3JOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JOb2RlO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbWJpbmF0b3JTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLi4uYCk7XG5cbiAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllc0FzQ29tYmluYXRvciA9IHZlcmlmeVN0YXRlbWVudEFzQ29tYmluYXRvcih0aGlzLnN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllc0FzQ29tYmluYXRvcikge1xuICAgICAgICB0aGlzLnNldENvbnRleHQoY29udGV4dCk7XG5cbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpXG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGNvbWJpbmF0b3JTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLi4uYCk7XG5cbiAgICBjb25zdCBzcGVjaWZpQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBjb21iaW5hdG9yID0gdGhpcywgLy8vXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhDb21iaW5hdG9yID0gdW5pZnlTdGF0ZW1lbnRXaXRoQ29tYmluYXRvcihzdGF0ZW1lbnQsIGNvbWJpbmF0b3IsIHN0YXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmlDb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFVuaWZpZXMgPSBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbWJpbmF0b3I7IC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBsZXQgY29udGV4dDtcblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGNvbnRleHRKU09OID0gY29udGV4dC50b0pTT04oKTtcblxuICAgIGNvbnRleHQgPSBjb250ZXh0SlNPTjsgIC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTih0aGlzLnN0YXRlbWVudCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29tYmluYXRvclwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgY29tYmluYXRvciA9IGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBjb21iaW5hdG9yTm9kZSA9IGluc3RhbnRpYXRlQ29tYmluYXRvcihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IGNvbWJpbmF0b3JOb2RlLCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGVwaGVtZXJhbENvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgY29uc3QgY29tYmluYXRvciA9IG5ldyBDb21iaW5hdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICAgICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29tYmluYXRvcjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQ29tYmluYXRvciIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsImdldENvbmJpbmF0b3JOb2RlIiwiZ2V0Tm9kZSIsImNvbWJpbmF0b3JOb2RlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJjb21iaW5hdG9yU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJhdHRlbXB0Iiwic3RhdGVtZW50VmVyaWZpZXNBc0NvbWJpbmF0b3IiLCJ2ZXJpZnlTdGF0ZW1lbnRBc0NvbWJpbmF0b3IiLCJzZXRDb250ZXh0IiwiZGVidWciLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlZCIsInN0YXRlbWVudFVuaWZpZXMiLCJzdGF0ZW1lbnRTdHJpbmciLCJzcGVjaWZpQ29udGV4dCIsImdldENvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsImNvbWJpbmF0b3IiLCJzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbWJpbmF0b3IiLCJ1bmlmeVN0YXRlbWVudFdpdGhDb21iaW5hdG9yIiwidG9KU09OIiwiY29udGV4dEpTT04iLCJzdGF0ZW1lbnRKU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImxpdGVyYWxseSIsImluc3RhbnRpYXRlQ29tYmluYXRvciIsInN0YXRlbWVudEZyb21KU09OIiwiZXBoZW1lcmFsQ29udGV4dCIsImVwaGVtZXJhbENvbnRleHRGcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0JBOzs7ZUFBQTs7O2dDQWR3QjswQkFFRDt5QkFDWTs2QkFDRzt3QkFDTTt1QkFDQztzQkFNdEM7TUFFUCxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLG1CQUFtQkMsdUJBQU87SUFDcEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxDQUFFO1FBQzVDLEtBQUssQ0FBQ0gsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO0lBQ25CO0lBRUFDLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQ0QsU0FBUztJQUN2QjtJQUVBRSxvQkFBb0I7UUFDbEIsTUFBTUgsT0FBTyxJQUFJLENBQUNJLE9BQU8sSUFDbkJDLGlCQUFpQkwsTUFBTyxH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