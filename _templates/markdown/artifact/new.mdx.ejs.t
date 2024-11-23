---
to: <%= directory %>/<%= fileName %>.mdx
---

---
slug: artifact-template
title: Artifactテンプレート
sidebar_position: 1
---

import TOCInline from '@theme/TOCInline'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

一覧表示時に表示される概要

<!-- truncate -->

## 目次インライン

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={4} />

## Markdown

### Level 3 title

#### Level 4 title

## タブ

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>

## コードブロック

```jsx title="/src/components/HelloCodeTitle.js"
function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>
}
```

```js
console.log('Every repo must come with a mascot.')
```

### コードのハイライト

```js
function HighlightSomeText(highlight) {
  if (highlight) {
    // highlight-next-line
    return 'This text is highlighted!'
  }

  return 'Nothing highlighted'
}

function HighlightMoreText(highlight) {
  // highlight-start
  if (highlight) {
    return 'This range is highlighted!'
  }
  // highlight-end

  return 'Nothing highlighted'
}
;``
```

### ライブエディタ

```jsx live
function Clock(props) {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000)

    return function cleanup() {
      clearInterval(timerID)
    }
  })

  function tick() {
    setDate(new Date())
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  )
}
```

### 注記

:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::warning

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::
