const App = () => (
	<div className="w-full min-h-screen bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB] flex pt-[200px] justify-center">
		<main className="bg-white max-w-[340px] p-6 rounded-lg flex flex-col gap-4 shadow h-fit">
			<header className="flex gap-4">
				<img
					src="/img/profile-thumbnail.png"
					alt="Sarah Dole profile"
					className="w-12 h-12"
				/>
				<article className="flex flex-col gap-[1px]">
					<h1 className="text-lg font-semibold text-neutral-900">Sarah Dole</h1>
					<h2 className="text-sm text-neutral-600">@sarahdole</h2>
				</article>
			</header>
			<article>
				<p className="text-neutral-600 text-base leading-[26px]">
					I've been searching for high-quality abstract images for my design
					projects, and I'm thrilled to have found this platform. The variety
					and depth of creativity are astounding!
				</p>
			</article>
		</main>
	</div>
);

export default App;
