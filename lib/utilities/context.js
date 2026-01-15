"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "contextFromString", {
    enumerable: true,
    get: function() {
        return contextFromString;
    }
});
var _metaTypes = require("../metaTypes");
function contextFromString(string) {
    var context = {
        nodeAsString: function() {
            return string;
        },
        getMetaTypes: function() {
            return (0, _metaTypes.getMetaTypes)();
        },
        findMetaTypeByMetaTypeName: function findMetaTypeByMetaTypeName(metaTypeName) {
            var metaTypes = this.getMetaTypes(), metaType = metaTypes.find(function(metaType) {
                var metaTypeComparesToMetaTypeName = metaType.compareMetaTypeName(metaTypeName);
                if (metaTypeComparesToMetaTypeName) {
                    return true;
                }
            }) || null;
            return metaType;
        }
    };
    return context;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZ2V0TWV0YVR5cGVzIH0gZnJvbSBcIi4uL21ldGFUeXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29udGV4dEZyb21TdHJpbmcoc3RyaW5nKSB7XG4gIGNvbnN0IGNvbnRleHQgPSB7XG4gICAgbm9kZUFzU3RyaW5nOiAoKSA9PiBzdHJpbmcsXG4gICAgZ2V0TWV0YVR5cGVzOiAoKSA9PiBnZXRNZXRhVHlwZXMoKSxcbiAgICBmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpIHtcbiAgICAgIGNvbnN0IG1ldGFUeXBlcyA9IHRoaXMuZ2V0TWV0YVR5cGVzKCksXG4gICAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlcy5maW5kKChtZXRhVHlwZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBtZXRhVHlwZUNvbXBhcmVzVG9NZXRhVHlwZU5hbWUgPSBtZXRhVHlwZS5jb21wYXJlTWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7XG5cbiAgICAgICAgICAgICAgaWYgKG1ldGFUeXBlQ29tcGFyZXNUb01ldGFUeXBlTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgICByZXR1cm4gbWV0YVR5cGU7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBjb250ZXh0O1xufVxuIl0sIm5hbWVzIjpbImNvbnRleHRGcm9tU3RyaW5nIiwic3RyaW5nIiwiY29udGV4dCIsIm5vZGVBc1N0cmluZyIsImdldE1ldGFUeXBlcyIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwibWV0YVR5cGVzIiwibWV0YVR5cGUiLCJmaW5kIiwibWV0YVR5cGVDb21wYXJlc1RvTWV0YVR5cGVOYW1lIiwiY29tcGFyZU1ldGFUeXBlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSWdCQTs7O2VBQUFBOzs7eUJBRmE7QUFFdEIsU0FBU0Esa0JBQWtCQyxNQUFNO0lBQ3RDLElBQU1DLFVBQVU7UUFDZEMsY0FBYzttQkFBTUY7O1FBQ3BCRyxjQUFjO21CQUFNQSxJQUFBQSx1QkFBWTs7UUFDaENDLDRCQUFBQSxTQUFBQSwyQkFBMkJDLFlBQVk7WUFDckMsSUFBTUMsWUFBWSxJQUFJLENBQUNILFlBQVksSUFDN0JJLFdBQVdELFVBQVVFLElBQUksQ0FBQyxTQUFDRDtnQkFDekIsSUFBTUUsaUNBQWlDRixTQUFTRyxtQkFBbUIsQ0FBQ0w7Z0JBRXBFLElBQUlJLGdDQUFnQztvQkFDbEMsT0FBTztnQkFDVDtZQUNGLE1BQU07WUFFWixPQUFPRjtRQUNUO0lBQ0Y7SUFFQSxPQUFPTjtBQUNUIn0=