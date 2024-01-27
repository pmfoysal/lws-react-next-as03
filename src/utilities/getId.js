export default function getId(data) {
	if (!data.length) return 0;
	return data.reduce((id, item) => (id < item.id ? item.id : id), 0) + 1;
}
