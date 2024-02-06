import NavBar from "@/components/navbar"
import NavBubble from "@/components/navbubble"
import NavMenu from "@/components/navmenu"

export default async function SetupLayout({
  children
}: {
  children: React.ReactNode
}) {


  return (
    <>
      <NavMenu />
      {children}
    </>
  )
}