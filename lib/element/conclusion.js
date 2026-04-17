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
const _instantiate = require("../process/instantiate");
const _context = require("../utilities/context");
const _default = (0, _elements.define)(class Conclusion extends _occamlanguages.Element {
    constructor(context, string, node, lineIndex, statement){
        super(context, string, node, lineIndex);
        this.statement = statement;
    }
    getStatement() {
        return this.statement;
    }
    getConclusionNode() {
        const node = this.getNode(), conclusionNode = node; ///
        return conclusionNode;
    }
    async verify(context) {
        let verifies = false;
        await this.break(context);
        const conclusionString = this.getString(); ///
        context.trace(`Verifying the '${conclusionString}' conclusion...`);
        if (this.statement !== null) {
            const validates = this.validate(context);
            if (validates) {
                verifies = true;
            }
        } else {
            context.debug(`Unable to verify the '${conclusionString}' conclusion because it is nonsense.`);
        }
        if (verifies) {
            context.debug(`...verified the '${conclusionString}' conclusion.`);
        }
        return verifies;
    }
    validate(context) {
        let validates = false;
        const conclusionString = this.getString(); ///
        context.trace(`Validating the '${conclusionString}' conclusion...`);
        (0, _context.declare)((context)=>{
            (0, _context.attempt)((context)=>{
                const statementValidates = this.validateStatement(context);
                if (statementValidates) {
                    validates = true;
                }
                if (validates) {
                    this.commit(context);
                }
            }, context);
        }, context);
        if (validates) {
            context.debug(`...validated the '${conclusionString}' conclusion.`);
        }
        return validates;
    }
    validateStatement(context) {
        let statementValidates = false;
        const conclusionString = this.getString(); ///
        context.trace(`Validating the '${conclusionString}' conclusion's statement...`);
        (0, _context.descend)((context)=>{
            const statement = this.statement.validate(context);
            if (statement !== null) {
                statementValidates = true;
            }
        }, context);
        if (statementValidates) {
            context.trace(`...validated the '${conclusionString}' conclusion's statement.`);
        }
        return statementValidates;
    }
    unifyStep(step, context) {
        let stepUnifies = false;
        const stepString = step.getString(), conclusionString = this.getString(); ///
        context.trace(`Unifying the '${stepString}' step with the '${conclusionString}' conclusion...`);
        const specificContext = context; ///
        context = this.getContext();
        const generalContext = context; ///
        context = specificContext; ///
        const statement = step.getStatement(), statementUnifies = this.statement.unifyStatement(statement, generalContext, specificContext);
        if (statementUnifies) {
            stepUnifies = true;
        }
        if (stepUnifies) {
            context.debug(`...unified the '${stepString}' step with the '${conclusionString}' conclusion.`);
        }
        return stepUnifies;
    }
    toJSON() {
        const context = this.getContext();
        return (0, _context.serialise)((context)=>{
            const string = this.getString(), lineIndex = this.getBreakPoint(), json = {
                context,
                string,
                lineIndex
            };
            return json;
        }, context);
    }
    static name = "Conclusion";
    static fromJSON(json, context) {
        let conclusion;
        (0, _context.unserialise)((json, context)=>{
            (0, _context.instantiate)((context)=>{
                const { string, lineIndex } = json, conclusionNode = (0, _instantiate.instantiateConclusion)(string, context), node = conclusionNode, statement = statementFromConclusionNode(conclusionNode, context);
                conclusion = new Conclusion(context, string, node, lineIndex, statement);
            }, context);
        }, json, context);
        return conclusion;
    }
});
function statementFromConclusionNode(conclusionNode, context) {
    const statementNode = conclusionNode.getStatementNode(), statement = context.findStatementByStatementNode(statementNode);
    return statement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbmNsdXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVDb25jbHVzaW9uIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGRlY2xhcmUsIGF0dGVtcHQsIGRlc2NlbmQsIHNlcmlhbGlzZSwgdW5zZXJpYWxpc2UsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBDb25jbHVzaW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBzdGF0ZW1lbnQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRDb25jbHVzaW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29uY2x1c2lvbk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gY29uY2x1c2lvbk5vZGU7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNvbmNsdXNpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbmNsdXNpb25TdHJpbmd9JyBjb25jbHVzaW9uLi4uYCk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHtjb25jbHVzaW9uU3RyaW5nfScgY29uY2x1c2lvbiBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbmNsdXNpb25TdHJpbmd9JyBjb25jbHVzaW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb25jbHVzaW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7Y29uY2x1c2lvblN0cmluZ30nIGNvbmNsdXNpb24uLi5gKTtcblxuICAgIGRlY2xhcmUoKGNvbnRleHQpID0+IHtcbiAgICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgICB0aGlzLmNvbW1pdChjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2NvbmNsdXNpb25TdHJpbmd9JyBjb25jbHVzaW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29uY2x1c2lvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2NvbmNsdXNpb25TdHJpbmd9JyBjb25jbHVzaW9uJ3Mgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBkZXNjZW5kKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudC52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udmFsaWRhdGVkIHRoZSAnJHtjb25jbHVzaW9uU3RyaW5nfScgY29uY2x1c2lvbidzIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgdW5pZnlTdGVwKHN0ZXAsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RlcFVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSBzdGVwLmdldFN0cmluZygpLFxuICAgICAgICAgIGNvbmNsdXNpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7Y29uY2x1c2lvblN0cmluZ30nIGNvbmNsdXNpb24uLi5gKTtcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3RlcC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBzdGVwVW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0ZXBVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtjb25jbHVzaW9uU3RyaW5nfScgY29uY2x1c2lvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RlcFVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgcmV0dXJuIHNlcmlhbGlzZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0QnJlYWtQb2ludCgpLFxuICAgICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgICBsaW5lSW5kZXhcbiAgICAgICAgICAgIH07XG5cbiAgICAgIHJldHVybiBqc29uO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbmNsdXNpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBjb25jbHVzaW9uO1xuXG4gICAgdW5zZXJpYWxpc2UoKGpzb24sIGNvbnRleHQpID0+IHtcbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nLCBsaW5lSW5kZXggfSA9IGpzb24sXG4gICAgICAgICAgICAgIGNvbmNsdXNpb25Ob2RlID0gaW5zdGFudGlhdGVDb25jbHVzaW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgIG5vZGUgPSBjb25jbHVzaW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbmNsdXNpb24gPSBuZXcgQ29uY2x1c2lvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgc3RhdGVtZW50KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbmNsdXNpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdGF0ZW1lbnRGcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGNvbmNsdXNpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQ29uY2x1c2lvbiIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsInN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsImdldENvbmNsdXNpb25Ob2RlIiwiZ2V0Tm9kZSIsImNvbmNsdXNpb25Ob2RlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJicmVhayIsImNvbmNsdXNpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkYXRlcyIsInZhbGlkYXRlIiwiZGVidWciLCJkZWNsYXJlIiwiYXR0ZW1wdCIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlU3RhdGVtZW50IiwiY29tbWl0IiwiZGVzY2VuZCIsInVuaWZ5U3RlcCIsInN0ZXAiLCJzdGVwVW5pZmllcyIsInN0ZXBTdHJpbmciLCJzcGVjaWZpY0NvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJ0b0pTT04iLCJzZXJpYWxpc2UiLCJnZXRCcmVha1BvaW50IiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImNvbmNsdXNpb24iLCJ1bnNlcmlhbGlzZSIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVDb25jbHVzaW9uIiwic3RhdGVtZW50RnJvbUNvbmNsdXNpb25Ob2RlIiwic3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OztnQ0FOd0I7MEJBRUQ7NkJBQ2U7eUJBQ3lDO01BRS9FLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsbUJBQW1CQyx1QkFBTztJQUNwRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsQ0FB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