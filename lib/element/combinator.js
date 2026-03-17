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
const _unify = require("../process/unify");
const _validate = require("../process/validate");
const _json = require("../utilities/json");
const _default = (0, _elements.define)(class Combinator extends _occamlanguages.Element {
    constructor(context, string, node, statement){
        super(context, string, node);
        this.statement = statement;
    }
    getStatement() {
        return this.statement;
    }
    getCombinatoryNode() {
        const node = this.getNode(), combinatorNode = node; ///
        return combinatorNode;
    }
    validate(context) {
        let validates = false;
        const combinatorString = this.getString(); ///
        context.trace(`Validating the '${combinatorString}' combinator...`);
        (0, _context.attempt)((context)=>{
            const statementValidates = this.validateStatement(context);
            if (statementValidates) {
                context.commit(this);
                validates = true;
            }
        }, context);
        if (validates) {
            context.debug(`...validated the '${combinatorString}' combinator.`);
        }
        return validates;
    }
    validateStatement(context) {
        let statementValidates = false;
        const statementString = this.statement.getString(), combinatorString = this.getString(); ///
        context.trace(`Validating the '${combinatorString}' combinator's '${statementString}' statement...`);
        const statementValidatesAsCombinator = (0, _validate.validateStatementAsCombinator)(this.statement, context);
        if (statementValidatesAsCombinator) {
            statementValidates = true;
        }
        if (statementValidates) {
            context.debug(`...validated the '${combinatorString}' combinator's '${statementString}' statement.`);
        }
        return statementValidates;
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
        const ephemeralContext = context, ephemeralContextJSON = (0, _json.ephemeralContextToEphemeralContextJSON)(ephemeralContext), contextJSON = ephemeralContextJSON; ///
        context = contextJSON; ///
        const string = this.getString(), json = {
            context,
            string
        };
        return json;
    }
    static name = "Combinator";
    static fromJSON(json, context) {
        const ephemeralContext = (0, _json.ephemeralContextFromJSON)(json, context), sanitised = true;
        return (0, _context.instantiate)((context)=>{
            const { string } = json, combinatorNode = (0, _instantiate.instantiateCombinator)(string, context), statement = (0, _element.statementFromCombinatorNode)(combinatorNode, context);
            context = ephemeralContext; ///
            const node = combinatorNode, combinator = new Combinator(context, string, node, statement);
            return combinator;
        }, sanitised, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbWJpbmF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgYXR0ZW1wdCwgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlQ29tYmluYXRvciB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnRGcm9tQ29tYmluYXRvck5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHVuaWZ5U3RhdGVtZW50V2l0aENvbWJpbmF0b3IgfSBmcm9tIFwiLi4vcHJvY2Vzcy91bmlmeVwiO1xuaW1wb3J0IHsgdmFsaWRhdGVTdGF0ZW1lbnRBc0NvbWJpbmF0b3IgfSBmcm9tIFwiLi4vcHJvY2Vzcy92YWxpZGF0ZVwiO1xuaW1wb3J0IHsgZXBoZW1lcmFsQ29udGV4dEZyb21KU09OLCBlcGhlbWVyYWxDb250ZXh0VG9FcGhlbWVyYWxDb250ZXh0SlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29tYmluYXRvciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRDb21iaW5hdG9yeU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbWJpbmF0b3JOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JOb2RlO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbWJpbmF0b3JTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci4uLmApO1xuXG4gICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmNvbW1pdCh0aGlzKTtcblxuICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpXG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29tYmluYXRvclN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yJ3MgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRWYWxpZGF0ZXNBc0NvbWJpbmF0b3IgPSB2YWxpZGF0ZVN0YXRlbWVudEFzQ29tYmluYXRvcih0aGlzLnN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzQXNDb21iaW5hdG9yKSB7XG4gICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7Y29tYmluYXRvclN0cmluZ30nIGNvbWJpbmF0b3IncyAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXM7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29tYmluYXRvclN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Y29tYmluYXRvclN0cmluZ30nIGNvbWJpbmF0b3IuLi5gKTtcblxuICAgIGNvbnN0IHNwZWNpZmlDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHNwZWNpZmlDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IGNvbWJpbmF0b3IgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbWJpbmF0b3IgPSB1bmlmeVN0YXRlbWVudFdpdGhDb21iaW5hdG9yKHN0YXRlbWVudCwgY29tYmluYXRvciwgc3RhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaUNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllcyA9IHN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvcjsgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGxldCBjb250ZXh0O1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZXBoZW1lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIGVwaGVtZXJhbENvbnRleHRKU09OID0gZXBoZW1lcmFsQ29udGV4dFRvRXBoZW1lcmFsQ29udGV4dEpTT04oZXBoZW1lcmFsQ29udGV4dCksXG4gICAgICAgICAgY29udGV4dEpTT04gPSBlcGhlbWVyYWxDb250ZXh0SlNPTjsgLy8vXG5cbiAgICBjb250ZXh0ID0gY29udGV4dEpTT047ICAvLy9cblxuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29tYmluYXRvclwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZXBoZW1lcmFsQ29udGV4dCA9IGVwaGVtZXJhbENvbnRleHRGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzYW5pdGlzZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIGNvbWJpbmF0b3JOb2RlID0gaW5zdGFudGlhdGVDb21iaW5hdG9yKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQ29tYmluYXRvck5vZGUoY29tYmluYXRvck5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgIGNvbnN0IG5vZGUgPSBjb21iaW5hdG9yTm9kZSwgIC8vL1xuICAgICAgICAgICAgY29tYmluYXRvciA9IG5ldyBDb21iaW5hdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICAgICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gICAgfSwgc2FuaXRpc2VkLCBjb250ZXh0KTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQ29tYmluYXRvciIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsImdldENvbWJpbmF0b3J5Tm9kZSIsImdldE5vZGUiLCJjb21iaW5hdG9yTm9kZSIsInZhbGlkYXRlIiwidmFsaWRhdGVzIiwiY29tYmluYXRvclN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiYXR0ZW1wdCIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlU3RhdGVtZW50IiwiY29tbWl0IiwiZGVidWciLCJzdGF0ZW1lbnRTdHJpbmciLCJzdGF0ZW1lbnRWYWxpZGF0ZXNBc0NvbWJpbmF0b3IiLCJ2YWxpZGF0ZVN0YXRlbWVudEFzQ29tYmluYXRvciIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVkIiwic3RhdGVtZW50VW5pZmllcyIsInNwZWNpZmlDb250ZXh0IiwiZ2V0Q29udGV4dCIsImdlbmVyYWxDb250ZXh0IiwiY29tYmluYXRvciIsInN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvciIsInVuaWZ5U3RhdGVtZW50V2l0aENvbWJpbmF0b3IiLCJ0b0pTT04iLCJlcGhlbWVyYWxDb250ZXh0IiwiZXBoZW1lcmFsQ29udGV4dEpTT04iLCJlcGhlbWVyYWxDb250ZXh0VG9FcGhlbWVyYWxDb250ZXh0SlNPTiIsImNvbnRleHRKU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImVwaGVtZXJhbENvbnRleHRGcm9tSlNPTiIsInNhbml0aXNlZCIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVDb21iaW5hdG9yIiwic3RhdGVtZW50RnJvbUNvbWJpbmF0b3JOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OztnQ0FWd0I7MEJBRUQ7eUJBQ2M7NkJBQ0M7eUJBQ007dUJBQ0M7MEJBQ0M7c0JBQ21DO01BRWpGLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsbUJBQW1CQyx1QkFBTztJQUNwRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLENBQUU7UUFDNUMsS0FBSyxDQUFDSCxTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLFNBQVMsR0FBR0E7SUFDbkI7SUFFQUMsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDRCxTQUFTO0lBQ3ZCO0lBRUFFLHFCQUFxQjtRQUNuQixNQUFNSCxPQUFPLElBQUksQ0FBQ0ksT0FBTyxJQUNuQkMsaUJBQWlCTCxNQUFPLEdBQUc7UUFFakMsT0FBT0s7SUFDVDtJQUVBQyxTQUFTUixPQUFPLEVBQUU7UUFDaEIsSUFBSVMsWUFBWTtRQUVoQixNQUFNQyxtQkFBbUIsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUUvQ1gsUUFBUVks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