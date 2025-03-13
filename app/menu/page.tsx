import Menu from '@/components/menu';

const menuList = [
    { url: '/', text: 'home' },
    { url: '/contact', text: 'contact' }
];

export default function MenuPage() {
    return <>
        <h2>Menu 1</h2>
        <Menu menuList={menuList} withShadow={true} />
        <h2>Menu 2</h2>
        <Menu menuList={menuList} />
    </>
}