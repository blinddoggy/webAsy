import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
	title: {
		default: "AsymmetricFrequency.com",
		template: "%s | AsymmetricFrequency.com",
	},
	description: "This is AsymmetricFrequency portal",
	openGraph: {
		title: "AsymmetricFrequency.com",
		description:
			"Blockchain technology makers",
		url: "https://AsymmetricFrequency.com",
		siteName: "AsymmetricFrequency.com",
		images: [
			{
				url: "https://AsymmetricFrequency.com/final.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "AsymmetricFrequency",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon-Asy.png",
	},
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
			<head>
				<Analytics />
			</head>
			<body
				className={`bg-black ${
					process.env.NODE_ENV === "development" ? "debug-screens" : undefined
				}`}
			>
				{children}
			</body>
		</html>
	);
}
