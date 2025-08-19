import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  // clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  // // Get this from tina.io
  // token: process.env.TINA_TOKEN || "",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "b439f5e7-f9cc-46ec-b156-b1e9e3f3f9c1",
  // Get this from tina.io
  token: process.env.TINA_TOKEN || "d8431503daa0e2de1b7ec1df2c80250af62ebc81",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
  collections: [
    {
      name: "page",
      label: "Pages",
      path: "content/pages",
      format: "md", // or "mdx" depending on your content files
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
          isTitle: true,
          required: true,
        },
        {
          type: "rich-text",
          name: "body",
          label: "Body",
          isBody: true,
        },
      ],
      ui: {
        // Example custom router
        router: ({ document }) => {
          return `/pages/${document._sys.filename}`;
        },
      },
    },
  ],
}
});
