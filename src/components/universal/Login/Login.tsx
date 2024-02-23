import { useSession, signIn, signOut } from 'next-auth/react';
import {IoMdLogOut, IoMdLogIn} from 'react-icons/io';
import styles from './Login.module.scss';
import { Alignment, Animations, Sizes } from '../../../constants/components';
import { Button } from '../../common/Button/Button';
import { Avatar } from '../../common/Avatar';
import { Popover, PopoverItem } from '../../common/Popover';
import { IconButton } from '../../common/Button/IconButton';
import { CreatePopover } from './CreatePopover';

export default function Login() {
    const { data: session } = useSession();

    if (session) {
        return (
            <>
                <CreatePopover/>
                <Popover
                    alignment={Alignment.RIGHT}
                    toggle={<Button
                        animation={Animations.SWAP}
                        className={styles.discord}
                        size={Sizes.MEDIUM}
                    >
                        <Avatar src={session.user.image} />
                        {session.user.name}
                    </Button>}
                >
                    <PopoverItem>
                        Profile
                    </PopoverItem>
                    <PopoverItem
                        icon={IoMdLogOut}
                        onClick={() => signOut()}
                    >
                        Sign out
                    </PopoverItem>
                </Popover>
            </>
        )
    }

    return (
        <IconButton
            animation={Animations.SWAP}
            className={styles.discord}
            size={Sizes.MEDIUM}
            onClick={() => signIn('discord')}
            icon={IoMdLogIn}
        >
            Sign in
        </IconButton>
    );
}