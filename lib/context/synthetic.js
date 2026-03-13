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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3N5bnRoZXRpYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ludGhldGljQ29udGV4dCBleHRlbmRzIENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBjb250ZXh0cykge1xuICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgdGhpcy5jb250ZXh0cyA9IGNvbnRleHRzO1xuICB9XG5cbiAgZ2V0Q29udGV4dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dHM7XG4gIH1cblxuICBmaW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBsZXQgdGVybSA9IG51bGw7XG5cbiAgICB0aGlzLmNvbnRleHRzLnNvbWUoKGNvbnRleHQpID0+IHtcbiAgICAgIHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBmaW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgdGhpcy5jb250ZXh0cy5zb21lKChjb250ZXh0KSA9PiB7XG4gICAgICBmcmFtZSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKTtcblxuICAgICAgaWYgKGZyYW1lICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZXh0cyguLi5jb250ZXh0cykge1xuICAgIGNvbnN0IGNvbnRleHQgPSBjb250ZXh0cy5wb3AoKSwgLy8vXG4gICAgICAgICAgc3ludGhldGljQ29udGV4dCA9IG5ldyBTeW50aGV0aWNDb250ZXh0KGNvbnRleHQsIGNvbnRleHRzKTtcblxuICAgIHJldHVybiBzeW50aGV0aWNDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiU3ludGhldGljQ29udGV4dCIsIkNvbnRleHQiLCJjb250ZXh0IiwiY29udGV4dHMiLCJnZXRDb250ZXh0cyIsImZpbmRUZXJtQnlUZXJtTm9kZSIsInRlcm1Ob2RlIiwidGVybSIsInNvbWUiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsImZyYW1lTm9kZSIsImZyYW1lIiwiZnJvbUNvbnRleHRzIiwicG9wIiwic3ludGhldGljQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7OztnRUFGRDs7Ozs7O0FBRUwsTUFBTUEseUJBQXlCQyxnQkFBTztJQUNuRCxZQUFZQyxPQUFPLEVBQUVDLFFBQVEsQ0FBRTtRQUM3QixLQUFLLENBQUNEO1FBRU4sSUFBSSxDQUFDQyxRQUFRLEdBQUdBO0lBQ2xCO0lBRUFDLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ0QsUUFBUTtJQUN0QjtJQUVBRSxtQkFBbUJDLFFBQVEsRUFBRTtRQUMzQixJQUFJQyxPQUFPO1FBRVgsSUFBSSxDQUFDSixRQUFRLENBQUNLLElBQUksQ0FBQyxDQUFDTjtZQUNsQkssT0FBT0wsUUFBUUcsa0JBQWtCLENBQUNDO1lBRWxDLElBQUlDLFNBQVMsTUFBTTtnQkFDakIsT0FBTztZQUNUO1FBQ0Y7UUFFQSxPQUFPQTtJQUNUO0lBRUFFLHFCQUFxQkMsU0FBUyxFQUFFO1FBQzlCLElBQUlDLFFBQVE7UUFFWixJQUFJLENBQUNSLFFBQVEsQ0FBQ0ssSUFBSSxDQUFDLENBQUNOO1lBQ2xCUyxRQUFRVCxRQUFRTyxvQkFBb0IsQ0FBQ0M7WUFFckMsSUFBSUMsVUFBVSxNQUFNO2dCQUNsQixPQUFPO1lBQ1Q7UUFDRjtRQUVBLE9BQU9BO0lBQ1Q7SUFFQSxPQUFPQyxhQUFhLEdBQUdULFFBQVEsRUFBRTtRQUMvQixNQUFNRCxVQUFVQyxTQUFTVSxHQUFHLElBQ3RCQyxtQkFBbUIsSUFBSWQsaUJBQWlCRSxTQUFTQztRQUV2RCxPQUFPVztJQUNUO0FBQ0YifQ==