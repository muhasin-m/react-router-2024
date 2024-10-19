import { Outlet } from "react-router-dom"

const JobsLayout = () => {
  return (
    <div>
        <h2>Job Openings</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, earum?</p>
        <Outlet/>
    </div>
  )
}
export default JobsLayout