"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[996],{2053:function(t,e,r){r.d(e,{Z:function(){return c}});r(7294);var o=r(1597),i=r(7131),n=r(3431);var s={name:"1tjsd7x",styles:"margin:0;border-bottom:2px solid var(--lightGray);&:last-child{border:none;}.post-list-item{margin:20px 0 16px;}header{margin:0;.title{color:rgba(33, 37, 41, 0.8);display:inline-block;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-decoration:none;font-size:2em;font-weight:700;&:hover{color:var(--primary);}}}"},l=function(t){var e=t.post,r=e.frontmatter.title||e.fields.slug;return(0,n.tZ)("li",{css:s},(0,n.tZ)("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},(0,n.tZ)("header",null,(0,n.tZ)(o.Link,{className:"title",to:e.fields.slug,itemProp:"url"},r)),(0,n.tZ)("small",null,e.frontmatter.date),(0,n.tZ)("section",null,(0,n.tZ)("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"})),(0,n.tZ)(i.Z,{cateList:e.frontmatter.categories})))};var a={name:"qr8q5p",styles:"list-style:none"},c=function(t){var e=t.selectCate,r=t.posts;if("All"===e)return(0,n.tZ)("ol",{css:a},r.map((function(t){return(0,n.tZ)(l,{key:t.fields.slug,post:t})})));var o=r.filter((function(t){return t.frontmatter.categories.find((function(t){return t===e}))}));return(0,n.tZ)("ol",{css:a},o.map((function(t){return(0,n.tZ)(l,{key:t.fields.slug,post:t})})))}},5875:function(t,e,r){r.r(e);r(1597),r(7294);var o=r(9423),i=r(4139),n=r(2053),s=r(262),l=r(3431);e.default=function(t){var e,r=t.data,a=t.location,c=(null===(e=r.site.siteMetadata)||void 0===e?void 0:e.title)||"",u=a.state.searchWord,d=(r.allMarkdownRemark.nodes||[]).filter((function(t){var e=t.frontmatter,r=e.description,o=e.title,i=e.categories;return r&&r.toLowerCase().includes(u.toLowerCase())||o&&o.toLowerCase().includes(u.toLowerCase())||i&&i.join("").toLowerCase().includes(u)}));return(0,l.tZ)("div",null,(0,l.tZ)(o.Z,{isMain:!1,title:c}),(0,l.tZ)(i.Z,{location:a,title:c},(0,l.tZ)(s.Z,{title:u+" 검색 결과"}),(0,l.tZ)(n.Z,{selectCate:"All",posts:d})))}}}]);
//# sourceMappingURL=component---src-pages-search-js-320b8e98b332aff1be51.js.map