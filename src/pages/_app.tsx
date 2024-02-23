import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import Layout from '../components/universal/Layout';
import { COLORS } from '../constants/themes';

export default function SilvyApp({ Component, pageProps: { session, ...pageProps } }) {
    const router = useRouter();

    return (
        <SessionProvider session={session}>
            <Layout>
                {router.isReady && (
                    <Component {...pageProps} />
                )}

                <style jsx global>{`
                    @font-face {
                        font-family: 'Whitney';
                        src: url('/fonts/whitney-2/whitneymedium.otf');
                        font-weight: 400;
                        font-style: normal;
                    }

                    :root {
                        --silvy-primary-color: ${COLORS.primary};
                        --silvy-secondary-color: ${COLORS.secondary};
                        --silvy-tertiary-color: ${COLORS.tertiary};
                        --silvy-header-color: ${COLORS.header};
                        --silvy-body-color: ${COLORS.body};
                        --silvy-darken-color: ${COLORS.darken};
                        --silvy-lighten-color: ${COLORS.lighten};
                        --silvy-off-white: #fafafa;
                        --silvy-white: white;
                    }

                    html,
                    body {
                        padding: 0;
                        margin: 0;
                        font-family: 'Open Sans', sans-serif;
                        background: #2f3640;
                        color: #f492a5;
                    }

                    * {
                        box-sizing: border-box;
                    }
                    
                    a {
                        color: inherit;
                        text-decoration: none;
                    }
                `}</style>
            </Layout>
        </SessionProvider>
    );
}
