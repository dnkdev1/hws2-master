import React, {FC} from 'react'
import {NavLink} from 'react-router-dom'
import s from './Sidebar.module.css'
import {PATH} from '../Pages'
import closeIcon from './closeOutline.svg'
import {useLocation} from 'react-router-dom';


type PropsType = {
    open: boolean
    handleClose: () => void
}

export const Sidebar: FC<PropsType> = ({open, handleClose}) => {
    const sidebarClass = s.sidebar
        + (open ? ' ' + s.open : '')

    const location = useLocation()
    console.log(location.pathname)

    const preJuniorClass = (location.pathname === '/pre-junior'
        ? ' ' + s.active : '')
    const juniorClass = (location.pathname === '/junior'
        ? ' ' + s.active : '')
    const juniorPlusClass = (location.pathname === '/junior-plus'
        ? ' ' + s.active : '')

    return (
        <>
            {/*затемнение справа от открытого меню*/}
            {open && <div className={s.background} onClick={handleClose}/>}

            <aside className={sidebarClass}>
                <button className={s.close} onClick={handleClose}>
                    <img
                        src={closeIcon}
                        alt="close sidebar"
                        id={'hw5-menu-close'}
                    />
                </button>

                <nav id={'hw5-menu'} className={s.nav}>
                    <NavLink
                        id={'hw5-pre-junior-link'}
                        to={PATH.PRE_JUNIOR}
                        onClick={handleClose}
                        // className={...} // делает студент
                        className={preJuniorClass}
                    >
                        Pre-junior
                    </NavLink>
                    <NavLink
                        id={'hw5-junior-link'}
                        to={PATH.JUNIOR}
                        onClick={handleClose}
                        // className={...} // делает студент
                        className={juniorClass}
                    >
                        Junior
                    </NavLink>
                    <NavLink
                        id={'hw5-junior-plus-link'}
                        to={PATH.JUNIOR_PLUS}
                        onClick={handleClose}
                        // className={...} // делает студент
                        className={juniorPlusClass}
                    >
                        Junior Plus
                    </NavLink>
                </nav>
            </aside>
        </>
    )
}
