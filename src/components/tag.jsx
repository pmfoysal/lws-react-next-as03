const colors = [
	{ back: 'bg-[#00dddd]', front: 'text-[#000000]' },
	{ back: 'bg-[#ff7f50]', front: 'text-[#000000]' },
	{ back: 'bg-[#6495ed]', front: 'text-[#000000]' },
];

export default function Tag({ name, index }) {
	return (
		<span
			className={`inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize ${colors[index % colors.length].back} ${colors[index % colors.length].front}`}>
			{name}
		</span>
	);
}
