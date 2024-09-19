import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import 'src/shared/ui/Checkbox/Checkbox.scss';
const Checkbox = ({ label }) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(prevState => !prevState);
    };
    return (_jsxs("div", { className: 'checkbox-container', children: [_jsx("input", { className: 'checkbox-input', type: 'checkbox', checked: isChecked, onChange: handleCheckboxChange, id: 'customCheckbox' }), _jsx("label", { htmlFor: 'customCheckbox', className: 'checkbox-label', children: label })] }));
};
export default Checkbox;
