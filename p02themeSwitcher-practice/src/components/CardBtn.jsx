import React from "react";
import useTheme from "../contexts/Theme";

export default function CardBtn() {

    const {themeMode, lightMode, darkMode} = useTheme()

    const onChangeBtn = (e) => {
        if (e.currentTarget.checked) {
            darkMode()
        }else {
            lightMode()
        }
    }

    return(
        <>
            <div className="items-center m-8 text-center">
            <input 
            type="checkbox"
            onChange={onChangeBtn}
            checked={themeMode === 'dark'}
            />
            <label className="mx-2">Theme Mode</label>
            </div>
        </>
    )
}