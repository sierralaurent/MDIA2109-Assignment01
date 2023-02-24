import {useState} from 'react'
import Image from 'next/image'
import styles from '@/components/Card/card.module.css'

const Card = () => {
    const [showPopup, setShowPopup] = useState(0);

    return (
        <div>
            <button className={styles.butt}
                onClick={() => setShowPopup(true)}
                >
                    <img src='/icons/menu-icon.png' width={60}></img>
            </button>

            {
                showPopup ? (
                    <div className={styles.menubutton}>
                        <h1 className={styles.x} onClick={() => setShowPopup(0)}>
                            X
                        </h1>
                        <img src="public/background-images/menuBackground.png" width={200} className={styles.background}></img>

                        <div className={styles.menu}>
                            <h3>Home</h3>
                            <h3>About</h3>
                            <h3>Contact</h3>
                        </div>


                        </div>
                ) : null
            }
        </div>
    );
};

export default Card;