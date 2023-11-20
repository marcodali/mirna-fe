'use client'

import {
    Header,
    Footer,
} from '@/components'

import '../app/globals.css'

export default function Privacy() {
    return (
        <div className="min-h-[1vh] p-[0.1rem]">
            <main className="p-10">
                <Header showSampleProject={false} />
                <h1 className="text-xl font-bold">Privacy Policy</h1>
                <p className="mt-4">
                    Effective date: November the 1st, 2023
                </p>
                <section className="mt-6">
                    <h2 className="text-lg font-semibold">1. Introduction</h2>
                    <p>
                        Welcome to Mirna.cloud. We respect your privacy and are committed to protecting your personal data. This Privacy Policy will inform you as to how we look after your personal data when you visit our site (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                    </p>
                </section>
                <section className="mt-6">
                    <h2 className="text-lg font-semibold">2. Data We Collect</h2>
                    <p>
                        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                    </p>
                    <ul className="list-disc ml-6 mt-2">
                        <li>Identity Data includes first name, last name and but not limited to username.</li>
                        <li>Contact Data includes billing address, email address and but not limited to telephone numbers.</li>
                        <li>Technical Data includes internet protocol (IP) address, your login data and but not limited to browser type and version.</li>
                        <li>Usage Data includes information about how you use our website, products and services.</li>
                        <li>Marketing and Communications Data includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
                    </ul>
                </section>
                <section className="mt-6">
                    <h2 className="text-lg font-semibold">3. How We Use Your Data</h2>
                    <p>
                        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:

                    </p>
                    <ul className="list-disc ml-6 mt-2">
                        <li>To register you as a new customer.</li>
                        <li>To manage our relationship with you.</li>
                        <li>To enable you to partake in a prize draw, competition or complete a survey.</li>
                        <li>To improve our website, products/services, marketing, customer relationships and experiences.</li>
                    </ul>
                </section>
                <section className="mt-6">
                    <h2 className="text-lg font-semibold">4. Data Security</h2>
                    <p>
                        We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. We also limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions, and they are subject to a duty of confidentiality.
                    </p>
                </section>
                <section className="mt-6">
                    <h2 className="text-lg font-semibold">5. Your Legal Rights</h2>
                    <p>
                        Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
                    </p>
                </section>
                <section className="mt-6">
                    <h2 className="text-lg font-semibold">6. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us:

                    </p>
                    <ul className="list-disc ml-6 mt-2">
                        <li>Email: hola[at]durazno[dot].io</li>
                        <li>Address: Monterrey 136, Roma Nte, CDMX</li>
                    </ul>
                </section>
            </main>
            <Footer />
        </div>
    )
}
