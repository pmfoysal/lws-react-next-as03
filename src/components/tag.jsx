import colors from '@/data/colors.json';

export default function Tag({ name, index }) {
	return (
		<span
			className={`inline-block h-5 whitespace-nowrap rounded-[45px] bg-[${colors[index].back}] px-2.5 text-sm capitalize text-[${colors[index].front}]`}>
			{name}
		</span>
	);
}
