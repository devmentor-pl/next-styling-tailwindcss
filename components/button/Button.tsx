import styles from './button.module.scss';

export default function Button(
    { text, cl = 'btn' }: { text: string, cl?: string }
) {
    return (
        <button className={ styles[cl] }>
            {text}
        </button>
    );
}