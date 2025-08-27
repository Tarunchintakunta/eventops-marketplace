import { Metadata } from 'next';



export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'About EventOps - India&apos;s Leading Event Contractor Marketplace',
  description: 'Learn about EventOps, our mission to revolutionize event planning in India, and how we connect customers with verified vendors for perfect events.',
  openGraph: {
    title: 'About EventOps - India&apos;s Leading Event Contractor Marketplace',
    description: 'Learn about EventOps, our mission to revolutionize event planning in India.',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          About EventOps
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Coming soon...
        </p>
      </div>
    </div>
  );
}
