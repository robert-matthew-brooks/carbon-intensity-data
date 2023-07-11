import { useEffect, useState } from 'react';
import { getFromToDate } from '../js/util.js';

function FilterForm({ daysBack, setDaysBack }) {
    const days = [0, 1, 2, 3, 4, 5, 6];

    function jumpDaysBack(e) {
        setDaysBack(Number(e.target.value));
    }

    function stepDaysBack(e, step) {
        setDaysBack(daysBack + step);
    }

    useEffect(() => {
        document.getElementById('days-back').value = daysBack;

        const prevBtn = document.getElementById('prev');
        if (daysBack === days.length-1) prevBtn.disabled = true;
        else prevBtn.disabled = false;

        const nextBtn = document.getElementById('next');
        if (daysBack === 0) nextBtn.disabled = true;
        else nextBtn.disabled = false;
    }, [daysBack]);

    return (
        <section id="filter-form">
            <form onSubmit={e => e.preventDefault()}>
                <button id="prev" onClick={() => stepDaysBack(e, 1)}>prev</button>
                <select id="days-back" defaultValue={0} onChange={jumpDaysBack}>
                    {days.map(n => {
                        return <option key={n} value={n}>{getFromToDate(n).from.formattedDate}</option>
                    })}
                </select>
                <button id="next" onClick={() => stepDaysBack(e, -1)}>next</button>
            </form>
        </section>
    );
}

export default FilterForm;