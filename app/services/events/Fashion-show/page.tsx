import Link from 'next/link';

export default function AboutPage(): JSX.Element {
    return (
        <main style={{ padding: 24, fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial' }}>
            <h1>About</h1>
            <p>A simple about page.</p>
            <p>
                <Link href="/">← Back to home</Link>
            </p>
        </main>
    );
}