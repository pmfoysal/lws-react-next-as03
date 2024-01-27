export default function Tag({ name, color }) {
	return (
		<span
			className={`inline-block h-5 whitespace-nowrap rounded-[45px] bg-[${colors[color].back}] px-2.5 text-sm capitalize text-[${colors[color].front}]`}>
			{name}
		</span>
	);
}
