import classnames from 'classnames';
import { Direction } from '../../constants/components';
import { Content } from './Content';
import styles from './Card.module.scss';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export function Card({
    children,
    className,
    ...extraProps
}: CardProps) {
    return (
        <Content
            className={classnames(
                styles.card,
                className
            )}
            direction={Direction.VERTICAL}
            {...extraProps}
        >
            {children}
        </Content>
    );
}