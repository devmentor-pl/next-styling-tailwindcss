// components/menu/Menu.tsx
import clsx from 'clsx';
import styles from './menu.module.css';

export default function Menu(props: MenuProps) {
    const { menuList, withShadow } = props;

    return <ul className={ 
        clsx(styles.list, withShadow && styles.shadow) 
    }>
        {menuList.map((item, index) => (
            <li className={ styles.item } key={ index }>
                <a 
                    className={ styles.link } 
                    href={ item.url }>
                    { item.text }
                </a>
            </li>
        ))}
    </ul>
}

interface ItemProps {
    text: string;
    url: string;
}

interface MenuProps {
    menuList: ItemProps[];
    withShadow?: boolean;
}