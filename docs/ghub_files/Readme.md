# Github Repo Files Extractor

>Works on master repo only



## How to use the functions:

**To get array of specifice type of files in the specific folder**

```js
ghub_sp_files("github_uname", "repo", "path", "extension");
```

**Example**

```js
ghub_sp_files("sharadcodes","noob-cms", "docs/images", "png")
```

---

**To get array of all the images in the specific folder**

```js
ghub_all_files(github_uname, repo, path);
```

**Example**

```js
function ghub_all_files("sharadcodes","noob-cms", "docs/images")
```
