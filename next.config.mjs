/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                // sign in route
                source: "/api/sign-in",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // замініть це на список довірених доменів, з яких можна зробити запити
                    { key: "Access-Control-Allow-Methods", value: "POST" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            },
            {
                // get current auth user route
                source: "/api/get-current-user",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // замініть це на список довірених доменів, з яких можна зробити запити
                    { key: "Access-Control-Allow-Methods", value: "POST" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization" },
                ]
            },
            {
                // update type order for buissenes client
                source: "/api/update-type-orders",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // замініть це на список довірених доменів, з яких можна зробити запити
                    { key: "Access-Control-Allow-Methods", value: "POST" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            },
            {
                // update signle field user
                source: "/api/single-update-field",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // замініть це на список довірених доменів, з яких можна зробити запити
                    { key: "Access-Control-Allow-Methods", value: "POST" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            },
            {
                // create verified request
                source: "/api/create-verified",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // замініть це на список довірених доменів, з яких можна зробити запити
                    { key: "Access-Control-Allow-Methods", value: "POST" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            },
            {
                // get verified field
                source: "/api/get-verified-by-email",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // замініть це на список довірених доменів, з яких можна зробити запити
                    { key: "Access-Control-Allow-Methods", value: "POST" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            },
            {
                // create rank field
                source: "/api/create-rank",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // замініть це на список довірених доменів, з яких можна зробити запити
                    { key: "Access-Control-Allow-Methods", value: "POST" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            },
            {
                // get ranks fields by agency
                source: "/api/get-ranks-by-agency",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // замініть це на список довірених доменів, з яких можна зробити запити
                    { key: "Access-Control-Allow-Methods", value: "POST" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            },
            {
                // delete rank by id
                source: "/api/delete-rank",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // замініть це на список довірених доменів, з яких можна зробити запити
                    { key: "Access-Control-Allow-Methods", value: "POST" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            },
            {
                // update many worker rank and rank name by agency
                source: "/api/update-many-rankName",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // замініть це на список довірених доменів, з яких можна зробити запити
                    { key: "Access-Control-Allow-Methods", value: "POST" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            },
            {
                // update pincode worker by id worker
                source: "/api/update-pincode-worker",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // замініть це на список довірених доменів, з яких можна зробити запити
                    { key: "Access-Control-Allow-Methods", value: "POST" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            },
            {
                // update ranks worker by id worker
                source: "/api/update-ranks-worker",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // замініть це на список довірених доменів, з яких можна зробити запити
                    { key: "Access-Control-Allow-Methods", value: "POST" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            },
            {
                // create worker
                source: "/api/create-worker",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // замініть це на список довірених доменів, з яких можна зробити запити
                    { key: "Access-Control-Allow-Methods", value: "POST" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            },
            {
                // get workers fields by agency
                source: "/api/get-workers-by-agency",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // замініть це на список довірених доменів, з яких можна зробити запити
                    { key: "Access-Control-Allow-Methods", value: "POST" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            },
            {
                // delete worker by id
                source: "/api/delete-worker",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // замініть це на список довірених доменів, з яких можна зробити запити
                    { key: "Access-Control-Allow-Methods", value: "POST" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            },
            {
                // update email client by id
                source: "/api/update-email-client",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // замініть це на список довірених доменів, з яких можна зробити запити
                    { key: "Access-Control-Allow-Methods", value: "POST" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            },
            {
                // update password client by id
                source: "/api/update-password-client",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // замініть це на список довірених доменів, з яких можна зробити запити
                    { key: "Access-Control-Allow-Methods", value: "POST" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            },
            {
                // create promocode by agency
                source: "/api/create-promocode",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // замініть це на список довірених доменів, з яких можна зробити запити
                    { key: "Access-Control-Allow-Methods", value: "POST" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            },
            {
                // delete promocode by id
                source: "/api/delete-promocode",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // замініть це на список довірених доменів, з яких можна зробити запити
                    { key: "Access-Control-Allow-Methods", value: "POST" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            },
            {
                // create category by agency
                source: "/api/create-category",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // замініть це на список довірених доменів, з яких можна зробити запити
                    { key: "Access-Control-Allow-Methods", value: "POST" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            },
            {
                // get categories by agency
                source: "/api/get-categories-by-agency",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // замініть це на список довірених доменів, з яких можна зробити запити
                    { key: "Access-Control-Allow-Methods", value: "POST" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            },
            {
                // update categories by agency
                source: "/api/update-many-categories",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // замініть це на список довірених доменів, з яких можна зробити запити
                    { key: "Access-Control-Allow-Methods", value: "POST" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            },
            {
                // delete category
                source: "/api/delete-category",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // замініть це на список довірених доменів, з яких можна зробити запити
                    { key: "Access-Control-Allow-Methods", value: "POST" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            },
            {
                // create product
                source: "/api/create-product",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // замініть це на список довірених доменів, з яких можна зробити запити
                    { key: "Access-Control-Allow-Methods", value: "POST" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            },
            {
                // get products by agency
                source: "/api/get-all-products-by-agency",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // замініть це на список довірених доменів, з яких можна зробити запити
                    { key: "Access-Control-Allow-Methods", value: "POST" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            },
        ]
    }
};

export default nextConfig;
