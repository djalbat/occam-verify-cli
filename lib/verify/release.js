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
var _files = /*#__PURE__*/ _interopRequireDefault(require("../verify/files"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyRelease(releaseName, releaseContextMap) {
    var releaseContext = releaseContextMap[releaseName], verified = releaseContext.isVerified();
    var releaseVerified = verified; ///
    if (!releaseVerified) {
        releaseContext.debug("Verifying the '".concat(releaseName, "' package..."));
        var dependencyReleasesVVerified = verifyDependencyReleases(releaseContext, releaseContextMap);
        if (dependencyReleasesVVerified) {
            var releaseFilesVerified = verifyReleaseFiles(releaseContext);
            if (releaseFilesVerified) {
                releaseVerified = true;
            }
        }
    }
    if (releaseVerified) {
        var verified1 = true;
        releaseContext.setVerified(verified1);
        releaseContext.info("Verified the '".concat(releaseName, "' package."));
    }
    return releaseVerified;
}
function verifyReleaseFiles(releaseContext) {
    var filesVerified = (0, _files.default)(releaseContext), releaseFilesVerified = filesVerified; ///
    return releaseFilesVerified;
}
function verifyDependencyReleases(releaseContext, releaseContextMap) {
    var dependencies = releaseContext.getDependencies(), dependencyReleasesVVerified = dependencies.everyDependency(function(dependency) {
        var name = dependency.getName(), releaseName = name, releaseVerified = verifyRelease(releaseName, releaseContextMap);
        if (releaseVerified) {
            return true;
        }
    });
    return dependencyReleasesVVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcmVsZWFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeUZpbGVzIGZyb20gXCIuLi92ZXJpZnkvZmlsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UmVsZWFzZShyZWxlYXNlTmFtZSwgcmVsZWFzZUNvbnRleHRNYXApIHtcbiAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0sXG4gICAgICAgIHZlcmlmaWVkID0gcmVsZWFzZUNvbnRleHQuaXNWZXJpZmllZCgpO1xuXG4gIGxldCByZWxlYXNlVmVyaWZpZWQgPSB2ZXJpZmllZDsgLy8vXG5cbiAgaWYgKCFyZWxlYXNlVmVyaWZpZWQpIHtcbiAgICByZWxlYXNlQ29udGV4dC5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHtyZWxlYXNlTmFtZX0nIHBhY2thZ2UuLi5gKTtcblxuICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllZCA9IHZlcmlmeURlcGVuZGVuY3lSZWxlYXNlcyhyZWxlYXNlQ29udGV4dCwgcmVsZWFzZUNvbnRleHRNYXApO1xuXG4gICAgaWYgKGRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllZCkge1xuICAgICAgY29uc3QgcmVsZWFzZUZpbGVzVmVyaWZpZWQgPSB2ZXJpZnlSZWxlYXNlRmlsZXMocmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICBpZiAocmVsZWFzZUZpbGVzVmVyaWZpZWQpIHtcbiAgICAgICAgcmVsZWFzZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAocmVsZWFzZVZlcmlmaWVkKSB7XG4gICAgY29uc3QgdmVyaWZpZWQgPSB0cnVlO1xuXG4gICAgcmVsZWFzZUNvbnRleHQuc2V0VmVyaWZpZWQodmVyaWZpZWQpO1xuXG4gICAgcmVsZWFzZUNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlICcke3JlbGVhc2VOYW1lfScgcGFja2FnZS5gKTtcbiAgfVxuXG4gIHJldHVybiByZWxlYXNlVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVJlbGVhc2VGaWxlcyhyZWxlYXNlQ29udGV4dCkge1xuICBjb25zdCBmaWxlc1ZlcmlmaWVkID0gdmVyaWZ5RmlsZXMocmVsZWFzZUNvbnRleHQpLFxuICAgICAgICByZWxlYXNlRmlsZXNWZXJpZmllZCA9IGZpbGVzVmVyaWZpZWQ7IC8vL1xuXG4gIHJldHVybiByZWxlYXNlRmlsZXNWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RGVwZW5kZW5jeVJlbGVhc2VzKHJlbGVhc2VDb250ZXh0LCByZWxlYXNlQ29udGV4dE1hcCkge1xuICBjb25zdCBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKSxcbiAgICAgICAgZGVwZW5kZW5jeVJlbGVhc2VzVlZlcmlmaWVkID0gZGVwZW5kZW5jaWVzLmV2ZXJ5RGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICByZWxlYXNlTmFtZSA9IG5hbWUsIC8vL1xuICAgICAgICAgICAgICAgIHJlbGVhc2VWZXJpZmllZCA9IHZlcmlmeVJlbGVhc2UocmVsZWFzZU5hbWUsIHJlbGVhc2VDb250ZXh0TWFwKTtcblxuICAgICAgICAgIGlmIChyZWxlYXNlVmVyaWZpZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlSZWxlYXNlIiwicmVsZWFzZU5hbWUiLCJyZWxlYXNlQ29udGV4dE1hcCIsInJlbGVhc2VDb250ZXh0IiwidmVyaWZpZWQiLCJpc1ZlcmlmaWVkIiwicmVsZWFzZVZlcmlmaWVkIiwiZGVidWciLCJkZXBlbmRlbmN5UmVsZWFzZXNWVmVyaWZpZWQiLCJ2ZXJpZnlEZXBlbmRlbmN5UmVsZWFzZXMiLCJyZWxlYXNlRmlsZXNWZXJpZmllZCIsInZlcmlmeVJlbGVhc2VGaWxlcyIsInNldFZlcmlmaWVkIiwiaW5mbyIsImZpbGVzVmVyaWZpZWQiLCJ2ZXJpZnlGaWxlcyIsImRlcGVuZGVuY2llcyIsImdldERlcGVuZGVuY2llcyIsImV2ZXJ5RGVwZW5kZW5jeSIsImRlcGVuZGVuY3kiLCJuYW1lIiwiZ2V0TmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUF3QkE7OzswREFGQTs7Ozs7O0FBRVQsU0FBU0EsY0FBY0MsV0FBVyxFQUFFQyxpQkFBaUIsRUFBRTtJQUNwRSxJQUFNQyxpQkFBaUJELGlCQUFpQixDQUFDRCxZQUFZLEVBQy9DRyxXQUFXRCxlQUFlRSxVQUFVO0lBRTFDLElBQUlDLGtCQUFrQkYsVUFBVSxHQUFHO0lBRW5DLElBQUksQ0FBQ0UsaUJBQWlCO1FBQ3BCSCxlQUFlSSxLQUFLLENBQUMsQUFBQyxrQkFBNkIsT0FBWk4sYUFBWTtRQUVuRCxJQUFNTyw4QkFBOEJDLHlCQUF5Qk4sZ0JBQWdCRDtRQUU3RSxJQUFJTSw2QkFBNkI7WUFDL0IsSUFBTUUsdUJBQXVCQyxtQkFBbUJSO1lBRWhELElBQUlPLHNCQUFzQjtnQkFDeEJKLGtCQUFrQixJQUFJO1lBQ3hCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUlBLGlCQUFpQjtRQUNuQixJQUFNRixZQUFXLElBQUk7UUFFckJELGVBQWVTLFdBQVcsQ0FBQ1I7UUFFM0JELGVBQWVVLElBQUksQ0FBQyxBQUFDLGlCQUE0QixPQUFaWixhQUFZO0lBQ25ELENBQUM7SUFFRCxPQUFPSztBQUNUO0FBRUEsU0FBU0ssbUJBQW1CUixjQUFjLEVBQUU7SUFDMUMsSUFBTVcsZ0JBQWdCQyxJQUFBQSxjQUFXLEVBQUNaLGlCQUM1Qk8sdUJBQXVCSSxlQUFlLEdBQUc7SUFFL0MsT0FBT0o7QUFDVDtBQUVBLFNBQVNELHlCQUF5Qk4sY0FBYyxFQUFFRCxpQkFBaUIsRUFBRTtJQUNuRSxJQUFNYyxlQUFlYixlQUFlYyxlQUFlLElBQzdDVCw4QkFBOEJRLGFBQWFFLGVBQWUsQ0FBQyxTQUFDQyxZQUFlO1FBQ3pFLElBQU1DLE9BQU9ELFdBQVdFLE9BQU8sSUFDekJwQixjQUFjbUIsTUFDZGQsa0JBQWtCTixjQUFjQyxhQUFhQztRQUVuRCxJQUFJSSxpQkFBaUI7WUFDbkIsT0FBTyxJQUFJO1FBQ2IsQ0FBQztJQUNIO0lBRU4sT0FBT0U7QUFDVCJ9