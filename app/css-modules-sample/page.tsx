import styles from "./page.module.css";

const features = [
	{
		title: "直感的な構造",
		description:
			"CSS Modules はコンポーネント単位でクラス名がスコープされるため、グローバルな衝突を気にせずにスタイルを追加できます。",
	},
	{
		title: "型安全な開発",
		description:
			"TypeScript と組み合わせることでクラス名も補完され、スタイルのタイポを防げます。",
	},
	{
		title: "Next.js に標準対応",
		description:
			"Next.js の App Router でも pages Router でも追加設定なしで利用できるのが魅力です。",
	},
];

export default function CssModulesSamplePage() {
	return (
		<main className={styles.container}>
			<section className={styles.hero}>
				<h1 className={styles.heroTitle}>CSS Modules サンプル</h1>
				<p className={styles.heroDescription}>
					CSS Modules を使ったスタイリングの一例です。フォルダ内に{" "}
					<code>page.module.css</code>
					を置き、コンポーネントからインポートするだけで簡単に使えます。
				</p>
			</section>

			<section>
				<h2 className={styles.sectionTitle}>特徴</h2>
				<div className={styles.cardGrid}>
					{features.map((feature) => (
						<article key={feature.title} className={styles.card}>
							<h3 className={styles.cardTitle}>{feature.title}</h3>
							<p className={styles.cardDescription}>{feature.description}</p>
						</article>
					))}
				</div>
			</section>

			<section>
				<h2 className={styles.sectionTitle}>使い方の流れ</h2>
				<ol className={styles.list}>
					<li className={styles.listItem}>
						コンポーネントと同じ階層に <code>*.module.css</code> を作成する
					</li>
					<li className={styles.listItem}>
						CSS モジュールを{" "}
						<code>import styles from "./ファイル名.module.css";</code>{" "}
						で読み込む
					</li>
					<li className={styles.listItem}>
						必要なクラス名を <code>{"className={styles.className}"}</code>{" "}
						のように指定する
					</li>
				</ol>
			</section>

			<p className={styles.footer}>
				このページをベースに、プロジェクトで利用するスタイルガイドや UI
				コンポーネントを組み立ててみましょう。
			</p>
		</main>
	);
}
