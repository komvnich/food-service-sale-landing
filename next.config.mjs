/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        const routes = [
            "/api/sign-in",
            "/api/get-current-user",
            "/api/update-type-orders",
            "/api/single-update-field",
            "/api/create-verified",
            "/api/get-verified-by-email",
            "/api/create-rank",
            "/api/get-ranks-by-agency",
            "/api/delete-rank",
            "/api/update-many-rankName",
            "/api/update-pincode-worker",
            "/api/update-ranks-worker",
            "/api/create-worker",
            "/api/get-workers-by-agency",
            "/api/delete-worker",
            "/api/update-email-client",
            "/api/update-password-client",
            "/api/create-promocode",
            "/api/delete-promocode",
            "/api/create-category",
            "/api/get-categories-by-agency",
            "/api/update-many-categories",
            "/api/delete-category",
            "/api/create-product",
            "/api/get-all-products-by-agency"
        ];

        const corsHeaders = [
            { key: "Access-Control-Allow-Credentials", value: "true" },
            { key: "Access-Control-Allow-Origin", value: "*" },  // Замість "*" вказуйте довірені домени
            { key: "Access-Control-Allow-Methods", value: "POST" },
            { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ];

        return routes.map(route => ({
            source: route,
            headers: corsHeaders,
        }));
    }
};

export default nextConfig;