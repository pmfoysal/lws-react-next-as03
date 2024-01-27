import Icons from '../icons';
import Actions from '../actions';
import tasks from '@/data/tasks.json';
import columns from '@/data/columns.json';
import Table, { Cell, Row } from '../table';

export default function TaskSection() {
	return (
		<section className='mb-20' id='tasks'>
			<div className='container'>
				<div className='rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16'>
					<div className='mb-14 items-center justify-between sm:flex'>
						<h2 className='text-2xl font-semibold max-sm:mb-4'>Your Tasks</h2>
						<Actions />
					</div>
					<div className='overflow-auto'>
						<Table headers={columns}>
							{tasks.map(item => (
								<Row key={item.id}>
									<Cell className={columns[0].childClass}>
										<div>
											<Icons name={!item.isFavourite ? 'star' : 'star-fill'} />
										</div>
									</Cell>
									<Cell className={columns[1].childClass}>
										<div>{item.description}</div>
									</Cell>
									<Cell className={columns[2].childClass}>
										<div>{}</div>
									</Cell>
									<Cell className={columns[3].childClass}>
										<div>{}</div>
									</Cell>
									<Cell className={columns[4].childClass}>
										<div>{}</div>
									</Cell>
									<Cell className={columns[5].childClass}>
										<div>{}</div>
									</Cell>
								</Row>
							))}
						</Table>
					</div>
				</div>
			</div>
		</section>
	);
}
