import {useState,useEffect} from 'react';
import classNames from 'classnames/bind';
import styles from './Form.module.scss';

const cx = classNames.bind(styles);

function Form() {
    const init = {name:"",lastName:"",email:"",message:""};
    const [isApply,setIsApply] = useState(false);
    const [formValue,setFormValue] = useState(init);
    const [formError,setFormError] = useState({});
    const [isSubmit,setIsSubmit] = useState(false);
   // const [message,setMessage] = useState('');
    

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormValue({...formValue,[name]:value});
    }

    useEffect(()=> {
        if(Object.keys(formError).length === 0 && isSubmit) {
            console.log(formValue);
            //setMessage("Thank for applying");
            setIsApply(true);
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[formError]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError(validate(formValue));
        setIsSubmit(true);
    }

    const validate = (values) => {
        const errors = {};
        const regex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/i;
        if(!values.name) {
            errors.name = 'This field is required';
        }
        if(!values.lastName) {
            errors.lastName = 'This field is required';
        }
        if(!values.email) {
            errors.email = 'This field is required';
        } else if(!regex.test(values.email)) {
            errors.email = 'Please enter a valid email address';
        }
        if(!values.message) {
            errors.message = 'This field is required';
        }
        return errors;
    }
    
    return (
        <div className={cx('container')}>
            {isApply === false ? <form onSubmit={handleSubmit}>
                <div className={cx('field')}>
                    <label>Name*</label>
                    <input 
                        type="text" 
                        value={formValue.name} 
                        name="name"
                        placeholder="Your name" 
                        onChange={handleChange} 
                        autoComplete="off"
                    />
                </div>
                <p>{formError.name}</p>
                <div className={cx('field')}>
                    <label>Last name</label>
                    <input
                        type="text"
                        value={formValue.lastName}
                        name="lastName"
                        placeholder="Your last name"
                        onChange={handleChange}
                        autoComplete="off"

                    />
                </div>
                <div className={cx('field')}>
                    <label>Your email*</label>
                    <input
                        type="text"
                        name="email"
                        value={formValue.email}
                        placeholder="Your email address"
                        onChange={handleChange}
                        autoComplete="off"
                    />
                </div>
                <p>{formError.email}</p>
                <div className={cx('field')}>
                    <label>Message*</label>
                    <textarea className={cx('message')} placeholder="Enter your message" value={formValue.message} onChange={handleChange} name="message"></textarea>
                </div>
                <p>{formError.message}</p>
               
                <button className={cx('btn','btn-submit')}>Submit</button>
            </form> : <div className={cx('title')}>Thank you for applying</div>}
            
        </div>
    );
}

export default Form;