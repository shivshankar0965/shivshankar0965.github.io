import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
    projectId: "mgsbqj0c",
    dataset: "production",
    apiVersion: "2020-10-05",
    useCdn: true,
    token: "sk1XHD05wlRjJdScv0qN3h22m537HyePaNQhailddDdXULgVomU447FMRi2HTF5AvpT9ue8jwTXSCWRr4TNoQIkecmiKWhhcW1LJPZirfwVblg88gcaKrA3zmE6mZBanfp0azQTN6vW5isiBc4xW4HlLIUyfvHSHfWSP9ddCEmNqMD3hDMxN",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)


console.log(process.env.REACT_APP_SANITY_PROJECT_ID);