export default function Table({ children }) {
	return (
		<table className='table-fixed overflow-auto xl:w-full'>
			<thead>
				<tr>
					<th className='p-4 pb-8 text-sm font-semibold capitalize w-[48px]'></th>
					<th className='p-4 pb-8 text-sm font-semibold capitalize w-[300px]'>Title</th>
					<th className='p-4 pb-8 text-sm font-semibold capitalize w-full'>Description</th>
					<th className='p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]'>Tags</th>
					<th className='p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]'>Priority</th>
					<th className='p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]'>Options</th>
				</tr>
			</thead>
			<tbody>{children}</tbody>
		</table>
	);
}

export function Row({ children }) {
	return (
		<tr className='border-b border-[#2E3443] last:border-none [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2'>
			{children}
		</tr>
	);
}

export function Cell({ children, className }) {
	return <td className={className}>{children}</td>;
}
