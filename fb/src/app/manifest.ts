import type { MetadataRoute } from 'next'

type Screenshot = {
    form_factor?: "narrow" | "wide" | undefined;
    label?: string | undefined;
    platform?: "android" | "chromeos" | "ipados" | "ios" | "kaios" | "macos" | "windows" | "xbox" | "chrome_web_store" | undefined;
    src: string;
    type?: string | undefined;
    sizes?: string | undefined;
}

export default function manifest(): MetadataRoute.Manifest {
    const screenshots: Screenshot[] = [];
    for (let i = 1; i <= 6; i++) {
        screenshots.push({
            src: `/metadata/screenshots/BatiKnow_${i}.png`,
            form_factor: "wide",
            sizes: "1280x800",
            type: "image/png"
        })
    }
    for (let i = 7; i <= 11; i++) {
        screenshots.push({
            src: `/metadata/screenshots/BatiKnow_${i}.png`,
            form_factor: "narrow",
            sizes: "1242x2688",
            type: "image/png"
        })
    }
    return {
        name: "BatiKnow",
        short_name: "BK",
        description: "BatiKnow with Next.js and Tensorflow",
        start_url: "/",
        display: "standalone",
        background_color: "#f3f4f6",
        theme_color: "#9f0712",
        icons: [
            {
                src: "/metadata/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png"
            },
            {
                src: "/metadata/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png"
            }
        ],
        screenshots
    }
}