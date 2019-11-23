# Github Repo Files Extractor

>Works on master repo only
```html
<script src="https://sharadcodes.github.io/cdn/ghub_files/ghub_files_v1.js"></script>
```

## How to use the functions:

**To get array of specifice type of files in the specific folder**

```js
ghub_sp_files("github_uname","repo","path","extension");
```

**Example**

```js
ghub_sp_files("sharadcodes","noob-cms","docs/images","png")
```
This returns 
```js
[
  {
    "f_name": "minimalistic-wallpapers-collection-GizmoAdvices-43.png",
    "f_url": "https://raw.githubusercontent.com/sharadcodes/noob-cms/master/docs/images/minimalistic-wallpapers-collection-GizmoAdvices-43.png"
  },
  {
    "f_name": "minimalistic-wallpapers-collection-GizmoAdvices-53.png",
    "f_url": "https://raw.githubusercontent.com/sharadcodes/noob-cms/master/docs/images/minimalistic-wallpapers-collection-GizmoAdvices-53.png"
  },
  {
    "f_name": "minimalistic-wallpapers-collection-GizmoAdvices-59.png",
    "f_url": "https://raw.githubusercontent.com/sharadcodes/noob-cms/master/docs/images/minimalistic-wallpapers-collection-GizmoAdvices-59.png"
  }
]
```

---

**To get array of all the images in the specific folder**

```js
ghub_all_files("github_uname","repo","path");
```

**Example**

```js
ghub_all_files("sharadcodes","noob-cms","docs/images")
```

This returns

```js
[
  {
    "f_name": "minimalistic-wallpapers-collection-GizmoAdvices-43.png",
    "f_url": "https://raw.githubusercontent.com/sharadcodes/noob-cms/master/docs/images/minimalistic-wallpapers-collection-GizmoAdvices-43.png"
  },
  {
    "f_name": "minimalistic-wallpapers-collection-GizmoAdvices-48.jpg",
    "f_url": "https://raw.githubusercontent.com/sharadcodes/noob-cms/master/docs/images/minimalistic-wallpapers-collection-GizmoAdvices-48.jpg"
  },
  {
    "f_name": "minimalistic-wallpapers-collection-GizmoAdvices-50.jpg",
    "f_url": "https://raw.githubusercontent.com/sharadcodes/noob-cms/master/docs/images/minimalistic-wallpapers-collection-GizmoAdvices-50.jpg"
  },
  {
    "f_name": "minimalistic-wallpapers-collection-GizmoAdvices-53.png",
    "f_url": "https://raw.githubusercontent.com/sharadcodes/noob-cms/master/docs/images/minimalistic-wallpapers-collection-GizmoAdvices-53.png"
  },
  {
    "f_name": "minimalistic-wallpapers-collection-GizmoAdvices-54.jpg",
    "f_url": "https://raw.githubusercontent.com/sharadcodes/noob-cms/master/docs/images/minimalistic-wallpapers-collection-GizmoAdvices-54.jpg"
  },
  {
    "f_name": "minimalistic-wallpapers-collection-GizmoAdvices-56.jpg",
    "f_url": "https://raw.githubusercontent.com/sharadcodes/noob-cms/master/docs/images/minimalistic-wallpapers-collection-GizmoAdvices-56.jpg"
  },
  {
    "f_name": "minimalistic-wallpapers-collection-GizmoAdvices-59.png",
    "f_url": "https://raw.githubusercontent.com/sharadcodes/noob-cms/master/docs/images/minimalistic-wallpapers-collection-GizmoAdvices-59.png"
  },
  {
    "f_name": "minimalistic-wallpapers-collection-GizmoAdvices-92.jpg",
    "f_url": "https://raw.githubusercontent.com/sharadcodes/noob-cms/master/docs/images/minimalistic-wallpapers-collection-GizmoAdvices-92.jpg"
  },
  {
    "f_name": "minimalistic-wallpapers-collection-GizmoAdvices-98.jpg",
    "f_url": "https://raw.githubusercontent.com/sharadcodes/noob-cms/master/docs/images/minimalistic-wallpapers-collection-GizmoAdvices-98.jpg"
  }
]
```
