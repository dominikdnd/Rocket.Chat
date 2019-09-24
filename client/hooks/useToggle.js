import { useState } from 'react';

export const useToggle = (initialValue) => {
	const [value, setValue] = useState(initialValue);

	return [value, () => setValue(!value)];
};
