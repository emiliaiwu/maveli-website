import { Outlet } from "react-router-dom"


const Main = () => {
  return (
      <main className="mt-20">
          <Outlet/>
    </main>
  )
}

export default Main