document.body.onload = function template() {
  
let page = document.createElement('div');
page.innerHTML = `

<img id="banner" src="shelfbanner.jpg" alt="banner">
<img id="bannercover" src="shelfbanner.jpg" alt="bannercover">
<div id="page">
<div id="head" class="box"><h1>ㅤHeader</h1></div>
  <div id="nav" class="box"><b>sidebar</b><hr><a>item 1</a><a>item 2</a><a>item 3</a><a>item 4</a></div>
  <div id="content" class="box"><div id="markdown"></div></div>
  <div id="footer" class="box"><p>footer ᓚ₍ ^. .^₎</p></div>
</div>

`;
document.body.appendChild(page);

const content = document.getElementById("info").content.cloneNode(true); 
document.getElementById("markdown").appendChild(content); 
  
}
