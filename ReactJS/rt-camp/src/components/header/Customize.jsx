
import { GrFormNext } from 'react-icons/gr';
import { FiMoon } from 'react-icons/fi';
import { IoColorPaletteOutline, IoLanguageOutline } from 'react-icons/io5';

function Customize() {
    return (
        <ul className='absolute top-16 right-0 bg-white shadow-round rounded-xl'>
            <li><a href="" className='flex items-center gap-3 py-3 hover:bg-blue rounded-xl pl-6 pr-12'><FiMoon /> Dark Mode</a></li>
            <li className='flex items-center gap-3 py-3 hover:bg-blue rounded-xl pl-6 pr-12'><IoColorPaletteOutline /> Color <GrFormNext /></li>
            <li className='flex items-center gap-3 py-3 hover:bg-blue rounded-xl pl-6 pr-12'><IoLanguageOutline />Language <GrFormNext /></li>
        </ul>
    );
}

export default Customize;