export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <h3>Include shared UI here e.g. a header or sidebar</h3>
        <nav></nav>
   
        {children}
      </section>
    )
  }