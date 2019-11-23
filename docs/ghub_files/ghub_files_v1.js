function ghub_sp_files(github_uname, repo, path, extension) {
var files_array = [];
  if(extension != null) {
      fetch(`https://api.github.com/repos/${github_uname}/${repo}/contents/${path}`)
          .then((resp) => resp.json())
          .then(function (data) {
              data.map(d => {
                    // CREATE AN ARRAY OF FILES
                    if(d.name.split('.').pop() === extension ) {
                        files_array.push({f_name: d.name,f_url: d.download_url});
                    }
                  })
              })
          return files_array;
  }
}

function ghub_all_files(github_uname, repo, path) {
var files_array = [];

    fetch(`https://api.github.com/repos/${github_uname}/${repo}/contents/${path}`)
        .then((resp) => resp.json())
        .then(function (data) {
            data.map(d => {
                  // CREATE AN ARRAY OF FILES
					          files_array.push({f_name: d.name,f_url: d.download_url});
                })
            })
        return files_array;
}
