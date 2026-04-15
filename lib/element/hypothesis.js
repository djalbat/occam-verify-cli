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
    constructor(context, string, node, lineIndex, statement){
        super(context, string, node, lineIndex);
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
            const string = this.getString(), lineIndex = this.getLineIndex(), json = {
                context,
                string,
                lineIndex
            };
            return json;
        }, context);
    }
    static fromJSON(json, context) {
        let hypothesis;
        (0, _context.unserialise)((json, context)=>{
            (0, _context.instantiate)((context)=>{
                const { string, lineIndex } = json, hypothesisNode = (0, _instantiate.instantiateHypothesis)(string, context), node = hypothesisNode, statement = (0, _element.statementFromHypothesisNode)(hypothesisNode, context);
                hypothesis = new Hypothesis(context, string, node, lineIndex, statement);
            }, context);
        }, json, context);
        return hypothesis;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2h5cG90aGVzaXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVIeXBvdGhlc2lzIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHN0YXRlbWVudEZyb21IeXBvdGhlc2lzTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgZGVjbGFyZSwgYXR0ZW1wdCwgc2VyaWFsaXNlLCB1bnNlcmlhbGlzZSwgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEh5cG90aGVzaXMgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldEh5cG90aGVzaXNOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBoeXBvdGhlc2lzTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBoeXBvdGhlc2lzTm9kZTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgaHlwb3RoZXNpc1N0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcy4uLmApO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7aHlwb3RoZXNpc1N0cmluZ30nIGh5cG90aGVzaXMgYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgaHlwb3RoZXNpc1N0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7aHlwb3RoZXNpc1N0cmluZ30nIGh5cG90aGVzaXMuLi5gKTtcblxuICAgIGRlY2xhcmUoKGNvbnRleHQpID0+IHtcbiAgICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgICB0aGlzLmNvbW1pdChjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwgY29udGV4dClcblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7aHlwb3RoZXNpc1N0cmluZ30nIGh5cG90aGVzaXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBoeXBvdGhlc2lzU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzJ3Mgc3RhdGVtZW50Li4uIGApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQudmFsaWRhdGUoY29udGV4dCk7ICAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcydzIHN0YXRlbWVudC4gYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJIeXBvdGhlc2lzXCI7XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIHJldHVybiBzZXJpYWxpc2UoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBsaW5lSW5kZXggPSB0aGlzLmdldExpbmVJbmRleCgpLFxuICAgICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgICBsaW5lSW5kZXhcbiAgICAgICAgICAgIH07XG5cbiAgICAgIHJldHVybiBqc29uO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgaHlwb3RoZXNpcztcblxuICAgIHVuc2VyaWFsaXNlKChqc29uLCBjb250ZXh0KSA9PiB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgICBoeXBvdGhlc2lzTm9kZSA9IGluc3RhbnRpYXRlSHlwb3RoZXNpcyhzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gaHlwb3RoZXNpc05vZGUsICAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUh5cG90aGVzaXNOb2RlKGh5cG90aGVzaXNOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICBoeXBvdGhlc2lzID0gbmV3IEh5cG90aGVzaXMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHN0YXRlbWVudCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBoeXBvdGhlc2lzO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJIeXBvdGhlc2lzIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4Iiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwiZ2V0SHlwb3RoZXNpc05vZGUiLCJnZXROb2RlIiwiaHlwb3RoZXNpc05vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImJyZWFrIiwiaHlwb3RoZXNpc1N0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwidmFsaWRhdGUiLCJkZWJ1ZyIsImRlY2xhcmUiLCJhdHRlbXB0Iiwic3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVTdGF0ZW1lbnQiLCJjb21taXQiLCJuYW1lIiwidG9KU09OIiwiZ2V0Q29udGV4dCIsInNlcmlhbGlzZSIsImdldExpbmVJbmRleCIsImpzb24iLCJmcm9tSlNPTiIsImh5cG90aGVzaXMiLCJ1bnNlcmlhbGlzZSIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVIeXBvdGhlc2lzIiwic3RhdGVtZW50RnJvbUh5cG90aGVzaXNOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OztnQ0FQd0I7MEJBRUQ7NkJBQ2U7eUJBQ007eUJBQzBCO01BRXRFLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsbUJBQW1CQyx1QkFBTztJQUNwRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsQ0FBRTtRQUN2RCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtJQUNuQjtJQUVBQyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUNELFNBQVM7SUFDdkI7SUFFQUUsb0JBQW9CO1FBQ2xCLE1BQU1KLE9BQU8sSUFBSSxDQUFDSyxPQUFPLElBQ25CQyxpQkFBaUJOLE1BQU8sR0FBRztRQUVqQyxPQUFPTTtJQUNUO0lBRUEsTUFBTUMsT0FBT1QsT0FBTyxFQUFFO1FBQ3BCLElBQUlVLFdBQVc7UUFFZixNQUFNLElBQUksQ0FBQ0MsS0FBSyxDQUFDWDtRQUVqQixNQUFNWSxtQkFBbUIsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FB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