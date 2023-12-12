import React, { useCallback, useState } from 'react';
import image from '@/shared/assets/images/IMAGE.jpg';
import Facebook from '@/shared/assets/icons/facebook.svg';
import s from '@/app/App.module.css';

const Button = () => {
    const [state, setState] = useState(1);

    const handle = useCallback(() => {
        setState((prevState) => prevState + 1);
    }, []);

    return (
        <div>
            <picture>
                <source srcSet={''} type="image/webp" />
                <source srcSet={''} type="image/jpeg" />
                <img src="" alt="some img" />
            </picture>

            <div onChange={handle}>
                <h3>Image</h3>
                <img width={100} height={100} src={image} alt={'image'} />
            </div>

            <div>
                <Facebook
                    height={30}
                    width={30}
                    stroke={'black'}
                    className={s.svg}
                    fill={'red'}
                    id={'111'}
                />
            </div>
        </div>
    );
};

export default Button;
