const path = require("path")
const fs = require("fs-extra")
const matter = require("gray-matter")
const inquirer = require("inquirer")
const rr = require("recursive-readdir")

const CONTENTS_DIR = "/content/blog"
const TARGET_DIR = path.join(process.cwd(), CONTENTS_DIR)
const UTF_8 = "utf8"

// 함수 - 입력받은 타이틀을 파일명을 위한 값으로 변경
// 공백은 - 로 변경 / 전부 소문자로 변경
const makeSlug = title => {
  return title
    .split(" ")
    .join("-")
    .toLowerCase()
    .replace(/^./, title[0].toUpperCase())
}

// 함수 - 타이틀 입력 받는 함수
const getTitle = async () => {
  const { title } = await inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Enter the title",
      default: () => "New post title",
    },
  ])

  return title
}

// 함수 - 카테고리를 가져옴
// 모든 md 파일의 categories를 모두 찾아옴
const findCategories = async () => {
  const markdownFiles = await rr(TARGET_DIR)
  const allCategory = new Set()
  markdownFiles
    .map(file => fs.readFileSync(file, UTF_8))
    .forEach(str => {
      return matter(str).data.categories?.forEach(arr => allCategory.add(arr))
    })

  return [...allCategory]
}
// 함수 - 카테고리 선택
// 카테고리 중복 선택 가능
const getCategories = async () => {
  const cateList = await findCategories()
  if (0 < cateList.length) {
    const { answer } = await inquirer.prompt([
      {
        type: "checkbox",
        name: "answer",
        message: "Select Categories",
        choices: cateList,
      },
    ])
    return answer
  } else return []
}
// 함수 - 하위 카테고리를 가져옴
// 모든 md 파일의 categories를 모두 찾아옴
const findSubCategories = async () => {
  const markdownFiles = await rr(TARGET_DIR)
  const allCategory = new Set()
  markdownFiles
    .map(file => fs.readFileSync(file, UTF_8))
    .forEach(str => {
      return matter(str).data.subCategories?.forEach(arr =>
        allCategory.add(arr)
      )
    })

  return [...allCategory]
}
// 함수 - 카테고리 선택
// 카테고리 중복 선택 가능
const getSubCategories = async () => {
  const cateList = await findSubCategories()
  if (0 < cateList.length) {
    const { answer } = await inquirer.prompt([
      {
        type: "checkbox",
        name: "answer",
        message: "Select SubCategories",
        choices: cateList,
      },
    ])
    return answer
  } else return []
}
// 함수 - md 파일 양식으로 변경
const refineContents = rawContents => {
  return matter.stringify("", rawContents).split("'").join("")
}

// 터미널에서 node cli/create-new-post 실행
module.exports = (async function () {
  const date = new Date().toISOString()
  const title = await getTitle()
  const category = await getCategories()
  const subCategory = await getSubCategories()

  const headers = {
    title,
    date,
    description: "",
    categories: `[${category}]`,
    subCategories: `[${subCategory}]`,
  }
  const contents = refineContents(headers)
  const type = "directory"

  const slug = makeSlug(title)

  const destDir = `${TARGET_DIR}/${category ? `${category}` : ""}${
    subCategory ? `/${subCategory}` : ""
  }${`/${slug}`}`
  const filePath = `${destDir}/${"index"}.md`

  const destDirExists = await fs.pathExists(destDir)
  if (!destDirExists) {
    await fs.ensureDir(destDir)
  }

  fs.writeFile(filePath, contents, err => {
    if (err) {
      console.error("Unknown Error: Cannot write file!")
      return
    }

    console.log("\nSuccess to create new post!")
    console.log(`${filePath}\n${contents}`)
  })
})()
