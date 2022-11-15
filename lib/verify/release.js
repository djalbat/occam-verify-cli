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
    var releaseVerified = false;
    var releaseContext = releaseContextMap[releaseName];
    if (releaseContext !== null) {
        var dependencyReleasesVVerified = verifyDependencyReleases(releaseContext, releaseContextMap);
        if (dependencyReleasesVVerified) {
            var verified = releaseContext.isVerified();
            if (verified) {
                releaseVerified = true;
            } else {
                releaseContext.debug("Verifying the '".concat(releaseName, "' package..."));
                var releaseFilesVerified = verifyReleaseFiles(releaseContext);
                if (releaseFilesVerified) {
                    var verified1 = true;
                    releaseVerified = verified1;
                    releaseContext.setVerified(verified1);
                    releaseContext.info("Verified the '".concat(releaseName, "' package."));
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcmVsZWFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeUZpbGVzIGZyb20gXCIuLi92ZXJpZnkvZmlsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UmVsZWFzZShyZWxlYXNlTmFtZSwgcmVsZWFzZUNvbnRleHRNYXApIHtcbiAgbGV0IHJlbGVhc2VWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdO1xuXG4gIGlmIChyZWxlYXNlQ29udGV4dCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllZCA9IHZlcmlmeURlcGVuZGVuY3lSZWxlYXNlcyhyZWxlYXNlQ29udGV4dCwgcmVsZWFzZUNvbnRleHRNYXApO1xuXG4gICAgaWYgKGRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllZCkge1xuICAgICAgY29uc3QgdmVyaWZpZWQgPSByZWxlYXNlQ29udGV4dC5pc1ZlcmlmaWVkKCk7XG5cbiAgICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgICByZWxlYXNlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVsZWFzZUNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7cmVsZWFzZU5hbWV9JyBwYWNrYWdlLi4uYCk7XG5cbiAgICAgICAgY29uc3QgcmVsZWFzZUZpbGVzVmVyaWZpZWQgPSB2ZXJpZnlSZWxlYXNlRmlsZXMocmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICAgIGlmIChyZWxlYXNlRmlsZXNWZXJpZmllZCkge1xuICAgICAgICAgIGNvbnN0IHZlcmlmaWVkID0gdHJ1ZTtcblxuICAgICAgICAgIHJlbGVhc2VWZXJpZmllZCA9IHZlcmlmaWVkO1xuXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQuc2V0VmVyaWZpZWQodmVyaWZpZWQpO1xuXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlICcke3JlbGVhc2VOYW1lfScgcGFja2FnZS5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWxlYXNlVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVJlbGVhc2VGaWxlcyhyZWxlYXNlQ29udGV4dCkge1xuICBjb25zdCBmaWxlc1ZlcmlmaWVkID0gdmVyaWZ5RmlsZXMocmVsZWFzZUNvbnRleHQpLFxuICAgICAgICByZWxlYXNlRmlsZXNWZXJpZmllZCA9IGZpbGVzVmVyaWZpZWQ7IC8vL1xuXG4gIHJldHVybiByZWxlYXNlRmlsZXNWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RGVwZW5kZW5jeVJlbGVhc2VzKHJlbGVhc2VDb250ZXh0LCByZWxlYXNlQ29udGV4dE1hcCkge1xuICBjb25zdCBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKSxcbiAgICAgICAgZGVwZW5kZW5jeVJlbGVhc2VzVlZlcmlmaWVkID0gZGVwZW5kZW5jaWVzLmV2ZXJ5RGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICByZWxlYXNlTmFtZSA9IG5hbWUsIC8vL1xuICAgICAgICAgICAgICAgIHJlbGVhc2VWZXJpZmllZCA9IHZlcmlmeVJlbGVhc2UocmVsZWFzZU5hbWUsIHJlbGVhc2VDb250ZXh0TWFwKTtcblxuICAgICAgICAgIGlmIChyZWxlYXNlVmVyaWZpZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlSZWxlYXNlIiwicmVsZWFzZU5hbWUiLCJyZWxlYXNlQ29udGV4dE1hcCIsInJlbGVhc2VWZXJpZmllZCIsInJlbGVhc2VDb250ZXh0IiwiZGVwZW5kZW5jeVJlbGVhc2VzVlZlcmlmaWVkIiwidmVyaWZ5RGVwZW5kZW5jeVJlbGVhc2VzIiwidmVyaWZpZWQiLCJpc1ZlcmlmaWVkIiwiZGVidWciLCJyZWxlYXNlRmlsZXNWZXJpZmllZCIsInZlcmlmeVJlbGVhc2VGaWxlcyIsInNldFZlcmlmaWVkIiwiaW5mbyIsImZpbGVzVmVyaWZpZWQiLCJ2ZXJpZnlGaWxlcyIsImRlcGVuZGVuY2llcyIsImdldERlcGVuZGVuY2llcyIsImV2ZXJ5RGVwZW5kZW5jeSIsImRlcGVuZGVuY3kiLCJuYW1lIiwiZ2V0TmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUF3QkE7OzswREFGQTs7Ozs7O0FBRVQsU0FBU0EsY0FBY0MsV0FBVyxFQUFFQyxpQkFBaUIsRUFBRTtJQUNwRSxJQUFJQyxrQkFBa0IsS0FBSztJQUUzQixJQUFNQyxpQkFBaUJGLGlCQUFpQixDQUFDRCxZQUFZO0lBRXJELElBQUlHLG1CQUFtQixJQUFJLEVBQUU7UUFDM0IsSUFBTUMsOEJBQThCQyx5QkFBeUJGLGdCQUFnQkY7UUFFN0UsSUFBSUcsNkJBQTZCO1lBQy9CLElBQU1FLFdBQVdILGVBQWVJLFVBQVU7WUFFMUMsSUFBSUQsVUFBVTtnQkFDWkosa0JBQWtCLElBQUk7WUFDeEIsT0FBTztnQkFDTEMsZUFBZUssS0FBSyxDQUFDLEFBQUMsa0JBQTZCLE9BQVpSLGFBQVk7Z0JBRW5ELElBQU1TLHVCQUF1QkMsbUJBQW1CUDtnQkFFaEQsSUFBSU0sc0JBQXNCO29CQUN4QixJQUFNSCxZQUFXLElBQUk7b0JBRXJCSixrQkFBa0JJO29CQUVsQkgsZUFBZVEsV0FBVyxDQUFDTDtvQkFFM0JILGVBQWVTLElBQUksQ0FBQyxBQUFDLGlCQUE0QixPQUFaWixhQUFZO2dCQUNuRCxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsT0FBT0U7QUFDVDtBQUVBLFNBQVNRLG1CQUFtQlAsY0FBYyxFQUFFO0lBQzFDLElBQU1VLGdCQUFnQkMsSUFBQUEsY0FBVyxFQUFDWCxpQkFDNUJNLHVCQUF1QkksZUFBZSxHQUFHO0lBRS9DLE9BQU9KO0FBQ1Q7QUFFQSxTQUFTSix5QkFBeUJGLGNBQWMsRUFBRUYsaUJBQWlCLEVBQUU7SUFDbkUsSUFBTWMsZUFBZVosZUFBZWEsZUFBZSxJQUM3Q1osOEJBQThCVyxhQUFhRSxlQUFlLENBQUMsU0FBQ0MsWUFBZTtRQUN6RSxJQUFNQyxPQUFPRCxXQUFXRSxPQUFPLElBQ3pCcEIsY0FBY21CLE1BQ2RqQixrQkFBa0JILGNBQWNDLGFBQWFDO1FBRW5ELElBQUlDLGlCQUFpQjtZQUNuQixPQUFPLElBQUk7UUFDYixDQUFDO0lBQ0g7SUFFTixPQUFPRTtBQUNUIn0=