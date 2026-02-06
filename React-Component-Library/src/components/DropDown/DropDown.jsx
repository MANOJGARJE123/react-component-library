import {useState} from 'react';

function Dropdown({options}){
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    function toggleDropDown(){
        setIsDropDownOpen(!isDropDownOpen);
    }

    return(
        <div className='DropDown-container' >
            <button onClick={toggleDropDown}>
                Actions
            </button>
            {
                isDropDownOpen && (
                    <div className='DropDown-options'>
                       {
                        options.map((option, index) => (
                            <div key={index} className='DropDown-option' onClick={option.onClick}>
                                {option.label}
                            </div>
                        ))
                       }
                    </div>
                )
            }
        </div>
    )
}

export default Dropdown;