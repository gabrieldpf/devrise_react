import React, { useEffect, useRef } from 'react'
import { DynamicModalTypes } from '../types'
import { StyledDynamicModal, StyledStandardModal } from './DynamicModalStyle'
import CloseIcon from '@mui/icons-material/Close';/*
import { Button } from '../buttons'; */


export const DynamicModal = ({...props}: DynamicModalTypes) => {

    const ref = useRef<HTMLDivElement>(null)
    const rootRef = useRef(document.documentElement);

    const handleClickOutside = (event: any) =>{
        if (ref?.current && !ref.current.contains(event.target)) {
            props.onClose()
        }
    }

    useEffect(() => {
        if (props.open) {
            rootRef.current.style.overflowY = 'hidden';
        }
        else {
            rootRef.current.style.overflowY = '';
        }
    }, [props.open])

    const switchVariants = () => {
        switch (props.variant) {
            case "notify":
                return (
                    <StyledStandardModal
                        confirmBackgroundColor={props.confirmBackgroundColor}
                        iconColors={props.iconColors}
                    >
                        <div className='div-icons'>
                            {props.icon && <div className="first-icon">{props.icon}</div>}
                            <CloseIcon
                                className="close-icon"
                                onClick={props.onClose}
                            />
                        </div>
                        {props.title &&
                            <p>{props.title}</p>
                        }
                        <label>
                            {props.description}
                        </label>
                        <div className='buttons'>
                           {/*  {props.buttonCancel &&
                             <Button
                                    variant="notify"
                                    className='btn-cancel'
                                    onClick={props.onClose}
                                >
                                    {props.buttonCancel}
                                </Button>
                            }
                            {props.buttonConfirm &&
                                <Button
                                    variant="login"
                                    className='btn-confirm'
                                    onClick={props.btnConfirmClick}
                                >
                                    {props.buttonConfirm}
                                </Button>
                            } */}
                        </div>
                    </StyledStandardModal>
                )
            case "customized":
                return (
                    <div className="customized-modal">
                        {props.children}
                    </div>
                )
        }
    }

    if (props.open) {
        return (
            <StyledDynamicModal
                onClick={handleClickOutside}
                className={props.className}
            >
                <div className='modal-container' ref={ref}>
                    {switchVariants()}
                </div>
            </StyledDynamicModal>
        )
    }
    else {
        return <></>
    }

}
