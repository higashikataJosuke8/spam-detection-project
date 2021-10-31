import React, { useState } from 'react';
import Dev from './Dev';
import './Developers.css';

const Developers = () => {
    const [active, setActive] = useState('');
    const openDev = (e) => {
        if(e.target.id === active){
            setActive('')
        }else{
            setActive(e.target.id);
        }
    }
    return (
        <>
            <div className="meet">
                <h3>Meet The Team</h3>
            </div>
            <div className="Team">
                <div class="devs">
                    <input type="checkbox" id="check1" name="coder" onClick={e => openDev(e)} />
                    <Dev dev="Jay Benedict Labay" user='@ultraaa' role='System Developer' quote='Non PLus Ultraa' class={active === 'check1' ? 'active-wrapper': active === ''? 'wrapper': 'small'} for='check1'/>
                    
                    <input type="checkbox" id="check2" name="coder" onClick={e => openDev(e)} />
                    <Dev dev="Jake Matthew Luyun" user='@euphoria' role='System Developer' quote='Non PLus Ultraa' class={active === 'check2' ? 'active-wrapper': active === ''? 'wrapper': 'small'} for='check2'/>
                    
                    <input type="checkbox" id="check3" name="coder" onClick={e => openDev(e)} />
                    <Dev dev="Jane Lizette Aguilar" user='@softpianorolls' role='System Developer' quote='Non PLus Ultraa' class={active === 'check3' ? 'active-wrapper': active === ''? 'wrapper': 'small'} for='check3'/>
                    
                    <input type="checkbox" id="check4" name="coder" onClick={e => openDev(e)} />
                    <Dev dev="Raziel Nicolas Uy" user='@hana' role='Machine Learning' quote='Non PLus Ultraa' class={active === 'check4' ? 'active-wrapper': active === ''? 'wrapper': 'small'} for='check4'/>
                    
                    <input type="checkbox" id="check5" name="coder" onClick={e => openDev(e)} />
                    <Dev dev="Brian Christian Estiller" user='@briii' role='Machine Learning' quote='Non PLus Ultraa' class={active === 'check5' ? 'active-wrapper': active === ''? 'wrapper': 'small'} for='check5'/>
                    
                    <input type="checkbox" id="check6" name="coder" onClick={e => openDev(e)} />
                    <Dev dev="Matthew Legaspi" user='@Coconut' role='Big Data Analysis' quote='Non PLus Ultraa' class={active === 'check6' ? 'active-wrapper': active === ''? 'wrapper': 'small'} for='check6'/>
                    
                    <input type="checkbox" id="check7" name="coder" onClick={e => openDev(e)} />
                    <Dev dev="Dennise Pingoy" user='@Daze' role='Big Data Analysis' quote='Non PLus Ultraa' class={active === 'check7' ? 'active-wrapper': active === ''? 'wrapper': 'small'} for='check7'/>
                    
                    <input type="checkbox" id="check8" name="coder" onClick={e => openDev(e)} />
                    <Dev dev="Christian Marcial" user='@Sealed' role='Big Data Analysis' quote='Non PLus Ultraa' class={active === 'check8' ? 'active-wrapper': active === ''? 'wrapper': 'small'} for='check8'/>
                </div>
            </div>
        </>
    )
}

export default Developers
