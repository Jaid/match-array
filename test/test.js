import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
   * @type { import("../src") }
   */
const {default: matchArray} = indexModule

it("should run", () => {
  const result = matchArray(/start +(?<id>[A-Za-z]+)(-(?<suffixNumber>\d+))? +end/g, " start  word  end\nstart no match here end\nstart nextword-2 end")
  expect(result).toMatchObject([
    {
      id: "word",
      suffixNumber: null,
    },
    {
      id: "nextword",
      suffixNumber: "2",
    },
  ])
})