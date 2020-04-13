import React,{useEffect} from 'react';

import './style.css';
import { menuItems } from "../../utils/mixins";

export default function TopNavigation({onChangePage}) {
    const [activeMenu, setActiveMenu] = React.useState(menuItems[0]);
    useEffect(()=>{
        onChangePage(activeMenu == 'top stories' ? null : activeMenu);
        document.title = `Slide News | ${activeMenu}`
    },[activeMenu]);    


    const menu = menuItems.map(menuItem =>
        <li className={activeMenu === menuItem ? 'active' : null} key={menuItem}>
            <button onClick={() => setActiveMenu(menuItem)}>{menuItem}</button>
        </li>
    );
    return (
        <div className="m-container">
            <ul children={menu} />
        </div>
    )
}