const colors = [
	{ back: 'bg-[#00dddd]', front: 'text-[#000000]' },
	{ back: 'bg-[#ff7f50]', front: 'text-[#000000]' },
	{ back: 'bg-[#6495ed]', front: 'text-[#000000]' },
	{ back: 'bg-[#008b8b]', front: 'text-[#ffffff]' },
	{ back: 'bg-[#556b2f]', front: 'text-[#ffffff]' },
	{ back: 'bg-[#7b68ee]', front: 'text-[#ffffff]' },
];

export default function Tag({ name, index }) {
	return (
		<span
			className={`inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize ${colors[index].back} ${colors[index].front}`}>
			{name}
		</span>
	);
}
