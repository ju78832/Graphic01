import Home from "@/components/Home";
import Model from "@/components/Model";
import Types from "@/components/Types";
import Footbar from "@/components/footbar";


export default function page() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Home/>
      <Model/>
      <Types/>
      <Footbar/>

   </main>
  )
}
