import {type} from '@testing-library/user-event/dist/type'
import React from 'react'

type type = "button" | "submit" | "reset";
type typeStyle = 'primary' | 'disabled' | 'secondary' | 'hover-outline'
type Props = {
    classname?: string;
    type?: type;
    onclick?: () => void;
    children?: React.ReactNode
    typeStyle?: typeStyle;
    loading?: boolean;
    outline?: boolean
}

const Button = (props: Props) => {
    const {classname, type, onclick, children, loading, typeStyle, outline} = props

    return (
        <div>
            <button
                type={type}
                className={classname}
                onClick={onclick}
                disabled={typeStyle === 'disabled' || loading}
            >
                <div className="flex items-center justify-center w-full gap-x-2">
                    {loading && (
                        <>
                        </>
                        // <SvgIcon iconName="spinner" className="flex-none h-4 w-4" spin={true}></SvgIcon>
                    )}
                    <div className="flex-none">{children}</div>
                </div>
            </button>
        </div>
    )
}

export default Button
