import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
})

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <h3 className={roboto.className}>Include shared UI here e.g. a header or sidebar</h3>
        <nav></nav>
   
        {children}
      </section>
    )
  }