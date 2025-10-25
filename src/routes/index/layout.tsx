import type { Metadata } from "next";
import type { FC, PropsWithChildren } from "react";

export const metadata: Metadata = {
	title: "Next.js App",
	description: "Next.js with TypeScript and Bun",
};

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<html lang="ja">
			<body>{children}</body>
		</html>
	);
};
