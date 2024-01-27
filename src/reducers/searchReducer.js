export default function searchReducer(search, action) {
	switch (action.type) {
		case 'search':
			return action.payload;
		default:
			throw new Error(`No action matched with ${action.type}!`);
	}
}
