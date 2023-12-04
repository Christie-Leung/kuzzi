import NavBar from "@/components/navbar"

export default async function SetupLayout({
  children
}: {
  children: React.ReactNode
}) {


  return (
    <>
      <NavBar />
      {children}
    </>
  )
}