// app/button/page.tsx
import styles from './page.module.scss';

import Button from '@/components/button/Button';

export default function ButtonPage() {
    return <div className={ styles.container }>
        <Button text="click me"/>
        <Button text="lighten" cl="btn-lighten"/>
    </div>
}