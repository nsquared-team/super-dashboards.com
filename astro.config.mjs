import { defineConfig } from "astro/config";

export default defineConfig({
	output: "static",
	site: process.env.SITE || "https://super-dashboards.com",
	image: {
		layout: "constrained",
		responsiveStyles: true,
	},
	devToolbar: { enabled: false },
});
