const colors = {
	info: 'bg-blue-500',
	danger: 'bg-red-500',
};

export default function Button({ color, name, onClick }) {
	return (
		<button className={`rounded-md px-3.5 py-2.5 text-sm font-semibold ${colors[color]}`} onClick={onClick}>
			{name}
		</button>
	);
}
