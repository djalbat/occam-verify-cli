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
const _breakPoint = require("../utilities/breakPoint");
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
    discharge(context) {
        let discharges = false;
        const hypothesisString = this.getString(); ///
        context.trace(`Discharging the '${hypothesisString}' hypothesis...`);
        (0, _context.proffer)((context)=>{
            const statementDischarges = this.dischargeStatement(context);
            if (statementDischarges) {
                discharges = true;
            }
        }, context);
        if (discharges) {
            context.debug(`...discharged the '${hypothesisString}' hypothesis.`);
        }
        return discharges;
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
    dischargeStatement(context) {
        let statementDischarges = false;
        const hypothesisString = this.getString();
        context.trace(`Discharging the '${hypothesisString}' hypothesis's statement... `);
        const discharges = this.statement.discharge(context); ///
        if (discharges) {
            statementDischarges = true;
        }
        if (statementDischarges) {
            context.debug(`...discharged the '${hypothesisString}' hypothesis' statement. `);
        }
        return statementDischarges;
    }
    static name = "Hypothesis";
    toJSON() {
        const context = this.getContext();
        return (0, _context.serialise)((context)=>{
            const string = this.getString();
            let breakPoint;
            breakPoint = this.getBreakPoint();
            const breakPointJSON = (0, _breakPoint.breakPointToBreakPointJSON)(breakPoint);
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
        (0, _context.instantiate)((context)=>{
            (0, _context.unserialise)((json, context)=>{
                const { string } = json, hypothesisNode = (0, _instantiate.instantiateHypothesis)(string, context), node = hypothesisNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), statement = (0, _element.statementFromHypothesisNode)(hypothesisNode, context);
                hypothesis = new Hypothesis(context, string, node, breakPoint, statement);
            }, json, context);
        }, context);
        return hypothesis;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2h5cG90aGVzaXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVIeXBvdGhlc2lzIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHN0YXRlbWVudEZyb21IeXBvdGhlc2lzTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgYnJlYWtQb2ludEZyb21KU09OLCBicmVha1BvaW50VG9CcmVha1BvaW50SlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvYnJlYWtQb2ludFwiO1xuaW1wb3J0IHsgZGVjbGFyZSwgYXR0ZW1wdCwgcHJvZmZlciwgc2VyaWFsaXNlLCB1bnNlcmlhbGlzZSwgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEh5cG90aGVzaXMgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBzdGF0ZW1lbnQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0SHlwb3RoZXNpc05vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGh5cG90aGVzaXNOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGh5cG90aGVzaXNOb2RlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBoeXBvdGhlc2lzU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzLi4uYCk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcyBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBoeXBvdGhlc2lzU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcy4uLmApO1xuXG4gICAgZGVjbGFyZSgoY29udGV4dCkgPT4ge1xuICAgICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICAgIHRoaXMuY29tbWl0KGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgZGlzY2hhcmdlKGNvbnRleHQpIHtcbiAgICBsZXQgZGlzY2hhcmdlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgaHlwb3RoZXNpc1N0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRGlzY2hhcmdpbmcgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzLi4uYCk7XG5cbiAgICBwcm9mZmVyKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnREaXNjaGFyZ2VzID0gdGhpcy5kaXNjaGFyZ2VTdGF0ZW1lbnQoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnREaXNjaGFyZ2VzKSB7XG4gICAgICAgIGRpc2NoYXJnZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKGRpc2NoYXJnZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmRpc2NoYXJnZWQgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzLmApO1xuICAgIH1cblxuICAgIHJldHVybiBkaXNjaGFyZ2VzO1xuICB9XG5cbiAgdmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGh5cG90aGVzaXNTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7aHlwb3RoZXNpc1N0cmluZ30nIGh5cG90aGVzaXMncyBzdGF0ZW1lbnQuLi4gYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudC52YWxpZGF0ZShjb250ZXh0KTsgIC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzJ3Mgc3RhdGVtZW50LiBgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgZGlzY2hhcmdlU3RhdGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50RGlzY2hhcmdlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgaHlwb3RoZXNpc1N0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBEaXNjaGFyZ2luZyB0aGUgJyR7aHlwb3RoZXNpc1N0cmluZ30nIGh5cG90aGVzaXMncyBzdGF0ZW1lbnQuLi4gYCk7XG5cbiAgICBjb25zdCBkaXNjaGFyZ2VzID0gdGhpcy5zdGF0ZW1lbnQuZGlzY2hhcmdlKGNvbnRleHQpOyAgLy8vXG5cbiAgICBpZiAoZGlzY2hhcmdlcykge1xuICAgICAgc3RhdGVtZW50RGlzY2hhcmdlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudERpc2NoYXJnZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmRpc2NoYXJnZWQgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzJyBzdGF0ZW1lbnQuIGApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnREaXNjaGFyZ2VzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkh5cG90aGVzaXNcIjtcblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgcmV0dXJuIHNlcmlhbGlzZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgICAgbGV0IGJyZWFrUG9pbnQ7XG5cbiAgICAgIGJyZWFrUG9pbnQgPSB0aGlzLmdldEJyZWFrUG9pbnQoKTtcblxuICAgICAgY29uc3QgYnJlYWtQb2ludEpTT04gPSBicmVha1BvaW50VG9CcmVha1BvaW50SlNPTihicmVha1BvaW50KTtcblxuICAgICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRKU09OOyAgLy8vXG5cbiAgICAgIGNvbnN0IGpzb24gPSB7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHN0cmluZyxcbiAgICAgICAgYnJlYWtQb2ludFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGpzb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBoeXBvdGhlc2lzO1xuXG4gICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIHVuc2VyaWFsaXNlKChqc29uLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgICBoeXBvdGhlc2lzTm9kZSA9IGluc3RhbnRpYXRlSHlwb3RoZXNpcyhzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gaHlwb3RoZXNpc05vZGUsICAvLy9cbiAgICAgICAgICAgICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRGcm9tSlNPTihqc29uKSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzaXNOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICBoeXBvdGhlc2lzID0gbmV3IEh5cG90aGVzaXMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBzdGF0ZW1lbnQpO1xuICAgICAgfSwganNvbiwgY29udGV4dCk7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXNpcztcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiSHlwb3RoZXNpcyIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJnZXRIeXBvdGhlc2lzTm9kZSIsImdldE5vZGUiLCJoeXBvdGhlc2lzTm9kZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiYnJlYWsiLCJoeXBvdGhlc2lzU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJ2YWxpZGF0ZSIsImRlYnVnIiwiZGVjbGFyZSIsImF0dGVtcHQiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsImNvbW1pdCIsImRpc2NoYXJnZSIsImRpc2NoYXJnZXMiLCJwcm9mZmVyIiwic3RhdGVtZW50RGlzY2hhcmdlcyIsImRpc2NoYXJnZVN0YXRlbWVudCIsIm5hbWUiLCJ0b0pTT04iLCJnZXRDb250ZXh0Iiwic2VyaWFsaXNlIiwiZ2V0QnJlYWtQb2ludCIsImJyZWFrUG9pbnRKU09OIiwiYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJoeXBvdGhlc2lzIiwiaW5zdGFudGlhdGUiLCJ1bnNlcmlhbGlzZSIsImluc3RhbnRpYXRlSHlwb3RoZXNpcyIsImJyZWFrUG9p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