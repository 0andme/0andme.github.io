"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{1109:function(t,e,a){var i=a(6771),o=(a(7294),a(1597)),l=a(396),r=a(3431);var n=(0,i.Z)("div",{target:"eoq58lc1"})({name:"v7309v",styles:"display:flex;height:fit-content;flex-wrap:wrap"}),s=(0,i.Z)("div",{target:"eoq58lc0"})({name:"16htrqv",styles:"padding:5px 0;display:flex;flex-direction:column;justify-content:space-between;flex-wrap:wrap;a{text-decoration:none;}.name{display:flex;align-items:center;flex-wrap:wrap;gap:4px;font-weight:700;font-size:1.1em;}.aboutTag{padding:8px 10px;border-radius:10px;color:#fff;background-color:rgba(240, 62, 62, 0.8);font-weight:900;&:hover{border-color:var(--deepPink);background-color:rgba(240, 62, 62, 0.6);}}.link{width:fit-content;display:flex;align-items:center;gap:4px;color:var(--black);padding:4px 0;border-radius:10px;.logo{width:20px;}&:hover{background-color:#ced4da;padding:4px;}}"});e.Z=function(){var t,e,i,c=(0,o.useStaticQuery)("3284135133"),u=null===(t=c.site.siteMetadata)||void 0===t?void 0:t.author,d=null===(e=c.site.siteMetadata)||void 0===e?void 0:e.social,p=null===(i=c.site.siteMetadata)||void 0===i?void 0:i.description;return(0,r.tZ)(n,null,(0,r.tZ)(l.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../../images/profile.jpeg",width:100,height:100,quality:95,alt:"Profile picture",__imageData:a(3402)}),(null==u?void 0:u.name)&&(0,r.tZ)(s,null,(0,r.tZ)("div",{className:"name"},(null==u?void 0:u.summary)||null," ",(0,r.tZ)(o.Link,{className:"aboutTag",to:"/about"},"@",u.name)),(0,r.tZ)("div",null,p),(0,r.tZ)("a",{className:"link",href:""+((null==d?void 0:d.github)||"")},(0,r.tZ)(l.S,{className:"logo",formats:["auto","webp","avif"],src:"../../images/github_logo.png",quality:95,alt:"Profile picture",__imageData:a(9404)}),(0,r.tZ)("span",null,"Github"))))}},2053:function(t,e,a){a.d(e,{Z:function(){return c}});a(7294);var i=a(1597),o=a(7131),l=a(3431);var r={name:"1tjsd7x",styles:"margin:0;border-bottom:2px solid var(--lightGray);&:last-child{border:none;}.post-list-item{margin:20px 0 16px;}header{margin:0;.title{color:rgba(33, 37, 41, 0.8);display:inline-block;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-decoration:none;font-size:2em;font-weight:700;&:hover{color:var(--primary);}}}"},n=function(t){var e=t.post,a=e.frontmatter.title||e.fields.slug;return(0,l.tZ)("li",{css:r},(0,l.tZ)("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},(0,l.tZ)("header",null,(0,l.tZ)(i.Link,{className:"title",to:e.fields.slug,itemProp:"url"},a)),(0,l.tZ)("small",null,e.frontmatter.date),(0,l.tZ)("section",null,(0,l.tZ)("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"})),(0,l.tZ)(o.Z,{cateList:e.frontmatter.categories})))};var s={name:"qr8q5p",styles:"list-style:none"},c=function(t){var e=t.subCate,a=t.selectCate,i=t.posts;if("All"===a)return(0,l.tZ)("ol",{css:s},i.map((function(t){return(0,l.tZ)(n,{key:t.fields.slug,post:t})})));var o=[];return o=e?i.filter((function(t){var i,o;return(null===(i=t.frontmatter.categories)||void 0===i?void 0:i.find((function(t){return t===a})))&&(null===(o=t.frontmatter.subCategories)||void 0===o?void 0:o.find((function(t){return t===e})))})):i.filter((function(t){var e;return null===(e=t.frontmatter.categories)||void 0===e?void 0:e.find((function(t){return t===a}))})),(0,l.tZ)("ol",{css:s},o.map((function(t){return(0,l.tZ)(n,{key:t.fields.slug,post:t})})))}},8302:function(t,e,a){a.r(e),a.d(e,{default:function(){return h}});var i=a(7294),o=a(4139),l=a(262),r=a(1109),n=a(9423),s=a(1597),c=a(3431);var u={name:"xeomjl",styles:"cursor:pointer;font-weight:700;color:var(--black);margin:0;padding:5px 16px;border-radius:12px;border:none;box-shadow:0 1px 1px rgb(0 0 0 / 10%);background-color:var(--lighterGray);&:hover{background-color:var(--lightGray);}&.isSelect{background-color:#fff;border:2px solid var(--primary);}.totalNum{opacity:0.5;}"},d=function(t){var e=t.item,a=t.selectCate,i=t.setSelectCate,o=t.setSubCate,l=e.fieldValue,r=e.totalCount;return(0,c.tZ)("button",{type:"button",className:e.fieldValue===a?"isSelect":"",onClick:function(){o(""),i(e.fieldValue)},css:u},l.replace(/^./,l[0].toUpperCase()),(0,c.tZ)("span",{className:"totalNum"}," "," ("+r+")"))};var p={name:"1q3dzmu",styles:"cursor:pointer;font-weight:700;color:var(--black);margin:0;padding:5px 16px;border-radius:12px;border:none;box-shadow:0 1px 1px rgb(0 0 0 / 10%);background-color:var(--lightPink);&:hover{background-color:var(--lightPink2);}&.isSelect{background-color:var(--lightPink3);border:2px solid var(--lighterGray);}.totalNum{opacity:0.5;}"},f=function(t){var e=t.item,a=t.subCate,i=t.setSubCate,o=e.fieldValue,l=e.totalCount;return(0,c.tZ)("button",{type:"button",className:e.fieldValue===a?"isSelect":"",onClick:function(){i(e.fieldValue)},css:p},o.replace(/^./,o[0].toUpperCase()),(0,c.tZ)("span",{className:"totalNum"}," "," ("+l+")"))};var g={name:"dbgye3",styles:"padding:10px 0;display:flex;align-items:center;justify-content:flex-start;flex-wrap:wrap;gap:10px;list-style-type:none;margin:0"},b=function(t){var e,a=t.selectCate,o=t.setSelectCate,l=t.subCate,r=t.setSubCate,n=t.allPostNum,u=(0,s.useStaticQuery)("3830760885").allMarkdownRemark.group,p=null===(e=u.find((function(t){return t.fieldValue===a})))||void 0===e?void 0:e.group;return(0,c.tZ)(i.Fragment,null,(0,c.tZ)("ul",{css:g},(0,c.tZ)(d,{setSubCate:r,selectCate:a,setSelectCate:o,item:{fieldValue:"All",totalCount:n}}),u.map((function(t){var e=t.fieldValue;return(0,c.tZ)(d,{setSubCate:r,selectCate:a,setSelectCate:o,key:e,item:t})}))),(0,c.tZ)("ul",{css:g},null==p?void 0:p.map((function(t){var e=t.fieldValue;return(0,c.tZ)(f,{subCate:l,setSubCate:r,key:e,item:t})}))))},m=a(2053),v=a(4588),h=function(t){var e,a=t.data,s=t.location,u=(null===(e=a.site.siteMetadata)||void 0===e?void 0:e.title)||"",d=a.allMarkdownRemark.nodes,p=i.useState("All"),f=p[0],g=p[1],h=i.useState(""),w=h[0],Z=h[1];return 0===d.length?(0,c.tZ)(i.Fragment,null,(0,c.tZ)(n.Z,{isMain:!0}),(0,c.tZ)(o.Z,{location:s,title:u},(0,c.tZ)(l.Z,{title:"All posts"}),(0,c.tZ)(r.Z,null),(0,c.tZ)("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')),(0,c.tZ)(v.Z,{showBelow:230})):(0,c.tZ)("div",null,(0,c.tZ)(n.Z,{isMain:!0,title:u}),(0,c.tZ)(o.Z,{location:s,title:u},(0,c.tZ)(l.Z,{title:"All posts"}),(0,c.tZ)(r.Z,null),(0,c.tZ)(b,{selectCate:f,setSelectCate:g,subCate:w,setSubCate:Z,allPostNum:d.length}),(0,c.tZ)(m.Z,{subCate:w,selectCate:f,posts:d})),(0,c.tZ)(v.Z,{showBelow:230}))}},3402:function(t){t.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#888888","images":{"fallback":{"src":"/static/12774eb2fb9da9ab43e187e9101d3098/64618/profile.jpg","srcSet":"/static/12774eb2fb9da9ab43e187e9101d3098/64618/profile.jpg 100w,\\n/static/12774eb2fb9da9ab43e187e9101d3098/cc10e/profile.jpg 200w","sizes":"100px"},"sources":[{"srcSet":"/static/12774eb2fb9da9ab43e187e9101d3098/ee81f/profile.avif 100w,\\n/static/12774eb2fb9da9ab43e187e9101d3098/3f23b/profile.avif 200w","type":"image/avif","sizes":"100px"},{"srcSet":"/static/12774eb2fb9da9ab43e187e9101d3098/6a679/profile.webp 100w,\\n/static/12774eb2fb9da9ab43e187e9101d3098/c0761/profile.webp 200w","type":"image/webp","sizes":"100px"}]},"width":100,"height":100}')},9404:function(t){t.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/f8890174352a84682d70c58a5506c8fa/c2a01/github_logo.png","srcSet":"/static/f8890174352a84682d70c58a5506c8fa/b6386/github_logo.png 27w,\\n/static/f8890174352a84682d70c58a5506c8fa/b6ee4/github_logo.png 54w,\\n/static/f8890174352a84682d70c58a5506c8fa/c2a01/github_logo.png 108w","sizes":"(min-width: 108px) 108px, 100vw"},"sources":[{"srcSet":"/static/f8890174352a84682d70c58a5506c8fa/cb549/github_logo.avif 27w,\\n/static/f8890174352a84682d70c58a5506c8fa/a3631/github_logo.avif 54w,\\n/static/f8890174352a84682d70c58a5506c8fa/13161/github_logo.avif 108w","type":"image/avif","sizes":"(min-width: 108px) 108px, 100vw"},{"srcSet":"/static/f8890174352a84682d70c58a5506c8fa/66235/github_logo.webp 27w,\\n/static/f8890174352a84682d70c58a5506c8fa/62ece/github_logo.webp 54w,\\n/static/f8890174352a84682d70c58a5506c8fa/71702/github_logo.webp 108w","type":"image/webp","sizes":"(min-width: 108px) 108px, 100vw"}]},"width":108,"height":111}')}}]);
//# sourceMappingURL=component---src-pages-index-js-f088c8e6b686fd7b8265.js.map