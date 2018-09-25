import React from 'react';

const FoodRecognition = ({ imageUrl, ingridients }) => {
    return (
        <div className='w-80 mw7 mt5 db center tc shadow-4'>
            <img className='db ba b--black-10' alt='' src={imageUrl} width='100%' height='auto' />
            <div className="pa4 bg-white">
                <div className="overflow-auto">
                <table id='ingredients' className="f6 w-100" cellspacing="0">
                    <thead>
                    <tr>
                        <th className="fw6 bb b--black-20 tl pb3 ph3">Predicted Ingredients</th>
                        <th className="fw6 bb b--black-20 tl pb3 ph3">Probability</th>
                    </tr>
                    </thead>
                    <tbody>
                    {ingridients.map(function(ingridient){
                        return (
                            <tr>
                                <td key={ingridient.name} className="pv3 ph3 bb b--black-20 tl">{ingridient.name}</td>
                                <td key={ingridient.value.toString()} className="pv3 ph3 bb b--black-20 tl">{ingridient.value}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );
}

export default FoodRecognition;