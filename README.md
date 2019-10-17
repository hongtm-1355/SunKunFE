# Struture Folder (Updated 08/07/2019)

```
├── package.json
└── src
    ├── action
        ├── ...
        └── folderActions.js
    ├── components
        ├── Bar
            ├── Bar.js
            ├── bar.style.css
            └── index.js
    ├── constants
    ├── models
    ├── reducers
    ├── sagas
    ├── screens
    ├── selectors
    ├── services
    ├── store
    ├── ultiz
    ├── .........
    └── index.js
```

**action**: Chứa các file action

**components**: Chứa các file component có thể tái sử dụng, như component UI, component Private | Public Route.
  - Tất cả code được viết trong file js với tên dễ hiểu, có thể là `Bar.js`, trùng với tên folder cũng được
  - File `index.js` sẽ export ra file default của file `Bar.js`
  - File css cúng css-module đặt theo quy tắc `tênComponent.module.css`

**constants**: Chứa các file config không đổi, ví dụ dụ như tên actions, endpoint

**models**: Chứa giá trị defalt của một object nào đó, thường dùng cho form, validation

**reducers**: Chứa các reducers, thay đổi store by action

**sagas**: Chứa việc thực hiện các saga khi action được kích hoạt

**screens**: Chứa file chia theo từng màn hình
  - Tương tự component, tên component có dạng `componentNameScreen`
  - Khi sử dụng thì luôn có hậu tố Screen để dễ seach trên IDE.
**selectors**: Chứa file selector by state

**services**: Chứa service như axios, i18n

**store**: Chứa data store

**ultiz**: Chứa file tiện ích

P.s: Cấu trúc đặt tên của components và screen giống nhau

**Thứ tự import file**
  - Lib > services>Constant/Model/Utilz > Selector/Action > Project Component > StyleCss/Asset
  - Mỗi nhóm cách nhau một dòng trống
  - Xếp các import default lên đầu các import thành phần
  - Mỗi nhóm order theo độ dài của dòng.
