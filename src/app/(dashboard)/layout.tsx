import { Header } from "../components/header"

type DashboardLayoutProps = {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Header />
        {children}
      </div>
    </>
  )
}
