import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <div className='flex justify-center'>
                <div className='form bg-light-gray mw7 pa4 br2-ns ba b--black-10 shadow-4'>
                    <fieldset className="cf bn ma0 pa0">
                        <legend className="pa0 f5 f4-ns mb4 black">{'Zairyo allows you to find out the ingredients in your food image.'}</legend>
                        <div className="cf">
                            <input className='f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns' placeholder='Enter image URL' type='text' onChange={onInputChange} />
                            <button className='f6 f5-l button-reset fl pv3 tc bn bg-green hover-bg-green white pointer w-100 w-25-m w-20-l br2-ns br--right-ns' onClick={onButtonSubmit}>Detect</button>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;