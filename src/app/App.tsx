import s from './App.module.css';
import Facebook from '../shared/assets/icons/facebook.svg';
import image from '../shared/assets/images/IMAGE.jpg';

export const App = () => {
    return (
        <div>
            <picture>
                <source srcSet={''} type="image/webp" />
                <source srcSet={''} type="image/jpeg" />
                <img src="" alt="some img" />
            </picture>

            <div>
                <h3>Image</h3>
                <img width={100} height={100} src={image} alt={'image'} />
            </div>

            <div>
                <Facebook height={30} width={30} stroke={'black'} className={s.svg} />
            </div>
        </div>
    );
};
