<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <ul>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
    </ul>
    <ol>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
    </ol>
    <ol>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
    </ol>
  </div>
</template>
<style lang="less">
.about {
  counter-reset: subsection;
  h1:before {
    color: @primary;
    counter-increment: subsection;
    content: counter(subsection) '-----';
  }
  ul {
    li {
      &::marker {
        content: '-----';
      }
    }
  }
  ol {
    li::marker {
      content: counter() '-----';
    }
  }
}
</style>
