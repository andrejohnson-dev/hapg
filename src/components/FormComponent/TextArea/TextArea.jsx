import { Label } from "../Label/Label";
import { useReducer, useEffect } from "react";
import { validate } from '../../../utils/validators';
import { Feedback } from "../Feedback/Feedback";
import styles from './TextArea.module.css'
import { IconComponent } from "../../Icon/IconComponent";

const textAreaReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
        case 'TOUCH':
            return {
                ...state,
                isTouched: true
            }
            case 'SET_INITIAL': // New case for setting initial value and validity
            return {
                ...state,
                value: action.val,
                isValid: action.isValid
            };

        default:
            return state;
    }
}

export const TextArea = ({
    type = 'text',
    id,
    name,
    rows,
    labelName,
    errorText,
    validators,
    secondaryLabel,
    iconType,
    onIconClick,
    onInput,
    noTouchValidation,
    initialValue = '',
    initialIsValid = false,

}) => {

    const [inputState, dispatch] = useReducer(textAreaReducer,
        {
            // value: '',
            // isValid: false,
            value: initialValue,
            isValid: initialIsValid,
            isTouched: false
        }
    );

    const { value, isValid } = inputState;

    useEffect(() => {
        dispatch({
            type: 'SET_INITIAL',
            val: initialValue,
            isValid: initialIsValid
        });
    }, [initialValue, initialIsValid]);

    useEffect(() => {
        onInput(id, value, isValid);
    }, [id, value, isValid, onInput]);

    const changeHandler = (event) => {
        dispatch({
            type: 'CHANGE',
            val: event.target.value,
            validators: validators
        });
    }
    const touchHandler = () => {
        dispatch({
            type: 'TOUCH',
        });
    }

    return (
      
            <Label
                id={id}
                labelName={labelName}
                secondaryLabel={secondaryLabel}
            >
                <div className={styles.inputContainer}>
                    <textarea
                        type={type}
                        id={id}
                        name={name}
                        value={inputState.value}
                        onChange={changeHandler}
                        onBlur={noTouchValidation === true ? undefined : touchHandler}
                        className={styles.input}
                        rows={rows || 3}
                    />
                    {
                        iconType &&
                        <div className={styles.inputIcon}>
                            <IconComponent onClick={onIconClick} iconType={iconType} />
                        </div>
                    }

                </div>
                {!inputState.isValid && inputState.isTouched && <Feedback feedbackType='error' feedbackMessage={errorText} />}
            </Label>
 
    );
}