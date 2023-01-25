'use client'; // Error components must be Client components

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    const router = useRouter();
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div>
            <h2>Something went wrong!</h2>
            <button
                className="border rounded-lg p-2 bg-green-500 text-white font-bold hover:bg-green-600"
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => router.back()
                }
            >
                Back to Previous
            </button>
        </div>
    );
}
