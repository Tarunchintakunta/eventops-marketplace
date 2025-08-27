import { Metadata } from 'next';




export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'How EventOps Works - Simple Steps to Perfect Events',
  description: 'Learn how EventOps makes event planning simple with our 3-step process: discover, compare, and book trusted vendors.',
  openGraph: {
    title: 'How EventOps Works - Simple Steps to Perfect Events',
    description: 'Learn how EventOps makes event planning simple with our 3-step process.',
  },
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          How It Works
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Coming soon...
        </p>
      </div>
    </div>
  );
}
