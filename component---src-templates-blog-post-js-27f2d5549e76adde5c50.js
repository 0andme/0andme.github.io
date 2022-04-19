"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[989],{1109:function(t,e,a){var i=a(6771),n=(a(7294),a(1597)),o=a(396),l=a(3431);var r=(0,i.Z)("div",{target:"eoq58lc1"})({name:"v7309v",styles:"display:flex;height:fit-content;flex-wrap:wrap"}),s=(0,i.Z)("div",{target:"eoq58lc0"})({name:"16htrqv",styles:"padding:5px 0;display:flex;flex-direction:column;justify-content:space-between;flex-wrap:wrap;a{text-decoration:none;}.name{display:flex;align-items:center;flex-wrap:wrap;gap:4px;font-weight:700;font-size:1.1em;}.aboutTag{padding:8px 10px;border-radius:10px;color:#fff;background-color:rgba(240, 62, 62, 0.8);font-weight:900;&:hover{border-color:var(--deepPink);background-color:rgba(240, 62, 62, 0.6);}}.link{width:fit-content;display:flex;align-items:center;gap:4px;color:var(--black);padding:4px 0;border-radius:10px;.logo{width:20px;}&:hover{background-color:#ced4da;padding:4px;}}"});e.Z=function(){var t,e,i,c=(0,n.useStaticQuery)("3284135133"),d=null===(t=c.site.siteMetadata)||void 0===t?void 0:t.author,p=null===(e=c.site.siteMetadata)||void 0===e?void 0:e.social,f=null===(i=c.site.siteMetadata)||void 0===i?void 0:i.description;return(0,l.tZ)(r,null,(0,l.tZ)(o.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../../images/profile.jpeg",width:100,height:100,quality:95,alt:"Profile picture",__imageData:a(3402)}),(null==d?void 0:d.name)&&(0,l.tZ)(s,null,(0,l.tZ)("div",{className:"name"},(null==d?void 0:d.summary)||null," ",(0,l.tZ)(n.Link,{className:"aboutTag",to:"/about"},"@",d.name)),(0,l.tZ)("div",null,f),(0,l.tZ)("a",{className:"link",href:""+((null==p?void 0:p.github)||"")},(0,l.tZ)(o.S,{className:"logo",formats:["auto","webp","avif"],src:"../../images/github_logo.png",quality:95,alt:"Profile picture",__imageData:a(9404)}),(0,l.tZ)("span",null,"Github"))))}},7427:function(t,e,a){a.r(e),a.d(e,{default:function(){return v}});var i=a(7294),n=a(4139),o=a(262),l=a(1109),r=a(9423),s=a(1597),c=a(3431);var d={name:"lgnwvv",styles:'font-family:"Nanum Gothic",sans-serif;ul{margin:var(--spacing-0);display:flex;justify-content:space-between;gap:30px;list-style:none;padding:0;li{width:calc(50% - 30px);&.prev{text-align:start;}&.next{text-align:end;}a{display:flex;flex-direction:column;color:var(--black);width:100%;text-decoration:none;span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}&:hover{color:var(--primary);}}}}'},p=function(t){var e=t.prev,a=t.next;return(0,c.tZ)("nav",{css:d},(0,c.tZ)("ul",null,(0,c.tZ)("li",{className:"prev"},e&&(0,c.tZ)(s.Link,{to:e.fields.slug,rel:"prev"},(0,c.tZ)("span",null,"⬅️ 이전 글"),(0,c.tZ)("span",null,e.frontmatter.title))),(0,c.tZ)("li",{className:"next"},a&&(0,c.tZ)(s.Link,{to:a.fields.slug,rel:"next"},(0,c.tZ)("span",null,"다음 글 ➡️"),(0,c.tZ)("span",null," ",a.frontmatter.title)))))},f=a(7131),g=a(6771);var u=function(t){var e=t.content,a=(0,i.useState)(!1),n=a[0],o=a[1];return(0,c.tZ)(m,null,(0,c.tZ)(b,{$toggle:n,onClick:function(){return o(!n)}},n?"목차":"목차 보기"),(0,c.tZ)("div",{className:"tocList "+(n?"open":"close"),dangerouslySetInnerHTML:{__html:e}}))},b=(0,g.Z)("button",{target:"e1diuw481"})("background-color:var(--deepPink);color:#fff;font-weight:700;margin:0;width:",(function(t){if(t.$toggle)return"100%"}),";border:none;border-radius:12px;padding:10px;"),m=(0,g.Z)("div",{target:"e1diuw480"})({name:"10e70zr",styles:"position:fixed;top:12vh;right:0;bottom:0;margin-top:var(--spacing-12);padding:var(--spacing-10) var(--spacing-5);.tocList{ul{list-style:none;}a{color:var(--black);text-decoration:none;}}.open{display:block;}.close{display:none;}"}),v=function(t){var e,a=t.data,s=t.location,d=a.markdownRemark,g=(null===(e=a.site.siteMetadata)||void 0===e?void 0:e.title)||"Title",b=a.previous,m=a.next,v=a.markdownRemark.frontmatter.categories;return(0,c.tZ)(i.Fragment,null,(0,c.tZ)(r.Z,{isMain:!1}),(0,c.tZ)(n.Z,{location:s,title:g},(0,c.tZ)(o.Z,{title:d.frontmatter.title,description:d.frontmatter.description||d.excerpt}),(0,c.tZ)("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},(0,c.tZ)("header",null,(0,c.tZ)("h1",{itemProp:"headline"},d.frontmatter.title),(0,c.tZ)("h5",{className:"des"},d.frontmatter.description),(0,c.tZ)("span",{className:"date"},d.frontmatter.date),v&&(0,c.tZ)(f.Z,{cateList:v})," "),(0,c.tZ)("section",{dangerouslySetInnerHTML:{__html:d.html},itemProp:"articleBody"}),(0,c.tZ)("hr",null),(0,c.tZ)("footer",null,(0,c.tZ)(l.Z,null))),(0,c.tZ)(p,{prev:b,next:m}),(0,c.tZ)(u,{content:a.markdownRemark.tableOfContents})))}},3402:function(t){t.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#888888","images":{"fallback":{"src":"/static/12774eb2fb9da9ab43e187e9101d3098/64618/profile.jpg","srcSet":"/static/12774eb2fb9da9ab43e187e9101d3098/64618/profile.jpg 100w,\\n/static/12774eb2fb9da9ab43e187e9101d3098/cc10e/profile.jpg 200w","sizes":"100px"},"sources":[{"srcSet":"/static/12774eb2fb9da9ab43e187e9101d3098/ee81f/profile.avif 100w,\\n/static/12774eb2fb9da9ab43e187e9101d3098/3f23b/profile.avif 200w","type":"image/avif","sizes":"100px"},{"srcSet":"/static/12774eb2fb9da9ab43e187e9101d3098/6a679/profile.webp 100w,\\n/static/12774eb2fb9da9ab43e187e9101d3098/c0761/profile.webp 200w","type":"image/webp","sizes":"100px"}]},"width":100,"height":100}')},9404:function(t){t.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/f8890174352a84682d70c58a5506c8fa/c2a01/github_logo.png","srcSet":"/static/f8890174352a84682d70c58a5506c8fa/b6386/github_logo.png 27w,\\n/static/f8890174352a84682d70c58a5506c8fa/b6ee4/github_logo.png 54w,\\n/static/f8890174352a84682d70c58a5506c8fa/c2a01/github_logo.png 108w","sizes":"(min-width: 108px) 108px, 100vw"},"sources":[{"srcSet":"/static/f8890174352a84682d70c58a5506c8fa/cb549/github_logo.avif 27w,\\n/static/f8890174352a84682d70c58a5506c8fa/a3631/github_logo.avif 54w,\\n/static/f8890174352a84682d70c58a5506c8fa/13161/github_logo.avif 108w","type":"image/avif","sizes":"(min-width: 108px) 108px, 100vw"},{"srcSet":"/static/f8890174352a84682d70c58a5506c8fa/66235/github_logo.webp 27w,\\n/static/f8890174352a84682d70c58a5506c8fa/62ece/github_logo.webp 54w,\\n/static/f8890174352a84682d70c58a5506c8fa/71702/github_logo.webp 108w","type":"image/webp","sizes":"(min-width: 108px) 108px, 100vw"}]},"width":108,"height":111}')}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-27f2d5549e76adde5c50.js.map