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
    var releaseContext = releaseContextMap[releaseName];
    if (releaseContext === null) {
        return;
    }
    var verified = releaseContext.isVerified();
    var releaseVerified = verified; ///
    if (!releaseVerified) {
        releaseContext.debug("Verifying the '".concat(releaseName, "' package..."));
        var dependencyReleasesVVerified = verifyDependencyReleases(releaseContext, releaseContextMap);
        if (dependencyReleasesVVerified) {
            var releaseFilesVerified = verifyReleaseFiles(releaseContext);
            if (releaseFilesVerified) {
                var verified1 = true;
                releaseVerified = true;
                releaseContext.setVerified(verified1);
                releaseContext.info("Verified the '".concat(releaseName, "' package."));
            }
        }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcmVsZWFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeUZpbGVzIGZyb20gXCIuLi92ZXJpZnkvZmlsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UmVsZWFzZShyZWxlYXNlTmFtZSwgcmVsZWFzZUNvbnRleHRNYXApIHtcbiAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV07XG5cbiAgaWYgKHJlbGVhc2VDb250ZXh0ID09PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgdmVyaWZpZWQgPSByZWxlYXNlQ29udGV4dC5pc1ZlcmlmaWVkKCk7XG5cbiAgbGV0IHJlbGVhc2VWZXJpZmllZCA9IHZlcmlmaWVkOyAvLy9cblxuICBpZiAoIXJlbGVhc2VWZXJpZmllZCkge1xuICAgIHJlbGVhc2VDb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke3JlbGVhc2VOYW1lfScgcGFja2FnZS4uLmApO1xuXG4gICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VzVlZlcmlmaWVkID0gdmVyaWZ5RGVwZW5kZW5jeVJlbGVhc2VzKHJlbGVhc2VDb250ZXh0LCByZWxlYXNlQ29udGV4dE1hcCk7XG5cbiAgICBpZiAoZGVwZW5kZW5jeVJlbGVhc2VzVlZlcmlmaWVkKSB7XG4gICAgICBjb25zdCByZWxlYXNlRmlsZXNWZXJpZmllZCA9IHZlcmlmeVJlbGVhc2VGaWxlcyhyZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgIGlmIChyZWxlYXNlRmlsZXNWZXJpZmllZCkge1xuICAgICAgICBjb25zdCB2ZXJpZmllZCA9IHRydWU7XG5cbiAgICAgICAgcmVsZWFzZVZlcmlmaWVkID0gdHJ1ZTtcblxuICAgICAgICByZWxlYXNlQ29udGV4dC5zZXRWZXJpZmllZCh2ZXJpZmllZCk7XG5cbiAgICAgICAgcmVsZWFzZUNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlICcke3JlbGVhc2VOYW1lfScgcGFja2FnZS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlSZWxlYXNlRmlsZXMocmVsZWFzZUNvbnRleHQpIHtcbiAgY29uc3QgZmlsZXNWZXJpZmllZCA9IHZlcmlmeUZpbGVzKHJlbGVhc2VDb250ZXh0KSxcbiAgICAgICAgcmVsZWFzZUZpbGVzVmVyaWZpZWQgPSBmaWxlc1ZlcmlmaWVkOyAvLy9cblxuICByZXR1cm4gcmVsZWFzZUZpbGVzVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeURlcGVuZGVuY3lSZWxlYXNlcyhyZWxlYXNlQ29udGV4dCwgcmVsZWFzZUNvbnRleHRNYXApIHtcbiAgY29uc3QgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCksXG4gICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllZCA9IGRlcGVuZGVuY2llcy5ldmVyeURlcGVuZGVuY3koKGRlcGVuZGVuY3kpID0+IHtcbiAgICAgICAgICBjb25zdCBuYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgcmVsZWFzZU5hbWUgPSBuYW1lLCAvLy9cbiAgICAgICAgICAgICAgICByZWxlYXNlVmVyaWZpZWQgPSB2ZXJpZnlSZWxlYXNlKHJlbGVhc2VOYW1lLCByZWxlYXNlQ29udGV4dE1hcCk7XG5cbiAgICAgICAgICBpZiAocmVsZWFzZVZlcmlmaWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBkZXBlbmRlbmN5UmVsZWFzZXNWVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5UmVsZWFzZSIsInJlbGVhc2VOYW1lIiwicmVsZWFzZUNvbnRleHRNYXAiLCJyZWxlYXNlQ29udGV4dCIsInZlcmlmaWVkIiwiaXNWZXJpZmllZCIsInJlbGVhc2VWZXJpZmllZCIsImRlYnVnIiwiZGVwZW5kZW5jeVJlbGVhc2VzVlZlcmlmaWVkIiwidmVyaWZ5RGVwZW5kZW5jeVJlbGVhc2VzIiwicmVsZWFzZUZpbGVzVmVyaWZpZWQiLCJ2ZXJpZnlSZWxlYXNlRmlsZXMiLCJzZXRWZXJpZmllZCIsImluZm8iLCJmaWxlc1ZlcmlmaWVkIiwidmVyaWZ5RmlsZXMiLCJkZXBlbmRlbmNpZXMiLCJnZXREZXBlbmRlbmNpZXMiLCJldmVyeURlcGVuZGVuY3kiLCJkZXBlbmRlbmN5IiwibmFtZSIsImdldE5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBd0JBOzs7MERBRkE7Ozs7OztBQUVULFNBQVNBLGNBQWNDLFdBQVcsRUFBRUMsaUJBQWlCLEVBQUU7SUFDcEUsSUFBTUMsaUJBQWlCRCxpQkFBaUIsQ0FBQ0QsWUFBWTtJQUVyRCxJQUFJRSxtQkFBbUIsSUFBSSxFQUFFO1FBQzNCO0lBQ0YsQ0FBQztJQUVELElBQU1DLFdBQVdELGVBQWVFLFVBQVU7SUFFMUMsSUFBSUMsa0JBQWtCRixVQUFVLEdBQUc7SUFFbkMsSUFBSSxDQUFDRSxpQkFBaUI7UUFDcEJILGVBQWVJLEtBQUssQ0FBQyxBQUFDLGtCQUE2QixPQUFaTixhQUFZO1FBRW5ELElBQU1PLDhCQUE4QkMseUJBQXlCTixnQkFBZ0JEO1FBRTdFLElBQUlNLDZCQUE2QjtZQUMvQixJQUFNRSx1QkFBdUJDLG1CQUFtQlI7WUFFaEQsSUFBSU8sc0JBQXNCO2dCQUN4QixJQUFNTixZQUFXLElBQUk7Z0JBRXJCRSxrQkFBa0IsSUFBSTtnQkFFdEJILGVBQWVTLFdBQVcsQ0FBQ1I7Z0JBRTNCRCxlQUFlVSxJQUFJLENBQUMsQUFBQyxpQkFBNEIsT0FBWlosYUFBWTtZQUNuRCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxPQUFPSztBQUNUO0FBRUEsU0FBU0ssbUJBQW1CUixjQUFjLEVBQUU7SUFDMUMsSUFBTVcsZ0JBQWdCQyxJQUFBQSxjQUFXLEVBQUNaLGlCQUM1Qk8sdUJBQXVCSSxlQUFlLEdBQUc7SUFFL0MsT0FBT0o7QUFDVDtBQUVBLFNBQVNELHlCQUF5Qk4sY0FBYyxFQUFFRCxpQkFBaUIsRUFBRTtJQUNuRSxJQUFNYyxlQUFlYixlQUFlYyxlQUFlLElBQzdDVCw4QkFBOEJRLGFBQWFFLGVBQWUsQ0FBQyxTQUFDQyxZQUFlO1FBQ3pFLElBQU1DLE9BQU9ELFdBQVdFLE9BQU8sSUFDekJwQixjQUFjbUIsTUFDZGQsa0JBQWtCTixjQUFjQyxhQUFhQztRQUVuRCxJQUFJSSxpQkFBaUI7WUFDbkIsT0FBTyxJQUFJO1FBQ2IsQ0FBQztJQUNIO0lBRU4sT0FBT0U7QUFDVCJ9