"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SyntheticContext;
    }
});
const _context = /*#__PURE__*/ _interop_require_default(require("../context"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class SyntheticContext extends _context.default {
    constructor(context, contexts){
        super(context);
        this.contexts = contexts;
    }
    getContexts() {
        return this.contexts;
    }
    addSubstitutions(substitutions) {
        const context = this.getContext();
        context.addSubstitutions(substitutions);
    }
    findTermByTermNode(termNode) {
        let term = null;
        this.contexts.some((context)=>{
            term = context.findTermByTermNode(termNode);
            if (term !== null) {
                return true;
            }
        });
        return term;
    }
    findFrameByFrameNode(frameNode) {
        let frame = null;
        this.contexts.some((context)=>{
            frame = context.findFrameByFrameNode(frameNode);
            if (frame !== null) {
                return true;
            }
        });
        return frame;
    }
    static fromContexts(...contexts) {
        const context = contexts.pop(), syntheticContext = new SyntheticContext(context, contexts);
        return syntheticContext;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3N5bnRoZXRpYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ludGhldGljQ29udGV4dCBleHRlbmRzIENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBjb250ZXh0cykge1xuICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgdGhpcy5jb250ZXh0cyA9IGNvbnRleHRzO1xuICB9XG5cbiAgZ2V0Q29udGV4dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dHM7XG4gIH1cblxuICBhZGRTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucyk7XG4gIH1cblxuICBmaW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBsZXQgdGVybSA9IG51bGw7XG5cbiAgICB0aGlzLmNvbnRleHRzLnNvbWUoKGNvbnRleHQpID0+IHtcbiAgICAgIHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBmaW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgdGhpcy5jb250ZXh0cy5zb21lKChjb250ZXh0KSA9PiB7XG4gICAgICBmcmFtZSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKTtcblxuICAgICAgaWYgKGZyYW1lICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZXh0cyguLi5jb250ZXh0cykge1xuICAgIGNvbnN0IGNvbnRleHQgPSBjb250ZXh0cy5wb3AoKSwgLy8vXG4gICAgICAgICAgc3ludGhldGljQ29udGV4dCA9IG5ldyBTeW50aGV0aWNDb250ZXh0KGNvbnRleHQsIGNvbnRleHRzKTtcblxuICAgIHJldHVybiBzeW50aGV0aWNDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiU3ludGhldGljQ29udGV4dCIsIkNvbnRleHQiLCJjb250ZXh0IiwiY29udGV4dHMiLCJnZXRDb250ZXh0cyIsImFkZFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwiZ2V0Q29udGV4dCIsImZpbmRUZXJtQnlUZXJtTm9kZSIsInRlcm1Ob2RlIiwidGVybSIsInNvbWUiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsImZyYW1lTm9kZSIsImZyYW1lIiwiZnJvbUNvbnRleHRzIiwicG9wIiwic3ludGhldGljQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7OztnRUFGRDs7Ozs7O0FBRUwsTUFBTUEseUJBQXlCQyxnQkFBTztJQUNuRCxZQUFZQyxPQUFPLEVBQUVDLFFBQVEsQ0FBRTtRQUM3QixLQUFLLENBQUNEO1FBRU4sSUFBSSxDQUFDQyxRQUFRLEdBQUdBO0lBQ2xCO0lBRUFDLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ0QsUUFBUTtJQUN0QjtJQUVBRSxpQkFBaUJDLGFBQWEsRUFBRTtRQUM5QixNQUFNSixVQUFVLElBQUksQ0FBQ0ssVUFBVTtRQUUvQkwsUUFBUUcsZ0JBQWdCLENBQUNDO0lBQzNCO0lBRUFFLG1CQUFtQkMsUUFBUSxFQUFFO1FBQzNCLElBQUlDLE9BQU87UUFFWCxJQUFJLENBQUNQLFFBQVEsQ0FBQ1EsSUFBSSxDQUFDLENBQUNUO1lBQ2xCUSxPQUFPUixRQUFRTSxrQkFBa0IsQ0FBQ0M7WUFFbEMsSUFBSUMsU0FBUyxNQUFNO2dCQUNqQixPQUFPO1lBQ1Q7UUFDRjtRQUVBLE9BQU9BO0lBQ1Q7SUFFQUUscUJBQXFCQyxTQUFTLEVBQUU7UUFDOUIsSUFBSUMsUUFBUTtRQUVaLElBQUksQ0FBQ1gsUUFBUSxDQUFDUSxJQUFJLENBQUMsQ0FBQ1Q7WUFDbEJZLFFBQVFaLFFBQVFVLG9CQUFvQixDQUFDQztZQUVyQyxJQUFJQyxVQUFVLE1BQU07Z0JBQ2xCLE9BQU87WUFDVDtRQUNGO1FBRUEsT0FBT0E7SUFDVDtJQUVBLE9BQU9DLGFBQWEsR0FBR1osUUFBUSxFQUFFO1FBQy9CLE1BQU1ELFVBQVVDLFNBQVNhLEdBQUcsSUFDdEJDLG1CQUFtQixJQUFJakIsaUJBQWlCRSxTQUFTQztRQUV2RCxPQUFPYztJQUNUO0FBQ0YifQ==