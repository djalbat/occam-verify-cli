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
const _element = require("../utilities/element");
const _context = require("../utilities/context");
const _default = (0, _elements.define)(class Hypothesis extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, statement){
        super(context, string, node, breakPoint);
        this.statement = statement;
    }
    getStatement() {
        return this.statement;
    }
    getHypothesisNode() {
        const node = this.getNode(), hypothesisNode = node; ///
        return hypothesisNode;
    }
    async verify(context) {
        let verifies = false;
        await this.break(context);
        const hypothesisString = this.getString(); ///
        context.trace(`Verifying the '${hypothesisString}' hypothesis...`);
        if (this.statement !== null) {
            const validates = this.validate(context);
            if (validates) {
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
    validate(context) {
        let validates = false;
        const hypothesisString = this.getString(); ///
        context.trace(`Validating the '${hypothesisString}' hypothesis...`);
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
            context.debug(`...validated the '${hypothesisString}' hypothesis.`);
        }
        return validates;
    }
    validateStatement(context) {
        let statementValidates = false;
        const hypothesisString = this.getString();
        context.trace(`Validating the '${hypothesisString}' hypothesis's statement... `);
        const statement = this.statement.validate(context); ///
        if (statement !== null) {
            statementValidates = true;
        }
        if (statementValidates) {
            context.debug(`...validated the '${hypothesisString}' hypothesis's statement. `);
        }
        return statementValidates;
    }
    static name = "Hypothesis";
    toJSON() {
        const context = this.getContext();
        return (0, _context.serialise)((context)=>{
            const string = this.getString();
            let breakPoint;
            breakPoint = this.getBreakPoint();
            const breakPointJSON = breakPoint.toJSON();
            breakPoint = breakPointJSON; ///
            const json = {
                context,
                string,
                breakPoint
            };
            return json;
        }, context);
    }
    static fromJSON(json, context) {
        let hypothesis;
        (0, _context.unserialise)((json, context)=>{
            (0, _context.instantiate)((context)=>{
                const { string, breakPoint } = json, hypothesisNode = (0, _instantiate.instantiateHypothesis)(string, context), node = hypothesisNode, statement = (0, _element.statementFromHypothesisNode)(hypothesisNode, context);
                hypothesis = new Hypothesis(context, string, node, breakPoint, statement);
            }, context);
        }, json, context);
        return hypothesis;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2h5cG90aGVzaXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVIeXBvdGhlc2lzIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHN0YXRlbWVudEZyb21IeXBvdGhlc2lzTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgZGVjbGFyZSwgYXR0ZW1wdCwgc2VyaWFsaXNlLCB1bnNlcmlhbGlzZSwgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEh5cG90aGVzaXMgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBzdGF0ZW1lbnQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0SHlwb3RoZXNpc05vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGh5cG90aGVzaXNOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGh5cG90aGVzaXNOb2RlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBoeXBvdGhlc2lzU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzLi4uYCk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcyBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBoeXBvdGhlc2lzU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcy4uLmApO1xuXG4gICAgZGVjbGFyZSgoY29udGV4dCkgPT4ge1xuICAgICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICAgIHRoaXMuY29tbWl0KGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGh5cG90aGVzaXNTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7aHlwb3RoZXNpc1N0cmluZ30nIGh5cG90aGVzaXMncyBzdGF0ZW1lbnQuLi4gYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudC52YWxpZGF0ZShjb250ZXh0KTsgIC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzJ3Mgc3RhdGVtZW50LiBgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkh5cG90aGVzaXNcIjtcblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgcmV0dXJuIHNlcmlhbGlzZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgICAgbGV0IGJyZWFrUG9pbnQ7XG5cbiAgICAgIGJyZWFrUG9pbnQgPSB0aGlzLmdldEJyZWFrUG9pbnQoKTtcblxuICAgICAgY29uc3QgYnJlYWtQb2ludEpTT04gPSBicmVha1BvaW50LnRvSlNPTigpO1xuXG4gICAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEpTT047ICAvLy9cblxuICAgICAgY29uc3QganNvbiA9IHtcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgc3RyaW5nLFxuICAgICAgICBicmVha1BvaW50XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4ganNvbjtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IGh5cG90aGVzaXM7XG5cbiAgICB1bnNlcmlhbGlzZSgoanNvbiwgY29udGV4dCkgPT4ge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBzdHJpbmcsIGJyZWFrUG9pbnQgfSA9IGpzb24sXG4gICAgICAgICAgICAgIGh5cG90aGVzaXNOb2RlID0gaW5zdGFudGlhdGVIeXBvdGhlc2lzKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgIG5vZGUgPSBoeXBvdGhlc2lzTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNpc05vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGh5cG90aGVzaXMgPSBuZXcgSHlwb3RoZXNpcyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHN0YXRlbWVudCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBoeXBvdGhlc2lzO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJIeXBvdGhlc2lzIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsImdldEh5cG90aGVzaXNOb2RlIiwiZ2V0Tm9kZSIsImh5cG90aGVzaXNOb2RlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJicmVhayIsImh5cG90aGVzaXNTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkYXRlcyIsInZhbGlkYXRlIiwiZGVidWciLCJkZWNsYXJlIiwiYXR0ZW1wdCIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlU3RhdGVtZW50IiwiY29tbWl0IiwibmFtZSIsInRvSlNPTiIsImdldENvbnRleHQiLCJzZXJpYWxpc2UiLCJnZXRCcmVha1BvaW50IiwiYnJlYWtQb2ludEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJoeXBvdGhlc2lzIiwidW5zZXJpYWxpc2UiLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlSHlwb3RoZXNpcyIsInN0YXRlbWVudEZyb21IeXBvdGhlc2lzTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7Z0NBUHdCOzBCQUVEOzZCQUNlO3lCQUNNO3lCQUMwQjtNQUV0RSxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLG1CQUFtQkMsdUJBQU87SUFDcEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxTQUFTLENBQUU7UUFDeEQsS0FBSyxDQUFDSixTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLFNBQVMsR0FBR0E7SUFDbkI7SUFFQUMsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDRCxTQUFTO0lBQ3ZCO0lBRUFFLG9CQUFvQjtRQUNsQixNQUFNSixPQUFPLElBQUksQ0FBQ0ssT0FBTyxJQUNuQkMsaUJBQWlCTixNQUFPLEdBQUc7UUFFakMsT0FBT007SUFD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