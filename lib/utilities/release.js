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
var _default = {
    verifyRelease: verifyRelease
};
function verifyDependencyReleases(releaseContext, dependentName, dependentReleased, releaseContextMap) {
    var dependencies = releaseContext.getDependencies(), dependencyReleasesVVerified = dependencies.everyDependency(function(dependency) {
        var name = dependency.getName(), releaseName = name, releaseVerified = verifyRelease(releaseName, dependentName, dependentReleased, releaseContextMap);
        if (releaseVerified) {
            return true;
        }
    });
    return dependencyReleasesVVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gdmVyaWZ5UmVsZWFzZShyZWxlYXNlTmFtZSwgZGVwZW5kZW50TmFtZSwgZGVwZW5kZW50UmVsZWFzZWQsIHJlbGVhc2VDb250ZXh0TWFwKSB7XG4gIGxldCByZWxlYXNlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXTtcblxuICBpZiAocmVsZWFzZUNvbnRleHQgIT09IG51bGwpIHtcbiAgICBjb25zdCByZWxlYXNlZCA9IHJlbGVhc2VDb250ZXh0LmlzUmVsZWFzZWQoKTtcblxuICAgIGlmIChyZWxlYXNlZCkge1xuICAgICAgcmVsZWFzZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRlcGVuZGVudFJlbGVhc2VkKSB7XG4gICAgICAgIHJlbGVhc2VDb250ZXh0Lndhcm5pbmcoYFRoZSAnJHtyZWxlYXNlTmFtZX0nIHByb2plY3QgY2Fubm90IGJlIHZlcmlmaWVkIGJlY2F1c2UgaXRzICcke2RlcGVuZGVudE5hbWV9JyBkZXBlbmRlbnQgaXMgYSBwYWNrYWdlLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZGVwZW5kZW50TmFtZSA9IHJlbGVhc2VOYW1lLCAgLy8vXG4gICAgICAgICAgICAgIGRlcGVuZGVudFJlbGVhc2VkID0gcmVsZWFzZWQsIC8vL1xuICAgICAgICAgICAgICBkZXBlbmRlbmN5UmVsZWFzZXNWVmVyaWZpZWQgPSB2ZXJpZnlEZXBlbmRlbmN5UmVsZWFzZXMocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVudE5hbWUsIGRlcGVuZGVudFJlbGVhc2VkLCByZWxlYXNlQ29udGV4dE1hcCk7XG5cbiAgICAgICAgaWYgKGRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllZCkge1xuICAgICAgICAgIGxldCByZWxlYXNlQ29udGV4dFZlcmlmaWVkO1xuXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHRWZXJpZmllZCA9IHJlbGVhc2VDb250ZXh0LmlzVmVyaWZpZWQoKTtcblxuICAgICAgICAgIGlmICghcmVsZWFzZUNvbnRleHRWZXJpZmllZCkge1xuICAgICAgICAgICAgcmVsZWFzZUNvbnRleHQuaW5mbyhgVmVyaWZ5aW5nIHRoZSAnJHtyZWxlYXNlTmFtZX0nIHByb2plY3QuLi5gKTtcblxuICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRWZXJpZmllZCA9IHJlbGVhc2VDb250ZXh0LnZlcmlmeSgpO1xuXG4gICAgICAgICAgICBpZiAocmVsZWFzZUNvbnRleHRWZXJpZmllZCkge1xuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dC5pbmZvKGAuLi52ZXJpZmllZCB0aGUgJyR7cmVsZWFzZU5hbWV9JyBwcm9qZWN0LmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlbGVhc2VWZXJpZmllZCA9IHJlbGVhc2VDb250ZXh0VmVyaWZpZWQ7IC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlbGVhc2VWZXJpZmllZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICB2ZXJpZnlSZWxlYXNlXG59O1xuXG5mdW5jdGlvbiB2ZXJpZnlEZXBlbmRlbmN5UmVsZWFzZXMocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVudE5hbWUsIGRlcGVuZGVudFJlbGVhc2VkLCByZWxlYXNlQ29udGV4dE1hcCkge1xuICBjb25zdCBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKSxcbiAgICAgICAgZGVwZW5kZW5jeVJlbGVhc2VzVlZlcmlmaWVkID0gZGVwZW5kZW5jaWVzLmV2ZXJ5RGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICByZWxlYXNlTmFtZSA9IG5hbWUsIC8vL1xuICAgICAgICAgICAgICAgIHJlbGVhc2VWZXJpZmllZCA9IHZlcmlmeVJlbGVhc2UocmVsZWFzZU5hbWUsIGRlcGVuZGVudE5hbWUsIGRlcGVuZGVudFJlbGVhc2VkLCByZWxlYXNlQ29udGV4dE1hcCk7XG5cbiAgICAgICAgICBpZiAocmVsZWFzZVZlcmlmaWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBkZXBlbmRlbmN5UmVsZWFzZXNWVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5UmVsZWFzZSIsInJlbGVhc2VOYW1lIiwiZGVwZW5kZW50TmFtZSIsImRlcGVuZGVudFJlbGVhc2VkIiwicmVsZWFzZUNvbnRleHRNYXAiLCJyZWxlYXNlVmVyaWZpZWQiLCJyZWxlYXNlQ29udGV4dCIsInJlbGVhc2VkIiwiaXNSZWxlYXNlZCIsIndhcm5pbmciLCJkZXBlbmRlbmN5UmVsZWFzZXNWVmVyaWZpZWQiLCJ2ZXJpZnlEZXBlbmRlbmN5UmVsZWFzZXMiLCJyZWxlYXNlQ29udGV4dFZlcmlmaWVkIiwiaXNWZXJpZmllZCIsImluZm8iLCJ2ZXJpZnkiLCJkZXBlbmRlbmNpZXMiLCJnZXREZXBlbmRlbmNpZXMiLCJldmVyeURlcGVuZGVuY3kiLCJkZXBlbmRlbmN5IiwibmFtZSIsImdldE5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTRDQTs7O2VBQUE7OztBQTFDQSxTQUFTQSxjQUFjQyxXQUFXLEVBQUVDLGFBQWEsRUFBRUMsaUJBQWlCLEVBQUVDLGlCQUFpQjtJQUNyRixJQUFJQyxrQkFBa0I7SUFFdEIsSUFBTUMsaUJBQWlCRixpQkFBaUIsQ0FBQ0gsWUFBWTtJQUVyRCxJQUFJSyxtQkFBbUIsTUFBTTtRQUMzQixJQUFNQyxXQUFXRCxlQUFlRSxVQUFVO1FBRTFDLElBQUlELFVBQVU7WUFDWkYsa0JBQWtCO1FBQ3BCLE9BQU87WUFDTCxJQUFJRixtQkFBbUI7Z0JBQ3JCRyxlQUFlRyxPQUFPLENBQUMsQUFBQyxRQUErRFAsT0FBeERELGFBQVksOENBQTBELE9BQWRDLGVBQWM7WUFDdkcsT0FBTztnQkFDTCxJQUFNQSxrQkFBZ0JELGFBQ2hCRSxzQkFBb0JJLFVBQ3BCRyw4QkFBOEJDLHlCQUF5QkwsZ0JBQWdCSixpQkFBZUMscUJBQW1CQztnQkFFL0csSUFBSU0sNkJBQTZCO29CQUMvQixJQUFJRTtvQkFFSkEseUJBQXlCTixlQUFlTyxVQUFVO29CQUVsRCxJQUFJLENBQUNELHdCQUF3Qjt3QkFDM0JOLGVBQWVRLElBQUksQ0FBQyxBQUFDLGtCQUE2QixPQUFaYixhQUFZO3dCQUVsRFcseUJBQXlCTixlQUFlUyxNQUFNO3dCQUU5QyxJQUFJSCx3QkFBd0I7NEJBQzFCTixlQUFlUSxJQUFJLENBQUMsQUFBQyxvQkFBK0IsT0FBWmIsYUFBWTt3QkFDdEQ7b0JBQ0Y7b0JBRUFJLGtCQUFrQk8sd0JBQXdCLEdBQUc7Z0JBQy9DO1lBQ0Y7UUFDRjtJQUNGO0lBRUEsT0FBT1A7QUFDVDtJQUVBLFdBQWU7SUFDYkwsZUFBQUE7QUFDRjtBQUVBLFNBQVNXLHlCQUF5QkwsY0FBYyxFQUFFSixhQUFhLEVBQUVDLGlCQUFpQixFQUFFQyxpQkFBaUI7SUFDbkcsSUFBTVksZUFBZVYsZUFBZVcsZUFBZSxJQUM3Q1AsOEJBQThCTSxhQUFhRSxlQUFlLENBQUMsU0FBQ0M7UUFDMUQsSUFBTUMsT0FBT0QsV0FBV0UsT0FBTyxJQUN6QnBCLGNBQWNtQixNQUNkZixrQkFBa0JMLGNBQWNDLGFBQWFDLGVBQWVDLG1CQUFtQkM7UUFFckYsSUFBSUMsaUJBQWlCO1lBQ25CLE9BQU87UUFDVDtJQUNGO0lBRU4sT0FBT0s7QUFDVCJ9