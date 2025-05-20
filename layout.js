window.onload = function template() {

document.head.innerHTML += `
<script type="module" src="https://cdn.jsdelivr.net/npm/zero-md@3?register"></script>
<link rel="stylesheet" href="format.css">`;
  
let page = document.createElement('div');
page.innerHTML = `

<img id="banner" src="shelfbanner.jpg" alt="banner">
<img id="bannercover" src="shelfbanner.jpg" alt="bannercover">
<div id="page">
<div id="head" class="box"><h1>ㅤHeader</h1></div>
  <div id="nav" class="box"><b>sidebar</b><hr><p>item 1</p><p>item 2</p><p>item 3</p><p>item 4</p></div>
  <div id="content" class="box"></div>
  <div id="footer" class="box"><p>footer ᓚ₍ ^. .^₎</p></div>
</div>

`;
document.body.appendChild(page);

document.getElementByTagName("zero-md")[0].id = "info";
document.getElementById("info").innerHTML += `
      <template>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@highlightjs/cdn-assets@11/styles/github.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0/dist/katex.min.css">
        <link rel="stylesheet" href="format.css">
      </template>
`;
let clone = document.getElementById("info").cloneNode(true);
clone.id = "info2";
document.getElementById("content").appendChild(clone);

}
