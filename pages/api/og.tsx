import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
    runtime: 'edge',
};

export default function handler(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);

        // ?title=<title>
        const hasTitle = searchParams.has('title');
        const title = hasTitle
            ? searchParams.get('title')
            : 'WSYNC Blog';

        return new ImageResponse(
            (
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        background: '#04375d',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div style={{
                        position: 'absolute',
                        left: 0,
                        fontSize: '3rem',
                        background: '#ea4335',
                        padding: '1rem',
                        borderRadius: '10px',
                        transform: 'rotate(280deg)',
                        fontWeight: 'bold',
                        color: 'black',
                        textTransform: 'capitalize',
                        textAlign: 'center',
                    }}>
                        {title}
                    </div>
                    <div style={{
                        position: 'absolute',
                        right: 50,
                        fontSize: '3rem',
                        background: 'white',
                        padding: '1rem',
                        borderRadius: '10px',
                        transform: 'rotate(280deg)',
                        fontWeight: 'bold',
                        color: 'black',
                        textTransform: 'capitalize',
                        textAlign: 'center',
                    }}>
                        {title}
                    </div>
                    <div style={{
                        position: 'absolute',
                        top: 120,
                        fontSize: '3rem',
                        background: 'goldenrod',
                        padding: '1rem',
                        borderRadius: '10px',
                        transform: 'rotate(365deg)',
                        fontWeight: 'bold',
                        color: 'black',
                        textTransform: 'capitalize',
                        textAlign: 'center',
                    }}>
                        {title}
                    </div>
                    <div style={{
                        position: 'absolute',
                        bottom: 120,
                        fontSize: '3rem',
                        background: '#34a853',
                        padding: '1rem',
                        borderRadius: '10px',
                        transform: 'rotate(355deg)',
                        fontWeight: 'bold',
                        color: 'black',
                        textTransform: 'capitalize',
                        textAlign: 'center',
                    }}>
                        {title}
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            },
        );
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}