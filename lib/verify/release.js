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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcmVsZWFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeUZpbGVzIGZyb20gXCIuLi92ZXJpZnkvZmlsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UmVsZWFzZShyZWxlYXNlTmFtZSwgcmVsZWFzZUNvbnRleHRNYXApIHtcbiAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0sXG4gICAgICAgIHZlcmlmaWVkID0gcmVsZWFzZUNvbnRleHQuaXNWZXJpZmllZCgpO1xuXG4gIGxldCByZWxlYXNlVmVyaWZpZWQgPSB2ZXJpZmllZDsgLy8vXG5cbiAgaWYgKCFyZWxlYXNlVmVyaWZpZWQpIHtcbiAgICByZWxlYXNlQ29udGV4dC5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHtyZWxlYXNlTmFtZX0nIHBhY2thZ2UuLi5gKTtcblxuICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllZCA9IHZlcmlmeURlcGVuZGVuY3lSZWxlYXNlcyhyZWxlYXNlQ29udGV4dCwgcmVsZWFzZUNvbnRleHRNYXApO1xuXG4gICAgaWYgKGRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllZCkge1xuICAgICAgY29uc3QgcmVsZWFzZUZpbGVzVmVyaWZpZWQgPSB2ZXJpZnlSZWxlYXNlRmlsZXMocmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICBpZiAocmVsZWFzZUZpbGVzVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgdmVyaWZpZWQgPSB0cnVlO1xuXG4gICAgICAgIHJlbGVhc2VWZXJpZmllZCA9IHRydWU7XG5cbiAgICAgICAgcmVsZWFzZUNvbnRleHQuc2V0VmVyaWZpZWQodmVyaWZpZWQpO1xuXG4gICAgICAgIHJlbGVhc2VDb250ZXh0LmluZm8oYFZlcmlmaWVkIHRoZSAnJHtyZWxlYXNlTmFtZX0nIHBhY2thZ2UuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlbGVhc2VWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5UmVsZWFzZUZpbGVzKHJlbGVhc2VDb250ZXh0KSB7XG4gIGNvbnN0IGZpbGVzVmVyaWZpZWQgPSB2ZXJpZnlGaWxlcyhyZWxlYXNlQ29udGV4dCksXG4gICAgICAgIHJlbGVhc2VGaWxlc1ZlcmlmaWVkID0gZmlsZXNWZXJpZmllZDsgLy8vXG5cbiAgcmV0dXJuIHJlbGVhc2VGaWxlc1ZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlEZXBlbmRlbmN5UmVsZWFzZXMocmVsZWFzZUNvbnRleHQsIHJlbGVhc2VDb250ZXh0TWFwKSB7XG4gIGNvbnN0IGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpLFxuICAgICAgICBkZXBlbmRlbmN5UmVsZWFzZXNWVmVyaWZpZWQgPSBkZXBlbmRlbmNpZXMuZXZlcnlEZXBlbmRlbmN5KChkZXBlbmRlbmN5KSA9PiB7XG4gICAgICAgICAgY29uc3QgbmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIHJlbGVhc2VOYW1lID0gbmFtZSwgLy8vXG4gICAgICAgICAgICAgICAgcmVsZWFzZVZlcmlmaWVkID0gdmVyaWZ5UmVsZWFzZShyZWxlYXNlTmFtZSwgcmVsZWFzZUNvbnRleHRNYXApO1xuXG4gICAgICAgICAgaWYgKHJlbGVhc2VWZXJpZmllZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICByZXR1cm4gZGVwZW5kZW5jeVJlbGVhc2VzVlZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVJlbGVhc2UiLCJyZWxlYXNlTmFtZSIsInJlbGVhc2VDb250ZXh0TWFwIiwicmVsZWFzZUNvbnRleHQiLCJ2ZXJpZmllZCIsImlzVmVyaWZpZWQiLCJyZWxlYXNlVmVyaWZpZWQiLCJkZWJ1ZyIsImRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllZCIsInZlcmlmeURlcGVuZGVuY3lSZWxlYXNlcyIsInJlbGVhc2VGaWxlc1ZlcmlmaWVkIiwidmVyaWZ5UmVsZWFzZUZpbGVzIiwic2V0VmVyaWZpZWQiLCJpbmZvIiwiZmlsZXNWZXJpZmllZCIsInZlcmlmeUZpbGVzIiwiZGVwZW5kZW5jaWVzIiwiZ2V0RGVwZW5kZW5jaWVzIiwiZXZlcnlEZXBlbmRlbmN5IiwiZGVwZW5kZW5jeSIsIm5hbWUiLCJnZXROYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXdCQTs7OzBEQUZBOzs7Ozs7QUFFVCxTQUFTQSxjQUFjQyxXQUFXLEVBQUVDLGlCQUFpQixFQUFFO0lBQ3BFLElBQU1DLGlCQUFpQkQsaUJBQWlCLENBQUNELFlBQVksRUFDL0NHLFdBQVdELGVBQWVFLFVBQVU7SUFFMUMsSUFBSUMsa0JBQWtCRixVQUFVLEdBQUc7SUFFbkMsSUFBSSxDQUFDRSxpQkFBaUI7UUFDcEJILGVBQWVJLEtBQUssQ0FBQyxBQUFDLGtCQUE2QixPQUFaTixhQUFZO1FBRW5ELElBQU1PLDhCQUE4QkMseUJBQXlCTixnQkFBZ0JEO1FBRTdFLElBQUlNLDZCQUE2QjtZQUMvQixJQUFNRSx1QkFBdUJDLG1CQUFtQlI7WUFFaEQsSUFBSU8sc0JBQXNCO2dCQUN4QixJQUFNTixZQUFXLElBQUk7Z0JBRXJCRSxrQkFBa0IsSUFBSTtnQkFFdEJILGVBQWVTLFdBQVcsQ0FBQ1I7Z0JBRTNCRCxlQUFlVSxJQUFJLENBQUMsQUFBQyxpQkFBNEIsT0FBWlosYUFBWTtZQUNuRCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxPQUFPSztBQUNUO0FBRUEsU0FBU0ssbUJBQW1CUixjQUFjLEVBQUU7SUFDMUMsSUFBTVcsZ0JBQWdCQyxJQUFBQSxjQUFXLEVBQUNaLGlCQUM1Qk8sdUJBQXVCSSxlQUFlLEdBQUc7SUFFL0MsT0FBT0o7QUFDVDtBQUVBLFNBQVNELHlCQUF5Qk4sY0FBYyxFQUFFRCxpQkFBaUIsRUFBRTtJQUNuRSxJQUFNYyxlQUFlYixlQUFlYyxlQUFlLElBQzdDVCw4QkFBOEJRLGFBQWFFLGVBQWUsQ0FBQyxTQUFDQyxZQUFlO1FBQ3pFLElBQU1DLE9BQU9ELFdBQVdFLE9BQU8sSUFDekJwQixjQUFjbUIsTUFDZGQsa0JBQWtCTixjQUFjQyxhQUFhQztRQUVuRCxJQUFJSSxpQkFBaUI7WUFDbkIsT0FBTyxJQUFJO1FBQ2IsQ0FBQztJQUNIO0lBRU4sT0FBT0U7QUFDVCJ9