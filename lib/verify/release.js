"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyRelease;
    }
});
function verifyRelease(releaseName, dependentName, dependentReleased, releaseContextMap) {
    var releaseVerified = false;
    var releaseContext = releaseContextMap[releaseName];
    if (releaseContext !== null) {
        var released = releaseContext.isReleased();
        if (released) {
            releaseVerified = true;
        } else {
            if (dependentReleased) {
                releaseContext.warning("The '".concat(releaseName, "' project cannot be verified because its '").concat(dependentName, "' dependent is a package."));
            } else {
                var _$dependentName = releaseName, _$dependentReleased = released, dependencyReleasesVVerified = verifyDependencyReleases(releaseContext, _$dependentName, _$dependentReleased, releaseContextMap);
                if (dependencyReleasesVVerified) {
                    var releaseContextVerified;
                    releaseContextVerified = releaseContext.isVerified();
                    if (!releaseContextVerified) {
                        releaseContext.info("Verifying the '".concat(releaseName, "' project..."));
                        releaseContextVerified = releaseContext.verify();
                        if (releaseContextVerified) {
                            releaseContext.info("...verified the '".concat(releaseName, "' project."));
                        }
                    }
                    releaseVerified = releaseContextVerified; ///
                }
            }
        }
    }
    return releaseVerified;
}
function verifyDependencyReleases(releaseContext, dependentName, dependentReleased, releaseContextMap) {
    var dependencies = releaseContext.getDependencies(), dependencyReleasesVVerified = dependencies.everyDependency(function(dependency) {
        var name = dependency.getName(), releaseName = name, releaseVerified = verifyRelease(releaseName, dependentName, dependentReleased, releaseContextMap);
        if (releaseVerified) {
            return true;
        }
    });
    return dependencyReleasesVVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcmVsZWFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UmVsZWFzZShyZWxlYXNlTmFtZSwgZGVwZW5kZW50TmFtZSwgZGVwZW5kZW50UmVsZWFzZWQsIHJlbGVhc2VDb250ZXh0TWFwKSB7XG4gIGxldCByZWxlYXNlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXTtcblxuICBpZiAocmVsZWFzZUNvbnRleHQgIT09IG51bGwpIHtcbiAgICBjb25zdCByZWxlYXNlZCA9IHJlbGVhc2VDb250ZXh0LmlzUmVsZWFzZWQoKTtcblxuICAgIGlmIChyZWxlYXNlZCkge1xuICAgICAgcmVsZWFzZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRlcGVuZGVudFJlbGVhc2VkKSB7XG4gICAgICAgIHJlbGVhc2VDb250ZXh0Lndhcm5pbmcoYFRoZSAnJHtyZWxlYXNlTmFtZX0nIHByb2plY3QgY2Fubm90IGJlIHZlcmlmaWVkIGJlY2F1c2UgaXRzICcke2RlcGVuZGVudE5hbWV9JyBkZXBlbmRlbnQgaXMgYSBwYWNrYWdlLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZGVwZW5kZW50TmFtZSA9IHJlbGVhc2VOYW1lLCAgLy8vXG4gICAgICAgICAgICAgIGRlcGVuZGVudFJlbGVhc2VkID0gcmVsZWFzZWQsIC8vL1xuICAgICAgICAgICAgICBkZXBlbmRlbmN5UmVsZWFzZXNWVmVyaWZpZWQgPSB2ZXJpZnlEZXBlbmRlbmN5UmVsZWFzZXMocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVudE5hbWUsIGRlcGVuZGVudFJlbGVhc2VkLCByZWxlYXNlQ29udGV4dE1hcCk7XG5cbiAgICAgICAgaWYgKGRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllZCkge1xuICAgICAgICAgIGxldCByZWxlYXNlQ29udGV4dFZlcmlmaWVkO1xuXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHRWZXJpZmllZCA9IHJlbGVhc2VDb250ZXh0LmlzVmVyaWZpZWQoKTtcblxuICAgICAgICAgIGlmICghcmVsZWFzZUNvbnRleHRWZXJpZmllZCkge1xuICAgICAgICAgICAgcmVsZWFzZUNvbnRleHQuaW5mbyhgVmVyaWZ5aW5nIHRoZSAnJHtyZWxlYXNlTmFtZX0nIHByb2plY3QuLi5gKTtcblxuICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRWZXJpZmllZCA9IHJlbGVhc2VDb250ZXh0LnZlcmlmeSgpO1xuXG4gICAgICAgICAgICBpZiAocmVsZWFzZUNvbnRleHRWZXJpZmllZCkge1xuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dC5pbmZvKGAuLi52ZXJpZmllZCB0aGUgJyR7cmVsZWFzZU5hbWV9JyBwcm9qZWN0LmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlbGVhc2VWZXJpZmllZCA9IHJlbGVhc2VDb250ZXh0VmVyaWZpZWQ7IC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlbGVhc2VWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RGVwZW5kZW5jeVJlbGVhc2VzKHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbnROYW1lLCBkZXBlbmRlbnRSZWxlYXNlZCwgcmVsZWFzZUNvbnRleHRNYXApIHtcbiAgY29uc3QgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCksXG4gICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllZCA9IGRlcGVuZGVuY2llcy5ldmVyeURlcGVuZGVuY3koKGRlcGVuZGVuY3kpID0+IHtcbiAgICAgICAgICBjb25zdCBuYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgcmVsZWFzZU5hbWUgPSBuYW1lLCAvLy9cbiAgICAgICAgICAgICAgICByZWxlYXNlVmVyaWZpZWQgPSB2ZXJpZnlSZWxlYXNlKHJlbGVhc2VOYW1lLCBkZXBlbmRlbnROYW1lLCBkZXBlbmRlbnRSZWxlYXNlZCwgcmVsZWFzZUNvbnRleHRNYXApO1xuXG4gICAgICAgICAgaWYgKHJlbGVhc2VWZXJpZmllZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICByZXR1cm4gZGVwZW5kZW5jeVJlbGVhc2VzVlZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVJlbGVhc2UiLCJyZWxlYXNlTmFtZSIsImRlcGVuZGVudE5hbWUiLCJkZXBlbmRlbnRSZWxlYXNlZCIsInJlbGVhc2VDb250ZXh0TWFwIiwicmVsZWFzZVZlcmlmaWVkIiwicmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlZCIsImlzUmVsZWFzZWQiLCJ3YXJuaW5nIiwiZGVwZW5kZW5jeVJlbGVhc2VzVlZlcmlmaWVkIiwidmVyaWZ5RGVwZW5kZW5jeVJlbGVhc2VzIiwicmVsZWFzZUNvbnRleHRWZXJpZmllZCIsImlzVmVyaWZpZWQiLCJpbmZvIiwidmVyaWZ5IiwiZGVwZW5kZW5jaWVzIiwiZ2V0RGVwZW5kZW5jaWVzIiwiZXZlcnlEZXBlbmRlbmN5IiwiZGVwZW5kZW5jeSIsIm5hbWUiLCJnZXROYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFFQTs7O2VBQXdCQTs7O0FBQVQsU0FBU0EsY0FBY0MsV0FBVyxFQUFFQyxhQUFhLEVBQUVDLGlCQUFpQixFQUFFQyxpQkFBaUI7SUFDcEcsSUFBSUMsa0JBQWtCO0lBRXRCLElBQU1DLGlCQUFpQkYsaUJBQWlCLENBQUNILFlBQVk7SUFFckQsSUFBSUssbUJBQW1CLE1BQU07UUFDM0IsSUFBTUMsV0FBV0QsZUFBZUUsVUFBVTtRQUUxQyxJQUFJRCxVQUFVO1lBQ1pGLGtCQUFrQjtRQUNwQixPQUFPO1lBQ0wsSUFBSUYsbUJBQW1CO2dCQUNyQkcsZUFBZUcsT0FBTyxDQUFDLEFBQUMsUUFBK0RQLE9BQXhERCxhQUFZLDhDQUEwRCxPQUFkQyxlQUFjO1lBQ3ZHLE9BQU87Z0JBQ0wsSUFBTUEsa0JBQWdCRCxhQUNoQkUsc0JBQW9CSSxVQUNwQkcsOEJBQThCQyx5QkFBeUJMLGdCQUFnQkosaUJBQWVDLHFCQUFtQkM7Z0JBRS9HLElBQUlNLDZCQUE2QjtvQkFDL0IsSUFBSUU7b0JBRUpBLHlCQUF5Qk4sZUFBZU8sVUFBVTtvQkFFbEQsSUFBSSxDQUFDRCx3QkFBd0I7d0JBQzNCTixlQUFlUSxJQUFJLENBQUMsQUFBQyxrQkFBNkIsT0FBWmIsYUFBWTt3QkFFbERXLHlCQUF5Qk4sZUFBZVMsTUFBTTt3QkFFOUMsSUFBSUgsd0JBQXdCOzRCQUMxQk4sZUFBZVEsSUFBSSxDQUFDLEFBQUMsb0JBQStCLE9BQVpiLGFBQVk7d0JBQ3REO29CQUNGO29CQUVBSSxrQkFBa0JPLHdCQUF3QixHQUFHO2dCQUMvQztZQUNGO1FBQ0Y7SUFDRjtJQUVBLE9BQU9QO0FBQ1Q7QUFFQSxTQUFTTSx5QkFBeUJMLGNBQWMsRUFBRUosYUFBYSxFQUFFQyxpQkFBaUIsRUFBRUMsaUJBQWlCO0lBQ25HLElBQU1ZLGVBQWVWLGVBQWVXLGVBQWUsSUFDN0NQLDhCQUE4Qk0sYUFBYUUsZUFBZSxDQUFDLFNBQUNDO1FBQzFELElBQU1DLE9BQU9ELFdBQVdFLE9BQU8sSUFDekJwQixjQUFjbUIsTUFDZGYsa0JBQWtCTCxjQUFjQyxhQUFhQyxlQUFlQyxtQkFBbUJDO1FBRXJGLElBQUlDLGlCQUFpQjtZQUNuQixPQUFPO1FBQ1Q7SUFDRjtJQUVOLE9BQU9LO0FBQ1QifQ==