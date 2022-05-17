import React, { useState } from 'react';
import Dev from './Dev';
import './Developers.css';
import dev1 from './Developers/ultraaa.png'
import dev2 from './Developers/luyun.png'
import dev3 from './Developers/aguilar.png'
import dev4 from './Developers/uy.png'
import dev5 from './Developers/estiller.png'
import dev6 from './Developers/legaspi.png'
import dev7 from './Developers/pingoy.png'
import defaultPic from './Developers/default_pic.jpg'

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
                    <Dev dev="Jay Benedict Labay" user='@ultraaa' role='System Developer' quote='Non Plus Ultraa' class={active === 'check1' ? 'active-wrapper': active === ''? 'wrapper': 'small'} for='check1' imgSrc={dev1}/>
                    
                    <input type="checkbox" id="check2" name="coder" onClick={e => openDev(e)} />
                    <Dev dev="Jake Matthew Luyun" user='@euphoria' role='System Developer' quote='Memento Mori' class={active === 'check2' ? 'active-wrapper': active === ''? 'wrapper': 'small'} for='check2' imgSrc={dev2}/>
                    
                    <input type="checkbox" id="check3" name="coder" onClick={e => openDev(e)} />
                    <Dev dev="Jane Lizette Aguilar" user='@softpianorolls' role='System Developer' quote='Mors vincit omnia' class={active === 'check3' ? 'active-wrapper': active === ''? 'wrapper': 'small'} for='check3' imgSrc={dev3}/>
                    
                    <input type="checkbox" id="check4" name="coder" onClick={e => openDev(e)} />
                    <Dev dev="Raziel Nicolas Uy" user='@hana' role='Data Scientist' quote='Ad astra per aspera' class={active === 'check4' ? 'active-wrapper': active === ''? 'wrapper': 'small'} for='check4' imgSrc={dev4}/>
                    
                    <input type="checkbox" id="check5" name="coder" onClick={e => openDev(e)} />
                    <Dev dev="Brian Christian Estiller" user='@briii' role='Data Scientist' quote='acta non verba' class={active === 'check5' ? 'active-wrapper': active === ''? 'wrapper': 'small'} for='check5' imgSrc={dev5}/>
                    
                    <input type="checkbox" id="check6" name="coder" onClick={e => openDev(e)} />
                    <Dev dev="Matthew Legaspi" user='@Coconut' role='Data Analyst' quote='Alea iacta est' class={active === 'check6' ? 'active-wrapper': active === ''? 'wrapper': 'small'} for='check6' imgSrc={dev6}/>
                    
                    <input type="checkbox" id="check7" name="coder" onClick={e => openDev(e)} />
                    <Dev dev="Dennise Pingoy" user='@Daze' role='Data Analyst' quote='As astra abossysque' class={active === 'check7' ? 'active-wrapper': active === ''? 'wrapper': 'small'} for='check7' imgSrc={dev7}/>
                    
                    <input type="checkbox" id="check8" name="coder" onClick={e => openDev(e)} />
                    <Dev dev="Christian Marcial" user='@Sealed' role='Data Analyst' quote='Pax Optimuma rerum' class={active === 'check8' ? 'active-wrapper': active === ''? 'wrapper': 'small'} for='check8' imgSrc={defaultPic}/>
                </div>
            </div>
        </>
    )
}

export default Developers
