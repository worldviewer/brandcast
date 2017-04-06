const types = {
	CHANGE_IMAGE_WIDTH: 'CHANGE_IMAGE_WIDTH',
	CHANGE_ACTIVE_COLLECTION: 'CHANGE_ACTIVE_COLLECTION'
};

const initialState = {
	imageWidth: 0.5,
	activeCollection: 0,
	imageDirectory: '01',
	collections: [
		{
			name: 'Adrian Frutiger',
			birth: 1928,
			death: 2015,
			directory: '01'
		},
		{
			name: 'Josef Muller-Brockman',
			birth: 1928,
			death: 2015,
			directory: '02'
		},
		{
			name: 'Emil Ruder',
			birth: 1928,
			death: 2015,
			directory: '03'
		},
		{
			name: 'Max Miedinger',
			birth: 1928,
			death: 2015,
			directory: '04'
		},
		{
			name: 'Herbert Matter',
			birth: 1907,
			death: 1984,
			directory: '05'
		}												
	]
};

export const changeImageWidth = (width) => {
	return {
		type: types.CHANGE_IMAGE_WIDTH,
		width
	};
};

export const changeActiveCollection = (collection) => {
	return {
		type: types.CHANGE_ACTIVE_COLLECTION,
		collection
	};
};

export default (state = initialState, action) => {
	switch(action.type) {
		case types.CHANGE_IMAGE_WIDTH:
			return {
				...state,
				imageWidth: action.width
			};

		case types.CHANGE_ACTIVE_COLLECTION:
			return {
				...state,
				activeCollection: action.collection,
				imageDirectory: state.collections[action.collection].directory
			}

		default:
			return state;		
	}
};
