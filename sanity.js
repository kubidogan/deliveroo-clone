 import sanityClint from "@sanity/client"
 import ImageUrlBuilder  from "@sanity/image-url/lib/types/builder"

 const client = sanityClint({
  projectId: "d21xq1kx",
  dataset: "production",
  useCdn: true,
  apiVersion: "v2021-10-21",

 });

 const builder = ImageUrlBuilder(client);
 export const urlFor = (source) => builder.image(source);

//  Local host CORS expection
// Run - sanity cors add http://localhost:3000 or http://localhost:19000 / 19xxx
 export default client;
