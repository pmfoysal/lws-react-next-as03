export default function Table({ headers, children }) {
	return (
		<table className='table-fixed overflow-auto xl:w-full'>
			<thead>
				<tr>
					{headers.map(item => (
						<th key={item.id} className={`p-4 pb-8 text-sm font-semibold capitalize ${item.parentClass}`}>
							{item.name}
						</th>
					))}
				</tr>
			</thead>
			<tbody>{children}</tbody>
		</table>
	);
}

export function Row({ children }) {
	return <tr className='border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2'>{children}</tr>;
}

export function Cell({ children, className }) {
	return <td className={className}>{children}</td>;
}
