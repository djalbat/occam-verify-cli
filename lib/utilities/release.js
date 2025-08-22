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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gdmVyaWZ5UmVsZWFzZShyZWxlYXNlTmFtZSwgZGVwZW5kZW50TmFtZSwgZGVwZW5kZW50UmVsZWFzZWQsIHJlbGVhc2VDb250ZXh0TWFwKSB7XG4gIGxldCByZWxlYXNlVmVyaWZpZXMgPSBmYWxzZTtcblxuICBjb25zdCByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXTtcblxuICBpZiAocmVsZWFzZUNvbnRleHQgIT09IG51bGwpIHtcbiAgICBjb25zdCByZWxlYXNlZCA9IHJlbGVhc2VDb250ZXh0LmlzUmVsZWFzZWQoKTtcblxuICAgIGlmIChyZWxlYXNlZCkge1xuICAgICAgcmVsZWFzZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRlcGVuZGVudFJlbGVhc2VkKSB7XG4gICAgICAgIHJlbGVhc2VDb250ZXh0Lndhcm5pbmcoYFRoZSAnJHtyZWxlYXNlTmFtZX0nIHByb2plY3QgY2Fubm90IGJlIHZlcmlmaWVzIGJlY2F1c2UgaXRzICcke2RlcGVuZGVudE5hbWV9JyBkZXBlbmRlbnQgaXMgYSBwYWNrYWdlLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZGVwZW5kZW50TmFtZSA9IHJlbGVhc2VOYW1lLCAgLy8vXG4gICAgICAgICAgICAgIGRlcGVuZGVudFJlbGVhc2VkID0gcmVsZWFzZWQsIC8vL1xuICAgICAgICAgICAgICBkZXBlbmRlbmN5UmVsZWFzZXNWVmVyaWZpZXMgPSB2ZXJpZnlEZXBlbmRlbmN5UmVsZWFzZXMocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVudE5hbWUsIGRlcGVuZGVudFJlbGVhc2VkLCByZWxlYXNlQ29udGV4dE1hcCk7XG5cbiAgICAgICAgaWYgKGRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllcykge1xuICAgICAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0VmVyaWZpZWQgPSByZWxlYXNlQ29udGV4dC5pc1ZlcmlmaWVkKCk7XG5cbiAgICAgICAgICBpZiAocmVsZWFzZUNvbnRleHRWZXJpZmllZCkge1xuICAgICAgICAgICAgcmVsZWFzZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVsZWFzZUNvbnRleHQuaW5mbyhgVmVyaWZ5aW5nIHRoZSAnJHtyZWxlYXNlTmFtZX0nIHByb2plY3QuLi5gKTtcblxuICAgICAgICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRWZXJpZmllcyA9IHJlbGVhc2VDb250ZXh0LnZlcmlmeSgpO1xuXG4gICAgICAgICAgICBpZiAocmVsZWFzZUNvbnRleHRWZXJpZmllcykge1xuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dC5pbmZvKGAuLi52ZXJpZmllZCB0aGUgJyR7cmVsZWFzZU5hbWV9JyBwcm9qZWN0LmApO1xuXG4gICAgICAgICAgICAgIHJlbGVhc2VWZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlbGVhc2VWZXJpZmllcztcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICB2ZXJpZnlSZWxlYXNlXG59O1xuXG5mdW5jdGlvbiB2ZXJpZnlEZXBlbmRlbmN5UmVsZWFzZXMocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVudE5hbWUsIGRlcGVuZGVudFJlbGVhc2VkLCByZWxlYXNlQ29udGV4dE1hcCkge1xuICBjb25zdCBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKSxcbiAgICAgICAgZGVwZW5kZW5jeVJlbGVhc2VzVlZlcmlmaWVzID0gZGVwZW5kZW5jaWVzLmV2ZXJ5RGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICByZWxlYXNlTmFtZSA9IG5hbWUsIC8vL1xuICAgICAgICAgICAgICAgIHJlbGVhc2VWZXJpZmllcyA9IHZlcmlmeVJlbGVhc2UocmVsZWFzZU5hbWUsIGRlcGVuZGVudE5hbWUsIGRlcGVuZGVudFJlbGVhc2VkLCByZWxlYXNlQ29udGV4dE1hcCk7XG5cbiAgICAgICAgICBpZiAocmVsZWFzZVZlcmlmaWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBkZXBlbmRlbmN5UmVsZWFzZXNWVmVyaWZpZXM7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5UmVsZWFzZSIsInJlbGVhc2VOYW1lIiwiZGVwZW5kZW50TmFtZSIsImRlcGVuZGVudFJlbGVhc2VkIiwicmVsZWFzZUNvbnRleHRNYXAiLCJyZWxlYXNlVmVyaWZpZXMiLCJyZWxlYXNlQ29udGV4dCIsInJlbGVhc2VkIiwiaXNSZWxlYXNlZCIsIndhcm5pbmciLCJkZXBlbmRlbmN5UmVsZWFzZXNWVmVyaWZpZXMiLCJ2ZXJpZnlEZXBlbmRlbmN5UmVsZWFzZXMiLCJyZWxlYXNlQ29udGV4dFZlcmlmaWVkIiwiaXNWZXJpZmllZCIsImluZm8iLCJyZWxlYXNlQ29udGV4dFZlcmlmaWVzIiwidmVyaWZ5IiwiZGVwZW5kZW5jaWVzIiwiZ2V0RGVwZW5kZW5jaWVzIiwiZXZlcnlEZXBlbmRlbmN5IiwiZGVwZW5kZW5jeSIsIm5hbWUiLCJnZXROYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE0Q0E7OztlQUFBOzs7QUExQ0EsU0FBU0EsY0FBY0MsV0FBVyxFQUFFQyxhQUFhLEVBQUVDLGlCQUFpQixFQUFFQyxpQkFBaUI7SUFDckYsSUFBSUMsa0JBQWtCO0lBRXRCLElBQU1DLGlCQUFpQkYsaUJBQWlCLENBQUNILFlBQVk7SUFFckQsSUFBSUssbUJBQW1CLE1BQU07UUFDM0IsSUFBTUMsV0FBV0QsZUFBZUUsVUFBVTtRQUUxQyxJQUFJRCxVQUFVO1lBQ1pGLGtCQUFrQjtRQUNwQixPQUFPO1lBQ0wsSUFBSUYsbUJBQW1CO2dCQUNyQkcsZUFBZUcsT0FBTyxDQUFDLEFBQUMsUUFBK0RQLE9BQXhERCxhQUFZLDhDQUEwRCxPQUFkQyxlQUFjO1lBQ3ZHLE9BQU87Z0JBQ0wsSUFBTUEsa0JBQWdCRCxhQUNoQkUsc0JBQW9CSSxVQUNwQkcsOEJBQThCQyx5QkFBeUJMLGdCQUFnQkosaUJBQWVDLHFCQUFtQkM7Z0JBRS9HLElBQUlNLDZCQUE2QjtvQkFDL0IsSUFBTUUseUJBQXlCTixlQUFlTyxVQUFVO29CQUV4RCxJQUFJRCx3QkFBd0I7d0JBQzFCUCxrQkFBa0I7b0JBQ3BCLE9BQU87d0JBQ0xDLGVBQWVRLElBQUksQ0FBQyxBQUFDLGtCQUE2QixPQUFaYixhQUFZO3dCQUVsRCxJQUFNYyx5QkFBeUJULGVBQWVVLE1BQU07d0JBRXBELElBQUlELHdCQUF3Qjs0QkFDMUJULGVBQWVRLElBQUksQ0FBQyxBQUFDLG9CQUErQixPQUFaYixhQUFZOzRCQUVwREksa0JBQWtCO3dCQUNwQjtvQkFDRjtnQkFDRjtZQUNGO1FBQ0Y7SUFDRjtJQUVBLE9BQU9BO0FBQ1Q7SUFFQSxXQUFlO0lBQ2JMLGVBQUFBO0FBQ0Y7QUFFQSxTQUFTVyx5QkFBeUJMLGNBQWMsRUFBRUosYUFBYSxFQUFFQyxpQkFBaUIsRUFBRUMsaUJBQWlCO0lBQ25HLElBQU1hLGVBQWVYLGVBQWVZLGVBQWUsSUFDN0NSLDhCQUE4Qk8sYUFBYUUsZUFBZSxDQUFDLFNBQUNDO1FBQzFELElBQU1DLE9BQU9ELFdBQVdFLE9BQU8sSUFDekJyQixjQUFjb0IsTUFDZGhCLGtCQUFrQkwsY0FBY0MsYUFBYUMsZUFBZUMsbUJBQW1CQztRQUVyRixJQUFJQyxpQkFBaUI7WUFDbkIsT0FBTztRQUNUO0lBQ0Y7SUFFTixPQUFPSztBQUNUIn0=