import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

interface AutocompleteFieldProps {
    id: string;
    options: string[];
    label: string;
    value: string;
    name: string;
    // eslint-disable-next-line no-unused-vars
    onChange: (name: string, value: string | null) => void;
}

const CustomAutocompleteField: React.FC<AutocompleteFieldProps> = ({
    id,
    options,
    label,
    value,
    name,
    onChange,
}) => {
    const handleAutoCompleteChange = (
        _event: React.ChangeEvent<{}>,
        value: string | null
    ) => {
        onChange(name, value); // Update the field state value
    };

    return (
        <Autocomplete
            className=" w-full mb-4"
            id={id}
            options={options}
            value={value}
            onChange={handleAutoCompleteChange}
            renderInput={(params) => <TextField {...params} label={label} />}
        />
    );
};

export default CustomAutocompleteField;
