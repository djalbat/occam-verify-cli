"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return _default;
    },
    get verifyRelease () {
        return verifyRelease;
    }
});
function verifyRelease(releaseName, dependentName, dependentReleased, releaseContextMap) {
    var releaseVerifies = false;
    var releaseContext = releaseContextMap[releaseName];
    if (releaseContext !== null) {
        var released = releaseContext.isReleased();
        if (released) {
            releaseVerifies = true;
        } else {
            if (dependentReleased) {
                releaseContext.warning("The '".concat(releaseName, "' project cannot be verifies because its '").concat(dependentName, "' dependent is a package."));
            } else {
                var _$dependentName = releaseName, _$dependentReleased = released, dependencyReleasesVVerifies = verifyDependencyReleases(releaseContext, _$dependentName, _$dependentReleased, releaseContextMap);
                if (dependencyReleasesVVerifies) {
                    var releaseContextVerified = releaseContext.isVerified();
                    if (releaseContextVerified) {
                        releaseVerifies = true;
                    } else {
                        releaseContext.info("Verifying the '".concat(releaseName, "' project..."));
                        var releaseContextVerifies = releaseContext.verify();
                        if (releaseContextVerifies) {
                            releaseContext.info("...verified the '".concat(releaseName, "' project."));
                            releaseVerifies = true;
                        }
                    }
                }
            }
        }
    }
    return releaseVerifies;
}
var _default = {
    verifyRelease: verifyRelease
};
function verifyDependencyReleases(releaseContext, dependentName, dependentReleased, releaseContextMap) {
    var dependencies = releaseContext.getDependencies(), dependencyReleasesVVerifies = dependencies.everyDependency(function(dependency) {
        var name = dependency.getName(), releaseName = name, releaseVerifies = verifyRelease(releaseName, dependentName, dependentReleased, releaseContextMap);
        if (releaseVerifies) {
            return true;
        }
    });
    return dependencyReleasesVVerifies;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVJlbGVhc2UocmVsZWFzZU5hbWUsIGRlcGVuZGVudE5hbWUsIGRlcGVuZGVudFJlbGVhc2VkLCByZWxlYXNlQ29udGV4dE1hcCkge1xuICBsZXQgcmVsZWFzZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV07XG5cbiAgaWYgKHJlbGVhc2VDb250ZXh0ICE9PSBudWxsKSB7XG4gICAgY29uc3QgcmVsZWFzZWQgPSByZWxlYXNlQ29udGV4dC5pc1JlbGVhc2VkKCk7XG5cbiAgICBpZiAocmVsZWFzZWQpIHtcbiAgICAgIHJlbGVhc2VWZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChkZXBlbmRlbnRSZWxlYXNlZCkge1xuICAgICAgICByZWxlYXNlQ29udGV4dC53YXJuaW5nKGBUaGUgJyR7cmVsZWFzZU5hbWV9JyBwcm9qZWN0IGNhbm5vdCBiZSB2ZXJpZmllcyBiZWNhdXNlIGl0cyAnJHtkZXBlbmRlbnROYW1lfScgZGVwZW5kZW50IGlzIGEgcGFja2FnZS5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRlcGVuZGVudE5hbWUgPSByZWxlYXNlTmFtZSwgIC8vL1xuICAgICAgICAgICAgICBkZXBlbmRlbnRSZWxlYXNlZCA9IHJlbGVhc2VkLCAvLy9cbiAgICAgICAgICAgICAgZGVwZW5kZW5jeVJlbGVhc2VzVlZlcmlmaWVzID0gdmVyaWZ5RGVwZW5kZW5jeVJlbGVhc2VzKHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbnROYW1lLCBkZXBlbmRlbnRSZWxlYXNlZCwgcmVsZWFzZUNvbnRleHRNYXApO1xuXG4gICAgICAgIGlmIChkZXBlbmRlbmN5UmVsZWFzZXNWVmVyaWZpZXMpIHtcbiAgICAgICAgICBjb25zdCByZWxlYXNlQ29udGV4dFZlcmlmaWVkID0gcmVsZWFzZUNvbnRleHQuaXNWZXJpZmllZCgpO1xuXG4gICAgICAgICAgaWYgKHJlbGVhc2VDb250ZXh0VmVyaWZpZWQpIHtcbiAgICAgICAgICAgIHJlbGVhc2VWZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0LmluZm8oYFZlcmlmeWluZyB0aGUgJyR7cmVsZWFzZU5hbWV9JyBwcm9qZWN0Li4uYCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0VmVyaWZpZXMgPSByZWxlYXNlQ29udGV4dC52ZXJpZnkoKTtcblxuICAgICAgICAgICAgaWYgKHJlbGVhc2VDb250ZXh0VmVyaWZpZXMpIHtcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHQuaW5mbyhgLi4udmVyaWZpZWQgdGhlICcke3JlbGVhc2VOYW1lfScgcHJvamVjdC5gKTtcblxuICAgICAgICAgICAgICByZWxlYXNlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWxlYXNlVmVyaWZpZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmVyaWZ5UmVsZWFzZVxufTtcblxuZnVuY3Rpb24gdmVyaWZ5RGVwZW5kZW5jeVJlbGVhc2VzKHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbnROYW1lLCBkZXBlbmRlbnRSZWxlYXNlZCwgcmVsZWFzZUNvbnRleHRNYXApIHtcbiAgY29uc3QgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCksXG4gICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllcyA9IGRlcGVuZGVuY2llcy5ldmVyeURlcGVuZGVuY3koKGRlcGVuZGVuY3kpID0+IHtcbiAgICAgICAgICBjb25zdCBuYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgcmVsZWFzZU5hbWUgPSBuYW1lLCAvLy9cbiAgICAgICAgICAgICAgICByZWxlYXNlVmVyaWZpZXMgPSB2ZXJpZnlSZWxlYXNlKHJlbGVhc2VOYW1lLCBkZXBlbmRlbnROYW1lLCBkZXBlbmRlbnRSZWxlYXNlZCwgcmVsZWFzZUNvbnRleHRNYXApO1xuXG4gICAgICAgICAgaWYgKHJlbGVhc2VWZXJpZmllcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICByZXR1cm4gZGVwZW5kZW5jeVJlbGVhc2VzVlZlcmlmaWVzO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVJlbGVhc2UiLCJyZWxlYXNlTmFtZSIsImRlcGVuZGVudE5hbWUiLCJkZXBlbmRlbnRSZWxlYXNlZCIsInJlbGVhc2VDb250ZXh0TWFwIiwicmVsZWFzZVZlcmlmaWVzIiwicmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlZCIsImlzUmVsZWFzZWQiLCJ3YXJuaW5nIiwiZGVwZW5kZW5jeVJlbGVhc2VzVlZlcmlmaWVzIiwidmVyaWZ5RGVwZW5kZW5jeVJlbGVhc2VzIiwicmVsZWFzZUNvbnRleHRWZXJpZmllZCIsImlzVmVyaWZpZWQiLCJpbmZvIiwicmVsZWFzZUNvbnRleHRWZXJpZmllcyIsInZlcmlmeSIsImRlcGVuZGVuY2llcyIsImdldERlcGVuZGVuY2llcyIsImV2ZXJ5RGVwZW5kZW5jeSIsImRlcGVuZGVuY3kiLCJuYW1lIiwiZ2V0TmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBNENBO2VBQUE7O1FBMUNnQkE7ZUFBQUE7OztBQUFULFNBQVNBLGNBQWNDLFdBQVcsRUFBRUMsYUFBYSxFQUFFQyxpQkFBaUIsRUFBRUMsaUJBQWlCO0lBQzVGLElBQUlDLGtCQUFrQjtJQUV0QixJQUFNQyxpQkFBaUJGLGlCQUFpQixDQUFDSCxZQUFZO0lBRXJELElBQUlLLG1CQUFtQixNQUFNO1FBQzNCLElBQU1DLFdBQVdELGVBQWVFLFVBQVU7UUFFMUMsSUFBSUQsVUFBVTtZQUNaRixrQkFBa0I7UUFDcEIsT0FBTztZQUNMLElBQUlGLG1CQUFtQjtnQkFDckJHLGVBQWVHLE9BQU8sQ0FBQyxBQUFDLFFBQStEUCxPQUF4REQsYUFBWSw4Q0FBMEQsT0FBZEMsZUFBYztZQUN2RyxPQUFPO2dCQUNMLElBQU1BLGtCQUFnQkQsYUFDaEJFLHNCQUFvQkksVUFDcEJHLDhCQUE4QkMseUJBQXlCTCxnQkFBZ0JKLGlCQUFlQyxxQkFBbUJDO2dCQUUvRyxJQUFJTSw2QkFBNkI7b0JBQy9CLElBQU1FLHlCQUF5Qk4sZUFBZU8sVUFBVTtvQkFFeEQsSUFBSUQsd0JBQXdCO3dCQUMxQlAsa0JBQWtCO29CQUNwQixPQUFPO3dCQUNMQyxlQUFlUSxJQUFJLENBQUMsQUFBQyxrQkFBNkIsT0FBWmIsYUFBWTt3QkFFbEQsSUFBTWMseUJBQXlCVCxlQUFlVSxNQUFNO3dCQUVwRCxJQUFJRCx3QkFBd0I7NEJBQzFCVCxlQUFlUSxJQUFJLENBQUMsQUFBQyxvQkFBK0IsT0FBWmIsYUFBWTs0QkFFcERJLGtCQUFrQjt3QkFDcEI7b0JBQ0Y7Z0JBQ0Y7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUO0lBRUEsV0FBZTtJQUNiTCxlQUFBQTtBQUNGO0FBRUEsU0FBU1cseUJBQXlCTCxjQUFjLEVBQUVKLGFBQWEsRUFBRUMsaUJBQWlCLEVBQUVDLGlCQUFpQjtJQUNuRyxJQUFNYSxlQUFlWCxlQUFlWSxlQUFlLElBQzdDUiw4QkFBOEJPLGFBQWFFLGVBQWUsQ0FBQyxTQUFDQztRQUMxRCxJQUFNQyxPQUFPRCxXQUFXRSxPQUFPLElBQ3pCckIsY0FBY29CLE1BQ2RoQixrQkFBa0JMLGNBQWNDLGFBQWFDLGVBQWVDLG1CQUFtQkM7UUFFckYsSUFBSUMsaUJBQWlCO1lBQ25CLE9BQU87UUFDVDtJQUNGO0lBRU4sT0FBT0s7QUFDVCJ9