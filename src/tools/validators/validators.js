export const
    required = (value) => {
        if (value) return undefined;

        return 'Field is required';
    },
    maxLengthCreator = (length) => (value) => {
        if (!value) value = '';

        if (value.length < length) return undefined;

        return `Max length is ${length}`;
    },
    minLengthCreator = (length) => (value) => {
        if (!value) value = '';

        if (value.length > length) return undefined;

        return `Min length is ${length}`;
    }